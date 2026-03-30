[Image: image]

# Configuring Unity for AR Development - 2019.3

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: Configuring Unity for AR Development - 2019.3]Summary

In this tutorial, we’ll configure Unity for AR development targeting iOS or Android.

Languages available:

EnglishEnglishEnglish

## 1. Configuring Unity for AR Development

Q&A (0)

*If you are using Unity 2019.1, 2019.2 or the ARFoundation 1 preview package in 2018.4, [click here](https://learn.unity.com/tutorial/configuring-unity-for-ar-development).*

In this tutorial, we’ll configure Unity for AR development targeting iOS or Android. The minimum supported Unity version for AR development is 2019.1.

**1.**In Build Settings, set your target platform to **Android**or **iOS**. Click **Switch Platform** to apply this change. Once Unity finishes importing assets and compiling scripts, click **Player Settings**.

**2.**In the Inspector, click **Other Settings**. In the Identification section, give your project a unique identifier. On Android, this is the Package Name. On iOS, this is labeled *Bundle Identifier*.

Mark step as complete

## 2. Android Setup

Q&A (0)

**1.**ARCore requires Android 7.0. In the Identification section of Other Settings, set Minimum API Level to at least **Android 7.0 ‘Nougat’ (API level 24)** (**Figure 02**). Very few devices do require Android 8. For more information on hardware compatibility, see the [supported devices list](https://developers.google.com/ar/discover/supported-devices).

[Image: image]Mark step as complete

## 3. iOS Setup

Q&A (0)

**1.**In the Configuration section of Other Settings, check**Requires ARKit Support** (**Figure 03**). This automatically populates the Camera Usage Description, which cannot be blank. You may wish to edit this text, but it isn’t necessary.

[Image: image]

**2.**Set Target minimum iOS Version to **11.0**, the required minimum at the time of this writing. If it’s set too low, you’ll receive a warning with the required minimum version.

**3.**Set Architecture to **ARM64**, as this is the only one supported by ARKit.

Mark step as complete

## 4. Installing AR Packages Using Package Manager

Q&A (0)

**1.**Select**Package Manager** from the window drop-down.

**2.**Install **AR Foundation**(**Figure 04**). This is the cross-platform AR core for Unity.

[Image: image]

**3.**If you’re developing for Android, you’ll also want the ARCore XR package. ARCore requires Android 7.0 or higher.

**4.**For iOS, install the **ARKit XR Package**.

Mark step as complete

## 5. Conclusion

Q&A (0)

Unity is now configured for AR development for iOS and/or Android.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
