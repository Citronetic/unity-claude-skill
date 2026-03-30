[Image: image]

# 创建用于开发的自定义Gizmos - 2019.3

Tutorial

intermediate

+0XP

30 mins

9

(6)

Unity Technologies

[Image: 创建用于开发的自定义Gizmos - 2019.3]Summary

在本教程中，我们将就自定义Gizmos的多个方面展开探讨。在Unity编辑器中，Gizmos最常见的存在形式是作为缩放、旋转和平移工具。其实，Gizmos还可以提供更多功能，也是为项目自定义Unity编辑器最简单、最灵活的方法之一。它们可用于增强现有功能（例如，即使未选择Box Collider的游戏对象，也可以显示它的边界），或用于创建各种功能。

Resources

- [RelicIcons.zip](https://unity-connect-prd.storage.googleapis.com/20200505/1f5dd57c-3caa-42de-8cf2-ecb2959a514d/RelicIcons.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952785150)

Languages available:

简体中文English简体中文简体中文

## 1. 介绍

Q&A (0)

*如果您使用的是Unity 2019.2，请单击此处。*

在本教程中，我们将就自定义Gizmos的多个方面展开探讨。在Unity编辑器中，Gizmos最常见的存在形式是作为缩放、旋转和平移工具。其实，Gizmos还可以提供更多功能，也是为项目自定义Unity编辑器最简单、最灵活的方法之一。它们可用于增强现有功能（例如，即使未选择Box Collider的游戏对象，也可以显示它的边界），或用于创建各种功能。

就本教程而言，您需要下载自定义Gizmo图标：在“Tutorial Materials”选项卡中选择RelicIcons.zip文件，然后解压缩该文件，得到随附的Relic图标文件*夹。*

Mark step as complete

## 2. 为什么要使用Gizmos？

Q&A (0)

选择使用Gizmos的原因可能有很多。下面这些示例中的示例代码会在本教程的后面一一涉及。

- 自定义图标使游戏对象变得易于识别，尤其是在大型游戏世界中（例如关卡的开始和结束、玩家和敌方的生成点，或是秘密区域）。此外，自定义图标还可用于快速传递信息（例如生命值，甚至是关卡Boss所处的阶段）。
- 文本显示功能（采用带有可选偏移量的句柄标签形式）使您无需选择对象或将视线从“Scene”视图上移开，即可获取相关信息。
- 绘制的形状可用于指示影响区域（例如低重力或水体积）或碰撞体的边界。您可以使用立方体来指示物理区域，使用网格沿三个维度快速传递信息，或者使用球体来指示效果区域的半径。3D形状也可以用来表示2D碰撞体。

Mark step as complete

## 3. 最佳实践

Q&A (0)

为了确保在编辑器代码中仅包含Gizmos，请使用#if UNITY_EDITOR/#endif预处理器，或将代码放入“Editor”文件夹中。这样可以防止将其包含在将永远不会使用的构建配置中。

Mark step as complete

## 4. 绘图图标

Q&A (0)

自定义图标或许是让项目编辑器个性化的最有效的Gizmo。自定义图标必须作为单个文件（而不是打包在Sprite工作表中）存储在“Assets/Gizmos”文件夹或“Assets/Gizmos”的子文件夹中。如果像第一个示例中那样将图标放在子文件夹中，请确保在指示文件路径时使用前导\，因为Unity会将单个反斜杠解读为转义代码的第一个字符。

对于第一种情景，我们有一个Relic类，这是一些神奇的特别项目，广泛散布在整个游戏世界中。让我们假设这些Relic在玩家的探寻之旅开始时就随机散布在整个游戏世界中，并且我们要确保它们是在有效位置生成的，而不是位于无底洞或无法到达的瀑布。

**1.**在“Assets”文件*夹中，创建一*个名为“Gizmos”的文件夹。该文件夹中将包含我们的自定义Gi*zmo图标。*

**2.在**“Gizmos”文件夹*中，创建一个*名为“Relics”的文件夹。

**3.在**“Relics*”中，放置两*个或更多先前下载的示例文件中的图像（图01）。

[Image: image]

**4.**回到Unity中，创建一个名为“Relic”的新C#脚本。

**5.双**击以在脚本编辑器中打开“Relic”。

**6.现**在，我们将创建Relic类。为简便起见，我们仅包含与自定义Gizmo相关的代码。图标名称必须与RelicType值完全匹配，这一点至关重要。例如，Heartbreaker的图标应命名为Heartbreaker.png。在类定义内，输入：

```csharp
public enum RelicType
{
    Heartbreaker,
    MaskedSpider,
    ScorpionTail,
    BladedPinchers
}
```

**7.**我们的Gizmo代码仅加载具有匹配名称的图标，并将其绘制在“Scene”视图中Relic所在的位置。  输入：

```csharp
#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        string customName = "Relics\\" + relicType.ToString() + ".png";
        Gizmos.DrawIcon(transform.position, customName, true);
    }
#endif
```

**8.**保存更改并返回到Unity。

**9.从**“GameObject”下拉列表中选择“Create Empty”，创建一个空游**戏对象。**

**10.在**Inspec**tor中单击“Add Co**mponent”，然后选择“Relic”。

**11.在**仍选定“Relic”的情况下，将鼠标悬停在“Scene”视图上，按F键。此时应该能看到Relic的图标（图02）。

[Image: image]

**12.**尝试使用Inspector中的下拉列表更改Relic类型。

Mark step as complete

## 5. 将GizmoType与编辑器脚本一起使用

Q&A (0)

当我们将Gizmo代码放在单独的编辑器脚本中（而不是在组件的脚本中使用OnDrawGizmos方法）时，即可使用Gizmo类型的强大功能。除了Pickable，Gizmo类型还指定绘制Gizmo的条件。您可以利用按位逻辑OR运算符“|”来组合使用Gizmo类型。Gizmo类型共有六种：

**GizmoType.Active**：如果它所附加的对象当前在Inspector中显示，则绘制Gizmo。

**GizmoType.InSelectionHierarchy**：如果已选择其对象，或者其对象是当前所选对象的子项，则绘制Gizmo。

**GizmoType.NonSelected**：如果当前未选择其对象，则绘制Gizmo。

**GizmoType.InSelectionHierarchy**：如果未选择其对象，并且其对象不是当前选定对象的子项，则绘制Gizmo。

**GizmoType.Pickable**：该类型可让Gizmo在编辑器中变为可选状态（如果尚不可选）。

**GizmoType.Selected**：如果当前已选择其对象，则绘制Gizmo。

Mark step as complete

## 6. 增强默认Gizmos功能

Q&A (0)

在下一个示例中，假设我们有一个名为“Trigger Zone”的类。“Trigger Zone”的内容对于本演示而言并不重要，但每个带Trigger Zone组件的游戏对象还必须有Box Collider。默认情况下，只有当Box Collider的对象在Inspector中处于活动状态时，才会在“Scene”视图中绘制Box Collider。即使TriggerZone的对象未处于活动状态，我们也可以创建一个自定义Gizmo来绘制Box Collider。

**1.创**建一个名为“TriggerZone”的新C#脚本。就本例而言*，我们无需为此做任何设*置，但需要将其附加到游戏对象。

**2.创**建一个名为“LootZone”的空游戏对象。

**3.添**加Trigger**Zone组件和Box C**ollider。

**4.在**“Assets”中创建一个名为“Editor”的文件夹（如果还没有的*话）。（该文*件夹可以位于“Assets”中的任何位置，但名称必须为“Editor”。）

**5.在**“Editor”文件夹*中，创建一个*名为“TriggerZoneGizmo”的新C#脚本。

**6.双**击“TriggerZone*Gizmo”，在脚本编辑器中将其*打开。

**7.删**除Start和Update方法。

**8.**在最后一个using语句之后，输入：

```csharp
using UnityEditor;
```

**9.**要创建自己的DrawGizmo函数，我们需要指定类型、函数名称及其参数。自定义DrawGizmo函数的参数必须包含类和GizmoType的实例。

由于要绘制的Gizmo在选定对象时便已绘制好，因此我们只需在未选定对象时绘制Gizmo。在类定义中，输入：

```csharp
[DrawGizmo(GizmoType.NonSelected)]
```

**10.**在该行之后，输入：

```csharp
static void DrawTriggerZone(TriggerZone zone, GizmoType gizmoType)
{
    BoxCollider collider = zone.gameObject.GetComponent<BoxCollider>();
    Gizmos.color = Color.green;
    Gizmos.DrawWireCube(zone.transform.position, collider.size);
}
```

**11.**保存更改并返回到Unity。

**12.选**择“LootZone”。将按预期绘制Box Collider。

**13.在**“Hierarchy”视图中选择其他内容，将焦点从“LootZone”上移开。请注意即使未选择Box Collider的对象，仍将绘制它的边界。

**14.G**izmo绘制方法可能有多种。例如，假设选择了TriggerZone对象，我们想绘制一个红色实心立方体。使用以上示例步骤9-10的方法之后，添加：

```csharp
[DrawGizmo(GizmoType.Selected)]
static void DrawSelectedTriggerZone(TriggerZone zone, GizmoType gizmoType)
{
    BoxCollider collider = zone.gameObject.GetComponent<BoxCollider>();
    Gizmos.color = Color.red;
    Gizmos.DrawCube(zone.transform.position, collider.size);
}
```

Mark step as complete

## 7. Gizmo配方

Q&A (0)

在概略地介绍我们的自定义Gizmo方法之后，让我们来探索更多情景。我们不会每次都详细说明整个脚本，因为大多数代码与我们之前的示例相同。相反，我们将只提供Gizmo类型、基类所需的任何代码或数据成员，以及Gizmo绘制代码。要绘制Gizmo，您可以将“Gizmo Type”设为GizmoType.Selected | GizmoType.NonSelected，或只需将Gizmo绘制代码放在类定义的OnDrawGizmos方法内。

请注意，对于以OnDrawGizmos方法的形式作为类的一部分而存在的Gizmo绘制代码和作为单独的编辑器脚本的一部分而存在的Gizmo绘图代码，其数据访问会有所不同。

Mark step as complete

## 8. 技能作用范围半径显示

Q&A (0)

假设我们要绘制一个WireSphere，作为攻击作用范围(AoE)的半径（浮动）。如果我们使用OnDrawGizmos，则可以输入：

```csharp
Gizmos.DrawWireSphere(transform.position, damageRadius);
```

由于OnDrawGizmos方法是类的一部分，因此即使DamageRadius是私有的，这种方法也仍然有效。但是，如果我们使用单独的编辑器脚本，则还需要进行一些额外的处理。

在这种情况下，DamageRadius需要公开。该脚本如下所示：

```csharp
[DrawGizmo(GizmoType.Selected | GizmoType.NonSelected)]
static void DrawDamageRadius(TriggerZone zone, GizmoType gizmoType)
{
    Gizmos.color = Color.red;
    Gizmos.DrawWireSphere(zone.transform.position, zone.damageRadius);
}
```

Mark step as complete

## 9. 敌方/Boss生命值显示

Q&A (0)

*为简便起见，以下代码假定您使用的是OnDrawGizmos方法。*

该Gizmo将在“Scene”视图中在敌方头部的上方显示其当前生命值和最大生命值。这样，开发人员就可以一目了然地查看敌方是否生成了正确数量的HP生命值、是否正中要害等等，而无需在“Hierarchy”视图中查找和选择敌方。

基类： Enemy

相关数据成员：currentHP (float*)、maxHP (f*loat)
可选数*据成员：sk*in (GUISkin)

Gizmo绘制代码：

```csharp
Handles.Label(transform.position + Vector3.up * .125f, "HP: " + currentHP.ToString() + "/" + maxHP.ToString());
```

可选的第三个参数是GUIStyle，用于确定标签文本显示的格式和样式。GUI皮肤和样式不在本教程的探讨范围内。但是，如果您定义了名为“DebugDisplay”的GUIStyle，请添加皮肤数据成员并分配包含“DebugDisplay”的GUISkin。

以下是相应的Gizmo绘制代码：

```csharp
Handles.Label(transform.position + Vector3.up * .125f, "HP: " + currentHP.ToString() + "/" + maxHP.ToString(), skin.FindStyle("DebugDisplay"));
```

标签可用于各种调试和信息显示。有时，用图像显示效果更好。

Mark step as complete

## 10. 敌方行为状态指示

Q&A (0)

如果敌方正在闲逛/巡逻，该Gizmo就会显示一张笑脸（或您喜欢的任何图像）；如果敌方是在追捕玩家，则会显示一张愤怒的脸。

相关数据成员：chasing (bool)

Gizmo绘制代码：

```csharp
Gizmos.DrawIcon(transform.position, chasing ? "Chasing.png" : "Idle.png");
```

Mark step as complete

## 11. 移动平台路径显示

Q&A (0)

该Gizmo将绘制移动平台的路径。如果平台设为环路，路径将绘制为封闭的多边形。此时至少需要两个航路点（因为至少要有两个点才能画一条线），但没有上限。

相关数据成员：waypoints (Trans*form[])、lo*op (bool)
Gizmo*绘制代码：*

```csharp
if (waypoints.Length < 2)
    return;

Gizmos.color = Color.white;
for (int i=0; i < waypoints.Length - 1; i++)
    Gizmos.DrawLine(waypoints[i].position, waypoints[i + 1].position);

if (loop)
    Gizmos.DrawLine(waypoints[0].position, waypoints[waypoints.Length - 1].position);
```

Mark step as complete

## 12. 总结

Q&A (0)

Gizmos的应用范围非常广泛，几乎不受限制。既可以让信息显示一目了然，又具有一定的创造力，因此有望成为开发过程中不可或缺的一部分。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
