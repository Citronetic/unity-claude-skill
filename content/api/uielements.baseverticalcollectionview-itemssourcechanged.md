This version of Unity is unsupported.



# [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).itemsSourceChanged




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Raised when the data source of a vertical collection view is assigned a new reference or new type.





Use this event to handle changes to the vertical collection view's data source, ensuring the UI appropriately
 reflects the new data. For example, if the data source changes from a list of characters to a list of items, you can
 use this event to update the binding events so the UI fits the new type.

 This event isn't raised if the selection or the size of the data source changes. For size changes, such as adding
 or removing an item from a list view, listen to the [BaseListViewController.itemsSourceSizeChanged](UIElements.BaseListViewController-itemsSourceSizeChanged.html) event.
 For selection changes, listen to the [BaseVerticalCollectionView.selectionChanged](UIElements.BaseVerticalCollectionView-selectionChanged.html) event.


 Additional resources: [BaseListViewController.itemsAdded](UIElements.BaseListViewController-itemsAdded.html), [BaseListViewController.itemsRemoved](UIElements.BaseListViewController-itemsRemoved.html)


The following example illustrates that the `itemsSourceChanged` event is only triggered when the [itemsSource](UIElements.BaseVerticalCollectionView-itemsSource.html) property is changed,
 not when the contents of the data source are modified.


              


```
var changedCount = 0;
 var source = new List<string>();
 var listView = new ListView(); listView.itemsSourceChanged += () => changedCount++; // Changing the data source of the list view triggers the event.
 listView.itemsSource = source; // Adding an item to the source doesn't trigger itemsSourceChanged
 // because the data source reference remains the same.
 source.Add("Hello World!"); // Adding an item to the ListView directly doesn't trigger itemsSourceChanged
 // because the data source reference remains the same.
 listView.viewController.AddItems(1); Debug.Log(changedCount); // Outputs 1.
```


            
