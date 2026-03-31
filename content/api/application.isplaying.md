This version of Unity is unsupported.



# [Application](Application.html).IsPlaying




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

public static bool IsPlaying([Object](Object.html) obj);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to test. |





### Returns



**bool**
        True if the object is part of the playing world.





### Description



Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.





In a built Player, this method will always return true.

In the Editor, it will return true if the Editor is in Play Mode and the provided object is part of the playing world and not, for example, part of an object that is in Prefab Mode.

Additional resources: [ExecuteAlways](ExecuteAlways.html).


              


```
using UnityEngine;[ExecuteAlways]
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        if (Application.IsPlaying(gameObject))
        {
            // Play logic
        }
        else
        {
            // Editor logic
        }
    }
}
```


            
