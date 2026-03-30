[Image: image]

# Functions primer

Tutorial

foundational

+0XP

45 mins

0

Unity Technologies

[Image: Functions primer]Summary

This primer introduces you to writing and calling functions.

Click [here](https://docs.google.com/document/d/1SUauj331YldMagQjHicOvS3fZdXcchq7Jg_QpIwCJ3M/copy) to access a Google Doc version of the activities below.

Languages available:

EnglishEnglishEnglish

## Overview Video

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

Optional Step

## 1. Key terms

Q&A (0)

- *Function*- A way of packaging code that does something and returns a value.
- *Parameter*- A way to pass a value or variable references into a function.
- *Return value*- The output a function produces. If there is one, the term return must be called to serve as an indication to terminate execution of the function and return to the code used to call it.
- *Void*- Used to indicate that there is no return value (the function’s output) for a function.

Mark step as complete

## 2. Explore activities

Q&A (0)

*1.  Functions*Functions have a lot of uses and benefits for using them. What are some common functions you see in Unity? Consider why we need custom functions and write down three examples of when a custom function would be necessary.

*2.  The array*Create a script named ArrayTest and open it up. At the top create an array variable: private int[] myArray = new int[] {1, 2, 3};.

Next create a new function:

private void DisplayArray(int[] array)

{

array[0]  = 5;

Debug.Log("This array contains a " + array[0] + ", a " + array[1] + " and a " + array[2]);

}

Call this function in the Start() function by writing DisplayArray(myArray);

After this, write:

Debug.Log("My array contains a " + myArray[0] + ", a " + myArray[1] + " and a " + myArray[2]);

Save and attach this script to a GameObject in your scene.

What results do you get when you hit play? Why?

Mark step as complete

## 3. Deeper dive activities

Q&A (0)

*3. Calling a function*We’ve seen that functions can be called from within different functions. What would happen if we called a function from within itself? Is this allowed? Try it and find out.

Did this cause any problems? What other problems might occur and how might you work around those problems?

*4. Calculator*Functions, like variables, have access modifiers. This means that there are different conditions to call them depending on what access level they have. Let’s try using the public modifier and calling a function from another script. Create a script and name it Calculator.

Open it up and create a function:

public int Add(int a, int b)

{

int sum = a + b;

return sum;

}

Save and go back to Unity. Now create another script called Player. At the top create a reference to a GameObject by typing: public GameObject myCalculator;

In the Start() function let’s call the calculator to do some addition.

Type:

int sum = myCalculator.GetComponent<Calculator>().Add(2, 3);

Debug.log(sum);

Hit save and go into Unity. Create two cubes and attach a Calculator script to one and the Player script to the other. In the Inspector of the one with Player, drag over the one with Calculator.

What do you get when you press play? Why? Explain each line of the code that you wrote.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
