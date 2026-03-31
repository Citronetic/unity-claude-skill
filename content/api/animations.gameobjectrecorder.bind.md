This version of Unity is unsupported.



# [GameObjectRecorder](Animations.GameObjectRecorder.html).Bind




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

public void Bind([EditorCurveBinding](EditorCurveBinding.html) binding);






### Parameters



| Parameter | Description |
| --- | --- |
| binding | The binding definition. |





### Description



Binds a GameObject's property as defined by [EditorCurveBinding](EditorCurveBinding.html).





Use this function to bind a specific GameObject's property. The binding is defined in [EditorCurveBinding](EditorCurveBinding.html). See the following example on binding the `MeshRenderer.m_Enabled` property.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var recorder = new GameObjectRecorder(gameObject);        // Add a binding on the position on X axis.
        EditorCurveBinding binding = EditorCurveBinding.FloatCurve("", typeof(Transform), "m_LocalPosition.x");
        recorder.Bind(binding);        // Add a binding on the activation of the MeshRenderer component.
        binding = EditorCurveBinding.FloatCurve("", typeof(MeshRenderer), "m_Enabled");
        recorder.Bind(binding);
    }
}
```


            
