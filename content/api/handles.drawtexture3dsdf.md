This version of Unity is unsupported.



# [Handles](Handles.html).DrawTexture3DSDF




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

public static void DrawTexture3DSDF([Texture](Texture.html) texture,
float stepScale = 1.0f,
float surfaceOffset = 0.0f,
[Gradient](Gradient.html) customColorRamp = null);






### Parameters



| Parameter | Description |
| --- | --- |
| texture | The volumetric texture to draw. |
| stepScale | The number by which to multiply the ray step size. The ray step size is the distance between 2 neighboring pixels. The default value is 1. |
| surfaceOffset | The intensity of the pixels at which the surface is rendered. When this value is positive, Unity will expand the rendered surface. When this value is negative, Unity will render empty space as a surface, and a surface as empty space. The default value is 0. |
| customColorRamp | The custom gradient that Unity uses as a color ramp. If this is not specified, Unity uses Google Turbo color ramp. |





### Description



Draws a 3D texture using Signed Distance Field rendering mode in 3D space.





This visualization mode supports only non-directional Signed Distance Fields.

[Image: image]

*Corridor SDF visualized using Google Turbo color ramp.*


              


```
using UnityEditor;
using UnityEngine;[ExecuteInEditMode]
public class Reference : MonoBehaviour
{
    public Texture3D texture;
    public float stepScale = 1;
    public float surfaceOffset;
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
                Handles.DrawTexture3DSDF(reference.texture, reference.stepScale, reference.surfaceOffset,
                    reference.useCustomColorRamp ? reference.customColorRampGradient : null);
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





Additional resources: [Handles.DrawTexture3DSlice](Handles.DrawTexture3DSlice.html), [Handles.DrawTexture3DVolume](Handles.DrawTexture3DVolume.html), [Texture3D](Texture3D.html), [Gradient](Gradient.html).


            
