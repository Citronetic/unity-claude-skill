This version of Unity is unsupported.



# CustomBinding





class in
          UnityEngine.UIElements



/



Inherits from:[UIElements.Binding](UIElements.Binding.html)



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



Base class for general purpose binding extensibility.





The following example creates a custom binding that displays the current time.
 You can bind it to the text field of a Label to create a clock.


              


```
using System;
using Unity.Properties;
using UnityEngine.UIElements;[UxmlObject]
public partial class CurrentTimeBinding : CustomBinding
{
    [UxmlAttribute]
    public string timeFormat = "HH:mm:ss";    public CurrentTimeBinding()
    {
        updateTrigger = BindingUpdateTrigger.EveryUpdate;
    }    protected override BindingResult Update(in BindingContext context)
    {
        var timeNow = DateTime.Now.ToString(timeFormat);
        var element = context.targetElement;
        if (ConverterGroups.TrySetValueGlobal(ref element, context.bindingId, timeNow, out var errorCode))
            return new BindingResult(BindingStatus.Success);        // Error handling
        var bindingTypename = TypeUtility.GetTypeDisplayName(typeof(CurrentTimeBinding));
        var bindingId = $"{TypeUtility.GetTypeDisplayName(element.GetType())}.{context.bindingId}";        return errorCode switch
        {
            VisitReturnCode.InvalidPath => new BindingResult(BindingStatus.Failure, $"{bindingTypename}: Binding id `{bindingId}` is either invalid or contains a `null` value."),
            VisitReturnCode.InvalidCast => new BindingResult(BindingStatus.Failure, $"{bindingTypename}: Invalid conversion from `string` for binding id `{bindingId}`"),
            VisitReturnCode.AccessViolation => new BindingResult(BindingStatus.Failure, $"{bindingTypename}: Trying set value for binding id `{bindingId}`, but it is read-only."),
            _ => throw new ArgumentOutOfRangeException()
        };
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| Update | Called when the binding system updates the binding. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| isDirty | When set to true, the binding instance updates during the next update cycle.
 When set to false, the binding instance updates only if a change is detected. |
| updateTrigger | When set to BindingUpdateTrigger.EveryUpdate, the binding instance updates in every update, regardless of the
 data source version. |






### Public Methods

| Method | Description |
| --- | --- |
| MarkDirty | Notifies the binding system to process this binding. |
| OnActivated | Called when the binding becomes active for a specific VisualElement. |
| OnDataSourceChanged | Called when the resolved data source of a binding changes. |
| OnDeactivated | Called when the binding is no longer active for a specific VisualElement. |




### Static Methods

| Method | Description |
| --- | --- |
| GetGlobalLogLevel | Gets the global log level for all binding failures. |
| GetPanelLogLevel | Gets the log level for binding failures on a panel. |
| ResetPanelLogLevel | Resets the log level for binding failures on a panel to use the global setting. |
| SetGlobalLogLevel | Sets the log level for all binding failures. |
| SetPanelLogLevel | Sets the log level for binding failures on a panel. |






            
