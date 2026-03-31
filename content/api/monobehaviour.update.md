This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).Update()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



Update is called every frame, if the MonoBehaviour is enabled.





`Update` is the most commonly used function to implement any kind of game script.
                    Not every `MonoBehaviour` script needs `Update`.


              


```
using UnityEngine;
using System.Collections;// The ExampleClass starts with Awake.  The GameObject class has activeSelf
// set to false.  When activeSelf is set to true the Start() and Update()
// functions will be called causing the ExampleClass to run.
// Note that ExampleClass (Script) in the Inspector is turned off.  It
// needs to be ticked to make script call Start.public class ExampleClass : MonoBehaviour
{
    private float update;    void Awake()
    {
        Debug.Log("Awake");
        update = 0.0f;
    }    IEnumerator Start()
    {
        Debug.Log("Start1");
        yield return new WaitForSeconds(2.5f);
        Debug.Log("Start2");
    }    void Update()
    {
        update += Time.deltaTime;
        if (update > 1.0f)
        {
            update = 0.0f;
            Debug.Log("Update");
        }
    }
}
```





In order to get the elapsed time since last call to Update, use [Time.deltaTime](Time-deltaTime.html).
This function is only called if the [Behaviour](Behaviour.html) is enabled.
Override this function in order to provide your component's functionality.


            
