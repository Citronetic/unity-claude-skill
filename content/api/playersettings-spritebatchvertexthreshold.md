This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).spriteBatchVertexThreshold




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static int spriteBatchVertexThreshold;






### Description



Specifies the max vertex limit for Sprite batching.





Unity will automatically batch SpriteRenderers into the same draw call if they share the same Material and fulfill other criteria. The default limit is 300 vertices and this setting allows users to override this limit in the range (300, 8000). See also: [Dynamic Batching](https://docs.unity3d.com/Manual/DrawCallBatching.html).


            
