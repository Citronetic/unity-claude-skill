This version of Unity is unsupported.



# [Keyframe](Keyframe.html).outWeight




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












                    public float outWeight;






### Description



Sets the outgoing weight for this key. The outgoing weight affects the slope of the curve from this key to the next key.





The weight is a value between 0 and 1. Set [weightedMode](Keyframe-weightedMode.html) to [WeightedMode.Out](WeightedMode.Out.html) or [WeightedMode.Both](WeightedMode.Both.html) to include weight when calculating the slope of the outgoing curve.

Additional resources: [inWeight](Keyframe-inWeight.html).


              


```
using UnityEngine;public class KeyFrameWeightExample : MonoBehaviour
{
    AnimationCurve  animCurve = null;    void Start()
    {
        Keyframe[] ks = new Keyframe[3];        ks[0] = new Keyframe(0f, 0f);
        ks[0].weightedMode = WeightedMode.Out;
        ks[0].outWeight = 0.5f;        ks[1] = new Keyframe(4f, 0f);
        ks[1].weightedMode = WeightedMode.Out;
        ks[1].outWeight = 0f;    // Zero weight.  The segment will be linear if next keyframe inWeight is also zero.        ks[2] = new Keyframe(6f, 0f);
        ks[2].weightedMode = WeightedMode.Out;
        ks[2].outWeight = 1f / 3f;    // 1/3 is the default weight in WeightedMode.None weightedMode.        animCurve = new AnimationCurve(ks);
    }    void Update()
    {
        if (animCurve != null)
            transform.position = new Vector3(Time.time, animCurve.Evaluate(Time.time), 0f);
    }
}
```


            
