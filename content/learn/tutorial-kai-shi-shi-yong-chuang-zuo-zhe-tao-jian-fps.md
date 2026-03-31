[Image: image]

# 开始使用“创作者套件：FPS”

Tutorial

Beginner

+0XP

5 mins

29

(1053)

Unity Technologies

[Image: 开始使用“创作者套件：FPS”]Summary

完成本项目后，你就可以与朋友分享你的第一人称射击游戏 (FPS) 游戏，并可以自己进行进一步的开发。另外，你还能让患者免于遭受可怕病菌的侵袭，可谓是双赢！

在第一个教程中，你将：

- 设置 Unity 编辑器
- 浏览 Unity 编辑器
- 试用创作者套件示例游戏

完成后，你就可以开始创建自己的 FPS 游戏。

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. 更新你的 Unity 版本

Q&A (0)

亲爱的医生，在你下载本项目并开始消灭病菌之前，你需要：

- 下载[Unity Hub](https://unity3d.com/get-unity/download?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035163386)
- 下载最新的[Unity Personal](https://store.unity.com/download?ref=personal) 正式版
- 登录 Unity ID

如果你没有最新的正式版，请从 Unity Hub 窗口左侧的菜单中选择 **Installs** 选项卡进行下载。

Mark step as complete

## 2. 下载“创作者套件：FPS”项目

Q&A (0)

获得最新版的 Unity 后，请下载此创作者套件的项目：

**1.** 打开 **Unity Hub**。

**2.** 选择窗口左侧的 **Learn** 选项卡。

[Image: image]

**3.** 向下滚动并从可用列表中选择正确的项目。

**4.**在项目对话窗口中，选择 **Download Project**。

[Image: image]

**5.**下载完毕后，选择 **Open Project**。

[Image: image]

Unity 编辑器将导入该项目，并更新所有必要的[包](https://docs.unity3d.com/Manual/Packages.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035163386)。

**6.**在顶部菜单中，选择 **File > Save** 以保存你的项目版本。或者，可以使用 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 快捷键。

注意：如果你在下载项目时遇到问题，可以在页面顶部的 Tutorial Materials 选项卡中找到下载相应资源的链接。

就是这样！设置完成后，接下来让我们探索 Unity 编辑器的工作原理。

Mark step as complete

## 3. 重要提示：如果你无法保存 Unity 项目

Q&A (0)

**注意：**一些用户目前会遇到错误，使他们无法保存通过 Hub 下载的 Unity 项目。如果遇到此错误，可以使用以下变通方法：

**1.** 在顶部菜单中，选择 **File**> **Close**。

**2.** 在 Keep Project? 对话窗口中，选择 **Keep**。

[Image: image]

**3.**使用操作系统的保存窗口来保存你的项目。为项目选择一个易于访问的位置，例如专用的 Projects 文件夹或 Documents 文件夹。

**4.**保存项目后，重新打开 Unity Hub。

**5.** 选择 **Add** 并导航到你保存项目的位置。这会将你的项目添加到 Hub 中的项目列表。

[Image: image]

**6.**左键单击项目列表中的项目以将其打开，然后继续学习本教程。

完成此过程后，你将能够照常保存项目。

Mark step as complete

## 4. Unity 编辑器快览

Q&A (0)

刚开始了解时，Unity 编辑器可能会令人生畏，但是你只需使用四个窗口和工具栏即可完成本演练并制作你的游戏。

[Image: image]

Unity 编辑器具有四个主要部分：

**1.Scene 视图**在此区域，你可以通过选择和移动游戏 3D 空间中的对象来编辑当前场景。在此套件中，游戏关卡包含在一个场景中。

**2.Hierarchy 窗口**
此处列出场景中的所有游戏对象。游戏对象包含用于填充游戏的角色、道具和景物。你可以将它们放置在父子层级视图中，因此你可以将对象分组；这意味着，在移动父游戏对象时，所有子对象将同时移动。

**4.Inspector 窗口**
此区域显示与当前所选游戏对象相关的所有设置。演练期间，你将在更多时间探索此窗口。

**4.Project 窗口**
这是你管理项目**资源**的位置。资源就是在项目中使用的所有媒体文件（例如，图像、3D 模型和声音文件）。Project 窗口充当文件资源管理器，可用于在计算机上浏览和创建文件夹。当演练提示你在给定的文件路径中查找**资源**时，请使用此窗口。

**提示：**如果你的编辑器布局与上图不匹配，请使用工具栏右上方的 Layout 下拉菜单来选择 **Default**。

Mark step as complete

## 5. 工具栏简介

Q&A (0)

工具栏包含一系列有用的工具按钮，可帮助你设计和测试游戏。

[Image: image]

#### 播放按钮

[Image: image]

#### 播放 (Play)

“播放”用于测试当前在 Hierarchy 窗口中加载的场景，并允许你在编辑器中实时试玩游戏。

#### 暂停 (Pause)

你可能已经猜到了，“暂停”可用于暂停 Game 窗口中的游戏。这有助于你发现通过其他方法不能发现的视觉效果问题或游戏体验问题。

#### 单步执行 (Step)

“单步执行”用于逐帧浏览暂停的场景。在游戏世界中寻找需要实时观察的实时变化时，该按钮非常有效。

#### 操纵对象

[Image: image]

这些工具可在 Scene 视图中移动和操纵游戏对象。你可以单击相应的按钮将这些工具激活，也可以使用快捷键。

**手形工具**

[Image: image]

你可以使用该工具在窗口中四处移动场景。也可以单击鼠标中键来访问该工具。

**移动工具**

[Image: image]

该工具可用于选择一些项并分别移动它们。

**旋转工具**

[Image: image]

该工具可用于选择一些项并旋转它们。

**缩放工具**

[Image: image]

你猜对了，这是用于放大和缩小游戏对象的工具。

**矩形变换工具**

[Image: image]

这个工具可以做很多事情。本质上，这个工具将移动、缩放和旋转结合到了一个专门用于 2D 和 UI 的工具中。

**旋转、移动或缩放**

[Image: image]

同样，这个工具也可以做很多事情。这个工具也可以移动、旋转或缩放游戏对象，但更适合 3D。

#### 使用鼠标进行导航

在 Scene 视图中时，你还可以：

- 单击鼠标左键以在场景中选择你的游戏对象。
- 单击鼠标中键并拖动以使用手形工具移动 Scene 视图的摄像机。
- 单击鼠标右键并拖动以使用飞越模式（手形工具的一种变体）旋转 Scene 视图的摄像机。在执行此操作时，还可以使用 A 和 D 键左右移动摄像机，使用 W 和 S 键前后移动摄像机，使用 Q 和 E 键上下移动摄像机。

如需查看在 Scene 视图中移动游戏对象的更多建议，请参阅 [Scene 视图导航](https://docs.unity3d.com/Manual/SceneViewNavigation.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035163386)。

Mark step as complete

## 6. 试玩游戏

Q&A (0)

现在，你可以试玩游戏并开始上手了。首先，打开创作者套件场景：

**1.**在 **Project** 窗口中，导航到 *Assets/Creator Kit - FPS/Scenes* 文件夹。

**2.**双击 **ExampleScene** 场景图标。

[Image: image]

打开场景后，你就可以开始测试游戏了。选择工具栏中的 **Play** 按钮即可开始。

[Image: image]

你应该能够进行以下操作：

- 按键盘上的 **W A S D** 键进行移动
- 按空格键进行跳跃
- 按住 Shift 键进行奔跑
- 用鼠标进行武器瞄准
- 瞄准后单击鼠标按钮用药物消灭病菌

[Image: image]

消灭病菌会给你增加积分，但也会消耗药弹。你可以在屏幕的左上角看到自己的得分，而在右下角可以看到武器的剩余药量。

**3.**测试完游戏后，请按键盘上的 **Esc** 键将鼠标光标移回。

**4.**再次单击 **Play** 按钮以停止游戏。

Mark step as complete

## 7. 更改默认按键

Q&A (0)

如果你使用的是非 QWERTY 键盘，可能需要更改用于玩此游戏的默认按键。为此，请执行以下操作：

**1.**在顶部菜单栏中，导航到 **Edit > Project settings...**，然后选择 **Input**。

**2.**单击箭头以展开 **Axes** 部分。

**3.**展开 **Horizontal** 部分，然后更改 **Alt Negative Button** 和 **Alt Positive Button**：

[Image: image]

**4.**展开 **Vertical** 部分，然后更改 **Alt Negative Button** 和 **Alt Positive Button**：

[Image: image]

**5.** 按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改。

Mark step as complete

## 8. 适用于 Unity 2019.1 的“创作者套件：FPS”发行说明

Q&A (0)

此创作者套件最好与最新版本的 Unity 配合使用。如果在使用教程时发现任何技术问题，请在论坛中向我们报告。

此创作者套件旨在用于进一步的关卡设计和探索。在 FPSKIT 菜单中，你将找到一个 **Game Database** 选项。此功能可用于创建游戏情节（可用于构成游戏的关卡组）。此功能以及其他附加功能都将在即将发布的套件手册中进行全面概述。

尽管现在就可以使用此系统，但目前某些视觉效果还无法正确显示：

- 如果你在游戏内的暂停菜单中使用“Select Level”选项来加载作为游戏情节的一部分而创建的场景，则该场景将在加载后无光照（即没有完整的游戏光照）。
- 如果你在到达游戏结束屏幕时尝试选择“Next Level”，也会出现这一问题。如果通过 Game Database 创建了第二个关卡，则该关卡将在加载后无光照。如果未创建第二个关卡，则第一个关卡将在重新加载后无光照。

该问题不会影响你的游戏构建，并在以后的 Unity 编辑器版本中已进行修复。手册发布后，我们将立即更新此创作者套件。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
