This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).CloseScene




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

public static bool CloseScene([SceneManagement.Scene](SceneManagement.Scene.html) scene,
bool removeScene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene to be closed/removed. |
| removeScene | Bool flag to indicate if the Scene should be removed after closing. |





### Returns



**bool**
        Returns true if the Scene is closed/removed.





### Description



Close the Scene. If removeScene flag is true, the closed Scene will also be removed from EditorSceneManager.


              


```
using UnityEngine;
using System.Collections;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;public class ExampleClass
{
    void Example()
    {
        EditorSceneManager.CloseScene(SceneManager.GetSceneByName("Title Screen"), true);
    }
}
```


            
