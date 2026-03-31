This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).rotation




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












                    public float rotation;






### Description



The rotation of the rigidbody.





This is the rotation around the z-axis only.


              


```
using UnityEngine;// Rotate rigidBody2D every frame.  Start at 45 degrees.public class ExampleScript : MonoBehaviour
{
    public Rigidbody2D rigidBody2D;    void Start()
    {
        rigidBody2D = GetComponent<Rigidbody2D>();
        rigidBody2D.rotation = 45f;
    }    void FixedUpdate()
    {
        rigidBody2D.rotation += 1.0f;
    }
}
```


            
