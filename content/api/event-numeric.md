This version of Unity is unsupported.



# [Event](Event.html).numeric




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












                    public bool numeric;






### Description



Is the current keypress on the numeric keyboard? (Read Only)





Use this flag to destinguish between main & numeric keys.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates a Label and prints Numeric Key pad is on/off
    // depending on the state of the numlock key.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.numeric)
        {
            GUI.Label(new Rect(10, 10, 150, 20), "Numeric Key pad is on");
        }
        else
        {
            GUI.Label(new Rect(10, 10, 150, 20), "Numeric Key pad is off");
        }
    }
}
```


            
