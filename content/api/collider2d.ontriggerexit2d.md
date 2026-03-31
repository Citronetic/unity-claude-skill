This version of Unity is unsupported.



# [Collider2D](Collider2D.html).OnTriggerExit2D(Collider2D)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| other | The other Collider2D involved in this collision. |





### Description



Sent when another object leaves a trigger collider attached to this object (2D physics only).





Further information about the other collider is reported in the Collider2D parameter passed during the call.

Notes: Trigger events will be sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions.

Additional resources: [Collider2D](Collider2D.html) class, [OnTriggerEnter2D](Collider2D.OnTriggerEnter2D.html), [OnTriggerStay2D](Collider2D.OnTriggerStay2D.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    bool characterInQuicksand;    void OnTriggerExit2D(Collider2D other)
    {
        characterInQuicksand = false;
    }
}
```


            
