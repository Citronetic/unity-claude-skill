This version of Unity is unsupported.



# Keyframe Constructor




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

public Keyframe(float time,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| time | Keyframe.time of the Keyframe. |
| value | Keyframe.value of the Keyframe. |





### Description



Creates a keyframe with a [Keyframe.weightedMode](Keyframe-weightedMode.html) defaulting to [WeightedMode.None](WeightedMode.None.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Make a GameObject follow a sine function.
    // Over the X and Y axis.    AnimationCurve anim;
    Keyframe[] ks;    void Start()
    {
        ks = new Keyframe[50];
        for (var i = 0; i < ks.Length; i++)
        {
            ks[i] = new Keyframe(i, Mathf.Sin(i));
        }
        anim = new AnimationCurve(ks);
    }    void Update()
    {
        transform.position = new Vector3(Time.time, anim.Evaluate(Time.time), 0);
    }
}
```




---








## Declaration

public Keyframe(float time,
float value,
float inTangent,
float outTangent);






### Parameters



| Parameter | Description |
| --- | --- |
| time | Keyframe.time of the Keyframe. |
| value | Keyframe.value of the Keyframe. |
| inTangent | Keyframe.inTangent value for this Keyframe. |
| outTangent | Keyframe.outTangent value for this Keyframe. |





### Description



Creates a keyframe with a [Keyframe.weightedMode](Keyframe-weightedMode.html) defaulting to [WeightedMode.None](WeightedMode.None.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Make a GameObject follow a sine function.
    // Over the X and Y axis.    AnimationCurve anim;
    Keyframe[] ks;    void Start()
    {
        ks = new Keyframe[50];
        for (var i = 0; i < ks.Length; i++)
        {
            ks[i] = new Keyframe(i, Mathf.Sin(i), 90f, 90f);
        }
        anim = new AnimationCurve(ks);
    }    void Update()
    {
        transform.position = new Vector3(Time.time, anim.Evaluate(Time.time), 0);
    }
}
```




---








## Declaration

public Keyframe(float time,
float value,
float inTangent,
float outTangent,
float inWeight,
float outWeight);






### Parameters



| Parameter | Description |
| --- | --- |
| time | Keyframe.time of the Keyframe. |
| value | Keyframe.value of the Keyframe. |
| inTangent | Keyframe.inTangent value for this Keyframe. |
| outTangent | Keyframe.outTangent value for this Keyframe. |
| inWeight | Keyframe.inWeight value for this Keyframe. |
| outWeight | Keyframe.outWeight value for this Keyframe. |





### Description



Creates a keyframe with a [Keyframe.weightedMode](Keyframe-weightedMode.html) defaulting to [WeightedMode.Both](WeightedMode.Both.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Make a GameObject follow a sine function.
    // Over the X and Y axis.    AnimationCurve anim;
    Keyframe[] ks;    void Start()
    {
        ks = new Keyframe[50];
        for (var i = 0; i < ks.Length; i++)
        {
            ks[i] = new Keyframe(i, Mathf.Sin(i), 0f, 0f, 0f, 0f);
        }
        anim = new AnimationCurve(ks);
    }    void Update()
    {
        transform.position = new Vector3(Time.time, anim.Evaluate(Time.time), 0f);
    }
}
```


            
