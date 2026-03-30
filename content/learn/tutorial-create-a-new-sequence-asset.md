[Image: image]

# Create a new Sequence Asset

Tutorial

Beginner

+10XP

10 mins

4

(453)

Unity Technologies

[Image: Create a new Sequence Asset]Summary

In this tutorial, you’ll create a new Sequence Asset and add it to a Sequence of the sample movie.

Languages available:

EnglishEnglish日本語한국어English

## 1. Overview

Q&A (0)

Now that you’ve explored the main concepts and features of Sequences, you’re ready to start creating. In this tutorial, you’ll create a new Sequence Asset and add it to a Sequence of the movie.

Mark step as complete

## 2. Create an empty Sequence Asset

Q&A (0)

Sequence Assets are self-contained by design, which means you can consider them as containers you can fill with your creative content. You first need to create an empty Sequence Asset:

**1.**  In the Sequences window, select **Add** (**+**) and then select **New Sequence Asset > Character**.

[Image: image]

**2.**  Name your new Sequence Asset “Sneaky Chicken”.

[Image: image]Mark step as complete

## 3. Prepare content for the Sequence Asset

Q&A (0)

The content you are going to put in the Sequence Asset is in a Model Prefab. A best practice in Unity is to work with Prefab Variants of Model Prefabs, instead of the Model Prefabs themselves.

To create a Prefab Variant:

**1.**  In the Project window, open the **Assets** > **MICH-L-Resources** > **Characters**folder.

**2.** Right-click on the “01_RIG_ch_chicken01” Model Prefab and select **Create > Prefab Variant**.

**3.**  Rename the created Prefab Variant “my_chicken”.

[Image: image]Mark step as complete

## 4. Fill and edit the Sequence Asset

Q&A (0)

To fill and edit your Sequence Asset with the content you just prepared:

**1.**  From the Sequences window, open the Sequence Asset in Prefab edit mode: under **Asset Collections**, double-click on the “Sneaky Chicken” Sequence Asset.

**2.**  Drag and drop the “my_chicken” asset from the Project window to the Hierarchy of the Sneaky Chicken Prefab.

[Image: image]

**3.**  Set the **Scale** of the instantiated asset to **0.2**in all directions.

[Image: image]

**4.**  Save the Sequence Asset Prefab and exit the Prefab edit mode.

[Image: image]Mark step as complete

## 5.  Add the Sequence Asset to a Sequence:

Q&A (0)

To add your Sequence Asset to an existing Sequence of the sample movie:

**1.**  In the Sequences window, select **S01**.

**2.**  In the Sequence Assembly window now showing the Sequence Assets of **S01**, in the **Character** section, select **Add** (**+**).

**3.**  Select the “Sneaky Chicken” Sequence Asset that you just created.

[Image: image]

The Sequence Asset is now part of the Sequence.

[Image: image]Mark step as complete

## 6. Next steps

Q&A (0)

You’ve created a Sequence Asset and added it to a Sequence, so it’s now part of the movie, but it’s still static. The next step is to animate it in the context of the movie.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
