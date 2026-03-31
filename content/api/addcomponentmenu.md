This version of Unity is unsupported.



# AddComponentMenu





class in
          UnityEngine



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



The AddComponentMenu attribute allows you to place a script anywhere in the "Component" menu, instead of just the "Component->Scripts" menu.





You can use this to organize the Component menu better and improve the workflow of adding scripts.


              


```
using UnityEngine;[AddComponentMenu("Transform/Follow Transform")]
public class FollowTransform : MonoBehaviour
{
}
```





### Properties



| Property | Description |
| --- | --- |
| componentOrder | The order of the component in the component menu (lower values appear higher in the menu). |





### Constructors



| Constructor | Description |
| --- | --- |
| AddComponentMenu | Add an item in the Component menu. |


            
