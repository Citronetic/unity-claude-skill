This version of Unity is unsupported.



# AnimationScriptPlayable





struct in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


                  Leave feedback





Implements interfaces:[IAnimationJobPlayable](Animations.IAnimationJobPlayable.html), [IPlayable](Playables.IPlayable.html)




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



A [Playable](Playables.Playable.html) that can run a custom, multi-threaded animation job.





This playable allows to create a custom C# job that will give read and write access to the [AnimationStream](Animations.AnimationStream.html) during the animation process pass in the [PlayableGraph](Playables.PlayableGraph.html). The C# job must implement the interface [IAnimationJob](Animations.IAnimationJob.html).

NOTE: You can use [PlayableExtensions](Playables.PlayableExtensions.html) methods with AnimationScriptPlayable objects.

Additional resources: [IAnimationJob](Animations.IAnimationJob.html), and [AnimationScriptPlayable.Create](Animations.AnimationScriptPlayable.Create.html).





### Public Methods



| Method | Description |
| --- | --- |
| GetJobData | Gets the job data contained in the playable. |
| GetProcessInputs | Returns whether the playable inputs will be processed or not. |
| SetJobData | Sets a new job data in the playable. |
| SetProcessInputs | Sets the new value for processing the inputs or not. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates an AnimationScriptPlayable in the PlayableGraph. |


            
