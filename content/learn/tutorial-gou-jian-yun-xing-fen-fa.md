[Image: image]

# 构建、运行、分发

Tutorial

Beginner

+0XP

5 mins

3

(365)

Unity Technologies

[Image: 构建、运行、分发]Summary

现在，您已经学习了在 Unity 中创建游戏所需采取的每个步骤，包括从创建第一个游戏对象到编写自定义脚本的各个环节。

现在您的游戏已经完成，您需要对其进行**构建**以创建一个独立的应用程序，然后便可以将其上传到数字商店。这意味着无需安装 Unity Editor 并将所有资源下载到他们的机器上就可以玩游戏。

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 调整基本播放器设置

Q&A (0)

您从 Editor 创建的用于将游戏分发给用户的应用程序称为**播放器 (Player)**。在创建播放器之前，请先调整一些播放器设置 (Player Settings)：

**1.**在顶部菜单栏中，导航到 **Edit > Project Settings**，然后选择 **Player**。您可以在此处设置有关游戏的一些信息。

[Image: image]

**2.Company Name** 用于创建文件夹，在文件夹中将会存储为构建的游戏所创建的文件。您可以根据需要更改此设置，但这并不是正常运行构建过程必需的设置。

**3.Product Name** 是您游戏的名称。请将此名称更改为“**John Lemon’s Haunted Jaunt**”。如果您想了解有关常规播放器设置 (Player Settings) 的更多信息，可以在文档中找到更多信息。

**4.**下一部分顶部的向下箭头按钮在这里表示该部分中的所有设置适用于 **PC、Mac 和 Linux 独立平台**。如果在安装 Unity 时安装了其他平台的支持包，则该工具栏中将显示多个按钮：

[Image: image]

可以单击每个部分以展开这个部分并显示其设置。我们在这里仅重点介绍其中几项设置，但您可以在独立平台的播放器设置文档中找到有关每项设置的说明。

Mark step as complete

## 2. 调整 Resolution and Presentation 设置

Q&A (0)

让我们调整游戏向玩家的显示方式：

**1.**单击 **Resolution and Presentation** 部分以将其打开。

[Image: image]

**2.Resolution** 用于定义游戏开始时所处的默认模式。**Run In Background** 设置用于确定窗口/应用程序没有焦点时游戏是否继续运行。例如，如果该选项被禁用并且玩游戏的人在玩游戏时打开网络浏览器并浏览网络，则游戏将暂停直到他们返回游戏。

**3.**在 **Standalone Player Options** 细分部分中，确保 **Display Resolution Dialog** 设置为 Enabled。这样，您便可以在用户启动游戏时显示一个窗口，让他们选择分辨率：

[Image: image]

**4.**在 Splash Images 部分中，您可以更改上述对话框顶部显示的图像 (**Application Config Dialog Banner)** 或游戏开始时显示的徽标 (**Logos**)。

我们不需要调整任何其他设置，现在您可以构建游戏了。

Mark step as complete

## 3. 构建您的游戏

Q&A (0)

设置好播放器设置之后，就可以开始构建游戏了！这将获取所有资源（例如脚本、图像和声音），并将它们打包为优化的格式以进行分发。

要在 Unity 中构建应用程序，请执行以下操作：

**1.** 在顶部菜单中，选择 **File > Build Settings**。

[Image: image]

**2.**顶部的 **Scenes In Build** 部分会列出游戏中将包含的所有场景。您可以在项目中拥有只用于测试功能或仅用于调试的场景，因此 Unity 需要知道最终产品中应包括哪些场景。

如果 MainScene 仍处于打开状态，请单击 **Add Open Scenes** 以将其添加到列表中。或者，可以将场景从 Project 窗口拖放到 Build Settings 窗口的 Scenes In Build 部分。

**3.**在左下方的 **Platform** 部分中选择要在哪个平台上运行游戏。默认情况下，Editor 仅支持安装该程序的平台。

要安装更多平台，请执行以下操作：

- 打开 Unity Hub
- 单击 **Install**
- 单击相关 Unity 版本旁边的 **...**
- 单击 **Add Component**，然后选择要安装的平台

**4.**右下角具有与当前所选平台相关的设置。这些设置主要用于调试或特殊构建，因此您现在可以忽略它们。

**5.**现在，让我们针对安装了 Editor 的平台运行构建。单击**Build** 可触发构建。

**6.**Unity 将打开一个文件资源管理器，并要求您选择一个文件夹来存储您构建的游戏。该文件资源管理器应显示包含您的项目的文件夹（其中包含 Assets、ProjectSettings 和 Library 文件夹）。

创建一个名为 **Build** 的新文件夹，并选择该文件夹。

Mark step as complete

## 4. Unity 会产生什么？

Q&A (0)

现在，Unity 将构建您的游戏！在此期间，您无法使用 Unity Editor 执行任何其他操作，因为它会：

- 压缩并打包您的所有资源
- 检测并忽略不使用的资源
- 以优化的格式编译脚本

完成后，Unity 将打开用于构建项目的文件夹，您将找到为相关平台所构建的可执行文件（在 Windows 上为 .exe、在 Mac OSX 上为 .app，等等）。

运行该可执行文件以测试您的游戏！

Mark step as complete

## 5. 总结

Q&A (0)

您已完成此项目，并构建了 John Lemon’s Haunted Jaunt！现在，您可以将该 Build 文件夹中的所有文件发送给您的朋友，以便他们可以试玩您的游戏。

您现在已经在 Unity 中创建了完整的游戏。但是您的游戏开发之旅才刚刚开始，请在 Unity Learn 网站上查找其他教程，进一步探究某些领域。您还可以在手册和脚本参考中进行探索，进一步了解我们在本项目中介绍的所有内容。

祝您好运！我们迫不及待想看到您接下来的作品。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
