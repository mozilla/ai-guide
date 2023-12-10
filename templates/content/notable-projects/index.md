<section id="notable-projects">

## Notable Projects 
Submit a project you love to <a href='mailto:ai-guide@mozilla.com'>ai-guide@mozilla.com</a>.

#### Complete LLM Solutions
These projects offer a full-stack chatbot solution, meaning that there is at least an inference run-time and a UI for interacting with it. Actual feature sets may vary rather wildly beyond that.

##### [GPT4All](https://gpt4all.io)
License: MIT | Built with: gpt4all, llama.cpp

A one-click installer (for Windows, MacOS, and Ubuntu) for a locally-running chatbot with a native UI client. Probably the easiest to use and best all-around open source chatbot app. Supports a wide variety of model architectures (including LLaMA, LLaMA 2, GPT-J, MPT, and Falcon), makes it easy to download weights files, supports retrieval augmented generation (i.e. asking questions across local private documents), offers both CPU and GPU inference, and is highly configurable. It’s part of the overall GPT4All project from Nomic.ai. 

##### [privateGPT](https://github.com/imartinez/privateGPT)
License: Apache 2.0 | 
Built with: gpt4all, llama.cpp, langchain, sentence-transformers, chroma

privateGPT is a chatbot project focused on retrieval augmented generation. It runs from the command line, easily ingests a wide variety of local document formats, and supports a variety of model architecture (by building on top of the gpt4all project).

##### [Ollama](https://github.com/jmorganca/ollama)
License: MIT | 
Built with: llama.cpp, and a bunch of original Go code

Ollama provides a one-click chatbot installer for MacOS, with version for Windows and Linux expected in the future. It runs from the command line and lacks a built-in native GUI interface (although one is available). It also lacks many of the features offered by GPT4All. But it’s extremely easy to get working, and it runs quite well on consumer-grade Apple Silicon-based MacBooks. Ultimately, it’s similar to running llama.cpp yourself, just easier.

##### [text-generation-webui](https://github.com/oobabooga/text-generation-webui)
License: AGPL 3.0

This project is probably the most popular open source Web-based chatbot front-end, and comes paired with most of the major inference runtimes.  It provides most of the user-facing functionality found in the ChatGPT client, although with a different UI metaphor. This project has quite a lot of users and quite a number of forks, so it’s one to keep an eye on.


#### Inference runtimes
These projects provide tools for running LLMs for text inference activities. They roughly bifurcate on a “LLaMA vs. Hugging Face Transformers” axis. Some are command line tools, whereas others are meant to be used in a server capacity.


##### [llama.cpp](https://github.com/ggerganov/llama.cpp)
License: MIT | 
Built with: GGML, a model quantization framework, recently replaced by GGUF

llama.cpp is perhaps the most noteworthy and impactful project in open source LLM tooling to date. It enables users to do inference generation with LLaMA-architecture models in a way that is performant on consumer-grade hardware. It accomplishes this by quantizing model weights files, reducing their size and thus their memory and computational requirements. This, along with other tricks, makes it possible to run these models just with a CPU. Originally optimized for Apple Silicon, llama.cpp has grown to support Intel, as well as GPUs from Nvidia and Apple. As the underpinning of many other OSS LLM projects, this project remains highly influential. As evidence, the project maintainer recently made a major breaking change (from GGML- to GGUF-format weights) and most developers opted to come along for the ride. 


##### [llama-cpp-python](https://github.com/abetlen/llama-cpp-python)
License: MIT | 
Built with: llama.cpp

This project wraps llama.cpp to provide Python bindings. Perhaps even more significantly, it exposes an API endpoint that mimics the OpenAI API signature. This neat trick makes it relatively easy to take any software that integrates w/ the OpenAI API and “swap it out” for a locally-running open source LLM. 


##### [transformers](https://github.com/huggingface/transformers)
License: Apache 2.0 | 
Built with: Hugging Face Transformers

Hugging Face’s implementation of Transformers has proven to be a critical enabling technology for open source machine learning developers. It makes it easy to, often with just a few lines of code, execute a huge variety of models. HF’s site features literally thousands of models, many of which are useful in cases beyond the content of generative chatbots. With the transformers library, they are all within easy reach. However, transformers is a GPU-centric library; it does not offer the kind of CPU-based computational frugality of something like llama.cpp.

##### [llm.rs](https://github.com/rustformers/llm)
License: Apache 2.0 + MIT |

Essentially a Rust implementation of llama.cpp, this young project leverages Rust’s unique advantages and already has a small ecosystem growing up around it.

##### [Text-generation-inference](https://github.com/huggingface/text-generation-inference)
License: Apache 2.0 |
Built with: transformers

This project is the open source version of the software that powers Hugging Face’s Inference Endpoints service. As such, it’s a production-ready inference-as-a-service API that can be used to run any transformers-compatible model.

##### [VLLM](https://github.com/vllm-project/vllm)
License: Apache 2.0 | 
Built with: transformers

This recent project essentially offers a higher-performance take on text-generation-inference. That is, it provides an inference engine that is considerably faster than regular old transformers. It can also act as a server by exposing an OpenAI-compatible API (much like llama-cpp-python does). There’s been a fair amount of buzz about this project lately because it offers a relatively plug-and-play means of improving performance within the Hugging Face ecosystem.


##### [llm](https://github.com/simonw/llm)
License: Apache 2.0

This is a command line tool that makes it easy to experiment with a variety of open source LLMS and OpenAI tools, both via the same tool. 


##### [MLC](https://github.com/mlc-ai/mlc-llm)
License: Apache 2.0

MLC is a relatively recent development that could merit ongoing attention. This project aims to enable “native deployment” of LLMs; this means running LLMs in a manner optimized to a wide variety of hardware platforms, including desktop/laptops, phones, and environments that lack GPUs. It’s still in its early days, but it’s already seeing some uses, including as a plug-in for llm.


##### [gpt4all-backend](https://github.com/nomic-ai/gpt4all/tree/main/gpt4all-backend) and [gpt4all-api](https://github.com/nomic-ai/gpt4all/tree/main/gpt4all-api)
License: MIT

Note that the GPT4All one-click installer is based on underlying libraries that can be used to power an inference server. It can even expose an OpenAI-compatible API endpoint. A number of OSS projects embed these libraries as a way to easily get multi-architecture LLM support.



#### Retrieval augmented generation
These projects support retrieval augmented generation use cases for chatbots, wherein custom external documents can be used to augment a chatbot’s responses. This often requires the use of similarity searches across vector embedding databases.


##### [FAISS](https://github.com/facebookresearch/faiss)
License: MIT

This project comes from Facebook and provides an easy-to-use mechanism for storing vector embeddings and then searching across them. It has proven popular with many open source developers and is rather commonly found in tutorials explaining how to do retrieval augmented generation.


##### [Chroma](https://github.com/chroma-core/chroma)
License: Apache 2.0

Probably the most popular open source vector database, Chroma is used by a wide variety of opens source and commercial AI products. It has a robust feature set, is easy to use and deploy, and integrates with other popular tools (like LangChain; see below).


##### [Weviate](https://github.com/weaviate/weaviate)
License: BSD 3-Clause

Weviate is an alternative to Chroma that is written primarily in Go (vs. Python for Chroma) and may offer better performance while boasting similar integrations.


##### [pgvector](https://github.com/pgvector/pgvector)
License: PostgreSQL license?

This project enables you to use the mature and beloved PostgreSQL database as a vector embeddings solution. This is included in the list not because we have much experience working with it, but simply because it represents an interesting alternative solution for developers who prefer to stick with tools they already know and have deployed in production.


##### [llama_index](https://github.com/jerryjliu/llama_index)
Licensed: MIT | 
Built with: langchain

LlamaIndex offers a robust set of integrations to data sources. This makes it easier to harvest the data that you want to provide to your chatbot, and to keep it updated. This project is built on top of LangChain (see below).

##### [LanceDB](https://lancedb.github.io/lancedb/)
Licensed: Apache

LanceDB is a local high-performance vector database written in Rust. A hidden gem similar to SQLite. 


#### Orchestration
Orchestration tools help developers compose LLM-based applications by integrating and coordinating multiple tools and models.


##### [LangChain](https://github.com/langchain-ai/langchain)
License: MIT

LangChain is the leading open source LLM orchestration tool. A number of open source AI projects utilize LangChain under the covers, so its influence has grown steadily over the past year. There is a growing faction of open source developers who believe that LangChain is overly complex and attempts to do too much. But even if one subscribes to that belief, LangChain remains a useful resource as a way to learn and understand a variety of LLM development best practices for common use cases.


##### [simpleaichat](https://github.com/minimaxir/simpleaichat)
License: MIT

Created by a frustrated LangChain user as a simpler alternative, this project has some early buzz and is worth watching. It doesn’t offer nearly as much functionality as LangChain, but it’s arguably much easier to learn and use.

##### [Guardrails AI](https://github.com/guardrails-ai/guardrails)
License: Apache 2.0

Guardrails adds AI safety and control mechanisms to your LLM, giving you the ability to validate model output formats and content, and to automatically (and invisibly to the end user) re-query the model when its responses don’t meet your expectations or needs.


#### Front-ends
These projects provide chatbot-style user interfaces on top of LLM inference engines.

##### [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui)
License: MIT

This project is an excellent carbon copy of the ChatGPT Web interface. It implements the OpenAI API, which means you can easily point it at most of the interference runtimes mentioned earlier in this document.

<div class="">
    <a class="button-next-page" href="/content/ai-basics">AI Basics</a>
</div>

<div class="mt-3">
    or 
    <a class="edit-this-page" href="https://github.com/mozilla/ai-guide/edit/main/templates/content/llms-101/index.md">contribute to this page on Github ></a>
</div>

</section>
