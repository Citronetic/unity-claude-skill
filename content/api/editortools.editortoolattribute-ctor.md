This version of Unity is unsupported.



# EditorToolAttribute Constructor




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















## Declaration

public EditorToolAttribute(string displayName,
Type componentToolTarget,
Type editorToolContext);






## Declaration

public EditorToolAttribute(string displayName,
Type componentToolTarget);






## Declaration

public EditorToolAttribute(string displayName,
Type componentToolTarget,
Type editorToolContext,
Type variantGroup);






## Declaration

public EditorToolAttribute(string displayName,
Type componentToolTarget,
Type editorToolContext,
int toolPriority,
Type variantGroup);






## Declaration

public EditorToolAttribute(string displayName,
Type componentToolTarget,
Type editorToolContext,
int toolPriority,
Type variantGroup,
int variantPriority);






### Parameters



| Parameter | Description |
| --- | --- |
| displayName | The name to display in menus. |
| componentToolTarget | The type this tool can edit. Set to null if the tool is not a Component tool. |
| editorToolContext | The EditorToolContext type that this tool relates to. When an EditorTool defines an editorToolContext scope, the tool is not shown in menus and must be activated by the EditorToolContext.ResolveTool method. |
| toolPriority | The order to display tools in the Tools overlay in. Refer to ToolAttribute.toolPriority. |
| variantGroup | The tool variant group to assign the tool to in the Tools overlay. Tool variants are used to group similar tools into a single button in the Tools overlay. Refer to ToolAttribute.variantGroup. |
| variantPriority | The variant priority defines the order that tools are displayed in when they are displayed in a ToolAttribute.variantGroup dropdown. |





### Description



Registers an [EditorTool](EditorTools.EditorTool.html) as either a Global tool or a [CustomEditor](CustomEditor.html) tool.





A Global tool is always available in the toolbar menu. A [CustomEditor](CustomEditor.html) tool is only available when the current selection contains a matching target type.


            
