This version of Unity is unsupported.



# [Transform](Transform.html).parent




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Transform](Transform.html) parent;






### Description



The parent of the transform.





Changing the parent will modify the parent-relative position, scale and rotation but keep the world space position, rotation and scale the same.

Additional resources: [SetParent](Transform.SetParent.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject player;    //Invoked when a button is pressed.
    public void SetParent(GameObject newParent)
    {
        //Makes the GameObject "newParent" the parent of the GameObject "player".
        player.transform.parent = newParent.transform;        //Display the parent's name in the console.
        Debug.Log("Player's Parent: " + player.transform.parent.name);        // Check if the new parent has a parent GameObject.
        if (newParent.transform.parent != null)
        {
            //Display the name of the grand parent of the player.
            Debug.Log("Player's Grand parent: " + player.transform.parent.parent.name);
        }
    }    public void DetachFromParent()
    {
        // Detaches the transform from its parent.
        transform.parent = null;
    }
}
```


            
