This version of Unity is unsupported.

Defining products

Initialization

# Subscription Product support

Unity IAP supports Product subscription information queries through the `SubscriptionManager` class. For example code, please review the *IAPDemo.cs* script included in the **Unity IAP**Abbreviation of Unity **In App Purchase**
See in [Glossary](Glossary.html#UnityIAP) SDK 1.19+.

### SubscriptionManager class methods

This class supports the Apple store and Google Play store. For Google Play, this class only supports Products purchased using IAP SDK 1.19+.

| Method | Description |
| --- | --- |
| public SubscriptionInfo getSubscriptionInfo() | Returns a SubscriptionInfo object (see below) |

### SubscriptionInfo class methods

The `SubscriptionInfo` class is a container for a Product’s subscription-related information.

| Method | Description |
| --- | --- |
| public string getProductId() | Returns a Product’s store ID. |
| public DateTime getPurchaseDate() | Returns the Product’s purchase date. For Apple, the purchase date is the date when the subscription was either purchased or renewed. For Google, the purchase date is the date when the subscription was originally purchased. |
| public Result isSubscribed() | Returns a Result enum to indicate whether this Product is currently subscribed or not.  Non-renewable Products in the Apple store return a Result.Unsupported value. Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. |
| public Result isExpired() | Returns a Result enum to indicate whether this Product has expired or not. * Non-renewable Products in the Apple store return a Result.Unsupported value. * Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. |
| public Result isCancelled() | Returns a Result enum to indicate whether this Product has been cancelled. A cancelled subscription means the Product is currently subscribed, but will not renew on the next billing date. Non-renewable Products in the Apple store return a Result.Unsupported value. Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. |
| public Result isFreeTrial() | Returns a Result enum to indicate whether this Product is a free trial.  * Products in the Google Play store return Result.Unsupported if the application does not support version 6+ of the Android in-app billing API.  Non-renewable Products in the Apple store return a Result.Unsupported value. Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. |
| public Result isAutoRenewing() | Returns a Result enum to indicate whether this Product is auto-renewable. Non-renewable Products in the Apple store return a Result.Unsupported value. Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. |
| public TimeSpan getRemainingTime() | Returns a TimeSpan to indicate how much time remains until the next billing date.  Products in the Google Play store return TimeSpan.MaxValue if the application does not support version 6+ of the Android in-app billing API. |
| public Result isIntroductoryPricePeriod() | Returns a Result enum to indicate whether this Product is within an introductory price period. On-renewable Products in the Apple store return a Result.Unsupported value. Auto-renewable Products in the Apple store and subscription products in the Google Play store return a Result.True or Result.False value. Products in the Google Play store return Result. Unsupported if the application does not support version 6+ of the Android in-app billing API. |
| public TimeSpan getIntroductoryPricePeriod() | Returns a TimeSpan to indicate how much time remains for the introductory price period. Subscription products with no introductory price period return TimeSpan.Zero. Products in the Apple store return TimeSpan.Zero if the application does not support iOS version 11.2+, macOS 10.13.2+, or tvOS 11.2+. |
| public long getIntroductoryPricePeriodCycles() | Returns the number of introductory price periods that can be applied to this Product.Products in the Apple store return 0 if the application does not support iOS version 11.2+, macOS 10.13.2+, or tvOS 11.2+. |
| public string getIntroductoryPrice() | Returns a string to indicate the introductory price of the Product.Products with no introductory price return a "not available" value. Apple store Products with an introductory price return a value formatted as “0.99USD”. Google Play Products with an introductory price return a value formatted as “$0.99”. Products in the Apple store return “not available” if the application does not support iOS version 11.2+, macOS 10.13.2+, or tvOS 11.2+. |
| public DateTime getExpireDate() | Returns the date of the Product’s next auto-renew or expiration (for a cancelled auto-renewing subscription).Products in the Google Play store return TimeSpan.MaxValue if the application does not support version 6+ of the Android in-app billing API. |

---

- 2018–05–30 Page published

- Added Subscription Product support in [2018.1](https://docs.unity3d.com/2018.1/Documentation/Manual/30_search.html?q=newin20181) NewIn20181

Defining products

Initialization
