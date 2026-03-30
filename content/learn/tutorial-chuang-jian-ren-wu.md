[Image: image]

# 创建任务

Tutorial

Beginner

+0XP

10 mins

2

(182)

Unity Technologies

[Image: 创建任务]Summary

与 NPC 进行交谈的做法非常棒，但向玩家提供任务并在玩家成功完成任务后给予玩家奖励也是非常有用的方法。

在本教程中，你将：

- 为新 NPC 添加任务
- 为 NPC 创建在任务过程中说出的 Conversation Script Items
- 创建玩家在任务中必须收集的背包物品
- 将任务连接到 NPC 对话的特定分支
- 创建玩家完成任务后将获得的奖励

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 为 NPC 添加任务

Q&A (0)

首先，让我们向 NPC 添加新任务：

**1.**在 Hierarchy 中，选择 NPC 游戏对象。

**2.** 右键单击，然后从上下文菜单中选择 **Create Empty**。此时将创建一个子游戏对象。

**3.**右键单击新游戏对象，然后选择 **Rename**。将此游戏对象命名为 **Quest**。

此游戏对象有助于使你的任务保持井然有序。

**4.**在 Inspector 中，单击 **Add Component**。

**5.**搜索并添加 **Quest** 脚本组件。

[Image: image]

**6.**在 **Title** 字段中，输入脚本名称“**Apple Quest**”。

**7.**在 **Desc** 字段中，添加任务的简短描述：

“**Fetch an apple for the archer**.”

[Image: image]Mark step as complete

## 2. 为任务创建 NPC Conversation Script Items

Q&A (0)

现在可以将特定的 NPC 对话与该任务关联，具体取决于任务正在进行中还是玩家已满足完成条件。如果玩家正在进行任务，这种对话是提醒玩家的好方法，可告诉玩家需要执行的操作。

要添加特定于任务的 Conversation Script Items，请执行以下操作：

**1.**在 Hierarchy 中，确保已选中 **Quest** 游戏对象。

**2.**在 Inspector 中，单击 **Add Component** 按钮。搜索 Conversation Script 组件，然后将该组件添加到 Quest。

**3.** 在 Conversation Script 中，添加一个 Conversational Script Item（按照设置初始对话的过程）：

**ID：**1.1.1
**Text：**Please, fetch me an apple.

**4.**再次选择 **Add Component** 按钮。在搜索栏中，键入 **Conversation Script**，然后将第二个 Conversation Script 组件添加到 Quest。

**5.**在第二个 Conversation Script 组件中，添加另一个 Conversation Script Item：

**ID：**1.1.2
**Text：**Thank you for the tasty apple.

[Image: image]

**注意：**在每个 Conversation Script 组件中，所有对话项 ID 都必须唯一，但是可以分配最便于理解的 ID。

**6.**单击第一个 Conversation Script 组件的标题，然后将其拖到 Quest 组件中的 **Quest In Progress Conversation** 字段上。这样，如果玩家角色返回到 NPC，但没有携带必需物品，就会显示此对话。

[Image: image]

**7.**单击第二个 Conversation Script 组件的标题，然后将其拖到 Quest 组件中的 **Quest Completed Conversation** 字段上。这样，玩家在背包中携带着必需物品返回到 NPC 时，便会显示此对话。

**8.** 保存所做的更改。

Mark step as complete

## 3. 为任务创建背包物品

Q&A (0)

接下来，为准备的任务创建背包物品：

**1.**在 Scene 视图中，右键单击你要添加背包物品的位置。

**2.**从显示的上下文菜单中，选择 **Gameplay Prefabs >** **Add InventoryItem Here**。背包物品游戏对象将出现在该位置。

[Image: image]

**3.**在 Hierarchy 中，右键单击新游戏对象，然后选择 Rename。将此游戏对象命名为“**Golden Apple**”。背包物品游戏对象的名称非常重要，因为它们用于确定任务是否已完成。

**4.**在 Inspector 中，找到 **Inventory Item** 组件。此组件可用于将不同数量的背包物品与一个游戏对象相关联。

[Image: image]

将 **Count** 参数更改为 **3**。现在，拾取该物品将使玩家角色的背包中有 3 个金苹果 (Golden Apple)。

**提示：**如果要在以后的任务中更改任务物品，可以在 **Sprite** 字段中选择其他精灵资源。

Mark step as complete

## 4. 将 Golden Apple 添加到 Quest Script

Q&A (0)

你现在已经创建背包物品，接下来便需要将此物品连接到 NPC 的任务：

**1.**在 Hierarchy 中，选择 Quest 游戏对象（NPC 游戏对象的子项）。

**2.**在 Inspector 中，单击灰色箭头以展开 **Enable on Quest Start** 部分。

[Image: image]

**3.**将 **Size** 参数设置为 **1**；下方将出现名为 **Element 0** 的新字段。

**4.**将 Golden Apple 游戏对象从 Hierarchy 拖到 **Element 0** 字段上。

[Image: image]

现在，只有玩家通过选择关联的 NPC 对话选项来激活任务后，Golden Apple 游戏对象才会出现在你的游戏中。

**5.**接下来，展开 **Required Items** 部分并将 Size 参数设置为 **1**。随后将在下方出现新的名为 **Element 0** 的部分。

**6.**将 Golden Apple 游戏对象从 Hierarchy 拖到 Element 0 部分中的 **Item** 字段上。

**7.**将 **Count** 字段设置为 **1**。这是成功完成任务时需要在玩家背包中具备的该物品数量。

Mark step as complete

## 5. 将 Quest Script 连接到 NPC Conversation Script Item

Q&A (0)

你现在已经设置任务，接下来便可以将任务与一个 NPC 对话分支相关联。玩家选择可触发选定 Conversation Script Item 的回复时，该任务将激活。

在本示例中，玩家角色问候并赞扬 NPC 后，Golden Apple 任务将激活：

**1.**在 Hierarchy 中，选择 **NPC** 游戏对象。

**2.** 在 Inspector 中，找到 **Conversation Script** 组件。打开 **Conversation Script Item 1.1**(“Why thank you!Please will you get me an apple?”) 以进行编辑。

**3.** 将 Quest 游戏对象从 Hierarchy 拖到 **Quest (Optional)** 字段上。这样就会将任务分配给此对话选项。

[Image: image]

**4.**单击 **Update**。

**5.**进入运行模式并测试你的更改。选择关联的 NPC 对话选项时，就会启动 Golden Apple 任务。

**提示：**应将任务分配给 NPC 对话分支，而不是对话树中的第一个 Conversation Script Item。这意味着你将能够在一个 NPC 的对话树中为玩家添加多个任务。

Mark step as complete

## 6. 添加完成任务后给予的奖励

Q&A (0)

你的玩家现在可以成功完成 NPC 提出的任务。但是，没有奖励的任务会激励多少人呢？

要为任务添加奖励，请执行以下操作：

**1.**在 Scene 视图中的 NPC 旁边右键单击。

**2.**从显示的上下文菜单中，选择 **Gameplay Prefabs >** **Add InventoryItem Here**。背包物品游戏对象将出现在该位置。用于背包物品的默认精灵是 Golden Apple。让我们用其他东西奖励你的玩家，小鸡如何？

**3.**在 Inspector 中，找到 **Inventory Item** 组件。单击 **Sprite** 字段右侧的圈选按钮，然后选择名为 **_Chicken** 的精灵。

[Image: image]

**4.** 在 Inspector 中，选中 **Animator** 组件标题中的复选框。这样将会动画化小鸡。

[Image: image]

**5.**在 Hierarchy 中，右键单击奖品游戏对象，然后选择 **Rename**。将其命名为 **Chicken**。

**6.**在 Hierarchy 中，选择 **Quest** 游戏对象。展开 **Reward Items** 部分。

**7.**将 **Size** 参数设置为 **1**；下方将出现名为 **Element 0** 的新字段。

**8.**将 Chicken 游戏对象从 Hierarchy 拖到 **Element 0** 字段上。

**9.**在 Hierarchy 中，选择 **Chicken** 游戏对象。在 Inspector 中，禁用 Chicken 游戏对象标题中的复选框。

[Image: image]

这样就会停用 Chicken 游戏对象，并在将 Chicken 游戏对象用作奖励之前会阻止玩家收集此游戏对象。

**10.**保存场景。

现在进入运行模式并测试所做的游戏更改！

Mark step as complete

## Complete this Tutorial

Mark all steps complete
