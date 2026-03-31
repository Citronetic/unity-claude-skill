This version of Unity is unsupported.



# [Collision](Collision.html).articulationBody




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












                    public [ArticulationBody](ArticulationBody.html) articulationBody;






### Description



The [ArticulationBody](ArticulationBody.html) of the collider that your GameObject collides with (Read Only).





This returns the [ArticulationBody](ArticulationBody.html) of the collider that your GameObject collides with. If the collider doesn't have an articulation body attached, this returns `null`.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Make all articulation bodies that your GameObject hits fly upwards
    void OnCollisionStay(Collision collision)
    {
        // Check if the collider your GameObject hits has an articulation body
        // Then apply the force
        if (collision.articulationBody)
        {
            collision.articulationBody.AddForce(Vector3.up * 15);
        }
    }
}
```


            
