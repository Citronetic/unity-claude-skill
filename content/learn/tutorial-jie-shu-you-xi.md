[Image: image]

# 结束游戏

Tutorial

Beginner

+0XP

45 mins

8

(498)

Unity Technologies

[Image: 结束游戏]Summary

John Lemon’s Haunted Jaunt 开发流程的下一步是为游戏创建一个终点。此步骤可让您为玩家创建完整的游戏体验，并增强您编写代码的自信心。

在本教程中，您将：

- 使用 UI（用户界面）功能创建游戏结束屏幕
- 创建 GameEnding 触发器
- 编写自定义游戏结束脚本

学完本教程后，您将拥有一个完整的关卡，可以向其中加入敌人，使玩家的任务更有难度。

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 设置 UI

Q&A (0)

您已经为设置游戏的角色、环境和摄像机做了很多工作。接下来，您需要创建一个结尾，以便当 JohnLemon 逃离房屋时游戏实际上就完成了。完成此操作后，您就可以在游戏中加入敌人并进行一些最终的优化。

在开始任何创建操作之前，了解您要实现的目标十分重要。

当 JohnLemon 到达出口时，游戏应该淡出并退出，但是您需要注意这一点：在 Unity Editor 中退出和在游戏的最终构建版本中退出是不同的。

但是，首先，您需要使游戏淡出。为此，您将使用 Unity 的 **UI（用户界面）系统**。

**1.**在 Hierarchy 窗口中，单击 **Create** 按钮。这个按钮可以用来创建各种基本的游戏对象。

**2.**选择 **UI > Image**。UI 图像可以在玩家的整个屏幕上拉伸，并可以更改不透明度以创建淡入淡出效果。完美！

[Image: image]

随后将向场景中添加一些新的游戏对象：

[Image: image]

**3.**在 Scene 窗口中，单击顶栏中的 2D 按钮以启用 2D 模式。在这种模式下可以正确查看新的游戏对象。

[Image: image]

**4.**在 Hierarchy 中，选择 **Canvas** 游戏对象。将鼠标光标置于 Scene 窗口上，并按 **F** 键。

**5.**通过放大更近距离查看画布 (Canvas) 和图像 (Image)。您可以使用鼠标滚轮，或按住 Alt，右键单击，然后拖动。

[Image: image]

**6.**在 Hierarchy 中，选择 **EventSystem** 游戏对象。

此游戏对象附带有一些组件，这些组件可协同工作以允许屏幕上的所有 UI 元素与用户输入进行交互。但是，在您的游戏中，玩家不必能够与 UI 进行交互。

**7.**右键单击 EventSystem 游戏对象并选择 **Delete**。

[Image: image]

接下来，您将使用剩余的两个游戏对象（Canvas 和 Image）来创建淡入淡出效果。

Mark step as complete

## 2. 配置画布 (Canvas)

Q&A (0)

**1.**在 Hierarchy 中，将 Canvas 重命名为 **FaderCanvas**。

**2.**在 Inspector 中，查看附加到 FaderCanvas 的组件。

[Image: image]

您应该会注意到它的 Transform 组件不同于您之前看到的组件。属于 UI 系统的游戏对象需要更好地控制其位置，因此具有 **Rect Transform** 组件。对于位于 UI 层级视图根部的 Canvas，Rect Transform 设置为只读。

**3.**Canvas 组件可以控制如何渲染属于该 Canvas 的 UI 元素。此渲染主要由 **Render Mode** 设置进行控制。

渲染具有三种可能的模式：

- Screen Space - Overlay，在这种模式下，画布将填充屏幕，画布的所有 UI 元素都会渲染在其他所有元素之上
- Screen Space - Camera，在这种模式下，画布将填充屏幕，但会渲染到特定摄像机，并受到与摄像机的距离的影响
- World Space，在这种模式下，UI 存在于场景中，并渲染到其他对象的前面或后面（例如，3D 世界中角色上方的名称标签）

您需要在屏幕上拉伸图像，并将其渲染到其他所有元素之上。这意味着，默认的 Render Mode (**Screen Space - Overlay**) 非常适合您。

**4.**FaderCanvas 游戏对象上的下一个组件是 **Canvas Scaler**。当 UI 元素在不同大小的屏幕上显示时，通过这个组件可以轻松控制 UI 元素的相对大小。您的图像会在整个屏幕上拉伸，因此您无需担心其相对比例。

单击 Canvas Scalar 组件右上角的齿轮图标以打开上下文菜单。选择 **Remove Component**。

[Image: image]

**5.**FaderCanvas 游戏对象上的最后一个组件是 **Graphic Raycaster**。这个组件用于检测 UI 事件，例如点击。它将确定单击了哪个 UI 元素，并将事件发送到该元素，以便相应的组件可以做出反应。在您的游戏中，玩家不会与 UI 进行互动，因此不需要此组件。

单击 Graphic Raycaster 组件右上角的齿轮图标以打开上下文菜单。选择 **Remove Component**。

Mark step as complete

## 3. 拉伸图像

Q&A (0)

下一步是在屏幕上拉伸图像：

**1.**在 Hierarchy 中，选择 Image 游戏对象。

**2.**从工具栏中选择**矩形工具 (Rect Tool)**，或按 **T** 键。

[Image: image]

**3.**稍等一下！这里发生了有趣的事情。为什么图像不在矩形工具所指示的位置？

[Image: image]

这是因为 Scene 窗口正在使用您在上一教程中设置的后期处理。

**4.**单击 Scene 窗口中的 **Effects** 按钮以启用所有效果，然后再次单击该按钮以禁用所有效果。

[Image: image]

现在，您的图像应该可以正确显示：

[Image: image]Mark step as complete

## 4. 探索 Rect Transform 组件

Q&A (0)

让我们仔细看一下 Rect Transform 组件：

一个 3D 游戏对象的位置由该游戏对象的单个轴心点表示。该轴心点在 Transform 组件中的位置是相对于游戏对象的父对象的位置。Rect Transform 组件的工作原理类似，但是由于 UI 元素可以表示一个区域，因此存在一些差异。Rect Transform 组件的位置不是相对于其父对象上的单个轴心点，而是相对于**其父对象的一个区域**。父对象的此区域由 **Rect Transform 的锚点**表示。

您可能已经在 Scene 窗口中看到了像花一样的辅助图标：

[Image: image]

实际上，这是多个点全部汇集在一起的结果。这些点中的每一个点都是锚点。由四个锚点形成的矩形是父对象整体区域的一部分。

[Image: image]

您的图像 (Image) 是 FaderCanvas 的子项，它占据了整个屏幕。这意味着图像的位置是相对于整个屏幕区域的位置。

UI 元素的位置以像素为单位。这非常重要，特别是因为并非所有屏幕的像素数都相同。这便是锚点系统如此强大的原因：当锚点全部在一起并且显示一个点时，Rect Transform 将以像素为单位显示 UI 元素从该点偏移的位置。

[Image: image]

但是，如果锚点是分开的，则 Rect Transform 会显示一个从锚定区域的边偏移的像素：

[Image: image]

那么这对于您的游戏的适用性如何？好吧，您需要整个屏幕淡入淡出。这意味着，无论屏幕的形状或大小如何，图像都应覆盖整个屏幕。为了实现这一点，您需要确保锚定区域为整个屏幕，并且没有从该区域偏移。

Mark step as complete

## 5. 配置 Rect Transform 组件

Q&A (0)

要配置 Rect Transform 组件，请执行以下步骤：

**1.**在 Hierarchy 窗口中，选择 **Image** 游戏对象。

**2.**在 Inspector 中，找到 **Rect Transform** 组件。展开 **Anchors** 设置。

**3.**将 **x 和 y 的最小值设置为 0**。将 **x 和 y 的最大值设置为 1**。

[Image: image]

请记住，锚点是相对于其父级的：0 表示屏幕的最左侧或底部，1 表示屏幕的最右侧或顶部。

设置好锚点之后，您应该会看到图像的位置已更改。该位置现在列为 Left、Top、Pos Z、Right 和 Bottom。除了 Pos Z（您可以忽略）之外，这些都是游戏对象距其锚定区域的距离（以像素为单位）。负值表示该元素位于锚定区域之外。值为零表示没有从锚定区域偏移。

在上面的示例中，图像的左边与锚定区域的左边相距 394 像素；图像的右边与锚定区域的右边相距 942 像素；图像的顶边与锚定区域的顶边相距 487 像素；而图像的底边与锚定区域的底边相距 145 像素。

**4.**由于您的图像的锚定区域现在是整个屏幕，因此不需要偏移。在图像的 Rect Transform 组件上，将 **Left**、**Top**、**Right** 和 **Bottom** 属性设置为 **0**。

[Image: image]

**6.**图像现在会在屏幕上拉伸：

[Image: image]

该图像现在尺寸合适，但颜色不正确。

**7.**在 Inspector 中，找到 **Image** 组件。

[Image: image]

第一个属性称为 Source Image。通过这个属性可以显示特定的图像；如果将其留为空白，则将获得纯色矩形。使用 **Color** 属性可以设置此颜色。

**8.**打开拾色器 (Color picker) 窗口。将 RGB 通道设置为 **0**，保留 A 为最大值（如果范围是 0 到 1，则为 1；如果范围是 0 到 255，则为 255）。这会将颜色设置为黑色。

A 是组成颜色的第四个通道：**Alpha**。颜色的 Alpha 表示透明度。Alpha 值越小，游戏对象越透明。调整图像的 Alpha 值将是淡入淡出的关键。

**9.**单击 Editor 中的其他位置以关闭拾色器窗口。

您现在拥有一个全黑的屏幕！

Mark step as complete

## 6. 添加获胜图像

Q&A (0)

接下来，您将要添加图片以显示在黑屏之上：

**1.**在 Hierarchy 中，将当前的 Image 游戏对象重命名为 **ExitImageBackground**。

**2.**右键单击**ExitImageBackground** 游戏对象。从显示的上下文菜单中，选择 **UI > Image**。

[Image: image]

以这种方式右键单击一个游戏对象来创建另一个游戏对象会自动使新创建的游戏对象成为被单击游戏对象的子项。由于这个新的 ExitImage 游戏对象是 ExitImageBackground 游戏对象的子项，因此会将其渲染在顶层。

**3.**将这个新的 Image 游戏对象重命名为 **ExitImage**。

**4.**让我们添加一张图片。在 Inspector 中，找到 **Image** 组件。

**5.**单击 **Source Image**属性的圈选按钮。在对话框中，搜索并选择名为 **Won** 的图像。

**6.**现在，Image 组件中增加了一些设置：

[Image: image]

您将需要这些设置来解决一个重要的问题：图像填充尽可能大的屏幕面积将看起来效果最佳，但是需要保持正确的宽高比。要查看此问题，请像我们先前对待父级一样调整 Rect Transform 的大小。

**7.**在 Inspector 中，找到 **Rect Transform** 组件。展开 **Anchors** 设置。

**8.**将 **x 和 y 的最小值设置为 0**。将 **x 和 y 的最大值设置为 1**。

**9.**将 Left、Right、Top 和 Bottom 属性设置为 **0**。图片现在看起来已经拉伸了！

[Image: image]

**10.**在 Image 组件中，找到 **Image Type** 属性。启用 **Preserve Aspect** 复选框。这样可以使图像在 Rect Transform 内尽可能增大，但不会被压缩或拉伸。

[Image: image]Mark step as complete

## 7. 添加 Canvas Group 组件

Q&A (0)

接下来，让我们考虑如何在需要时使这些 UI 元素淡入和淡出。您已经知道可以调整 Image 组件的 Alpha 值以使其淡出。但是，由于现在有两幅图像，因此您需要更改两种颜色，而不是仅更改一个值。为了帮助您完成此任务，提供了一个名为 **Canvas Group** 的组件。

使用 Canvas Group 组件可以控制游戏对象及其所有子项上所有可见 UI 元素的某些方面。

要添加 Canvas Group 组件，请执行以下操作：

**1.**在 Hierarchy 窗口中，选择 ExitImageBackground 游戏对象。

**2.**在 Inspector 中，添加一个 Canvas Group 组件。

[Image: image]

将 **Alpha** 属性更改为 **0**。

**3.**现在，您已完成了 UI 的制作，接下来让我们将 Scene 窗口切回关卡。首先，在 Scene 窗口中**禁用 2D 模式**。

**4.**在 Hierarchy 窗口中，选择 JohnLemon 游戏对象。将鼠标光标悬停在 Scene 视图上，按 **F** 键以进行聚焦。

**5.**在 Hierarchy 窗口中，将 FaderCanvas 游戏对象折叠起来。按 Windows 上的 Ctrl + S 或 macOS 上的 CMD + S 保存场景。

这样好多了，现在您可以再次看到关卡。接下来，您需要一种触发和控制 UI 淡入淡出的方式。

Mark step as complete

## 8. 创建 GameEnding 触发器

Q&A (0)

计算机需要一种识别 JohnLemon 已离开鬼屋的方法，以便其知道何时更改 Canvas Group 的 Alpha 属性的值。检测物理对象（例如 JohnLemon 角色）何时进入特定区域的常用技术是使用**触发器**。

作为碰撞体的触发器不会阻碍移动，而是允许物理对象自由穿过它们，但是会报告触发事件，以便可以执行其他操作。

首先，让我们创建一个触发器：

**1.**在 Hierarchy 窗口中，单击 Create 菜单并选择 **Create Empty**。将这个游戏对象重命名为 **GameEnding**。

**2.**将 GameEnding 的 Transform Position 设置为 (**18**, **1**, **1.5**)。这个位置在关卡出口的中间。

[Image: image]

**3.**现在，您需要添加触发器。在 Inspector 中，将 **Box Collider**组件添加到 GameEnding 游戏对象。（请注意不要添加 Box Collider 2D，因为它将无法正常工作！）

**4.**启用 **Is Trigger** 复选框。这会将碰撞体变成触发器。

[Image: image]

**5.**接下来，您需要调整触发器的大小，使其覆盖出口 — JohnLemon 需要走进这个出口才能逃出。有两种方法可以执行此操作：在 Scene 窗口中单击 Edit Collider 按钮并调整 Box Collider 的大小，或手动设置 Center 和 Size 属性。让我们尝试在 Scene 窗口中编辑触发器。

单击 **Edit Collider** 按钮；“控制柄”将出现在 Scene 窗口中触发器的侧面。

**6.**要更改 Box Collider 的任何面，请单击它并拖到所需的位置。您需要使用触发器来填充走廊，以使 JohnLemon 必须经过走廊才能逃出。

完成后，再次单击 **Edit Collider**按钮。当控制柄从 Scene 窗口中消失后，您将不能再编辑碰撞体。

**7.**或者，也可以将碰撞体的大小 (Size) 设置为 (**1**, **1**, **3.5**)。

[Image: image]

现在，您已经完成了触发器，但是还需要编写脚本才能使用该触发器。

Mark step as complete

## 9. 创建新脚本

Q&A (0)

首先，创建脚本资源：

**1.**在 Project 窗口中，选择 **Asset > Scripts**。

**2.**找到 **Create**菜单并选择 **C# Script**。将该脚本命名为“**GameEnding**”。

请记住，资源的名称必须与脚本中的类名完全相同。如果在此过程中犯错，请删除并重新创建资源。

**3.**将脚本资源从 Project 窗口拖到 Hierarchy 窗口中的 **GameEnding** 游戏对象上。这样会将该资源添加为组件。

**4.**现在，您可以开始编辑脚本来为其提供一些功能。双击该脚本资源即可将其打开进行编辑。

Mark step as complete

## 10. 启动 GameEnding 脚本

Q&A (0)

要启动该脚本，请执行以下操作：

**1.**删除 Start 和 Update 方法以及它们的注释。干净的脚本应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{

}
```

**2.**让我们考虑一下您需要的信息：

首先，您需要屏幕在一定时间内淡出。这应该是一个**公共变量**，以便能够在 Inspector 中对其进行调整。此外还应该允许非整数，所以这个变量需要作为 **float** 变量。

发生淡入淡出的合理默认值为 1 秒，因此让我们设置这样的默认值。在脚本中的花括号之间，添加以下行：

```csharp
public float fadeDuration = 1f;
```

**3.**接下来，您需要指定当玩家的角色触及触发器时应发生淡入淡出。为确保仅在 JohnLemon 触及触发器时才会发生这种情况，您需要引用该游戏对象。同样，这应该是一个公共变量，以便能够在 Inspector 中对其进行调整。

在 fadeDuration 变量声明下面添加以下行：

```csharp
public GameObject player;
```

现在，您已经声明了两个主变量。

**4.**这个类的基本工作之一是检测玩家控制的游戏对象。接下来，您将使用 MonoBehaviour 另一个名为 **OnTriggerEnter** 的特殊方法。在变量声明下面添加以下方法定义：

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**为确保仅当 JohnLemon 触及盒型碰撞体 (Box Collider) 时才触发游戏结束，请向 OnTriggerEnter 方法中的花括号之间添加以下 if 语句：

```csharp
if (other.gameObject == player)
        {

        }
```

这里使用了一个新的运算符，称为**等于运算符。**这个运算符由双等号表示，并产生布尔值。如果两边的内容相同，则返回值为 true；否则，则返回 false。

上面的代码向计算机发出这样的指令：“如果其他碰撞体的游戏对象（即进入触发器的游戏对象）等于我们对 JohnLemon 的游戏对象的引用，则执行代码块中的所有操作。”

**6.**让我们回顾一下您到目前为止的脚本：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public GameObject player;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {

        }
    }
}
```

请记住，在 C# 中，在类中声明方法的顺序无关紧要，因此您可以使用稍有不同的顺序，这样是没有问题的。

Mark step as complete

## 11. 添加 Update 方法

Q&A (0)

现在，您需要为 if 语句添加代码，通过此代码开始淡入 UI，然后在游戏结束时退出游戏。当前存在一个问题：碰撞体第一次重叠时，OnTriggerEnter 仅被调用一次。您需要每帧都进行这种调用，以便可以逐渐更改 Canvas Group 的 Alpha。

[在第三个教程中，您使用了每帧都会调用的 Update 方法，所以可以在这里使用该方法：](https://learn.unity.com/tutorial/player-character-part-2-the-script)

**1.**在 OnTriggerEnter 下方添加如下所示的 Update 方法：

```csharp
void Update ()
    {

    }
```

**2.**您需要通过某种方式知道何时应该开始使 Canvas Group 淡入。由于 Canvas Group 要么淡入淡出，要么不淡入淡出，因此非常适合使用**布尔变量**。在公共变量声明和 OnTriggerEnter 定义之间，创建一个名为 **m_IsPlayerAtExit** 的布尔变量，如下所示：

```csharp
bool m_IsPlayerAtExit;
```

**3.**让我们使用布尔变量！首先需要设置它。在 OnTriggerEnter 方法中的 if 语句代码块内，将 m_IsPlayerAtExit 设置为 true，如下所示：

```csharp
m_IsPlayerAtExit = true;
```

**4.**现在，您已经在 OnTriggerEnter 中设置了布尔值，接下来需要检查是否已在 Update 中进行此设置。在 Update 方法的花括号中添加一个 if 语句：

```csharp
if(m_IsPlayerAtExit)
        {

        }
```

**5.**您的脚本目前应如下所示：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public GameObject player;

    bool m_IsPlayerAtExit;

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

        }
    }
}
```

让我们来分解一下到目前为止已编写的代码：

您添加了两个方法：OnTriggerEnter 和 Update。调用 OnTriggerEnter 时，计算机将检查进入触发器的碰撞体是否属于玩家的角色。每帧都会调用 Update，并检查玩家的角色是否在出口处。如果玩家的角色在出口处，那么会进入 if 语句代码块；否则，什么都不做。

Mark step as complete

## 12. 编写 if 语句代码块

Q&A (0)

接下来，您需要编写该 if 语句代码块：

**1.**在 Update 下面创建一个名为 **EndLevel** 的新方法。这个方法不需要返回任何内容，也不需要任何参数，因此应如下所示：

```csharp
void EndLevel ()
    {

    }
```

这将有助于保持代码整洁。

**2.**在 Update 方法的 if 语句中，添加对 EndLevel 方法的调用：

```csharp
EndLevel ();
```

**3.**EndLevel 方法需要使 Canvas Group 淡入淡出，然后退出游戏。以前，查找对组件的引用时，使用的是 GetComponent 方法，但这仅适用于与此脚本在同一游戏对象上的组件。

这次，您将为 Canvas Group 组件创建一个可以在 Inspector 中分配的公共变量。

**在 player 变量声明下面**添加以下公共变量声明：

```csharp
public CanvasGroup exitBackgroundImageCanvasGroup;
```

**4.**您还需要一个计时器来确保游戏在淡入淡出之前不会结束。我们在声明变量时，应该考虑可能需要的其他变量。

在 **m_IsPlayerAtExit bool** 下面添加以下变量声明：

```csharp
float m_Timer;
```

**5.**接下来，EndLevel 方法需要开始计时器计数。您可能还记得 PlayerMovement 脚本中提供了一种获取从上一帧以来经过的时间的方式：使用 Time.deltaTime。

您可以将计时器设置为等于其自身加上 deltaTime。但是，使用“加等于”运算符可以快速准确进行此设置。

将以下代码行添加到 EndLevel 方法中的花括号内：

```csharp
m_Timer += Time.deltaTime;
```

在这里，“加等于”运算符用于将左侧的内容设置为等于自身加上右侧的内容。

**6.**现在是时候设置 Canvas Group 的 Alpha 了。当计时器为 0 时，Alpha 值应为0；而当计时器不超过 fadeDuration 时，Alpha 值应为 1。为了获得该值，可以将计时器值除以持续时间。

在刚添加到 EndLevel 方法中的“加等于”运算符代码行下面添加以下代码：

```csharp
exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;
```

现在，当 JohnLemon 到达出口时，图像会淡入，但是您在最后结束之前还需要进行一些整理。

**7.**最后，淡入淡出结束后，游戏需要退出。当计时器值大于持续时间时，淡入淡出将结束。

在您添加的上一行下面添加一个新的运算符：

```csharp
if(m_Timer > fadeDuration)
        {

        }
```

朝右的尖括号用于测试左边的内容是否**大于**右边的内容。如果是这样，则返回 true，否则返回 false。

if 语句的代码块仅在 Alpha 不大于 1 时执行，所以现在我们要做的就是在代码块中添加以下代码行以退出游戏：

```csharp
Application.Quit();
```

**8.**这里有一些重要的知识需要了解。该方法确实可以退出游戏，但仅适用于完全构建的应用程序。目前，该游戏只是在 Editor 中播放的一个项目，因此尚无任何作用。在本系列的最后一个教程中，您将构建自己的游戏；完成此操作后，代码行将正常运行。在此之前，您将需要像以前一样退出播放模式。

**9.**在当前状态下，您的脚本将使游戏在图像淡入淡出后立即退出。如果图像淡入，玩家在很短的时间内看到图像，然后游戏退出，这样就更好了。

您需要做的就是在最后的 if 语句中增加一些时间。将此时间设置为变量意味着您可以根据需要更改将来显示图像的持续时间。

在 fadeDuration 变量声明下（在类的顶部附近），添加另一个持续时间变量声明：

```csharp
public float displayImageDuration = 1f;
```

**10.**现在，您需要做的就是将此持续时间添加到 if 语句中的 fadeDuration，即把语句更改为：

```csharp
if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit();
        }
```

任务完成！完成的脚本应如下所示：

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

务必保存脚本，然后返回到 Unity Editor。

Mark step as complete

## 13. 设置 GameEnding 脚本的变量

Q&A (0)

在您的脚本中，您创建了许多需要在 Editor 中设置的变量。这些变量使自定义游戏和测试更改变得更加容易。

要设置变量，请执行以下操作：

**1.**在 Hierarchy 中，选择 **GameEnding** 游戏对象。

[Image: image]

**2.**将 **JohnLemon**游戏对象从 Hierarchy 窗口拖到 Inspector 中的 Game Ending 脚本上。这将分配 **Player 变量**。

**3.**在 Hierarchy 中，展开 FaderCanvas。将 **ExitImageBackground** 游戏对象拖到 Game Ending 组件的 Exit Background Image Canvas Group 字段上。Unity 将自动找到正确的组件来分配 **Exit Background Image Canvas Group 变量**。

**4.**保存场景。

您已经创建好了游戏的终点！进入播放模式尝试一下。完成操作后，别忘了退出播放模式；在最后一个教程中创建游戏的构建版本之前，自动退出功能将无法使用。

Mark step as complete

## 14. 总结

Q&A (0)

在本教程中，您创建了一个结束游戏的系统。为此，您使用了 UI 功能，添加了一个触发器，并编写了另一个自定义脚本。您现在有了一个可以正常运行的游戏，但是一幢没有怪物出没的鬼屋简直一无是处！接下来，您将创建一些静态敌人来填充您的游戏。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
