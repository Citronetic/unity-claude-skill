[Image: image]

# 敌人，第 2 部分：动态 Observer

Tutorial

Beginner

+0XP

40 mins

0

Unity Technologies

[Image: 敌人，第 2 部分：动态 Observer]Summary

您已经创建了一个 John Lemon 必须避开的敌人，但这似乎并不能构成高难度的挑战。现在，让我们创建另一个敌人，从而增加玩家的挑战难度。

在本教程中，您将：

- 创建一个动态的幽灵 (Ghost) 敌人
- 编写自定义脚本，使幽灵可以在鬼屋中游荡
- 在游戏中填充敌人

学完本教程后，您的游戏将充满敌人，并且游戏几乎完成！

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 设置幽灵 (Ghost) 预制件

Q&A (0)

在上一教程中，您为鬼屋添加了一个石像鬼 (Gargoyle) 敌人。现在，您将通过创建动态（移动）的敌人来提高关卡的挑战难度。这次，您将创建一个幽灵 (Ghost)，这个幽灵将在鬼屋大厅内游荡以搜寻 JohnLemon。

使用幽灵模型的第一步是创建一个预制件，您现在应该非常熟悉此过程。

**1.**在 Project 窗口中，打开 **Assets > Models > Characters** 文件夹，然后找到 **Ghost** 资源。

[Image: image]

**2.**将幽灵模型从 Project 窗口拖入 Hierarchy 窗口，从而创建模型的实例。

**3.**将 Ghost 游戏对象从 Hierarchy 窗口中拖入 Project 窗口中的 **Assets > Prefabs** 文件夹。当 Create Prefab 对话框出现时，选择 **Original Prefab**。

**4.**打开预制件进行编辑。

Mark step as complete

## 2. 动画化幽灵

Q&A (0)

下一步是使新敌人动画化。幽灵也将具有一个简单的 Animation Controller，因为它将循环播放单个动画。

要动画化幽灵，请执行以下操作：

**1.**在 Project 窗口中，选择 **Assets > Animation > Animators** 文件夹，然后右键单击该文件夹。

**2.**在上下文菜单中，选择 **Create > Animator Controller。**将新的 Animation Controller 命名为“**Ghost**”。

**3.**双击 **Ghost** 以打开 Animator 窗口。

**4.**在 Project 窗口中，导航到 **Assets > Animation > Animations**。

**5.**展开 **Ghost@Walk** 模型资源。

[Image: image]

**6.**将 **Walk** 动画从 Project 窗口拖入 Animator 窗口。

幽灵 (Ghost) 的简单 Animation Controller 已完成，但仍需要将其分配给 Animator 组件。

**7.**在 Project 窗口中，选择 **Assets > Animation > Animators** 文件夹。

**8.**在 Hierarchy 窗口中，选择 **Ghost** 游戏对象。

**9.**将 Ghost Animator Controller 从 Project 窗口拖到 Inspector 中 Ghost 的 Animator 组件的 **Controller** 属性上。

**10.**保存场景。

Mark step as complete

## 3. 向幽灵添加碰撞体

Q&A (0)

就像 JohnLemon 和石像鬼一样（尽管可能有点违反直觉！），幽灵需要在场景中保持物理存在。这意味着它们将需要一个碰撞体。

要添加碰撞体，请执行以下操作：

**1.**确保 Unity Editor 仍处于预制件模式。如果没有，可以使用创建石像鬼 (Gargoyle) 预制件时学到的快捷方式。

**2.**在 Inspector 中，将 **Capsule Collider 组件**添加到 Ghost 游戏对象。

**3.**让我们来调整设置，使碰撞体更适合幽灵模型：

- 将 Capsule Collider 的 **Center** 属性设置为 (**0**, **0.6**, **0**)
- 将 **Radius** 属性更改为 **0.25**
- 将 **Height** 属性更改为 **1.2**

[Image: image][Image: image]

现在碰撞体适配得很好！

Mark step as complete

## 4. 向 Ghost 游戏对象添加 Rigidbody 组件

Q&A (0)

幽灵正在移动，因此还将需要一个刚体 (Rigidbody)。您需要谨慎进行此设置：与 JohnLemon 的碰撞不应引起幽灵的任何移动。

您可以通过启用所有的位置和旋转约束来避免移动，但是更简单的方法是将刚体设置为**运动**性质。

在 Inspector 中，找到 Ridigbody 组件，并**启用** **Is Kinematic** 复选框。

[Image: image]

运动刚体不会受到诸如碰撞之类的外力的影响，但仍会与其他游戏对象碰撞。打砖块 (Breakout) 游戏中的挡板便是运动刚体的完美示例：球从挡板上弹起，但挡板不受反弹的影响。

Mark step as complete

## 5. 将幽灵 (Ghost) 设置为 Observer

Q&A (0)

幽灵 (Ghost) 预制件现在具有所有基本要素，但目前不会移动或发现 JohnLemon。您已经为控制此情况的石像鬼 (Gargoyle) 预制物创建了 PointOfView 游戏对象，让我们为其创建一个预制件，而不是重复所有工作！

要将幽灵 (Ghost) 设置为 Observer，请执行以下操作：

**1.**首先，保存对 Ghost 预制件的更改。

[Image: image]

**2.**在 Project 窗口中，打开 **Assets > Prefabs** 文件夹，然后选择 **Gargoyle** 预制件。

**3.**在 Inspector 窗口中，单击 **Open Prefab** 按钮。

**4.**在 Hierarchy 中，找到先前为 Gargoyle 创建作为子项的 **PointOfView** 游戏对象。

您将把这个游戏对象变成一个预制件，以便石像鬼 (Gargoyle) 和幽灵 (Ghost) 预制件都可以引用它。

**5.**将 PointOfView 游戏对象从 Hierarchy 窗口中拖入 Project 窗口中的 **Assets > Prefabs** 文件夹。

**6.**您应该会看到，Hierarchy 中的 PointOfView 游戏对象现在由蓝色立方体而不是灰色立方体表示，并且名称是蓝色而不是灰色。这是因为它现在是一个预制件实例！

[Image: image]

**7.**保存石像鬼 (Gargoyle) 预制件。

**8.**在 Project 窗口中，导航到 **Assets > Prefabs**，然后选择 Ghost 预制件。单击 Open Prefab 按钮。

**9.**将 PointOfView 预制件从 **Assets > Prefabs** 文件夹拖到 Hierarchy 窗口中的 **Ghost** 游戏对象上。

[Image: image]

现在，幽灵 (Ghost) 也具有 PointOfView，并且可以使用其所有功能！但是需要进行一些调整，以便 PointOfView 可以针对此敌人正常工作。石像鬼 (Gargoyle) 比幽灵 (Ghost) 更高并俯视，而幽灵则需要向前直视。

**10.**在 Hierarchy 窗口中，选择 **PointOfView** 游戏对象。

**11.**在 Inspector 中，找到其 Transform 组件。

- 将 **Position** 属性更改为 (**0**, **0.75**, **0.4**)
- 将 **Rotation** 属性更改为 (**0**, **0**, **0**)

[Image: image]

现在，幽灵 (Ghost) 已设置为 Observer。如果需要，您还可以更改 PointOfView 预制件以更新游戏中已有的两个敌人。

Mark step as complete

## 6. 设置 Nav Mesh Agent 组件

Q&A (0)

现在，您可以设置幽灵，以便它可以在您的游戏环境中移动。

您将使用两个组件来执行此操作：

- 一个是 Nav Mesh Agent，此组件将使幽灵可以在“环境教程”中烘焙的导航网格周围找到路径
- 一个是脚本，该脚本向 Nav Mesh Agent 指明幽灵应该前往的目的地

让我们先创建一个 Nav Mesh Agent：

**1.**在 Inspector 中，将 **Nav Mesh Agent** 组件添加到 Ghost 游戏对象。

[Image: image]

大多数情况下，您可以使用此组件的默认设置，但是需要调整一些设置。

**2.**在 Scene 视图中，您应该会看到幽灵周围有 Nav Mesh Agent 的圆柱体表示。

[Image: image]

这有点大。在 Inspector 中，将 Nav Mesh Agent 组件的 **Radius** 属性更改为 **0.25**。

该代理 (agent) 的高度也比幽灵高很多，但是由于环境中没有天花板，所以这无关紧要。

**3.**将 Nav Mesh Agent 组件的 **Speed** 属性更改为**1.5**。对于幽灵来说，3.5 米/秒的默认速度非常快，因此会使游戏的难度有点过高。

**4.**将 Nav Mesh Agent 组件的 **Stopping Distance** 属性更改为**0.2**。对于幽灵与路径点的接近程度，您不需要太高的精确度，因此可以增加 Nav Mesh Agent 距其目标的距离，并且仍然可以认为自己已到达。

[Image: image]

**5.**保存所做的更改。

现在已设置了 Nav Mesh Agent，但它本身不会自动执行任何操作。它需要设置目标，为此，您需要编写脚本。

Mark step as complete

## 7. 创建新的 WaypointPatrol 脚本

Q&A (0)

您游戏中的幽灵将通过在一系列路径点之间循环巡逻来实现移动，因此我们将这个脚本命名为 WaypointPatrol 是很有道理的。在继续之前，不要忘记保存所做的更改。

要创建新脚本，请执行以下操作：

在 Project 窗口中，选择 **Assets > Scripts**。

**1.**右键单击 Scripts 文件夹，然后选择 **Create > C# Script**。将新脚本命名为“**WaypointPatrol**”。

**2.**在 Hierarchy 中，选择 Ghost 游戏对象。

**3.**将新创建的 WaypointPatrol 脚本从 Project 窗口拖入 Inspector 窗口，从而将其作为组件添加到 Ghost 游戏对象。

**4.**双击 WaypointPatrol 脚本即可将其打开进行编辑。

Mark step as complete

## 8. 设置 Nav Mesh Agent 的目标

Q&A (0)

在开始编辑脚本之前，让我们先简单考虑一下它需要做什么。无论是在首次加载场景时还是在幽灵已到达其目标时，脚本都应设置 Nav Mesh Agent 的目标。为了知道何时到达目标，您需要检查每一帧。

让我们开始编辑新脚本：

**1.**您将需要同时在此脚本中使用 Start 和 Update 方法，因此不应该像以前一样删除它们。相反，只应该删除 Start 和 Update 方法上方的**注释**。

脚本现在应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaypointPatrol : MonoBehaviour
{
    void Start ()
    {

    }

    void Update ()
    {

    }
}
```

**2.**您需要告诉 Nav Mesh Agent 它应该具有的目标，因此需要对其进行引用。为了给 Nav Mesh Agent 编写任何脚本，您需要包含其命名空间。

在脚本顶部与其他 using 指令一起，添加以下代码：

```csharp
using UnityEngine.AI;
```

包含 AI 命名空间将让您能够访问 **NavMeshAgent 类**。

**3.**在 Start 方法上方添加以下行：

```csharp
public NavMeshAgent navMeshAgent;
```

这个对组件的公共引用将使您能够在 Inspector 窗口中分配 Nav Mesh Agent 引用。

**4.**接下来，您需要设置幽灵应该巡逻的路径点。Nav Mesh Agent 的目标是 Vector3 矢量，即世界空间中的位置。但是，假如将路径点设置为 Vector3，则必须手动设置所有位置，并希望使用的数字准确无误。

相反，合理的做法是采用一组空游戏对象并将它们的位置用作路径点。在场景中移动这些游戏对象将变得轻松得多，进而使您想要进行的任何更改都变得简单得多。但是，您可以不引用一组游戏对象，而只是引用这些游戏对象的 Transform 组件。您可以直接声明几个公共 Transform 变量，然后在 Inspector 窗口中分别设置每个变量，但在每个幽灵可以拥有的路径点数量方面，这种方案没有太大的灵活性。

实际上，更好的方案是使用**数组**。数组是一起存在的变量的基本集合。数组是通过方括号定义的。

在 navMeshAgent 变量声明下面添加以下行

```csharp
public Transform[] waypoints;
```

此行代码声明了一个名为 **waypoints** 的公共变量，这是一个 Transform 数组。

**5.**接下来，在 Start 方法中添加一行代码以设置 Nav Mesh Agent 的初始目标：

```csharp
navMeshAgent.SetDestination(waypoints[0].position);
```

Mark step as complete

## 9. 数组的工作原理

Q&A (0)

为进一步了解数组的工作原理，让我们进行如下探讨：

您的代码行会调用 Nav Mesh Agent 组件的 SetDestination 方法。这个方法采用 Vector3 作为参数，因此您要使用数组中第一个路径点 Transform 的位置属性。

组成数组的每一项称为**元素**。使用方括号中的索引可以访问数组中的各个元素。“索引”可以视作为了获得所需元素而需要从数组开头跳过的元素数量。您无需跳过任何元素即可访问第一个元素，因此第一个元素的索引为 **0**。

Mark step as complete

## 10. 添加更多目标

Q&A (0)

让我们继续向脚本添加：

**1.**当幽灵到达设置为目标的最后一个路径点时，需要继续前进到下一个路径点。跟踪下一个路径点的最简单方法是存储路径点数组的当前索引。

在 waypoints 数组声明下面，添加以下代码：

```csharp
int m_CurrentWaypointIndex;
```

**2.**接下来，让我们前往 Update 方法，以便可以使用这个索引。

在 Update 方法中，您需要执行检查：您想知道 Nav Mesh Agent 是否已到达其目标。一种简单的检查方法是查看到目标的剩余距离是否小于您先前在 Inspector 窗口中设置的停止距离。

在 Update 方法中添加以下 if 语句：

```csharp
if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {

        }
```

**3.**现在，您需要更新当前索引，然后将其用于设置 Nav Mesh Agent 的目标。为此，您将使用一个称为**求余运算符**的新运算符，该运算符由百分比字符 **%** 表示。

在 if 语句中添加以下代码：

```csharp
m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
```

求余运算符取其左边的数，除以其右边的数，然后返回余数。例如，3 % 4 将返回 3（因为 3 被 4 整除零次，剩余为 3）。5 % 4 将返回 1（因为 5 被 4 整除一次，剩余为 1）。

您的代码表示：“将当前索引加 1，但是如果该增量导致索引等于 waypoints 数组中元素的数量，则将索引设置为零。”在这种情况下，索引将被设置为零，因为任何数字除以本身时，余数均为零。

**4.**现在您已经增加了索引（并在必要时将其循环回零），接下来需要使用索引。在索引增量设置下面添加以下代码：

```csharp
navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
```

这与您在 Start 方法中所做的完全一样，唯一不同之处是使用幽灵当前所在的路径点作为索引，而不是使用零作为索引。

**5.**就是这样！您完成的脚本应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class WaypointPatrol : MonoBehaviour
{
    public NavMeshAgent navMeshAgent;
    public Transform[] waypoints;

    int m_CurrentWaypointIndex;

    void Start ()
    {
        navMeshAgent.SetDestination (waypoints[0].position);
    }

    void Update ()
    {
        if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {
            m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
            navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
        }
    }
}
```

**6.**保存脚本，然后返回到 Unity Editor。

Mark step as complete

## 11. 将 Nav Mesh Agent 引用分配给幽灵 (Ghost) 预制件

Q&A (0)

您应该能够在 Inspector 窗口中看到需要为路径点分配 Nav Mesh Agent 引用和一些 Transform 组件。Nav Mesh Agent 引用对于每个预制件实例都将是相同的，因此您可以立即进行该分配。但是，每个幽灵的路径点都会有所不同，因此不应成为预制件的一部分；除此之外，这些路径点将成为场景的一部分，因此无法被幽灵 (Ghost) 预制件引用。

**1.**在 Hierarchy 窗口中，选择 **Ghost** 游戏对象。

**2.**在 Inspector 窗口中将 **Nav Mesh Agent** 组件的名称向下拖到 Waypoint Patrol 脚本的 Nav Mesh Agent 字段上。这样将分配 Nav Mesh Agent 引用。

[Image: image]

**3.**保存幽灵 (Ghost) 预制件，然后返回到场景中。

**4.**让我们检查一下幽灵 (Ghost) 的 Observer 脚本是否具有所需的引用。在 Hierarchy 中，展开 Ghost 游戏对象并选择 **PointOfView** 子游戏对象。

**5.**将 JohnLemon 游戏对象从 Hierarchy 窗口拖到 Observer 脚本的 **Player** 字段上以便分配其 Transform 组件。

**6.**接下来，单击圈选按钮并分配 GameEnding 字段。由于场景中只有一个 GameEnding 组件，因此只有一个选项可供您选择。

您的敌人现在快完成了！您只需要添加更多的幽灵并分配它们的路径点，然后再添加几个静态的石像鬼。

Mark step as complete

## 12. 在场景中放置幽灵

Q&A (0)

现在，您可以将敌人添加到场景中了！首先，创建四个重复的幽灵 (Ghost)，并在关卡中填充移动的敌人：

**1.**在 Hierarchy 窗口中，折叠并随后选择 **Ghost** 游戏对象。通过按 Ctrl + D (Windows) 或 CMD + D (macOS) 复制该游戏对象，直到获得四个幽灵 (Ghost) 副本为止。

**2.**第一个幽灵应该在 JohnLemon 开始进入的房间附近来回移动。在 Inspector 中，将名为 **Ghost** 的幽灵的位置设置为 (**-5.3**, **0**, **-3.1**)。

**3.**第二个幽灵将会沿着一条长走廊来回移动，因此 JohnLemon 必须躲进两侧房间才能通过。将名为 **Ghost (1)** 的幽灵的位置设置为 (**1.5**, **0**, **4**)。

**4.**第三个幽灵将围绕其中一间餐厅中的餐桌移动。将名为 **Ghost (2)** 的幽灵的位置设置为 (**3.2**, **0**, **6.5**)。

**5.**最后一个幽灵将在出口附近的卧室里四处走动，因此，如果 JohnLemon 走错了路，就会被抓住。将名为 **Ghost (3)** 的幽灵的位置设置为 (**7.4**, **0**, **-3**)。

现在您已经确定了幽灵的位置，接下来需要创建并定位它们的路径点。

Mark step as complete

## 13. 创建和定位幽灵路径点

Q&A (0)

路径点只需要是空游戏对象即可，因为您仅使用它们的 Transform 组件，并且所有游戏对象都具有 Transform 组件。为了尽可能高效，您将创建所有路径点，然后定位并分配这些路径点。

要设置和分配路径点，请执行以下操作：

**1.**在 Hierarchy 窗口中，单击 Create 按钮并选择 **Create Empty**。

**2.**将新创建的空游戏对象重命名为“**Waypoint**”。

**3.**复制 Waypoint 游戏对象九次，总共创建十个路径点：Waypoint 到 Waypoint (9)。

**4.**在 Hierarchy 中，选择 **Ghost** 游戏对象。

**5.**在 Inspector 中，向下滚动直到 **Waypoint Patrol 组件**可见。

**6.**将 **Waypoint** 游戏对象从 Hierarchy 窗口拖到 Waypoints 字段的名称上以便将该游戏对象添加到数组。

**7.**将 **Waypoint (1)** 游戏对象也拖到 Waypoints 字段的名称上以便将该游戏对象添加到数组。

**8.**您的第一个幽灵在其数组中有两个路径点，但是您需要对这些路径点进行定位。该幽灵将在起始房间中来回移动。

- 在 Inspector 中，将 **Waypoint** 的位置设置为 (**-5.3**, **0**, **6.7**)。
- 将 **Waypoint (1)** 的位置设置为 (**-5.5**, **0**, **-4.5**)。

**9.**第二个幽灵将在两侧有房间的走廊上来回移动。选择 **Ghost (1)** 游戏对象，并将 **Waypoint (2)**和 **Waypoint (3)** 分配给其 Waypoints 数组。

- 将 **Waypoint (2)** 的位置设置为 (**1.2**, **0**, **7.7**)。
- 将 **Waypoint (3)** 的位置设置为 (**0.9**, **0**, **-3.5**)。

**10.**第三个幽灵将围绕餐厅中的餐桌移动，并需要更多路径点。

- 选择 **Ghost (2) 游戏对象**，并将 **Waypoint (4)**、**Waypoint (5)**、**Waypoint (6)** 和 **Waypoint (7)** 分配给其 Waypoints 数组。
- 将 **Waypoint (4)** 的位置设置为 **(3.2, 0, 5.6)**。
- 将 **Waypoint (5)** 的位置设置为 **(3.2, 0, 12.3)**。
- 将 **Waypoint (6)** 的位置设置为 **(6.5, 0, 12.3)**。
- 将 **Waypoint (7)** 的位置设置为 **(6.5, 0, 5.6)**。

**11.**最后一个幽灵在右下方的卧室中。选择 **Ghost (3)** 游戏对象，并将 **Waypoint (8)** 和 **Waypoint (9)** 分配给其 Waypoints 数组。

- 将 **Waypoint (8)** 的位置设置为 **(3.2, 0, -5)**。
- 将 **Waypoint (9)** 的位置设置为 **(7.4, 0, -2)**

就是这样，您的幽灵已经完成！

Mark step as complete

## 14. 在场景中放置石像鬼

Q&A (0)

接下来，将三个石像鬼放置在关卡中：

**1.**复制两次 **Gargoyle** 游戏对象以创建总共三个石像鬼。

**2.**您已经放置了第一个石像鬼。第二个应该在长走廊的最下端，这样 JohnLemon 不能往下走太远。

- 将 **Gargoyle (1)** 的位置设置为 **(-2.6, 0, -8.5)**。
- 将 **Gargoyle (1)** 的旋转设置为 **(0, 30, 0)**。

**3.**第三个石像鬼应该位于餐厅旁边走廊的拐角处，所以如果 JohnLemon 走错了路，就会被抓住。由于这个石像鬼将与第一个石像鬼在同一个角落，因此您无需更改旋转角度，但仍需要调整位置。

- 将 **Gargoyle (2)** 的位置设置为 **(-4.8, 0, 10.6)**。

现在，您的关卡中填满了一系列敌人，使 JohnLemon 的逃生更具挑战性。

Mark step as complete

## 15. 清理 Hierarchy 窗口

Q&A (0)

在完成敌人及其路径点之前，还有最后一件事要做：清理。Hierarchy 窗口当前看起来有点混乱：

[Image: image]

最好的解决方案是创建一些空游戏对象，它们可以作为敌人和路径点的父项。因此，您可以根据需要展开或折叠它们，并使 Hierarchy 窗口保持整洁。

要清理 Hierarchy，请执行以下操作：

**1.**在 Hierarchy 窗口中，创建一个空游戏对象。将其重命名为“**Enemies**”。

**2.**在 Inspector 中，将 **Enemies** 的位置设置为 **(0, 0, 0)**。这将充当所有 Ghost 和 Gargoyle 游戏对象的父项。

**3.**按住 Ctrl 键 (Windows) 或 CMD 键 (macOS)，然后在 Hierarchy 窗口中单击每个幽灵和石像鬼。全部选定后，将它们拖到 **Enemies** 游戏对象上以使该游戏对象成为它们的父项。

[Image: image]

现在，您可以随时根据需要展开和折叠敌人。接下来，您需要对路径点执行相同的操作。

**4.**在 Hierarchy 窗口中，创建一个空游戏对象。将其重命名为“**Waypoints**”。

**5.**在 Inspector 中，将 **Waypoints** 的位置设置为 **(0, 0, 0)**。这将充当所有 Ghost 和 Gargoyle 游戏对象的父项。

**6.**按住 Ctrl 键 (Windows) 或 CMD 键 (macOS)，然后在 Hierarchy 窗口中单击每个路径点。全部选定后，将它们拖到 **Waypoints** 游戏对象上以使该游戏对象成为它们的父项。

[Image: image]

就是这样，您已经整理好敌人了！

请保存场景并进入播放模式对其进行测试。完成后，务必退出播放模式。

Mark step as complete

## 16. 总结

Q&A (0)

在本教程中，我们为游戏创建完了敌人。任务几乎要完成了！现在还有点安静，虽然光源会发出一些嗡嗡声，但最好有更多声音来增强氛围。在下一教程中，您将为游戏添加更多音频。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
