[Image: image]

# Add physical properties to 3D GameObjects

Tutorial

foundational

+10XP

30 mins

57

(8708)

Unity Technologies

[Image: Add physical properties to 3D GameObjects]SummarySkills

In this tutorial, you’ll explore some visual and physical effects you can achieve in a 3D scene. You will:

- Create a material with a solid color.
- Create a material with a texture map.
- Assign materials to GameObjects.
- Create a Physic material to add physical properties to a GameObject.

Resources

- [Herringbone_Brick_baseColor.png](https://unity-connect-prd.storage.googleapis.com/20201001/26e9117a-554a-406c-824e-a4fa4e649738/Herringbone_Brick_baseColor.png?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954214926)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

In this tutorial you’ll give GameObjects physical properties that will be useful to you as you create your own scenes. You’ll add color to your objects and also make them react to gravity.

ステップを完了としてマーク

## 2. Get started with materials

Q&A (0)

**Materials**are components that define the surface characteristics of objects. You can create simple materials to change the visual appearance of your GameObjects. You can even apply different materials to different GameObjects to manage the ways your objects look.

It is common practice to organize assets of varying types in separate folders. To create a folder for materials in your project:

**1.** Adjust your Project window layout as needed so that your Project window matches the examples below. Right-click the tab of the Project window and select **Two Column Layout** if it is not selected already. The folders of your project appear in the left column, and the contents of the selected folder appear in the right column.

[Image: image]

**2.**In the Project window, right-click the Assets folder and select **Create**> **Folder**. Rename the folder to “Materials”.

**3.**In the Project window, double-click the new Materials folder so that you can see its contents in the right-hand pane of the Two Column Layout.

ステップを完了としてマーク

## 3. Create a material with a solid color

Q&A (0)

Follow these steps to create one you can use to apply a solid color to any GameObject:

**1.**  In the Project window, open the **Materials**folder. Right-click and select **Create**> **Material** to add a new material to that folder.

[Image: image]

**2.**  Rename the new material “SolidBlue”.

**3.**  Select the SolidBlue material in the Project window.

**4.**  In the Inspector window, locate the **Albedo** property. This property specifies the base color of the material.

**Note**: For materials in some Unity 3D templates, this property may be referred to as **Base Map**.

[Image: image]

**5.**  Use the color picker to give this material a blue color.

**6.**  To make any GameObject blue, drag the SolidBlue material from your Project window to any of the GameObjects in your scene. Now it’s blue!

[Image: image]

**7.**Apply the SolidBlue material to more than one GameObject, and then try adjusting the material’s shade of blue. The new blue color will change everywhere the material is used.

Make as many additional solid color materials as you like and apply them to parts of your structure. Be careful, though — don’t make it so colorful that it’s distracting!

**Note**: To change a GameObject back to white, apply the material named **Default-Material**.

ステップを完了としてマーク

## 4. Create a material with a texture map

Q&A (0)

A **texture map** is an image file, such as a PNG or JPG, that you apply to a material. Artists use textures to add detail to the surfaces of GameObjects.

To create a material with a texture map and apply it to your scene:

**1.**  Download the file **Herringbone_Brick_baseColor.png** from the fileslisted at the top of this tutorial.

**2.**  To import the file into the project, drag the downloaded file from your File Explorer (Windows) or Finder Window (MacOS) directly into the Materials folder in the Project window.

**Note**: This is a quick and easy way to import up to a few files, but there are other methods for importing large sets of assets. Be sure to follow instructions for the assets you are importing.

**3.**   In the Project window, open the **Materials**folder. Right-click and select **Create**> **Material** to add a new material to that folder.

**4.**  Rename the new material “BrickMaterial”.

**5.**  Select the BrickMaterial.

**6.**  In the Inspector window, select the object picker (circle icon) next to the **Albedo** property and select the Herringbone texture file that you imported.

[Image: image]

The image is now applied to the material as the Albedo map (or Base map) and will appear in the Material preview in the Inspector.

[Image: image]

**7.**  Drag the material from the Project window onto a GameObject in the Scene view. This material is good for floors!

[Image: image]

**8.**To change the scale of the texture, select the BrickMaterial material, and in the Inspector change the **Tiling X** and **Y** properties. Smaller numbers make the bricks appear larger.

[Image: image]

**Note**: Be sure the **Tiling X** and **Y** properties that you change are in the **Main Maps** section of the material’s properties in the Inspector — and not the **Secondary Maps** section.

If you have additional image files of your own that would make good texture maps, try applying them to some additional materials!

ステップを完了としてマーク

## 5. Add a Physic material

Q&A (0)

Earlier, you added a Rigidbody component to a GameObject to give it physical properties. You can also add additional physical characteristics with another type of material called Physic materials. A **Physic material** is a different type of material that makes an object bounce and changes its friction and drag properties.These properties take effect when the object is under the effects of gravity. Physic materials don’t change the visual properties of the GameObject.

To create a Physic material that will make GameObjects bounce:

**1.** In the Project window, open the **Materials**folder. Right-click and select **Create**>**Physic Material***.*

[Image: image]

**2.**Rename the Physic material to “Bouncy”.

**3.**  Select the new Physic material.

**4.**  In the Inspector, change the **Bounciness**value to 1.

[Image: image]

**5.**  Select the sphere that falls in your scene. In the Inspector window, notice the Sphere Collider component. A collider component is automatically included when you create a 3D primitive, such as this sphere.

**6.**  Drag the new Bouncy Physic material you created earlier into the **Material**property in the Sphere Collider component.

[Image: image]

**7.**  While you’re at it, give your sphere a color using a regular material, if you haven’t already.

**8.**  Enter Play mode. Your sphere should now fall to the platform and have a bit of bounce when it lands!

Create a few more falling objects in your scene using sphere, cube, cylinder, and capsule primitives, and try adding the Bouncy Physic material to some of them. Don’t make too many falling objects yet — that’s what we’ll do in the next tutorial.

ステップを完了としてマーク

## 6. Next steps

Q&A (0)

In this tutorial, you have seen how materials make GameObjects look visually realistic. You also used a Physic material to make a ball bounce. Wouldn’t it be more fun to have many bouncing balls — and other falling things? In the next tutorial, you will see how to build and manage many copies of your GameObjects to populate a scene.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
