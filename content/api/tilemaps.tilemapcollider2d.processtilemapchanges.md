This version of Unity is unsupported.



# [TilemapCollider2D](Tilemaps.TilemapCollider2D.html).ProcessTilemapChanges




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















## Declaration

public void ProcessTilemapChanges();






### Description



Processes Tilemap changes for Collider updates immediately, if there are any.





Tilemap changes for Collider updates are normally handled in the LateUpdate step. If immediate changes are required, use this to have the changes in the Tilemap reflected immediately. Calling this will not process changes if the TilemapCollider2D is not enabled.


            
