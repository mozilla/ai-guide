#!/bin/bash -x

SOURCE_PATH="templates/content"
WRITE_PATH=$SOURCE_PATH # replace if you want to write to a different path
mkdir -p $WRITE_PATH
echo ">>>> Building AI Guide from $SOURCE_PATH..."

# test if command `marked` exists
if ! command -v marked &> /dev/null
then
    echo "marked could not be found"
    echo "Installing marked..."
    npm install -g marked@^6.0.0

    if ! command -v marked &> /dev/null
    then
        echo "Failed to install marked@^6.0.0."
        echo "Please install marked@^6.0.0 and try again"
        exit 1
    fi
fi

if ! command -v jupyter-nbconvert &> /dev/null
then
    echo "jupyter-nbconvert could not be found"
    echo "Installing jupyter & jupyter-nbconvert..."
    pip install jupyter

    if ! command -v jupyter-nbconvert &> /dev/null
    then
        echo "Failed to install jupyter-nbconvert."
        echo "Please install jupyter & jupyter-nbconvert and try again"
        exit 1
    fi
fi

if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    echo "Installing jq..."
    apt-get install -y jq

    if ! command -v jq &> /dev/null
    then
        echo "Failed to install jq."
        echo "Please install jq and try again"
        exit 1
    fi
fi

find $SOURCE_PATH -name "*.md" | while read -r file; 
    do echo ">>>> Building $file"; 
    echo
    NEW_PATH="${file/$SOURCE_PATH/$WRITE_PATH}"
    mkdir -p $(dirname $NEW_PATH)
    marked -o "${NEW_PATH%.md}-content.html" "${file}"
    echo 
    node tools/build_ai_guide_content_pages.js "${file}"
done

find $SOURCE_PATH -name "*.ipynb" | while read -r file;
    do echo ">>>> Building notebook $file";
    
    NP="${file/$SOURCE_PATH/$WRITE_PATH}"
    echo NEW_PATH=$(dirname "${NP}")
    echo 

    NEWNB="${file/.ipynb/-fixed.ipynb}"
    OUTPUT_FILENAME=$(basename "${file/.ipynb/.html}")
    jq -M 'del(.metadata.widgets)' "${file}" > "${NEWNB}"
    jupyter-nbconvert --to html --output-dir "${NEW_PATH}" --output "${OUTPUT_FILENAME}" "${NEWNB}" --CSSHTMLHeaderPreprocessor.style=nord
    rm "${NEWNB}"
    echo 
done
