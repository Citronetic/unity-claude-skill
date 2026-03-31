This version of Unity is unsupported.



# [Application](Application.html).isPlaying




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












                    public static bool isPlaying;






### Description



Returns true when called in any kind of built Player, or when called in the Editor in Play mode (Read Only).





In a built Player, this method always returns true.

In the Editor, it returns true if the Editor is in Play mode.

Unity might throw an exception when `Application.isPlaying` is accessed in the class constructor or its value is assigned to a variable.

**Note**: In the Editor for [ScriptableObject](ScriptableObject.html) assets, this property returns false in OnEnable. After reloading the domain, when reloading assemblies, Unity invokes OnEnable on all [ScriptableObject](ScriptableObject.html) instances. This happens before isPlaying is set to true.

Additional resources: [Application.IsPlaying](Application.IsPlaying.html), [ExecuteAlways](ExecuteAlways.html).


              


```
using UnityEngine;class Example : MonoBehaviour
{
    void Start()
    {
        if (Application.isPlaying)
        {
            print("In player or playmode");
        }
    }
}
```


            
