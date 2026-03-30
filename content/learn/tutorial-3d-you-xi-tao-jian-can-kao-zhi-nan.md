[Image: image]

# 3D 游戏套件参考指南

Tutorial

Beginner

+0XP

75 mins

30

(40)

Unity Technologies

[Image: 3D 游戏套件参考指南]Summary

3D 游戏套件让你可以在 Unity 中创建 3D 平台游戏和益智游戏，而无需编写代码。本文档介绍游戏套件中可用于创建游戏的每个组件，包括这些组件的功能以及其中的设置。

如果你是 Unity 的新用户，我们建议你阅读[交互式教程](https://learn.unity.com/project/interactive-tutorials)和[界面与基础知识](https://learn.unity.com/project/interface-essentials)教程以熟悉 Unity 界面和概念。你还可以下载 [2D 游戏套件](https://learn.unity.com/project/2d-game-kit)，其中将介绍 2D 环境中的系统和概念。如需了解有关 Unity 的更多信息，请访问我们的 [Learn 网站](https://learn.unity.com)。

本文档的最佳用法是用作参考指南，按你想要进一步了解的组件或设置进行搜索。要学习关于如何使用此游戏套件的基础知识，请查看[《快速入门指南》](https://learn.unity.com/tutorial/quick-start)，该指南为你提供了使用此游戏套件的良好基础。本项目中包含的 Start 示例游戏使用了我们为游戏提供的所有组件。要获得关于如何使用游戏对象的灵感或示例，请探索 Scenes > GamePlay 文件夹中的关卡 1 和关卡 2。如果你想了解有关重要术语和概念的更多信息，请查看以链接形式突出显示的相关内容。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 3D 参考指南简介

Q&A (0)

3D 游戏套件让你可以在 Unity 中创建 3D 平台游戏和益智游戏，而无需编写代码。本文档介绍游戏套件中可用于创建游戏的每个组件，包括这些组件的功能以及其中的设置。

如果你是 Unity 的新用户，我们建议你阅读[交互式教程](https://learn.unity.com/project/interactive-tutorials)和[界面与基础知识](https://learn.unity.com/project/interface-essentials)以熟悉 Unity 界面和概念。你还可以下载 2D 游戏套件，其中将介绍 2D 环境中的系统和概念。如需了解有关 Unity 的更多信息，请访问我们的 [Learn 网站](https://learn.unity.com)。

#### 如何使用本文档

本文档的最佳用法是用作参考指南，按你想要进一步了解的组件或设置进行搜索。要学习关于如何使用此游戏套件的基础知识，请查看《快速入门指南》，该指南为你提供了使用此游戏套件的良好基础。

本项目中包含的 *Start* 示例游戏使用了我们为游戏提供的所有组件。要获得关于如何使用游戏对象的灵感或示例，请探索 **Scenes** > **GamePlay** 文件夹中的关卡 1 和关卡 2。

如果你想了解有关重要术语和概念的更多信息，请查看以链接形式突出显示的相关内容。

Mark step as complete

## 2. 3D Ellen

Q&A (0)

Ellen [***预制件***](https://learn.unity.com/tutorial/5c514b38edbc2a002069486a)是游戏套件的玩家角色。她可以行走、奔跑、跳跃和近战。

#### 标准移动控制

我们使用 [Animator](https://docs.unity3d.com/Manual/class-Animator.html?_ga=2.261310213.946741115.1517821219-418339272.1486654496&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659644)、[角色控制器 (Character Controller)](https://docs.unity3d.com/Manual/class-CharacterController.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659644) 和 Damageable 脚本（请参阅步骤 6）以及若干自定义脚本将 Ellen 组装起来。

#### Player Controller

[Image: image]

**Player Controller** 脚本包含有关 Ellen 在游戏中的行为方式的所有信息。此处公开的设置主要用于控制移动，但是你可以通过打开脚本来调整脚本中的任何变量。

如果你更改任何设置，只会将这些更改应用于该场景中的预制件实例。如果你希望在游戏中的所有关卡上进行这些更改，请单击实例顶部的 **Apply**，以便将更改应用到 Ellen 预制件。

- **Max Forward Speed**：*默认设置为 8*，表示 Ellen 能跑多快。
- **Gravity**：*默认设置为 20*，表示 Ellen 在空中坠落的速度有多快。
- **Jump Speed**：*默认设置为 10*，表示 Ellen 跳跃时的起跳速度。
- **Turn Speed**：*默认设置为 400 到 1200 之间*，表示 Ellen 转身有多快。此速度因 Ellen 的移动速度而异。Ellen 静止时，使用最大值，因为你希望 Ellen 转身更快。Ellen 没有以 **Max Forward Speed** 奔跑时，使用最小值，因为在高速状态下很难急转身。
- **Idle Timeout**：*默认设置为 5*，表示 Ellen 开始考虑随机空闲姿势之前经过的秒数。
- **Can Attack**：*默认设置为 false*，表示 Ellen 是否能用棍棒进行攻击。可以从外部进行此设置。
- **References**：这些都是脚本发挥作用所需的所有引用。在 Ellen 预制件上都可以找到这些引用，默认情况下你无需调整它们。
- **Melee Weapon**：Ellen 挥舞棍棒时对敌人造成伤害。
- **Camera Settings**：获取当前摄像机的旋转，以便 Ellen 面向正确的方向。注意：这是唯一不属于 Ellen 预制件的引用。实例化预制件时，应自动将此字段设置为 CameraRig 游戏对象的 Camera Settings 脚本。
- **Footstep Random Audio Player**：Ellen 迈步时播放随机声音。
- **Hurt Random Audio Player**：Ellen 受伤时播放随机声音。
- **Landing Random Audio Player**：Ellen 落地时播放随机声音。
- **Emote Landing Player**：Ellen 落地时播放随机语声。
- **Emote Death Player**：Ellen 死亡时播放随机语声。
- **Emote Attack Player**：Ellen 攻击时播放随机语声。
- **Emote Jump Player**：Ellen 跳跃时播放随机语声。

Mark step as complete

## 3. 构建世界

Q&A (0)

#### Instance Painter

Instance Painter 组件是一个旨在帮助你在 Unity 编辑器中创建场景的工具，在运行模式下或构建版本中没有用处。该组件可让你在场景中绘制预制件，为你放置每个实例。

[Image: image]

- **Layer Mask**：Instance Painter 只会在这些图层中的对象上层进行绘制。
- **Root Transform**：这是一个游戏对象，所有绘制的实例都将成为其子对象。
- **Brush Radius**：鼠标光标周围的画笔大小。
- **Brush Height**：鼠标光标周围的画笔高度。
- **Brush Density**：此处较大的值将在画笔区域内创建更多实例，较小的值将创建更少实例。
- **Max Random Rotation**：绘制的实例将在此范围内随机旋转。
- **Rotation Step**：如果此值大于 0，则会将应用于绘制实例的随机旋转量化为此值。
- **Collision Test**：在绘制时，Painter 将自动移除相交的实例。Painter 可以使用由渲染器边界 (Renderer Bounds) 或碰撞体边界 (Collider Bounds) 指定的体积来执行此操作。
- **Max Intersection Volume**：允许每个实例体积与其他实例体积相交的百分比。
- **Max Slope**：Painter 将用于定位实例的表面的最大渐变。
- **Prefab Palette**：这是可以绘制的预制件的列表。此处的每个预制件都会使一个代表该预制件的按钮显示在 Inspector 中。
- **Align to Normal**：如果为 true，则会将每个绘制的实例定向到表面法线，否则将定向到世界向上矢量。
- **Follow Surface**：如果为 true，画笔将自我定向到鼠标光标下的表面法线，否则将定向到世界向上矢量。
- **Randomize each Stamp**：如果为 true，则会在每次单击时随机化戳记（放置在画笔区域内的项）。否则，你需要按空格键来创建新戳记。
- **Variations Panel**：仅在具有 Variations 组件的预制件上才显示此面板。该组件允许预制件用不同版本和不同缩放来自我替代。
- **Min Scale**：可以随机缩放绘制的实例，这是缩放范围的最小值。
- **Max Scale**：可以随机缩放绘制的实例，这是缩放范围的最大值。
- **Game Objects**：此实例的潜在替代项的列表。

#### 压力垫

压力垫 (Pressure Pad) 是自动设置的，以便玩家走在压力垫上时，压力垫会亮起并播放声音。你可以连接压力垫来触发诸如开门之类的事件。

[Image: image]

此预制件的大部分功能来自两个脚本：

- **Send On Trigger Enter**：生成所有形式的游戏交互。这是[命令系统](https://unity3d.com/learn/tutorials/projects/3d-game-kit/gameplay-components?playlist=51061&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659644)的一部分。**Send On Trigger Enter** 脚本字段汇总如下。请参阅命令系统页面以了解有关使用命令系统的完整详细信息。
- **Interaction Type**：*默认设置为 Open*，表示压力垫将发送的命令类型。纯粹用作一个标签，但可用于解释多种交互。如果压力垫用于开门，那么 **Open** 将是一个很好的选择。如果压力垫用于停用一个陷阱，则 **Deactivate** 会更有意义。
- **Interactive Object**：这是 **Game Command Receiver**，可对使用的压力垫做出反应。例如，如果压力垫用于开门，这个 Receiver 就是门。
- **One Shot**：*默认设置为 true*，表示是否可以多次使用压力垫。默认情况下，压力垫只能被使用一次。
- **Cool Down**：*默认设置为 1*，表示可以再次使用压力垫之前经过的时间长度（如果压力垫不是 One Shot 类型）。默认情况下，此设置不起作用。
- **On Send Audio**：踏上压力垫时要播放的音频源。
- **Audio Delay**：*默认设置为 0*，表示踏上压力垫后多长时间才会播放音频。
- **Layers**：*默认设置为 Player*，表示要激活压力垫，游戏对象可以位于什么层。默认情况下，只有 Ellen 才能激活压力垫，因此 Layer 设置为 Player。
- **Interact On Trigger**：在 Ellen 站在压力垫上时，播放动画。

Mark step as complete

## 4. 3D 游戏套件中的对象

Q&A (0)

#### 武器

此套件有两种武器：近战武器和远程武器。

#### 近战武器 (Melee Weapon)

[Image: image]

近战武器用于游戏中的 3 个对象：

- Ellen 的棍棒
- Chomper（它的撕咬行为是一种近战武器）
- Grenadier 的拳头（用于发出拳击）

近战武器包含**攻击点 (Attack Points)**，这些攻击点是球体，用于定义武器的哪个部分可以造成伤害。攻击点被定义为游戏对象（名为 **Attack Root**）的偏移量及其大小半径 (Radius)。

攻击点在 Scene 视图中可视化为白色透明球体：

[Image: image]

#### 远程武器 (Range Weapon)

[Image: image]

远程武器的使用者为：

- Spitter，用于喷射酸液
- Grenadier，用于投掷弹跳手榴弹。

远程武器有两项设置：

- **Muzzle Offset** 表示投射物来自何处。**Muzzle Offset** 在 Scene 视图中显示为**黄色十字**（有助于定位）。
- **Projectile** 表示武器将发射哪种投射物。

**Projectile**

Projectile 是一种自定义编写的脚本（继承自 Projectile 类），但 Spitter Spit 可作为编写你自己的脚本的一种简单方式。

[Image: image]

- **Shot Type**：要使用的投射物类型。
- **HIGHEST_SHOT**：基于你设置的速度来生成最高抛物线。
- **MOST_DIRECT**：基于你设置的速度来生成最小抛物线（表示最直接的射击）。
- **LOWEST_SPEED**：以尽可能最低的速度在射击位置和目标之间生成抛物线（在游戏套件中使用了此设置）。
- **Explosion Timer**：如果该值大于零，则只有在此时间之后，投射物才会爆炸。否则，如果该值小于 0，投射物将在接触时爆炸。

Mark step as complete

## 5. Enemy Controller

Q&A (0)

Enemy Controller 脚本是其他更具体的 Enemy Controller 组件的基类。该脚本包含以下特定组件的通用属性：

- ChomperBehaviour
- SpitterBehaviour
- GrenadierBehaviour

该脚本将处理 NavMesh Agent 与 Animator 的匹配。此外，还可以设置任意的力（例如，被击中后抛出时由 Chomper/Spitter 使用）。

[Image: image]

**参数**

- interpolateTurning：这是一个标志，定义了调用 SetForward 时是立即将前进方向设置为指定值，还是按照 navmeshAgent.angularSpeed 字段指定的速度来逐渐向指定方向移动。如果此标志设置为 true，你需要跨帧反复调用 SetForward。通常，在通过行为更新来手动调用 SetForward 时会完成此过程。
- applyAnimationRotation：设置为 true 时，此参数将应用动画根运动旋转。

每个行为（一般通过 SceneLinkedSMB，请参阅下一步）将在 Animator 或 NavMesh Agent 之间切换。默认情况下，NavMesh Agent 优先。

**Navmesh Agent 优先**

此为默认值。以 true 值调用 SetFollowNavmeshAgent 会重置为 NavMesh Agent 优先。

在该模式下，Navmesh Agent 将移动敌人，并将速度设置为 (animator.deltaPosition / Time.deltaTime).magnitude。这会将 NavMesh Agent 的速度与动画的速度相匹配。

**Animator 优先**

以 false 值调用 SetFollowNavmeshAgent 可以进行此设置。在此模式下，由 OnAnimatorMove 函数根据动画提供的 deltaPosition 来设置位置。

例如，Chomper 攻击动画可以使用此选项，而不必将 NavMesh 路径/方向与我们希望发起攻击的位置和距离相匹配。

**外部力**

调用 AddForce 将提供一个可遵循的控制力。每次进行 FixedUpdate 时，都会将重力加到该力上，并会按该力量来移动控制器。在该力上不会增加摩擦力，所以该力会继续蓄积。该力的主要目的是在短时间内将控制器推回。

调用 ClearForce 将恢复到其他模式。

Mark step as complete

## 6. 3D 游戏套件中的伤害系统

Q&A (0)

#### Damageable 组件

[Image: image]

Damageable 组件允许你在游戏中使某个对象受到武器的伤害。对象所在的层将决定哪种武器可以伤害该对象（每种武器都有可伤害的一系列层）。

**InvulnerabilityTime** 默认为 0。任何大于 0 的值（以秒为单位）是指在受到伤害后 Damageable 组件在此持续时间内会忽略任何伤害的时间长度。

**HitAngle** 和 **HitRotation** 允许你定义一个圆弧以指定攻击可以在该圆弧内伤害对象。默认情况下，该角度设置为 360，因此攻击可以从任何方向造成伤害，但举例来说，如果设置为 180，则会使对象只在半圆内受到伤害。

*选中 Damageable 组件时，你可以在 Scene 视图中的红色圆圈内看到击中区域的可视化效果*

*使用 Grenadier 时的示例（只能从背后伤害 Grenadier）。*

[Image: image]

不同的事件可以用来在事件发生时触发操作。例如，以下是可破坏的箱子的死亡事件：

[Image: image]

我们将禁用此箱子，启用由多个部件组成的箱子版本，通过设置父级将箱子设置在正确位置，并播放声音。

#### 检查点 (Checkpoints)

你可以在 Prefabs > Scenes > Checkpoint 中找到检查点，可以将检查点放置在场景中，并调整检查点的碰撞体的大小以确保玩家在通过关卡时会进入碰撞体。

玩家死亡后将在所触及的最后一个检查点处重生。

注意：玩家将在检查点位置重生，因此确保此位置高于地面

#### 伤害区域 (Damage Zone)

将该组件添加到一个对象并缩放碰撞体来创建一个区域。任何可伤害对象进入该区域时，都将按设置的伤害值持续伤害相应的对象。

#### 死亡体积 (Death Volume)

添加该组件并缩放碰撞体来形成一个体积。玩家一进入该体积就会被杀死。例如，在游戏中为水设置死亡体积。

#### Contact Damager

Contact Damager 主要由敌人使用，这样，当玩家接触敌人时，敌人会对玩家造成伤害。只需将 Contact Damager 作为触发器添加到带有碰撞体的游戏对象。

**注意：Contact Damager 不同于其他伤害脚本，因为它使用一个层次系统来定义可伤害的对象。这是因为具有该组件的对象需要位于与玩家碰撞的层中，才会生成触发事件。但是敌人层不会与玩家碰撞（因此敌人不会阻止玩家移动），因此需要将该脚本添加到具有不同层（与玩家碰撞的层）的敌人的子对象，并且相应的 damagedLayer 设置必须包含玩家层**

#### Scenelinked SMB

SceneLinkedSMB 脚本可让你轻松快速地引用来自 StateMachineBehaviour 的 MonoBehaviour。尽管可以在任何需要引用特定 MonoBehaviour 的地方使用 SceneLinkedSMB，但 SceneLinkedSMB 的设计意图是将逻辑和功能分离。Animator Controller 包含的状态机是控制执行流程的理想工具。你可以使用 SceneLinkedSMB 来调用 MonoBehaviour 的公共函数，从而可以控制功能，因为这种情况下更容易获得场景引用。通过这种方式，SceneLinkedSMB 可以控制作为状态机一部分的逻辑以及用于控制功能的相关 MonoBehaviour。

要使用 SceneLinkedSMB 来创建行为，请执行以下操作：

1. 创建一个继承自 SceneLinkedSMB 的类，且通用参数为你希望在其中进行访问的 MonoBehaviour 类型。例如，对于 Chomper：

SceneLinkedSMB<ChomperBehaviour>

1. 在使用它们的每个对象中初始化 SceneLinked 行为。例如，在我们的 ChomperBehaviour 脚本的 Start 函数中，调用：

SceneLinkedSMB<ChomperBehavior>.Initialise(animator, this);

其中，animator 引用要使用该 SceneLinkedSMB 的 Animator

1. 在你的 SceneLinkedSMB 中，m_Monobehaviour 成员将指向运行该 Animator 的对象。
2. 覆盖你需要的函数（Enter、Exit 和 Update 等），并实现你想要的行为。

**提示**：请查看名称中带有 SMB 的任何脚本，并以此脚本为示例了解项目如何使用链接到每个状态的代码行为。

Mark step as complete

## 7. Target Scanner

Q&A (0)

Target Scanner 是一个简单类，供敌人用来检测自己能否看到玩家。

#### 参数

- **height Offset**：使用 Scanner 的角色的“眼睛”高度。设置为 0 时，射线投射在对象轴心起始处的视线畅通。**height Offset** 在 Scene 视图中显示为黄线球体。
- **detection Radius**：这是对象周围半径，Scanner 可以在此范围内检测到玩家。**detection Radius** 在 Scene 视图中显示为蓝色圆圈。
- **detection Angle**：相对于面向玩家的对象的角度，Scanner 可以在该角度检测到玩家。例如，值为 90 表示 Scanner 的检测角度为玩家前面的一个狭窄视锥。Scene 视图中的蓝色圆弧表示对应于该角度且具有上述 Detection Radius 值的区域。
- **max Height Difference**：对象轴心和玩家轴心之间的最大高度差（Scanner 可以在该范围检测到玩家）。如果你不想让玩家上方或下方平面上的敌人（但仍然在直接视线内）开始追赶玩家，此参数很有用。
- **viewBlockerLayerMask**：用于“阻挡”Scanner 视线的层遮罩。视线的射线投射将仅针对这些层中的对象进行。

#### 用法

将 Target Scanner 用作 Monobehaviour 的成员，并在你要执行检测检查时调用 Detect。如果可见，则会返回 PlayerController，否则返回 null。

如需查看示例，请参阅 ChomperBehaviour.cs 函数 FindTarget。

Mark step as complete

## 8. 游戏组件

Q&A (0)

#### 命令系统

此游戏套件包含一个将游戏元素连接在一起的命令系统。该系统使用三个关键脚本：`SendGameCommandSendGameCommand`、`GameCommandReceiveGameCommandReceive` 和 `GameCommandHandlerGameCommandHandler`。

`SendGameCommandSendGameCommand` 脚本决定什么时候应该发生什么事件，例如，角色踏上压力垫时应该发生什么情况。然后，该脚本会发送一个具有特定类型的“命令”（例如 Activate、Close、Stop）。

随后，由 `GameCommandReceiverGameCommandReceiver` 脚本接收此命令。该脚本包含一组不同的操作，在收到任何给定命令后，应该执行这些操作。例如，收到 Activate 命令时，该脚本会对关注此特定命令的三个处理程序执行一项操作。

`GameCommandHandlerGameCommandHandler` 包含命令的结果。该脚本可能会执行一些操作，比如启用游戏对象或播放声音。非常重要的一点是 `GameCommandHandlerGameCommandHandler` 脚本必须与 `GameCommandReceiverGameCommandReceiver` 脚本位于同一游戏对象上以便做出反应。这就是 `GameCommandReceiverGameCommandReceiver` 声明关注特定命令的方式。

有几种情况可能导致发送命令，因此有几个继承自 `SendGameCommandSendGameCommand` 的类来涵盖这些情况。这些类包括：`SendOnBecameInvisibleSendOnBecameInvisible`、`SendOnBecameVisibleSendOnBecameVisible`、`SendOnCollisionEnterSendOnCollisionEnter`、`SendOnCollisionExitSendOnCollisionExit`、`SendOnCollisionStaySendOnCollisionStay`、`SendOnTriggerEnterSendOnTriggerEnter`、`SendOnTriggerExitSendOnTriggerExit` 和 `SendOnTriggerStaySendOnTriggerStay`。

一条命令还可能导致几种结果，因此有几个继承自 `GameCommandHandlerGameCommandHandler` 的类。这些类包括：`MovingPlatform, TriggerUnityEvent, ToggleGameObjectActive, SwitchMaterial, StartPlayableDirector, SimpleTransformer, SimpleRotator, SimpleTranslator, SetGameObjectActive, SetAnimatorTrigger, RespawnPlayer, PlaySound, PlayAnimation, ParticleSystemEmitMovingPlatform, TriggerUnityEvent, ToggleGameObjectActive, SwitchMaterial, StartPlayableDirector, SimpleTransformer, SimpleRotator, SimpleTranslator, SetGameObjectActive, SetAnimatorTrigger, RespawnPlayer, PlaySound, PlayAnimation, ParticleSystemEmit` 和 `GameplayCounterGameplayCounter`。请注意，`GameCommandHandlerGameCommandHandler` 是抽象的，因此从不会独立存在，而是作为列出的继承类之一。

例如，如果你希望在 Ellen 站上压力垫时开门，请使用 `SendOnTriggerEnterSendOnTriggerEnter` 脚本在 Ellen 站上压力垫时向 `GameCommandReceiverGameCommandReceiver` 脚本发送 Open 命令。门打开时应该有动画并发出声音，因此合理的做法是设置一个 `SetAnimatorTrigger scriptSetAnimatorTrigger script` 和一个 `PlaySoundPlaySound` 脚本来监听 `GameCommandReceiverGameCommandReceiver`。

#### Send Game Command

这是用于生成命令的基类。例如，**DoorHuge** 预制件使用此类来激活 Grenadier（打开 **Assets** > **3DGamekit** > **Scenes** > **Level1** 场景，并在 Hierarchy 窗口中选择 **Level01Gameplay** > **DoorHuge**）。

[Image: image]

- **Interaction Type**：*默认设置*为 *None*，表示要发送的命令类型。此设置仅用于标记，不会影响命令的最终效果（只要处理程序设置为对 **Spawn** 作出反应，用于开门的命令就可以像 **Open** 一样轻松使用 **Spawn** 类型）。不同的类型为：**None**、**Activate**、**Deactivate**、**Open**、**Close**、**Spawn**、**Destroy**、**Start**、**Stop**。
- **Interactive Object**：这是 Game Command Receiver，用于收集各种命令的不同处理程序。
- **One Shot**：*默认设置为 false*，表示是否可以多次发送此命令。
- **Cool Down**：*默认设置为 1*，如果这不是 **One Shot** 命令，此设置将确定多久之后可以再次发送该命令。
- **On Send Audio**：此可选属性可以设置为某个音频源 (Audio Source)，这样发送命令时就会播放音频剪辑。你可以将具有 Audio Source 组件的任何游戏对象分配到此字段。
- **Audio Delay**：*默认设置为 0*，如果在 **On Send Audio** 中设置了**音频源 (Audio Source)**，此属性将确定发送命令之后多久才播放音频。

有关更多信息，请参阅 Send Game Command 子类型。

#### Game Command Receiver

此脚本包含一组游戏命令类型以及用于监听每种游戏命令类型的处理程序。作为一个组织系统，此脚本可以连接所发送和处理的命令。

[Image: image]

无需对此脚本设置任何字段。发送到此接收方的命令由各种 **Send Game Command** 脚本控制，而监听这些命令的处理程序由各种 **Game Command Handler** 脚本控制。

#### Game Command Handler

这是用于处理命令的抽象基类。因为该类是抽象类，所以不是以基础形式存在，而是作为其子类之一。但是，所有 Game Command Handler 都有以下共同字段：

- **Interaction Type**：*默认设置为 None*，表示要监听的命令类型。此设置仅用于标记，不会影响命令的最终效果（只要发送方也设置为发送 Spawn 命令，用于开门的处理程序就可以像 **Open** 一样轻松使用 **Spawn** 类型）。不同的类型为：**None**、**Activate**、**Deactivate**、**Open**、**Close**、**Spawn**、**Destroy**、**Start**、**Stop**。
- **Is One Shot**：*默认设置为 false*，表示此反应是否可以多次发生。
- **Cool Down**：*默认设置为 0*，如果这不是 **One Shot** 处理程序，此设置将确定多久之后可以再次触发此处理程序。
- **Start Delay**：*默认设置为 0*，确定在收到命令后多久处理该命令。

有关更多信息，请参阅 Game Command Handler 子类型。

#### Send Game Command 子类型

以下小节介绍了你可以用来代替 Send Game Command 脚本的类。每个类都包含 Send Game Command 字段，有些类还具有其他字段。

#### Send On Became Invisible

当某个游戏对象在场景的任何摄像机中都不再可见时，此组件将激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnBecameInvisible 调用来发送命令。此脚本没有其他字段。

[Image: image]

#### Send On Became Visible

当某个游戏对象变为在场景的任何摄像机中可见时，此组件将激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnBecameVisible 调用来发送命令。此脚本没有其他字段。

[Image: image]

#### Send On Collision Enter

当某个游戏对象与指定层中的另一对象碰撞时，此组件将激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnCollisionEnter 调用来发送命令。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象在碰撞时会发送命令。

#### Send On Collision Exit

当某个游戏对象与指定层中的另一对象碰撞并随后退出该碰撞时，此组件将激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnCollisionExit 调用来发送命令。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象可导致碰撞，从而促使组件发送命令。

#### Send On Collision Stay

当此游戏对象与指定层中的另一对象碰撞时，此组件将在 SendOnCollisionEnter 组件已激活后且该对象仍处于碰撞状态时激活。此脚本通过 MonoBehaviour 类的 OnCollisionStay 调用来发送命令。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象可导致碰撞，从而促使组件发送命令。

#### Send On Trigger Enter

如果此组件附加到触发碰撞体，则与指定层中的另一对象碰撞将导致此组件激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnTriggerEnter 调用来发送命令。

下图显示一个带立方体触发器的压力垫。**Send Open** 显示的是发送的命令，而白色箭头指向目标对象。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象可导致碰撞，从而促使组件发送命令。

#### Send On Trigger Exit

如果此组件附加到触发碰撞体，则与指定层中的另一对象碰撞将在游戏对象离开碰撞区域时导致此组件激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnTriggerExit 调用来发送命令。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象在发生触发事件时会发送命令。

#### Send On Trigger Stay

如果此组件附加到触发碰撞体，则与指定层中的另一对象碰撞将在游戏对象处于碰撞区域内的每一帧导致此组件激活并发送一条命令。此脚本通过 MonoBehaviour 类的 OnTriggerStay 调用来发送命令。

[Image: image]

- **Layers**：游戏对象层的 LayerMask，这些层的游戏对象在发生触发事件时会发送命令。

Mark step as complete

## 9. Game Command Handler 子类型

Q&A (0)

以下小节介绍了具有 Game Command Handler 功能的专用组件，并列出了 Game Command Handler 通用字段之外使用的其他字段。

#### 移动的平台

此组件用于控制在可预测路径上移动的平台。在 Project 窗口中的 **Prefabs** > **Interactables** 内可以找到此预制件。有关此类型的 Game Command Handler 的详细信息，请参阅关于移动平台的教程页面。

#### Interact On Trigger Health Crate

Interact On Trigger 的一个典型用例是 Health Crate 预制件。当玩家打破 Health Crate 时，玩家的生命值会增加。在 Project 窗口中的 **Prefabs** > **Interactables** 内可以找到此预制件。HealthCrate 预制件使用 **Interact On Trigger** 脚本：

[Image: image]

首次实例化时，**Interact On Trigger** 脚本的其中一个事件缺失。在此事件中需要告知玩家，他们的生命值正在重置。为此，请从场景中将 Ellen 选为要调用函数的源游戏对象。然后从 Function 下拉菜单中选择 **Damageable** > **ResetDamage()**。

现在，每当 Ellen 在场景中撞上 Health Crate 时，她的生命值就会重置为满血状态。

#### 触发 Unity 事件

发送命令时，此类会调用 Unity 事件。

[Image: image]

- **Unity Event**：发送命令时要调用的事件。

#### Toggle Game Object Active

此类可以切换一组游戏对象的活动状态。如果每个游戏对象都处于活动状态，则会切换到非活动状态；如果每个游戏对象都处于非活动状态，则会切换到活动状态。

[Image: image]

- **Targets**：要切换活动状态的游戏对象的集合。

#### Switch Material

此类可以通过循环游戏对象渲染器的材质来更改游戏对象的外观。

此命令是 GameCommandReceiver，可以切换目标对象上的材质。每次收到命令时，都会应用材质列表中的下一个材质。到达最后一个材质时，第一个材质将用作下一个材质。

[Image: image]

- **Target**：要循环材质的渲染器。
- **Materials**：要循环使用的材质。索引为 0 的材质应该是渲染器的默认材质。这是因为第一次处理命令时，将使用索引为 1 的材质。

#### Start Playable Director

在处理命令时，此类会启动时间轴。还包含一些在时间轴启动和结束播放时调用的事件。

[Image: image]

- **Director**：Playable Director，引用要播放的时间轴。
- **On Director Play**：在时间轴开始播放之前立即调用的事件。
- **On Director Finish**：在时间轴结束之后立即调用的事件。为此需要使用定时的 Invoke。如果在没有更改 Time.timeScale 的情况下，时间轴的持续时间被更改或时间轴暂停了，则该事件可能与时间轴的末尾不符。

#### Simple Rotator

在很难使用动画时，可以使用此类来旋转游戏对象。此命令是一个 GameCommandReceiver。收到指定的命令时，它将对变换组件进行旋转。

[Image: image]

- **Loop Type**：默认设置为 *Once*，此设置可以控制在达到完整持续时间时游戏对象执行的操作。
- **Once**：不会重复旋转。
- **PingPong**：游戏对象将围绕其轴来回旋转。
- **Repeat**：每当游戏对象达到持续时间时，它都会从头重新开始。
- **Duration**：*默认设置为 1*，表示执行旋转的时间长度（以秒为单位）。
- **Accel Curve**：表示旋转速度如何随时间变化。
- **Activate**：*默认设置为 false*，表示是否已收到命令且游戏对象当前正在旋转。
- **On Start Command**：表示旋转开始时要发送的命令。
- **On Stop Command**：表示旋转结束时要发送的命令。
- **On Start Audio**：表示旋转开始时要播放的音频。
- **On Stop Audio**：表示旋转停止时要播放的音频。
- **Preview Position**：开始预览指定位置的组件行为。
- **Axis**：*默认设置为 (0, 0, 1)*，表示游戏对象旋转时所围绕的轴（本地空间）。
- **Start**：*默认设置为 0*，表示游戏对象开始旋转的绕轴度数。
- **End**：*默认设置为 90*，表示游戏对象结束旋转的绕轴度数。

#### Simple Translator

此类可以将游戏对象的刚体从指定的 **Start** 位置移动到指定的 **End** 位置。此命令是一个 GameCommandReceiver。收到指定的命令时，它将对变换组件进行移动。

下图显示的是 GameCommandReceiver。**Recv Open** 标签告诉我们，在收到 Open 命令时，该游戏对象将做出反应。白色箭头表示传入命令的方向。

[Image: image][Image: image]

- **Loop Type**：*默认设置为 Once*，此设置可以控制在达到完整持续时间时游戏对象执行的操作。
- **Once**：不会重复移动。
- **PingPong**：游戏对象将沿着其路径来回移动。
- **Repeat**：每当游戏对象达到持续时间时，它都会从头重新开始。
- **Duration**：*默认设置为 1*，表示执行移动的时间长度（以秒为单位）。
- **Accel Curve**：表示速度如何随时间变化。
- **Activate**：*默认设置为 false*，表示是否已收到命令且游戏对象当前正在移动。
- **On Start Command**：表示移动开始时要发送的命令。
- **On Stop Command**：表示移动结束时要发送的命令。
- **On Start Audio**：表示移动开始时要播放的音频。
- **On Stop Audio**：表示移动停止时要播放的音频。
- **Rigidbody**：表示要移动的游戏对象的刚体组件。要移动的刚体不应与此脚本位于同一游戏对象上。通常，刚体会是此脚本的游戏对象的子对象。刚体的移动是相对于此脚本的游戏对象的移动。
- **Start**：*默认设置为 (0, 0, -1)*，表示刚体开始移动的位置（本地空间）。
- **End**：*默认设置为 (0, 0, 1)*，表示刚体停止移动的位置（本地空间）。

#### Set GameObject Active

此类的工作方式类似于 ToggleGameObjectActive 类，只是每个游戏对象的活动状态设置为相同值，而不是来回切换。

[Image: image]

- **Targets**：表示要设置活动状态的游戏对象。
- **Is Enabled**：*默认设置为 true*，表示要将目标游戏对象设置为的活动状态。

#### Set Animator Trigger

在收到命令时，此类会设置 Animator 触发器参数。

[Image: image]

- **Animator**：表示要设置触发器参数的 Animator 组件。
- **Trigger Name**：表示要设置的触发器参数的名称。

#### Respawn Player

该类只调用 Player Controller 的 Respawn 函数。此过程将导致场景淡出，并将 Ellen 带回上一个检查点。

[Image: image]

- **Player**：这是对 Ellen 上的 PlayerController 脚本的引用。

#### Play Sound

此类可以播放分配给一组音频源的音频剪辑。需要单独设置音频源。

[Image: image]

- **Audio Sources**：表示收到命令时要播放的音频源。

#### Play Animation

此类可以播放分配给一组动画组件的动画剪辑。需要单独设置动画组件本身。

[Image: image]

- **Animations**：表示在收到命令时需要播放动画的动画组件。

#### Particle System Emit

此类使一组粒子系统中的每个系统都发射指定数量的粒子。

[Image: image]

- **Particle Systems**：表示收到命令时发射粒子的粒子系统。
- **Count**：表示每个粒子系统要发射的粒子数。

#### Gameplay Counter

此类的工作方式与其他 GameCommandHandler 略有不同。某些操作需要在处理命令之前发生多次时，此类作为一个中间步骤。它的工作原理是对所选命令的接收次数进行计数，并在达到所需的计数时，由指定的 GameCommandHandler 执行交互。

[Image: image]

- **Current Count**：*默认设置为 0*，表示目前为止已经收到的命令数量。
- **Target Count**：*默认设置为 3*，表示在 GameCommandHandler 执行交互之前需要的命令数量。
- **On Increment Send Command**：表示每当计数递增时都可发送的可选命令。达到 **Target Count** 时，不会发送此命令。
- **On Increment Perform Action**：这是一个可选的处理程序，每当计数递增时，都可以执行相应操作。达到 **Target Count** 时，不会执行操作。
- **On Target Reached Send Command**：表示达到 **Target Count** 时可以发送的可选命令。
- **On Target Reached Perform Action**：这是一个可选的处理程序，可以在达到 **Target Count** 时执行相应操作。

#### Simple FX Synth

SimpleFXSynth 组件用于生成游戏音效的音频剪辑 (AudioClip)。

[Image: image]

- **Fx Name**：在运行模式下，**Fx Name** 字段用于在所有 SimpleFXSynth 实例之间共享 AudioClip。这意味着每个唯一的音效都应该有一个唯一的 Fx 名称。
- **Duration**：控制 AudioClip 的长度（以秒为单位）。
- **Layers**：SynthLayer 对象堆栈。每个 SynthLayer 对象都有一个振荡器，并具有在 AudioClip 持续时间内应用的频率和音量包络。振荡器的输出被馈送到过滤器，而过滤器具有也在 AudioClip 持续时间内应用的截止频率和共振包络。
- **Audio**：表示用于播放 AudioClip 的音频源。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
