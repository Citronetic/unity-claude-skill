This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).didStart




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)







                    public bool didStart;






### Description



Returns a boolean value which represents if Start was called.


              


```
using UnityEngine;public class NewBehaviourScript : MonoBehaviour
{
    void Awake()
    {
        // Awake gets called before Start, therefore will print 'false'.
        Debug.Log(this.didStart);
    }    void Start()
    {
        // Code is within Start, therefore will print 'true', as Start was called.
        Debug.Log(this.didStart);
    }
}
```


            
