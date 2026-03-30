This version of Unity is unsupported.



# [HumanTrait](HumanTrait.html).RequiredBone




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

public static bool RequiredBone(int i);






### Parameters



| Parameter | Description |
| --- | --- |
| i | Index of the bone to test. |





### Description



Is the bone a member of the minimal set of bones that Mecanim requires for a human model?





The indexing order of the bones is the same as that used for the [BoneName](HumanTrait.BoneName.html) array.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        string[] boneName = HumanTrait.BoneName;
        for (int i = 0; i < HumanTrait.BoneCount; ++i)
        {
            if (HumanTrait.RequiredBone(i))
                Debug.Log(boneName[i]);
        }
    }
}
```


            
