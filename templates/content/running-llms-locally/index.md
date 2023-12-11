## Running LLMs Locally

#### What is a llamafile?

As of the now, the absolute best and easiest way to run open-source LLMs locally is to use Mozilla's new [llamafile](https://github.com/Mozilla-Ocho/llamafile) project.

llamafiles are executable files that run on six different operating systems (macOS, Windows, Linux, FreeBSD, OpenBSD and NetBSD). They bundle up a single model's weights along with an inference environment into **A SINGLE FILE** (so amazing!). 

You can choose between a "server" version (API plus web interface) or a "command-line" version (similar to Meta's original LLaMa interface on CLI). To learn more about this project, here's the [README](https://github.com/Mozilla-Ocho/llamafile) and a [long post about it from Simon Willison](https://simonwillison.net/2023/Nov/29/llamafile/).

For our work, we will be spending some time with a small 7B parameter model, _Mistral\_7B_, which reportedly shows stellar performance for a 7B model. 

#### Installing Mistral_7B

Let's grab the llamafile first from the creator of llamafile [Justine Tunney](https://justine.lol)'s [Huggingface](https://huggingface.co/jartine/mistral-7b.llamafile). We'll use the command line model to showcase some features.

Download the model by [tapping this link](https://huggingface.co/jartine/mistral-7b.llamafile/resolve/main/mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile?download=true).

llamafiles are a combination of Justine's [cosmopolitan](https://justine.lol/cosmopolitan/index.html) (native single-file executables on any platform), combined with the community's amazing work on [llama.cpp](https://github.com/ggerganov/llama.cpp), a C++ version of Meta's LLaMa that can run usably on CPUs instead of GPUs created by [ggerganov](https://github.com/ggerganov/llama.cpp). 

Mistral-7B is a model created by French startup [Mistral AI](https://mistral.ai/company/), with open weights and sources. Since it's based on the LLaMa architecture, we are able to run inference on it locally using llama.cpp, which then enables a llamafile. 

The model we're downloading is the `instruct`-tuned version. This model is tuned to respond by following a system prompt with instructions.

To run, it's as simple as running these commands in your terminal:
```
mv mistral-7b-instruct-v0.1-Q4_K_M-main.llama mistral-7b-instruct.llamafile 

chmod +x mistral-7b-instruct.llamafile

./mistral-7b-instruct.llamafile --interactive-first
```

This makes the llamafile executable, then kicks off the model with an interactive prompt. You'll see that the model is loaded into memory using a 'memory map' - you'll need roughly 5GB of RAM to enable usable inference. A GPU is not mandatory since llama.cpp is designed to utilize all available CPUs to maximize performance.

Interactive mode enables you to chat with the bot like you normally do with an LLM chat interface, but it's quite barebones. Using the `server` llamafile instead adds an option to use a self-hosted web UI with more features and OpenAI-compatible API at [https://localhost:8080](https://localhost:8080)


#### Other models

Here are other interesting llamafiles:
- [LLaVa v1.5 7B](https://huggingface.co/jartine/llava-v1.5-7B-GGUF/resolve/main/llava-v1.5-7b-q4-server.llamafile?download=true): a compelling new multi-modal (takes image input) model
- [WizardCoder 7B](https://huggingface.co/jartine/wizardcoder-13b-python/blob/main/wizardcoder-python-13b-server.llamafile): a code-generation model

Our next section will help us compare open models for our particular use-case.

<div class="mt-10">
    <a class="button-next-page" href="/content/comparing-open-llms/index.html">Comparing Open LLMs</a>
</div>

<div class="mt-3">
    <a class="edit-this-page" target="_"  href="https://github.com/mozilla/ai-guide/edit/main/templates/content/running-llms-locally/index.md">contribute to this page on Github ></a>
</div>
