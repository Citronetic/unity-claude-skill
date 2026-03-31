[Image: image]

# 快速入门

Tutorial

Beginner

+0XP

75 mins

25

(183)

Unity Technologies

[Image: 快速入门]Summary

本书面指南将引导你在 3D 游戏套件中设置一个空场景以开始创建新关卡。你将通过本指南了解此套件中用于创建游戏玩法的一些基础知识。此套件随附了一个预先制作的游戏，其中包含套件各个部分的示例，供你在思路不畅时用作参考。要了解如何在编辑器中导航和移动，请查看[“使用 Unity 界面”教程](https://learn.unity.com/tutorial/using-the-unity-interface)。

Resources

- [3D Game Kit Asset Package](https://assetstore.unity.com/packages/essentials/tutorial-projects/3d-game-kit-115747)

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 快速入门指南简介

Q&A (0)

本书面指南将引导你设置一个空场景，让你开始使用游戏套件来创建新关卡。你将通过本指南了解此套件中用于创建游戏玩法的一些基础知识。

此套件随附了一个预先制作的游戏，其中包含套件各个部分的示例，供你在思路不畅时用作参考。

要了解如何在编辑器中导航和移动，请查看我们的[“使用 Unity 界面”教程](https://learn.unity.com/tutorial/using-the-unity-interface)。

在这里下载项目：

[Image: image]

在开始之前，请查看以下视频以简要了解你可以实现的目标：

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 2. 创建新场景

Q&A (0)

首先，让我们创建一个新场景。我们制作了一个用于创建场景的工具，其中包含创建某种地面以及我们的主角 Ellen（能够奔跑和攻击）所需的一切。

- 选择 **Kit Tools** > **Create New Scene**

[Image: image]

- 在 **New Scene Name** 中，输入场景的名称

[Image: image]

- 单击 **Create**

你的新场景将显示地面、Ellen、一些 UI 和游戏菜单。

[Image: image]

- 在编辑器的顶部，按 **Play**

[Image: image]

Ellen（我们的玩家角色）的控制方式如下：

[Image: image]Mark step as complete

## 3. 在 3D 游戏套件中添加移动的平台

Q&A (0)

我们将向场景中添加移动的平台。所有可交互对象都位于 **Prefabs** > **Interactables** 中

要添加 **MovingPlatform**，请执行以下操作：

- 导航到 **Project 窗口**
- 选择 **Assets** > **3DGameKit** > **Prefabs** > **Interactables**
- 左键单击 **MovingPlatform** 并将其拖入 **Scene 视图**中

[Image: image][Image: image]

- 使用**变换工具**将平台**移动** (**W**)、**旋转** (**E)** 和**缩放** (**R)** 到所需的位置

[Image: image]

- 在编辑器的顶部，按 **Play**

**MovingPlatform** 将是固定的。我们要让平台动起来：

- 在 **Scene 视图**中的 **MovingPlatform** 上，找到**终点 (End Point)** 工具

[Image: image][Image: image]

- 导航到 **Inspector**
- 在 **Simple Translator** 组件中
- 使用 **Preview Position** 滑动条来查看平台的去向

[Image: image]

- 在 **Simple Translator** 组件中，勾选 **Activate** 框

[Image: image]

- 按 **Play**

你的 **MovingPlatform** 将上移，并在到达你设置的路径上限时停止。

我们现在选择 **MovingPlatfrom** 并使其来回移动：

- 导航到 **Inspector**
- 在 **Simple Translator** 脚本中
- 将 **Loop Type** 设置为 **Ping Pong**

[Image: image]

- 按 **Play**

**MovingPlatform** 现在将移至顶部，然后再次下降。**MovingPlatfrom** 将到达你设置为**终点**的任何位置。

Mark step as complete

## 4. 通过命令来开门

Q&A (0)

在 3D 游戏套件中，游戏命令向 Unity 中的其他对象发送信号，要求这些对象执行操作。

我们将使用压力垫来开门。让我们向场景添加一扇门：

- 在 **Project 窗口**中，选择 **Prefabs** > **Interactables**
- 找到 **DoorSmall** 并将其拖入 **Scene 视图**中

[Image: image]

该对象上的辅助图标可能会让人眼花缭乱。你可以调整辅助图标来仅显示对象的变换工具或者达到方便放置的目的：

- 在 Hierarchy 中选择 **DoorSmall** 后，导航到 Inspector。
- 单击 **Simple Translator** 组件上的箭头以进行折叠

[Image: image][Image: image][Image: image]

现在只会显示该对象的变换工具。

- 使用所需的**变换工具**来放置 **DoorSmall**。

让我们添加一个压力垫：

- 在 **Project 窗口**中，选择 **Prefabs** > **Interactables**
- 找到 **PressurePad**，单击并将其拖入 **Scene 视图**中
- 使用**变换工具**将压力垫置于门附近

[Image: image]

现在，让我们连接 **PressurePad** 和 **DoorSmall**，这样当 Ellen 踏上压力垫时，门便会打开。

- 在 Hierarchy 中，单击 **PressurePad** 以将其选中

[Image: image]

- 在 **Hierarchy** 中，单击 **DoorSmall** 并将其拖到 **PressurePad** 的 **Send On Trigger Enter** 组件的 **Interactive Object** 字段中。

[Image: image]

在 **Scene 视图**中，应该有一条带箭头的白线显示从 **PressurePad** 到 **DoorSmall** 的连接。

[Image: image]

- 按 **Play**

在 Ellen 踏上压力垫时，压力垫会点亮、下降并使门打开。

[Image: image]Mark step as complete

## 5. 3D 游戏套件中的敌人

Q&A (0)

在 3D 游戏套件中，我们预先制作了 3 个敌人。你可以在 **Prefabs** > **Characters** > **Enemies** > […..] 中找到这些敌人

这些敌人包括：Chomper、Spitter 和 Grenadier。Chomper 是近战型敌人，Spitter 是远距离投射敌人，而 Grenadier 是具有特定攻击模式（结合了投射、近战和盾牌爆破防御）的 boss 类型敌人。

[Image: image]

让我们在场景中放置一个 Chomper，让 Ellen 与之战斗：

- 在 **Project 窗口**中，选择 **Prefabs** > **Characters** > **Enemies** > **Chomper**
- 将 **Chomper** 拖入 **Scene 视图**。
- 使用**变换工具**将 Chomper 放置在所需的位置

[Image: image]

Chomper 前面会出现一个深蓝色大半圆，这是他的 **Detection Radius** 范围。当 Ellen 进入该区域时，Chomper 将追赶并攻击她。

让我们在 **Hierarchy** 中选择 **Chomper**，然后减小 Chomper 的视野范围。

- 在 **Inspector** 中，导航到 **Chomper Behaviour** 组件
- 单击 **Player Scanner** 旁的箭头以展开此部分

[Image: image]

- 在 **Detection Radius** 中，将值设置为 **3**

[Image: image]

另外，我们使 Chomper 仅具有正面视野：

- 将 **Detection Angle** 滑动条滑动到 **180**

[Image: image]

现在，Chomper 只能看到处于自己正前方且近得多的对象。

[Image: image]

注意：要从 **Scene 视图**中移除此辅助图标，请折叠 **Chomper Behaviour** 组件。

- 按 **Play**，然后跑到 **Chomper** 附近

[Image: image]

Chomper 会探测到 Ellen，但是只会在原地奔跑。我们需要告诉 Chomper 可以在地面上移动的位置，为此我们可添加 **NavMesh Surface**。

- 在 **Hierarchy** 中，单击 **Plane**

[Image: image]

- 在 **Inspector** 中，找到 **Add Component**
- 搜索 **NavMeshSurface**

[Image: image]

- 在键盘上按 Enter 或单击脚本以将此组件添加到 **Plane**
- 导航到 **Nav Mesh Surface** 组件
- 将 **Agent Type** 设置为 **Chomper**（这用于所有敌人类型）
- 将 **Include Layers** 设置为 Nothing
- 现在，在 **Include Layers** 上，选择 **Environment**
- 在 **Include Layers** 上，选择 **Vegetation**

[Image: image]

- 在 **Nav Mesh Surface** 组件的底部，单击 **Bake**

浅蓝色表面将出现在地面的移动平台上。这样就可以向你放置在场景中的任何敌人指明他们可以行走的位置。

- 按 **Play**，然后跑到 **Chomper** 的正面

现在，Chomper 将追逐你并发起攻击！

- 鼠标左键单击，从而使用你的棍棒发起攻击！

[Image: image]

只需击中一次，Chomper 就会死亡。要增大此值，请执行以下操作：

- 在 **Hierarchy** 中，选择 **Chomper**
- 在 **Inspector** 中，导航到 **Damageable** 组件
- 将 **Max Hit Points** 增加到你希望 **Chomper** 在死亡之前被击中的次数。Ellen 的棍棒打到敌人一次被记为一次击中

[Image: image]Mark step as complete

## 6. 在 3D 游戏套件中给对象造成伤害

Q&A (0)

我们可以使用 **Contact Damager** 对具有 **Damageable** 组件的对象造成伤害。

我们可以使用箱子和 Chomper 来演示这一工作原理

- 在 **Project 窗口**中，选择 **Prefabs** > **Interactables**
- 找到 **DestructibleBox** 预制件，单击并将其拖入 **Scene 视图**中
- 使用**移动工具**将箱子移到 **Chomper** 上方

- 将箱子放在高处，以便你在测试中有时间看到箱子

[Image: image]

- 按 **Play**

箱子将掉落在 **Chomper** 身上，并停留在那里，什么都不会发生。

注意：不要离 Chomper 太近，否则他会追逐 Ellen。如果愿意，你随时可以将 Chomper 的 Detection Radius 减小到 0。

[Image: image]

我们需要在箱子击中 Chomper 时造成伤害。

- 在 **Hierarchy** 中，单击 **DestructibleBox** 旁的箭头以显示出子对象
- 选择 **DestructibleBox** 子对象

[Image: image]

- 导航到 **Inspector**
- 滚动到 Inspector 的底部并单击 **Add Component**
- 搜索 **Box Collider**
- 在键盘上按 **Enter** 或单击 **Box Collider** 组件，从而将此组件添加到 **DestructibleBox**
- 在 **Box Collider** 组件上，勾选 **Is Trigger** 复选框

[Image: image]

- 单击 **Add Component**
- 搜索 **Contact Damager**
- 在键盘上按 **Enter** 或单击 **Contact Damager** 脚本，从而将此脚本添加为组件
- 在 **Contact Damager** 组件中，将 **Amount** 设置为 **3**

- 请注意，Damage Amount 值必须等于你为 Chomper 设置的 **Max Hit Points**，才能让他接受全部伤害。我们在项目中将此字段更改成了 3，但你应确保检查 Chomper 的 **Damageable** 组件上的 **Max Hit Points** 值
- 将 **Damaged Layers** 设置为 **Enemy**

[Image: image]

- 按 **Play**

[Image: image]

箱子会跌落在 Chomper 身上，Chomper 将损失生命值，变成布娃娃状态，而箱子会弹开。我们已经成功造成足以杀死 Chomper 的伤害，但是这种特效看起来并不好。我们需要在箱子击中 Chomper 时让箱子损坏。箱子已有一个 Contact Damager，所以我们进行相应调整来影响箱子。

- 在 **Hierarchy** 中
- 找到并选中 **Chomper**
- 导航到 **Inspector**
- 滚动到 **Inspector** 的底部
- 单击 **Add Component**，然后搜索 **Contact Damager**
- 在键盘上按 **Enter** 或单击脚本，从而将此脚本添加到 **Chomper**
- 在 **Contact Damager** 组件中
- 将 **Amount** 设置为 **1**
- 在 **Damaged Layer** 下拉选单中，选择 **Enemy**

[Image: image]

- 按 **Play**

箱子会掉落在 Chomper 身上，因撞击而损坏，使 **Chomper** 失去所有生命值并变成布娃娃。

[Image: image]Mark step as complete

## 7. 在 3D 游戏套件中进行装饰

Q&A (0)

在此游戏套件中，我们提供了用于构建示例游戏的所有环境对象。

你可以在 **Prefabs** > **Environment** > [….] 中找到这些对象

这些对象分类到了含有不同资源类型的文件夹中。请浏览这些文件夹并开始扩充你的场景。

你可以创造出什么样的世界？

[Image: image]

注意：你需要重新烘焙 NavMesh，以使敌人知道所添加的新表面是他们可行走的，或者他们需要避开某些对象（例如大型植物）。

- 在 **Hierarchy** 中，选择 **Plane**
- 导航到 **Inspector**
- 在 **NavMesh Surface** 中，单击 **Bake**

[Image: image]

#### Rock Painter 和 Vegetation Painter

我们创建了 Rock Painter 和 Vegetation Painter 来进一步完善你的场景。这些工具使你可以放置具有不同大小和旋转度的植被和岩石，同时使这些植被和岩石与发生绘制的表面对齐。

要使用这些工具，请执行以下步骤：

- 在 Hierarchy 中，找到 **VegetationPainter**
- 单击向下箭头以展开子对象

[Image: image]

- 单击 **GroundCover**
- 在 **Scene 视图**中，将鼠标光标悬停在地面上
- 左键单击，将一些草/睡莲叶放置在需要的位置。

[Image: image]

你可以更改放置的对象类型，为此需要执行以下操作：

- 导航到 **Inspector**
- 在 Instance Painter 组件中显示了 Painter 中每个预制件的图像。

[Image: image]

- 单击突出显示的白色框以选择用于绘制的**预制件**。
- 所选的预制件将变灰

你可以在 **Instance Painter** 组件顶部找到 Painter 的控制方式。一些基本的控制方式如下：

左键单击 = 绘制

Ctrl (Cmd) + 左键单击 = 删除

Alt + 滚动 = 增大画笔大小

空格键 = 随机化位置和旋转

你绘制的任何对象都将被存储为父对象的子对象。例如：

- 导航到 **Hierarchy**
- 展开 **GroundCover**

[Image: image]

绘制的任何此类对象都将作为子对象存储于此处。你也可以单击这些对象以单独编辑和放置它们。

此过程与绘制 **VegetationSmall**、**VegetationMedium** 和 **VegetationLarge** 相同

[Image: image]

以相同方法绘制岩石：

- 在 **Hierarchy** 中，找到 **RockPainter**
- 单击箭头以展开子对象
- 单击 RocksSmall
- 将鼠标光标悬停在要放置岩石的目标区域上，然后单击即可放置。

[Image: image]Mark step as complete

## 8. 在 3D 游戏套件中传送玩家

Q&A (0)

在此游戏套件中，我们有一个传送系统。你可以将 Ellen 传送到其他关卡或传送到场景中的不同位置。

让我们在场景内创建一个传送器：

- 在 **Project 窗口**中，选择 **Prefabs** > **Environment** > **Structures**
- 找到 **GateWayHugeTeleporter**
- 将 **GateWayHugeTeleporter** 拖入场景中

顾名思义，此 Gateway 很巨大：

- 使用**缩放工具**和**移动工具**来放置此 Gateway 并进行缩放以适合 Ellen 的大小
- 在 **Hierarchy** 中，展开 **GatewayHugeTeleporter** 以显示出子对象
- 选择 **TeleportPlane**
- 导航到 **Inspector**
- 单击 **Add Component**
- 搜索 **BoxCollider**
- 在键盘上按 **Enter** 或单击 **BoxCollider**，从而将此组件添加到 **TeleportPlane**
- 在 **Box Collider** 组件上，勾选 **Is Trigger**

[Image: image]

- 单击 **Add Component**
- 搜索 **Teleporter**
- 在键盘上按 Enter 或单击 **Teleporter** 脚本，从而将此脚本添加到 **TeleportPlane**

[Image: image]

- 在 **Teleporter** 组件中
- 将 **Layer** 更改为 **Player**
- 在 Hierarchy 中，找到 **Checkpoints**
- 单击 **Checkpoint** 旁的箭头以展开子对象。

[Image: image]

- 在 **Hierarchy** 中选择 **TeleporterPlane**
- 将 **Checkpoint**（子对象）拖入 **Teleporter** 组件的 **Destination Transform** 字段中
- 在 **Hierarchy** 中，查找并展开 **Ellen** 以显示出子对象
- 找到 **RespawnParticles**

[Image: image]

- 在 **Hierarchy** 中选择 **TeleportPlane**
- 将 **RespawnParticles** 拖入 **Teleporter** 上的 **Enter Effect** 中
- 将 **RespawnParticles** 拖入 **Teleporter** 上的 **Exit Effect** 中
- 按 **Play**，然后跑向传送器以进行测试

[Image: image]

穿过传送器时，Ellen 将传送到最初生成她的位置，并会有蓝色粒子围绕着她。

Mark step as complete

## 9. 3D 游戏套件让你享受设计的乐趣

Q&A (0)

此套件中的大多数对象都会使用压力垫 (Pressure Pad) 设置中显示的事件 (Events) 系统。

请探索 **Scenes** > **GamePlay** 中的现有场景以了解如何使用关卡 1 和关卡 2 中的命令系统来设置其他对象。

请参阅组件文档以了解所有组件及其参数的详细信息。

关卡设计让你乐在其中！

Mark step as complete

## Complete this Tutorial

Mark all steps complete
