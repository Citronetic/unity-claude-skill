# Sentis overview

Sentis is a neural network inference library for Unity. It lets you import trained neural network models into Unity and run them in real-time with your target device’s compute resources, such as central processing unit (CPU) or graphics processing unit (GPU).

Sentis supports real-time applications across all Unity-supported platforms.

The package is officially released and available to all Unity users through the **Package Manager**.

##### Tip

Prior experience with machine learning frameworks like [TensorFlow](https://www.tensorflow.org/) or [PyTorch](https://pytorch.org/) is helpful, but not required. It can make it easier to understand how to work with models in Sentis.

| Section | Description |
| --- | --- |
| Get started | Learn how to install Sentis, explore sample projects, and understand the Sentis workflow. |
| Create a model | Create a runtime model by importing an ONNX model file or using the Sentis model API. |
| Run a model | Create input data for a model, create an engine to run the model, and get output. |
| Use Tensors | Learn how to get, set, and modify input and output data. |
| Profile a model | Use Unity tools to profile the speed and performance of a model. |

## Supported platforms

Sentis supports [all Unity runtime platforms](https://docs.unity3d.com/Documentation/Manual/PlatformSpecific.html).

Performance might vary based on:

- Model operators and complexity

- Hardware and software platform constraints of your device

- Type of engine used

For more information, refer to [Models](models-concept.html) and [Create an engine](create-an-engine.html).

## Supported model types

Sentis supports most models in Open Neural Network Exchange (ONNX) format with an [opset version](https://github.com/onnx/onnx/blob/main/docs/Versioning.md#released-versions) between 7 and 15. For more information, refer to [Supported models](supported-models.html) and [Supported ONNX operators](supported-operators.html).

Sentis supports most models in [LiteRT (formerly TensorFlow Lite)](https://ai.google.dev/edge/litert) format. For more information, refer to [Supported LiteRT operators](supported-litert-operators.html).

Sentis supports most models (exported programs) in [PyTorch](https://docs.pytorch.org/tutorials/beginner/saving_loading_models.html) format if they are decomposed to [Core ATen IR operators](https://docs.pytorch.org/docs/stable/torch.compiler_ir.html). For more information, refer to [Supported PyTorch operators](supported-torch-export-operators.html).

## Places to find pre-trained models

There are various sources to find pre-trained models, which might either be available in the ONNX format, LiteRT format, or in a format that you can convert. Examples include:

- [Hugging Face](https://huggingface.co/models)

- [Kaggle Models](https://www.kaggle.com/models) (Formerly TensorFlow Hub)

- [PyTorch Hub](https://pytorch.org/hub/)

- [Model Zoo](https://github.com/onnx/models)

- [XetData](https://github.com/xetdata/onnx-models)

- [Meta Research](https://github.com/facebookresearch)

If you want to train your own models, refer to the following links:

- [Google Colab](https://colab.research.google.com/)

- [Kaggle](https://www.kaggle.com/)

## Additional resources

- [Sample scripts](package-samples.html)

- [Unity Discussions group](https://discussions.unity.com/tag/Sentis?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939589864)

- [Understand the Sentis workflow](understand-sentis-workflow.html)

- [Sentis models](models-concept.html)

- [Tensor fundamentals in Sentis](tensor-fundamentals.html)

- [The AI menu](https://docs.unity3d.com/Manual/ai-menu.html) in Unity Editor

- [Unity Dashboard AI settings](https://docs.unity.com/en-us/ai?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939589864)

- [Tokenize text for input](tokenizer.html)
