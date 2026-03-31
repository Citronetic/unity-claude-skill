This version of Unity is unsupported.



# AnimatorJobExtensions





class in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



Static class providing extension methods for [Animator](Animator.html) and the animation C# jobs.





The extension methods in this class can directly be used on an [Animator](Animator.html).

Additional resources: [IAnimationJobPlayable](Animations.IAnimationJobPlayable.html).





### Static Methods



| Method | Description |
| --- | --- |
| AddJobDependency | Creates a dependency between animator jobs and the job represented by the supplied job handle. To add multiple job dependencies, call this method for each job that need to run before the Animator's jobs. |
| BindCustomStreamProperty | Create a custom property in the AnimationStream to pass extra data to downstream animation jobs in your graph. Custom properties created in the AnimationStream do not exist in the scene. |
| BindSceneProperty | Create a PropertySceneHandle representing the new binding on the Component property of a Transform in the Scene. |
| BindSceneTransform | Create a TransformSceneHandle representing the new binding between the Animator and a Transform in the Scene. |
| BindStreamProperty | Create a PropertyStreamHandle representing the new binding on the Component property of a Transform already bound to the Animator. |
| BindStreamTransform | Create a TransformStreamHandle representing the new binding between the Animator and a Transform already bound to the Animator. |
| CloseAnimationStream | Close a stream that has been opened using OpenAnimationStream. |
| OpenAnimationStream | Open a new stream on the Animator. |
| ResolveAllSceneHandles | Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread. |
| ResolveAllStreamHandles | Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread. |
| UnbindAllSceneHandles | Removes all PropertySceneHandles and TransformSceneHandles associated with the Animator instance. Use this method to manage the lifecycle of scene handles when the animated hierarchy changes. |
| UnbindAllStreamHandles | Removes all PropertyStreamHandles and TransformStreamHandles associated with the Animator instance. Use this method to manage the lifecycle of stream handles when the animated hierarchy changes. |


            
