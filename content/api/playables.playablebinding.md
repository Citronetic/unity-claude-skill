This version of Unity is unsupported.



# PlayableBinding





struct in
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



Struct that holds information regarding an output of a PlayableAsset.





PlayableAssets specify the type of outputs it supports using PlayableBindings.

Do not create PlayableBinding objects directly. Use the provided built-in methods to create the corresponding [PlayableOutput](Playables.PlayableOutput.html). For example, to create a PlayableBinding for an [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html), use [AnimationPlayableBinding.Create](Animations.AnimationPlayableBinding.Create.html). To create a PlayableBinding for a [ScriptPlayableOutput](Playables.ScriptPlayableOutput.html), use [ScriptPlayableBinding.Create](Playables.ScriptPlayableBinding.Create.html).





### Static Properties



| Property | Description |
| --- | --- |
| DefaultDuration | The default duration used when a PlayableOutput has no fixed duration. |
| None | A constant to represent a PlayableAsset has no bindings. |





### Properties



| Property | Description |
| --- | --- |
| outputTargetType | The type of target required by the PlayableOutput for this PlayableBinding. |
| sourceObject | A reference to a UnityEngine.Object that acts a key for this binding. |
| streamName | The name of the output or input stream. |


            
