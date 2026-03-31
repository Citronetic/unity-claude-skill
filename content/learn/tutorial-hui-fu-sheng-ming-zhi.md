[Image: image]

# 恢复生命值

Tutorial

Beginner

+0XP

40 mins

0

(19)

Unity Technologies

[Image: 恢复生命值]Summary

在本节中，我们将介绍如何创建生命值包 (Health Pack)，供玩家用于恢复生命值。此过程会将 Ellen 的 Damageable 组件与 ResetDamage() 命令一起使用，从而使 Ellen 完全恢复。

Languages available:

简体中文English日本語简体中文简体中文

## 1. 设置场景

Q&A (0)

首先需要设置场景，以便在你进入运行模式时 Ellen 受到伤害。为此，需要在场景中将 **Spitter** 敌人放置在 Ellen 的起点附近。

要放置 **Spitter**，请导航到 **Project** 视图，然后选择 **3DGamekitLite > Prefabs > Characters > Enemies > Spitter**。

[Image: image]

将 **Spitter** **拖入** **Scene** 视图中，然后调整位置和旋转以符合你的需求。确保 **Ellen** 处在蓝色检测圆圈内，以便你一进入**运行模式**，**Spitter** 就可以看到 Ellen。当你希望 **Ellen** 受到伤害时，这可以节省你跑到更远敌人位置的时间。

[Image: image]

### 添加 HealthCrate

在 **Project** 视图中，找到 **HealthCrate** 预制件。选择 **3DGamekitLite > Prefabs > Interactables > HealthCrate**。此外，你可以在搜索框中搜索**“HealthCrate”**。

[Image: image]

将 **HealthCrate** 预制件从 **Hierarchy** 窗口拖入 **Scene** 视图中。根据需要进行旋转和定位，只要 **Ellen** 可以到达 HealthCrate 即可。

[Image: image]

选择 **HealthCrate**，然后在 **Inspector** 窗口中查看。该预制件具有 **Interact On Trigger** 组件。

[Image: image]

你可以使用此组件来列出要与 HealthCrate 进行交互的游戏对象。游戏对象触及 HealthCrate 时，**On Enter ()** 下方列出的所有条目都会发生。游戏对象不再接触 HealthCrate 时，**On Exit ()** 下方列出的所有条目都会发生。

第一次在场景中放置 **HealthCrate** 预制件时，On Enter () 列表中会设置一些事件，但无法恢复 **Ellen** 的生命值。如果你按 **Play**，接受伤害，然后奔跑并触及 HealthCrate，则什么都不会发生。

### 将 Ellen 添加到 Interact on Trigger

为了确保 **Ellen** 完全恢复，你需要将**场景**中的**游戏对象**添加到 **Interact On Trigger**。

*注意：如果愿意，可以采用拖放方法来执行以下步骤，但是我们将研究改用圈选方法。*

*如果你决定这样做，请确保通过 Hierarchy 窗口在当前场景中使用 Ellen，而不是通过 Project 视图使用预制件。*

选择 **HealthCrate**。在 **On Enter()** 的空白 **Object** 字段中，按 **Circle Select** 按钮。

[Image: image]

选择顶栏中的 **Scene** 选项卡。

[Image: image]

搜索 **Ellen**（或者，如果已重命名玩家角色，请搜索相应的名称）。

[Image: image]

选择 **Ellen**。其他预制件与特定部件有关。

现在你已将 **Ellen** 置于 **On Enter ()** 列表中，因此，当 **Ellen** 游戏对象触及 HealthCrate 时，HealthCrate 会与 **Ellen** 发生交互。但是，我们仍然没有说明应该如何交互。我们需要进行相应设置来恢复 Ellen 的生命值。

在 **Interact On Trigger** 中，**Ellen** 旁边的下拉菜单字段目前显示为 **No Function**。

[Image: image]

在此下拉菜单中，选择 **Damageable > ResetDamage()**。

[Image: image]

现在，你已在场景内链接 **HealthCrate** 和 **Ellen**，因此当 **Ellen** 接触 HealthCrate 时，Unity 会调用一个名为 **ResetDamage()** 的事件，从而将 Ellen 的伤害值恢复为原始值。

要测试 HealthCrate，请按 **Play**，接受 **Spitter** 的伤害，然后接触 HealthCrate。这次，触摸 HealthCrate 应该会完全恢复 **Ellen** 的生命值。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
