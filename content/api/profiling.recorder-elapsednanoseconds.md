This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).elapsedNanoseconds




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












                    public long elapsedNanoseconds;






### Description



Accumulated time of Begin/End pairs for the previous frame in nanoseconds. (Read Only)





Long-lasting operations (for example, on a preloading thread) might not end within a single frame. In this case, **elapsedNanoseconds** is calculated until the end of the frame, so you can always see activity for these operations.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    Recorder behaviourUpdateRecorder;
    void Start()
    {
        behaviourUpdateRecorder = Recorder.Get("BehaviourUpdate");
        behaviourUpdateRecorder.enabled = true;
    }    void Update()
    {
        if (behaviourUpdateRecorder.isValid)
            Debug.Log("BehaviourUpdate time: " + behaviourUpdateRecorder.elapsedNanoseconds);
    }
}
```





Use *elapsedNanoseconds* to retrieve timings of a code tagged with [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).


              


```
using UnityEngine;
using UnityEngine.Profiling;public class Example
{
    public static void TimeSynchronousMethodWithMarkers()
    {
        var recorder = Recorder.Get("MyMarker");
        recorder.enabled = true; // Start measurements        // Call method which uses MyMarker
        // MyMethod();        recorder.enabled = false; // Stops measurements and makes data available immediately
        Debug.Log("MyMarker total time, ns: " + recorder.elapsedNanoseconds);
    }
}
```





In synchronous measurements that don't involve a frame change, *elapsedNanoseconds* only becomes a non-zero value after the Recorder is disabled.


            
