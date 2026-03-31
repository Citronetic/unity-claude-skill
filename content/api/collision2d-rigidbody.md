This version of Unity is unsupported.



# [Collision2D](Collision2D.html).rigidbody




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












                    public [Rigidbody2D](Rigidbody2D.html) rigidbody;






### Description



The incoming [Rigidbody2D](Rigidbody2D.html) involved in the collision with the [otherRigidbody](Collision2D-otherRigidbody.html).





This may be null if the [Collision2D.collider](Collision2D-collider.html) is not attached to a [Rigidbody2D](Rigidbody2D.html).

Additional resources: [Collider2D](Collider2D.html) and [Rigidbody2D](Rigidbody2D.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnCollisionEnter2D(Collision2D collision2D)
    {
        //If the object we collided with was a Runner and not a Catcher.
        if (collision2D.transform.name == "Runner")
        {
            StartCoroutine(StuckInTheMud(collision2D));
        }
    }    //Freeze the object in position for 5 seconds
    public IEnumerator StuckInTheMud(Collision2D victim)
    {
        victim.rigidbody.bodyType = RigidbodyType2D.Kinematic;
        yield return new WaitForSeconds(5f);
        victim.rigidbody.bodyType = RigidbodyType2D.Dynamic;
    }
}
```


            
