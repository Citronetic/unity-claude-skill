[Image: image]

# 编辑纹理设置

Tutorial

intermediate

+0XP

15 mins

0

(8)

Unity Technologies

[Image: 编辑纹理设置]Summary

在本教程中，我们将介绍把纹理导入 3D 移动应用程序时可用的设置。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 概述

Q&A (0)

Unity 让编辑纹理设置变得非常简单。要编辑纹理设置，请在 Project 视图中选择要编辑的纹理，此时 Inspector 窗口将显示所有可用的设置，随时可进行配置。

下面是编辑纹理设置的一些提示：

- 通过 **Texture Type**，你可以控制纹理的类型，使得在引擎中以不同的方式使用该纹理。
- 通过 **Texture Shape**，你可以为某些纹理类型选择立方体贴图而不是 2D。
- 根据 Texture Type，有时会出现两个额外的设置：

- **Texture Settings** 包含让纹理发挥所需用途的特定控制选项。
- **Advanced Settings** 包括：*sRGB*、*Alpha Source*、*Alpha Is Transparent*、*Read/Write Enabled* 和 *Generate Mip Maps*。
- **Wrap Mode** 控制纹理如何包裹 UV。选项包括：

- **Repeat** 将平铺纹理，用于重复图案。
- **Clamp** 将纹理锁定到边缘处的最后一个像素。
- **Mirror** 的工作方式与 Repeat 类似，但对重复的纹理每隔一个进行一次镜像操作。
- **Mirror Once** 在将纹理锁定到边缘像素之前先对其进行一次镜像操作。
- **Filter Mode** 控制将对纹理使用哪个过滤器。
- 通过 **Texture Compression** 框，你可以控制 Max Size、Resize Algorithm、Format、Compression 和 Use Crunch Compression。

Mark step as complete

## 2. ASTC 压缩设置

Q&A (0)

ASTC 纹理压缩是 OpenGL 和 OpenGL ES 图形 API 的正式扩展。ASTC 可减少应用程序所需的内存，并降低 GPU 的内存带宽需求。

ASTC 提供高质量、低比特率的纹理压缩，并具有许多控制选项。该组件包括以下功能：

- 比特率范围从 8 位每像素 (bpp) 到低于 1 bpp。这可使你微调文件大小与质量之间的折衷。
- 支持 1-4 个颜色通道。
- 支持低动态范围 (LDR) 和高动态范围 (HDR) 图像。
- 支持 2D 和 3D 图像。
- 支持选择不同的特征组合。

下图显示了 ASTC 设置窗口：

[Image: image]

ASTC 设置窗口中有许多块大小选项。你可以从这些选项中选择最适合资源的块大小。较大的块大小可提供更高的压缩率。最好为不突出显示细节的纹理（例如离摄像机很远的对象）选择较大的块大小。较小的块大小最适合显示更多细节的纹理，例如离摄像机较近的纹理。

下图显示了不同的纹理压缩格式可用的块大小：

[Image: image]

（**注意：**如果你的设备支持 ASTC，请使用它来压缩 3D 内容中的纹理。如果你的设备不支持 ASTC，请尝试使用 ETC2。此外，必须区分 3D 内容中使用的纹理和 GUI 元素中使用的纹理。在某些情况下，最好不要压缩 GUI 纹理，以避免不必要的瑕疵。）

Mark step as complete

## 3. 为 ASTC 纹理选择正确的格式

Q&A (0)

压缩 ASTC 纹理时，有许多选项可供选择。

纹理压缩算法具有不同的通道格式，通常为 RGB 和 RGBA。ASTC 支持其他几种格式，但这些格式未在 Unity 中公开。每个纹理通常用于不同的目的，例如标准纹理、法线贴图、镜面反射、HDR、alpha、查找纹理等。所有这些纹理类型都需要不同的压缩格式才能获得最佳效果。

下图显示了 Import Settings 中的一些纹理类型：

[Image: image]

最好不要在 Build Settings 中用一种格式压缩所有纹理。较好的做法是保持 Texture Compression 为 **Don't Override** 不变。

Unity 通常将你的纹理导入为 **Texture** 类型。该类型提供了有限的压缩选项。将类型设置为 **Advanced** 可显示更多选项。

下图显示了具有一定透明度的 GUI 纹理的设置。由于该纹理是用于 GUI 的，因此禁用了 sRGB 和 mipmap。要包括透明度并能够访问 Alpha 通道，可以选中 **Alpha Is Transparency** 和 **Override for Android** 框。

[Image: image]Mark step as complete

## 4. 块大小

Q&A (0)

有一个用于选择格式和块大小的选项。RGBA 包括 Alpha 通道，4x4 是可以选择的最小块大小。

为所有纹理选择各自特定的设置可提高项目的视觉质量，并在压缩时避免不必要的纹理数据。

下表显示了 Unity 中可用于使用 RGBA（每通道 8 位）格式的 4 MB、1024x1024 纹理的 ASTC 块大小的压缩率。

[Image: image]Mark step as complete

## 5. 总结

Q&A (0)

可以对纹理的众多设置进行微调，以便在移动设备上提供最佳性能。配置块大小、格式和压缩设置一开始可能会让人觉得不知所措，但通过不断的耐心实践，你终将熟练掌握这些工具，得心应手地针对各种场景和平台优化应用程序。在下一个教程中，我们将剖析一个演示项目，研究纹理图集对性能的影响。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
