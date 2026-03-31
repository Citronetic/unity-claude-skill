This version of Unity is unsupported.



# [Collision2D](Collision2D.html).transform




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












                    public [Transform](Transform.html) transform;






### Description



The Transform of the incoming object involved in the collision.





Additional resources: [Transform](Transform.html) class.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnCollisionEnter2D(Collision2D collision2D)
    {
        //If the object we collided with was an Asteroid.
        if (collision2D.transform.name == "Asteroid")
        {
            //Sets this object as the new parent of the Transform of the object involved in the collision.
            collision2D.transform.SetParent(gameObject.transform);
        }
    }
}
```


            
