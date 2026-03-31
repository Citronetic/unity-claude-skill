This version of Unity is unsupported.



# [Application](Application.html).CanStreamedLevelBeLoaded




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

public static bool CanStreamedLevelBeLoaded(int levelIndex);






### Description



Checks if the streamed level can be loaded.





Additional resources: [GetStreamProgressForLevel](Application.GetStreamProgressForLevel.html) function.


              


```
// Check if level at index 1 can be loaded.
// If it can be loaded then load it.
using System;
using UnityEngine;public class SampleBehaviour : MonoBehaviour
{
    void Start()
    {
        if (Application.CanStreamedLevelBeLoaded(1))
        {
            Application.LoadLevel(1);
        }
    }
}
```




---








## Declaration

public static bool CanStreamedLevelBeLoaded(string levelName);






### Description



Checks if the streamed level can be loaded.





Additional resources: [GetStreamProgressForLevel](Application.GetStreamProgressForLevel.html) function.


              


```
// Check if "Level1" can be loaded, if it can be loaded then load it.
using System;
using UnityEngine;public class SampleBehaviour : MonoBehaviour
{
    void Start()
    {
        if (Application.CanStreamedLevelBeLoaded("Level1"))
        {
            Application.LoadLevel("Level1");
        }
    }
}
```


            
