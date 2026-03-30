[Image: image]

# Configure your visual script with variables

Tutorial

Beginner

+10XP

20 mins

32

(3070)

Unity Technologies

[Image: Configure your visual script with variables]Summary

Variables are essential programming tools. With them, you can store, calculate, and manipulate the input values to the units of your scripts.

In this tutorial, you’ll learn how to use Visual Scripting to create and manage several kinds of variables that have different scopes and uses. By the end of this tutorial, you’ll be able to:

- Create Graph, Object, and Scene variables and explain their uses
- Add Get Variable units to a Graph using the Blackboard
- Make variables available to be changed in the Inspector window
- Troubleshoot adjusting variable values in Scene and Game views
- Explain the Scene Variables object that appears in the Hierarchy of projects with Visual Scripts

Languages available:

EnglishEnglish日本語한국어English

## 1. Overview

Q&A (0)

**Variables**are values that can, well, vary. Instead of coding inline values directly into your script as you did in the previous tutorial, you can represent them with names and manipulate their values in the script.

**Note to experienced C# scripters:** Visual Scripting gives you new and different ways to manage variables. Please follow this tutorial to learn how.

Mark step as complete

## 2. Create a variable in the Blackboard

Q&A (0)

The Blackboard is the place to organize several types of variables. For this tutorial, we will only use variables that pertain to this Graph, your cube GameObject, and this Scene. However, variables can also apply to your entire project.

We’ll start with **Graph variables**, which only pertain to the Graph in which they are defined.

**Note to C# scripters:**Graph variables are the same as private variables in a C# script. However, Visual Scripting gives you flexibility for experimenting with Graph variable values that you don’t have with C# code.

Let’s create a Graph variable:

**1.**Change all three values In the Transform:Rotate unit back to 0.

**2.**In the Blackboard, select the **Graph**tab.

**3.**Where you see the prompt **(New Variable Name)**, enter XRotate, then select the **+** button. New fields for **Type**and **Value**will appear.

**4.**For **Type**, select**Float**(a floating-point number, also known as a decimal number).

**5.**For **Value**, enter**1**.

**6.**Find the double-bar symbol on the left side of the definition of XRotate. Drag that symbol into your graph. You’ll create a Get Variable unit with the “Graph” kind of variable selected.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**7.**Connect the output of the new unit to the **X Angle** input of the Transform:Rotate unit. The inline value on the Transform:Rotate unit will disappear, because that value is now coming from the Get Variable Unit.

[Image: image]

**Tip:** Another way to add the Get Variable unit is to make the connection **from** the **X Angle** input to no other unit (empty space). When you let go of the mouse button, the Fuzzy Finder appears showing a subset of units that are appropriate to the given context.

Mark step as complete

## 3. Object types

Q&A (0)

This is a good time to discuss **object types**. When you create a variable, you are prompted to specify the **Type**from this dropdown list:

[Image: image]

The object types that you are likely to use frequently are:

- Float: A decimal number, such as 23.456 or -0.9
- Integer: A whole number, such as 23 or -1
- Boolean: True or False
- String: A series of alphanumeric characters, such as “hello, world!”
- Vector3: a set of three floats, X, Y, and Z, which are useful when working in 3D space
- Vector2: a set of two floats, X and Y, for working in 2D space
- GameObject: An object in your Scene

The icons shown in the dropdown above are a shorthand for the object type. units that require inputs, such as Transform:Rotate, specify the expected object type with the indicators shown in the menu above.

Generally, it is important to provide the correct object type. For example, if a unit is looking for either True or False, and you provide a number, you might get an error or an unexpected result.

However, Visual Scripting is not as strict about object types as some other scripting languages. Notice that Floats and Integers both use a blue dot. In Visual Scripting, these types are interchangeable. In most other programming languages, trying to use them interchangeably would cause errors.

Wherever you see a green dot, Visual Scripting will accept more than one data type and make any conversions for you, if possible.

[A more comprehensive list and description of object types is in the Unity Manual.](https://www.google.com/url?q=https://docs.unity3d.com/Packages/com.unity.visualscripting@1.5/manual/vs-object-types.html&sa=D&source=editors&ust=1615469139963000&usg=AOvVaw2w2AlBehJNrrh3csT65U9a) To identify other object types you might encounter in Visual Scripting, use the Graph Inspector.

Mark step as complete

## 4. Manipulate a Graph variable

Q&A (0)

Next, we’ll see how the new variable works, and what happens when we change its value.

**1.**Select the **Play** button and watch your cube rotate in the X dimension.

**2.**In the menu at the top of the Graph window, enable the **Values**button. You’ll see the object type indicator and variable value appear on the connector.

[Image: image]

**3.**In the Blackboard, change the **XRotate**value to **3** and notice the changes. The connector will display a 3, and the cube will spin faster.

**4.**Exit Play mode. The value of **XRotate**will revert back to **1**, because 1 was the last default value you entered before starting Play mode. Variable values revert to their defaults when they are changed in Play mode — only inline values that are changed in Play mode are saved.

Graph variables are useful when you need to manipulate a value within one Graph. They can’t be accessed from any other Graph, the way other kinds of variables can. Later in this project, you will add more complexity to this Graph and see how useful Graph variables can be.

Mark step as complete

## 5. Create an Object variable

Q&A (0)

Imagine you are creating this script for an artist on your team. You want the artist to be able to control the cube’s rotation without having to edit this script. With Object variables, the artist can change values from the Inspector. **Object variables** are connected to the GameObject, and can be changed in the Inspector when the GameObject is selected.

**Note to C# scripters:**Object variables are the same as public variables in a C# component script.

Let’s create an Object variable.

**1.**In the Blackboard, select the **Object**tab.

**2.**Where you see the prompt **(New Variable Name)**, enter YRotate, then select the **+** button. New fields for **Type**and **Value**will appear.

**3.**For **Type**, select Float (a floating-point number, also known as a decimal number).

**4.**For **Value**, enter 1.

**5.**Find the double-bar symbol on the left side of the definition of YRotate. Drag that symbol into your graph. You’ll create a Get Variable unit with the “Object” kind of variable selected. Like the Transform:Rotate unit, this unit also acts on “Self,” which refers to any GameObject this script is connected to.

**6.**Connect the output of the new unit to the **Y Angle** input of the Transform:Rotate unit.

[Image: image]Mark step as complete

## 6. Manipulate an Object variable

Q&A (0)

As we did for the Graph variable, let’s change the Object variable’s value and see what happens.

**1.**In Scene view, select your cube and look at the Inspector window. Look for a section titled **Variables**.

**2.**While in Scene view, change the value of **YRotate**to **3** in the Inspector. Notice that the value has also changed in the Blackboard (Object tab). The Blackboard and Inspector displays of this value are always the same.

**3.**Select the Play button and watch your cube rotate.

**4.**While in Play mode, in the Inspector, change the **YRotate** value back to **1** and notice the changes in the Scene view and the Blackboard.

**5.**Exit Play mode. The value of **YRotate**will revert back to **3**, because 3 was the last default value you entered before starting Play mode.

**6.**Save (Ctrl / Cmd S).

The values of Object variables are changeable in Scene view and in Game view, but the values made in Scene view remain, and any changes made in Game view are lost.

It is important to remember that Object variables “belong” to a GameObject, not to a Graph.

Mark step as complete

## 7. One Graph, two GameObjects

Q&A (0)

Let’s bring it all together and take a closer look at how variables behave when scripts are used on multiple GameObjects.

**1.**In your Graph, set the values as follows:

- In the Blackboard’s **Graph**tab, set XRotate to 0.
- In the Blackboard’s **Object**tab, set YRotate to 0.
- In the Transform:Rotate unit of your Graph, set **Z Angle**to **3**.

**2.**Duplicate your cube. Position the new cube in front of the Main Camera so that you can see both of them in Play mode.

**3.**To tell the two cubes apart, use the Materials that come with the sample Scene to give them different colors. Here, we have used Plastic_Yellow_Mat for the original cube, and Plastic_WhiteMat for the new cube (in the **Assets**> **ExampleAssets**> **Materials**folder). We renamed them Cube1 and Cube2, respectively.

[Image: image]

**4.**Notice that both cube GameObjects now use the same Graph titled Rotate. Both GameObjects also have the YRotate variable.

**5.**Change the value of **YRotate**in one of the cubes (but not both).

**6.**Enter Play mode. Watch your Graph as you select one cube, and then the other. You’ll see that it’s the same graph, but there are different values on the connector to the Y Angle, because each GameObject has its own YRotate variable. (Enable the **Values**button if you don’t see symbols and numbers on the connectors.) Experiment with **YRotate**in the Inspector or **Object**tab of the Blackboard.

**7.**In Play mode, experiment with the values of **XRotate**in the **Graph**tab of the Blackboard. Why can each cube have a different XRotate value? Because there are separate **instances**of the Graph running for each GameObject.

**8.**When you exit Play mode, all values will revert back to their defaults except Z Angle, if you changed it, which is hard-coded into your Graph.

The purpose of this exercise is to demonstrate how you can experiment with variable values, and to explain why you get certain results.

- Graph variables belong to the Graph. In the Blackboard, you set a default value. In Play mode, separate instances are running when you Play the project, and you can temporarily change that default value of the Graph variable separately for each GameObject.
- Object variables belong to the GameObject. You can set a different default value for each GameObject in Scene view, and temporarily change these values in Play mode.

Mark step as complete

## 8. Experiment with variables

Q&A (0)

Work through these exercises on your own to test your knowledge of variables in Visual Scripting.

#### Delete the YRotate variable for one cube

In the Inspector (not the Blackboard), delete the YRotate variable for one of the cubes. Try playing the project and look at the Graph. What is happening?

You should see red on the heading of the Get Variable unit to indicate an error. Consult the Graph Inspector for more information. You can redefine the variable to fix the error.

#### Create a Scene Variable for the Z Angle value

The process for creating a **Scene variable** is the same as for other variables, using the Scene tab of the Blackboard. Create a Scene variable to control the Z Angle property in your Graph. As you might have guessed, Scene variables belong to the Scene.

To change the value of the Scene variable, select the object in the Hierarchy named **Scene Variables**, and change the value in the Inspector.

- What happens when you change this value in Scene view, and in Play mode?
- What happens if you use this variable in a new graph for a new GameObject?

Mark step as complete

## 9. What’s next?

Q&A (0)

**If you are new to programming** or you want to review some basics, please continue with the next tutorial in this project. You’ll add units to control the flow of your script with branching. You’ll also make mathematical calculations and measure time. You’ll detect user input from the computer keyboard. Along the way, you’ll get new ideas about how to use Visual Scripting in your Unity projects. Then, you’ll be ready to complete our challenge and continue on to Clive the Cat’s Visual Crypting, where you will build scripts in a working game.

**If you are experienced in programming,** then you now have a good introduction to the Visual Scripting user interface and the scopes of variables. All you need now is more practice and familiarity with the many units at your disposal, which represent all the usual programming constructs (branching, looping, and so forth) and the Unity Scripting API. [Feel free to jump ahead to the challenge at the end of this project.](https://learn.unity.com/tutorial/challenge-control-your-character-with-visual-scripting) (We’ll provide tips to help you find the units you’ll need.) Afterwards, you will learn more advanced concepts, such as Super units, Events, and States, in Clive the Cat’s Visual Crypting.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
