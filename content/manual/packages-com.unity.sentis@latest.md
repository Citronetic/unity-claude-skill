##### Note

Sentis is now called Inference Engine. The documentation has moved to `https://docs.unity3d.com/Packages/com.unity.ai.inference@latest`. Refer to the new location for the latest updates and guidance. Make sure to update your bookmarks and references accordingly.

# Sentis overview

Sentis is a neural network inference library for Unity. The package is in a "release" state and available to all Unity users via the package manager.

You can use Sentis to import trained neural network models into Unity, and then run them in real-time. Sentis utilizes the end-users device compute (GPU or CPU) and can run any supported Unity runtime platform.

To use Sentis, it helps if you have some experience in using machine learning models, for example in a framework like [TensorFlow](https://www.tensorflow.org/) or [PyTorch](https://pytorch.org/).

| Section | Description |
| --- | --- |
| Get started | Install Sentis, find and use sample projects, and understand the Sentis workflow. |
| Create a model | Create a runtime model by importing an ONNX model file or using the Sentis model API. |
| Run a model | Create input data for a model, create an engine to run the model, and get output. |
| Use Tensors | Get, set and modify input and output data. |
| Profile a model | Use Unity tools to profile the speed and performance of a model. |

## Supported platforms

Sentis works on [all Unity runtime platforms](https://docs.unity3d.com/Documentation/Manual/PlatformSpecific.html).

Performance may vary and is based upon:

- Model operators and complexity.

- End-user hardware and software platform constraints.

- Type of engine used. Refer to [Models](models-concept.html) and [Create an engine](create-an-engine.html) for more information.

## Supported model types

Sentis supports most models in Open Neural Network Exchange (ONNX) format with an [opset version](https://github.com/onnx/onnx/blob/main/docs/Versioning.md#released-versions) between 7 and 15. Refer to [Supported models](supported-models.html) and [Supported ONNX operators](supported-operators.html) for more information.

## Places to find pre-trained models

There are various sources to find pre-trained models, which may either be available in the ONNX format or in a format that you can convert. Examples include:

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

- [Unity Discussions group](https://discussions.unity.com/tag/sentis?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948811968)

- [Understand the Sentis workflow](understand-sentis-workflow.html)

- [Understand models in Sentis](models-concept.html)

- [Tensor fundamentals in Sentis](tensor-fundamentals.html)

- [Collaborate with us](https://create.unity.com/sentis-project-submission?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948811968)
