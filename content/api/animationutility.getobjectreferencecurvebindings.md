This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetObjectReferenceCurveBindings




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

public static EditorCurveBinding[] GetObjectReferenceCurveBindings([AnimationClip](AnimationClip.html) clip);






### Description



Retrieves the object reference curve bindings stored in the animation clip.





Use this method to find which object reference properties are animatable.

Unity has two types of animation: float curve and object reference curve. A float curve is a classic curve that animates a float property over time. An object reference curve is a construct that animates an object reference property over time.

This method only retrieves the object reference curve bindings. See [AnimationUtility.GetCurveBindings](AnimationUtility.GetCurveBindings.html) for float curves.


              


```
using UnityEditor;
using UnityEngine;// Editor window for listing all object reference curves in an animation clip
public class ClipInfo : EditorWindow
{
    private AnimationClip clip;    [MenuItem("Window/Clip Info")]
    static void Init()
    {
        GetWindow(typeof(ClipInfo));
    }    public void OnGUI()
    {
        clip = EditorGUILayout.ObjectField("Clip", clip, typeof(AnimationClip), false) as AnimationClip;        EditorGUILayout.LabelField("Object reference curves:");
        if (clip != null)
        {
            foreach (var binding in AnimationUtility.GetObjectReferenceCurveBindings(clip))
            {
                ObjectReferenceKeyframe[] keyframes = AnimationUtility.GetObjectReferenceCurve(clip, binding);
                EditorGUILayout.LabelField(binding.path + "/" + binding.propertyName + ", Keys: " + keyframes.Length);
            }
        }
    }
}
```


            
