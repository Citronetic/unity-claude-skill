This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetCurveBindings




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

public static EditorCurveBinding[] GetCurveBindings([AnimationClip](AnimationClip.html) clip);






### Description



Retrieves the float curve bindings in an animation clip.





Unity has two types of animation: float curve and object reference curve. A float curve is a classic curve that animates a float property over time. An object reference curve is a construct that animates an object reference property over time.

This method returns the float curve bindings. See [AnimationUtility.GetObjectReferenceCurveBindings](AnimationUtility.GetObjectReferenceCurveBindings.html) for object reference curves.


              


```
using UnityEditor;
using UnityEngine;// Editor window for listing all float curves in an animation clip
public class ClipInfo : EditorWindow
{
    private AnimationClip clip;    [MenuItem("Window/Clip Info")]
    static void Init()
    {
        GetWindow(typeof(ClipInfo));
    }    public void OnGUI()
    {
        clip = EditorGUILayout.ObjectField("Clip", clip, typeof(AnimationClip), false) as AnimationClip;        EditorGUILayout.LabelField("Curves:");
        if (clip != null)
        {
            foreach (var binding in AnimationUtility.GetCurveBindings(clip))
            {
                AnimationCurve curve = AnimationUtility.GetEditorCurve(clip, binding);
                EditorGUILayout.LabelField(binding.path + "/" + binding.propertyName + ", Keys: " + curve.keys.Length);
            }
        }
    }
}
```


            
