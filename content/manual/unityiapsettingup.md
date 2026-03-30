# Get started with Unity IAP

Follow this workflow to install the In-App Purchasing package and configure Unity IAP for your project.Read time 1 minuteLast updated 2 months ago

---

This guide goes through the initial setup for Unity In-App Purchasing (IAP). To successfully use Unity IAP, perform the following actions:

- [Meet all the prerequisites](#prerequisites).

- [Install the IAP package](#install-the-iap-package).

- [Enable and configure the IAP service for your project](#enable-and-configure-the-iap-service-for-your-project).

## Prerequisites

Before you begin, ensure you meet the following requirements:

- A Unity project running on a supported Unity version.

- A project linked to a Unity Project ID in the Unity Editor (**Services** > **General Settings**).

## Install the IAP package

To begin using the IAP SDK, install the In-App Purchasing package.

1. In the Unity Editor, select **Window** > **Package Manager**.

2. Select the Unity Registry tab.

3. Search for In-App Purchasing (or com.unity.purchasing).

4. Select the package, then select **Install**.

## Enable and configure the IAP service for your project

NoteThis step is not required to begin using IAP. You only need to complete it if you plan to use other Unity services, send IAP analytics, or set your Google license key through the Unity Editor.

1. In the Unity Editor, select **Services** > **General Settings**. Unity opens the Services General Settings page.

2. Select your organization from the Organization dropdown.

3. Choose whether to link an existing cloud project or create a new one for this Unity project:

- To link an existing cloud project, select the project from the Cloud project dropdown and select **Link Unity project to cloud project**.

- To create a new project, select **Create a new cloud project** and follow the steps.

4. The Unity Project ID appears.

5. Answer the COPPA compliance question.

6. From the left navigation menu, select **Services** > **In-App Purchasing**.

7. Use the toggle next to **In-App Purchases** to enable IAP.

---

---

Report a problem with this pageFeedback

Back to top
