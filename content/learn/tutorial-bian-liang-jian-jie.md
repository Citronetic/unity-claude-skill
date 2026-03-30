[Image: image]

# 变量简介

Tutorial

Beginner

+0XP

10 mins

6

(339)

Unity Technologies

[Image: 变量简介]Summary

在本教程中，你将：

- 了解什么是变量以及变量的作用
- 识别脚本中的变量
- 确定赋予变量的值
- 练习阅读脚本中的指令

完成后，你就可以创建自己的变量了。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 使用“创作者套件：初学者代码”脚本

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

在本教程中，你将识别 **SpawnerSample** 脚本中的具体指令。

注意：

- 你可能无法立即理解脚本中的所有内容。
- 在文件中查找信息可能需要一点时间。

这是完全正常的情况。在此创作者套件中，你将学习如何处理不熟悉的脚本并识别关键元素，不需要理解游戏具体脚本中的所有内容。

Mark step as complete

## 2. 在脚本中查找一条指令

Q&A (0)

在代码编辑器中，找到脚本的**第 10 行**：

```csharp
int angle = 15;
```

编程的基本构建块是**指令**。一条指令是你交给计算机的一个任务。

指令以分号 (**;**) 结尾。这个符号告诉编译器该指令已结束并且计算机应立即完成该指令。编译器不会感知行尾；对于编译器而言，分号就是一条指令的结束符。但是，人类也需要能够阅读 C# 代码。因此，为了提高可读性，最好将每条指令放在单独的一行。

在进行下一步之前，请考虑：

- 此脚本在游戏中的用途
- “angle”一词

这条指令可以要求计算机执行什么操作？

Mark step as complete

## 3. 变量简介

Q&A (0)

**int angle = 15;** 指令声明并分配一个变量。

**变量**是一个用于存储值的容器。你可以将变量视为写有名称的木箱，你可以在其中存储以后要检索的信息。顾名思义，存储在变量中的信息会改变（或变化）。

你需要先通过指定变量的名称和类型来声明变量，然后才可以使用变量。也可以为变量分配初始值。

下图中向名为“gems”的变量（木箱）赋予了值 2。

[Image: image]Mark step as complete

## 4. 确定变量的类型和名称

Q&A (0)

在声明（或创建）变量时需要确定两个事项：

**1.**需要存储的信息的**类型**。变量类型会告诉计算机要在内存中留出多少空间来存储信息。所有变量都需要具有类型。

这个示例是一个 **int** 变量。这类变量将存储整数。

**2.**变量的**名称**。每次你希望计算机检索变量的值时都将使用变量的名称。

这个示例中的变量名称为 **angle**。

Mark step as complete

## 5.  确定赋予变量的值

Q&A (0)

可以使用等号 (**=**) 为变量赋值。这意味着将等号右侧的值复制到左侧的变量中。

**int angle = 15;** 告诉计算机将整数值 **15** 存储在名为 angle 的变量中。

每次在代码中使用 **angle** 变量时，计算机都会替换为该整数值。

Mark step as complete

## 6. 确定在哪里为变量赋予新值

Q&A (0)

在 SpawnerSample 脚本中，找到接下来的**两**行，在这里向 int 变量 **angle** 赋予了一个不同的值。

在每行中，与第一次向变量赋值有什么不同？

Mark step as complete

## 7. 查看这两条指令

Q&A (0)

在 SpawnerSample 脚本的第 **17** 和 **22** 行中，向 angle 变量赋予了不同的值。

与第一次向 **angle** 赋值不同，这次未包含变量类型。这是因为计算机已经知道该变量的存在以及所需的内存空间量。

由于脚本中的指令是按顺序执行的（一次完成一条指令），因此更改后的变量值仅在赋值后才会用在指令中。

在下图中，现在向示例变量 gems 赋予了值 4。

[Image: image]Mark step as complete

## 8. 教程总结

Q&A (0)

在本教程中，你已学习：

- 脚本由指令组成
- 变量是代码中的值的容器
- 如何声明变量以及向变量赋值
- 一个变量在同一脚本中可以具有不同的赋值，因为计算机按顺序执行指令

在下一个教程中，你将运用所学知识，编写一条指令来声明新变量并向变量赋值。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
