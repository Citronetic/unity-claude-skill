[Image: image]

# LEGO® 修改：构建您自己的敌人

Tutorial

Beginner

+0XP

20 mins

18

(208)

Unity Technologies

[Image: LEGO® 修改：构建您自己的敌人]Summary

构建自定义敌人来挑战您的玩家！

Languages available:

简体中文English日本語简体中文简体中文

## 1. 概述

Q&A (0)

在本修改项目中，您将在 Microgame Unity 项目中使用散落的 LEGO®（乐高）积木构建自定义的敌人角色。为实现此目标，您要进行以下操作：

- 用基础积木创建敌人
- 使用行为积木 (Behavior Bricks) 配置敌人
- 将敌人转换成预制件，这样就可以在游戏中重复使用

Mark step as complete

## 2. 开始之前

Q&A (0)

如果您先完成 Editor 内部关于 LEGO® Microgame 的教程，将更有利于您了解本修改项目。别着急，完成之后再来学习吧！

在开始本教程之前，请打开您的 Microgame：

**1.**打开 Unity Hub。

**2.**选择 **Projects** 选项卡，然后选择您保存的 Microgame，该 Microgame 将在 Unity 编辑器中打开。这个过程可能需要几分钟时间，不用担心。

Mark step as complete

## 3. 添加积木来构建敌人

Q&A (0)

首先，让我们添加一些可以用来构建敌人的积木：

**1.**在 Project 窗口中，选择 *Assets* > *LEGO* > *Prefabs* > *LEGO Model*s > *Brick Collections*。

[Image: image]

**2.** 在 Scene 视图中，找到一个构建敌人的位置。关卡起点左侧的岩石区域是构建敌人的好位置。如果目前这里放置了 Galo Bird，则可以将它移开或选择其他区域来构建敌人。

[Image: image]

**3.** 将“Starter Bricks”预制件从 Project 窗口拖动到 Scene 视图中开阔的岩石区域。

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

此外，还有一个 Cool Bricks 集合，您可以用这个集合代替 Starter Bricks 或与 Starter Bricks 一起使用。

Mark step as complete

## 4. 解压缩积木集合 (Brick Collection) 预制件

Q&A (0)

这个 Microgame Unity 项目中的积木集合是预制件。您可以将这些预制件看作用于创建不同内容的模板：在这种情况下，我们准备了有用的积木集合，可用于创建自定义的敌人、道具和环境元素以添加到游戏中。

将预制件的一个版本添加到场景的过程称为实例化该预制件。在使用已实例化的 Starter Bricks 进行构建之前，您需要解压缩预制件。这个操作会将预制件变成常规的游戏对象，您就可以自由地使用和删除它们。Starter Bricks 预制件仍然可以在 Brick Collection 文件夹中再次供使用。

要解压缩 Starter Bricks，请执行以下操作：

**1.** 在 Hierarchy 中，找到“Starter Bricks”游戏对象。蓝色立方体图标表示这是预制件的实例。

[Image: image]

**2.**右键单击“Starter Bricks”游戏对象，然后从上下文菜单中选择 **Unpack Prefab Completely**。立方体图标将不再是蓝色。

[Image: image]

**3.** 选择“Starter Bricks”游戏对象名称左侧的灰色箭头以将其展开。

[Image: image]

游戏对象可以按父子层级视图进行组织，因此您可以对这些游戏对象进行分组和组织。此处有两个子游戏对象：“Alive”和“Default - Dynamic”。

**4.**展开“Default - Dynamic”游戏对象。此处包含一组可用于构建用途的普通积木。

[Image: image]

**5.**“Alive”游戏对象是一个行为积木 (Behavior Brick)，可为敌人提供基本的声音。

[Image: image]

**5.**在 Hierarchy 窗口中，右键单击“Starter Bricks”游戏对象，然后选择 **Rename**。暂且将其命名为“NewEnemy”。这样将有助于使敌人和积木保持井然有序。

您马上就可以开始构建了！

Mark step as complete

## 5. 回顾 LEGO® Tools

Q&A (0)

让我们回顾一下如何在此 Microgame 中使用积木进行构建。Scene 视图左上方的 LEGO® Tools 可控制两项设置：Brick Building 和 Brick Selection。

[Image: image]

#### Brick Building

顶部按钮控制 **Brick Building**。您可以使用此按钮通过鼠标或触控板点击操作来允许和禁止连接积木，就像平时搭建 LEGO® 积木一样。

还可使用 **Ctrl**+ **Alt** + **N** (Windows) 或 **Cmd**+ **Opt** + **N** (macOS) 快捷键。

#### Brick Selection

**Brick Selection** 按钮设置您当前是否可以移动和连接单个积木 (Single Brick Selection) 或积木组 (Connected Brick Selection)。

还可使用 **Ctrl**+ **Alt** + **K** (Windows) 或 **Cmd**+ **Opt** + **K** (macOS) 快捷键。

Mark step as complete

## 6. 构建您自己的基本敌人

Q&A (0)

现在是时候在游戏中构建一个您认为很炫酷的敌人了！如果您有某种特别的审美观念，在构建时应该思考可以在什么位置附加行为积木；不过，不必过分担心，以后可以随时进行调整！

[Image: image]

#### 更改视图

要更改视角，请在 Scene 视图中按住 **Alt**/ **Opt** + **左键单击**，然后移动光标以调整视角。

要进行缩放，请在 Scene 视图中按住 **Alt**/ **Opt** + **右键单击**，然后向前移动光标进行放大或向后移动光标进行缩小。也可以使用触控板或滚轮来执行此操作。

#### 操作积木

在 LEGO® Tool 中启用了 Brick Building 时，使用 **Alt** / **Opt** + **D** 可旋转积木（单个积木或积木组）。

**注意：**如果您的积木已经对齐到位，**Alt** /**Opt** + **D** 将轻推积木，而不是旋转积木。如果您不小心放置了积木，请选择 Move 积木并将这个积木从笼子门中拖出，然后重试。如果积木在 Scene 视图中跟随光标，则可以旋转积木。

#### 删除积木

选择积木并使用 **Del** (Windows) 或 **Cmd**+**Del** (macOS) 快捷键来删除积木。还可以选择顶部菜单中的 **Edit** > **Delete**。

Mark step as complete

## 7. 查看行为积木

Q&A (0)

现在，您有了自己的基本敌人。您可能已经连接了 Alive 行为积木，但该积木还没有发挥太多作用。您可以添加任何喜欢的积木来创建自定义敌人（想看灌木丛意外爆炸吗？没有问题！），但是有些行为积木比其他行为积木更易于构建。

您可以在 Project 窗口中导航到 *Assets > LEGO > Prefabs > LEGO Behaviour Bricks* 来查找行为积木。

[Image: image]

在开始之前，让我们先查看一些特别合适用于构建的行为积木：

#### 行为

- **Alive** 为敌人提供基本的声音
- **Look At** 将敌人转向指定目标
- **Shoot** 使敌人向指定目标射击飞弹
- **Hover** 使敌人徘徊到设定的高度并上下摆动
- **Move** 使敌人朝图标指示的方向移动

#### 触发器

- **Nearby Trigger** 在敌人感知到玩家在附近时触发动作
- **Touch Trigger** 在玩家触摸敌人时触发动作
- **Random Trigger** 在随机延时后触发动作

Mark step as complete

## 8. 向敌人添加行为积木

Q&A (0)

现在，您可以添加一些行为积木来自定义敌人：

**1.** 在 Project 窗口中，选择 *Assets > LEGO > Prefabs > LEGO Behaviour Bricks*。此文件夹中包含为这个 LEGO® Microgame 创建的所有自定义行为积木。

**2.** 选择一个行为积木，然后将这个积木添加到场景和您的敌人，就像使用其他积木一样。如果要添加触发器，请确保已经添加了首先要触发的动作积木。

[Image: image]

**3.**在 Hierarchy 或 Scene 视图中选择行为积木，然后在 Inspector 中配置该积木的自定义功能。

[Image: image]

**4.**定期保存更改以确保您不会丢失更改！在顶部菜单中选择 **File** > **Save**，或使用 **Ctrl**/**Cmd**+**S** 快捷键。

Mark step as complete

## 9. 测试和改进敌人

Q&A (0)

确保进行测试，以便可以迭代地创建所需的敌人：

**1.** 在工具栏中，选择 **Play** 以进入运行模式。

**2.** 在 Game 视图中测试所做的更改。您可以：

- 使用 **WASD** / **箭头**键进行移动
- 使用**空格键**进行跳跃
- 角色在空中时再次跳跃以实现两次跳跃
- 使用鼠标围绕角色旋转视图
- 使用 **Tab** 暂停或查看选项

**3.**完成后，再次选择 **Play** 以退出运行模式。您在运行模式中所做的更改将不会保存！

Mark step as complete

## 10. 将敌人转化为预制件

Q&A (0)

在创建了满意的敌人后，您可能想在游戏中的不同地方重复使用这个敌人。为此，需要将这个敌人转化为预制件：

**1.** 首先，需要添加用作“NewEnemy”游戏对象子项的所有行为积木。在 Hierarchy 中，选择行为积木游戏对象，并将它们拖到“NewEnemy”游戏对象上。

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

**2.**在 Project 窗口中，选择 *Assets > LEGO > Prefabs***。**

**3.**右键单击文件夹，然后从上下文菜单中选择 **Create** > **Folder**。将新文件夹命名为“MyPrefabs”。

**4.**打开 *MyPrefabs* 文件夹。

**5.** 将“NewEnemy”从 Hierarchy 向下拖入 Project 窗口中的 *MyPrefabs* 文件夹。

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

**6.** 保存所做的更改。

就是这样！现在，您可以将敌人预制件从 Project 窗口拖入 Microgame 中的 Scene 视图的任意位置来实例化该预制件。在 Inspector 中更改敌人的单个实例的属性时，不会更改其他实例，因此您可以使用同一预制件向游戏中添加同一敌人的略微不同的版本。

Mark step as complete

## 11. 额外积分

Q&A (0)

现在已经添加了自定义敌人并将敌人转化为预制件，接下来可以：

- 调整敌人预制件的不同实例，将每个实例自定义为唯一实例
- 为关卡的不同部分创建不同的敌人

您也可以探索其他 LEGO® Microgame 修改项目来[切换玩家人偶 (Minifig)](https://learn.unity.com/tutorial/lego-r-mod-change-the-player-minifig?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3) 并[创建一个锁定区域](https://learn.unity.com/tutorial/lego-r-mod-create-a-locked-area?uv=2019.4&projectId=5f3cfedbedbc2a002093abe3)！

Mark step as complete

## Complete this Tutorial

Mark all steps complete
