This version of Unity is unsupported.

Configuration for the Amazon Appstore

Defining products

# Codeless IAP

**Codeless IAP** is the easiest way to implement in-app purchases in your Unity app. The Unity Editor offers an interface for configuring basic IAP integration using minimal script writing.

Codeless IAP handles the actual IAP transaction without requiring any code. Implementing Codeless IAP is a two-step process using the Editor:

1. [Add **IAP Buttons** to your game](#IAPButtons).

2. [Define your **Products** in the **IAP Catalog**](#PopulatingProducts).

The **Unity Purchasing** system configures the Products you populate in the catalog at run time. When players select an **IAP Button**, it initiates the purchase flow for the associated Product.

**Note**: You still need to use scripting to define how players access their newly purchased content. For more information, see the [**Purchase fulfillment**](#PurchaseFulfillment) section below.

## Implementing Codeless IAP

Before starting, install the latest [**Unity IAP**](https://assetstore.unity.com/packages/add-ons/services/billing/unity-iap-68207?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936101633) SDK. See documentation on [**Setting up Unity IAP**](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityIAPSettingUp.html) for more information.

### Adding IAP Buttons to your Scene

To add an **IAP Button** to your Scene, in the Unity Editor, select **Window** > **Unity IAP** > **Create IAP Button**.

[Image: Creating a Codeless IAP Button in the Unity Editor]
Creating a Codeless **IAP Button** in the Unity Editor

### Populating Products in the IAP Catalog

Open the **IAP Catalog** GUI one of two ways:

- Select **Window** > **Unity IAP** > **IAP Catalog**.

- Or, with your **IAP Button** selected, locate its **IAP Button (Script)** component in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector), then click **IAP Catalog…**.

[Image: Accessing the IAP Catalog GUI through an IAP Button script component]
Accessing the **IAP Catalog** GUI through an **IAP Button** script component

Next, use the GUI to define the following attributes for each Product in your catalog.

- A **Product ID** with which to communicate to app stores (note that you can override this ID with unique store-specific IDs through the **Advanced** option).

- A **Product Type** (**Consumable**, **Non-Consumable**, or **Subscription**).

[Image: Populating Product information in the IAP Catalog GUI]
Populating Product information in the **IAP Catalog** GUI

**Note**: The **IAP Catalog** GUI provides additional tools for configuring your Products. Before [exporting a catalog](#Exporting) for upload to its respective store, you must populate description and pricing information as well. For detailed information on these settings, see documentation on [**Defining Products**](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityIAPDefiningProducts.html).

### Automatically initializing `UnityPurchasing`

The IAP SDK must initialize in order for in-app purchasing to work. This occurs automatically when the first instance of a Codeless **IAP Button** or [**IAP Listener**](#IAPListeners) loads at run time. However, you may need to initialize the SDK before an IAP Button or IAP Listener appears in your game (for example, serving an [**IAP Promo**](https://docs.unity3d.com/2018.1/Documentation/Manual/IAPPromo.html) offer after application launch). In these cases, check **Automatically initialize UnityPurchasing (recommended)** at the bottom of the **IAP Catalog** window. This ensures that [`UnityPurchasing`](https://docs.unity3d.com/2018.1/Documentation/ScriptReference/Purchasing.UnityPurchasing.html) initializes immediately when the application starts, and eliminates dependencies on the codeless instances’ lifecycles.

[Image: Enabling auto-initialization for the SDK through the IAP Catalog GUI]
Enabling auto-initialization for the SDK through the **IAP Catalog** GUI

In order to work, your catalog must contain at least one Product.

**Note**: You can use auto-initialize together with IAP Buttons or Listeners. In this case, the SDK initializes when the game starts instead of when the first instance of an IAP Button or Listener loads in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). However, you should not enable auto-initialize if you also initialize manually in a script, as this may cause errors.

### Purchase fulfillment

When your catalog contains at least one Product, you can define **IAP Button** behavior when the purchase completes or fails.

1. Select your **IAP Button** in the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView), then locate its **IAP Button (Script)** component in the Inspector.

2. Select the Product to link to the **IAP Button** from the **Product ID** drop-down list.
 [Image: Selecting a Product to associate with a Codeless IAP Button]

3. Create your own function that provides purchase fulfillment, or import an Asset that does this (see code sample, below).

4. Apply your purchase fulfilment script to a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) as a component.
 [Image: Creating a GameObject with a purchase fulfillment script]

5. Return to the **IAP Button (Script)** component in the Inspector, and click the plus (**+**) button to add a function to the **On Purchase Complete (Product)** list.

6. Drag the GameObject with the purchase fulfillment script onto the **On Purchase Complete (Product)** event field (illustrated below), then select your function from the dropdown menu.
 [Image: Assigning your purchase fulfillment script to an IAP Button event field]

**Fulfillment script code sample**:

```
public void GrantCredits (int credits){
    userCredits = userCredits + credits;
    Debug.Log(“You received “ + credits “ Credits!”);
}
```

Run your game to test the **IAP Button**.

## Extended functionality

### Exporting to an app store

In order for purchases to function, you must configure your catalog on the corresponding app store. To do so, you can export your Product Catalog as a CSV file to Google Play, or as an XML file through Apple’s Application Loader to the iTunes Store.

#### Google Play

To export your Product Catalog for Google Play:

1. In the **IAP Catalog** window (**Window** > **Unity IAP** > **IAP Catalog**), ensure that each Product has the following defined:
* **ID**
* **Type**
* **Title** and **Description**
* **Price** or **Pricing Template** ID

2. Scroll down, and select **App Store Export**.

3. Select **Google Play CSV**.

4. Choose a location in which to save the CSV file.

For complete guidance on uploading your exported catalog to Google Play, see the [Google in-app billing](https://developer.android.com/google/play/billing/billing_admin.html#billing-list-setup) documentation on the [Android Developers website](https://developer.android.com).

#### Apple iTunes

To export your Product Catalog for Apple iTunes:

1. In the **IAP Catalog** window (**Window** > **Unity IAP** > **IAP Catalog**), ensure that each Product has the following defined:
* **ID**
* **Type**
* **Title** and **Description**
* **Price Tier** and **Screenshot path**
*
**Apple SKU** (found in [iTunes Connect](https://itunesconnect.apple.com))
* **Apple Team ID** (found on [Apple’s developer website](https://developer.apple.com))

2. Scroll down, and select **App Store Export**.

3. Select **Apple XML Delivery**.

4. Choose a location in which to save the XML file.

For complete guidance on importing through Apple’s Application Loader, see the [Application Loader](https://itunesconnect.apple.com/docs/UsingApplicationLoader.pdf) documentation on the [iTunes Connect website](https://itunesconnect.apple.com).

### Restore Button

Some app stores, including iTunes, require apps to have a **Restore** button. Codeless IAP provides an easy way to implement a restore button in your app.

To add a **Restore** button:

1. Add an **IAP Button** to your Scene (**Window** > **Unity IAP** > **Create IAP Button**).

2. With your **IAP Button** selected, locate its **IAP Button (Script)** component in the Inspector, then select **Restore** from the **Button Type** drop-down menu (most of the component’s other fields will disappear from the Inspector view).
 [Image: Modifying an IAP Button to restore purchases]

When a user selects this button at run time, the button calls the purchase restoration API for the current store. This functionality works on the iOS App Store, the Mac App Store, and the Windows Store app store. You may want to hide the **Restore** button on other platforms.

If the restore succeeds, **Unity IAP**Abbreviation of Unity **In App Purchase**
See in [Glossary](Glossary.html#UnityIAP) invokes the **On Purchase Complete (Product)** function on the **IAP Button** associated with that Product.

For more information, see the documentation on [**Restoring purchases**](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityIAPRestoringTransactions.html).

### IAP Listeners

Codeless IAP dispatches successful and failed purchase events to an active **IAP Button** component in the hierarchy. However, there may be times when it is difficult or undesirable to have an active **IAP Button** when handling a successful purchase. For example, if a purchase is interrupted before completing, Unity IAP attempts to process the purchase again the next time it is initialized. You may want this to happen immediately after the app launches, in which case an **IAP Button** wouldn’t make sense. Codeless IAP includes the **IAP Listener** component precisely for these cases. An active **IAP Listener** in the Scene hierarchy receives any purchase events that cannot be dispatched to an **IAP Button**.

To add an **IAP Listener**:

1. In the Unity Editor, select **Window** > **Unity IAP** > **Create IAP Listener**.

2. Follow the steps for [writing a purchase fulfillment script as a GameObject component](#PurchaseFulfillment).

3. Select the **IAP Listener** in the Scene and locate its **IAP Listener (Script)** component in the Inspector, then click the plus (**+**) button to add a function to the **On Purchase Complete (Product)** list.

4. Drag the GameObject with the purchase fulfillment script onto the event field in the component’s Inspector, then select your function from the dropdown menu.
 [Image: Configuring an IAP Listener to handle processing exceptions]

### Accessing Unity IAP’s extended functionality

The Codeless IAP feature does not expose most of Unity IAP’s [extended functionality](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityIAPStoreExtensions.html). However, Codeless IAP is implemented on top of the existing scripting APIs, so you can modify much of its functionality in the *IAPButton.cs* script (*Assets/Plugins/UnityPurchasing/script/IAPButton.cs*) to suit your needs.

To use Unity IAP’s extended functionality, access the Unity IAP [`IStoreController`](https://docs.unity3d.com/2018.1/Documentation/ScriptReference/Purchasing.IStoreController.html) and [`IExtensionProvider`](https://docs.unity3d.com/2018.1/Documentation/ScriptReference/Purchasing.IExtensionProvider.html) instances returned by [`IStoreListener.OnInitialize`](https://docs.unity3d.com/2018.1/Documentation/ScriptReference/Purchasing.IStoreListener.OnInitialized.html).

---

- 2018–05–30 Page amended

Configuration for the Amazon Appstore

Defining products
