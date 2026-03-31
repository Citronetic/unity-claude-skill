This version of Unity is unsupported.



# [Collision](Collision.html).collider




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












                    public [Collider](Collider.html) collider;






### Description



The [Collider](Collider.html) we hit (Read Only).





Fetch the Collider of the GameObject your GameObject hits.
To find all colliders that were hit in detail you have to iterate the contact points ([contacts](Collision-contacts.html) property).


              


```
//In this example, the name of the GameObject that collides with your GameObject is output to the console. Then this checks the name of the Collider and if it matches with the one you specify, it outputs another message.//Create a GameObject and make sure it has a Collider component. Attach this script to it.
//Create a second GameObject with a Collider and place it on top of the other GameObject to output that there was a collision. You can add movement to the GameObject to test more.using UnityEngine;public class Example : MonoBehaviour
{
    //If your GameObject starts to collide with another GameObject with a Collider
    void OnCollisionEnter(Collision collision)
    {
        //Output the Collider's GameObject's name
        Debug.Log(collision.collider.name);
    }    //If your GameObject keeps colliding with another GameObject with a Collider, do something
    void OnCollisionStay(Collision collision)
    {
        //Check to see if the Collider's name is "Chest"
        if (collision.collider.name == "Chest")
        {
            //Output the message
            Debug.Log("Chest is here!");
        }
    }
}
```


            
