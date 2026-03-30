[Image: image]

# Build your first personal project

Exercise

foundational

+60XP

60 mins

3

Unity Technologies

[Image: Build your first personal project]Summary

In this exercise, you will build your first personal project with Unity, a 3D art gallery that you will populate with artifacts. In the process, you will learn how to work with primitives, how to access the Unity Asset Store, and other foundational Unity skills.

Languages available:

EnglishEnglishEnglish

## 1. Gallery project overview

Q&A (0)

Now that you have a sense for the Unity Hub and Editor, let’s start creating! In this personal project, you will fill a 3D gallery with artifacts from your life, work, and interests that you will then share on Discord. To do this, you will build canvases and stands for your art out of primitive shapes, apply art using materials, and add 3D models using the Unity Asset Store. These are essential Unity skills that you will build on later in this professional development, and that you will likely use with students in your course as well.

The final task of the personal project will be to fill out at least one room of your gallery, which should result in something like this:

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

If you’d like to go further with your gallery, you absolutely can! Here is an example of a gallery project that introduces new members of a school robotics team to the history and norms of the team.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Or, if you already have some Unity knowledge, you can go above and beyond! Check out the video below to see what your gallery project can become with some additional skills and practice.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

As you engage in the project, think about what you want to display, and feel free to modify your project according to your experience level, comfort, and interests. For example, you could turn the gallery into any of the following:

- A collection of your students’ work.
- A space dedicated to a passion or interest of yours.
- A commemoration of a special trip or experience.
- An escape room with hidden clues.

Let’s get started!

Mark step as complete

## 2. Create a new project and explore the empty gallery

Q&A (0)

First, you need to create a new 3D URP project to contain your gallery. To create a new project, follow these instructions:

**1.**In the Unity Hub, create a new 3D (URP) Project.

#### **Important Note**

**1.**In the Unity Hub, select **New Project**and then select **Universal 3D.**
**Note**: It is very important that you select **Universal 3D.**

[Image: image]

**2.**Download, unzip, and import the [3D Gallery assets](https://drive.google.com/file/d/1dznryzockYYtx9NHjw8wuUA7cEXZuil9/view?usp=drive_link) into your new project.

**3.**Open the **Gallery** scene.

- From the **Project** window, go to **Assets** > **Scenes**, then open **Gallery_Scene**.
- **Important**: Make sure you open **Gallery_Scene**, not**Gallery_Scene_Troubleshooting.**

**4.**Get acquainted with the **Gallery** scene.

- Practice navigating through the gallery in the **Scene** view and take note of the different rooms. You can expand the gallery in the **Hierarchy**window to see all of its child GameObjects (such as the rooms).
- You’ll notice there’s a **Player** GameObject in the **Hierarchy**window with a camera attached — this allows you to walk around the gallery in **Game** view. Select the **Play**button and try this now. You can use the arrow keys or WASD to move around.

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

Mark step as complete

## 3. Add a primitive canvas

Q&A (0)

You’ve probably noticed that the gallery is missing something important: art! To fix this,  you’ll need to create a blank canvas for your art using a plane primitive. You will then scale, rotate, and position the primitive so that it appears to hang on the wall. To add your first canvas to the gallery, follow these instructions:

**1.**Create a plane primitive.

- Right-click in the **Hierarchy**window and select **3D Object** > **Plane**.
- Rename the **Plane** GameObject “Canvas 1”.

[Image: image]

**2.**Use the **Transform** component or the **Scene** view gizmo to rotate, resize, and position the canvas on one of the gallery walls.

- Rotate the plane 90 degrees on the x axis to get it upright, instead of parallel to the floor.
- Adjust the scale of the plane to be the size you want it. Setting the scale to 0.3 on each axis will get you to a reasonable size, but it is up to you!
- Adjust the position of the plane to sit flat against one of the walls of the gallery. This is a good opportunity to use the **Scene** view gizmo to adjust the positioning.

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

#### Keep in mind

A couple things to remember as you start adding GameObjects to your scene. First, if you're having trouble locating your GameObject, click on the GameObject name in the **Hierarchy**window, hover your mouse over the **Scene view**, and hit the **F key**. This will focus on the GameObject so you can see where it is in the scene.

Second, sometimes the GameObject can enter the scene way off in space somewhere. If this is the case, select the GameObject in the **Hierarchy**window. Then head over to the**Inspector**window and under the **Transform**component, select the three vertical dots in the upper right corner, and select **Reset**. This will reset the coordinates of the GameObject to 0 on each axis (X,Y, and Z). From there you can move it to where it needs to be in your scene!

[Image: image]Mark step as complete

## 4. Apply a picture to the canvas (art or photo)

Q&A (0)

A blank canvas is pretty boring, so let’s add some art or imagery using materials! To add an image to your canvas, follow these instructions:

**1.**  Find a photo or other image to put on the canvas.

- This can be a family photo, your school logo, a famous image that you love - anything!
- Download the image to your computer if you haven’t already.

**2.**  In the **Project** window, navigate to the **Textures** folder.

- **Assets** > **Gallery** > **Source Files** > **Textures**.

[Image: image]

**3.**  Drag and drop your image file into the **Textures** folder in the **Project** window.

**4.**  Create a new material.

- Right-click in the **Materials** folder and select **Create** > **Material**.
- Rename the material after the image you will apply to it (for example, FrancePhoto, SchoolLogo, etc.)

**5.**  Apply the image to the new material.

- With the new material selected, go to the **Inspector**window and select the **Base Map** picker (⊙).
- Search for and select the image you imported from your computer - this will apply the image to the material you just created.

[Image: image]

**6.**  Drag and drop the material onto the canvas.

- If the image looks stretched or distorted, scale the canvas to fit the approximate dimensions of the photo.

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

Mark step as complete

## 5. Create a frame with a solid color

Q&A (0)

Next you’ll create a frame for your artwork. You’ll do this by applying another material to a primitive GameObject (another plane) and by using a parent/child relationship. To add a frame to your canvas, follow these instructions:

**1.**Duplicate the plane and make it a child GameObject of your canvas.

- Select the **Canvas 1** GameObject in the **Hierarchy**window.
- Press **Ctrl+D** (macOS: **Cmd+D**) to duplicate the plane.
- Name this second plane “Frame 1”.
- Create a parent/child relationship by dragging and dropping the **Frame 1**GameObject onto the **Canvas 1**GameObject.

**2.**  Resize and reposition the frame.

- Use the **Transform** component to resize Frame 1 so that its axes are as follows:  **x**= **1.1**, **y**= **1.1**, **z**= **1.1**. Doing so will ensure that it is slightly larger than the canvas.

**Note:**We set the scale to 1.1 because **Frame 1** is a child GameObject of **Canvas 1**. Therefore, its Transform coordinates are not absolute coordinates, but instead are relative to that of the parent object (**Canvas 1**). When you set the child GameObject to be at a scale of 1.1, it will be 1.1 times as large as the parent GameObject.

- Make sure the Frame is not blocking the canvas by using the Scene view Gizmo to move it back just slightly.

The frame currently has the same material as the canvas because it is a duplicate of the canvas. Don’t worry about this for now; we will correct it in the next step.

**3.**Create a new material in the materials folder.

- Name this material whatever color you want the **Frame 1**GameObject to be.
- Set the **Base Map** component in the **Inspector**window to match the color you chose to name the material.
- Drag and drop the material onto your frame.

[Image: image]Mark step as complete

## 6. Create a primitive plinth

Q&A (0)

You now have one piece of art hanging in your gallery. Next, you’ll add to your gallery by creating an artifact of some kind. Before you create this artifact, however, you’ll need a plinth for it to stand on. To create a plinth, follow these instructions:.

**1.**Build a parent/child relationship between two Cylinder primitives.

- Right-click in the **Hierarchy**window and select **3D Object** > **Cylinder**.
- Right-click the **Cylinder**GameObject in the **Hierarchy**window, then select **3D Object** > **Cylinder**again.
- This will create a second **Cylinder**GameObject that is a child GameObject of the first **Cylinder** GameObject.

**3.**  Use the **Scene** gizmo or **Transform** component to position the child **Cylinder** GameObject on top of the parent **Cylinder**GameObject. Then, resize the child **Cylinder**GameObject to flatten and widen it into a platform for your artwork.

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

**4.**Rename your parent GameObject “Plinth”.

Mark step as complete

## 7. Add a model from the Asset Store

Q&A (0)

Now that the plinth is finished, you need to find an artifact to go atop it. To do this, you’ll find and import a 3D model from the Unity Asset Store. The Asset Store is a rich marketplace (with thousands of free assets) to find GameObjects, materials, scripts, and more. To browse the Asset Store and find an artifact for your plinth, follow these instructions:

**1.**Log into the Unity Asset Store.

- Navigate to the [Unity Asset Store](https://assetstore.unity.com/)**.**
- In the top right, log in using your Unity ID.

**2.**Search for an asset to go atop your plinth.

- Decide which asset to search for - this can be anything that fits the theme of your gallery.
- Make sure to search using the “free” and “3D” filters on the right.
- Make sure the file size isn’t too large (that is, more than 50 MB).

[Image: image]

**3.**Select and import your asset.

- When you find an asset you like, select **Add to my Assets**.
- On the confirmation that pops up, select **Open in Unity**.

[Image: image]

- The **Package Manager** window will open in the Editor, which shows all the files associated with your chosen asset. Select **Download** > **Import**. Then, select **Import** in the **Import Unity Package** window to confirm.
- Locate the model in your **Project** window, adjust its scale to your liking, then drag and position it on top of your plinth.

[Image: image]Mark step as complete

## 8. Fill out a room

Q&A (0)

Now you know how to work with primitives, group them into more complex GameObjects, find and import assets from the Asset Store, apply materials, and make adjustments using the **Transform** component and the **Scene** gizmo. That’s a lot!

As a next step, fill out one room of your gallery with additional art and artifacts of your choosing. Have fun with this! Once you are finished, you’ll share your work with your Class on Discord.

**Tip**: Reposition the **Player** GameObject in the room you’re filling so you don’t have to walk to the room you’re working on every time you enter Play mode.

Mark step as complete

## 9. More things to try

Q&A (0)

If you’d like to push your skills even further, choose one of the optional challenges below to complete.

- Easy: Fill out additional rooms of the gallery, and experiment with different plinth structures.
- Medium: Add more dramatic lighting.
- Difficult: Add text next to the artwork describing what it is.
- Expert: Add audio that is triggered by proximity.

Mark step as complete

## 10. Submission: Share your gallery project

Q&A (0)

Make a roughly 30 second video walk-through of your gallery and submit it below to share your creation with other educators. In the video, be sure to include the following information:

- What artifacts you chose and why.
- What you found most interesting or rewarding about the process.
- What was challenging and how you worked through the challenge(s).

After you submit your video below, send a link to your submission to your Class on discord to make sure they see your progress.

[Image: image]

#### Please login to submit

Login

## Complete this Tutorial

Mark all steps complete

Submission Gallery

[[Image: Simple museum scene]

Simple museum scene

Simple museum scene

Ggeorgeb_unity306460](https://learn.unity.com/submission/68b5256aedbc2a070dadb3ae)[[Image: Stanczyk Family Garden]

Stanczyk Family Garden

This is a gallery my daughter helped me with to showcase our garden.

Aastanczyk4750](https://learn.unity.com/submission/68b4b18fedbc2a02f440990e)[[Image: Peace]

Peace

An attempt.  Still waiting for a moment of clarity!

Ttdonaldwalls_unity430](https://learn.unity.com/submission/68b25db1edbc2a0021430f49)[[Image: Food From Around the World]

Food From Around the World

This project created a virtual museum of food from around the world. I began by curating a detailed exhibit on American food, covering main dishes like cheeseburgers and fries and desserts such as s'mores and macaroons. The museum is designed to be a growing digital collection that will eventually showcase cuisines and dishes from many different countries.

Jjessd1221580](https://learn.unity.com/submission/68b24366edbc2a00222daa69)[[Image: My Gallery]

My Gallery

For my gallery, I chose to include a digital canvas showing my chosen artwork, and I also added a 3D ghost character with animation. I wanted to combine both a traditional art display and something playful to make the experience unique. What I found most interesting was learning how to import images and turn them into materials. It was really rewarding to see my artwork appear inside the 3D gallery as if it were hanging on the wall. At first, I struggled with positioning the canvas on the wall and understanding how to apply textures. I solved this by using the Move Tool and adjusting the scale and rotation in the Inspector, and then dragging my material directly onto the plane.

Ssupport_unity768480](https://learn.unity.com/submission/68b20689edbc2a0134d68242)[[Image: Portfolio Gallery]

Portfolio Gallery

Images from my games and the url for my itch.io place for download.

EEndasil590](https://learn.unity.com/submission/68b01489edbc2a00219d30f9)Load More
