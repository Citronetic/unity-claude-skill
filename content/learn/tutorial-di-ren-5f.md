[Image: image]

# 敌人

Tutorial

Beginner

+0XP

60 mins

0

(23)

Unity Technologies

[Image: 敌人]Summary

3D 游戏套件精简版包含 2 个预制的敌人：**Chomper** 和 **Spitter**。这两个敌人均由 **Enemy Controller** 组件控制，每个敌人均附加有特定的行为（**ChomperBehavior** 和 **SpitterBehavior**）。

Languages available:

简体中文English日本語简体中文简体中文

## 1. 认识你的敌人

Q&A (0)

### Chomper

[Image: image]

**Chomper** 是近战敌人，在检测到 **Ellen** 时会跑向她，并在距离足够近时发动攻击。

在 Chomper Behaviour 组件上，你可以更改一些设置来调整其行为：

- 在 Player Scanner 部分中，你可以更改此敌人检测玩家的方式（距离、角度等）（请参阅下一节“通用设置”以了解相关资料）
- Time To Stop Pursuit 设置是在 **Chomper** 停止追赶 **Ellen** 并返回原始位置之前 Ellen 必须脱离 Chomper 视线的时间长度（以秒为单位）

### Spitter

[Image: image]

**Spitter** 是一个远程敌人，在检测到 **Ellen** 时会向她发射爆炸性酸液。如果 **Ellen** 距离 **Spitter** 太近，Spitter 会尝试逃离。

像 Chomper 一样，这个敌人有一个名为 Spitter Behaviour 的特定组件，可用于调整其行为：

- 与 Chomper 一样，在 Player Scanner 部分中可调整 Spitter 发现 Ellen 的方式和时间（请参阅下一节“通用设置”以了解相关资料）
- **Flee Distance（逃跑距离）**：如果 Ellen 接近到小于该距离，Spitter 将逃跑。逃跑过程中，一旦离 Ellen 足够远，Spitter 就将停止逃跑并继续攻击。

Mark step as complete

## 2. 通用设置

Q&A (0)

所有敌人的行为都有 **Player Scanner** 属性。你可以使用该属性来设置敌人如何检测 **Ellen**。

[Image: image]

有关这些设置的说明，请参阅 TargetScanner 文档。

所有敌人都具有 **Damageable** 组件。该组件定义敌人的生命值以及如何伤害它们。**Damageable** 组件位于根游戏对象上，在敌人的 **Behaviour** 组件旁边。

[Image: image]

#### Scene 视图辅助图标

选择一个敌人游戏对象时，Scene 视图将可视化敌人的某些设置。

[Image: image]

- **蓝色圆圈**代表 **Player Scanner** 的 **Detection Radius** 和 **Detection Angle**。敌人仅在 **Ellen** 走进该圆圈后才能检测到她。
- **黄色球体**是 Player Scanner 的 **Height Offset**（即扫描器的“眼睛”所在的位置）。只有在没有任何对象在此位置与 **Ellen** 之间挡住敌人的视线时，敌人才能检测到她。
- **红色圆圈**对应于 **Damageable 组件的 Hit Angle 值**。只有 Ellen 在该区域内击中敌人时，才能对敌人造成伤害。

Mark step as complete

## 3. 添加 Chomper

Q&A (0)

让我们将一个 **Chomper** 添加到场景：

- 选择 **Assets > 3DGamekitLite > Prefabs > Characters > Enemies > Chomper**。
- 将 **Chomper** 预制件拖入场景。
- 将 **Chomper** 放置在 **Ellen** 附近的某个位置，以便你可以快速进行测试。

[Image: image]

目前，Chomper 的 **Detection Radius**（这个敌人可以看到的区域，以 Scene 视图中的蓝色圆圈表示）极大。如果 **Ellen** 步入此区域，**Chomper** 就会攻击她。让我们调整此设置。

- 在 **Hierarchy** 窗口中选择 **Chomper**，然后导航到 **Inspector** 窗口。
- 在 **Inspector** 窗口中，找到 **Chomper Behaviour** 组件。
- 将 **Detection Radius** 设置为 4。

[Image: image]

- 按 **Play**。跑向 **Chomper** 并进入其 **Detection Radius**。

进入 **Detection Radius** 后，**Chomper** 会检测到 **Ellen** 并开始攻击行为。但是，这个敌人会原地奔跑，无法向前移动。

[Image: image]

这是因为 **Chomper** 的 AI 尚不知道自己可以在哪个表面上行走。我们使用 Unity 的 [NavMesh](https://docs.unity3d.com/Manual/nav-NavigationSystem.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954796075) 系统来进行此设置。Unity 在 [NavMesh Agent](https://docs.unity3d.com/Manual/class-NavMeshAgent.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954796075) 组件中处理 **Chomper** 的 AI。该组件管理 **Chomper** 可以在哪些表面上行走。还管理这个 Chomper 在世界中导航时是否可以避开障碍物以及其他 **Chomper** 和 **Spitter**。

[Image: image]

我们无需更改任何的这些设置。**Chomper** 和其他敌人都已设置，因此会按照特定方式行动和导航。

为了将地面设置为可让敌人行走，你需要添加 [NavMesh Surface](https://docs.unity3d.com/Manual/class-NavMeshSurface.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954796075)。

- 在 **Hierarchy** 窗口中，选择 **Plane**（代表地面的游戏对象）。

[Image: image]

- 在 **Inspector** 窗口底部，选择 **Add Component**。
- 搜索 **NavMeshSurface**。
- 选择 **NavMeshSurface** 以将其添加到 **Plane**。

[Image: image]

- 在 **Nav Mesh Surface** 组件中，将 **Agent Type** 设置为 **Chomper**。

[Image: image]

此设置表明了哪种 Agent 可以在表面上行走。

**注意：**仅有 **Chomper** 显示在此列表中，**Spitter** 未显示，因为两种敌人类型都使用 **Chomper** 的 Agent 设置。

- 将 **Include Layers** 设置为 **Nothing**。这样会取消选择所有层。

[Image: image]

- 现在，将 **Include Layers** 设置为 **Environment**。

[Image: image]

这是取消选择多个层并重新选择所需层的快速方法。

- 选择 **Bake** 按钮。

[Image: image]

这会烘焙场景中的 **NavMesh** 并使大多数表面适合敌人行走。Scene 视图以浅蓝色突出显示 **NavMesh Surface**，这表示敌人可以行走的区域。

[Image: image]

如果 **NavMesh Surface** 有缝隙，则敌人将无法在这些区域行走。例如，敌人无法走进酸池。

[Image: image]

**NavMesh Surface** 在游戏对象周围放置间隙。这意味着敌人无法通过我们设置的游戏对象。

要测试 **Chomper**，按 **Play**。现在你可以跑向 **Chomper**，而 **Chomper** 则可以冲向你并发起攻击。如果你朝远离 **Chomper** 的方向奔跑，则其 **NavMesh Agent** 会使用 **NavMesh Surface** 在世界中导航，从而追逐你。

如果你在场景中添加更多 **Chomper** 或其他敌人，这些敌人将使用相同的 **NavMesh Surface**；你无需在添加新敌人时重复此设置。

在场景中添加或移动游戏对象时，需要重新烘焙 **NavMesh Surface**。为此，请选择 **Plane**，导航到 **NavMesh Surface** 组件，然后选择 **Bake**。

Mark step as complete

## 4. 添加 Spitter

Q&A (0)

- 要添加 **Spitter** 预制件，请选择 **3DGamekitLite > Prefabs > Characters > Enemies**，然后将 Spitter 拖入你的场景。

在 **Inspector** 窗口中，**Spitter** 类似于 **Chomper**。

[Image: image]

**Spitter** 是一个远程敌人。当 **Ellen** 离得太近时，Spitter 会跑着逃离 Ellen。Spitter 使用 **Fleeing Distance** 属性来确定在 Ellen 保持多近的距离时逃离。然后会使用 **Range Weapon** 向 Ellen 发射酸液。

**提示：**

*如果期望的结果是 Spitter 仅跑着逃离 Ellen，请将 **Fleeing Distance** 设置为大于 **Detection Radius***。

最好将 **Spitter** 放置在与 **Ellen** 相距较远的位置，以使 Spitter 有更好的机会发动攻击，并对 Ellen 更具威胁性。如果希望 **Spitter** 考虑环境，你需要查看 **Spitter Behaviour** 组件，并将 **View Blocker Layer Mask** 从 **DoNotDraw** 更改为 **Environment**。

[Image: image]

请在添加 Spitter 后播放场景以查看其行为。尝试不同的 **Detection Radius** 距离和 **Fleeing Distance** 值，直到你得到想要的行为。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
