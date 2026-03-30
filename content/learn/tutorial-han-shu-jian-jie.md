[Image: image]

# 函数简介

Tutorial

Beginner

+0XP

30 mins

3

(244)

Unity Technologies

[Image: 函数简介]Summary

在本教程中，你将：

- 编写代码，从而在游戏开始时创建另一个生命值药水
- 了解函数及其在代码中的作用
- 识别 SpawnerSample 脚本中已存在的函数

完成后，你就可以编写自己的函数了。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1.  挑战：在游戏开始时创建另一个药水

Q&A (0)

在前一教程中，你调整了 SpawnerSample 脚本，从而便于调整为驼鹿生成三个生命值药水的距离。

接下来，你面临一个挑战：是否可以使用已有的代码来确定如何在比其他三个药水更远的位置生成第四个药水？

请使用以下流程来完成任务：

**1.**在 Unity 编辑器中，导航到 Project 窗口，然后选择 *Assets/Creator Kit - Beginner Code/Scripts/Tutorial* 文件路径中的 **SpawnerSample** 脚本。

**2.**在 Inspector 中，单击 **Save State** 按钮。该操作将保存脚本的当前版本，以防你不想保留所做的更改。

[Image: image]

如果需要，可以随时返回到 Inspector，并选择 **Restore** 按钮将脚本恢复到前一版本。

[Image: image]

**3.** 修改脚本，从而在游戏开始时创建**四个**药水。不用担心造成任何破坏，你的文件是复制的，因此可以随时恢复脚本的先前状态。

**提示：**请思考新药水瓶的位置。是否可以调整指令来使接近药水的位置保持一致？

**4.**通过 **Ctrl + S** (Windows) 或 **Cmd + S** (macOS) 来保存更改，然后返回到 Unity 编辑器并在运行模式下测试你的更改。

**5.**完成对更改的检查后，再次单击 Play 以退出运行模式。

继续下一步以查看答案。

Mark step as complete

## 2. 查看挑战问题的答案

Q&A (0)

要在游戏开始时创建新药水，请执行以下操作：

**1.** 复制并粘贴以下四行指令，这些指令告诉计算机在游戏开始时创建新药水（总共要创建四组代码）：

```csharp
angle = 95;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

**2.** 调整第四组代码中的 angle 值以更改新药水的位置：

```csharp
// 生成时创建的第四个药水
angle = 135;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

在上述版本中，你会发现有一条以双斜杠 (**//**) 开头的代码描述。这是一条注释。

注释是脚本作者留给读者的信息；编译器会忽略以双斜杠开头的所有内容。你可以使用注释向他人解释你的代码，或为你自己编写备注和提醒。

**3.**对游戏进行测试时，效果应该如下所示（取决于在第四组代码中添加的确切 angle 值）：

[Image: image]

不过，这并不是非常高效的代码编写方式。例如，如果想在游戏开始时创建十个药水，那么最终将得到一个包含大量重复内容的冗长脚本。要是有更好的方法就好了……

Mark step as complete

## 3. 函数简介

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 简体中文

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

幸运的是，有一种方法可以帮助你避免编写大量重复的代码：函数。

函数就是指令集。编译器在访问函数时会告诉计算机先完成（或执行）该指令集内的所有指令，然后再继续执行脚本的其余部分。

在以下示例中，计算机需要先执行函数 (2)，然后才能完成脚本中的其余顺序指令。

[Image: image]

让我们先来看看一个示例函数：

```csharp
void AddingNumbers(float num1, float num2)
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

Mark step as complete

## 4. 查看函数声明

Q&A (0)

为了明确此函数的作用，我们先来分解第一行：

```csharp
void AddingNumbers(float num1, float num2)
```

这是一个函数声明，指示计算机创建一个函数。这一点类似于变量声明。函数声明始终包含以下元素：

**1.**函数的**类型**。**void** 是一种特殊类型，表示“无类型”或“为空”（因为不会存储在任何位置）。调用 int 函数时，该函数将返回一个整数值；void 类型变量不会返回任何值。

**2.**函数的**名称**。每次你希望计算机执行函数中的指令时都将使用该函数的名称。此示例中的函数名称为 **AddingNumbers**。

**3.**括号之间的变量声明。这些也称为**参数**。你可以根据需要包含任意数量的参数（以逗号分隔）。即使函数不带任何变量，也必须加括号。

此示例中的变量为浮点型变量。浮点变量是小数，不同于 int 变量（表示整数）。浮点变量在小数点的两侧都有数字，可用于提高精度。

将鼠标光标悬停在学位帽图标上可查看另一个浮点变量示例。

Mark step as complete

## 5. 查看函数体

Q&A (0)

在函数声明之后包含以下内容：

1. 左花括号
2. 指令
3. 右花括号

两个花括号之间的所有内容称为函数体：

```csharp
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

函数体包含了在函数名下绑定的指令。计算机在另一条指令中遇到此函数名时，便会执行函数中的这些指令。

你目前无需分解此示例函数中包含的指令。只需记住，这组指令中的每条指令都以分号结尾。

Mark step as complete

## 6. 在脚本中使用函数

Q&A (0)

你现在已探索了函数的工作原理，接下来便可以在你的指令中使用函数了。这个过程称为函数调用。

让我们来探索以下函数调用示例：

```csharp
AddingNumbers(5.5f, 18.9f);
```

函数调用中包含以下元素：

1. 函数名
2. 一组包含两个值的括号
3. 一个分号，用于表示指令结束

函数调用会告诉计算机先执行该函数中包含的所有指令，然后继续按顺序执行脚本。

Mark step as complete

## 7. 调整函数在被调用时的行为

Q&A (0)

你在本教程中查看过的脚本示例声明了两个变量：

```csharp
void AddingNumbers(float num1, float num2)
```

可以像其他任何变量一样在函数体中使用此变量名。也可以在调用函数时为变量赋值，这种做法称为传递值。

让我们来思考一个示例：

- 如果编写 **AddingNumbers(5.5f, 18.9f);** 来调用该函数，计算机会在函数体内将变量 **num1** 替换为 5.5 并将变量 **num2** 替换为 18.9。
- 如果调用的是 **AddingNumbers(10.0f, 10.0f);**，则计算机会针对函数体内的所有指令，将变量名替换为 10.0。

这样一来，你就可以在函数内编写一般性指令，然后每次在脚本中调用函数时调整函数的确切行为。

Mark step as complete

## 8. 识别脚本中已存在的函数

Q&A (0)

现在知道了什么是函数后，你可能已经意识到 SpawnerSample 脚本中已存在一个函数。到目前为止，你已经查看并调整的所有指令都是 **Start** 函数的一部分。

Unity 有一些使用特殊名称并在游戏中特定时刻调用的特定函数。Start 就是这些特殊函数之一。顾名思义，Start 函数是在场景开始时调用的函数，这就是为什么一按下 Play 来启动游戏就会出现四个生命值药水。

让我们来查看 Start 函数声明：

```csharp
void Start()
```

该函数没有参数，但仍然需要括号。如果不加括号，编译器会认为 **void Start** 是在声明一个名为 Start 的变量。

Mark step as complete

## 9. 教程总结

Q&A (0)

在本教程中，你已经：

- 在 Unity 编辑器中保存 SpawnerSample 脚本的状态
- 调整脚本，从而在游戏开始时生成另一个药水
- 了解函数以及如何使用函数来编写更高效的代码
- 查看如何声明和调用函数
- 识别 SpawnerSample 脚本中已存在的函数

呃，内容挺多的！你已经了解了基础知识，在下一个教程中就可以编写你自己的函数来生成药水了。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
