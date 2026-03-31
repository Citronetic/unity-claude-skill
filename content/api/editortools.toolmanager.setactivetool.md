This version of Unity is unsupported.



# [ToolManager](EditorTools.ToolManager.html).SetActiveTool




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

public static void SetActiveTool();






## Declaration

public static void SetActiveTool(Type type);






## Declaration

public static void SetActiveTool([EditorTools.EditorTool](EditorTools.EditorTool.html) tool);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The EditorTool type to set as the active tool. |
| tool | The EditorTool instance to set as the active tool. |





### Description



Sets the active [EditorTool](EditorTools.EditorTool.html).





To set a built-in tool, such as Move, Rotate, or Scale, to active, use [Tools.current](Tools-current.html) instead.


              


```
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine;

class ToolToSetActive : EditorTool
{
    [MenuItem("Tools/Set Active Tool Type")]
    static void SetActiveToolExample()
    {
        ToolManager.SetActiveTool<ToolToSetActive>();
    }

    Vector3 m_Position;

    public override void OnToolGUI(EditorWindow window)
    {
        m_Position = Handles.PositionHandle(m_Position, Quaternion.identity);
        Debug.Log(m_Position);
    }
}
```


            
