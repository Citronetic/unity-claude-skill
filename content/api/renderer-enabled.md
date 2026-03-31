This version of Unity is unsupported.



# [Renderer](Renderer.html).enabled




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



Makes the rendered 3D object visible if enabled.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer>();
        rend.enabled = true;
    }    // Toggle the Object's visibility each second.
    void Update()
    {
        // Find out whether current second is odd or even
        bool oddeven = Mathf.FloorToInt(Time.time) % 2 == 0;        // Enable renderer accordingly
        rend.enabled = oddeven;
    }
}
```


            
