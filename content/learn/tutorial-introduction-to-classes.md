[Image: image]

# Introduction to classes

Tutorial

Beginner

+10XP

25 mins

2

(141)

Unity Technologies

[Image: Introduction to classes]Summary

In this tutorial, you’ll:

- Learn about the role of **classes** in organising code
- Learn about accessing data in different places using the dot operator (for example, variables inside other variables)
- Review examples of dot operator use in the SpawnerSample script
- Review the use of class as a type

When you’ve finished, you’ll be ready to write your own class for the SpawnerSample script.

Languages available:

EnglishEnglish日本語한국어简体中文English

## 1. Your progress so far

Q&A (0)

In these Creator Kit: Beginner Code tutorials, you’ve worked your way up from learning about simple containers called variables to using sets of instructions grouped as functions. You now know nearly everything you need to be able to identify key information in script files and code.

If you open any script file in this Project, you should be able to identify the following parts of the script:

- Comments from the person who wrote the script
- Instructions
- Variable declaration and assignment
- Functions

You may not be able to tell exactly what each specific instruction does, but you can use the names of functions and variables to make a reasonable guess. Go on — open another script file from in the Project window and give it a try before you continue to the next step!

Mark step as complete

## 2.  Identify the level above functions

Q&A (0)

In the new script you opened in the previous step, you may have noticed a level of information **above functions**.

Functions are enclosed in a pair of curly braces. However, if you return to the **SpawnerSample**script, you’ll find another set of curly braces enclosing the two functions.

On the line above the first opening curly brace is a declaration:

```csharp
public class SpawnerSample : MonoBehaviour
```

This is called a **class**declaration, and it’s identified using the keyword "class**"**.

You can ignore everything but that keyword and the name for now:

```csharp
class SpawnerSample
```

Mark step as complete

## 3.  What is a class?

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Functions enable you to group instructions together. In a similar way, a **class** enables you to group together **related functions and variables**.

You can think of classes as different wagons which contain related contents (like variable trunks and function barrels). Just as wagons can travel together as an organised wagon train, classes can work together in organised scripts.

[Image: image]

In the SpawnerSample script, everything inside the curly braces after line 5 is within the**scope** of a class called **SpawnerSample**.

Grouping functions and variables together enables you to efficiently organize your code.

Mark step as complete

## 4. Using the dot operator to access variables

Q&A (0)

Classes are a little more complicated than the other levels of organization you’ve explored already in these tutorials — they can contain a hierarchy of different functions and variables in a class, you can create variables which contain other variables.

You can access different variables in the hierarchy using a period or full stop; this is called a **dot operator**.

As long as you know where a variable is contained and have access to it, you can look up its value in a script using the dot operator.

Mark step as complete

## 5. Examples of the dot operator

Q&A (0)

Let’s look at some dot operator examples from the SpawnerSample script you’ve been working on:

**1.**  There’s code to read the variable **position** within the variable **transform**:

```csharp
transform.position
```

Sometimes variables can be created inside other variables, when the ”container variable” is also a class. In the example above, **position** is a Vector3 variable within the **transform** class.

**2.**  There’s code to read the variable **right** within the type **Vector3**:

```csharp
Vector3.right
```

**3.** There’s also code to read the function **Euler** within the type **Quaternion**:

```csharp
Quaternion.Euler(0, angle, 0)
```

You don’t know what all of this code does, but you can use your knowledge of dot operators to gather more information and develop an understanding of the data used by a script.

#### Using the dot operator

When you use the dot operator, correct syntax (the structure of your code) is very important:

- First, to the left of the dot, is the variable which contains the variable you need to access
- In the middle is the dot operator
- On the right is the variable contained inside the first variable

Mark step as complete

## 6.  Using class as a type

Q&A (0)

Finally, let’s explore how to **use a class as a type**.

So far, you’ve seen that to create a new **int** variable you can declare and assign it with the following instruction:

```csharp
int angle = 15;
```

But a number is a “basic” type. For a more complex class, such as Vector3, the syntax (structure of the declaration) needs to be a little different.

If you want to create a Vector3 variable called myVector, you need to use the following syntax:

```csharp
Vector3 myVector = new Vector3();
```

Let’s break this syntax down:

**1.** The keyword **new**, which tells the compiler to create a new variable space in memory

**2.** The **type** of the variable

**3.**  Open and closed parentheses, like a function: **()**

**4.**  A semicolon to end the instruction

Once this is done, **myVector** can be used like any other variable. It’s only when you want to create a new Vector3 variable that you need to use that new syntax!

There’s a Vector3 variable in the SpawnerSample script, with values assigned — using what you know about Vector3 variables, can you identify it?

Mark step as complete

## 7. Tutorial summary

Q&A (0)

In this tutorial, you have:

- Reviewed the fundamentals of using **class** to organize code
- Explored the use of the dot operator to access variables inside other variables
- Reviewed how to use class as a **type**

In the next tutorial, you’ll write your own class and find out why using class as a type looks similar to a function.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
