# Define your products

Create and configure Unity IAP products using the IAP Catalog or programmatically in your code.Read time 1 minuteLast updated 3 months ago

---

To support in-app purchases in your application, first define the products you want to sell in the following ways:

- [Define products in the IAP Catalog](#define-products-in-the-iap-catalog)

- [Define products programmatically](#define-products-programmatically)

## Prerequisites

Before you begin, complete the steps in the [Get started](./get-started) guide.

## Define products in the IAP Catalog

The [IAP Catalog](./products-and-catalogs#iap-catalog) provides a graphical interface in the Unity Editor for configuring in-app purchase products. This is the recommended approach for most developers, as it requires minimal scripting.
To add in-app products to your application, use the IAP Catalog:

1. In the Unity Editor, select **Services** > **In-App Purchasing** > **IAP Catalog**.

2. Select **Add Product** to create a new product entry.

3. Enter a unique Product ID, select the appropriate product type (Consumable, Non-Consumable, or Subscription), and provide a display name.

4. Set attributes such as price, payout, and store-specific IDs. For information on each setting, refer to the [IAP Catalog window reference](./iap-catalog-window-reference).

Repeat these steps for each product you want to offer.
NoteThe IAP Catalog acts as a product catalog dictionary, not as an inventory manager. You must still implement the code that handles conveyance of the purchased content.

## Define products programmatically

You can also declare your product list in a script. This method provides greater flexibility and is suitable for more complex scenarios.
To define products programmatically:

1. During the initialization stage, create an instance of the

```
CatalogProvider
```

 class.

2. Use the

```
AddProduct()
```

 method to add each product, or

```
AddProducts()
```

 to add multiple products at once.

3. For each product, specify a unique cross-store

```
Product ID
```

 and

```
Product Type
```

.

The following example shows how to add a consumable product with the ID

```
100_gold_coins
```

 to a

```
CatalogProvider
```

, and later call

```
FetchProducts()
```

 to retrieve the defined product.

```cs
using UnityEngine;
using UnityEngine.Purchasing;

public class MyIAPManager {
    public MyIAPManager () {
        var catalog = new CatalogProvider();
        catalog.AddProduct("100_gold_coins", ProductType.Consumable);
        // Connect to the store
        catalog.FetchProducts(UnityIAPServices.DefaultProduct().FetchProductsWithNoRetries);
    }
}
```

NoteUse the

```
CatalogProvider
```

 class to configure store-specific IDs and other advanced configurations directly in code.

---

---

Report a problem with this pageFeedback

Back to top
