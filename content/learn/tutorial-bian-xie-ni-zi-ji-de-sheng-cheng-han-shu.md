[Image: image]

# 编写你自己的生成函数

Tutorial

Beginner

+0XP

30 mins

3

(232)

Unity Technologies

[Image: 编写你自己的生成函数]Summary

在本教程中，你将：

- 编写一个函数来更高效地生成生命值药水
- 在 Unity 编辑器中检查你的代码
- 了解**作用域**，以及如何访问不同脚本中的信息

完成本教程后，你便可以思考在更高层面上进行脚本的组织了。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 编写函数声明

Q&A (0)

程序员可以通过函数编写更高效的代码，而不必复制多个指令。你现在已了解函数的工作原理，接下来便可以创建一个新函数来生成生命值药水。

我们首先接受一项挑战：尝试在 SpawnerSample 脚本中为新函数编写函数声明。

请参考以下指导信息：

- 在脚本中的 Start 函数之后、最后一个花括号之前声明你的函数。
- 函数类型应该为“void”，就像你看到的示例一样。
- 选择的名称应能够提供有关该函数的功能的一些信息。
- 如果有一个值需要根据不同的生命值药水生成情况而变化，则你的函数将需要一个参数。

**提示：**如果遇到困难，请再次查看[示例声明](https://learn.unity.com/tutorial/introduction-to-functions)，并将相关内容作为帮助参考。

在尝试编写你自己的函数声明后，请继续下一步以查看答案。

Mark step as complete

## 2. 检查函数声明

Q&A (0)

你的函数声明应如下所示：

```csharp
void SpawnPotion(int angle)
```

让我们对这条语句进行分解：

- **SpawnPotion** 是一个描述性的函数名称，可方便以后查看代码的人员理解函数的用途。你可能选择了其他名称，但任何清晰和描述性的其他名称都是可以的。
- 参数变量类型为 **int**。
- 示例中的参数变量名为 **angle**，因为这是每个生成的药水会改变的唯一要素。同样，你可以在自己的版本中选择其他名称。

该声明当前在代码编辑器中显示红色下划线，因为你尚未添加函数体。你将在下一步中解决此问题。

Mark step as complete

## 3. 编写函数体

Q&A (0)

你现在已经编写了函数声明，接下来可以编写函数体：

**1.**在函数声明下方的行中，开始一组花括号 (**{**)。

**2.**在下一行中，将脚本中用于控制生命值药水生成过程的三条指令复制过来。

**3.**在新行中，输入结尾的花括号 (**}**)。

**4.**对照以下示例检查你的代码：

```csharp
void SpawnPotion(int angle)
{
    Vector3 direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
    spawnPosition = transform.position + direction * radius;
    Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
}
```

请注意，你的函数名和变量名可以不同，但其他所有内容都应该与此示例匹配。

**Vector3** 是一种变量类型，用于将 3D 游戏空间中的一个位置存储为三个值（x 轴、y 轴和 z 轴）。这些值通常被简称为 **x**、**y** 和 **z**。现在不必担心此函数中其余不熟悉的内容。

**5.**按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改。

你的代码编辑器将用红色下划线来标示 **spawnPosition** 和 **radius**，从而向你表明此代码中有错误（很像是文字处理程序）。不必担心，你将在后续步骤中识别并修复这些错误。

Mark step as complete

## 4.  识别函数中的错误

Q&A (0)

修复代码之前，请查找有关错误的更多信息：

**1.**返回到 Unity 编辑器。

**2.**在 Project 窗口中，选择 **Console** 选项卡。

[Image: image]

**3.**你应该会看到以下错误消息：

- error CS0103: The name 'spawnPosition' does not exist in the current context（该错误将重复两次）
- error CS0103: The name 'radius' does not exist in the current context

[Image: image]

Console 中的信息告诉你 **spawnPosition** 和 **radius** 变量在“当前上下文”(the current context) 中不存在，让我们来探索这个信息的准确含义。

Mark step as complete

## 5. 作用域简介

Q&A (0)

脚本中的花括号 (**{ }**) 定义了所谓的“作用域”。这意味着在函数内部声明的变量只在这个范围内存在；我们可以认为花括号将形成较小的独立指令范围。

这意味着，在一个脚本中可以有两个同名变量被赋予不同值，分别存在于不同的作用域中。

[Image: image]

在你的脚本中，变量 **spawnPosition** 和 **radius** 都是在 **Start** 函数中声明的。这意味着，当计算机开始编译 **SpawnPotion** 函数时，并不知道这些变量的存在。

要修复此问题，你在函数中首次调用该变量时，需要通过添加变量类型来重新声明该变量。这样会告诉计算机需要留出多少内存来存储此变量的信息。

Mark step as complete

## 6. 在函数中重新声明变量

Q&A (0)

让我们来修复错误 CS0103，使 SpawnPotion 函数能够正常运行：

**1.**返回到代码编辑器，然后在 SpawnerSample 脚本中找到 **SpawnPotion** 函数。

**2.** 在新函数的作用域内重新声明 **radius** 变量。最简单的做法是在用于计算生成位置的指令之前进行重新声明。

**3.** 在 **spawnPosition** 变量前面添加 **Vector3** 类型。

**4.**对照以下示例检查你自己的代码：

```csharp
void SpawnPotion(int angle)
{
    int radius = 5;

    Vector3 direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
    Vector3 spawnPosition = transform.position + direction * radius;
    Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
}
```

**5.**按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改。

Mark step as complete

## 7.  将生成指令替换为函数调用

Q&A (0)

你现在已经编写了 SpawnPotion 函数，接下来可以调用（使用）这个函数来代替 Start 函数中的指令集：

**1.** 在 SpawnerSample 脚本的 Start 函数中，将用于生成每个生命值药水的指令集替换为函数调用。

请参考以下信息：

- 你希望在游戏开始时生成**四个生命值药水**。
- 每个药水都以不同角度创建（你已经在现有指令集内获得了这方面的信息）。
- 每条指令需要以分号 (**;**) 结尾。

**提示：**如果需要复习一下，可以查看[前一教程中的有关函数调用的步骤](https://learn.unity.com/tutorial/introduction-to-functions)。

**2.** 按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改。

Mark step as complete

## 8. 检查函数调用

Q&A (0)

你的 SpawnerSample 脚本现在应该具有以下函数：

```csharp
void Start()
{
    SpawnPotion(0);
    SpawnPotion(45);
    SpawnPotion(90);
    SpawnPotion(135);
}

void SpawnPotion(int angle)
{
    int radius = 5;

    Vector3 direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
    Vector3 spawnPosition = transform.position + direction * radius;
    Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
}
```

**注意：**切记，函数名和变量名都由你自己定义。

Start 函数中的每次函数调用都会分配一个不同的 angle 值，以便生命值药水正确分布在生成点周围。如果要添加第五个生命值药水，只需编写具有不同 angle 值的另一次函数调用。

Mark step as complete

## 9. 测试所做的更改

Q&A (0)

你现在已更正自己的代码，接下来请在 Unity 编辑器中检查所做的更改：

**1.** 在编辑器中，再次检查 **Console** 选项卡。现在应该不会再显示 CS0103 错误消息。

**2.**单击 **Play** 以进入运行模式。

**3.**游戏开始后，检查现在是否会以不同角度生成四个（或五个！）生命值药水。

**4.**完成对更改的检查后，再次单击 **Play** 以退出运行模式。

Mark step as complete

## 10. 教程总结

Q&A (0)

在本教程中，你已经：

- 编写一个函数来更高效地生成生命值药水
- 在 Console 中检查函数
- 了解与变量相关的作用域
- 重新声明变量以修复作用域错误
- 将生成指令替换为函数调用

在每个教程中，你都会学习并运用基本的编程概念来改进 SpawnerSample 脚本。这些改变可能看似很小，但你的进步将让你能够对“创作者套件：初学者代码”游戏的玩家体验产生重大影响。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
