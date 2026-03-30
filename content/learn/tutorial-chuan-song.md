[Image: image]

# 传送

Tutorial

Beginner

+0XP

30 mins

0

(17)

Unity Technologies

[Image: 传送]Summary

让我们创建一个传送装置，以便可以在地图中传送 Ellen。我们将为 Ellen 创建一个空间，以便她可以步入其中，然后就会被传送到场景中的其他任何位置。

Languages available:

简体中文English日本語简体中文简体中文

## 1. 场景内传送

Q&A (0)

让我们创建一个传送装置，以便可以在地图中传送 **Ellen**。我们将为 **Ellen** 创建一个空间，以便她可以步入其中，然后就会被传送到场景中的其他任何位置。

要在场景内传送 **Ellen**，你需要设置一种过渡。为此，我们使用 **TransitionStart** 预制件。此预制件将 **Ellen**“发送”到目的地。此预制件包含一个 **Transition Point** 组件。该组件可以定义传送起点位置以及传送功能应将 **Ellen** 发送到的位置等所有属性。

首先，我们需要设置过渡的起点：

在 Project 窗口中，选择 **Assets > 3DGamekitLite > Prefabs > SceneControl**。

- 找到 **TransitionStart** 预制件。
- 将 **TransitionStart** 拖到 **Scene** 视图。将该预制件放置在 **Ellen** 可以步入碰撞体（绿色线框盒体）的位置。在以下示例中，我们已创建一个门框并将该预制件放入其中：

[Image: image]

要设置目的地，请执行以下操作：

- 将另一个 **TransitionStart** 预制件从 **SceneControl** 文件夹拖入 **Scene** 视图中，然后将该预制件放入新的出口门框中。
- 将该预制重命名为 **TransitionEnd**。

现在，我们将两者关联在一起：

- 在 **Hierarchy** 窗口中，选择 **TransitionStart** 游戏对象。
- 在 **Inspector** 窗口中，找到 **Transition Point** 组件。
- 将 **Ellen** 游戏对象从 **Hierarchy** 窗口拖入 **Transition Point** 组件的 **Transitioning Game Object** 字段中。
- 将 **Transition Type** 设置为 **Same Scene**。

[Image: image]

**On Trigger Enter** 表示仅在 **Ellen** 进入碰撞体时（而不是按键时）激活过渡。如果你希望仅在玩家按下交互键 (E) 时才进行传送，请将 **Transition When** 设置为 **Interact Pressed**。

Mark step as complete

## 2. 传送到另一场景

Q&A (0)

将 **Ellen** 从一个场景传送到另一个场景需要更多的一些设置。要使 **Ellen** 过渡到新场景，我们需要两个预制件：

- **TransitionStart** 与上一节中使用的预制件相同。
- **TransitionDestination** 是一个“接收”**Ellen** 的预制件。此预制件包含一个 **Transition Destination** 组件。将此预制件放置在你希望过渡到的另一个场景中。

请参阅[组件参考指南](https://unity3d.com/learn/tutorials/projects/3d-game-kit/introduction-3d-reference-guide?playlist=51061&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952782787)以了解这两个组件的完整详细信息。

让我们首先设置目的地，以便获得稍后在设置起点时所需的所有信息。

### 设置过渡目的地

要向场景添加过渡，请打开目的地场景，导航到 **Project** 窗口，然后选择 **Prefabs > SceneControl**。将 TransitionDestination 拖入你的场景中，放置在你希望传送器到达的位置。

**TransitionDestinaton** 预制件包含一个 **Scene Transition Destination** 组件：

[Image: image]

首先，将 **Destination Tag** 设置为一个字母。具体设置为哪个字母不重要，只要具有该字母的这个 **Scene Transition Destination** 组件在场景中具有唯一性即可。

下一步，你需要说明应该接收哪个游戏对象。将 **Ellen** 游戏对象从 **Hierarchy** 窗口拖入 **Transitioning Game Object** 字段。

[Image: image]

最后，确保你的目的地场景位于编辑器的 Build Settings 中。为此，请选择 **File > Build Settings**，然后选择 **Add Open Scenes**。

[Image: image]

### 设置 TransitionStart

这些设置与上一节中的相应设置基本相同，但有一些差异：

- 将 **Transition Type** 设置为 **Different Zone**。
- 将 **New Scene Name** 设置为要发送到的目的地**场景**。
- 将 **Transition Destination Tag** 设置为你在 **Transition Destination** 组件中设置的 **Destination Tag** 字母。

[Image: image]

按 **Play** 并走到过渡所在的位置。你应该前往另一个场景中放置 **TransitionDestinaton** 预制件的位置。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
