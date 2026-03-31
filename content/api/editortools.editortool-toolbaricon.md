This version of Unity is unsupported.



# [EditorTool](EditorTools.EditorTool.html).toolbarIcon




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












                    public [GUIContent](GUIContent.html) toolbarIcon;






### Description



The icon and tooltip for this custom editor tool. If this function is not implemented, the toolbar displays the Inspector icon for the target type. If no target type is defined, the toolbar displays the Tool Mode icon.





This property is accessed frequently, so load the icon's [GUIContent](GUIContent.html) in [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html).


              


```
using UnityEditor.EditorTools;
using UnityEngine;

public class ToolbarIconSample : MonoBehaviour {}

[EditorTool("Toolbar Icon Sample Tool", typeof(ToolbarIconSample))]
class ToolbarIconSampleTool : EditorTool
{
    GUIContent m_Icon;

    public override GUIContent toolbarIcon => m_Icon;

    private void OnEnable()
    {
        m_Icon = new GUIContent("Text Icon", "Toolbar Icon Sample Tool tooltip.");
    }

    private void OnDisable()
    {
        m_Icon = null;
    }
}
```


            
