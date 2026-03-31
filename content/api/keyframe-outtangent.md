This version of Unity is unsupported.



# [Keyframe](Keyframe.html).outTangent




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












                    public float outTangent;






### Description



Sets the outgoing tangent for this key. The outgoing tangent affects the slope of the curve from this key to the next key.





The outgoing tangent matches the outgoing slope of the curve. A positive value for [inTangent](Keyframe-inTangent.html) results in an upward tangent, while a negative value results in a downward tangent.

Additional resources: [inTangent](Keyframe-inTangent.html).


              


```
using UnityEngine;public class KeyFrameTangentExample : MonoBehaviour
{
    AnimationCurve  animCurve = null;    void Start()
    {
        Keyframe[] ks = new Keyframe[3];        ks[0] = new Keyframe(0f, 0f);
        ks[0].outTangent = 5f;    // +5 units on the vertical axis for 1 unit on the horizontal axis.        ks[1] = new Keyframe(4f, 0f);
        ks[1].outTangent = 0f;    // straight        ks[2] = new Keyframe(6f, 0f);
        ks[2].outTangent = -5f;    // -5 units on the vertical axis for 1 unit on the horizontal axis.        animCurve = new AnimationCurve(ks);
    }    void Update()
    {
        if (animCurve != null)
            transform.position = new Vector3(Time.time, animCurve.Evaluate(Time.time), 0f);
    }
}
```


            
