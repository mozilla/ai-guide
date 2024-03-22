#!/bin/bash

$root_path = "templates/ai/content"

# test if command `marked` exists
if ! command -v marked &> /dev/null
then
    echo "marked could not be found"
    echo "Installing marked..."

    npm install -g marked
fi

find $root_path -name "*.md" | while read -r file; 
    do echo "Building $file"; 
    marked -o "${file%.md}-content.html" "$file";
done
