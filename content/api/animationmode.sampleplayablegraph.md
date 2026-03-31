This version of Unity is unsupported.



# [AnimationMode](AnimationMode.html).SamplePlayableGraph(GameObject,PlayableGraph,int,float)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| graph | The PlayableGraph to sample. |
| index | The output index to sample in the Playable Graph. |
| time | The time at which to sample. |





### Description



Samples the specified output index of a [PlayableGraph](Playables.PlayableGraph.html) and also records modified properties when in Animation mode.





To successfully use this method, [BeginSampling](AnimationMode.BeginSampling.html) must be called before this method and [EndSampling](AnimationMode.EndSampling.html) must be called after. If a property is no longer sampled (for example, through [SampleAnimationClip](AnimationMode.SampleAnimationClip.html), [SamplePlayableGraph](AnimationMode.SamplePlayableGraph.html), or [AddPropertyModification](AnimationMode.AddPropertyModification.html)), the property reverts to its original value when [EndSampling](AnimationMode.EndSampling.html) is called.


            
