This version of Unity is unsupported.



# [AnimationCurve](AnimationCurve.html).SetKeys




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

public void SetKeys(ReadOnlySpan<Keyframe> keys);






### Parameters



| Parameter | Description |
| --- | --- |
| keys | Keyframe array to assign to the AnimationCurve. |





### Description



Set all keys defined in the AnimationCurve.





This lets you clear, add or remove any keys from the array.
If keys are not sorted by time, they will be automatically sorted on assignment.

Note that the array is "by value", i.e. setting keys copies them into the curve.

Additional resources: [Keyframe](Keyframe.html) struct, [AddKey](AnimationCurve.AddKey.html), [RemoveKey](AnimationCurve.RemoveKey.html) functions.


              


```
using UnityEngine;
using Unity.Collections;public class AnimCurveExample : MonoBehaviour
{
    public AnimationCurve curve;    void Start()
    {
        curve = new AnimationCurve();
        var keys = new NativeArray<Keyframe>(2, Allocator.Temp);
        keys[0] = new Keyframe(0, 0);
        keys[1] = new Keyframe(1, 1);
        curve.SetKeys(keys);
    }
}
```


            
