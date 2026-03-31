This version of Unity is unsupported.



# IRenderPipelineGraphicsSettingsContextMenu2_1





interface in
          UnityEditor.Rendering


                  Leave feedback





Implements interfaces:[IRenderPipelineGraphicsSettingsContextMenu2](Rendering.IRenderPipelineGraphicsSettingsContextMenu2.html)




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



Interface for modifying the contextual menu of a [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) in the Inspector.





Use this interface to add your own custom commands in the contextual menu of a [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html). The type of the [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) affected is given by the generic argument. The menu added here will appears in the matching contextual menu in **Edit** > **Project Settings** > **Graphics**.


              


```
using UnityEditor;
using UnityEditor.Rendering;
using UnityEngine.UIElements;struct DummyAMenu : IRenderPipelineGraphicsSettingsContextMenu2<DummyA>
{
    // The lower the priority, the higher the added command appears in the menu
    public int priority => 0;    public void PopulateContextMenu(DummyA setting, SerializedProperty _, ref GenericMenu menu)
    {
        // Add specific commands that appear when you select the contextual menu button
        // of a DummyA in **Edit** > **Project Settings** > **Graphics**. It will not appear for other types.
        menu.AddItem("Log type", false, () => Debug.Log(settings.GetType()));

        // As modifications are not recommended at runtime, check
        // EditorApplication.isPlaying before modifying any data.
        if (EditorApplication.isPlaying)
            menu.AddDisabledItem("Custom Reset", false);
        else
            menu.AddItem("Custom Reset", false, () =>settings.Reset());
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| PopulateContextMenu | Populate a context menu with custom methods for your IRenderPipelineGraphicsSettings. |


            
