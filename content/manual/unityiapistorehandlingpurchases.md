# Purchases

Retrieve purchase information and determine purchase status for products bought by players.Read time 1 minuteLast updated a month ago

---

Unity IAP fetches purchase information from the store so your application can recognize and fulfill what players have bought. This ensures that your game can deliver content or entitlements to users based on their purchase history, even if they bought items outside your app or on another device.
A purchase is represented as an [```
Order
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.Order.html&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) object. The

```
Order
```

 contains all relevant details about the purchase and provides information needed to track and manage it with the store.

## Retrieve purchases

Purchases made by the user can be retrieved from the store. However, consumable products must be tracked by your application after they are consumed, because stores don't return consumables that have already been fulfilled. For non-consumable products and subscriptions, the store accurately returns these purchases when you call [```
FetchPurchases
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IPurchaseService.html#UnityEngine_Purchasing_IPurchaseService_FetchPurchases&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) or [```
CheckEntitlement
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IPurchaseService.html#UnityEngine_Purchasing_IPurchaseService_CheckEntitlement_UnityEngine_Purchasing_Product_&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743).

## Determine purchase status

You can determine the status of a purchase in two ways:

- Use [```
Order
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.Orders.html&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) to determine if the

```
Order
```

 is a

```
PendingOrder
```

,

```
ConfirmedOrder
```

,

```
DeferredOrder
```

 or

```
FailedOrder
```

.

- Use

```
CheckEntitlement
```

 to receive [```
EntitlementStatus
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.Entitlement.html#UnityEngine_Purchasing_Entitlement_Status&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743), which returns

```
EntitledButNotFinished
```

,

```
EntitledUntilConsumed
```

,

```
FullyEntitled
```

,

```
NotEntitled
```

 or

```
Unknown
```

.

### Purchase attributes

| Attribute | Description |
| --- | --- |
| transactionId | A unique identifier for the purchase. |
| product | The purchased product. |
| quantity | The quantity of the product purchased. |
| receipt | Receipt data for validating the purchase with the store. |

### Purchase states

| State | Description |
| --- | --- |
| Pending | The purchase has been paid but not yet fulfilled. |
| Confirmed | The purchase has been fulfilled and acknowledged. |
| Failed | The purchase failed due to an error. |
| Deferred | The purchase is waiting for payment. |

## Process purchases

The [```
OnPurchasePending
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IPurchaseService.html#UnityEngine_Purchasing_IPurchaseService_OnPurchasePending&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) callback is invoked when a purchase is made and is awaiting fulfillment. Your application should fulfill the purchase at this point, for example by unlocking local content or sending the purchase receipt to a server to update a server-side game model.
Note that

```
OnPurchasePending
```

 may be called at any point following a successful initialization. If your application crashes during execution of the

```
OnPurchasePending
```

 handler, then it is invoked again the next time Unity IAP initializes. Consider implementing your own de-duplication logic.
NoteIf you don't confirm purchases, the store sends back the purchases, and some stores may even refund it automatically to protect the users.

```cs
// Handle restore on initialization
private async void Start()
{
    // Setup, e.g. add listeners to your StoreController...
    m_StoreController.OnPurchasePending += OnPurchasePending;
    m_StoreController.OnPurchasesFetched += OnPurchasesFetched;
    await m_StoreController.Connect();

    // Fetch previous purchases (includes confirmed orders)
    m_StoreController.FetchPurchases();
}

// Handle new purchases and pending transactions
private void OnPurchasePending(PendingOrder order)
{
    ProcessPurchase(order);
}

// Handle fetched purchases (includes previously confirmed orders)
private void OnPurchasesFetched(Orders orders)
{
    foreach (var confirmedOrder in orders.ConfirmedOrders)
    {
        if (confirmedOrder.CartOrdered.Items().FirstOrDefault()?.Product.definition.type != ProductType.Consumable)
        {
            // Mark non-consumable and subscription products as entitled on fetch, as they only need to be granted once
            MarkAsEntitled(confirmedOrder.CartOrdered.Items().FirstOrDefault().Product);
        }
    }
}

// Your ProcessPurchase logic
private void ProcessPurchase(PendingOrder order)
{
    foreach (var product in order.CartOrdered.Items())
    {
        // Grant product
        GrantProduct(product);
    }
    // Confirm the order to finalize the transaction
    m_StoreController.ConfirmPurchase(order);
}
```

## Purchase acknowledgement and reliability

Unity IAP requires you to explicitly acknowledge purchases to ensure that purchases are reliably fulfilled, even during network outages or application crashes. If a purchase is paid for but not fulfilled, Unity IAP delivers the purchase to your application the next time it initializes. This process prevents purchases from being lost when the purchase flow is interrupted or when purchases are completed while the application is offline.
After successfully fulfilling a purchase, call [```
ConfirmPurchase
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IPurchaseService.html#UnityEngine_Purchasing_IPurchaseService_ConfirmPurchase_UnityEngine_Purchasing_PendingOrder_&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) with the relevant

```
PendingOrder
```

 to acknowledge the purchase to the store.
NoteFor consumables, once you acknowledge the purchase, the store does not return it again. Always persist consumable rewards remotely. If you store consumable rewards locally, you risk losing data with no way to restore it.

## Save purchases to the cloud

If you are saving consumable purchases to the cloud, you must call [```
ConfirmPurchase
```](https://docs.unity3d.com/Packages/com.unity.purchasing@latest?subfolder=/api/UnityEngine.Purchasing.IPurchaseService.html#UnityEngine_Purchasing_IPurchaseService_ConfirmPurchase_UnityEngine_Purchasing_PendingOrder_&ampDeviceId=39b84bea-fe15-432a-8dc4-5265dd477fef&ampSessionId=1774852400735&ampTimestamp=1774938800743) when you have successfully persisted the purchase.
When returning

```
Pending
```

, Unity IAP keeps transactions open on the underlying store until confirmed as processed. This ensures consumable purchases are not lost even if a user reinstalls your application while a consumable is pending.

---

---

Report a problem with this pageFeedback

Back to top
