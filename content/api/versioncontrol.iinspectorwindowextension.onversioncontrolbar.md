This version of Unity is unsupported.



# [IInspectorWindowExtension](VersionControl.IInspectorWindowExtension.html).OnVersionControlBar




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

public void OnVersionControlBar([Editor](Editor.html) editor);






### Parameters



| Parameter | Description |
| --- | --- |
| editor | Inspector that contains the version control bar. |





### Description



Allows you to add custom GUI controls to the version control bar in the specified inspector.


              


```
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject, IInspectorWindowExtension
{
    string m_State;    public void OnVersionControlBar(Editor editor)
    {
        if (m_State == null)
            m_State = "Ready";
        GUILayout.Label("State: " + m_State);
    }    public void InvalidateVersionControlBarState()
    {
        m_State = null;
    }
}
```





Additional resources: [IInspectorWindowExtension](VersionControl.IInspectorWindowExtension.html), [VersionControlObject](VersionControl.VersionControlObject.html).


            
