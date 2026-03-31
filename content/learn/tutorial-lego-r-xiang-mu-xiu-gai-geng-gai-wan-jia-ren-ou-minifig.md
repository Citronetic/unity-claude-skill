[Image: image]

# LEGO® 项目修改：更改玩家人偶 (Minifig)

Tutorial

Beginner

+0XP

10 mins

45

(446)

Unity Technologies

[Image: LEGO® 项目修改：更改玩家人偶 (Minifig)]Summary

为 Microgame 新增一个主角！

Languages available:

简体中文English日本語简体中文简体中文

## 1. 概述

Q&A (0)

在本修改项目中，您将把默认的 LEGO® 人偶 (Minifig) 替换为 Unity 项目中提供的其他三个人偶之一。为实现此目标，您将进行以下操作：

- 选择一个新的人偶来替换默认的人偶
- 让摄像机注视并跟随新的玩家人偶
- 进行测试

让我们开始吧！

Mark step as complete

## 2. 开始之前

Q&A (0)

如果您先完成 Editor 内部关于 LEGO® Microgame 的教程，将更有利于您了解本修改项目。别着急，完成之后再来学习吧！

在开始本教程之前，打开您的 Microgame：

**1.**打开 Unity Hub。

**2.**选择 **Projects** 选项卡，然后选择您保存的 Microgame，该 Microgame 将在 Unity 编辑器中打开。这个过程可能需要几分钟时间，不用担心。

Mark step as complete

## 3. 选择一个新人偶

Q&A (0)

Microgame 中的默认人偶是宇航员 (Astronaut)。

[Image: image]

项目中其他三个可选人偶：冒险家 (Adventurer)、海盗 (Pirate) 和披萨男孩 (Pizzaboy)。

[Image: image]

首先，为您的 Microgame 选择其中一个人偶：

**1.** 在 Project 窗口中，选择 *Assets*>*LEGO*>*Prefabs*>*LEGO Minifigs*。

[Image: image]

**2.** 选择所需的人偶，然后将其从 Project 窗口拖入 Scene 视图。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

- 要更改视角，请在 Scene 视图中按住 **Alt**/ **Opt** + **左键单击**，然后围绕平台移动光标。
- 要进行缩放，请在 Scene 视图中按住 **Alt**/ **Opt** + **右键单击**，然后向前移动光标进行放大或向后移动光标进行缩小。也可以使用触控板或滚轮来执行此操作。

**3.**如果您添加了人偶并想将其删除，请在 Hierarchy 窗口中找到该人偶游戏对象。右键单击其名称，然后选择 **Delete**。还可使用 **Del** (Windows) 或 **Cmd** + **Del** (macOS) 快捷键。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

这个 Unity 项目中的人偶是预制件。您可以将这些预制件看作用来创建不同内容的模板。因为在这个项目中，我们准备的人偶预制件具备您所需的一切，这样您就可以将它们替换到自己的 LEGO® Microgame 中。让我们测试一下吧！

Mark step as complete

## 4. 测试新人偶

Q&A (0)

接下来测试您的新人偶：

**1.**在工具栏中，选择 **Play** 以进入运行模式。

**2.**为了测试新人偶，您可以：

- 使用 **WASD** / **箭头**键进行移动
- 使用**空格键**进行跳跃
- 角色在空中时再次跳跃以实现两次跳跃
- 使用鼠标围绕角色旋转视图
- 使用 **Tab** 暂停或查看选项

嗯，这里有个问题！您现在正在控制两个人偶，但摄像机仅跟随旧的宇航员 (Astronaut) 人偶，这可能看起来有点奇怪！

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**3.** 再次选择 **Play** 以退出运行模式。您在运行模式中所做的更改不会保存。

要解决此问题，您需要移除旧的宇航员 (Astronaut) 人偶，并确保摄像机聚焦在新的人偶上。

Mark step as complete

## 5. 移除旧的人偶

Q&A (0)

首先，让我们去掉宇航员 (Astronaut) 人偶：

**1.**  在 Hierarchy 中，选择“Player Minifig”游戏对象（默认是宇航员 (Astronaut) 人偶）。

**2.**右键单击该游戏对象，然后选择 **Delete**。还可使用 **Del** (Windows) 或 **Cmd** + **Del** (macOS) 快捷键。

**3.**如果需要，可在 Hierarchy 中右键单击新的人偶游戏对象，然后选择 **Rename**。将这个游戏对象命名为“Player Minifig”。

Mark step as complete

## 6. 将新的人偶指定为玩家

Q&A (0)

在 Hierarchy 中，您会找到两个在此 Microgame 中控制摄像机的游戏对象：

- “Third Person Free Look Camera”，设置为跟随玩家人偶
- “Camera Brain”，用于控制此 Unity 项目的一系列摄像机设置

在本修改项目中，您只需要配置 Third Person Free Look Camera。

要使摄像机跟随您的新人偶，您需要将该人偶指定为玩家。您已经对其进行了重命名，但还需要完成几件事：

**1.** 在 Hierarchy 中，选择“Third Person Free Look Camera”游戏对象。

[Image: image]

**2.**在 Inspector 中，找到 CinemachineFreeLook 组件。它是列表中的第二项。

**3.**找到 **Follow** 和 **Look At** 属性。

[Image: image]

当您将新的玩家人偶指定给这些字段时，摄像机将在您的整个 Microgame 中注视并跟随这个人偶。

**4.**首先，将“Player Minifig”游戏对象（如果尚未更改名称，则是您添加的人偶）从 Hierarchy 中拖到 Inspector 中的 **Follow** 字段。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**注意**：如果您不小心选择了“Player Minifig”游戏对象，则不会再在 Inspector 中看到 CinemachineVirtualCamera 组件。如果出现这种情况，可以在 Hierarchy 中选择“Third Person Free Look Camera”游戏对象，然后重试。

**5.**将“Player Minifig”游戏对象从 Hierarchy 拖到 Inspector 中的 **Look At** 字段。

**6.**在顶部菜单中，选择 **File** > **Save** 以保存所做的更改。或者，也可以使用 **Ctrl**/**Cmd** + **S** 快捷键。

Mark step as complete

## 7. 测试所做的更改

Q&A (0)

好的，该测试您修改的内容了！为此需要执行以下操作：

**1.**在 Hierarchy 中，选择“Player Minifig”游戏对象。如果将“Third Person Free Look Camera”保持选中状态，则会在运行模式下显示一个网格工具 (Cinemachine Virtual Camera Framer)，因此可能会阻碍您的视线。

**2.**在工具栏中，选择 **Play** 以进入运行模式。

**3.**测试摄像机是否正确跟随玩家。请注意，您可以：

- 使用 **WASD** / **箭头**键进行移动
- 使用**空格键**进行跳跃
- 角色在空中时再次跳跃以实现两次跳跃
- 使用鼠标围绕角色旋转视图
- 使用 **Tab** 暂停或查看选项

**4.**完成后，再次选择 **Play** 以退出运行模式。

Mark step as complete

## 8. 后续步骤

Q&A (0)

现在您已经更改了人偶，何不继续修改您的 LEGO® Microgame？请尝试[构建您自己的敌人](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3)或[添加一个锁定区域](https://learn.unity.com/tutorial/lego-r-mod-create-a-locked-area?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3)！

Mark step as complete

## Complete this Tutorial

Mark all steps complete
