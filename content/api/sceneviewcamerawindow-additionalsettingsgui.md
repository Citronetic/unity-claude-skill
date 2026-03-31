This version of Unity is unsupported.



# [SceneViewCameraWindow](SceneViewCameraWindow.html).additionalSettingsGui




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | The SceneView that opened the SceneViewCameraWindow window. |





### Description



Subscribe to this event to receive a callback when the [SceneViewCameraWindow.OnGUI](SceneViewCameraWindow.OnGUI.html) function is called.


              


```
using UnityEditor;
using UnityEngine;[InitializeOnLoad]
static class AdditionalCameraSettings
{
    static AdditionalCameraSettings()
    {
        SceneViewCameraWindow.additionalSettingsGui += DoAdditionalCameraSettings;
    }    static void DoAdditionalCameraSettings(SceneView sceneView)
    {
        GUILayout.Label("Additional Settings", EditorStyles.boldLabel);        float easing = sceneView.cameraSettings.easingDuration;        EditorGUI.BeginChangeCheck();        easing = EditorGUILayout.Slider("Easing Duration", easing, 0.001f, 1f);        if (EditorGUI.EndChangeCheck())
            sceneView.cameraSettings.easingDuration = easing;
    }
}
```


            
