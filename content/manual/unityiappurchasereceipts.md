This version of Unity is unsupported.

Restoring Transactions

Receipt validation

# Purchase Receipts

Unity IAP provides purchase receipts as a JSON hash containing the following keys and values:

| Key | Value |
| --- | --- |
| Store | The name of the store in use, such as GooglePlay or AppleAppStore |
| TransactionID | This transaction’s unique identifier, provided by the store |
| Payload | Varies by platform, details below. |

## iOS

Payload varies depending upon the device’s iOS version.

| iOS version | Payload |
| --- | --- |
| iOS >= 7 | payload is a base 64 encoded App Receipt. |
| iOS < 7 | payload is a SKPaymentTransaction transactionReceipt. |

## Mac App Store

Payload is a base 64 encoded [App Receipt](https://developer.apple.com/library/ios/releasenotes/General/ValidateAppStoreReceipt/Chapters/ReceiptFields.html#/apple_ref/doc/uid/TP40010573-CH106-SW1).

## Google Play

Payload is a JSON hash with the following keys and values:

| Key | Value |
| --- | --- |
| json | A JSON encoded string provided by Google; INAPP_PURCHASE_DATA |
| signature | A signature for the json parameter, as provided by Google; INAPP_DATA_SIGNATURE |

## Universal Windows Platform

Payload is an XML string as [specified by Microsoft](https://msdn.microsoft.com/en-US/library/windows/apps/windows.applicationmodel.store.currentapp.getappreceiptasync.aspx)

---

• 2017–05–16 Page amended

Restoring Transactions

Receipt validation
