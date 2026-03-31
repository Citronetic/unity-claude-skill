This version of Unity is unsupported.



# [AnimationCurve](AnimationCurve.html).GetKeys




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

public void GetKeys(Span<Keyframe> keys);






### Parameters



| Parameter | Description |
| --- | --- |
| keys | Keyframe array to copy the keys into. |





### Description



Get all keys defined in the AnimationCurve.





This lets you clear, add or remove any keys from the array.
If keys are not sorted by time, they will be automatically sorted on assignment.

Note that the array is "by value", i.e. getting keys returns a copy of all keys.

Additional resources: [Keyframe](Keyframe.html) struct, [AddKey](AnimationCurve.AddKey.html), [RemoveKey](AnimationCurve.RemoveKey.html) functions.


              


```
using UnityEngine;
using Unity.Collections;public class AnimCurveExample : MonoBehaviour
{
    public AnimationCurve curve;    void Start()
    {
        curve = new AnimationCurve(new Keyframe(0, 0), new Keyframe(1, 1));
        var keys = new NativeArray<Keyframe>(curve.length, Allocator.Temp);
        curve.GetKeys(keys);
    }
}
```


            
