This version of Unity is unsupported.



# BaseListViewController





class in
          UnityEngine.UIElements



/



Inherits from:[UIElements.CollectionViewController](UIElements.CollectionViewController.html)



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Base collection list view controller. View controllers of this type are meant to take care of data virtualized by any [BaseListView](UIElements.BaseListView.html) inheritor.





### Properties



| Property | Description |
| --- | --- |
| baseListView | View for this controller, cast as a BaseListView. |





### Public Methods



| Method | Description |
| --- | --- |
| AddItems | Adds a certain amount of items at the end of the collection. |
| ClearItems | Removes all items from the source. |
| Move | Moves an item in the source. |
| NeedsDragHandle | Returns whether this item needs a drag handle or not with the Animated drag mode. |
| RemoveItem | Removes an item from the source, by index. |
| RemoveItems | Removes items from the source, by indices. |





### Protected Methods



| Method | Description |
| --- | --- |
| RaiseItemsAdded | Invokes the itemsAdded event. |
| RaiseItemsRemoved | Invokes the itemsRemoved event. |
| RaiseOnSizeChanged | Invokes the itemsSourceSizeChanged event. |





### Events



| Event | Description |
| --- | --- |
| itemsAdded | Raised when an item is added to the CollectionViewController.itemsSource. |
| itemsRemoved | Raised when an item is removed from the CollectionViewController.itemsSource. |
| itemsSourceSizeChanged | Raised when the CollectionViewController.itemsSource size changes. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| itemsSource | The items source stored in a non-generic list. |
| view | The view for this controller. |






### Public Methods

| Method | Description |
| --- | --- |
| Dispose | Called when this controller is not longer needed to provide a way to release resources. |
| GetIdForIndex | Returns the id for the specified index. |
| GetIndexForId | Returns the index for the specified id. |
| GetItemForId | Returns the item with the specified ID. |
| GetItemForIndex | Returns the item with the specified index. |
| GetItemsCount | Returns the expected item count in the source. |
| SetView | Sets the view for this controller. |



### Protected Methods

| Method | Description |
| --- | --- |
| BindItem | Binds a row to an item index. |
| DestroyItem | Destroys a VisualElement when the view is rebuilt or cleared. |
| MakeItem | Creates a VisualElement to use in the virtualization of the collection view. |
| PrepareView | Initialization step once the view is set. |
| RaiseItemIndexChanged | Invokes the itemIndexChanged event. |
| RaiseItemsSourceChanged | Invokes the itemsSourceChanged event. |
| SetItemsSourceWithoutNotify | Set the itemsSource without raising the itemsSourceChanged event. |
| UnbindItem | Unbinds a row to an item index. |






### Events

| Event | Description |
| --- | --- |
| itemIndexChanged | Raised when an item in the source changes index.
 The first argument is source index, second is destination index. |
| itemsSourceChanged | Raised when the itemsSource changes. |



            
