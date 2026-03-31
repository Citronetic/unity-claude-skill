This version of Unity is unsupported.



# [ToolManager](EditorTools.ToolManager.html).RefreshAvailableTools




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

public static void RefreshAvailableTools();






### Description



Call RefreshAvailableTools to rebuild the contents of the Scene View Tools Overlay.





This method is useful when a tool can change the value of [EditorTool.IsAvailable](EditorTools.EditorTool.IsAvailable.html) outside of selection and tool change events.


              


```
using System;
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine;// An example of a tool that may be made available or unavailable in situations other than selection changes.
[EditorTool("Conditional Tool", typeof(Transform))]
class ConditionallyAvailable : EditorTool
{
    bool m_IsAvailable;
    void OnEnable() => EditorApplication.update += UpdateAvailable;
    void OnDisable() => EditorApplication.update -= UpdateAvailable;    // This tool is enabled and disabled in 10 second intervals.
    void UpdateAvailable()
    {
        var time = DateTime.Now;        if (m_IsAvailable != ((time.Second / 10) % 2 == 0))
        {
            m_IsAvailable = !m_IsAvailable;
            // Because the tool is changing availability arbitrarily, it is necessary to manually refresh the UI.
            ToolManager.RefreshAvailableTools();
        }
    }    // When a tool is available, it is shown in the Tools Overlay. If not available, it is hidden.
    public override bool IsAvailable() => m_IsAvailable;
}
```


            
