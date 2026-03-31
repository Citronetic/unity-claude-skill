[Image: image]

# 检查点

Tutorial

Beginner

+0XP

60 mins

0

(23)

Unity Technologies

[Image: 检查点]Summary

检查点是大多数现代游戏的常见元素。检查点允许玩家保存进度。这样，如果玩家的角色死亡，就可以在该检查点重新生成角色。

Languages available:

简体中文English日本語简体中文简体中文

## 1. 查找检查点

Q&A (0)

3D 游戏套件精简版中有一个 Checkpoint 预制件。选择 **3D GamekitLite > Prefabs > Utilities > Checkpoint** 即可找到。

[Image: image]

检查点不可见，但 **Ellen** 步入碰撞体区域（绿色线框盒体）即可触发检查点。为确保玩家知道自己触发了检查点并知道将在何处重新生成，你应该在游戏中使用视觉提示来说明 **Ellen** 已触及检查点。

在此示例中，我们将把另一个**水晶 (Crystal)** 添加到场景中，并进行相应设置以便在 **Ellen** 触及检查点时激活该游戏对象。为此，我们需要放置**水晶**和检查点，然后设置检查点，以便在 **Ellen** 触及检查点时，检查点会向**水晶**发送游戏命令。

要添加检查点，请执行以下操作：

- 将 **Checkpoint** 预制件拖放到场景中并调整位置以确保 Ellen 可以触及到此碰撞体。
- 调整该预制件的大小以确保其仅涵盖你要包含的区域。

[Image: image]

在 **Inspector** 窗口中，将 **Layer** 设置设为 **Checkpoint**。

[Image: image]

选择 **3D GamekitLite > Prefabs > Interactables**，然后将 **Crystal** 预制件拖入到场景中。将该预制件放在检查点区域附近，并将其重命名为 **CheckpointCrystal**。

[Image: image]

- 选择 **Checkpoint** 以链接这两个游戏对象。
- 选择 **Add Component**。
- 添加 **Send On Trigger Event**（在搜索框中输入进行查找）。

对 **Send On Trigger Event** 组件应用以下设置：

- 将 **Interaction Type** 设置为 **Activate**。
- 通过选择相应的游戏对象，将 **Interactive Object** 设置为 **GateCheckpoint**。
- 启用 **One Shot**。
- 将 **Layers** 设置为 **Player**。这样就允许玩家角色 (Ellen) 与该区域碰撞。

[Image: image]

为了验证两者之间的关联性，选择 **CheckpointCrystal**，查看 **Inspector** 窗口以检查 **Game Command Receiver** 是否在 Senders 列表中列出了 **Checkpoint**。

[Image: image]

为了测试检查点，请按 **Play** 并步入**检查点**。**CheckpointCrystal** 现在应该激活。接下来，测试如果 Ellen 死亡会发生什么情况。她应该在检查点体积的中心重新生成。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
