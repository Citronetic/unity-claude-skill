[Image: image]

# How to test tracking link

Tutorial

Beginner

+10XP

20 mins

15

Unity Technologies

[Image: How to test tracking link]Summary

In this tutorial, you’ll learn how to test install tracking link before you run campaigns.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

It is important to test your tracking link to see if it can attribute installs to Unity Ads ok before you run campaigns. If the install tracking doesn’t work but you accidentally run it without checking, Unity Ads will not be able to get the install post back, which results in getting less traffic for your campaigns in the end.

Mark step as complete

## 2. Before you begin

Q&A (0)

**1.** Include at least one approved [creative pack](https://docs.unity.com/acquire/en/manual/creative-packs#Creative_packs) in the campaign you’re testing. Without an approved creative pack, the Attribution Link Tester will not work.

[Image: image]

**2.**Assign a budget to the campaign you’re testing. Without a budget, the Attribution Link Tester will not work.

[Image: image]Mark step as complete

## 3. Test device setup

Q&A (0)

**1.** Use a device that hasn’t installed the app that you are going to advertise for. If you use the device that has installed your advertising app, Unity Ads can not get an install postback since it is not attributed to us. So the test will be failed.

**2.**Set up your device to allow apps to request to track

- iOS : Go to Settings > Privacy > Allow Apps to Request to Track and enable the setting.

[Image: image]

- Android devices with OS lower than 11: Select Settings > Google services > Ads, and disable the Opt out of Ads Personalization setting to ensure that Google can track your device across apps.

[Image: image]

- Android devices with OS 11 or upper version: If you see this screenshot, you don’t need to take any action. Do not click anything and just leave the page because if you see Delete advertising ID there, it means the device has “opted-in” to ads personalization and has a unique GAID

[Image: image]

However if you see “**Get new advertising ID”**menu, which means the device has “opted-out” to ads personalization**,**please click “**Get new advertising ID”** to confirm that Google can track your device across apps.

**3.** Install Unity’s Ad Testing app
Search “Ad Testing” in the apple app store or android play store with the device that hasn’t installed your app. You should be able to find this Unity Ad Testing app.

- Android : [Ad Testing for Unity Ads](https://play.google.com/store/apps/details?id=com.unity3d.auicreativetestapp&hl=en&gl=US)
- iOS : [Ad Testing](https://apps.apple.com/us/app/ad-testing/id1463016906)

When you open the Ad Testing app, it will prompt you to allow tracking. Please allow the app to track your activity across the other companies’ apps and websites.

[Image: image]Mark step as complete

## 4. Use the attribution links tester

Q&A (0)

**1.** From the [Advertise dashboard](http://dashboard.unity3d.com/acquire/), select the campaign you want to test and **click ‘Go live with your campaign’ and run the campaign for about 2 mins and pause it**. It is important to run the campaign briefly before conducting the test.

**2.**  From the [Advertise dashboard](http://dashboard.unity3d.com/acquire/),  scroll to the Attribution links section.

Click the Test attribution link: Show QR code. Note that this only appears after you’ve entered and saved your attribution tracking links, and the campaign has at least one approved creative pack.

[Image: image]

**3.**  In the Ad Testing app, click the = button to open the menu and choose Attribution Link Tester.

[Image: image]

**4.** Click Scan QR, and allow the app to access your device’s camera. Scan the QR code from the dashboard.

[Image: image][Image: image]

**5.**  You can now see the message ‘Scanned successfully’. Click the Initialize button.

[Image: image]

**6.**  Now click the ‘Play ad’ button and watch your campaign. Then click the ‘install’ button from the end card of your campaign. You will be redirected to your app’s app store page and download it.

[Image: image][Image: image]

**7.**  Open the advertised app to give it time to send postbacks to the MMP. The MMP will then forward install postbacks to Unity.

**8.**  Return to the Ad test app. At this moment, You can see **App Install Status: unknown**. Now click the ‘Check Install Status’ button. If UnityAds get the postback successfully, You should be able to see **App Install Status: Installed .**It can take up to 12 mins for UnityAds to get postback successfully. So please take some time if you don’t see **App Install Status: Installed**.

[Image: image][Image: image]Mark step as complete

## 5. Next steps

Q&A (0)

- If your install test is successful(App Install Status: Installed), Now you are ready to run your campaign! Go to the UnityAds dashboard and start your campaigns!
- However, if your install test is not successful, please go to the MMP dashboard and check if you can see unityads attributed install on the MMP side. If there is an unityads attributed install on the MMP side, then please get the raw postback log and send it to [unityads-support@unity3d.com](mailto:unityads-support@unity3d.com) with explaining your issue.
- If you don’t see unityads attributed install on MMP dashboard side too, please reach out to MMP support to get support on your issue.
- If you see the “Error while performing the install check: invalid token” message, please go to the dashboard and get a new QR code and test it with a new device that has never installed the advertising app.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
