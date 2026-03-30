[Image: image]

# Cinemachine概述

Tutorial

Beginner

+0XP

10 mins

28

(115)

Unity Technologies

[Image: Cinemachine概述]Summary

Cinemachine是一个摄像系统，它可以为摄影师、设计师、艺术家及其他使用摄像机的人士提供一种无需编写任何代码即可创建复杂行为的方式。在本教程中，您将探索Cinemachine的功能和用法，以确定它是否适合您的项目。

Languages available:

简体中文English日本語简体中文简体中文

## 1. 视频概述

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 2. 什么是Cinemachine？

Q&A (0)

Cinemachine是一个摄像系统，它可以为摄影师、设计师、艺术家及其他使用摄像机的人士提供一种无需编写任何代码即可创建复杂行为的方式。Cinemachine中包含许多模块，可以组合在一起，用于创建从电影到全自动游戏内摄像系统等各种内容。

在Cinemachine出现之前，要想创建特定的跟随移动，必须直接对摄像机移动进行关键帧设置或利用代码来编写脚本。创建、调整和迭代过程都很慢。借助Cinemachine的“智能”摄像机模块套件，您可以轻松地设置拍摄主体与摄像机之间的关系，并像导演一样通过观察镜头、构图及跟随动作来完成拍摄工作。Cinemachine就像一组摄像师一样，即使情况发生变化，他们也会跟随您的方向进行拍摄。

[Image: image]Mark step as complete

## 3. Cinemachine的工作原理

Q&A (0)

Cinemachine不会在场景中创建任何新的Unity摄像机。它采用虚拟摄像机(vcam)工作，虚拟摄像机由附加在Unity主摄像机上的Cinemachine Brain进行管理。您可以使用vcam制作动画关键帧，经过混合处理，然后将两者组合在一起。该动画将由Cinemachine Brain进行处理，并应用于主摄像机。主摄像机上的所有配置都可以与Cinemachine一起使用；不妨将它视作一个能驱动主摄像机的强大动画系统。

作为一个统一的系统，您可以将一种摄像机类型与另一种摄像机类型混合在一起使用。您可以从场景中的固定摄像机切换到关键帧摄像机，以跟随角色活动并实现无缝往返。任何组合形式都可以，而且选项也不受限制。

Mark step as complete

## 4. Cinemachine的一些特性

Q&A (0)

Cinemachine附带的功能使您能够生成类似电影一样的动作和场景过渡。示例之一来自《Baymax Dreams of Evil Sheep》。（图02）

[Image: image]

Cinemachine在设计上尽可能做到不张扬；由于您不必更换摄像机系统，因此不会让您的项目显得臃肿。Cinemachine设计为实时使用，这意味着您的项目一旦开始生产就可以立即上线。这样，您就可以在工作时调整诸如角色、照明和摄像机位置之类的内容。它减少了渲染等待时间，使您可以在制作过程中查看内容的外观。

Cinemachine允许您生成自定义虚拟摄像机并在需要时将其打开。您可以轻松地与新摄像机拍摄的内容进行混合或剪辑，并在满足条件时通过脚本让摄像机以特定的方式工作 - 例如，想象角色进入了一个大房间并立即将摄像机转移到另一个视角以提供更好的拍摄效果 。

Mark step as complete

## 5. 为什么要升级到Cinemachine？

Q&A (0)

Cinemachine插件易于安装，并且提供了使用方便、操作灵活的系统，可以从设置到动画等多个方面来控制摄像机。它释放了Unity摄像机的潜力，同时又不增加额外工作量。Cinemachine可以轻松针对项目中的原有设置做出改进，这是一种无损工作流程，因此所有组件和行为都会自动保留。Cinemachine会存储您的拍摄数据，而不是将其硬编码到Unity摄像机中。如果您担心优化或处理能力问题，该插件并不会为您的项目增加不必要的组件或摄像机；它在虚拟环境中运行，可以让所有摄像机都获得顺畅的体验。

#### Cinemachine对工作效率和创造力的促进作用：

Cinemachine不仅可以提高工作效率，而且还可以激发创造力。即使在使用Cinemachine完成拍摄设置后，您仍然可以灵活地调整拍摄元素而不会产生任何后果。例如，如果您想在拍摄完成后更改动画或让角色加快速度，摄像机仍然可以按照原来的指示为动作分帧。

Cinemachine让您可以灵活地尝试新的想法。您不再需要遵循严格的动画和布局工作流程，既可以在拍摄之后进行动画调整，也可以在动画定稿之前先行拍摄。准备期可以大幅缩短，因为动画和拍摄工作可以同步完成 - 无需重新设置摄像机的关键帧来尝试不同的创意。

Cinemachine富有创造性地充分考虑到影片中可能发生的各种意外巧合。当您告诉摄像机所需的构图类型，然后将它（或角色）拖到任何位置时，Cinemachine就会快速、轻松地尝试“如果...怎么办”等拍摄和遮挡问题。

[Image: image]

摄像机可能是您项目的重要组成部分，好的摄像机可能会让您感受到“一个不错的项目”与“一个出色的项目”之间的天壤之别。Cinemachine可提供高保真体验，但不会导致庞大的控件系统或增加工作量。Cinemachine让项目的视觉品质提升到了一个新水平，并通过实时工作流程简化了生产过程。它将成为处理所有摄像机相关问题的首选解决方案。无论是何种项目，如果需要用到摄像机，那么Cinemachine绝对会让您受益匪浅。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
