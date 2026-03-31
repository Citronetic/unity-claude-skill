This version of Unity is unsupported.



# ObjectReferenceKeyframe





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



Keyframe to an Object reference.





Use an object reference keyframe to create an array of Object references. An [AnimationClip](AnimationClip.html) uses an array of Object references to animate properties.

Use the [AnimationUtility.SetObjectReferenceCurve](AnimationUtility.SetObjectReferenceCurve.html) and [AnimationUtility.SetObjectReferenceCurves](AnimationUtility.SetObjectReferenceCurves.html) methods to assign [ObjectReferenceKeyframe](ObjectReferenceKeyframe.html) arrays of Object reference properties to an [AnimationClip](AnimationClip.html). Use the [AnimationUtility.GetObjectReferenceCurve](AnimationUtility.GetObjectReferenceCurve.html) method to retrieve an [ObjectReferenceKeyframe](ObjectReferenceKeyframe.html) array for an Object reference property.

Additional resources: [AnimationClip](AnimationClip.html) [AnimationUtility.SetObjectReferenceCurve](AnimationUtility.SetObjectReferenceCurve.html) [AnimationUtility.SetObjectReferenceCurves](AnimationUtility.SetObjectReferenceCurves.html)
[AnimationUtility.GetObjectReferenceCurve](AnimationUtility.GetObjectReferenceCurve.html).


              


```
using UnityEditor;
using UnityEngine;

static class AnimationClipWithObjectReferenceKeyframesExample
{
    // This example creates an AnimationClip of a sequence of sprites selected
    // in the project view. The clip is saved as an asset in the project.
    [MenuItem("Example/Create Flip Book Animation Clip From Sprites")]
    static void CreateFlipBookAnimationClipFromSprites()
    {
        var selectedSprites = Selection.GetFiltered<Sprite>(SelectionMode.Unfiltered);
        if (selectedSprites == null || selectedSprites.Length == 0)
        {
            Debug.LogError("Please select sprites in the project view to create a clip for.");
            return;
        }

        AnimationClip clip = new AnimationClip();

        var spriteCurve = new ObjectReferenceKeyframe[selectedSprites.Length];
        for (int i = 0; i < selectedSprites.Length; ++i)
        {
            var sprite = selectedSprites[i];
            spriteCurve[i] = new ObjectReferenceKeyframe
            {
                time = i/clip.frameRate,
                value = sprite
            };
        }

        var spriteBinding = EditorCurveBinding.PPtrCurve("", typeof(SpriteRenderer), "m_Sprite");
        AnimationUtility.SetObjectReferenceCurve(clip, spriteBinding, spriteCurve);

        AssetDatabase.CreateAsset(clip, AssetDatabase.GenerateUniqueAssetPath($"Assets/FlipBookClip.anim"));
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| time | The time of the keyframe. |
| value | The Object reference value of the keyframe. |


            
