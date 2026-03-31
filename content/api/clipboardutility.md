This version of Unity is unsupported.



# ClipboardUtility





class in
          UnityEditor


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



A class containing methods to assist with clipboard operations.





### Static Properties



| Property | Description |
| --- | --- |
| canCopyGameObject | Optional filtering functions invoked to determine if a GameObject can be copied before any action is taken. |
| canCutGameObject | Optional filtering functions invoked to determine if a GameObject can be cut before any action is taken. |
| canDuplicateGameObject | Optional filtering functions invoked to determine if a GameObject can be duplicated before any action is taken. |





### Events



| Event | Description |
| --- | --- |
| copyingGameObjects | Event triggered before the selected GameObjects are copied to the clipboard. |
| cuttingGameObjects | Event triggered before the selected GameObjects are cut to the clipboard. |
| duplicatedGameObjects | Event triggered after GameObjects have been duplicated. |
| duplicatingGameObjects | Event triggered before GameObjects are about to be duplicated. |
| pastedGameObjects | Event triggered after GameObjects are pasted from the clipboard. |
| rejectedGameObjects | Event triggered after the filtering process of canCopyGameObject, canCutGameObject or canDuplicateGameObject receiving an array of GameObjects which did not pass the filtering functions. |


            
