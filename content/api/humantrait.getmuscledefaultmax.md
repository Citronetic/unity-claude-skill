This version of Unity is unsupported.



# [HumanTrait](HumanTrait.html).GetMuscleDefaultMax




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

public static float GetMuscleDefaultMax(int i);






### Parameters



| Parameter | Description |
| --- | --- |
| i | Muscle index. |





### Description



Get the default maximum value of rotation for a muscle in degrees.





The default maximum applies to all three axes of rotation for the muscle. The indexing order for the muscles is the same as that of the [MuscleName](HumanTrait.MuscleName.html) array.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        string[] muscleName = HumanTrait.MuscleName;
        for (int i = 0; i < HumanTrait.BoneCount; ++i)
        {
            Debug.Log(muscleName[i] + " min: " + HumanTrait.GetMuscleDefaultMin(i) + " max: " + HumanTrait.GetMuscleDefaultMax(i));
        }
    }
}
```





Additional resources: [HumanLimit.max](HumanLimit-max.html), [HumanTrait.GetMuscleDefaultMin](HumanTrait.GetMuscleDefaultMin.html).


            
