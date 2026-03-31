This version of Unity is unsupported.



# EditorCurveBinding





struct in
          UnityEditor


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



Identifies an animatable property on a [Component](Component.html) or [GameObject](GameObject.html).





The [AnimationWindow](AnimationWindow.html) uses editor curve binding to identify animation properties. This makes clip authoring possible.

You can use this binding to get, set or replace a curve in an [AnimationClip](AnimationClip.html) when clip authoring. To do this, use the [AnimationUtility.GetCurveBindings](AnimationUtility.GetCurveBindings.html) and [AnimationUtility.GetObjectReferenceCurveBindings](AnimationUtility.GetObjectReferenceCurveBindings.html) methods to retrieve the array of the animated bindings for an [AnimationClip](AnimationClip.html). For a single property, use  [AnimationUtility.GetEditorCurve](AnimationUtility.GetEditorCurve.html) or [AnimationUtility.GetObjectReferenceCurve](AnimationUtility.GetObjectReferenceCurve.html) to retrieve the curve identified by the editor curve binding of an [AnimationClip](AnimationClip.html). Use the [AnimationUtility.SetEditorCurve](AnimationUtility.SetEditorCurve.html) or [AnimationUtility.SetObjectReferenceCurve](AnimationUtility.SetObjectReferenceCurve.html) to set the curve.
When recording live animation with the [GameObjectRecorder](Animations.GameObjectRecorder.html), use the [GameObjectRecorder.Bind](Animations.GameObjectRecorder.Bind.html) method to bind a GameObject property identified by an editor curve binding.

Additional resources: [AnimationUtility](AnimationUtility.html) [GameObjectRecorder](Animations.GameObjectRecorder.html).


              


```
using UnityEditor;
using UnityEngine;

public static class EditorCurveBindingExample
{
    // Change these values to match the prefix you want to remove and add.
    // For example, properties with paths "", "Hips", "Hips/LeftLeg",
    // are moved to "Root", "Root/Hips", "Root/Hips/LeftLeg".
    private const string k_PrefixToRemove = "";
    private const string k_PrefixToAdd = "Root";

    // This example moves the animated properties parented to `prefixToRemove` to
    // new properties parented to `prefixToAdd` on a selected animation clip.
    [MenuItem("Example/Reparent Animated Properties On Selected Animation Clip")]
    static void ReparentAnimatedPropertiesOnSelectedAnimationClip()
    {
        var clip = Selection.activeObject as AnimationClip;
        if (clip == null)
        {
            Debug.LogError("No animation clip selected.");
            return;
        }

        var clipBindings = AnimationUtility.GetCurveBindings(clip);

        foreach (var binding in clipBindings)
        {
            if (binding.path.StartsWith(k_PrefixToRemove))
            {
                var newBinding = binding;
                newBinding.path = binding.path.Substring(k_PrefixToRemove.Length);
                if (newBinding.path.StartsWith('/'))
                    newBinding.path = newBinding.path.Substring(1);

                if (string.IsNullOrEmpty(newBinding.path))
                    newBinding.path = k_PrefixToAdd;
                else if (!string.IsNullOrEmpty(k_PrefixToAdd))
                    newBinding.path = k_PrefixToAdd + "/" + newBinding.path;

                var curve = AnimationUtility.GetEditorCurve(clip, binding);

                // You rename curves by removing the old curve and adding a new one
                // with a new binding. You can also use the
                // AnimationUtility.SetEditorCurves method to set multiple curves at once.
                AnimationUtility.SetEditorCurve(clip, binding, null);
                AnimationUtility.SetEditorCurve(clip, newBinding, curve);
            }
        }

        AssetDatabase.SaveAssetIfDirty(clip);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| isDiscreteCurve | Returns true if the binding is a discrete curve. Returns false otherwise. (Read Only) |
| isPPtrCurve | Returns true if the binding is an object curve. Returns false otherwise (Read Only) |
| isSerializeReferenceCurve | Returns true if the binding is to a curve that points to field on a SerializeReference instance. Returns false otherwise. (Read Only) |
| path | The transform path of the object that is animated. |
| propertyName | The name of the property to be animated. |
| type | The type of the property to be animated. |





### Static Methods



| Method | Description |
| --- | --- |
| DiscreteCurve | Creates a preconfigured binding for a curve where values should not be interpolated. |
| FloatCurve | Creates a preconfigured binding for a float curve. |
| PPtrCurve | Creates a preconfigured binding for a curve that points to an Object. |
| SerializeReferenceCurve | Creates a preconfigured binding for a curve that points to a SerializeReference instance field. |


            
