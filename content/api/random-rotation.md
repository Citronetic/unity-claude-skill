This version of Unity is unsupported.



# [Random](Random.html).rotation




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




                [Switch to Manual](../Manual/class-random.html)







                    public static [Quaternion](Quaternion.html) rotation;






### Description



Returns a random rotation (Read Only).





Randomize the `x`, `y`, `z`, and `w` of a [Quaternion](Quaternion.html) each to [-1.0..1.0] (inclusive) via [Range](Random.Range.html) and normalize the result. See also [rotationUniform](Random-rotationUniform.html) for a slower but higher quality algorithm.


              


```
using UnityEngine;// Click the "Rotate!" button and a rotation will be appliedpublic class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 100, 50), "Rotate!"))
        {
            transform.rotation = Random.rotation;
        }
    }
}
```


            
