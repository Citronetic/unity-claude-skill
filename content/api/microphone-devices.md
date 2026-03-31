This version of Unity is unsupported.



# [Microphone](Microphone.html).devices




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




                [Switch to Manual](../Manual/class-Microphone.html)







                    public static string[] devices;






### Description



A list of available microphone devices, identified by name.





You can use the name with the [Start](Microphone.Start.html) and [End](Microphone.End.html) functions to specify which microphone you wish to start/stop recording.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Get list of Microphone devices and print the names to the log
    void Start()
    {
        foreach (var device in Microphone.devices)
        {
            Debug.Log("Name: " + device);
        }
    }
}
```





Additional resources: [Start](Microphone.Start.html), [End](Microphone.End.html), [IsRecording](Microphone.IsRecording.html).


            
