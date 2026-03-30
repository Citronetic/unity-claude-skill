# Upgrade from IAP version 4 to version 5

Follow this guide to migrate from Unity In-App Purchasing version 4 to version 5.Read time 4 minutesLast updated 2 months ago

---

IAP version 5 (v5) is a major rework of the IAP package, and migration requires significant code changes.
NoteFollow this guide if you are upgrading from IAP v4 to v5.

## Overview of changes

- Configuration and initialization flow

- Initialization has been separated into multiple calls to cover store connection, fetching products, and fetching purchases.

- The configuration builder has been removed.

- Products can be fetched using a list or a [```
CatalogProvider
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.CatalogProvider.html&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938801538), which can be defined at any time.

- Store Extensions and configurations have been replaced with Store Extended Services.

- Changes to event handling and callbacks

- [```
IDetailedStoreListener
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IDetailedStoreListener.html&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938801538) has been replaced with optional event handlers.

## Replace UnityPurchasing.Initialize()

As of IAP v5, you can initialize the Unity IAP package with greater flexibility. Connect to the store, fetch products, and handle purchases independently and asynchronously. This approach helps you identify and resolve issues that might block a successful initialization.
NoteIn versions 4 and earlier, the Unity IAP package connects to the store, fetches products and fetched purchases synchronously at package initialization. The package reports a successful initialization only after completing all these steps. If any of these steps fail, initialization does not complete successfully.
Follow these steps to replace

```
UnityPurchasing.Initialize()
```

's behaviour:

1. Call and await

```
StoreController.Connect()
```

- When this call completes, you may assume that IAP has connected to your current app store.

2. Call

```
FetchProducts()
```

- You can add products to an instance of

```
CatalogProvider
```

, similar to adding products to the

```
ConfigurationBuilder
```

. You can also pass a list of

```
ProductDefinitions
```

 to

```
ProductService.FetchProducts()
```

 or

```
StoreController.FetchProducts()
```

 For more information, refer to [Code sample of new initialization process](./upgrade-to-iap-v5#code-sample-of-new-initialization-process-using-storecontroller).

- Your

```
OnProductsFetched
```

 event handler is called when the request has successfully completed. If no specified products could be fetched,

```
OnProductsFetchFailed
```

 will be invoked.

3. Call

```
FetchPurchases()
```

 after your products have been successfully fetched.

- Your

```
OnPurchasesFetched
```

 event handler is called when the request has successfully completed. The

```
Orders
```

 object contains a filterable collection of all deferred, pending, and completed orders returned by the app store. On failure,

```
OnPurchasesFetchFailed
```

 will be invoked.

NoteBy default, calling

```
FetchPurchases
```

 invokes

```
OnPurchasePending
```

 for any pending purchases which have not yet been handled in the session. You can disable this behaviour with

```
StoreController.ProcessPendingOrdersOnPurchasesFetched(false)
```

.

### Code sample of new initialization process using StoreController

The following is an example of the new initialization process:

```cs
StoreController m_StoreController;

async void InitializeIAP()
{
    m_StoreController = UnityIAPServices.StoreController();

    m_StoreController.OnPurchasePending += OnPurchasePending;

    await m_StoreController.Connect();

    m_StoreController.OnProductsFetched += OnProductsFetched;
    m_StoreController.OnPurchasesFetched += OnPurchasesFetched;

    var initialProductsToFetch = new List<ProductDefinition>
    {
        new(goldProductId, ProductType.Consumable),
        new(diamondProductId, ProductType.Consumable)
    };

    m_StoreController.FetchProducts(initialProductsToFetch);
}
void OnProductsFetched(List<Product> products)
{
    // Handle fetched products
    m_StoreController.FetchPurchases();
}
void OnPurchasesFetched(Orders orders) {
   // Process purchases, e.g. check for entitlements from completed orders
}
```

## Replace IDetailedStoreListener and IStoreListener

IAP v5 no longer requires an implementation of

```
IDetailedStoreListener
```

 or

```
IStoreListener
```

 for handling purchases or initialization. Functionality previously handled by an implementation of

```
IDetailedStoreListener
```

 should be replaced by attaching event handlers to

```
StoreController
```

, or the individual

```
ProductService
```

,

```
PurchaseService
```

 and

```
StoreService
```

 services.
For an example of adding event handlers to

```
StoreController
```

, refer to [Code sample of new initialization process](./upgrade-to-iap-v5#code-sample-of-new-initialization-process-using-storecontroller).
NoteEvent handlers can be added or removed at any time, however certain event handlers are recommended before calling certain methods. Unity IAP displays a warning when you call a function before the recommended event handlers have been attached.
During migration, replace the

```
IDetailedStoreListener
```

 functions' behaviours with the following:

| IDetailedStoreListener functions | IAP v5 replacement |
| --- | --- |
| OnPurchaseFailed(Product, PurchaseFailureDescription) | Add an event handler to StoreController.OnPurchaseFailed(FailedOrder) or PurchaseService.OnPurchaseFailed(FailedOrder) |
| OnInitialized(IStoreController controller, IExtensionProvider extensions) | Continue execution after StoreController.Connect() or StoreService.Connect() completes. |
| OnInitializeFailed(InitializationFailureReason error) | Add event handlers to  StoreSerice.OnStoreDisconnected(StoreConnectionFailureDescription), ProductService.OnProductsFetchFailed(ProductFetchFailed), and  PurchaseService.OnPurchasesFetchFailed(PurchasesFetchFailureDescription). These event handlers can also be added via StoreController. |
| OnInitializeFailed(InitializationFailureReason error, string message = null) | Add an event handler to StoreController.OnStoreDisconnected(StoreConnectionFailureDescription) or StoreService.OnStoreDisconnected(StoreConnectionFailureDescription) |
| PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args) | Add an event handler to StoreController.OnPurchasePending(PendingOrder) or PurchaseService.OnPurchasePending(PendingOrder) |

## Replace ConfigurationBuilder

Replace the following

```
ConfigurationBuilder
```

 functions with the following behaviours:

| ConfigurationBuilder  functions | IAP v5 replacement |
| --- | --- |
| ConfigurationBuilder.AddProduct() | Rather than calling ConfigurationBuiler.AddProduct(), products can be added to an instance of a CatalogProvider via CatalogProvider.AddProduct() or CatalogProvider.AddProducts(). Products can be fetched by calling CatalogProvider.FetchProducts and passing a callback, such as UnityIAPServices.DefaultProduct().FetchProductsWithNoRetries. For more information on products and CatalogProvider, refer to Define your products. ProductDefinitions can also be created and passed directly to a FetchProducts() call on StoreController or ProductsService. |
| IAppleConfiguration and IGoogleConfiguration | Functionality in IAppleConfiguration and IGoogleConfiguration can be found in the Extended Store Services, such as AppleStoreExtendedService. |

NoteIf you fetch a Store Extended Service on an unsupported platform (for example, fetching

```
AppleStoreExtendedService
```

 in the Editor or on Android), the service will be null. Always check that the service isn't null before adding event handlers or changing settings.

## Replace IStoreController

Replace

```
IStoreController
```

 with

```
StoreController
```

.

```
StoreController
```

 exposes IAP functionality similar to

```
IStoreListener
```

, but can be fetched by calling

```
UnityIAPServices.StoreController()
```

 at any time.
Methods from

```
IStoreController
```

 can be replaced with the following from

```
StoreController
```

:

| IStoreController | StoreController | Notes |
| --- | --- | --- |
| products | GetProducts | GetProducts returns a list of products. |
| InitiatePurchase | Purchase or PurchaseProduct | Purchase functions no longer have a payload argument. Support for developer payloads was removed in Google Billing v3. |
| FetchAdditionalProducts | FetchProducts | FetchProducts is also used to fetch initial products. |
| ConfirmPendingPurchase | ConfirmPurchase | ConfirmPurchase requires a PendingOrder. |

## Replace purchase flow

To initiate a purchase, call

```
Purchase()
```

 or

```
PurchaseProduct()
```

on

```
StoreController
```

 or

```
PurchaseService
```

. To confirm a pending purchase, call

```
StoreController.ConfirmPurchase(PendingOrder)
```

 or

```
PurchaseService.ConfirmPurchase(PendingOrder)
```

 with the

```
PendingOrder
```

 you want to confirm. For more information about the purchase flow, refer to [Purchases](./purchases).

### Unity IAP version 4 and earlier

- The

```
ProcessPurchase
```

 method automatically handles all purchase events.

### Unity IAP version 5 and later

Purchase handling has the following callbacks:

- ```
OnPurchasePending
```

: Called for new purchases.

- ```
OnPurchasesFetched
```

: Called for restored purchases.

Use your existing

```
ProcessPurchase
```

 logic within both of these new callbacks.

## Restore transactions

```
RestoreTransactions
```

 has moved from Store Extensions to

```
StoreController
```

 and

```
PurchaseService
```

.
Confirmed purchases are automatically restored when you call

```
FetchPurchases()
```

 or through

```
CheckEntitlement()
```

.

## Replace entitlement checks

To check a user's entitlement to a product, IAP relies on events. You can check the entitlements for all your fetched products by calling

```
FetchPurchases
```

 and handling the

```
OnPurchasesFetched
```

 event. To check the entitlement for a single product, call

```
CheckEntitlement
```

 and handle the

```
OnCheckEntitlement
```

 event.

## Fetch additional products

Call

```
FetchProducts
```

 on either

```
StoreController
```

 or

```
ProductService
```

 with a list of additional products to trigger your

```
OnPurchasesFetched
```

 event handler. Alternatively, you can call

```
FetchProducts
```

 on a

```
CatalogProvider
```

 instance. For an example of fetching products via

```
ProductService
```

, refer to [Code sample of new initialization process](./upgrade-to-iap-v5#code-sample-of-new-initialization-process-using-storecontroller). For an example of calling

```
FetchProducts
```

 on

```
CatalogProvider
```

, refer to [Define your products](./define-your-products).

## Receipt validation

Receipt validation for Apple App Store receipts has been deprecated. Receipt validation is supported only for Google Play Store. To fetch receipts, use

```
Order.Info.Receipt
```

 from

```
Order
```

 instead of

```
Product.Receipt
```

.
NoteMove from StoreKit 1 receipts to [StoreKit 2 jwsRepresentation](https://developer.apple.com/documentation/storekit/verificationresult/jwsrepresentation-21vgo) as soon as possible to improve reliability, security, performance, and ultimately deliver a better experience for your users.
NoteUse [OrderInfo.Apple.jwsRepresentation](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IAppleOrderInfo.html#UnityEngine_Purchasing_IAppleOrderInfo_jwsRepresentation&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938801538) for server-side validation.

## Codeless IAP specifics

Replace the following

```
CodelessIAPStoreListener
```

 function with the following:

| CodelessIAPStoreListener function | IAP v5 replacement |
| --- | --- |
| CodelessIAPStoreListener.initializationComplete | CodelessIAPStoreListener.IsInitialized() |

---

---

Report a problem with this pageFeedback

Back to top
