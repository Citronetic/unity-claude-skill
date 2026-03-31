This version of Unity is unsupported.



# [Object](Object.html).operator ==




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




                [Switch to Manual](../Manual/class-Object.html)







                    public static bool operator ==([Object](Object.html) x,
[Object](Object.html) y);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The first Object. |
| y | The Object to compare against the first. |





### Description



Compares two object references to see if they refer to the same object.





When comparing with `null`, Unity's implementation of the equality operator can give different results than `Object.ReferenceEquals` or `==` in standard C#.

In addition to checking if the managed object reference is `null`, the custom `==` operator in `UnityEngine.Object` also checks if the underlying native object pointer is null. If either is true, `== null` evaluates to `true`.

For more information on why and how some managed objects can exist in a so-called detached state without a counterpart native object, refer to [Object](../Manual/class-Object.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Collider target;
    void OnTriggerEnter(Collider trigger)
    {
        if (trigger == target)
        {
            print("We hit the target trigger");
        }
    }
}
```





Return early if there is no target:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Transform target;
    void Update()
    {
        // Early out if the target is gone
        if (target == null)
        {
            return;
        }
    }
}
```


            
