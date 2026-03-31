This version of Unity is unsupported.



# EditorToolContextAttribute





class in
          UnityEditor.EditorTools



/



Inherits from:[EditorTools.ToolAttribute](EditorTools.ToolAttribute.html)


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



Registers an [EditorToolContext](EditorTools.EditorToolContext.html) as either a global context or a [Component](Component.html) context  for a specific target type.





A Global tool context is always available in the toolbar menu. A [Component](Component.html) tool context is only available when the current selection contains a matching target type.





### Constructors



| Constructor | Description |
| --- | --- |
| EditorToolContextAttribute | Registers an EditorToolContext as either a global tool context or a Component tool context. |





### Inherited Members



### Static Properties

| Property | Description |
| --- | --- |
| defaultPriority | The default value for ToolAttribute.toolPriority and ToolAttribute.variantPriority. Specify a priority lower than this value to display a tool before the default entries, or specify a higher value to display it after the default entries. |



### Properties

| Property | Description |
| --- | --- |
| displayName | The name that displays in menus. |
| targetContext | If provided, the EditorTool will only be made available when the ToolManager.activeContextType is equal to targetContext. |
| targetType | Set to the type that this EditorTool or EditorToolContext can edit. Set to null if the tool is not specific to a Component and should be available at any time. |
| toolPriority | Tool priority defines the order that tools are displayed in within the Tools Overlay. |
| variantGroup | Tool variants are used to group logically similar tools into a single button in the Tools Overlay. |
| variantPriority | The variant priority defines the order that tools are displayed in when they are displayed in a ToolAttribute.variantGroup dropdown. |












            
