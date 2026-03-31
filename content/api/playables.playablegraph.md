This version of Unity is unsupported.



# PlayableGraph





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



Use the PlayableGraph to manage [Playable](Playables.Playable.html) creations and destructions.





The PlayableGraph is also the link to different systems, through structs that implement [IPlayableOutput](Playables.IPlayableOutput.html). For example, [AnimationPlayableOutput](Animations.AnimationPlayableOutput.html) or [AudioPlayableOutput](Audio.AudioPlayableOutput.html).





### Public Methods



| Method | Description |
| --- | --- |
| Connect | Connects two Playable instances. |
| Destroy | Destroys the graph. |
| DestroyOutput | Destroys the PlayableOutput. |
| DestroyPlayable | Destroys the Playable. |
| DestroySubgraph | Destroys the Playable and all its inputs, recursively. |
| Disconnect | Disconnects the Playable. The connections determine the topology of the PlayableGraph and how it is evaluated. |
| Evaluate | Evaluates all the PlayableOutputs in the graph, and updates all the connected Playables in the graph. |
| GetEditorName | Returns the name of the PlayableGraph. |
| GetOutput | Get PlayableOutput at the given index in the graph. |
| GetOutputByType | Get PlayableOutput of the requested type at the given index in the graph. |
| GetOutputCount | Returns the number of PlayableOutput in the graph. |
| GetOutputCountByType | Get the number of PlayableOutput of the requested type in the graph. |
| GetPlayableCount | Returns the number of Playable owned by the Graph. |
| GetResolver | Returns the table used by the graph to resolve ExposedReferences. |
| GetRootPlayable | Returns the Playable with no output connections at the given index. |
| GetRootPlayableCount | Returns the number of Playable owned by the Graph that have no connected outputs. |
| GetTimeUpdateMode | Returns how time is incremented when playing back. |
| IsDone | Indicates that a graph has completed its operations. |
| IsPlaying | Indicates that a graph is presently running. |
| IsValid | Returns true if the PlayableGraph has been properly constructed using PlayableGraph.CreateGraph and is not deleted. |
| Play | Plays the graph. |
| SetResolver | Changes the table used by the graph to resolve ExposedReferences. |
| SetTimeUpdateMode | Changes how time is incremented when playing back. |
| Stop | Stops the graph, if it is playing. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates a PlayableGraph. |


            
