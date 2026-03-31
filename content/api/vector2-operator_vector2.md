This version of Unity is unsupported.



# [Vector2](Vector2.html).Vector3




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



















### Description



Converts a [Vector2](Vector2.html) to a [Vector3](Vector3.html).





A [Vector2](Vector2.html) can be implicitly converted into a [Vector3](Vector3.html). (The z is set to zero in the result).


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Vector2 v2 = new Vector2(1, 2);
        Debug.Log("Vector2 is: " + v2);        // convert v2 to v3
        Vector3 v3 = v2;
        Debug.Log("Vector3 is: " + v3);        // convert v3 to new Vector3
        Debug.Log("Set v3 to (3, 4, 5)");
        v3 = new Vector3(3, 4, 5);        // convert v3 to v2
        v2 = v3;
        Debug.Log("Vector2 is: " + v2);
    }
}
```


            
