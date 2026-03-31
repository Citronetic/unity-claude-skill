This version of Unity is unsupported.


                  **Method group is Obsolete**





# IRenderPipelineGraphicsSettingsContextMenu<T0>





interface in
          UnityEditor.Rendering


                  Leave feedback





Implements interfaces:[IRenderPipelineGraphicsSettingsContextMenu](Rendering.IRenderPipelineGraphicsSettingsContextMenu.html)




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













                        **Obsolete**
                        IRenderPipelineGraphicsSettingsContextMenu<T> is deprecated and will be removed in a future release. Use IRenderPipelineGraphicsSettingsContextMenu2<T> instead. #from(6000.0).








### Description



Allows to modify the contextual menu of [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) in the inspector.


              


```
using UnityEditor;
using UnityEditor.Rendering;
using UnityEngine.UIElements;struct DummyAMenu : IRenderPipelineGraphicsSettingsContextMenu<DummyA>
{
    public int priority => 0;    static void Increment(DummyA a) => a.myInt++;    public void PopulateContextMenu(DummyA setting, PropertyDrawer _, ref GenericDropdownMenu menu)
    {
        if (!EditorApplication.isPlaying)
            menu.AddItem("Try Increment", false, () => Increment(setting));
        else
            menu.AddDisabledItem("Try Increment", false);
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| PopulateContextMenu | Allows to populate context menu with custom methods for your IRenderPipelineGraphicsSettings. |


            
