[Image: image]

# Get started with Unity Analytics

Tutorial

Beginner

+10XP

10 mins

21

(20)

Unity Technologies

[Image: Get started with Unity Analytics]Summary

In this tutorial, you’ll learn two methods for linking your Unity project to the Unity Dashboard, where you’ll see your Analytics results.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

With Unity Gaming Services and the Analytics package, actions that users take in your game appear on the Unity Dashboard. In this tutorial, you’ll set up your first Unity Dashboard project and link it to your game in one of two ways: either through the Dashboard or through the Unity Editor.

Mark step as complete

## 2. Before you begin

Q&A (0)

#### New to Unity?

If you’re new to Unity, welcome! The [**Unity Essentials**learning pathway](https://learn.unity.com/pathway/unity-essentials) has been designed to help you get set up and ready to create in the Unity Editor. We recommend you complete this pathway before continuing with Unity Analytics.

#### Review the Unity Editor basics

If you need to refresh your memory of the Unity Editor basics, you can take a moment to review [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) at any time.

Confirm access to the Unity Dashboard

To complete these tutorials, you’ll need to create an account for [Unity Gaming Services](https://unity.com/solutions/gaming-services) and access to your account on the [Unity Dashboard](https://dashboard.unity.com).

#### Set up your Unity project

To set up your Unity project, follow these instructions:

**1.** [Install **Unity 6.2 or higher**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa), if you haven’t already done so.

**2.** [Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) using any template, or use an existing Unity project built with Unity 6.2 or higher.

**Note:**Creating a project via the Unity Hub will automatically create a project of the same name in the Unity Cloud Dashboard.

**3.** [Install the **Analytics**package, version 6.1.0 or higher, into your project](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec).

**Important**: Be sure to select the **Analytics**package, not the older **Analytics Library**.

Mark step as complete

## 3. Create a project in the Unity Dashboard [Option 1]

Q&A (0)

The Unity Dashboard is organized into projects. You may create a new Dashboard project through either the Dashboard, the Unity Hub, or the Editor. Skip to the next step if you prefer to create a new project through the Editor. Creating a project from the Unity Hub automatically creates the project in the Unity Dashboard and links the Dashboard project to the Editor project. If this is sufficient, you can skip this section altogether.

To create a project on the Unity Gaming Services Dashboard and then link it to your Unity project, follow these instructions:

**1.** Sign in to your account on the [Unity Gaming Services Dashboard](https://dashboard.unity3d.com/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955975992).

**2.** From the Dashboard menu, navigate to the **Projects**section.

**3.** Select the **+** **New**button.

**4.** Choose a project name.

[Image: Unity Gaming Services Dashboard, Projects page]

You’ll be prompted to specify whether your game or app is primarily targeted at children under the age of 13. This requirement applies in the United States, under the jurisdiction of the Children's Online Privacy Protection Act (COPPA).

**5.**Answer accordingly and select the **Create**button.

[Image: Create project window with prompt regarding COPPA.]

For more information about COPPA, consult the [COPPA web page on the US Federal Trade Commission website](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule).

**6.** From the Unity Editor’s main menu, select **Edit**>**Project Settings**>**Services**.

Your project will already be attached to a separate Unity project that was created when you created your project in the Unity Hub.

**7.** Select your Organization from the list.

You can find your Organization Name in the Unity Dashboard under the **Projects** section.

**8.** Select the project you previously created in the Dashboard and select the **Link Unity project to cloud project**button.

Your existing Dashboard project is now linked to your Unity project.

[Image: Services General Settings - Link Existing Project ID.]Mark step as complete

## 4. Create and link a Unity Dashboard project from the Editor [Option 2]

Q&A (0)

Optionally, you may create a Dashboard project and link it to your Unity project from the Unity Editor. Skip this step if you prefer to use the Dashboard.

To create a Dashboard project and link it your Unity project from the Editor, follow these instructions:

**1.** From the Unity Editor’s main menu, select **Edit**>**Project Settings**>**Services**.

**2.** Unlink project from existing project by selecting the **Unlink project**button.

**3.** Select your Organization from the list.

You can find your Organization Name in the Unity Dashboard under the **Projects**section.

**4.** Under the **Choose between using an existing cloud project or creating a new one**section, select **Create a new cloud project.**

**5.** Select the **Create new cloud project and link to Unity Project**button.

Your new Dashboard project will be created and linked to your Unity project.

[Image: Services General Settings - Create a new Project ID.]

At the bottom you’ll need to specify whether your game or app is primarily targeted at children under the age of 13. This requirement applies in the United States, under the jurisdiction of the Children's Online Privacy Protection Act (COPPA).

**6.** Answer accordingly and select the **Save**button.

For more information about COPPA, consult the [COPPA web page on the US Federal Trade Commission website](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule).

[Image: Services General Settings window with the prompt for the Children's Online Privacy Protection Act.]Mark step as complete

## 5. Next steps

Q&A (0)

Now that you’ve linked your Unity project to the Unity Dashboard, you’re ready to configure the user events that you want to capture. In the next tutorial, you’ll learn about **standard events**, which are built into Unity Analytics, and **custom events**, which you can define in the Dashboard’s Event Manager and send from your game code to track specific player actions.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
