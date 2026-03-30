This version of Unity is unsupported.



# [Compass](Compass.html).timestamp




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












                    public double timestamp;






### Description



Indicates the time elapsed since the compass heading was last updated. (Read Only)





**Android**: The time elapsed is represented in seconds since the device was last turned on.

**iOS**: The time elapsed is represented in seconds since the Unix epoch January 1, 1970.


              


```
using UnityEngine;public class CompassTimeStamp : MonoBehaviour
{
    private double previousTimeStamp = 0;    private void Start()
    {
        Input.location.Start();
        Input.compass.enabled = true;
        Debug.Log($"compass.enabled: {Input.compass.enabled}");
        RecordPreviousTimeStamp();
    }
    void Update()
    {
        Debug.Log($"frame delta: {Time.deltaTime} compass timestamp: {Input.compass.timestamp} compass delta: {Input.compass.timestamp - previousTimeStamp}");
        RecordPreviousTimeStamp();
    }    private void RecordPreviousTimeStamp()
    {
        previousTimeStamp = Input.compass.timestamp;
    }
}
```


            
