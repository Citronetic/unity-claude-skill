[Image: image]

# Configuring Unity for AR Development

Tutorial

intermediate

+0XP

20 mins

233

(291)

Unity Technologies

[Image: Configuring Unity for AR Development]Summary

In this tutorial, we’ll configure Unity for AR development targeting iOS or Android.

Languages available:

EnglishEnglish日本語English

## 1. Configuring Unity for AR Development

Q&A (0)

This tutorial has been verified using *Unity 2019 LTS*and *AR Foundation 2.1.8*

In this tutorial, we’ll configure Unity for AR development targeting iOS or Android. The minimum supported Unity version for AR development is 2019.1.

1. In Build Settings, set your target platform to Android or iOS. Click Switch Platform to apply this change. Once Unity finishes importing assets and compiling scripts, click Player Settings.
2. In the Inspector, click Other Settings. In the Identification section, give your project a unique identifier. On Android, this is the Package Name. On iOS, this is labeled “Bundle Identifier”.

Mark step as complete

## 2. Android Setup

Q&A (0)

1. In the Rendering section of Other Settings, disable Multithreaded Rendering (**Figure 01**).

[Image: image]

2. ARCore requires Android 8.0. In the Identification section of Other Settings, set Minimum API Level to at least Android 8.0 ‘Oreo’ (API level 26) (**Figure 02**). For more information on hardware compatibility, see the [supported devices list](https://developers.google.com/ar/discover/supported-devices).

[Image: image]Mark step as complete

## 3. iOS Setup

Q&A (0)

If you want to build to iOS, open the Builder settings again and select iOS. Select “Switch Platform” to change to the iOS build settings.

Once all the required packages and plugins are installed, select Player Settings.

1. In the Configuration section of Other Settings, check Requires ARKit Support (**Figure 03**). This automatically populates the Camera Usage Description, which cannot be blank. You may wish to edit this text, but it isn’t necessary.

[Image: image]

2. Set Target minimum iOS Version to 11.0, the required minimum at the time of this writing. If it’s set too low, you’ll receive a warning with the required minimum version.

3. Set Architecture to ARM64, as this is the only one supported by ARKit.

Mark step as complete

## 4. Installing AR packages using the Package Manager

Q&A (0)

1. Select Package Manager from the ***Window>Package Manager***

2. Install AR Foundation (**Figure 04**). This is the cross-platform AR core for Unity.

[Image: image]

3. If you’re developing for Android, you’ll also want the ARCore XR package. ARCore requires Android 8.0 or higher.

4. For iOS, install the ARKit XR Package.

Mark step as complete

## 5. Conclusion

Q&A (0)

Unity is now configured for AR development for iOS and/or Android.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
