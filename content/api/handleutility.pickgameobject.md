This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).PickGameObject




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

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
out int materialIndex);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
GameObject[] ignore,
out int materialIndex);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
GameObject[] ignore,
GameObject[] selection,
out int materialIndex);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
bool selectPrefabRoot);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
bool selectPrefabRoot,
GameObject[] ignore);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
bool selectPrefabRoot,
GameObject[] ignore,
GameObject[] filter);






## Declaration

public static [GameObject](GameObject.html) PickGameObject([Vector2](Vector2.html) position,
bool selectPrefabRoot,
GameObject[] ignore,
GameObject[] filter,
out int materialIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| selectPrefabRoot | Select Prefab. |
| materialIndex | Returns index into material array of the Renderer component that is closest to specified position. |
| position | A position in screen coordinates. The top-left of the window is (0,0), and the bottom-right is (Screen.width, Screen.height). |
| ignore | An array of GameObjects that will not be considered when selecting the nearest GameObject. |
| filter | An array of GameObjects to be exclusively considered for selection. If null, all GameObjects in open scenes are eligible for selection. |
| selection | An array of GameObjects to be exclusively considered for selection. If null, all GameObjects in open scenes are eligible for selection. |





### Returns



**GameObject**
        The GameObject that is under the requested position.





### Description



Pick game object closest to specified position.





HandleUtility.PickGameObject must not be called during a repaint. In most cases it is appropriate to call during [EventType.MouseDown](EventType.MouseDown.html) or [EventType.MouseUp](EventType.MouseUp.html).


              


```
using UnityEditor;
using UnityEngine;static class ShowHovered
{
    static GameObject m_LastHoveredObject, m_LastClickedObject;    [InitializeOnLoadMethod]
    static void Init()
    {
        SceneView.duringSceneGui += OnSceneGUI;
    }    static void OnSceneGUI(SceneView view)
    {
        var evt = Event.current;        // Register a control so that if no other handle is engaged, we can use the event.
        var pickingControlId = GUIUtility.GetControlID(FocusType.Passive);
        HandleUtility.AddDefaultControl(pickingControlId);        switch (evt.type)
        {
            case EventType.MouseMove:
            {
                var picked = HandleUtility.PickGameObject(evt.mousePosition, false);                if (picked != m_LastHoveredObject)
                {
                    m_LastHoveredObject = picked;
                    SceneView.RepaintAll();
                }                break;
            }            case EventType.MouseDown:
            {
                // Make sure to check Tools.viewToolActive before consuming a mouse event, otherwise Scene navigation
                // controls will not work.
                if (!Tools.viewToolActive && HandleUtility.nearestControl == pickingControlId)
                {
                    GUIUtility.hotControl = pickingControlId;
                    evt.Use();
                }                break;
            }            case EventType.MouseUp:
            {
                // If the hotControl is not pickingControlId, that means another control has the rights to this event.
                if (GUIUtility.hotControl != pickingControlId)
                    return;                var picked = HandleUtility.PickGameObject(evt.mousePosition, false);                if (picked != m_LastClickedObject)
                {
                    m_LastClickedObject = picked;
                    SceneView.RepaintAll();
                }                // Make sure to Use() and reset the hotControl the event if we are the active control ID.
                evt.Use();
                GUIUtility.hotControl = 0;
                break;
            }
        }        Handles.BeginGUI();
        GUILayout.BeginVertical(EditorStyles.helpBox, GUILayout.ExpandWidth(false));
        GUILayout.Label($"Last Hovered Object: {m_LastHoveredObject}");
        GUILayout.Label($"Last Clicked Object: {m_LastClickedObject}");
        GUILayout.EndVertical();
        Handles.EndGUI();
    }
}
```


            
