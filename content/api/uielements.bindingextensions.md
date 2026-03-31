This version of Unity is unsupported.



# BindingExtensions





class in
          UnityEditor.UIElements


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



Provides VisualElement extension methods that implement data binding between INotifyValueChanged fields and SerializedObjects.





### Static Properties



| Property | Description |
| --- | --- |
| prefabOverrideUssClassName | USS class added to element when in prefab override mode. |





### Static Methods



| Method | Description |
| --- | --- |
| Bind | Binds a SerializedObject to fields in the element hierarchy. |
| BindProperty | Binds a property to a field and synchronizes their values. This method finds the property using the field's binding path. |
| TrackPropertyValue | Executes the callback when the property value changes. Unity checks properties for changes at regular intervals during the update loop.
 If no callback is specified, a SerializedPropertyChangeEvent is sent to the target element. |
| TrackSerializedObjectValue | Executes the callback when the property value changes. Unity checks properties for changes at regular intervals during the update loop.
 If no callback is specified, a SerializedPropertyChangeEvent is sent to the target element. |
| Unbind | Disconnects all properties bound to fields in the element's hierarchy. |


            
