This version of Unity is unsupported.



# [SimulationMode2D](SimulationMode2D.html).FixedUpdate




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



Use this enumeration to specify to Unity that it should execute the physics simulation immediately after the [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html).





Executing the physics simulation during [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) provides the most stable physics simulation however, Unity may render multiple frames between simulation updates. This means that changes made per-frame may not be synchronized with the physics simulation including contacts between [Collider2D](Collider2D.html). In this mode [Rigidbody2D](Rigidbody2D.html) interpolation should be used to provide smoother movement per-frame where appropriate.

Additional resources: [Physics2D.simulationMode](Physics2D-simulationMode.html).


            
