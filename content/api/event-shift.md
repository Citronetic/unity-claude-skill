This version of Unity is unsupported.



# [Event](Event.html).shift




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












                    public bool shift;






### Description



Is Shift held down? (Read Only)





Returns true if any Shift key is held down.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detects if the shift key was pressed
    void OnGUI()
    {
        Event e = Event.current;
        if (e.shift)
        {
            Debug.Log("Shift was pressed :O");
        }
    }
}
```


            
