[Image: image]

# Challenge — Enhancing Visual Quality with Post-Processing Effects

Tutorial

Beginner

+10XP

30 mins

1

(17)

Unity Technologies

[Image: Challenge — Enhancing Visual Quality with Post-Processing Effects]Summary

In this challenge, you will learn to increase your Scene’s realism with a post-processing stack.

Resources

- [Tutorial25_PPChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200410/24860dea-a863-4477-bf80-902a2bf057a0/Tutorial25_PPChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954840932)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you will learn to increase your Scene’s realism with a post-processing stack.

To do so, you’ll need to:

1. Import the Post-Processing package from the Package Manager.
2. Add the Post-Processing Layer script to your Camera, adjust its Layer to match the Post-Processing (PP) Layer, and add the Post-Processing Volume script to an empty GameObject.
3. Create a Post-Processing Profile (PPP) and add it to the Post-Processing Volume profile.
4. Adjust Layers to match the Camera's Post-Processing Layer.
5. Add and adjust Bloom, Anti-Aliasing, Ambient Occlusion, and Color Grading effects in the  Post-Processing Profile to get your desired aesthetic.

Mark step as complete

## 2.  Import or Update the Post-Processing package

Q&A (0)

*Use the Package Manager to import the Post-Processing stack so you have access to all of the effects.*

**(Note:**The Package Manager is already installed for the challenge Scene. The steps below are included  as a reference for future projects.)

[Image: image]

1. Navigate to the****Windows****menu (at the top of the Editor) and select**Package Manager.**
2. Select **All Packages** and click **Post-Processing.**
3. Confirm that the latest version is selected by checking the version number on the upper right and click **Install**to bring in the Post-Processing stack.

Mark step as complete

## 3. Set Up the Camera

Q&A (0)

*Set up your Main Camera for post-processing (PP) effects, add the****Post-Processing Layer script, assign the Main Camera as the Trigger (if it isn’t already), and change the Post-Processing Layer script’s Layer to PostProcessing.*

***Note:** You will need to make a new Layer and call it PostProcessing if this is the first time you're setting up the post-processing effects.*

[Image: image]

1. Select the **Camera**, and add a new **Layer**. Change the Camera’s Layer to **PostProcessing**.
2. With the Camera selected,****add the **Post-Processing Layer script**component by dragging the Post-Processing script into the Camera’s Inspector under **Add Component**.
3. Change the Post-Processing Layer component’s Layer to **PostProcessing** (so it matches the Camera).
4. Turn on **Fast-Approximate Anti-Aliasing** so the Scene’s objects appear smoother.

[Image: image]Mark step as complete

## 4. Create the Post-Process Volume

Q&A (0)

*Set up your PP Volume by creating an empty GameObject, change its Layer to PostProcessing, and add the****Post-Process Volume component.*

*(**Note:**By controlling which areas receive PP effects, your user can experience different effects when they are in different locations of the building, such as indoors vs. outdoors.)*

[Image: image]

1. Create a new empty GameObject in the Scene.
2. Select the GameObject and change its Layer to**PostProcessing**, so it matches the Camera.
3. In the new GameObject’s Inspector, add the **Post-Process Volume component.**
4. In the Inspector, enable**Is Global** so the PP Volume affects the entire Scene.

[Image: image]Mark step as complete

## 5. Make and Add a New Post-Processing Profile and Add Multiple Effects

Q&A (0)

*Make and add a new Post-Processing Profile to the Post-Process Volume to control which effects the Camera uses; configure Ambient Occlusion, Bloom, and Color Grading in the new Profile’s Inspector so these effects turn on.*

[Image: image]

1. Create a **Post Processing Profile** by selecting the **PP Volume** GameObject and clicking **New** in the Inspector. This automatically creates and assigns a new **PP Profile.**
2. Add **Ambient** **Occlusion, Bloom,** and**Color Grading**to the new****Profile.
3. Choose the**Filmic (ACES) Tonemapper** and boost the **Post-Exposure**to 1 to help emphasize the lit objects in the Scene. As a review, **Filmic (ACES)** is a popular effect used to increase realism and contrast in objects and is commonly used in commercials.

**Note:** Some effects require you to turn on specific settings. Adjust the intensities and modify the settings by selecting the boxes under each effect in the Profile.

--------------------

**Explore — Modify Auto-Exposure for more Light**

Find that your Scene is a little too dark? Adjust the Camera’s auto-exposure level with the minimum and maximum EV parameters in the Post-Processing Profile. This will make your Scene appear a bit brighter due to the increase in exposure (similar to increasing the exposure time on a camera in the real world).

**Tip — Turn off the Grid!**

You can turn off the grid by going to the Scene’s navigation bar (at the top of the Scene window) and toggling off Show Grid (**Scene Window > Gizmos > Show Grid**).

Mark step as complete

## 6. Key Takeaways

Q&A (0)

You've now added post-processing effects to your Scene and increased its realism with more consistent lighting, shadows, and Textures.

By completing this challenge, you’re now able to:

1. Use Bloom to add a more realistic light reflection to your Scene
2. Use Ambient Occlusion to increase the shadow realism
3. Use Anti-Aliasing to smooth out objects
4. Use Color Grading and ACES to fine-tune the Scene’s look and feel

Mark step as complete

## Complete this Tutorial

Mark all steps complete
