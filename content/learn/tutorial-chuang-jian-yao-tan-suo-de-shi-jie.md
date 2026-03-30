[Image: image]

# 创建要探索的世界

Tutorial

Beginner

+0XP

15 mins

4

(346)

Unity Technologies

[Image: 创建要探索的世界]Summary

现在，你已经准备好构建自己的 RPG 游戏！第一步是创建玩家将探索的世界。此套件包含许多预制元素。你可以使用这些元素来设计有趣且引人入胜的环境，而无需使用任何代码。

在本教程中，你将：

- 了解用于创建世界的模板
- 绘制瓦片地图背景
- 创建房屋

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 创建新场景

Q&A (0)

让我们首先了解用于创建世界的模板。首先，请创建模板场景的副本：

**1.**在 Project 窗口中，选择 *Assets/Creator Kit - RPG/Scenes*。

**2.**选择 **BlankScene** 模板。

[Image: image]

**3.**在顶部菜单中，选择 **Edit > Duplicate**。

[Image: image]

**4.**在 Project 窗口中，右键单击新场景 (**BlankScene 1**)，然后选择 **Rename**。给你的场景取一个难忘的名字。

**5.**按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改。

**6.**双击新场景即可将其打开进行编辑。

Mark step as complete

## 2. 了解模板场景

Q&A (0)

开始创建游戏世界之前，我们先了解一下场景模板。

#### 集合游戏对象

Hierarchy 中包含场景的所有游戏对象。标题中带有 **Collection**（集合）字样的游戏对象是容器，用于组织可用于创建瓦片地图的不同元素。创建这些容器对象时，对应的游戏对象将存储在此处。

[Image: image]

#### 预制件游戏对象

在集合游戏对象下面是带有蓝色图标的三个游戏对象：

- Main Camera
- Controllers
- Character

[Image: image]

这些游戏对象已预先进行配置，使你的游戏能够正常运行。这些对象是预制件游戏对象，类似于模板，你可以进行复制和调整。

#### UI 游戏对象

UI 游戏对象包含一些带有用户界面设置的预制件游戏对象。这些游戏对象控制玩家在屏幕上看到的内容，例如，与角色背包有关的消息。

#### 世界游戏对象

世界游戏对象包含名称为 **Tilemaps** 的子预制件。在 Tilemaps 预制件中有四个可用于游戏设计的游戏对象：

- Background
- Midground
- Fences
- Foreground

Mark step as complete

## 3. 了解 Tilemap Palette

Q&A (0)

你将使用 **Tile Palette** 来创建 RPG 游戏的世界。这个窗口中有一些图像瓦片可用于在背景中进行绘制。在开始之前，我们先了解一下此窗口：

**1.**在顶部菜单中，选择 **Window > 2D > Tile Palette**。此时将打开 Tile Palette 窗口：

[Image: image]

你将使用此窗口在 RPG 游戏的背景中进行绘制。

**2.**单击 Tile Palette 窗口名称，然后将该窗口拖到 Inspector 窗口中。此操作会将 Tile Palette 停靠在 Inspector 的新选项卡中。

#### Tilemap Palette 包括哪些内容？

此 Tilemap Palette 包含四种瓦片：

- 背景地形 - 草、沙漠和水
- 房屋 - 墙壁和地板
- 地面特征 - 小石崖和高草丛
- 其他物品 - 栅栏、土圈和小路

你可以使用这些瓦片在不同的瓦片地图上绘制并创建要探索的世界。可将这些不同的瓦片地图视为位于彼此之上的图层，提供不同的细节级别：

- Background
- Midground
- Fences
- Foreground

Mark step as complete

## 4. 瓦片地图绘制简介

Q&A (0)

有两种有用的工具可与 Tilemap Palette 搭配使用来进行绘制：Tile Palette 工具栏和其他快捷键。

#### Tile Palette 工具栏

该工具栏中有许多有用的工具。

[Image: image]

此创作者套件的最有用工具为：

**选择工具**

[Image: image]

此工具可用于选择要绘制的瓦片。可选择一个或多个瓦片。或者，通过单击选择一个瓦片，然后拖动以选择多个瓦片。

**移动工具**

[Image: image]

移动工具可用于选择瓦片并将瓦片拖动到瓦片地图上的另一个位置。

**画笔工具**

[Image: image]

此工具将选定的瓦片绘制到 Scene 视图中。

**框填工具**

[Image: image]

此工具可用于在 Tilemap Palette 中选择一个瓦片，或者按住并拖动多个瓦片。

然后，可在瓦片地图上按住并拖动**矩形工具**以绘制一个矩形，其中将填充选定的瓦片。

**选取器工具**

[Image: image]

此工具可用于选择一个或多个瓦片。选择瓦片后，此工具将切换为画笔工具，以便你可以立即在瓦片地图上绘制。

**橡皮擦工具**

[Image: image]

此工具将擦除你在 Scene 视图中绘制的瓦片。

**填充工具**

[Image: image]

此工具可用于在一个或多个选定瓦片上绘制更大的世界区域。

#### 键盘和鼠标快捷方式

还有一些有用的快捷方式将帮助你绘制瓦片地图：

- Alt + 鼠标左键拖动 - 平移
- 鼠标滚轮键拖动 - 平移
- 旋转鼠标滚轮按钮 - 放大或缩小

你现在已了解 Tilemap Palette，接下来就可以开始绘制自己的瓦片地图了！

Mark step as complete

## 5. 绘制背景 (Background) 瓦片地图

Q&A (0)

首先，我们从瓦片地图的背景 (Background) 图层开始。此图层包括玩家角色将始终站立的所有对象（例如草地和房屋地板）。

要绘制此瓦片地图，请执行以下操作：

**1.**在 Hierarchy 中，选择 **Background** 游戏对象。

[Image: image]

**2.**在 Tile Palette 窗口中，确认 **Active Tilemap** 下拉菜单仍然设置为 **Background**。

（如果需要更改此下拉菜单并显示了 **Open in Prefab Mode** 对话窗口，请选择 **Scene**。）

[Image: image]

**3.**现在，你可以在背景中绘制！在 **Tile Palette** 中选择瓦片，然后在 Scene 视图中单击瓦片以绘制这些瓦片。请注意，你可以：

- 选择要绘制的各个瓦片（例如一个草地方块）。
- 在为此创作者套件设计的模块中选择要绘制的多个瓦片。

[Image: image]

**4.**按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存场景。

Mark step as complete

## 6. 向你的世界添加房屋

Q&A (0)

你还可以在自己的世界中添加房屋，从而为其中的居民提供居住之所。该操作在背景 (Background) 瓦片地图中进行。

要添加房屋，请执行以下操作：

**1.**在 Hierarchy 中，确认 **Background** 瓦片地图仍然为选中状态。

**2.**在 Tile Palette 窗口中，确认 **Active Tilemap** 下拉菜单仍然设置为 **Background**。

（如果需要更改此下拉菜单并显示了 **Open in Prefab Mode** 对话窗口，请选择 **Scene**。）

**3.**查看可用来创建房屋的瓦片。

[Image: image]

以下是有关主要瓦片类型的快速参考指南：

[Image: image]

此外也有带门窗的瓦片，这些瓦片仅仅是为了体现美观（角色将无法穿过这些瓦片）。在本教程的后文中，你将能够为空拱门或空瓦片添加一扇门。

**4.**首先，选择瓦片并将房屋的**地板**绘制到背景 (Background) 瓦片地图中。

**5.**现在可以在墙壁上绘制。墙壁包括可阻止玩家角色穿过的碰撞体，因此已添加到**中间地带 (Midground) 瓦片地图**。在 Hierarchy 中，选择此瓦片地图。****

**6.**在 Tile Palette 窗口中，使用下拉菜单将 **Active Tilemap** 设置为 **Midground**。如果显示 **Open in Prefab Mode** 对话窗口，请选择 **Scene**。

**7.**现在请在房屋墙壁上绘制。切记为门或敞开的入口留出空间。

[Image: image]

**8.** 按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存场景更改。

你的房屋是独一无二的，但是应该如下所示：

[Image: image]

房屋几乎要完成了，但还不完整，目前缺少屋顶和门。你需要以稍微不同的方式添加屋顶和门。

Mark step as complete

## 7. 为你的房屋添加屋顶

Q&A (0)

在此创作者套件中，屋顶和门比墙壁要复杂一些。因此，你需要以略微不同的方式添加屋顶和门。

让我们先从屋顶开始：

**1.**在 Hierarchy 中，右键单击 **World** 游戏对象并选择 **Create Empty**。此时将新建一个名为“GameObject”的子游戏对象。

**2.**右键单击 **GameObject**，然后从上下文菜单中选择 **Rename**。将新游戏对象命名为“**Objects**”。

**3.**在 Project 窗口中，选择 *Assets/Creator Kit - RPG/Prefabs*。选择 **HouseRoof** 预制件。

**4.**将 **HouseRoof** 预制件从 Project 窗口拖到 Hierarchy 中的 **Objects** 游戏对象上。

[Image: image]

**5.**选中 **HouseRoof** 游戏对象后，将光标置于 Scene 视图上并按 **F** 键。此操作将使 Scene 视图聚焦在屋顶上。

**6.**如果需要移动屋顶，可以使用**移动工具**来进行移动。在工具栏中，选择**移动工具**图标。

[Image: image]

在 Scene 视图中，单击并拖动屋顶，直到屋顶与所绘制房屋的一个角对齐为止。

**7.**接下来，需要调整屋顶的尺寸，以使其适合此房屋。在工具栏中，选择**矩形变换组件工具**。

[Image: image]

用光标单击并拖动屋顶的一角，从而针对你的房屋调整屋顶的大小。

[Image: image]

**8.**保存对场景的更改。

**提示：**要删除已添加的屋顶游戏对象（或任何其他游戏对象），请在 Hierarchy 中选择该游戏对象。然后，可执行以下操作之一：

- 右键单击该游戏对象，然后从上下文菜单选择 **Delete**。
- 选择该游戏对象并按 **Del** (Windows) 或 **Cmd + Backspace** (macOS)。

Mark step as complete

## 8. 为屋顶设置淡入淡出效果

Q&A (0)

现在，你的房屋已有屋顶，看上去很棒，但在游戏中探索时，很难看到屋内的情形。为了解决这个问题，我们可以在玩家角色进入建筑物时让屋顶产生淡入淡出效果：

**1.**在 Hierarchy 中，选择 HouseRoof 游戏对象。

**2.**在 Inspector 中，找到 HouseRoof 游戏对象的 **Sprite Renderer** 组件。将 **Order in Layer** 参数设置为 **1000**。

[Image: image]

这意味着玩家角色进入房屋时，屋顶将位于玩家的头顶而不是下方。

**3.**接下来，我们让屋顶淡入淡出，以便玩家的角色在进入房屋时玩家可以看到房屋内部。首先，需要确保仅在玩家进入被屋顶覆盖的空间时才会触发淡入淡出效果。

在 Inspector 中，单击 **Add Component** 按钮。搜索**“Box Collider 2D”**，然后将此组件添加到 HouseRoof。

[Image: image]

**4.**在 Inspector 中，启用 Box Collider 2D 组件的 **Is Trigger** 复选框。

[Image: image]

碰撞体为物理碰撞或其他交互定义了对象空间。在本示例中，当玩家进入由屋顶覆盖的空间时，便会触发特定效果。

**5.**再次单击 **Add Component**。搜索 **Fading Sprite** 脚本组件，然后将此组件添加到 HouseRoof。此脚本将提供你需要的效果：触发碰撞体时，精灵将淡入淡出。

**6.** 按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存场景更改。

**7.**进入**运行模式**以测试你的房屋及其屋顶效果！完成后，务必再次按 **Play** 以退出运行模式。

Mark step as complete

## 9. 调整屋顶的淡入淡出效果

Q&A (0)

如果你建造的是一间小屋，则屋顶淡入淡出效果应该会运行良好。但是，如果你建造的是一幢大型房屋，并且必须使屋顶的尺寸远大于默认尺寸，则可能会发现角色必须在房屋内移动很远才会触发屋顶淡入淡出效果。

[Image: image]

这是因为淡入淡出效果是由 **Box Collider 2D** 组件的 Size 值控制的。

要使角色一进入屋内就启动效果，你需要调整碰撞体的大小：

**1.**在 Hierarchy 中，选择 **World > Objects**。选择已添加到场景中的 **HouseRoof** 游戏对象。

**2.**在 Inspector 中，找到屋顶的 **Box Collider 2D** 组件。

**3.** 单击 **Edit Collider** 按钮。

[Image: image]

**4.**在 Scene 视图中，你会看到屋顶上（或周围）的绿色碰撞体盒体已变成白色。单击并拖动此盒体两侧的小方块以调整碰撞体的大小。

[Image: image]

你可能希望角色一穿过大门就使屋顶淡入淡出，或者在角色刚进入屋内时启动效果，这两种方式都可以！

**5.**对碰撞体大小感到满意后，再次单击 **Edit Collider**。

**6.**保存你的更改，然后在运行模式下测试这些更改。完成后，务必再次退出运行模式。

现在，可以为你的房屋装门了。

Mark step as complete

## 10. 为你的房屋添加一扇门

Q&A (0)

门的创建方法与屋顶类似。由于门更复杂一些，所以我们创建了一个**预制件**。你可以将此预制件拖放到你的世界中。预制件是你可以使用的模板，让你不必从头开始创建游戏对象。

要为你的房屋添加一扇门，请执行以下操作：

**1.**在 Project 窗口中，选择 *Assets/Creator Kit - RPG/Prefabs*。

**2.**将 **HouseOpenDoor** 预制件从 Project 窗口拖到 Hierarchy 中的 **Objects** 游戏对象上。

**3.**选中 **HouseOpenDoor** 游戏对象后，将光标置于 Scene 视图上并按 **F** 键。此操作将使 Scene 视图聚焦在门上。

**4.**如果需要移动门，可以使用**移动工具**来进行移动。在工具栏中，选择**移动工具**图标。

[Image: image]

在 Scene 视图中，单击并拖动门，直到这扇门与你留出的入口空间对齐为止。

**5.**接下来，可能需要调整门的尺寸，以使其适合此房屋。在工具栏中，选择**矩形变换组件工具**。

[Image: image]

**6.**用光标单击并拖动门的一角，从而针对你的房屋调整门的大小。

**7.**保存对场景的更改。

Mark step as complete

## 11. 为你的房屋添加烟囱

Q&A (0)

你还可以向房屋添加烟囱预制件，从而为房屋增添生活氛围：

**1.**在 Project 窗口中，选择 *Assets/Creator Kit - RPG/Prefabs*。

**2.**将 **HouseChimney** 预制件从 Project 窗口拖到 Hierarchy 中的 **Objects** 游戏对象上。

**3.**选中 **HouseChimney** 游戏对象后，将光标置于 Scene 视图上并按 **F** 键。此操作将使 Scene 视图聚焦在烟囱上。

**4.**在工具栏中，选择**移动工具**图标。

在 Scene 视图中，单击并拖动烟囱，直到烟囱在屋顶上位于所需的位置。

**5.**接下来，需要调整烟囱的尺寸，使烟囱在屋顶上显得美观。在工具栏中，选择**矩形变换组件工具**。

**6.**用光标单击并拖动烟囱的一角，从而针对你的房屋调整烟囱的大小。

**7.**保存对场景的更改。

**8.**按照与屋顶相同的过程，向烟囱游戏对象添加淡入淡出效果。

**9.**再次保存对场景的更改，然后进入运行模式以测试这些更改。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
