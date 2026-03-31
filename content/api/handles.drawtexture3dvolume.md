This version of Unity is unsupported.



# [Handles](Handles.html).DrawTexture3DVolume




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

public static void DrawTexture3DVolume([Texture](Texture.html) texture,
float opacity = 1.0f,
float qualityModifier = 1.0f,
[FilterMode](FilterMode.html) filterMode = FilterMode.Bilinear,
bool useColorRamp = false,
[Gradient](Gradient.html) customColorRamp = null);






### Parameters



| Parameter | Description |
| --- | --- |
| texture | The volumetric texture to draw. |
| opacity | The non-linear volume opacity modifier. Use this to control the opacity of the visualization. Valid values are 0-1, inclusive. A value of 1 is fully opaque and a value of 0 is fully transparent. The default value is 1. |
| qualityModifier | Sets the sample per texture pixel count. Higher values result in a higher quality render. The default value is 1. |
| filterMode | Sets the texture filtering mode to use. |
| useColorRamp | Enables color ramp visualization. |
| customColorRamp | The custom gradient that Unity uses as a color ramp. If this is not specified, Unity uses Google Turbo color ramp. |





### Description



Draws a 3D texture using Volume rendering mode in 3D space.





[Image: image]


*Teapot volume rendered with a gradient that has a transparent black outline.*

[Image: image]

*Noise volume with fire gradient applied.*


              


```
using UnityEditor;
using UnityEngine;[ExecuteInEditMode]
public class Reference : MonoBehaviour
{
    public Texture3D texture;
    public float alpha = 1;
    public float quality = 1;
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
                Handles.DrawTexture3DVolume(reference.texture, reference.alpha, reference.quality, reference.filterMode,
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





Additional resources: [Handles.DrawTexture3DSDF](Handles.DrawTexture3DSDF.html), [Handles.DrawTexture3DSlice](Handles.DrawTexture3DSlice.html), [Texture3D](Texture3D.html), [Gradient](Gradient.html).


            
