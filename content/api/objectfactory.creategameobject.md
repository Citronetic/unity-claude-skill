This version of Unity is unsupported.



# [ObjectFactory](ObjectFactory.html).CreateGameObject




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

public static [GameObject](GameObject.html) CreateGameObject(string name,
params Type[] types);






## Declaration

public static [GameObject](GameObject.html) CreateGameObject([SceneManagement.Scene](SceneManagement.Scene.html) scene,
[HideFlags](HideFlags.html) hideFlags,
string name,
params Type[] types);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Name of the GameObject. |
| types | The optional types to add to the GameObject when created. |
| scene | Scene where the GameObject should be created. |
| hideFlags | HideFlags to assign to the GameObject. |





### Returns



**GameObject**
        Returns the GameObject that was created.





### Description



Creates a new GameObject.


              


```
using UnityEngine;
using UnityEditor;public class CreateComponentExample
{
    [MenuItem("ObjectFactoryExample/Create Camera GameObject")]
    public void CreateCameraEditor()
    {
        Selection.activeGameObject = ObjectFactory.CreateGameObject("Camera", typeof(Camera));
    }
}
```


            
