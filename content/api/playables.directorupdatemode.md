This version of Unity is unsupported.



# DirectorUpdateMode





enumeration


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



Defines what time source is used to update a Director graph.





### Properties



| Property | Description |
| --- | --- |
| DSPClock | Update is based on DSP (Digital Sound Processing) clock. Use this for graphs that need to be synchronized with Audio. |
| GameTime | Update is based on Time.time. Use this for graphs that need to be synchronized on gameplay, and that need to be paused when the game is paused. |
| UnscaledGameTime | Update is based on Time.unscaledTime. Use this for graphs that need to be updated even when gameplay is paused. Example: Menus transitions need to be updated even when the game is paused. |
| Manual | Update mode is manual. You need to manually call PlayableGraph.Evaluate with your own deltaTime. This can be useful for graphs that are completely disconnected from the rest of the game. For example, localized bullet time. |


            
