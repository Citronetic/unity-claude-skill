[Image: image]

# 从 Unreal 过渡到 Unity

Tutorial

intermediate

+10XP

30 mins

20

(58)

Unity Technologies

[Image: 从 Unreal 过渡到 Unity]Summary

本指南旨在帮助 Unreal 引擎开发者熟悉 Unity 引擎、编辑器及其各种工作流程。

Resources

- [AccessibiltyTables.pdf](https://unity-connect-prd.storage.googleapis.com/20190813/362d1905-ce8c-4f14-ac73-d038599af82c/AccessibiltyTables.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)

Languages available:

简体中文English한국어简体中文简体中文

## 1. 准备开始

Q&A (0)

在开始使用 Unity 之前，你需要安装适合自己需求的引擎版本。这可以通过 [**Unity Hub**](https://docs.unity3d.com/Manual/GettingStartedUnityHub.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) 完成，Unity Hub 是一个独立的应用程序，可简化查找、下载和管理 Unity 项目及安装内容的方式。在“Installs”页面中，单击“Add”按钮可获取最新版本的 Unity。

[Image: image]

#### 设置编程环境

进行 Unity 编程的推荐 IDE（集成开发环境）是 Visual Studio，最新版本的 Unity 打包了 Visual Studio Professional 2019。但是，由于 Unity 通过 Unity 编辑器编译所有脚本，所以对使用什么 IDE 并没有严格的要求。也就是说，你可以使用你喜欢的任何代码编辑器，而且许多工具都有现成的 Unity 集成。

我们将安装 Visual Studio 并推荐使用该 IDE，因为它提供了 Intellisense、自动补全等便捷功能，以及断点、监视点等调试工具。由于已预装 Visual Studio，所以不需要进行任何配置。但是，如果你想了解更多信息，可以查看[官方指南](https://learn.unity.com/tutorial/get-started-with-visual-studio-and-unity)和浏览一些提示。

Mark step as complete

## 2. 编辑器

Q&A (0)

首次打开 Unity，你应该会看到一个与 Unreal 类似的布局。两种引擎的编辑器都包含完全模块化、可自定义的窗口系统。这让你可以在界面中移动、调整大小和替换选项卡和面板。以下是 Unity 中的重要视图及其在 Unreal 编辑器中的对应视图。

[Image: image]

#### Scene 视图（视口）

**Scene 视图**是 Unity 的视口，可用于直观导航和编辑场景。选择[**游戏对象**](https://docs.unity3d.com/ScriptReference/GameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)会显示熟悉的 3D 变换手柄，可以使用工具栏左上角的按钮选择其类型（这些按钮还可用于选择轴心选项、在世界/本地方向之间切换等）。工具栏的中央是播放、暂停和跳帧按钮，让你能够直接在编辑器中测试游戏。

位于 Scene 视图右上角的**场景视图辅助图标**表示视图的方向。单击某个轴可让视图与该轴对齐，单击中心的立方体可在正视图与透视图之间切换。

[Image: image]

#### Game 视图 (Play in Editor)

默认情况下，**Game 视图**位于 Scene 视图后面，提供 Unity 的“Play in Editor”功能。

在 Unreal 中，当在编辑器中启动游戏时，将在活动视口中播放游戏。Unreal 拥有玩家 Pawn，视口充当实际的游戏视图。Unpossessing 让你可以在游戏运行期间编辑关卡。

Unity 将这两种“模式”分离为 Scene 视图和 Game 视图。Game 视图捕获光标和响应输入，就像游戏构建一样。切换到 Scene 视图允许在运行时进行更新 - 通常将它们并排放置，以方便快速迭代。

[Image: image][Image: image]

#### Hierarchy 窗口 (World Outliner)

在 Unreal 中，活动子关卡中的所有 Actor 都列在 World Outliner 中。这为你提供了一种组织、筛选和设置 Actor 可见性的方法。

在 Unity 中，这对应于 **Hierarchy 窗口**，它提供相同的搜索和可见性功能，同时还提供了一种管理活动场景和添加新游戏对象的方法。

[Image: image]

#### Project 窗口 (Content Browser)

Unity 的 **Project 窗口**对应于 Unreal 的 Content Browser，用于显示项目中所有可用的资源。它提供了搜索功能，让你可以筛选和保存搜索，以便更轻松地查找资源。此外，项目使用的任何外部包都会在项目资源下方的单独文件夹中显示其资源。

[Image: image]

#### Inspector (Details)

**Inspector** 的功能与 Unreal 中的 Details 面板相同。它让你可以在单击游戏对象或预制件时查看和编辑组件属性。

与 Unreal 打开新窗口来编辑资源设置的方式不同，当你在 Project 窗口中选择资源时，Unity 会在 Inspector 中显示资源的相关信息和设置。

[Image: image]

#### Console（消息视图/输出日志）

**Console** 选项卡位于 Project 窗口后面，用作游戏和编辑器的调试输出。通过 C# 中的“Debug”类，可以使用以下函数输出一系列消息：

- Log()
- LogWarning()
- LogError()

[Image: image]

在 Console 的顶部菜单栏中，可以清除或筛选消息，以及启用“Pause on Error”功能。调试函数还有一个 **Context** 参数，允许你将游戏对象与消息关联起来。当双击带有 **Context** 的消息时，将在 Scene 视图和 Hierarchy 中聚焦到该游戏对象。

*Debug.Log("Just a Log!");*

*Debug.LogWarning("Uh oh, a Warning!");*

*Debug.LogError("Oh no!An Error!");*

#### Modes 面板在哪里？

Unity 中没有 Unreal 的 **Modes** 选项卡。大多数对象放置是直接在 Project 窗口中完成的。树叶绘画或景观雕刻等特殊交互通常在单独的工具窗口中完成，或者在场景中选择相关对象后根据上下文完成。

#### 其他说明

- 可以通过工具栏访问 **Project Settings**，方法是：选择 **Edit > Project Settings...**。你可以在此处编辑输入、物理、碰撞层、编辑器行为等。
- 可以通过选择 **Edit > Preferences** 来设置 **Editor Preferences**。这让你可以更改外部工具、热键和颜色。
- 通过 **Window** 菜单选项，可以找到在你的 Unity 项目中可用的所有工具窗口。这包括默认引擎窗口（Scene、Inspector、Hierarchy），以及由插件或项目代码添加的任何窗口。如果你想恢复已关闭的选项卡，可以在这里找到它。

[Image: image]Mark step as complete

## 3. 项目和资源

Q&A (0)

Unity 项目的设置方式与 Unreal 项目类似，但资源管理方式存在重大差异。

#### 资源存储在哪里

在 Unity 中，包括源代码在内的所有资源都存储在**“Assets”文件夹**中，而不是将“内容”和“源代码”相分离。

[Image: image]

唯一的例外是“Package”文件夹，Unity 的 [Package Manager](https://docs.unity3d.com/Manual/Packages.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) 使用它来存储已安装的包（类似于 Unreal 的 Plugins 文件夹）。

#### 资源是如何存储的

在 Unreal 中，资源存储为 UAsset，这是 Unreal 特有的资源，它允许将来自不同来源和文件类型的资源作为一种统一类型导入。UAssets 既存储资源所需的数据，也存储任何引擎相关数据，如纹理过滤或网格碰撞。这也意味着 Unreal 实际上并没有在其项目结构中存储原始资源。

Unity 将源文件**直接存储在项目中**，并在单独的“.meta”文件中包含相关资源的引擎和编辑器特定数据。在后台，Unity 将导入的资源处理成优化的、可用于游戏的格式，这是引擎在运行时实际使用的格式。这些经过处理的资源存储在 **Library** 文件夹中，该文件夹用作缓存，不需要添加到源代码控制系统中。

[Image: image]

#### 支持的资源格式

Unity 支持广泛的文件格式：

[Image: image]

#### Scene (Map)

Unity 的 **Scenes** 相当于 Unreal 中的 Map 文件，它包含特定关卡的所有数据。

当在编辑器中工作时，你通常是在编辑某种 .scene 文件（除非你在预制件模式下编辑单个预制件，相关说明请参阅“使用预制件模式”部分）。与 Unreal 一样，你可以同时加载多个场景。

Scene 文件有一个方便之处：默认情况下，它们在计算机上注册为 Unity 资源。当在计算机的文件浏览器中单击它们时，可直接打开 Unity 编辑器。

Mark step as complete

## 4. Actor 与游戏对象，以及组件

Q&A (0)

#### 游戏对象与 Actor

在 Unreal 中，存在于游戏世界中的基本实体是 Actor。在 Unity 中，其对应的是[**游戏对象**](https://docs.unity3d.com/ScriptReference/GameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)。Actor 与游戏对象的相似之处在于它们都接受组件，并且可以使用其变换（在 Unity 中为变换组件）在世界中移动、旋转和缩放。

但 Unity 与 Unreal 有一个重要的区别。

#### Unreal 中的 Actor

Unreal 有专门的 Actor，例如 Pawn 和 Character。Unreal 中的 Actor 可以在代码中进行扩展和特化，使其具有内置于 Actor 本身的特殊功能。

#### Unity 中的游戏对象

而 Unity 的游戏对象是一个密封类，不能扩展或特化；游戏对象的行为完全由其组件定义。在 Unreal 中，你拥有的是玩家角色 Pawn，而在 Unity 中，你拥有的是具有玩家角色组件的游戏对象。

可以通过菜单栏中的“GameObject”菜单或单击 Hierarchy 窗口顶部的加号按钮 (**+**) 来创建游戏对象。这会将选定的游戏对象实例化到场景中。然后，可以四处移动它，或将其附加到其他游戏对象上。

[Image: image]

#### 组件

Unity 和 Unreal 都使用组件，但由于游戏对象的工作方式，它们的实现略有不同。

Unreal 中的组件
Unreal 有两种类型的组件：Actor 组件和 Scene 组件。Actor 组件只是单纯地向 Actor 添加行为，而 Scene 组件还拥有变换，并作为 Actor 的子代存在于世界中。

静态网格组件是一种常见的 Scene 组件类型，一个 Actor 可以附加多个静态网格组件，从而在世界中创建更复杂的形状。

#### Unity 中的组件

Unity 组件的功能类似于 Actor 组件，这意味着它们在世界中没有任何物理存在。通常，Unity 中唯一具有变换的实体是游戏对象。为了获得像 Scene 组件那样的功能，你可以在 **Hierarchy 窗口**中将一个游戏对象拖到另一个游戏对象上，以创建游戏对象的层级视图。

[Image: image]

#### 示例：在两种引擎中创建房屋

突出显示这种差异的一个有用示例是分别在两种引擎中创建房屋：

- 在 Unreal 中，你将制作一个“House”Actor，它具有地板、墙壁、屋顶等静态网格组件。
- 在 Unity 中，你将创建一个“House”父游戏对象。然后在“House”游戏对象下，添加地板、墙壁、屋顶等子游戏对象 - 每个都有自己的网格渲染器组件。

#### 在 Unity 中添加组件

可以通过菜单栏中的 **Component 菜单**或在 Inspector 中选择 **Add Component** 按钮来将组件添加到游戏对象上。

单击 **Add Component** 按钮会显示一个搜索小部件，你可以使用它查找要添加的组件。在这里，你还可以选择 **New Script** 按钮来立即创建一个新的组件脚本并将其添加到游戏对象。

[Image: image]

也可以在运行时添加组件。要进行该操作，请使用 **AddComponent<T>()** 函数，其中“T”为要添加的组件类型。

Mark step as complete

## 5. 蓝图与预制件

Q&A (0)

#### 简介

在 Unreal 中，蓝图的功能之一是创建具有独特组件和属性的 Actor 实例，以便在项目中使用。你创建的蓝图被存储为资源，可任你随意放置和生成。

#### Unity 中的预制件

在 Unity 中，这是使用**预制件**完成的。预制件是一种保存为资源的游戏对象层级视图。预制件可以直接从 Project 窗口拖放到 **Scene 视图**中，也可以在脚本中通过引用生成。

更新**预制件资源**后，所有场景中的该预制件的全部实例都会更新。但是，如果只是更改场景中**预制件实例**的属性，它将保留这些修改后的属性。

[Image: image][Image: image]

#### 使用预制件模式编辑预制件

蓝图拥有自己的资源窗口，以用于编辑自身，同样地，Unity 提供了**预制件模式**，让你可以在场景外查看预制件资源。这让你可以进行局部调整和添加子游戏对象。可以通过在 Project 窗口中双击预制件或在 Hierarchy 中单击预制件实例旁边的向右箭头来访问预制件模式。

[Image: image]

#### 节点

与具有嵌入式可视化脚本系统的蓝图不同，预制件没有任何脚本功能或特性。

预制件的所有行为都来自于它包含的游戏对象的组件。通过编写 C# 脚本来创建自定义行为。

#### 嵌套预制件（子 Actor）

在 Unreal 中，蓝图的一个有用组件是**子 Actor** **组件**，它允许你将一个 Actor 用作另一个 Actor 的组件。这用于实现两个蓝图必须单独存在但又有内在联系的情况 - 例如，一个玩家角色手持一把剑。

这类似于 Unity 的**嵌套预制件**功能，它允许你将预制件放入其他预制件中，同时仍保持与原始预制件的关联。这意味着，如果更新了子预制件，也会自动更新嵌套该预制件的所有其他预制件。

Mark step as complete

## 6. Unity 中的脚本编程

Q&A (0)

#### 与 Unreal 脚本编程的相似之处

Unreal 使用 C++ 处理低级行为，使用蓝图编写脚本，而 Unity 的所有脚本都是使用 C# 编写的。但是，与 Unreal 一样，Unity 脚本主要用于[处理游戏事件](https://docs.unity3d.com/Manual/EventFunctions.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)，如帧更新和重叠。

你可以在下面找到一些示例：

[Image: image]

有关如何以及何时执行 Unity 事件的更多信息，请参阅 Unity 手册中的[事件函数的执行顺序](https://docs.unity3d.com/Manual/ExecutionOrder.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)。

#### 使用 Monobehaviour 编写组件脚本

如前所述，游戏对象是密封类，不能像 Actor 那样支持自定义行为。相反，它们的所有行为都来自于组件。可以通过扩展 Unity 的 **MonoBehaviour 类**来创建组件类。MonoBehaviour 是所有组件脚本的基类，它允许将你的代码附加到游戏对象上。

#### 示例：分析一个 Unity 组件脚本

我们来分析一下下面的组件脚本，它根据收到的事件记录各种消息：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HelloWorldComponent : MonoBehaviour
{
    public string customStartMessage;

    [SerializeField]
    private string customHitMessage;

    [SerializeField]
    private int hitLimit = 5;

    private int hitCount = 0;

    // 在第一次帧更新之前调用 Start
    void Start()
    {
        Debug.Log(customStartMessage);
    }

    //在命中该游戏对象上的碰撞体时，调用 OnCollisionEnter
    void OnCollisionEnter(Collision c)
    {
        Debug.Log(customHitMessage);

        if(++hitCount > hitLimit)
        {
            Destroy(this.gameObject);
        }
    }
}
```

该脚本被设置为一个扩展了 Monobehaviour 的相当通用的 C# 类，但有几个值得注意的重要之处：

#### 序列化字段

在类主体的顶部，脚本为组件定义了两个字符串变量，以便在其启动和被命中时进行记录。但是，这两个字符串变量并未在代码中的任何地方定义。这是因为这些变量是序列化的，并且可以作为属性在编辑器中使用 Inspector 进行配置。

[Image: image]

这与 Unreal 中 UProperties 的用法非常相似。在 Unity 中，可通过在变量声明上方添加“**[Serialize Field]**”属性来使变量出现在 Inspector 中。默认情况下，公共变量是序列化的，私有变量不是，因此不需要为公共变量使用该属性。

即使变量是序列化的，你仍然可以对其进行初始化，如 **hitLimit** 变量所示。这将作为变量在 Inspector 中显示时的默认值。

#### 事件方法

上述声明的下面是 Unity 在响应特定事件时将调用的函数：

- 一旦组件的游戏对象在场景中被激活，就会调用 **Start()**。
- 每当该游戏对象上的碰撞体被附加有 Rigidbody 组件的对象击中，就会调用 **OnCollisionEnter()**。
- **Update()** 每帧都会被调用。

**注意：**如果不需要 Update() 函数，最好从脚本中删除该函数。这类似于在 Unreal 中将 CanActorEverTick 设置为 false，有助于避免每帧不必要的调用。

#### UObject 的等价物在哪里？

Unreal 的基础对象类是 **UObject** 类，可通过扩展它来创建常规 Actor/Component 模式之外的对象。这些对象不会生成到世界中，但仍可以被其他对象/Actor 引用，对于在不污染关卡的情况下包含数据很有用。

#### Unity 的 Object 类

Unity 的基础对象类是 **UnityEngine.Object** 类（不要与 C# 的 Object 类 System.Object 混淆）。这为游戏对象和 Monobehaviour 提供了许多基本功能，但它不适合以与 UObject 相同的方式进行扩展。一般情况下，我们不会直接对它进行扩展。

#### 使用 ScriptableObject

#### **Unity 的 [ScriptableObject](https://docs.unity3d.com/Manual/class-ScriptableObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) 支持创建数据对象而不在场景中生成它们的功能。与 UObject 一样，ScriptableObject 存储数据并减少游戏对象之间的依赖关系。**

但在 Unity 中，ScriptableObject 也可以实例化为资源。这类似于 Unreal 中的数据资源。这是一个非常强大的功能，可将静态数据与游戏对象完全分离。

#### 示例：游戏中的药水商店

想象一下，你想在游戏中创建一个出售药水的商店。每种药水都是一个预制件，用于存储药水的外观和使用时控制药水行为的脚本。当玩家进入商店时，他们可能会看到一个菜单，其中列出了 30 种待售药水，以及每种药水的名称、价格和描述。如果将这些 UI 数据存储在预制件上，则意味着 Unity 需要把所有 30 种药水预制件都加载到内存中，才能获取 UI 所需的名称和价格。但这样做也会加载药水的所有视觉效果和脚本数据，而 UI 根本不需要这些数据。

为了避免加载所有这些不必要的数据，我们可以使用包含名称、价格、描述和对包含药水视觉效果及行为的预制件的引用的 ScriptableObject 来将 UI 数据与游戏数据分离。通过这种方式，可以快速加载较为轻量的描述数据并在整个 UI 中共享，并且仅当玩家在游戏中实际装备药水时才加载更复杂的预制件。

#### 常见脚本用例

以下是 Unreal 及其 Unity 对应项的一些常见用例和模式：

#### 创建对象实例

在 Unreal 中，这是通过 CreateActor 蓝图节点或 UWorld::SpawnActor() C++ 函数完成的。在这两种情况下，都需要传入类引用和初始化数据，例如名称和位置。

在 Unity 中，使用 **Instantiate()** 函数完成游戏对象的实例化，该函数接受预制件引用和起始位置/旋转。如果你只需要一个空游戏对象，也可以使用“new GameObject()”快速实例化一个新的游戏对象实例。

#### 类型之间的转换

在 Unreal 中，类型转换主要是通过生成的蓝图转换节点或 C++ 中的 Cast<Type>() 函数完成的。

在 Unity 中，可以使用 "**as**" 关键字进行转换，或使用 c 风格的转换。在这两种情况下，如果转换失败，结果为 null。

```csharp
CastedType asCast = obj as CastedType;
CastedType cStyleCast = (CastedType)obj;
```

#### 销毁和禁用对象

两个引擎都有垃圾回收功能，可以清理未使用的引用。

在 Unreal 中，一些对象类型还具有显式的 Destroy 函数，用于标记要删除的对象。

在 Unity 中，UnityEngine.Object 基类有一个静态 [**Destroy**](https://docs.unity3d.com/ScriptReference/Object.Destroy.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) 函数，当传入对象引用时，该函数将销毁这个对象。这可以被游戏对象和组件使用，也可以被任何继承自 UnityEngine.Object 基类的对象使用。也可以使用 **SetActive(false)** 禁用游戏对象。

也可以单独禁用组件，这仍然允许代码执行，但会阻止调用 Update 和 OnCollisionEnter 等 Unity 事件方法。

#### 访问组件

在 Unreal 中，要查找附加到 Actor 的组件，可以使用蓝图中的 GetComponentByClass 节点，或使用 C++ 中的 FindComponentByClass 函数。两种方法都接受一个类类型，它们使用该类查找匹配的组件。但是，由于在 C++ 和蓝图中都可以使用名称定义组件，因此如果知道 Actor 的类型，可以简单地通过名称访问组件。

在 Unity 中，可以使用[泛型函数](https://docs.unity3d.com/Manual/GenericFunctions.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) **GetComponent<T>()** 来执行该操作，该函数返回在游戏对象上找到的类型的第一个组件。与 Unreal 不同，你无法通过名称自动访问游戏对象的组件。要解决这个问题，你可以简单地调用 **GetComponent** 一次（通常在 **Start** 方法中），并将结果存储在一个变量中。频繁调用 **GetComponent** 会影响性能，因为它需要遍历游戏对象上的每一个组件，因此在可能的情况下存储引用是优化代码的一种简单方法。

#### 使用标签

Unreal 有 GameplayTag 系统，可用于比较对象之间的标签，以进行快速识别。

[Image: image]

Unity 有自己的游戏对象标签系统。可以在 Inspector 中使用“Tag”下拉菜单选择标签，或创建新的标签。然后，可以使用 **GameObject.tag** 或 **GameObject.CompareTag()** 访问该数据。

可以在项目设置中编辑标签，方法是：转到 **Edit > Project Settings...> Tags and Layers**。

#### 查找游戏对象和组件

在 Unreal 中，可以使用 GetAllActorsOfClass 在世界中搜索 Actor 类型，然后筛选结果。

在 Unity 中，可以使用 **GameObject.Find(*string*name)** 按名称查找游戏对象。也可以使用 **GameObject.FindWithTag(*string* tag)** 按标签进行搜索。

要按组件类型查找对象，可以使用[泛型函数](https://docs.unity3d.com/Manual/GenericFunctions.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) **FindObjectsOfType<T>()**，其中 T 为要查找的组件类。这将返回一个包含搜索结果的数组。

在两种引擎中，频繁调用在世界中查找对象的函数都可能会产生很高的性能成本，因此不应在每帧都被调用的代码中使用。

#### 射线投射（追踪）

在 Unreal 中，射线投射和形状投射是使用 Trace 函数完成的。形状和光线追踪都支持按通道或对象类型进行追踪。投射输出一个 Hit Result 结构体，其中包含命中结果的所有相关信息。

Unity 有几个用于射线投射的函数：

[Image: image]

此外，还可以使用 **RaycastAll()** 或 **SpherecastAll()** 返回所有命中结果，而不仅仅是第一次命中。对于性能敏感的上下文，这些函数也有不分配垃圾的版本（例如：**Physics.OverlapSphereNonAlloc**）。

#### 输入和输入管理

在 Unreal 中，可以使用 Input Actions/Axis 设置创建操作。通过这些设置，你可以为玩家操作定义各种绑定（例如，“Jump”或“Throttle”）。然后，可以将输入操作绑定到函数，以使代码能够对输入做出反应。

Unity 也使用类似的系统：代码可以使用 **Input.GetAxis()** 函数从定义的 **Axes** 读取输入。可在以下位置找到这些设置：**Edit > Project Settings...> Input Manager > Axes**。

[Image: image]

**Input.GetAxis("Horizontal")** 默认绑定到 A/S 键和控制器上的左/右模拟轴。

可以为每个轴设置死区、灵敏度、反转等选项。虽然被称为轴，但它也支持数字输入（使用 **Input.GetButtonDown()** 函数）。此外，还可以使用 **Input.GetKeyDown()** 查询显式键。

#### 异步代码（延迟/时间轴）

在 Unreal 中，延迟和时间轴节点提供了控制事件计时和随时间修改属性的简单方法。

在 Unity 中，可以使用**协程**处理这些类型的延迟执行。协程是独立于常规代码执行的特殊函数，可以使用“yield”指令随意延迟或暂停协程。所有协程都需要返回一个 IEnumerator，这让你可以使用 yield 返回某种暂停或延迟。

下面的示例将在延迟 5 秒后打印日志：

```csharp
void Start()
{
StartCoroutine(DelayedLog(5.0f));
}

IEnumerator DelayedLog(float delay)
{
	Debug.Log("Starting Delay.");

//等待“delay”秒，然后再继续
	yield return new WaitForSeconds(delay);

Debug.Log("Delay complete!");
}
```

#### 事件系统

在 Unreal 中，可以利用蓝图的事件分发程序系统或 C++ 委托为你的类创建和绑定自定义事件。

在 Unity 中，可以通过多种方法创建和绑定事件。最新的示例是 **UnityEvents 系统**，它提供了一种使用 Inspector 将处理程序绑定到事件的强大方式。

当你在代码中定义序列化事件后，可在 Inspector 中看到公开的字段（如“序列化字段”中所述）。你可以将要对事件做出反应的游戏对象拖放到 Inspector 中的字段上。

如果你需要更轻量一些的事件系统，Unity 还支持委托以及通用 C# 事件。

[Image: image]Mark step as complete

## 7. 其他引擎属性

Q&A (0)

#### 物理和碰撞

Unreal 的模拟和碰撞属性直接内置于原始组件中，它管理与组件交互的通道以及物理材质、质量之类的数据。碰撞边界由组件使用的可视网格定义。

Unity 的内置物理引擎使用 **Rigidbody** 组件和 **Collider** 组件控制物理模拟。根据游戏对象的形状，有一些专门的碰撞体，包括：

- 盒体
- 球体
- 胶囊体
- 网格

Rigidbody 负责管理游戏对象的动态模拟，而 Collider 提供形状属性。交互的物理层在项目级别定义。

[Image: image]

#### 基础动画

在 Unreal 中，使用动画序列/蒙太奇创建骨架动画，通常使用动画蓝图和状态机来控制此动画。

Unity 的 **Mecanim** 动画系统也以类似的方式工作。通过 Mecanim，可以导入各种动画剪辑，并使用可由脚本控制的状态机控制它们的播放。

[Image: image]

#### 多对象动画和影片动画

[Image: image]

Unreal 控制影片动画和多对象动画的主要工具是 Level Sequencer。

在 Unity 中，**Timeline** 是一种很便利的工具。与 Level Sequencer 资源类似，Timeline 资源是属性动画的集合。Timeline 可与多种系统配合使用，包括：

- 动画
- 粒子效果
- 声音
- 摄像机
- 变换
- 材质

#### 用户界面 (UI)

在 Unreal 中，大多数用户界面 (UI) 是使用 Unreal Motion Graphics UI Designer (UMG) 控制的。UMG 是一种保留模式 UI 系统，使用 UMG 时，你在层级视图中创建 UI 对象，每个对象处理自己的数据和事件。UMG 使用称为小部件的特殊蓝图，使你能够在单个资源中设置 UI 布局和编写脚本。

[Image: image]

Unity 还有一个基于 **Canvas** 组件的保留模式 UI 系统，称为 [**Unity User Interface (Unity UI)**](https://docs.unity3d.com/Manual/UISystem.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346)。与 UMG 不同，该系统不需要单独的资源：只需使用带有 UI 特定组件的游戏对象控制渲染、交互和布局。在 Hierarchy 中，所有 UI 游戏对象都放置在具有 Canvas 组件的另一个游戏对象下，它管理着 UI 的渲染方式以及如何与之进行交互。

向该 UI 添加行为是通过编写 C# 脚本或在 Inspector 中拖放 UnityEvent（对于像 Button 这样的组件）来完成的。

Mark step as complete

## 8. 常见问题解答

Q&A (0)

#### 我不是传统的程序员 - Unity 中是否有蓝图可视化脚本之类的工具？

目前，Unity 中没有内置蓝图风格的可视化编程工具。但是，如果你知道如何制作蓝图，学习 Unity 的 C# 脚本并不像初看起来那么困难。有大量[教程](https://learn.unity.com/course/unity-c-survival-guide)和[示例项目](https://learn.unity.com/project/creator-kit-beginner-code)可帮助你快速掌握 Unity 中基本的脚本编程知识。

但是，如果你确实更喜欢可视化脚本，那么有一些好消息。在 Unity 庞大的插件生态系统中，有几个极其强大且支持良好的可视化脚本系统，例如 [Bolt](https://learn.unity.com/project/bolt-platformer-tutorial)。借助它们，你可以重新创建蓝图风格的工作流程。

Mark step as complete

## 9. 了解详情

Q&A (0)

本教程有望帮助弥合 Unreal 引擎与 Unity 中一些核心概念之间的差距。

但是，Unity 有更多的资源来帮助你进一步学习和了解引擎：

- [Unity 用户手册](https://docs.unity3d.com/Manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) - 关于 Unity 的一切基本要素。可以在此找到引擎和编辑器中的所有功能。
- [Unity 脚本参考](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954049346) - Unity C# 脚本和所有内置 Unity 库的综合文档。
- [Unity Learn](https://learn.unity.com/) - Unity 官方发布的学习内容，既有完整的指导课程，也有简短的主题教程。
- [Unity 的 YouTube 频道](https://www.youtube.com/channel/UCG08EqOAXJk_YXPDsAvReSg) - 展示 Unity 功能的最新视频内容，以及许多视频教程。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
