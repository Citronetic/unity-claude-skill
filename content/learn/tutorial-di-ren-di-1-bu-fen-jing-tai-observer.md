[Image: image]

# 敌人，第 1 部分：静态 Observer

Tutorial

Beginner

+0XP

55 mins

0

Unity Technologies

[Image: 敌人，第 1 部分：静态 Observer]Summary

您现在已经花了很长时间开发游戏，并不断提高了对 C# 脚本的理解。但是这个游戏缺少了一些东西：如果潜行游戏中没有可以躲避的敌人，还有什么意义？

在本教程中，您将：

- 创建一个静态的石像鬼 (Gargoyle) 敌人
- 编写自定义脚本，使石像鬼可以找到 JohnLemon
- 将游戏设置为在抓到 JohnLemon 时重新开始

学完本教程后，您将为关卡准备好一种敌人。

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 设置石像鬼 (Gargoyle) 预制件

Q&A (0)

现在您的游戏正在成形：JohnLemon 可以在环境中移动，摄像机跟随着他，当他离开鬼屋时，游戏结束。不过，这里还缺少用于增加游戏难度的敌人！

在本教程中，您将向鬼屋添加一个静态的石像鬼敌人。

第一步是将石像鬼模型引入场景，就像您对 JohnLemon 所做的一样：

**1.**在 Project 窗口中，导航到 **Assets > Models** 文件夹，然后找到 **Gargoyle** 资源。

[Image: image]

**2.**将该资源从 Project 窗口拖入 Hierarchy 窗口，从而创建模型的实例。

**3.**这个鬼屋需要多个石像鬼。请记住，模型是只读的；要进行编辑，您将需要创建一个预制件。

将 Gargoyle 游戏对象从 Hierarchy 窗口拖入 Project 窗口中的 **Assets > Prefabs** 文件夹。当 Create Prefab 对话框出现时，选择 **Original Prefab**。

**4.**现在您有了石像鬼 (Gargoyle) 预制件，可以将其打开进行编辑。这次，您将使用快捷方式！在 Hierarchy 中，单击 **Gargoyle 游戏对象右侧的箭头**：

[Image: image]

该预制件将打开供您编辑。

现在，您已经将石像鬼添加到游戏中，接下来便可以对其进行配置了。首先，让我们使其动画化！

Mark step as complete

## 2. 动画化石像鬼

Q&A (0)

像 JohnLemon 一样，石像鬼也有标志性的动作为其赋予个性并增加游戏的气氛。石像鬼将试图抓住玩家！

石像鬼只一段可以播放的动画，因此其 Animation Controller 将非常简单：

**1.**在 Project 窗口中，选择 **Assets > Animation > Animators** 文件夹，然后右键单击该文件夹。

**2.**在上下文菜单中，选择 **Create > Animator Controller。**将新的 Animation Controller 命名为“**Gargoyle**”。

**3.**双击 **Gargoyle** 以打开 Animator 窗口。

**4.**在 Project 窗口中，导航到 **Assets > Animation > Animations**。

**5.**展开 **Gargoyle@Idle** 模型资源。

[Image: image]

**6.**将 **Idle** 动画从 Project 窗口拖入 Animator 窗口。此时将创建一个空闲动画器状态 (Idle Animator State)。

石像鬼 (Gargoyle) 的简单 Animation Controller 已完成，但仍需要将其分配给 Animator 组件。

**7.**在 Project 窗口中，选择 **Assets > Animation > Animators** 文件夹。

**8.**在 Hierarchy 窗口中，选择 **Gargoyle** 游戏对象。

**9.**将 Gargoyle Animator Controller 从 Project 窗口拖到 Inspector 中 Gargoyle 的 Animator 组件的 **Controller** 属性上。

**10.**保存场景，然后进入播放模式以查看石像鬼的实际效果！完成后，请务必退出播放模式。

Mark step as complete

## 3. 向石像鬼添加碰撞体

Q&A (0)

接下来，您需要确保玩家可以撞到石像鬼，并且可以通过其手电筒光束看到 JohnLemon，这便是碰撞体的作用。

要添加碰撞体，请执行以下操作：

**1.**确保 Unity Editor 仍处于预制件模式。如果没有，可以使用创建石像鬼 (Gargoyle) 预制件时学到的快捷方式。

**2.**在 Inspector 中，将 **Capsule Collider 组件**添加到 Gargoyle 游戏对象。

[Image: image]

Capsule Collider 是适合于这个敌人的形状。

**3.**现在调整设置，使其更适合石像鬼模型：

- 将 Capsule Collider 的 **Center** 属性设置为 (**0**, **0.9**, **0**)
- 将 **Radius** 属性更改为 **0.3**
- 将 **Height** 属性更改为 **1.8**

[Image: image][Image: image]

这样就合适多了！现在，玩家可以撞到石像鬼。

Mark step as complete

## 4. 创建触发器以模拟石像鬼的视线

Q&A (0)

石像鬼仍然需要一种方法来发现 JohnLemon。先前在创建游戏终点时，您已经使用角色的实际位置来触发事件；在这里，您也可以执行同样的操作。您将要编写一个自定义脚本，以确保石像鬼无法透过墙壁看到玩家，但是首先您需要创建一个触发器。

为了使定位更加容易，您将创建另一个游戏对象作为 Gargoyle 游戏对象的子项，并将触发器置于其上。

要创建触发器，请执行以下操作：

**1.**在 Hierarchy 窗口中，右键单击 Gargoyle 游戏对象并选择 Create Empty。

[Image: image]

**2.**此游戏对象将充当石像鬼 (Gargoyle) 对于世界的视角，因此将其重命名为“**PointOfView**”。

[Image: image]

**3.**石像鬼的动画显示其视线是朝正前方并略微向下，因此您需要调整 PointOfView 游戏对象的位置。在 Inspector 中，找到其 **Transform** 组件。

- 将 **Position** 属性更改为 (**0**, **1.4**, **0.4**)
- 将 **Rotation** 属性更改为 (**20**, **0**, **0**)

[Image: image]

**注意：**如果 Scene 窗口中的 Transform 控制柄不是稍微向下，则可能是因为它们设置为 Global 而不是 **Local**。您可以通过单击工具栏中的“控制柄旋转切换开关”(Handle Rotation Toggle) 来更改此设置：

[Image: image]

现在，您已经设置了石像鬼的视角，接下来可以添加和配置触发器。

**4.**在 Inspector 中，添加一个 **Capsule Collider** 组件。

**5.**启用该组件的 **Is Trigger** 复选框。

**6.**让我们调整触发器的设置。

- 将 Capsule Collider 的 **Center** 属性设置为 (**0**, **0**, **0.95**)
- 将 **Radius** 属性更改为 **0.7**
- 将 **Height** 属性更改为 **2**
- 将 **Direction** 属性从 Y-Axis 更改为 **Z-Axis**

[Image: image]

您已将碰撞体设置为与石像鬼的手电筒光束相匹配，完美！

Mark step as complete

## 5. 编写自定义 Observer 脚本

Q&A (0)

现在，您已经创建了触发器，接下来需要编写一个脚本来处理 JohnLemon 进入触发器时发生的情况。

要创建新脚本，请执行以下操作：

**1.**在 Project 窗口中，选择 **Assets > Scripts**。

**2.**右键单击 Scripts 文件夹，然后选择 **Create > C# Script**。将新脚本命名为“**Observer**”。

该名称描述了脚本的作用：观察玩家的角色，并在发现后重新开始游戏。您也可以对其他敌人重复利用此脚本，因此可以不将其名称链接到石像鬼 (Gargoyle)。

**3.**将 Observer 脚本资源从 Scripts 文件夹拖到 Hierarchy 窗口中的 **PointOfView** 游戏对象上以将其添加为组件。

**4.**双击该脚本资源即可将其打开进行编辑。

Mark step as complete

## 6. 添加一个类以检测玩家的角色

Q&A (0)

让我们先在新脚本中添加一个类来检测玩家的角色：

**1.**与对 GameEnding 脚本执行的操作一样，删除 Start 和 Update 方法及其注释。干净的脚本应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{

}
```

**2.**首先，您需要使用 Observer 类来检测玩家的角色。在脚本中的花括号之间，添加以下行：

```csharp
public Transform player;
```

这与您对 GameEnding 触发器所采用的方法稍有不同。该脚本将检查玩家角色的 **Transform**，而不是其游戏对象。这样可以更轻松地了解 JohnLemon 的位置并确定是否可以清楚看到他。

**3.**您以前曾使用 OnTriggerEnter 特殊方法检测玩家的角色，并使用布尔变量存储了该角色是否在触发器中。在这里可以再次使用该方法。

在玩家 Transform 的声明下方直接添加以下行：

```csharp
bool m_IsPlayerInRange;
```

**4.**接着在其下方直接添加 OnTriggerEnter 方法：

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**与 GameEnding 脚本一样，请务必在每次调用 OnTriggerEnter 时检查 JohnLemon 是否确实在范围内。

在 OnTriggerEnter 方法的花括号内添加 if 语句来进行该检查：

```csharp
if(other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
```

**6.**进入此触发器的玩家角色可能并不自动表示游戏结束，例如，路径中可能有墙壁。这意味着检测 JohnLemon 何时离开触发器也很重要。

使用特殊方法 OnTriggerExit（此方法与 OnTriggerEnter 相反）即可轻松实现这一目标。

直接将 OnTriggerEnter 方法复制并粘贴在下方，然后将 Enter 调整为 **Exit** 并将 true 调整为 **false**，如下所示：

```csharp
void OnTriggerExit (Collider other)
    {
        if(other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
```

**7.**您的脚本目前应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
}
```

Mark step as complete

## 7. 检查敌人的视线是否清晰

Q&A (0)

在此游戏中，检查敌人对于 JohnLemon 的视线是否清晰很重要。否则，当实际上在路径中遇到的是墙壁时，也可能会触发游戏结束。由于玩家角色的位置随时可能发生变化，因此该检查需要在每一帧中进行。

让我们继续处理您的脚本：

**1.**在 OnTriggerExit 下方紧接着添加一个如下所示的 Update 方法：

```csharp
void Update ()
    {

    }
```

**2.**仅当玩家角色实际在范围内时检查视线才有意义。在 Update 方法的花括号中添加以下 if 语句：

```csharp
if(m_IsPlayerInRange)
        {

        }
```

到目前为止，一切都很好，但是如何实际检查视线呢？

在 Unity 中，可以检查从某个点开始的直线路径上是否存在任何碰撞体。从特定点开始的这条线称为**射线**。沿此射线检查碰撞体称为**射线投射 (Raycast)**。

射线需要一个**原点**和一个**方向**。原点就是 PointOfView 游戏对象的位置，但是确定方向要稍微复杂一些。

**3.**将以下代码行添加到 IsPlayerInRange if 语句的花括号内：

```csharp
Vector3 direction = player.position - transform.position + Vector3.up;
```

此代码新建一个名为 **direction** 的 Vector3。根据矢量数学，我们知道从 A 到 B 的矢量是 B-A。这意味着，从 PointOfView 游戏对象到 JohnLemon 的方向是 JohnLemon 的位置减去 PointOfView 游戏对象的位置。

您可能还记得 JohnLemon 的位置位于他两脚之间的地面上。为了确保 Observer 可以看到 JohnLemon 的质心，您可以通过添加 Vector3.up 将方向设置为向上一个单位。Vector3.up 是 (0, 1, 0) 的快捷方式。

**4.**现在有了方向，接下来便可以创建射线 (Ray)。在 direction 变量下面添加以下代码行：

```csharp
Ray ray = new Ray (transform.position, direction);
```

此行代码包含您之前没有遇到过的关键字：**new**。通过调用一种特殊方法（称为类型的**构造函数**）来创建新实例时使用此关键字。

调用构造函数始终使用以下语法：

- 关键字 **new**
- 类型
- 圆括号
- 构造函数的参数（在本例中为射线的原点和方向）

**5.**现在，您已经创建了射线 (Ray)，接下来可以执行射线投射 (Rayscast)。Unity 中有很多不同的 Raycast 方法，但是所有这些方法都有两个共同点：它们需要定义发生射线投射的射线，以及关于要检测的碰撞体类型的限制。

您将使用的 Raycast 方法会返回一个布尔值，当射线投射击中某个对象时为 true，否则为 false。因为返回的是布尔值，所以将 Raycast 方法放在 if 语句中非常方便。if 语句的代码块仅在射线投射击中某个对象时才执行。

在创建射线 (Ray) 的位置下方，并且仍在之前编写的 if 语句内，添加以下代码：

```csharp
if(Physics.Raycast(ray))
            {

            }
```

**6.**您已经定义了射线，并且没有限制射线投射可以检测到的碰撞体。对碰撞体的限制往往用作过滤器，而不是识别单个碰撞体。您需要的是有关射线投射 (Raycast) 准确击中的对象的信息，以便您可以检查这是否是玩家角色。

但有一个问题：从方法中获取信息的方式是通过其返回值，而这里的 Raycast 仅返回布尔值。但幸运的是有非常相似的 Raycast 方法，这个方法使用 **out 参数**。

out 参数的工作方式与普通参数相同，不同之处是参数前面要写关键字“out”。这些参数的值可以由它们的方法更改或设置，以便能够由任何调用方使用。out 参数有一个名为 **RaycastHit** 的类型，并且 Raycast 方法会将其数据设置为有关射线投射命中的任何对象的信息。

在创建 Ray 的代码行与 Raycast if 语句之间，添加以下代码：

```csharp
RaycastHit raycastHit;
```

该行代码定义了 RaycastHit 变量。

**7.**接下来，您需要更改 Raycast 方法以便使用此变量。将包含 Raycast 方法的 if 语句更改为如下所示：

```csharp
if(Physics.Raycast(ray, out raycastHit))
            {

            }
```

这是一个不同的 Raycast 方法，其工作方式非常类似，但使用 out 参数返回信息。

**8.**现在，脚本可以识别玩家的角色是否在范围内、执行射线投射并知道是否有任何对象被击中。接下来，需要检查击中了什么。

在 Raycast 的 if 语句中，添加以下代码：

```csharp
if(raycastHit.collider.transform == player)
                {

                }
```

**9.**现在，您需要结束游戏。为此，您需要引用 GameEnding 类。

在靠近脚本顶部的 player 和 m_IsPlayerInRange 变量声明之间，添加以下代码：

```csharp
public GameEnding gameEnding;
```

GameEnding 是一个类似于 GameObject 和 Transform 的类，每个类都有不同的方法和变量，但是对这些类进行引用的机制完全相同。

**10.**您的 Observer 脚本快要完成了！让我们回顾一下您到目前为止编写的脚本：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;
    public GameEnding gameEnding;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }

    void Update ()
    {
        if (m_IsPlayerInRange)
        {
            Vector3 direction = player.position - transform.position + Vector3.up;
            Ray ray = new Ray(transform.position, direction);
            RaycastHit raycastHit;

            if(Physics.Raycast(ray, out raycastHit))
            {
                if (raycastHit.collider.transform == player)
                {

                }
            }
        }
    }
}
```

**11.**目前，当玩家角色被敌人抓住时，此 GameEnding 类没有任何可调用的内容。您需要为其添加更多功能。

保存 Observer 脚本并打开您的 GameEnding 脚本进行编辑。您可能可以直接从代码编辑器中访问 GameEnding 脚本，或者可能需要返回到 Unity Editor 并以往常的方式打开脚本。

Mark step as complete

## 8. 修改 GameEnding 脚本

Q&A (0)

此游戏需要两种不同的方式来结束关卡：一种是 JohnLemon 逃脱，另一种是他被抓住。当前，GameEnding 脚本中仅包括他逃脱的情况。在本部分中，您将修改脚本，使被敌人抓住的玩家能够重新开始该关卡，而不是退出游戏。

在开始之前，请回顾您的 GameEnding 脚本：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    void Update ()
    {
        if(m_IsPlayerAtExit)
        {
            EndLevel ();
        }
    }

    void EndLevel ()
    {
        m_Timer += Time.deltaTime;

        exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
}
```

Mark step as complete

## 9. 创建两种结束关卡的方式

Q&A (0)

让我们首先向脚本中添加两种结束关卡的不同方法：

**1.**先在 **exitBackgroundImageCanvasGroup 变量声明**下面添加以下代码：

```csharp
public CanvasGroup caughtBackgroundImageCanvasGroup;
```

此代码将为新图像创建另一个 CanvasGroup，如果抓住 JohnLemon，将显示这些图像。

**2.**在 **m_IsPlayerAtExit 变量声明**下面添加以下代码：

```csharp
bool m_IsPlayerCaught;
```

此变量将检查 JohnLemon 是否已被抓住，工作方式类似于您在前面创建的用于检查 JohnLemon 是否已到达出口的变量。

**3.**现在有了两个新变量，但是具体应该如何使用它们呢？在抓住 JohnLemon 时，关卡应结束，但采用另一种结束方式。

首先，让我们向 Update 方法添加一个 **else-if 语句**。在 if 语句之后可以使用 else-if 语句来继续进行检查。在 Update 方法中的 if 语句下面添加以下代码：

```csharp
else if(m_IsPlayerCaught)
    {
        EndLevel ();
    }
```

您的 Update 方法现在应如下所示：

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel ();
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel ();
        }
    }
```

现在，该方法向计算机发出这样的指令：“如果 m_IsPlayerAtExit 为 true，则调用 EndLevel。如果不为 true，则检查 m_IsPlayerCaught 是否为true；如果是，则调用 EndLevel。”

由于这两个方法当前相同，因此需要进行调整。如果 m_IsPlayerAtExit 为 true，您需要淡入 exitBackgroundImageCanvasGroup。如果 **m_IsPlayerCaught** 为 true，则需要淡入 **caughtBackgroundImageCanvasGroup**。

**4.**要解决此问题，您需要在 EndLevel 方法中引入 CanvasGroup 参数，以便可以更改这个新参数的 Alpha。

将 EndLevel 方法更改为如下所示：

```csharp
void EndLevel (CanvasGroup imageCanvasGroup)
    {
        m_Timer += Time.deltaTime;

        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
```

现在，脚本不会更改 exitBackgroundImageCanvasGroup 的 Alpha，而是会更改作为参数传入的内容的 Alpha。

**5.**您可能已经注意到，您的代码编辑器现在告诉您，在我们的 Update 方法中对 EndLevel 的两次调用存在问题。这是因为您的 EndLevel 方法现在需要您传入缺少的参数。

要解决此问题，您需要将 exitBackgroundImageCanvasGroup 参数传递（分配）给第一个调用，而将 caughtBackgroundImageCanvasGroup 传递给第二个调用。

将您的 Update 方法调整为如下所示：

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup);
        }
    }
```

现在有两种不同的退出游戏的方法，但是您仍然需要进行一些其他调整。

Mark step as complete

## 10. 允许玩家重新开始关卡

Q&A (0)

当前，结束关卡总是会退出游戏。如果每次敌人抓到 JohnLemon 时，玩家都必须重新打开游戏，这将是很烦人的事情！重新开始关卡将带来更好的玩家体验。

要添加此功能，请执行以下操作：

**1.**如果玩家在关卡中逃脱，游戏仍然应该退出，因此您需要在 EndLevel 方法中使用另一个参数来帮助该方法决定要执行的操作。

将一个 bool 参数添加到 EndLevel 方法中，如下所示：

```csharp
void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
```

**2.**在开始使用此新参数之前，请确保 EndLevel 方法调用正确。

如果玩家角色已到达出口，则游戏应结束。这里应该传递 **false** 作为参数：

```csharp
EndLevel (exitBackgroundImageCanvasGroup, false);
```

如果抓到 JohnLemon，游戏应该重新开始。这里应该传递 **true** 作为参数：

```csharp
EndLevel (caughtBackgroundImageCanvasGroup, true);
```

**3.**现在您需要使用该参数。当前，EndLevel 方法中的 if 语句仅关闭游戏。您需要对此进行调整，从而仅在游戏不重新开始时才执行关闭操作。

将 if 语句的代码块更改为如下所示：

```csharp
if (doRestart)
            {

            }
            else
            {
                Application.Quit ();
            }
```

这是一个 **else** 语句。这个语句与您之前使用过的 else-if 语句类似，但是它是无条件的。只要 if 语句为 false，便会执行 else 代码块。这意味着，如果 doRestart 参数为 false，游戏就将结束。

**4.**如果 doRestart 为 true，则需要重新加载关卡。正如本教程前面所探讨的那样，Unity 中的关卡概念由场景表示。重新启动场景的最简单方法是再次加载场景。

用于处理场景的大多数功能都位于另一个**命名空间**中，因此您需要先将其添加到脚本中，然后再进行操作。命名空间是一种代码组织方式，以便仅在需要时才可以使用代码中的某些部分。

默认情况下，Unity 中创建的脚本在顶部包含三个命名空间：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

在这三个命名空间下，将另一个命名空间添加到列表中：

```csharp
using UnityEngine.SceneManagement;
```

**5.**现在，您可以访问重新加载当前场景所需的不同类和方法。在您创建的空白 if 语句代码块中，添加以下代码：

```csharp
SceneManager.LoadScene(0);
```

这行代码将从 SceneManager 类中调用一个名为 **LoadScene** 的静态方法。请注意，静态方法是不需要类实例即可调用的方法。

此方法的参数是场景的构建索引。您将在本系列的最后一教程中进一步详细探讨构建索引和构建设置。目前，您只需要知道在 C# 和大多数编程语言中，项的集合都会建立索引，并且这些索引从 0 开始而不是从 1 开始。您可以将其视为在一个集合中到达某个特定项需要经过的距离：第一项就在当前位置，因此到达该项需要经过零个项。

由于您只有一个场景，这个场景是场景集合中的第一个场景，因此索引为 0。

**6.**到目前为止，您几乎已经完成了此脚本；您需要进行的最后一个操作实际上是通过某种方式设置 **m_IsPlayerCaught**。这将有助于说明类中的公共 (public) 项和私有 (private) 项之间的区别。

到目前为止，您已经使用了在 Inspector 中可见的公共变量，以及在其中不可见的其他变量。默认情况下，类中未标记为公共 (public) 的项均是私有的。

两者之间的真正区别在于，可以从类外部访问公共项，而私有项则不可以。m_IsPlayerCaught 变量未标记为公共变量，因此是**私有**变量。这个变量需要从类外部加以设置，以便触发关卡重新开始。

您的第一个选择是将此变量改为公共变量，但这不是一种好习惯。并非所有的类都需要知道是否已抓住 JohnLemon。

相反，您可以限制对该变量的访问，并创建一个公共方法以将其设置为 true。通过这种方式，其他类可以看到 JohnLemon 已经被抓住，但不会看到他没有被抓住。

该方法可以位于类中的任何位置，但是将其放在 OnTriggerEnter 方法旁边最合理。这样，可以触发关卡结束的这两个方法将彼此相邻。

在 OnTriggerEnter 下面添加以下方法：

```csharp
public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }
```

**7.**您已经完成了 GameEnding 脚本的修改！完成的脚本应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;
    public CanvasGroup caughtBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    bool m_IsPlayerCaught;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }

    void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup, false);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup, true);
        }
    }

    void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
    {
        m_Timer += Time.deltaTime;
        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if (m_Timer > fadeDuration + displayImageDuration)
        {
            if (doRestart)
            {
                SceneManager.LoadScene (0);
            }
            else
            {
                Application.Quit ();
            }
        }
    }
}
```

您快要完成了！请保存 GameEnding 脚本，然后重新打开 Observer 脚本进行一些最终的调整。

Mark step as complete

## 11. 完善您的石像鬼 (Gargoyle) 预制件

Q&A (0)

您的 Observer 脚本已经可以：

- 识别玩家角色进入触发器
- 使用射线投射 (Raycast) 并知道它是否击中碰撞体
- 识别该碰撞体是否为玩家角色

现在您已经调整了 GameEnding 脚本，因此当 Raycast 击中玩家角色的碰撞体时，Observer 脚本能够进行调用了。

在测试游戏中新增的敌人之前，还需要进行一些最终的调整：

**1.**在 **Update 方法**的最后一个 **if 语句**中，添加以下代码：

```csharp
gameEnding.CaughtPlayer ();
```

您可以在此处添加该代码的原因是 CaughtPlayer 方法为**公共 (public)** 方法。如果是私有的，您的代码编辑器将在此行报告错误。

**2.**保存 Observer 脚本，然后返回到 Unity。

**3.**您的石像鬼 (Gargoyle) 预制件现在已完成！请使用 Save 按钮保存预制件。

[Image: image]

**4.**在 Hierarchy 中，单击向后箭头以返回到场景中。

[Image: image]

**5.**您可以稍后再添加更多的石像鬼 (Gargoyle) 预制件实例，但让我们将当前已有的这个实例放在起始房间中的一角。在 Inspector 中，找到其 **Transform** 组件。

- 将 Position 属性更改为 (**-15.2**, **0**, **0.8**)
- 将 Rotation 属性更改为 (**0**, **135**, **0**)

**6.**现在，您可以设置 Observer 脚本所需的两个引用。在 Hierarchy 窗口中，展开 Gargoyle 游戏对象并选择 **PointOfView**游戏对象。

[Image: image]

**7.**将 JohnLemon 游戏对象从 Hierarchy 窗口拖到 Inspector 中 Observer 脚本的 **Player** 字段上。这将分配其 Transform 组件。

**8.**将 GameEnding 游戏对象从 Hierarchy 窗口拖到 Inspector 中 Observer 脚本的 **Game Ending** 字段上。

**9.**接下来，您需要创建 UI 来处理由于已经抓到玩家而结束关卡的情况。在 Hierarchy 窗口展开 **FaderCanvas** 游戏对象。

[Image: image]

**10.**右键单击 **ExitImageBackground** 游戏对象，然后从上下文菜单中选择 **Duplicate**。复制操作的快捷方式为 Ctrl + D (Windows) 或 CMD + D (macOS)。

**11.**将新的副本重命名为 **CaughtImageBackground**。在 Hierarchy 窗口中，展开此游戏对象以查看其子项。

**12.**将 ExitImage 游戏对象重命名为 **CaughtImage**。

**13.**在 Inspector 窗口中，您应该会看到 Image 组件仍在引用 Won 精灵。这是唯一需要调整的设置。

在 Image 组件中，单击 **Source Image** 属性旁边的圈选按钮。在打开对话框后，选择名为 **Caught** 的精灵。

**14.**最后，您需要在 Game Ending 脚本上分配对 Caught Background Image Canvas Group 的引用。在 Hierarchy 窗口中，选择 **GameEnding** 游戏对象。

**15.**将 CaughtImageBackground 游戏对象从 Hierarchy 窗口拖到 Inspector 中 Game Ending 组件的 Caught Background Image Canvas Group 字段上。

**16.**保存您的场景。

您的石像鬼 (Gargoyle) 已完成！现在，您可以进入播放模式对其进行测试。

Mark step as complete

## 12. 总结

Q&A (0)

在本教程中，您为游戏创建了一个静态敌人。您使用了物理和脚本来确保可以抓住 JohnLemon，并将关卡设置为在 JohnLemon 被抓住时重新开始。

您的石像鬼 (Gargoyle) 敌人很棒，但它是静止的，能够移动的敌人会使游戏更加有趣。在下一教程中，您将制作一个可以在设定路径上四处游荡的幽灵 (Ghost) 敌人，并在整个游戏中填充敌人。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
