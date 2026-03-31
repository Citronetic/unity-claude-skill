This version of Unity is unsupported.



# [EditorAction](Actions.EditorAction.html).OnSceneGUI




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

public void OnSceneGUI([SceneView](SceneView.html) sceneView);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneView | The Scene view that Actions.EditorAction.OnSceneGUI is called in. |





### Description



Callback raised when the Scene view calls OnGUI.





Use this method to implement any handles or interactive code. This is equivalent in functionality to [EditorTool.OnToolGUI](EditorTools.EditorTool.OnToolGUI.html).


              


```
using System;
using UnityEditor;
using UnityEditor.Actions;
using UnityEditor.Overlays;
using UnityEngine;
using UnityEngine.UIElements;

public class EditorActionSampleOverlay : Overlay
{
    Vector3Field m_Field;

    public Action<Vector3> positionChanged;

    public void SetPosition(Vector3 position)
    {
        m_Field?.SetValueWithoutNotify(position);
    }

    public override VisualElement CreatePanelContent()
    {
        m_Field = new Vector3Field();
        m_Field.RegisterValueChangedCallback((evt) => positionChanged?.Invoke(evt.newValue));
        return m_Field;
    }
}

public class EditorActionSample : EditorAction
{
    [MenuItem("Test/Start Action Sample")]
    static void StartEditorActionSample()
    {
        Start(new EditorActionSample());
    }

    public Vector3 handlePosition = Vector3.zero;

    EditorActionSampleOverlay m_Overlay;

    public EditorActionSample()
    {
        // Create the overlay when the action is created
        m_Overlay = new EditorActionSampleOverlay();
        m_Overlay.SetPosition(handlePosition);
        m_Overlay.positionChanged += (value) => handlePosition = value;
        SceneView.AddOverlayToActiveView(m_Overlay);
        m_Overlay.displayed = true;
    }

    protected override void OnFinish(EditorActionResult result)
    {
        // Remove the overlay when the action is finished
        SceneView.RemoveOverlayFromActiveView(m_Overlay);

        Debug.Log($"Action Finished [{result}] with position: {handlePosition}");
    }

    public override void OnSceneGUI(SceneView sceneView)
    {
        EditorGUI.BeginChangeCheck();
        handlePosition = Handles.PositionHandle(handlePosition, Quaternion.identity);

        if (EditorGUI.EndChangeCheck())
        {
            m_Overlay.SetPosition(handlePosition);
        }
    }
}
```


            
