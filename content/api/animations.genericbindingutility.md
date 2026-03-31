This version of Unity is unsupported.



# GenericBindingUtility





class in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



















### Description



Animation utility functions for reading and writing values from Unity components.


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Animations;
using UnityEditor;
using Unity.Collections;
using System.Linq;public class AnimationClipPlayer : MonoBehaviour
{
    public AnimationClip        animationClip;
    public float                time;    List<AnimationCurve>        curves;    NativeArray<BoundProperty>  floatProperties;
    NativeArray<BoundProperty>  intProperties;
    NativeArray<float>          floatValues;
    NativeArray<int>            intValues;    void Start()
    {
        var editorCurveBindings = AnimationUtility.GetCurveBindings(animationClip);
        editorCurveBindings = editorCurveBindings.Where(editorCurveBinding =>
            editorCurveBinding.type != typeof(Transform) && !editorCurveBinding.isPPtrCurve && !editorCurveBinding.isDiscreteCurve
            ).ToArray();        curves = new List<AnimationCurve>(editorCurveBindings.Length);
        for (var i = 0; i < editorCurveBindings.Length; i++)
        {
            curves.Add(AnimationUtility.GetEditorCurve(animationClip, editorCurveBindings[i]));
        }        var genericBindings = new NativeArray<GenericBinding>(AnimationUtility.EditorCurveBindingsToGenericBindings(editorCurveBindings), Allocator.Temp);
        GenericBindingUtility.BindProperties(gameObject, genericBindings, out floatProperties, out intProperties, Allocator.Persistent);        floatValues = new NativeArray<float>(floatProperties.Length, Allocator.Persistent);
        intValues = new NativeArray<int>(intProperties.Length, Allocator.Persistent);
    }    private void OnDestroy()
    {
        floatProperties.Dispose();
        floatValues.Dispose();
        intProperties.Dispose();
        intValues.Dispose();
    }    // Update is called once per frame
    void Update()
    {
        for (int i = 0; i < curves.Count; i++)
        {
            floatValues[i] = curves[i].Evaluate(time);
        }        GenericBindingUtility.SetValues(floatProperties, floatValues);
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| BindProperties | Retrieves the list of BoundProperty defined by the list of GenericBinding. |
| CreateGenericBinding | Retrieves the GenericBinding that represents a specific property associated with a GameObject or one of its components. |
| GetAnimatableBindings | Retrieves the animatable bindings for a specific GameObject. |
| GetCurveBindings | Retrieves the curve bindings from an animation clip. |
| GetValues | Retrieves the float or integer value for each [[BoundProperty]. |
| SetValues | Sets the float or integer value for each [[BoundProperty]. |
| UnbindProperties | Unbinds and frees all resources used by a list of BoundProperty. |


            
