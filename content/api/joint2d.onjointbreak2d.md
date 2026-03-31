This version of Unity is unsupported.



# [Joint2D](Joint2D.html).OnJointBreak2D(Joint2D)




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



Called when a [Joint2D](Joint2D.html) attached to the same game object breaks.





When the [Joint2D.reactionForce](Joint2D-reactionForce.html) is higher than the [Joint2D.breakForce](Joint2D-breakForce.html) or the [Joint2D.reactionTorque](Joint2D-reactionTorque.html) is higher than the [Joint2D.breakTorque](Joint2D-breakTorque.html) of the joint, the joint will break.
When the joint breaks, [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) will be called and the specific [Joint2D](Joint2D.html) that broke will be passed in.

After [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) is called, the joint action depends on the option selected in [Joint2D.breakAction](Joint2D-breakAction.html).

Additional resources: [Joint2D.breakForce](Joint2D-breakForce.html), [Joint2D.breakTorque](Joint2D-breakTorque.html), [Joint2D.reactionForce](Joint2D-reactionForce.html) and [Joint2D.reactionTorque](Joint2D-reactionTorque.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnJointBreak2D(Joint2D brokenJoint)
    {
        Debug.Log("A joint has just been broken!");
        Debug.Log("The broken joint exerted a reaction force of " + brokenJoint.reactionForce);
        Debug.Log("The broken joint exerted a reaction torque of " + brokenJoint.reactionTorque);
    }
}
```


            
