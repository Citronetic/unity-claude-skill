This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).enabled




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












                    public bool enabled;






### Description



Enables recording.





When enabled Recorder collects data regardless of Profiler being enabled or not.

**Note:**

Set to *false* to make measurements available immediately for synchronous testing scenarious.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class Example
{
    public static void TimeSynchronousMethodWithMarkers()
    {
        var recorder = Recorder.Get("MyMarker");
        recorder.enabled = true; // Starts measurements        // Call method which uses MyMarker
        // MyMethod();        recorder.enabled = false; // Stops measurements and makes data available immediately
        Debug.Log("MyMarker total time, ns: " + recorder.elapsedNanoseconds);
    }
}
```


            
