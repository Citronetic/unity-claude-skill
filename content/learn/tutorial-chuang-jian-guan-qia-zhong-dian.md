[Image: image]

# 创建关卡终点

Tutorial

Beginner

+0XP

15 mins

1

(338)

Unity Technologies

[Image: 创建关卡终点]Summary

你现在已使用自定义设计、一系列病菌目标和多种武器来创建了一个可玩的游戏关卡！在本教程中，你将在给定的房间中创建一个终点，用于触发关卡结束。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 创建 LevelEnd 游戏对象

Q&A (0)

首先，创建一个 LevelEnd 游戏对象：

**1.**在 Hierarchy 窗口中右键单击一个空的区域，然后选择 **Create Empty**。

[Image: image]

**2.**选择该游戏对象，然后前往 **Inspector 窗口**。使用标题文本字段将游戏对象重命名为“**LevelEnd**”。

[Image: image]

**3.**接下来，需要确保 LevelEnd 位于关卡的中间。单击 **Transform** 组件右上角的小齿轮图标（或 3 个竖点）。选择 **Reset**。

[Image: image]

**4.**将鼠标光标移动到 Scene 视图上，然后按键盘上的 **F** 键以聚焦到 LevelEnd 游戏对象。

**5.**在 **Inspector** 中，单击 **Add Component** 按钮。搜索“**Box Collider**”，然后将此组件添加到 LevelEnd。

[Image: image]

**6.**一个绿色的线框盒体将出现在 Scene 视图中，表明 LevelEnd 具有碰撞体。

[Image: image]

使用**变换组件工具**将该对象放置在所需的关卡结束位置。房间或走廊的尽头就很适合作为关卡终点。

**7.**如果需要，可以使用 Box Collider 组件中的 **Size** 参数来调整碰撞体的大小。将鼠标一次悬停在一个轴上，然后单击并向右或向左拖动来增大或减小碰撞体的大小。

[Image: image]

以下示例中的 LevelEnd 游戏对象已移动到房间的尽头。碰撞体已调整大小以填充大部分可用空间。

[Image: image]

**8.**保存所做的更改。

Mark step as complete

## 2. 添加触发器

Q&A (0)

现在，你需要添加触发器。触发器是游戏的基本构建块，可用于实现许多不同的目的。例如，当玩家到达某个点、播放声音或加载新游戏关卡时，触发器可以启动过场动画。关卡设计的一项重要工作是放置碰撞体。碰撞体将在玩家到达特定位置时触发游戏事件。

为了使玩家能够完成关卡，你需要将 LevelEnd Box Collider 设置为游戏最终屏幕的触发器：

**1.**在 Inspector 中，选择 **Box Collider** 组件。启用 **Is Trigger** 复选框。

[Image: image]

**2.**单击 **Add Component** 按钮。搜索“**End Checkpoint**”，然后将此组件添加到 LevelEnd。

[Image: image]

**3.**保存所做的更改。

就是这样！现在，请按 **Play** 并通过移动到放置在关卡中的 Box Collider 中来测试触发器。当进入该空间时，游戏就将结束并显示结果屏幕。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
