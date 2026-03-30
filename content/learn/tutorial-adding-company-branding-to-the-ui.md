[Image: image]

# Adding Company Branding to the UI

Tutorial

intermediate

+10XP

15 mins

1

Unity Technologies

[Image: Adding Company Branding to the UI]Summary

In this tutorial, we will look at various ways to add company branding to the Reflect Viewer user interface.

Resources

- [AddingCompanyBranding_Completed.zip](https://unity-connect-prd.storage.googleapis.com/20200505/2d231339-75c6-4c1a-80b5-317c69bae13e/AddingCompanyBranding_Completed.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950725669)
- [AddingCompanyBranding_Assets.zip](https://unity-connect-prd.storage.googleapis.com/20200505/cfe47b29-e203-45bc-ba13-e519eafdc401/AddingCompanyBranding_Assets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950725669)

Languages available:

日本語English日本語日本語

## 1. Introduction

Q&A (0)

In this tutorial, we will look at various ways to add company branding to the Reflect Viewer user interface.

For this tutorial, you will need:

- The Reflect Viewer project downloaded from Github [GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- A Pro license for the Unity Editor
- The assets zip file, "AddingCompanyBranding_Assets"

ステップを完了としてマーク

## 2. Setting up the Scene

Q&A (0)

In this tutorial, you will add company branding to the user interface. This will allow you to customize the Viewer for clients and make things a bit more personal. The two places where you would typically want to add branding is on the splash screen and in the general user interface. In this tutorial, you will add a company logo to the general user interface.

**1.**To start, you need somewhere to save the new Assets. Open the Reflect project and select the Reflect scene.

**2.** In the Assets folder, create a new folder and name it “Images” (**Figure 01**).

[Image: image]

**3.** Download and extract the “AddingCompanyBranding_Assets.zip” file located near the top of this tutorial page underneath “Materials”. Drag the logo image you would like to add to the Scene into the Images folder. You may use your own image or the one provided with the tutorial exercise files (**Figure 02**).

[Image: image]

**4.** At this point, you need to change the image to an object that you can use on the canvas, so you’re going to turn it into a Sprite. Select the image and, in the Properties Inspector, change the Texture type to **Sprite (2D and IU)**(**Figure 03**).

[Image: image]

**5.** The next step is to create the UI element in the Reflect Viewer Prefab. Deciding where to put it is important, as it will determine when the logo shows up when you run the Viewer.

Adding the logo as a child to the Canvas GameObject will make it visible immediately when the project runs. That means it will show up in the splash page as well. For this tutorial, however, you want the logo to only show up after the splash page, once the user gets to the login screen.

**6.**The simplest way to do this is to add the logo as a child UI element of the UI*Main*object already created in the project (**Figure 04**).

[Image: image]

**7.** Select the UI Main GameObject, then right-click and select **UI**>**Image** (**Figure 05**).

[Image: image]

**8.** Select the newly created Image object and, in the Inspector window, change the name to “Logo”*.* For the source, select the Sprite you created earlier (**Figure 06**).

[Image: image]

**9.** Still in the Properties Inspector, select the **Preserve Aspect** box (**Figure 07**).

[Image: image]

**10.** In the Scene, move the new Logo UI element to the top-right corner, then scale and anchor as needed (**Figure 08**).

[Image: image]ステップを完了としてマーク

## 3. Next Steps

Q&A (0)

This tutorial covered one of the simplest ways to personalize and customize the Reflect Viewer. Using this process, you can quickly make the Viewer more aligned to your client’s brand. Moving forward, it’s worth exploring the other UI elements of the Reflect Viewer Prefab. Once you understand the underlying structure, you will be able to customize the Viewer even further.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
