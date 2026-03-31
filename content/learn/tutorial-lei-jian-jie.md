[Image: image]

# 类简介

Tutorial

Beginner

+0XP

25 mins

3

(198)

Unity Technologies

[Image: 类简介]Summary

在本教程中，你将：

- 了解**类**在代码组织方面的作用
- 了解如何使用点运算符来访问不同位置的数据（例如，其他变量内的变量）
- 查看 SpawnerSample 脚本中的点运算符用法的示例
- 了解如何将类用作类型

完成后，你就可以为 SpawnerSample 脚本编写你自己的类。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 你目前为止的学习进度

Q&A (0)

在这些“创作者套件：初学者代码”教程中，从了解简单容器（称为变量）到使用指令集（分组为函数），你已循序渐进地学习了相关知识。现在，你几乎已知晓了识别脚本文件和代码中的关键信息所需的一切知识。

如果打开本项目中的任何脚本文件，你应该能够识别脚本的以下部分：

- 脚本作者的注释
- 指令
- 变量声明和赋值
- 函数

你可能无法准确分辨每个特定指令的作用，但是可通过函数和变量的名称来进行合理猜测。继续在 Project 窗口中打开另一个脚本文件，先试试看，然后再进行下一步！

Mark step as complete

## 2.  识别函数的上一级

Q&A (0)

在上一步打开的新脚本中，你可能已经注意到函数的上一级信息。

函数以一对花括号括起来。但是，如果返回到 **SpawnerSample** 脚本，你会发现另一组将两个函数括起来的花括号。

第一个左花括号上方的代码行是一条声明：

```csharp
public class SpawnerSample : MonoBehaviour
```

这条声明被称为类声明，通过关键字 **class** 可以看出来。

你现在可以先忽略其余内容，只需注意这个关键字和名称即可：

```csharp
class SpawnerSample
```

Mark step as complete

## 3.  什么是类？

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

函数用于将指令分组到一起。同样，类可以将相关的函数和变量分组到一起。

你可以将类视为包含相关内容（例如变量木箱和函数木桶）的不同马车。就像马车能够以编组的车队形式一起行驶，类也可以在精心组织的脚本中协同运行。

[Image: image]

在 SpawnerSample 脚本中，第 7 行之后花括号内的所有内容都位于名为****SpawnerSample 的类的作用域内。

通过将函数和变量分组到一起，你可以高效地组织你的代码。

Mark step as complete

## 4. 使用点运算符来访问变量

Q&A (0)

与你在这些教程中已经探讨的其他组织级别相比，类要稍微复杂一些：一个类可以按层次结构包含不同的函数和变量，你可以创建包含其他变量的变量。

使用句点或句号（称为点运算符）可以访问层次结构中的不同变量。

只要你知道变量所在的位置并能够该变量，就可以使用点运算符在脚本中查找该变量的值。

Mark step as complete

## 5. 点运算符的示例

Q&A (0)

让我们来看看你所使用的 SpawnerSample 脚本中的一些点运算符示例：

**1.**有一些代码可读取 **transform** 变量中的 **position** 变量：

```csharp
transform.position
```

有时可以在其他变量内部创建变量，这时，“容器”变量也是一个类。在上述示例中，**position** 是 **transform** 类内部的一个 Vector3 变量。

**2.**有一些代码可读取 **Vector3** 类型内部的 **right** 变量：

```csharp
Vector3.right
```

**3.** 有一些代码还可读取 **Quaternion** 类型内部的 **Euler** 函数：

```csharp
Quaternion.Euler(0, angle, 0)
```

你还不知道所有这些代码的作用，但可以利用点运算符的知识来获取更多信息，从而进一步了解脚本所用的数据。

#### 使用点运算符

使用点运算符时，正确的语法（代码的结构）非常重要：

- 首先，点的左侧是包含你需要访问的变量的变量
- 中间是点运算符
- 右侧是第一个变量内包含的变量

Mark step as complete

## 6.  将类用作类型

Q&A (0)

最后，让我们来探索如何将类用作类型。

根据目前为止已学习的内容，要创建一个新的 int 变量，可以使用以下指令来进行声明和赋值：

```csharp
int angle = 15;
```

但是，数字是一种“基本”类型。对于更复杂的类（例如，Vector3），语法（结构）需要有所改变。

如果要创建一个名为 myVector 的 Vector3 变量，需要使用以下语法：

```csharp
Vector3 myVector = new Vector3();
```

让我们对该语法进行分解：

**1.** 关键字 **new**。此关键字告诉编译器在内存中创建新的变量空间

**2.** 变量的类型

**3.**左括号和右括号，类似于函数：**()**

**4.**用于表示指令结束的分号

完成后，即可像其他任何变量一样使用 **myVector**。仅在希望创建新的 Vector3 变量时，才需要使用这个新语法！

SpawnerSample 脚本中有一个已赋值的 Vector3 变量。根据你对 Vector3 变量的了解，你是否可以识别出此变量？

Mark step as complete

## 7. 教程总结

Q&A (0)

在本教程中，你已经：

- 了解使用类来组织代码的基础知识
- 探索如何使用点运算符来访问其他变量内的变量
- 了解如何将类用作类型

在下一个教程中，你将编写自己的类，并了解为什么将类用作类型看起来会与函数相似。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
