This version of Unity is unsupported.



# LightingWindowTab





class in
          UnityEditor


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



Base class to add custom tabs to the Lighting window.





See also [LightingWindowEnvironmentSection](LightingWindowEnvironmentSection.html).


              


```
using UnityEditor;
using UnityEditor.Rendering;
using UnityEngine;
using UnityEngine.Rendering;class CustomLightingTab : LightingWindowTab
{
    public override void OnEnable()
    {
        titleContent = new GUIContent("Custom");
        priority = 1; // This tab will be the second option in the toolbar
    }    public override void OnGUI()
    {
        EditorGUILayout.LabelField("My Custom Lighting Tab !!");
    }
}
```





In this example, a new section is added in the Lighting window with the name Custom.





### Properties



| Property | Description |
| --- | --- |
| priority | The priority of the tab in the header toolbar. |
| titleContent | The title of the tab. |





### Public Methods



| Method | Description |
| --- | --- |
| FocusTab | FocusTab will open the lighting window with this tab selected. |
| HasHelpGUI | Returns true if window has a doc button in the header. |
| OnBakeButtonGUI | OnBakeButtonGUI is called to draw a button at the bottom of the tab. |
| OnDisable | OnDisable is called when this Inspector override is not used anymore. |
| OnEnable | OnEnable is called when this Inspector override is used. |
| OnGUI | A callback that is called when drawing the main section of the tab. |
| OnHeaderSettingsGUI | A callback that is called when drawing the header icons in the top right of the tab. |
| OnSelectionChange | Called when the selection changes. |
| OnSummaryGUI | A callback that is called when drawing the bottom section of the tab. |


            
