This version of Unity is unsupported.



# AnimationCurve Constructor




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

public AnimationCurve(params Keyframe[] keys);






### Parameters



| Parameter | Description |
| --- | --- |
| keys | An array of Keyframes used to define the curve. |





### Description



Creates an animation curve from an arbitrary number of keyframes.





This creates a curve from variable number of [Keyframe](Keyframe.html) parameters. If you want to create curve
from an array of keyframes, create an empty curve and assign [keys](AnimationCurve-keys.html) property.


              


```
using UnityEngine;
using System.Collections;public class AnimCurveExample : MonoBehaviour
{
    public AnimationCurve curve;    void Start()
    {
        curve = new AnimationCurve(new Keyframe(0, 0), new Keyframe(1, 1));
        curve.preWrapMode = WrapMode.PingPong;
        curve.postWrapMode = WrapMode.PingPong;
    }    void Update()
    {
        transform.position = new Vector3(transform.position.x, curve.Evaluate(Time.time), transform.position.z);
    }
}
```




---








## Declaration

public AnimationCurve();






### Description



Creates an empty animation curve.


            
