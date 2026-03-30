[Image: image]

# Importing Spine assets into Unity

Tutorial

intermediate

+10XP

20 mins

168

(141)

Unity Technologies

[Image: Importing Spine assets into Unity]Summary

Importing Spine assets into Unity is a simple and straightforward process. In this tutorial, we'll learn how to import Spine assets into Unity.

Languages available:

EnglishEnglishEnglish

## 1. Importing Spine Assets into Unity

Q&A (0)

This tutorial has been verified using Unity 2019 LTS

Importing Spine assets into Unity is a simple and straightforward process. By this point, you should already have a functioning Spine-Unity runtime installed in your Unity Editor.

Refer to the Spine guide for help with this: [http://en.esotericsoftware.com/spine-unity-download#Installing-spine-unity-in-a-new-project](http://en.esotericsoftware.com/spine-unity-download#Installing-spine-unity-in-a-new-project)

1. Make sure your Unity project and the destination project folder is open (**Figure 01**).

[Image: image]

2. Rename every .atlas file to have .txt at the end of them

3. Select the three files for your Spine assets from your file browser.

4. Drag all the files into the Unity project folder. This will cause the Spine-Unity runtime to process them and auto-generate the necessary Unity assets (**Figure 02**).

[Image: image]

5. Drag the SkeletonData asset into the Scene or the Hierarchy window.

6. Select SkeletonAnimation from the context menu (**Figure 03**).

[Image: image]

During Step 3, the Spine-Unity runtime will have generated three new files (**Figure 04**):

- A  _Material asset that holds references to the Shader and **.**png Texture
- An _Atlas asset that holds a reference to the material and the **.**atlas.txt file
- A  _SkeletonData asset that holds a reference to the JSON and the _Atlas asset

[Image: image]Mark step as complete

## 2. Conclusion

Q&A (0)

As long as you make sure your Spine-Unity runtime is up to date, you shouldn’t have any issues with importing your assets into the Unity Editor.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
