[Image: image]

# Introduction to functions

Tutorial

Beginner

+10XP

30 mins

3

(152)

Unity Technologies

[Image: Introduction to functions]Summary

In this tutorial, you’ll:

- Write code to create another health potion at game start
- Learn about functions and their role in code
- Identify the function that’s in the SpawnerSample script already

When you’ve finished, you’ll be ready to write your own function.

Languages available:

EnglishEnglish日本語한국어简体中文English

## 1.  Challenge: Create another potion at game start

Q&A (0)

In the previous tutorial, you adjusted the SpawnerSample script to make it easy to adjust the distance at which three health potions spawn to help the moose.

Next, a challenge — can you work out how to spawn a fourth potion further away than the other three, using the code that you already have?

Use the following process to complete the task:

**1.**  In Unity Editor, go to the Project Window and select the **SpawnerSample** script at the file path *Assets/Creator Kit - Beginner Code/Scripts/Tutorial*.

**2.**  In the Inspector, click the **Save State** button. This will save a version of the script in its current form, in case you make changes that you don’t want to keep.

[Image: image]

If you need to, you can return to the Inspector at any time and select the **Restore** button to return the script to the previous version.

[Image: image]

**3.** Modify your script to create **four** **potions** at game start. Don’t worry about breaking anything — you’ve copied your file, so you can always recover the previous state of your script.

**TIP:** Think about the position of the new potion bottle. Can you adjust an instruction to make the approach potion positioning **consistent**?

**4.**  Save your changes with **Ctrl + S** (Windows) or **Cmd + S** (macOS), then return to Unity Editor and test your changes in Play Mode.

**5.**  When you’ve finished checking your changes, Click Play again to exit Play Mode.

Continue to the next step to see the solution.

Mark step as complete

## 2. Review the challenge solution

Q&A (0)

To create a new potion at game start:

**1.** Copy and paste the four lines of instructions which tell the computer to create a new potion at game start (to create four sets of the code in total):

```csharp
angle = 95;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

**2.** Adjust the angle value in the fourth set of the code, to alter the position of the new potion:

```csharp
// Fourth potion created at spawn
angle = 135;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

In the version above, you’ll notice that there’s a description of the code preceded by a double forward slash (**//**). This is a **comment**.

Comments are messages from the person writing the script to human readers; the compiler ignores everything preceded by the double forward slash. You can use comments to explain your code to others, or to write notes and reminders for yourself.

**3.**When you test your game, it should look similar to this (depending on the exact angle you added in the fourth set of code):

[Image: image]

This isn’t a very efficient way of writing code, though. If you wanted to create ten potions at game start, for example, you'd end up with a long script with a lot of repetition. If only there were a better way...

Mark step as complete

## 3. Introduction to functions

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Luckily, there is something that can help you avoid writing lots of repetitive code: **functions**.

Functions are sets of instructions. When the compiler reaches a function, it will tell the computer to complete (or execute) all the instructions in that set before continuing with the rest of the script.

In the sample below, the computer needs to execute the function (2) before it can complete the rest of the sequential instructions in the script.

[Image: image]

Let’s start by reviewing a sample function:

```csharp
void AddingNumbers(float num1, float num2)
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

Mark step as complete

## 4. Review the function declaration

Q&A (0)

To work out what this function does, start by breaking down the first line:

```csharp
void AddingNumbers(float num1, float num2)
```

This is a **function declaration**, which instructs the computer to create a function. This is similar to a variable declaration. A function declaration always includes:

**1.**  The **type** of the function. **void** is a special type, which means “no type” or “empty” because it’s not stored anywhere. When you call an int function, it will return an integer value; void type variables don’t return values.

**2.**  The **name** of the function, which you will use every time you want the computer to execute the instructions in the function. The name of this function is **AddingNumbers**.

**3.** **Variable declarations**,****between parentheses. These are called **parameters**. You can include as many parameters as you want, separated by commas. The parentheses are required even if the function takes no variables.

The variables are float type variables. Float variables are fractional numbers, as opposed to int variables (which are integers, or whole numbers). They have numbers on either side of a decimal point, and can be used for increased accuracy.

Hover over the mortarboard icon to review another example of a float variable.

Mark step as complete

## 5. Review the function body

Q&A (0)

After the function declaration, there is:

1. An opening curly brace
2. Instructions
3. A closing curly brace

Everything between those two curly braces is called the function body**:**

```csharp
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

The function body contains the instructions that are bundled under the function name. The computer will execute these instructions when it encounters the function name in another instruction.

You don’t need to break down the instructions included in this example function. Just remember, each single instruction within the group ends with a semicolon.

Mark step as complete

## 6. Using the function in a script

Q&A (0)

Now that you’ve explored how functions work, you can use them in your own instructions. This is known as a **function call**.

Let’s explore the following example function call:

```csharp
AddingNumbers(5.5f, 18.9f);
```

The function call is made up of:

1. The function name
2. A set of parentheses containing two values
3. A semicolon, to mark the end of the instruction

Function calls tell the computer to execute all the instructions contained in the function before continuing to work through the script sequentially.

Mark step as complete

## 7. Adjust the behaviour of your function when it is called

Q&A (0)

The script example you’ve reviewed in this tutorial declares two variables:

```csharp
void AddingNumbers(float num1, float num2)
```

You can use this variable name in the function body like any other variable. You can also assign it a value whenever you call the function — this is called **passing** a value.

Let’s consider an example:

- If you write **AddingNumbers(5.5f, 18.9f);** to call the function, the computer will substitute 5.5 for the variable **num1**and 18.9 for the variable **num2** within the body of your function.
- If you call **AddingNumbers(10.0f, 10.0f);**instead, the computer will substitute the variable names with 10.0 for all instructions in the body of the function.

This enables you to write **generic instructions** inside your function, and adjust its exact behaviour each time it is called in your script.

Mark step as complete

## 8. Identify the function that already exists in your script

Q&A (0)

Now that you know what a function is, you may have realized that there is already a function in the SpawnerSample script. All of the instructions that you have reviewed and adjusted so far are part of a function called **Start**.

Unity has specific functions with special names that are called at specific moments in the game. Start is one of these special functions. As its name implies, the Start function is called when the Scene starts — that’s why the four health potions appear as soon as you press Play to begin the game.

Let’s review the Start function declaration:

```csharp
void Start()
```

This function has no parameters, but it still needs the parentheses ⁠— if these aren’t included, the compiler will think that **void Start** is declaring a variable named Start.

Mark step as complete

## 9. Tutorial summary

Q&A (0)

In this tutorial, you have:

- Saved the state of your SpawnerSample script in Unity Editor
- Adjusted the script to spawn another potion at game start
- Learnt about functions and how they can be used to make code more efficient
- Reviewed how to declare and call a function
- Identified the function that’s in the SpawnerSample script already

Phew, that’s a lot! Now that you’ve explored the fundamentals, you’re ready to write your own function to spawn potions in the next tutorial.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
