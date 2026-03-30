[Image: image]

# 编写你自己的指令

Tutorial

Beginner

+0XP

15 mins

4

(278)

Unity Technologies

[Image: 编写你自己的指令]Summary

在本教程中，你将：

- 练习阅读脚本中的指令
- 编写你自己的指令来声明新变量并向变量赋值
- 测试并检查你对游戏的更改

完成后，你将实现对“创作者套件：初学者代码”游戏中的药水生成距离的更改。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 查找药水生成距离的指令

Q&A (0)

你现在已经探索了一条声明变量并向其赋值的指令，接下来可以创建你自己的指令了！

让我们首先更改药水生成位置与 PotionSpawner 游戏对象之间的距离。首先，你需要接受一项挑战：

- 在 SpawnerSample 脚本中，找到告诉计算机在何处创建药水的指令。该指令在脚本中重复了三遍。

请注意，你可能还不能理解所有内容，但不必担心，只需根据变量名称、你认识的单词以及变量赋值来找出最合适的指令就可以了。

Mark step as complete

## 2. 分解该指令

Q&A (0)

用于控制药水生成距离的指令在 SpawnerSample 脚本的第 **14**、**19** 和 **24** 行中重复出现：

```csharp
spawnPosition = transform.position + direction * 2;
```

让我们来分解这条指令：

**1.**首先，理清你目前已对这条指令了解的信息：

- 这条指令包括的等号 (**=**) 用于向变量赋值。在此示例中，变量的名称为 **spawnPosition**。
- 此变量的名称表明它包含药水生成位置。该指令重复三次（生成药水的数量）即证明这一点。

**2.** 接下来，在 [Unity 脚本参考](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951631900)中搜索这条指令中你不熟悉的术语。搜索 **transform.position** 并选择第一个结果。

在搜索结果页面上，你会看到一个解释：**transform.position** 是附加到游戏对象的变换组件的位置属性。这是生成药水的同一个游戏对象：PotionSpawner。

**3.**名为 **direction** 的变量用于存储每个药水的生成位置坐标。

**4.**值 **2** 是指在这个方向上生成每个药水的距离。

#### 总结

这条指令将 ***transform.position + direction * 2*** 值赋予 **spawnPosition** 变量，从而为每个药水瓶设置不同的生成位置。

Mark step as complete

## 3.  创建你自己的变量

Q&A (0)

目前为止，你已经弄清楚每个药水在距离 PotionSpawner 两个单位的位置处创建。

这很有用，但如果要以五个单位的距离生成每个药水，则需要在三个不同地方更改此数值。这不是很现实，并且有可能出错。

为了改善这一点，我们用一个变量替换该值：

**1.**  编写一条指令，声明你自己的变量 **radius** 来存储距离。在 **angle** 变量之后的行（第 10 行）上添加该指令（这会将这行下的所有指令下移一行）。

请参考以下指导信息

- 你的变量应该命名为 **radius**
- 应该在距离 PotionSpawner 游戏对象**五个单位**的位置生成药水
- 每条指令需要以分号 (**;**) 结尾
- 该变量的类型应该为 **int**，以便可以存储整数值

**2.** 将脚本中的值 **2** 替换为这个新变量的名称。

Mark step as complete

## 4.  检查你的脚本更改

Q&A (0)

对照以下答案检查你的变量声明：

```csharp
int radius = 5;
```

分配给 **spawnPosition** 的每条指令现在应该与以下示例匹配：

```csharp
spawnPosition = transform.position + direction * radius;
```

Mark step as complete

## 5. 保存并测试你的更改

Q&A (0)

现在，你可以在游戏开始时测试你的更改：

**1.**在代码编辑器中按 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 保存你对脚本的更改。

**2.** 在 Unity 编辑器中，单击 **Play** 以进入运行模式。

**3.**游戏开始时，检查现在药水生成位置的距离。你应该会看到每个药水都在距离 PotionSpawner 更远的位置创建：

[Image: image]

**4.**完成对更改的检查后，再次单击 **Play** 以退出运行模式。记住，在此模式下所做的更改将不会保存。

现在，如果要更改药水生成距离，只需更改 radius 变量中存储的值即可！

Mark step as complete

## 6.  教程总结

Q&A (0)

在本教程中，你已经：

- 识别脚本中的特定指令
- 运用你自己的知识并使用其他资源来明确指令的含义
- 声明新的变量并向变量赋值
- 在脚本中将值替换为变量

在下一个教程中，你将学习如何使用函数来提高效率并避免在脚本中重复代码。

如果你觉得这个项目很难，请记住，编码是一个不断学习的过程。游戏从业人员通常都会使用你在本教程中所用的相同演绎和研究技巧来分解那些更有经验的程序员所编写的代码，让他们能够学习经验并实现最佳的玩家体验。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
