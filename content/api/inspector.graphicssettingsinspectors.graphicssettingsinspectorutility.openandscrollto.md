This version of Unity is unsupported.



# [GraphicsSettingsInspectorUtility](Inspector.GraphicsSettingsInspectors.GraphicsSettingsInspectorUtility.html).OpenAndScrollTo




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

public static void OpenAndScrollTo(Type renderPipelineGraphicsSettingsType);






## Declaration

public static void OpenAndScrollTo(string propertyPath);






## Declaration

public static void OpenAndScrollTo(string propertyPath);






## Declaration

public static void OpenAndScrollTo(Func<TVisualElement,bool> subElementFunc);






### Parameters



| Parameter | Description |
| --- | --- |
| renderPipelineGraphicsSettingsType | Provide a Type derived from IRenderPipelineGraphicsSettings. |
| propertyPath | Provide a property path from SerializedProperty.propertyPath. |
| subElementFunc | Provide a method to choose a subElement of the provided IRenderPipelineGraphicsSettings type. |





### Description



Call a method to open GraphicsSettings page and scroll to specified property.


            
