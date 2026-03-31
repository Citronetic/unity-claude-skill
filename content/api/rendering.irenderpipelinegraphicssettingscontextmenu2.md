This version of Unity is unsupported.



# IRenderPipelineGraphicsSettingsContextMenu2





interface in
          UnityEditor.Rendering


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



Interface for modifying the contextual menu of all [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) in the Inspector.





Use this interface to add your own custom commands in the contextual menu of all [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html). The menu added here will appears in each contextual menu in **Edit** > **Project Settings** > **Graphics**.


              


```
using UnityEditor;
using UnityEditor.Rendering;
using UnityEngine.UIElements;struct DummyMenuForAll : IRenderPipelineGraphicsSettingsContextMenu2
{
    // The lower the priority, the higher the added command appears in the menu
    public int priority => 0;

    public void PopulateContextMenu(IRenderPipelineGraphicsSettings setting, SerializedProperty _, ref GenericMenu menu)
    {
        // Add specific commands that appear when you select the contextual menu button
        // of all IRenderPipelineGraphicsSettings in Edit > Project Settings > Graphics.
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





### Properties



| Property | Description |
| --- | --- |
| priority | Priority for sorting the added commands in the contextual menu among the other commands. |





### Public Methods



| Method | Description |
| --- | --- |
| PopulateContextMenu | Populate a context menu with custom methods for all IRenderPipelineGraphicsSettings. |


            
