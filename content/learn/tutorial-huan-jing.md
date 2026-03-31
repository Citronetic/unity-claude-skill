[Image: image]

# 环境

Tutorial

Beginner

+0XP

20 mins

7

(692)

Unity Technologies

[Image: 环境]Summary

在上一教程中，您完成了游戏角色的创建。该角色可以四处走动，但目前还没有任何可供其探索的地方。现在，您可以为场景添加环境，设置正确的光照，并添加导航网格 (Navigation Mesh) 以使敌人可以最终游荡在鬼屋大厅！

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 添加环境

Q&A (0)

在上一教程中，您完成了游戏角色的创建。该角色可以四处走动，但目前还没有任何可供其探索的地方。现在，您可以为场景添加环境，设置正确的光照，并添加导航网格 (Navigation Mesh) 以使敌人可以最终游荡在鬼屋大厅！

在 Unity 中构建环境是一个根据制作的游戏类型不同而有所差异的过程。通常，这个过程涉及到将多个模型从 Project 窗口拖到 Hierarchy 窗口来实例化这些模型。环境通常需要在场景中有物理存在，因此随后要向每个模型添加碰撞体。这些部件通常是预制件，因此您不必每次都添加新的碰撞体。

创建游戏环境可能是一项非常耗费人力的过程，但您在设置玩家角色时已经练习了这些过程。为节省一些重复性的工作，我们已经为该游戏创建了环境，您只需对其进行实例化即可：

**1.**在 Project 窗口中，导航到 **Assets > Scenes 文件夹**，然后双击 MainScene 以加载该场景。

**2.**导航到 **Assets > Prefabs**，然后选择 **Level Prefab**。

**3.**将 **Level Prefab** 从 Project 窗口拖入 Hierarchy 以实例化该预制件。

关卡预制件 (Level Prefab) 包含多种模型，包括墙壁、地板、门、家具和装饰品。如果您想了解该预制件是如何组合在一起的，只需在 Hierarchy 窗口中展开其层级视图即可。

#### 定位玩家角色

现在，您在场景中有了一个环境，接下来需要定位 JohnLemon，以便该角色从正确的位置开始：

**1.**在 Hierarchy 窗口中，选择 JohnLemon 游戏对象。

**2.**在 Inspector 中，将 Transform 组件的 **Position** 属性设置为 (**-9.8**, **0**, **-3.2**)。

**3.**导航到 **File > Save** 并保存您对场景的更改。

**4.**进入播放模式以查看所做的更改。摄像机的位置不尽如人意，但现在有了一个可以让 JohnLemon 探索和逃跑的完整关卡。

这个环境很好，但是看起来有点单调。下一步是调整场景的**光照**。

Mark step as complete

## 2. 为环境设置光照

Q&A (0)

光照会对气氛产生重大影响，改变游戏中的光照是为玩家营造一个真正幽灵般环境的第一步。

Unity 中的光源只是添加了 Light 组件的游戏对象。光源组件包含一些设置可用于更改光源的颜色和强度，还有光源的“类型”以及各种用于阴影和光照贴图 (Lightmapping) 的更复杂的控制。

Unity 中的每个新场景都分配了**方向光 (Directional Light)**，这是默认创建的两个游戏对象之一。您的场景现在还具有由关卡预制件 (Level Prefab) 添加的一系列额外光源。

让我们从方向光开始。

Mark step as complete

## 3. 更改场景中的方向光

Q&A (0)

场景中的方向光设置为**方向类型 (Directional Type)**。方向类型的光源模拟很远的光源对象，例如太阳。这些光源可以放置在场景中的任何位置，并可以旋转光源以更改光线对场景的影响角度。

[Image: image]

让我们更改方向光，使其更像月光，并创建一些有趣的阴影：

**1.**在 Hierarchy 窗口中，选择 **Directional Light** 游戏对象。

**2.**您将更改 Light 组件的某些属性，从颜色 (Color) 开始，但是首先需要了解颜色的工作原理。

在 Inspector 中，单击 **Color** 属性。单击 Unity 中的任何 Color 属性都将打开**拾色器 (Color picker) 窗口**：

[Image: image]

**3.**拾色器 (Color picker) 窗口提供了许多不同的选项来设置颜色的值。

每种颜色均由四个通道组成：

- 红色
- 绿色
- 蓝色
- Alpha

这些通道中构成颜色的每个通道的数量可以用不同的方式表示。您可以使用色环下方的下拉菜单选择表示形式。

检查该下拉菜单是否设置为 **RGB 0-255**。这种表示形式意味着每个通道都由 0 到 255 之间的整数表示。

[Image: image]

**4.**将 Light 组件的 Color 属性设置为 (**225**, **240**, **250**)。这样将会产生非常浅的蓝光，而不是黄光。

**5.**在 Light 组件中，将 Intensity 属性增加到 **2**。

**6.**现在，您可以改善鬼屋中诡异阴影的质量。在 Light 组件中，找到 **Realtime Shadows** 属性。将其 **Resolution** 属性从 Use Quality Settings 更改为 **Very High Resolution**。

**7.**将 Realtime Shadows**Bias** 和 **Normal Bias** 属性设置为**0.01**。

**8.**在 Transform 组件中，将 **Rotation** 属性设置为 (**30**, **20**, **0**)。这样将会旋转光源，使光线穿透房屋的窗户。

**9.**保存您的场景。

场景已经看起来更加诡异了！

Mark step as complete

## 4. 创建全局光照之光照贴图 (Global Illumination Lightmapping) 效果

Q&A (0)

Unity 中有两种光照可以帮助您模拟真实的光照行为：直接 (Direct) 光照和间接 (Indirect) 光照。直接光照来自特定的光源，例如太阳（场景中的方向光）。间接光照是当直射光从表面反弹时产生的额外光照。

[Image: image]

*相同的场景：无光照（左）、仅具有“直射光”（居中）以及间接“全局光照”（右）。请注意颜色是如何在表面之间以光“反弹”的方式转变的，从而产生了更为真实的效果。*

这种效果通常都是在 Unity 中使用**全局光照之光照贴图 (Global Illumination Lightmapping)** 功能创建的。光照贴图可以模拟场景中的光反弹，并将其写入（即“烘焙”）到项目中存储的资源。这个过程需要时间，但可以产生十分逼真的场景。

为了节省时间，您可以使用近似算法来创建类似的效果：

**1.**找到 Window 菜单，并选择 **Rendering > Lighting Settings**。单击并拖动名称标签，然后将其停靠在 Inspector 窗口旁边。

Lighting Settings 窗口是 Unity 全局光照功能针对当前加载的场景提供的主要控制点。窗口中还包含环境光照 (Environment Lighting)、反射 (Reflections) 和雾效 (Fog) 的设置

**2.**在 Realtime Lighting 部分中，**禁用** **Realtime Global Illumination** 复选框。在 Mixed Lighting 部分中，**禁用** **Baked Global Illumination** 复选框。

[Image: image]

**3.**在 Environment 部分中，使用 **Skybox Material** 属性最右边的圈选按钮将该属性设置为 **None**（表示 null 引用）。该游戏不需要真实的天空，而是要使用其他光照。

[Image: image][Image: image]

**4.**在 Environment 部分中，将 **Environment Lighting Source** 设置为 **Gradient**。

Gradient 分为三个颜色字段：

- **Sky**，用于控制从场景上方发出的环境光。
- **Equator**，用于控制从地平线向场景中间传播的光线。
- **Ground**，用于控制从场景下方发出的光线。

您可以将渐变 (Gradient) 视为环绕整个场景的大球体。

**5.**将 **Sky** 颜色设置为浅灰色：(**170**, **180**, **200**)
此设置将提升地板以及床和桌子等对象的整体亮度。

**6.**将 Equator 颜色设置为蓝灰色：(**90**, **110**, **130**)
此设置将提升墙壁和道具的亮度。

**7.**将 Ground 颜色设置为黑色：(**0**, **0**, **0**)
Ground 颜色可以增加向上的光线，从而产生漂亮的全局光照风格效果。但是，对于您正在创建的鬼屋来说，这太明亮了。

**8.**保存您的场景。

您已经完成了游戏的基本光照并用来增强其幽灵般的气氛。接下来，您将创建一个网格以帮助幽灵在游戏环境中移动。

Mark step as complete

## 5. 添加导航网格

Q&A (0)

我们都知道，鬼屋有幽灵徘徊在大厅里，您的游戏应该也是这样！

为了帮助我们的幽灵寻路，Unity 内置了一个称为 **NavMesh**（即导航网格 (Navigation Mesh) 的缩写）的系统。在第二个教程中，您学习过“网格”是一组三角形的集合，这些三角形全部组合在一起以定义某个形状。这个网格使 JohnLemon 可以渲染到屏幕上。**导航网格 (NavMesh)** 是在地面上不可见的形状，定义了一个可以让选定游戏对象在其中移动的区域。

那么，您如何确定哪些区域可以移动，哪些区域不能移动？

#### 将游戏对象标记为 Static

当某个游戏对象标识为 **Static** 时，Unity 的导航系统会认为该游戏对象不会移动。游戏环境由许多游戏对象和许多 Mesh Renderer（网格渲染器）组件组成。来自 Mesh Renderer 组件（其游戏对象被标记为 Static）的所有网格将组合构成导航网格的基础。

要将环境游戏对象标记为 Static，请执行以下操作：

**1.**在 Hierarchy 中，选择 **Level** 游戏对象。

**2.**在 Inspector 中，启用 **Static** 复选框。

[Image: image]

**3.**随后将出现一个对话框，询问您是否也希望对所有子对象启用 Static 标志。选择 **Yes, change children**。

[Image: image]

**4.**现在，Level 游戏对象及其所有子游戏对象均被标记为 Static，但是您需要设置一个例外。关卡设计中有一个 **Ceiling Plane** 游戏对象用于投射阴影。如果将这个游戏对象包含在烘焙中，幽灵可能最终会在天花板上行走！听起来很阴森可怖，但不适合本游戏。

在 Hierarchy 窗口中，展开 **Level** 游戏对象及其子项。

**5.**导航到 **Level > Corridors > Dressing > Ceiling Plane**，选择 **Ceiling Pane** 游戏对象。

[Image: image]

**6.**在 Inspector 中，禁用 **Static** 复选框。

**7.**选择 **File > Save**，保存您的场景。

您可能已经注意到，您是在场景中而不是在关卡预制件 (Level Prefab) 中进行这些更改；您将覆盖此预制件的设置而不是对其进行更改。当您希望对标准模板进行少量更改时，这非常有用。

Mark step as complete

## 6. 创建导航网格

Q&A (0)

创建导航网格的过程称为**烘焙**。这是在 Navigation 窗口中完成的。

要烘焙导航网格，请执行以下操作：

**1.**在菜单栏中，选择 **Window > AI > Navigation** 以打开 Navigation 窗口。该窗口应该会与 Inspector 窗口停靠在一起。如果没有，请拖放并停靠到该位置。

**2.**Navigation 窗口顶部有 4 个选项卡：**Agents、Areas、Bake** 和 **Object**。

[Image: image]

选择 **Bake** 选项卡。

**3.**烘焙设置 (Bake settings) 控制如何构造导航网格的细节。第一组设置适用于穿梭于导航网格中的代理（游荡的精灵）：**导航网格代理 (NavMesh Agents)**。这些设置专门用于设置代理的尺寸以及代理可以穿越的地形。

[Image: image]

您需要针对游戏进行调整的唯一设置是 Agent Radius；游荡在鬼屋中的幽灵将小于默认大小。

将 **Agent Radius** 更改为 **0.25**。

**4.**选择窗口底部的 **Bake** 按钮。

烘焙过程将花费一秒钟到几分钟的时间，具体时长取决于计算机的计算能力。完成后，Scene 窗口中的环境将被**浅蓝色网格**覆盖。这是幽灵能够在其中移动的环境区域。

[Image: image]

导航网格仅在 Navigation 窗口打开且处于活动状态时才可见（如果切换到 Inspector 选项卡，则网格将从 Scene 视图中消失）。不用担心，即使看不到导航网格，它仍然存在！

**5.**请记住要保存场景，以免丢失任何更改。

Mark step as complete

## 7. 总结

Q&A (0)

在本教程中，您为 JohnLemon 添加了供其逃离的引人入胜的环境并设置合适的光照。您还烘焙了导航网格，因此敌人将能够在环境中移动。

您的游戏开始成形并且看起来很棒！现在是时候移动摄像机并添加后期处理效果了，这将使整个场景看起来更好。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
