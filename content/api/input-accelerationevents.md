This version of Unity is unsupported.



# [Input](Input.html).accelerationEvents




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












                    public static AccelerationEvent[] accelerationEvents;






### Description



Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables).





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Calculates weighted sum of acceleration measurements which occurred during the last frame
    // Might be handy if you want to get more precise measurements    void Update()
    {
        Vector3 acceleration = Vector3.zero;
        foreach (AccelerationEvent accEvent in Input.accelerationEvents)
        {
            acceleration += accEvent.acceleration * accEvent.deltaTime;
        }
        print(acceleration);
    }
}
```


            
