This version of Unity is unsupported.



# [Handles](Handles.html).DrawTexture3DSlice




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

public static void DrawTexture3DSlice([Texture](Texture.html) texture,
[Vector3](Vector3.html) slicePositions,
[FilterMode](FilterMode.html) filterMode = FilterMode.Bilinear,
bool useColorRamp = false,
[Gradient](Gradient.html) customColorRamp = null);






### Parameters



| Parameter | Description |
| --- | --- |
| texture | The volumetric texture to draw. |
| slicePositions | The positions of the texture sampling planes. |
| filterMode | Sets the texture filtering mode to use. |
| useColorRamp | Enables color ramp visualization. |
| customColorRamp | The custom gradient that Unity uses as a color ramp. If this is not specified, Unity uses Google Turbo color ramp. |





### Description



Draws a 3D texture using Slice rendering mode in 3D space.





[Image: image]


*Head scan rendered in slice mode with a custom gradient.*


              


```
using UnityEditor;
using UnityEngine;[ExecuteInEditMode]
public class Reference : MonoBehaviour
{
    public Texture3D texture;
    public Vector3 slicePositions;
    public FilterMode filterMode;
    public bool useColorRamp;
    public bool useCustomColorRamp;    // We should initialize this gradient before using it as a custom color ramp
    public Gradient customColorRampGradient;
}[CanEditMultipleObjects]
[CustomEditor(typeof(Reference))]
public class Handle : Editor
{
    private void OnSceneViewGUI(SceneView sv)
    {
        Object[] objects = targets;
        foreach (var obj in objects)
        {
            Reference reference = obj as Reference;
            if (reference != null && reference.texture != null)
            {
                Handles.matrix = reference.transform.localToWorldMatrix;
                Handles.DrawTexture3DSlice(reference.texture, reference.slicePositions, reference.filterMode,
                    reference.useColorRamp, reference.useCustomColorRamp ? reference.customColorRampGradient : null);
            }
        }
    }    void OnEnable()
    {
        SceneView.duringSceneGui += OnSceneViewGUI;
    }    void OnDisable()
    {
        SceneView.duringSceneGui -= OnSceneViewGUI;
    }
}
```





Additional resources: [Handles.DrawTexture3DSDF](Handles.DrawTexture3DSDF.html), [Handles.DrawTexture3DVolume](Handles.DrawTexture3DVolume.html), [Texture3D](Texture3D.html), [Gradient](Gradient.html).


            
