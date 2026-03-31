This version of Unity is unsupported.



# [Behaviour](Behaviour.html).enabled




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












                    public bool enabled;






### Description



Enabled Behaviours are Updated, disabled Behaviours are not.





This is shown as the small checkbox in the inspector of the behaviour.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.UI; // Required when Using UI elements.public class Example : MonoBehaviour
{
    public Image pauseMenu;    public void Start()
    {
        //Enables the pause menu UI.
        pauseMenu.enabled = true;
    }
}
```


            
