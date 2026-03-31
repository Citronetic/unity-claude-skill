[Image: image]

# LEGO® 项目修改：创建一个锁定区域

Tutorial

Beginner

+0XP

15 mins

12

(255)

Unity Technologies

[Image: LEGO® 项目修改：创建一个锁定区域]Summary

给玩家一些战利品或有趣的惊喜！

Languages available:

简体中文English日本語简体中文简体中文

## 1. 概述

Q&A (0)

在本修改项目中，您将使用笼子道具在 LEGO® Microgame 中创建一个锁定区域，在这个区域中您可以给玩家一些战利品或其他惊喜！

为实现此目标，您将进行以下操作：

- 创建新岩石
- 添加笼子道具
- 使用 LEGO® 行为积木 (Behavior Bricks) 配置笼子门的行为
- 进行测试

让我们开始吧！

Mark step as complete

## 2. 开始之前

Q&A (0)

如果您先完成 Editor 内部关于 LEGO® Microgame 的教程，将更有利于您了解本修改项目。别着急，完成之后再来学习吧！

在开始本教程之前，请打开您的 Microgame：

**1.**打开 Unity Hub。

**2.**选择 **Projects** 选项卡，然后选择您保存的 Microgame，该 Microgame 将在 Unity 编辑器中打开。这个过程可能需要几分钟时间，不用担心。

Mark step as complete

## 3. 创建新岩石

Q&A (0)

LEGO® Microgame 教程场景中已经有了很多内容。我们首先创建新岩石，您可以在岩石上放置这个可锁定的区域：

**1.**在 Hierarchy 中，找到“Environment”游戏对象。

**2.**选择“Environment”游戏对象名称左侧的灰色箭头以将其展开。

[Image: image]

游戏对象可以按父子层级视图进行组织，因此您可以对游戏对象进行分组和组织。此处，Environment 的所有子项分别为“FogPlane”、“Rocks”、“Clouds”和“Mountains”。

**3.**展开“Rocks”游戏对象并选择列表中最后一个“Rock 1”游戏对象。

[Image: image]

**4.**将光标放置在 Scene 视图中并选择 **F** (Frame Select) 以聚焦在该游戏对象上。这是在玩家初始位置左侧的岩石区域。

**注意**：如果光标不在 Scene 视图中，Frame Select 将不起作用。

您可以通过以下方式进一步调整视图：

- 在工具栏中使用**手形工具**。
- 在 Scene 视图中，按住 **Alt**/ **Opt** + **左键单击**，然后移动光标以调整视角。
- 在 Scene 视图中，按住 **Alt**/ **Opt** + **右键单击**，然后向前移动光标进行放大或向后移动光标进行缩小。也可以使用触控板或滚轮。

[Image: image]

**5.** 在 Hierarchy 中选择“Rock 1”游戏对象后，使用 **Ctrl** / **Cmd** + **D** 来复制岩石。您的新岩石将出现在 Hierarchy 中的列表底部，并命名为“Rock 1(1)”。

**6.** 使用工具栏中的**移动工具** (**W**) 移动新岩石，在玩家后面为锁定区域留出额外空间。

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

**7.**在 Hierarchy 中，使用灰色箭头来折叠“Rock”和“Environment”游戏对象。

现在，您有了一个适合作为锁定区域的空间！

Mark step as complete

## 4. 添加笼子道具

Q&A (0)

接下来，您需要在 Microgame 中添加一个可锁定的道具：

**1.** 在 Project 窗口中，选择 *Assets > LEGO > Prefabs > LEGO Models > Contraptions*。

[Image: image]

**2.**选择“Cage”并将其拖入 Scene 视图中。

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

这个笼子非常“聪明”：门和笼子主体之间有一定的间隙。这意味着您可以将行为积木 (Behavior Bricks) 附加到门上，并使这些积木仅作用于门，而不作用于整个笼子。

**3.**在 LEGO® Tools 中：

- 启用 Brick Building（第一个按钮）
- 将 Brick Selection 设置为 Connected Brick（第二个按钮）

[Image: image]

**4.**调整视图，直到笼子和门位于屏幕中心，并可以看到它们之间的间隙。为此需要执行以下操作：

- 在工具栏中，选择**手形工具**，然后在 Scene 视图中单击并拖动以更改视图。
- 要更改视角，请在 Scene 视图中按住 **Alt**/ **Opt** + **左键单击**，然后移动光标以调整视角。
- 要进行缩放，请在 Scene 视图中按住 **Alt**/ **Opt** + **右键单击**，然后向前移动光标进行放大或向后移动光标进行缩小。也可以使用触控板或滚轮来执行此操作。

**5.**在工具栏中，选择**移动工具**（或使用 **W** 快捷键），然后选择笼子主体。移动笼子主体，直至其贴靠到所选位置的地面上，然后单击进行放置。

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

**5.**选择并移动笼子门，直至其贴靠到笼子的其余部分，然后单击进行放置。

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

Mark step as complete

## 5. 添加 Move 行为积木

Q&A (0)

接下来，让我们添加一个 Move 行为积木以使门正常工作：

**1.** 在 LEGO® Tools 中：

- 启用 Brick Building（第一个按钮）
- 将 Brick Selection 设置为 Single Brick（第二个按钮）

[Image: image]

**2.**在 Project 窗口中，选择 *Assets*>*LEGO*>*Prefabs*>*LEGO Behavior Bricks*。

**3.**调整笼子的视图，使门的前部定格在 Scene 视图摄像机中。

**4.** 选择“Move”积木并将其拖入 Scene 视图中。

**5.**连接积木之前，在移动积木的过程中使用 **Alt** / **Opt** + **D** 来旋转积木，直到箭头指向您希望门移动的方向。

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

**注意：**如果您的积木已经对齐到位，**Alt** /**Opt** + **D** 将轻推积木，而不是旋转积木。如果您不小心放置了积木，请选择 Move 积木并将这个积木从笼子门中拖出，然后重试。如果积木在 Scene 视图中跟随光标，则可以旋转积木。

**6.**使“Move”积木在笼子门绿色窗架上卡入到位，然后单击鼠标左键进行连接。

[Image: image]

Mark step as complete

## 6. 配置 Move 积木

Q&A (0)

接下来，您需要配置 Move 行为积木：

**1.**在 Scene 视图或 Hierarchy 中，选择“Move”行为积木。

**2.** 在 Inspector 中，找到 Move Action (Script) 组件中的 **Distance** 属性。

[Image: image]

该距离以 LEGO® 单位表示，这是您在 LEGO® 积木上看到的柱体数量。

**3.** 将 **Distance** 属性设置为 **8**：这是笼子道具的宽度，所以门会滑开。

**4.**禁用 **Repeat** 属性，因此门仅执行此操作一次。

[Image: image]

**5.** 保存所做的更改。在顶部菜单中选择 **File** > **Save**，或使用 **Ctrl**/**Cmd**+**S** 快捷键。

Mark step as complete

## 7. 在运行模式下测试

Q&A (0)

现在测试所做的更改：

**1.** 在工具栏中，选择 **Play** 以进入运行模式并测试所做的更改。门应按照行为积木设定的方向朝侧面移动 8 个单位。

[Image: image]

**2.**完成后，再次选择 **Play** 以退出运行模式。您在运行模式中所做的更改将不会保存！

现在，当游戏开始时，笼子就会打开。但这并不是真正的锁定空间，我们需要对此进行更改，使玩家必须先激活计算机控制台，然后才能打开笼子门。

Mark step as complete

## 8. 添加计算机控制台

Q&A (0)

首先，让我们添加计算机控制台：

**1.** 在 Project 窗口中，选择 *Assets* > *LEGO* > *Prefabs* > *LEGO Models* > *Contraptions*。

[Image: image]

**2.**选择“Console”并将其拖入 Scene 视图中。在 LEGO ® Tools 中，禁用 Brick Building（第一个按钮）。然后，使用**移动工具** (**W**) 将该对象放置在游戏开始位置附近，并使用**旋转工具** (**E**) 调整该对象面向的方向。（一旦该对象可以使用后，可以根据需要将该对象移动到游戏中的其他位置！）

[Image: image]Mark step as complete

## 9. 添加 Touch Trigger

Q&A (0)

让我们使用 Touch Trigger 行为积木来激活控制台：

**1.** 在 LEGO® Tools 中：

- 启用 Brick Building（第一个按钮）
- 将 Brick Selection 设置为 Single Brick（第二个按钮）

**2.**在 Project 窗口中，选择 *Assets* > *LEGO* > *Prefabs* > *LEGO Behavior Bricks*。

**3.**选择“Touch Trigger”积木并将其拖入 Scene 视图中。

**4.**将 Touch Trigger 积木放置在控制台的顶部。

[Image: image]Mark step as complete

## 10. 配置 Touch Trigger

Q&A (0)

接下来，我们来配置触发器：

**1.**在 Scene 视图或 Hierarchy 中，选择“Touch Trigger”行为积木。

**2.** 在 Inspector 中，找到 Touch Trigger (Script) 组件。

[Image: image]

目前，**Target** 属性设置为 **Connected Actions**。这意味着触发器将激活连接到控制台（连接位置）的所有动作积木。控制台没有连接任何动作积木，实际上，您需要在这里使用此 Touch Trigger 来激活笼子门上的行为积木。

**3.** 使用下拉菜单将 **Target** 属性设置为 **Specific Actions**。选择灰色箭头展开所出现的 **Specific Actions** 折叠部分。

**4.** 将所出现的 **Size** 属性设置为 **1**。此值表示将会触发的动作积木数量。更改此设置将会显示新的属性：**Element 0**。

[Image: image]

**5.**将“Move”积木从 Hierarchy 拖入 **Element 0** 属性字段。这样会将“Move”分配为该触发器将会激活的指定动作积木。

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

**注意**：如果您不小心选择了“Move”游戏对象，则不会再在 Inspector 中看到 Touch Trigger (Script) 组件。如果出现这种情况，请在 Hierarchy 中选择“Touch Trigger”游戏对象，然后重试。

**6.**禁用 **Repeat** 属性，因此门仅需打开一次。

[Image: image]

**7.**保存所做的更改。

现在，当触发器感应到玩家在附近时，它将打开笼子门。

Mark step as complete

## 11. 在运行模式下测试

Q&A (0)

让我们来测试所做的更改：

**1.** 在工具栏中，选择 **Play** 以进入运行模式并测试所做的更改。

**2.**确认笼子门不会自动打开，但是当您靠近控制台时，门就会打开。

请注意，您可以：

- 使用 **WASD** / **箭头**键进行移动
- 使用鼠标围绕角色旋转视图

**3.**完成后，再次选择 **Play** 以退出运行模式。

Mark step as complete

## 12. 额外积分

Q&A (0)

现在，您已经添加了玩家可以解锁的区域，而您不必使用笼子道具即可做到这一点！何不尝试：

- 向笼子中添加物品，以便玩家在打开笼子时即可获取
- 将笼子和控制台移动到最适合您自身游戏的位置
- 使用岩石或其他环境道具代替笼子门
- 使用相同的 Move 和 Touch Trigger 锁定功能创建一个完全自定义的锁定区域

一切都取决于您的想象力！您也可以探索其他 LEGO® Microgame 修改项目来[切换玩家人偶 (Minifig)](https://learn.unity.com/tutorial/lego-r-mod-change-the-player-minifig?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3) 并[构建您自己的敌人](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3)。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
