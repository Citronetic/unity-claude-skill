This version of Unity is unsupported.



# Tile





class in
          UnityEngine.WSA



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



Represents tile on Windows start screen





This class can be used to create or update secondary tiles on start screen and get instances of tiles to send notifications to them.





### Static Properties



| Property | Description |
| --- | --- |
| main | Returns applications main tile |





### Properties



| Property | Description |
| --- | --- |
| exists | Whether secondary tile is pinned to start screen. |
| hasUserConsent | Whether secondary tile was approved (pinned to start screen) or rejected by user. |
| id | A unique string, identifying secondary tile |





### Public Methods



| Method | Description |
| --- | --- |
| Delete | Show a request to unpin secondary tile from start screen. |
| PeriodicBadgeUpdate | Starts periodic update of a  badge on a tile. |
| PeriodicUpdate | Starts periodic update of a tile. |
| RemoveBadge | Remove badge from tile. |
| StopPeriodicBadgeUpdate | Stops previously started periodic update of a tile. |
| StopPeriodicUpdate | Stops previously started periodic update of a tile. |
| Update | Send a notification for tile (update tiles look). |
| UpdateBadgeImage | Sets or updates badge on a tile to an image. |
| UpdateBadgeNumber | Set or update a badge on a tile to a number. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateOrUpdateSecondary | Creates new or updates existing secondary tile. |
| DeleteSecondary | Show a request to unpin secondary tile from start screen. |
| Exists | Whether secondary tile is pinned to start screen. |
| GetSecondaries | Gets all secondary tiles. |
| GetSecondary | Returns the secondary tile, identified by tile id. |
| GetTemplate | Get template XML for tile notification. |


            
