[Image: image]

# 2D 游戏套件演练

Tutorial

Beginner

+0XP

60 mins

52

(275)

Unity Technologies

[Image: 2D 游戏套件演练]Summary

本指南将引导你设置一个空场景，让你开始使用游戏套件来创建新关卡。你将通过本指南了解此套件中用于创建游戏玩法的一些基础知识。此套件随附了一个预先制作的游戏，其中包含套件各个部分的示例，供你在思路不畅时用作参考。

如果你已经熟悉此套件且需要一些简要信息，请查看[参考指南](https://learn.unity.com/tutorial/2d-game-kit-reference-guide)和[高级主题](https://learn.unity.com/tutorial/2d-game-kit-advanced-topics)。你也可以在项目内的 Documentation 文件夹中找到这些内容。

Resources

- [2D Game Kit](https://assetstore.unity.com/packages/essentials/tutorial-projects/2d-game-kit-107098)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 创建新场景

Q&A (0)

本项目允许我们自动创建新的默认场景。该场景包含 Ellen（我们的主人公）、一个小型平台、Health UI 以及你在移动和攻击时所需的一切。

让我们来创建新场景：

- 在顶部菜单中，单击 **Kit Tools**
- 选择 **Create New Scene**...

[Image: image]

- 此时将打开一个新窗口

[Image: image]

- 在 **New Scene Name** 旁边的空白字段中，输入所需的场景名称
- 单击 **Create**

Unity 在项目的根目录中创建一个新场景，然后将此场景添加到你的 [Build Settings](https://docs.unity3d.com/Manual/BuildSettings.html) 中。

[Image: image]

Unity 还会在编辑器中打开新场景，以便你可以开始处理该场景。

[Image: image]Mark step as complete

## 2. 绘制关卡

Q&A (0)

2D 游戏套件使用了 Unity 的[瓦片地图 (Tilemap) 功能](https://unity3d.com/learn/tutorials/topics/2d-game-creation/intro-2d-world-building-w-tilemap?playlist=17093)。该功能旨在帮助你轻松快速地绘制出关卡。此套件已为你进行全方位的设置，因此你可以立即开始使用。

让我们来开始设计关卡：

- 在顶部菜单中，选择 **Window > 2D > Tile Palette**

[Image: image]

Tile Palette 窗口如下所示：

[Image: image]

我们已创建两个 **Tile Palette**，用于绘制关卡。这些瓦片使用 **Unity 瓦片地图 (Unity Tilemap)** 的**可编程瓦片 (Scriptable Tile)** 系统。这些瓦片自动为平台选择适合的精灵。我们有两种样式的精灵：Grassy Rocks 和 Alien Structure。

我们需要确保在 **Tile Palette** 中选择正确的瓦片集：

- 单击 **Tile Palette** 菜单
- 选择 **Tileset_Gamekit**
- 选择最适合关卡的瓦片类型

[Image: image]

现在，让我们在场景中绘制一些瓦片来创建关卡：

- 单击 **Tile Palette** 中的一个瓦片以将这个瓦片选中
- 导航到 **Scene 视图**
- 左键单击并拖动以绘制关卡

如果在此过程中犯错，可以按住 Shift 键并左键单击或拖动以擦除瓦片。

[Image: image]Mark step as complete

## 3. 测试你的关卡

Q&A (0)

你现在已经创建关卡，接下来便可以在关卡中跑动。

[Image: image]

- 在编辑器的顶部，按 **Play**

[Image: image]

我们添加了一个调试菜单。按键盘上 **F12** 键，即可弹出一个选项来选择启用或禁用 **Game 视图**中 Ellen 的每种武器。

Mark step as complete

## 4. 添加移动的平台

Q&A (0)

在我们开始操纵 **Scene 视图**中的**游戏对象**之前，请确保你未处于绘制模式。为此，请关闭 **Tile Palette** 或者选择编辑器左上方的**移动工具**（也可以按键盘的 **W** 键来选择**移动工具**）。

[Image: image]

现在，让我们将移动的平台添加到关卡：

[Image: image]

- 导航到 **Project** 窗口
- 选择 **Prefabs** > **Interactables**
- 左键单击 **MovingPlatform** 并将其拖入 **Scene 视图**中
- 确保在 **Hierarchy** 中选择了 **MovingPlatform**
- 按 W 以使用**移动工具**

使用**移动工具** 将 **MovingPlatform** 放置于关卡中的任意位置。

选择 **MovingPlatform** 时会出现一条红色虚线，并在这条线的末尾显示一个**移动工具**辅助图标（红色箭头）。这表明游戏运行时平台将采用的路径。

[Image: image]

- 在红色虚线的末尾使用移动工具辅助图标来指示你希望平台采用的路径。

[Image: image]

要预览 **MovingPlatform** 将采用的路径，请选择 **MovingPlatform** 并按照以下步骤操作：

- 导航到 **Inspector**
- 在 **Moving Platform** 组件中，找到 **Preview Position** 滑动条
- 单击并拖动滑动条，查看 **MovingPlatform** 的路径

让我们将该平台的路径以正方形循环，从而略微提高路径的复杂程度。我们通过添加**节点**来实现这一点。

**节点**是 **Moving Platform** 组件的额外导航点。

[Image: image]

- 在 **Inspector** 中，找到 **Moving Platform** 组件
- 单击两次 **Add Node**

[Image: image]

此时将添加两条额外的红色虚线和两个辅助图标。使用辅助图标将额外的**节点**放置在正方形内。

你会注意到，从最后一个节点到起点之间没有路径。如果我们现在按 Play，则会停在最后一点，在路径中后退，然后重新开始。

可以更改平台的设置以使路径形成循环：

- 在 **Moving Platform** 组件中，找到 **Looping** 选项
- 单击 **BACK_FORTH** 下拉选单
- 选择 **Loop**

[Image: image]

这样就会在辅助图标中形成一个循环，而平台将采用此路径。

*注意：预览滑动条无法预览完整的循环，因此你需要按 Play 才能看到完整效果。*

[Image: image]

我们在套件中提供的每个组件都有许多选项可用于自定义组件的运行方式。有关 **Moving Platform** 组件中每个选项的功能的更多信息，请查看[组件文档](https://unity3d.com/learn/tutorials/projects/2d-game-kit/moving-platform?playlist=49633)并找到“移动的平台”部分。

Mark step as complete

## 5. 通过事件来开门

Q&A (0)

在 2D 游戏套件中，事件可用于创建操作。我们将使用事件在玩家踏上压力垫时触发开门。

让我们首先添加门：

- 在 **Project** 窗口中，选择 **Prefabs > Interactables**
- 找到 **Door** 预制件并将其拖入 **Scene 视图**中。将门放置在某个阻挡玩家路径的位置。

[Image: image]

现在，让我们将压力垫添加到场景中：

- 在 **Project** 窗口中，选择 **Prefabs > Interactables** 并找到 **PressurePad** 预制件
- 将该预制件拖到**门**前面的地面上

*注意：如果玩家看起来被压力垫挡住了，而不是踩在压力垫上，请稍微降低压力垫的高度。玩家很容易卡在碰撞体上。*

[Image: image]

我们已经定义一些事件。例如，踏上 **PressurePad** 就会播放声音并点亮。现在，让我们将 **PressurePad** 连接到 **Door** 游戏对象。

- 在 **Hierarchy** 窗口中，选择 **PressurePad**
- 在 **Inspector** 中，找到 **Pressure Pad** 组件
- 在 **On Pressed** 列表中，单击右下角的 + 以添加新事件
- 将 **Door** **游戏对象**从 **Hierarchy** 窗口拖到事件中的 None(Object) 字段
- 在 **No Function** 下拉选单中，找到 **Animator > Play(string)**

[Image: image]

- 在下拉选单下方显示的文本框中，输入文本 **DoorOpening**

[Image: image]

- 按 **Play** 并使用移动键（**A** 和 **D**）来跑到压力垫上。门应该会打开！

所有**动画剪辑 (Animation Clips)** 都存储在 **Project** 窗口中的 **Art > Animations > Animation Clips** 路径下。要在事件中播放不同的 Animator，必须完全匹配**动画剪辑**的名称（字符串）。

[Image: image]

如果你想触发开关而不是放置压力垫，可以使用同样的步骤来达到这一目的，但需要在 Prefabs 文件夹中选择 **ResusableSwitch**。试试看！

Mark step as complete

## 6. 敌人

Q&A (0)

此套件中有两个预制的敌人：Chomper 和 Spitter。在 Project 窗口中的 **Prefabs > Enemies** 下可以找到这些敌人。

[Image: image]

通过 Inspector 中的 **Enemy Behaviour** 组件可以控制这两种敌人。你可以使用此组件来调整属性，例如敌人的速度、视野 (FOV)、生命值等。每个敌人都有相同的组件，只是设置略有不同。请注意，除了设置特定值外，还可以在组件属性上单击并向左/向右拖动来调整值。

请尝试将 **Chomper** 添加到场景中。试试通过这些设置调整 Chomper 的速度和视野 (FOV)。切记，在运行模式下，可以按 **F12** 来确保已启用武器，并使用 **O** 或 **K** 来进行攻击。

[Image: image]

在上面的场景中，已选择 **Chomper**。我们已经调整他的 **View FOV** 和 **View Direction** 设置，使他在转身之前不会发现 Ellen：

[Image: image]

有关 **Enemy Behaviour** 组件的更多信息，请参阅[组件文档](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633)。

Mark step as complete

## 7. 用对象来造成伤害

Q&A (0)

在本节中，我们将探讨伤害系统。为此，我们将执行一系列步骤，将一个箱子投掷到 Spitter 身上来杀死他。抱歉啦，小家伙！

[Image: image]

首先绘制出一个关卡，让 Ellen 在关卡中处于较高位置，而 Spitter 则位于下方被投掷的平台上，如下所示：

[Image: image]

- 选择 **Prefabs > Enemies**，然后将 Spitter 拖入 **Scene 视图**中
- 将他放置在关卡的下部，靠近悬崖壁
- 选中 **Spitter** 后，找到 **Enemy Behaviour 脚本**
- 减小 **View Distance** 的数值，这样在测试此游戏时 **Spitter** 就不会立即向你射击

[Image: image]

- 在 **Project** 窗口中，选择 **Prefabs > Interactables**，然后单击 **PushableBox** 预制件并将其拖入 **Scene 视图**中
- 在 **Hierarchy** 窗口中选择 **PushableBox**，然后在 **Inspector** 中单击 **Add Component**
- 在**搜索框**中，键入 **Damage**
- 单击 **Damager** 以将其添加到 **PushableBox**

**Damager** 组件会告知具有 **Damageable 组件**的任何游戏对象（例如 Spitter 或 Chomper）会受到伤害。[组件文档](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633)中提供了关于此系统的更多深入信息。

[Image: image]

**Damager** 通过上图所示的绿色碰撞框来表示。这是造成伤害的区域。现在还没有涉及 **PushableBox**，所以我们将箱子推到 Spitter 身上时，不会伤害他。

让我们来移动碰撞框，使碰撞框与 **PushableBox** 的大小和位置大致相同。有两种方式可以做到这一点：

- 选择绿色碰撞框边缘上的绿点并将它们拖到 **PushableBox** 上方

[Image: image]

- 在 Inspector 中，找到 **Damager** 组件
- 调整 **Offset** 和 **Size** 来调整碰撞框的位置和大小。最简单的方法是左键单击这些字段文字，然后左右拖动来调整值。

[Image: image]

最后，我们需要确保对正确的游戏对象造成伤害。我们在编辑器中将对象分到不同的***层***中，以便可以轻松找到并区分对象：

- 选择 **PushableBox**
- 在 Inspector 中，找到 **Damager** 组件
- 在 **HittableLayers** 下拉选单中，选择 **Enemy** 层

[Image: image]

**PushableBox** 现在会对 **Enemy** 层上的任何对象（例如 Spitter）造成伤害。

尝试对其他敌人（甚至是 Ellen 本人）造成伤害！

Mark step as complete

## 8. 装饰

Q&A (0)

此套件还包括装饰性精灵，全部都用于套件中的示例游戏“资源管理器”。

提示：如果在示例游戏中有某个对象引起了你的注意，你可以找到这个对象的名称并在 Project 视图中进行搜索。

要使你的关卡适合发布到 Instagram 上，请在 Project 视图中的 **Art > Sprites > Environment** 下查找装饰。很多装饰都存储在子文件夹中，因此不要忘记展开小箭头并查看该类别中的其他精灵。

[Image: image]Mark step as complete

## 9. 传送玩家

Q&A (0)

可以将玩家从场景中的一个区域传送到另一个区域，或在不同关卡之间传送玩家。

#### **场景内传送**

为了在场景内传送玩家，我们需要设置一种**过渡**。为此，我们将创建两个预制件：

- TransitionStart
- TransitionEnd

首先，我们需要设置过渡的起点：

- 在 Project 窗口中，选择 **Prefabs > SceneControl**
- 找到 **TransitionStart** 预制件
- 将 **TransitionStart** 拖到 **Scene 视图**。将这个预制件放置在玩家行走时接触碰撞体（绿框）的位置。在上面的示例中，我们将预制件放置在门的另一侧：

[Image: image]

要设置目的地，请执行以下操作：

- 将另一个 **TransitionStart** 预制件从 **SceneControl** 文件夹拖入 **Scene 视图**中
- 在 Inspector 中，将这个预制件重命名为 **TransitionEnd**：

[Image: image]

现在，我们将两者关联在一起：

- 在 **Hierarchy** 中，选择 **TransitionStart** 游戏对象
- 在 **Inspector** 中，找到 **TransitionPoint** 组件
- 将 **Ellen** 游戏对象从 Hierarchy 拖入 **Transition Point** 组件的 **Transitioning Game Object** 字段
- 将 **Transition Type** 设置为 **Same Scene**

[Image: image]

这样可确保 Ellen 是传送的唯一对象，并且是在同一场景中传送她。

现在，让我们来设置目的地：

- 将 **TransitionEnd** 游戏对象拖入 **TransitionPoint** 组件的 **DestinationTransform** 字段
- 将 **Transition When** 设置为 **On Trigger Enter**

**On Trigger Enter** 表示仅在玩家进入碰撞体时（而不是按键时）激活过渡。如果你希望仅在玩家按下交互键 (**E**) 时才进行传送，请将 **Transition When** 设置为 **Interact Pressed**。

#### **传送到另一场景**

要使玩家过渡到新场景，我们需要两个预制件：

- **TransitionStart** 与上一节中使用的预制件相同，可将玩家“发送”到目的地。此预制件包含一个 **Transition Point** 组件。该组件可以定义传送起点位置以及传送应将玩家送到何处等所有属性。将此预制件放置在你希望过渡开始的位置。
- **TransitionDestination** 是一个“接收”玩家的预制件。此预制件包含一个 **Transition Destination** 组件。将此预制件放置在你希望过渡到的另一个场景中。

#### **设置 TransitionDestination**

让我们首先设置目的地，以便获得稍后在我们设置起点时需要的所有信息。要向场景添加过渡，请打开该场景，导航到 Project 窗口，然后选择 **Prefabs > SceneControl > TransitionDestination**。将此预制件放置在场景中你希望传送器到达的位置。

**TransitionDestinaton** 预制件包含一个 **Scene Transition Destination** 组件：

[Image: image]

- 首先，将 **Destination Tag** 设置为一个字母。具体设置为哪个字母不重要，只要具有该字母的这个 **Scene Transition Destination** 组件在场景中具有唯一性即可。
- 下一步，指定应该接收哪个游戏对象。将玩家游戏对象 (Ellen) 从 Hierarchy 窗口拖到 **Transitioning Game Object** 字段。
- 最后，确保你的目的地场景位于编辑器的 Build Settings 中。为此，请选择 **File > Build Settings**，然后单击 **Add Open Scenes**。

#### **设置** **TransitionStart**

这些设置与上一节中的相应设置基本相同，但有一些差异：

[Image: image]

- 将 **Transition Type** 设置为 **Different Level**
- 将 **New Scene Name** 设置为要发送到的目的地场景。
- 将 **Transition Destination Tag** 设置为你在 **Transition Destination** 组件中设置的 **Destination Tag** 字母。

#### 示例

让我们将玩家传送到游戏的第一个关卡。在 **Transition Start** 组件中，将设置更改为如下所示：

- 将 **Transition Type** 设置为 **Different Level**
- 将 **New Scene Name** 设置为 Zone1
- 将 **Transition Destination** 设置为 A

[Image: image]

按 Play 并走到过渡所在的位置。你应该一直走到 Zone1 的起点！

Mark step as complete

## 10. 乐在其中

Q&A (0)

此套件中的大多数对象都会使用压力垫 (Pressure Pad) 设置中显示的事件 (Events) 系统。

请探索现有场景（Zone 1 到 Zone 5）以了解如何使用事件和触发器来设置其他对象。

请参阅[组件文档](https://learn.unity.com/tutorial/2d-game-kit-reference-guide)以了解所有组件及其参数的详细信息。

关卡设计让你乐在其中！

Mark step as complete

## Complete this Tutorial

Mark all steps complete
