This version of Unity is unsupported.



# PlayableOutputExtensions





class in
          UnityEngine.Playables



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Extensions for all the types that implements [IPlayableOutput](Playables.IPlayableOutput.html).





Extension methods are static methods that can be called as if they were instance methods on the extended type.


              


```
using UnityEngine;
using UnityEngine.Playables;public class ExamplePlayableBehaviour : PlayableBehaviour
{
    void Start()
    {
        PlayableGraph graph = PlayableGraph.Create();
        ScriptPlayableOutput scriptOutput = ScriptPlayableOutput.Create(graph, "MyOutput");        // Calling method PlayableExtensions.SetWeight on ScriptPlayableOutput as if it was an instance method.
        scriptOutput.SetWeight(10);        // The line above is the same as calling directly PlayableExtensions.SetDuration, but it is more compact and readable.
        PlayableOutputExtensions.SetWeight(scriptOutput, 10);
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| AddNotificationReceiver | Registers a new receiver that listens for notifications. |
| GetNotificationReceivers | Retrieves the list of notification receivers currently registered on the output. |
| GetSourceOutputPort | Returns the source playable's output connection index. |
| GetSourcePlayable | Returns the source playable. |
| GetUserData | Returns the opaque user data. This is the same value as the last last argument of ProcessFrame. |
| GetWeight | Returns the weight of the connection from the PlayableOutput to the source playable. |
| IsOutputNull | Returns true if the PlayableOutput is null, false otherwise. |
| IsOutputValid |  |
| PushNotification | Queues a notification to be sent through the Playable system. |
| RemoveNotificationReceiver | Unregisters a receiver on the output. |
| SetReferenceObject | Sets the bound object to a new value. Used to associate an output to an object (Track asset in case of Timeline). |
| SetSourcePlayable | Sets which playable that computes the output and which sub-tree index. |
| SetUserData | Sets the opaque user data. This same data is passed as the last argument to ProcessFrame. |
| SetWeight | Sets the weight of the connection from the PlayableOutput to the source playable. |


            
