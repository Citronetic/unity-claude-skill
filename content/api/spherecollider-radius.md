This version of Unity is unsupported.



# [SphereCollider](SphereCollider.html).radius




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




                [Switch to Manual](../Manual/class-SphereCollider.html)







                    public float radius;






### Description



The radius of the sphere measured in the object's local space.





The sphere radius will be scaled by the transform's scale.


              


```
using UnityEngine;//Always attach a SphereCollider component to your GameObject
public class Example : MonoBehaviour
{
    //This declares your SphereCollider
    SphereCollider myCollider;    void Start()
    {
        //Assigns the attached SphereCollider to myCollider
        myCollider = GetComponent<SphereCollider>();
    }    void OnTriggerEnter(Collider other)
    {
        //This increases the Collider radius when the GameObject collides with a trigger Collider
        myCollider.radius += 2f;
    }
}
```


            
