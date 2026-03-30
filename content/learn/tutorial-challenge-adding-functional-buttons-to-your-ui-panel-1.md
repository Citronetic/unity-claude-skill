[Image: image]

# Challenge — Adding Functional Buttons to your UI Panel

Tutorial

Beginner

+10XP

30 mins

0

(9)

Unity Technologies

[Image: Challenge — Adding Functional Buttons to your UI Panel]Summary

In this challenge, you will be building out a fully functional UI panel.

Resources

- [Tutorial21_UIChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200408/0594c4df-7482-4e4d-85db-4b8b712002a3/Tutorial21_UIChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952224996)

Languages available:

EnglishEnglishEnglish

## 1. Interactive UI Menus

Q&A (0)

The previous tutorial was an introduction to interactable UIs using the different Interaction components. Now we will practice what we learned in this challenge.

By the end of the challenge, you will be able to use these scripts in your own projects and build out a fully functional UI panel.

[Image: image]

In this challenge, you will build an interactive UI panel prototype that controls Scene objects. To do so, you will:

1. Create a UI Canvas
2. Make the UI menu’s background
3. Add on/off buttons
4. Hook the buttons up to the Cargo GameObject
5. Add a toggle****to turn the lights on and off
6. Add a slider****to control the sun’s rotation speed

Mark step as complete

## 2. Create a UI Canvas

Q&A (0)

*Create a new Canvas to house your interactable UI objects.*

[Image: image]

1. Create a **Canvas**.
2. Change the **Render Mode**to **World Space**.
3. Adjust the width, height, and scale of the Canvas.

--------------------

**Tip — Best Practices for Adjusting Resolution/Scale**

Remember that the width and height of the Canvas is equivalent to setting resolution, and the scale is used to set the size of the Canvas.

[Image: image]

**Explore — Review the Scene's Assets**

Open up the Scene and notice the different GameObjects that we will turn on and off: the light tower and cargo items.

Mark step as complete

## 3. Make the UI Menu’s Background

Q&A (0)

*Add a Panel GameObject to your Canvas so the menu has a background.*

[Image: image]

In the Hierarchy, right-click the Canvas and add a **Panel**(**UI**> **Panel**) as a child.

Mark step as complete

## 4. Add On/Off Buttons

Q&A (0)

*Add the buttons to the Canvas so we can turn the cargo on and off.*

[Image: image]

1. Create the **Cargo On** and **Cargo Off** buttons to turn the Cargo GameObjects on and off. (**Note:** Turning them on and off really just means making the cargo appear and disappear by pressing the buttons, making visibility of the entire Scene easier.)
2. Change each button's text to represent its functionality: **Cargo On** and **Cargo Off**.
3. Reposition the buttons so both are visible and in the middle of the panel.

**Tip — Renaming GameObjects**

It's best practice to rename them as you go.

Mark step as complete

## 5. Hook the Buttons Up to the Cargo GameObject

Q&A (0)

*Set the Cargo GameObject as the two buttons’ reference so we can activate and deactivate the cargo in the Scene.*

[Image: image]

1. Add a new event to the **CargoOnButton** and drag in the **Cargo** **Asset** from the Hierarchy as the reference.
2. Select the **SetActive**method on the **GameObject**. This will turn the Cargo GameObject on when this button is clicked. (**Note**: Make sure the checkbox is checked. See the image below for reference.)
3. Repeat these steps for **CargoOnButton**, but leave the checkbox unchecked so the button turns the Cargo GameObject off when the button is pressed.

[Image: image]Mark step as complete

## 6. Add a Toggle as a Light On/Off Switch

Q&A (0)

*Add the Toggle GameObject to the menu so we can turn the lights on and off.*

[Image: image]

1. Add a **Toggle GameObject** to the Canvas (**Create**> **UI** > **Toggle**) to control the Spot Light in the Scene. Rename it **LightToggle**.
2. Reposition and scale the toggle to make it a similar size to the other UI elements (see the image below).
3. Change **Label**’s text to **Lights**.
4. Link the **Toggle**button to the **Spotlight GameObject** to give it functionality by adding a new event and dragging in the **Lights GameObject** (**Light Tower 2 > Lights**) into the event field.
5. Select the **SetActive**method. (**Note**: Be sure to select the Dynamic Method and not the Static Method — this allows the light to be toggled on and off versus just on.)
6. Turn off the Directional Light to better see the light tower in action.

Mark step as complete

## 7. Configure the Sun to Rotation

Q&A (0)

*Add the Day_Night script component to the Directional Light so we can adjust the Scene’s sun position and view the Scene at different times of the day.*

[Image: image]

1. In the Hierarchy, select the **Directional Light**.
2. In the Light’s Inspector, add the **NightandDay**script component so we can modify the Directional Light’s**Rotation.

**What is the NightandDay Script?**

The **NightandDay script** controls its parent object’s rotation. In this challenge, we assign the script to the Directional Light so we can simulate the sun's movement throughout the day.

The NightandDay script has two parameters: **Speed** and **Slider**. The Speed parameter controls how fast the Directional Light rotates, simulating the rotating sun. The Slider is our control mechanism to update this value at runtime. As we will see in the next step, we configure the slider so that its value updates the Speed value.

Mark step as complete

## 8. Add a Slider to the Menu

Q&A (0)

*Add a Slider GameObject to the UI menu so we can adjust the sun’s rotation, simulating different times of day.*

[Image: image]

**1.** Create a **Slider**under the Canvas (**UI**> **Slider**) and change the Slider name to **DayNightSlider**.

**2.** Change the size so that it's visible and position it underneath the Toggle.

**3.** Now give the Slider functionality by adding a new event to the **On Value Changed (Single)** event in the Inspector so we can assign the logic reference in the next step.

[Image: image]

**4.** Select the **ChangeRotationSpeed** method from the **DayAndNight.cs**script. Remember, this is how we access the script’s logic.

**5.** Adjust the **Min** and **Max** values to set the sun's speed across the sky. We chose **25** and **-25**.

[Image: image]

**6.** Select the **Directional Light**. In its Inspector and drag the **DayNightSlider**into the **Slider** parameter.

[Image: image]

--------------------

**Explore — Min and Max Values**

You can change **Min and Max Values**in the Slider component to adjust the maximum speed that the sun will travel across the sky. You can choose any value you would like. We thought -25 and 25 worked well.

25 will maximize the sun’s clockwise movement across the sky. In other words, it will maximize the speed of the rotation between day and night.

-25 will cause the sun to move in the opposite direction.

Mark step as complete

## 9. Key Takeaways

Q&A (0)

That’s it! You’ve finished making your UI panel. Go ahead and deploy it to your Oculus Go and give it a try.

By completing this module, you’re now able to:

1. Create a UI menu with interactable functionality

2. Control Scene objects with the UI menu

Mark step as complete

## Complete this Tutorial

Mark all steps complete
