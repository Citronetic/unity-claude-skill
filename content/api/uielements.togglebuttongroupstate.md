This version of Unity is unsupported.



# ToggleButtonGroupState





struct in
          UnityEngine.UIElements



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



The structure that keeps track of the [Button](UIElements.Button.html) states inside a [ToggleButtonGroup](UIElements.ToggleButtonGroup.html).





To set properties on how to serialize this type, use [ToggleButtonGroupStatePropertiesAttribute](UIElements.ToggleButtonGroupStatePropertiesAttribute.html).





### Properties



| Property | Description |
| --- | --- |
| length | Returns the number of toggle button options available. |
| this[int] | The option based on the index. |





### Constructors



| Constructor | Description |
| --- | --- |
| ToggleButtonGroupState | Constructs a ToggleButtonGroupState. |





### Public Methods



| Method | Description |
| --- | --- |
| CompareTo | Compares two ToggleButtonGroupState. |
| Equals | Checks if a given ToggleButtonGroupState matches with the current one. |
| GetActiveOptions | Retrieves a Span of integers containing the active options as indices. |
| GetHashCode | Get the hashcode of this ToggleButtonGroupState. |
| GetInactiveOptions | Retrieves a Span of integers containing the inactive options as indices. |
| ResetAllOptions | Resets the states of the toggle buttons. |
| SetAllOptions | Sets all the available options to active. |
| ToggleAllOptions | Toggles all the available options' state. |





### Static Methods



| Method | Description |
| --- | --- |
| Compare | Compares two ToggleButtonGroupState of flag enum types. |
| CreateFromOptions | Helps generate a ToggleButtonGroupState based on a list of booleans. |
| FromEnumFlags | Creates a ToggleButtonGroupState based on a FlagsAttribute enum type. |
| ToEnumFlags | Synchronizes the internal data with the ToggleButtonGroupState from a FlagsAttribute. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Checks if both of the ToggleButtonGroupState are not the same. |
| operator == | Checks if both of the ToggleButtonGroupState are the same. |


            
