This version of Unity is unsupported.



# [Keyframe](Keyframe.html).inTangent




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












                    public float inTangent;






### Description



Sets the incoming tangent for this key. The incoming tangent affects the slope of the curve from the previous key to this key.





The incoming tangent matches the incoming slope of the curve. A positive value for [inTangent](Keyframe-inTangent.html) results in a downward tangent, while a negative value results in an upward tangent.

Additional resources: [outTangent](Keyframe-outTangent.html).


              


```
using UnityEngine;public class KeyFrameTangentExample : MonoBehaviour
{
    AnimationCurve  animCurve = null;    void Start()
    {
        Keyframe[] ks = new Keyframe[3];        ks[0] = new Keyframe(0f, 0f);
        ks[0].inTangent = 5f;    // -5 units on the vertical axis for 1 unit on the horizontal axis.        ks[1] = new Keyframe(4f, 0f);
        ks[1].inTangent = 0f;    // straight        ks[2] = new Keyframe(6f, 0f);
        ks[2].inTangent = -5f;    // +5 units on the vertical axis for 1 unit on the horizontal axis.        animCurve = new AnimationCurve(ks);
    }    void Update()
    {
        if (animCurve != null)
            transform.position = new Vector3(Time.time, animCurve.Evaluate(Time.time), 0f);
    }
}
```


            
