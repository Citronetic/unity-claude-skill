This version of Unity is unsupported.



# [GameObject](GameObject.html).scene




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public [SceneManagement.Scene](SceneManagement.Scene.html) scene;






### Description



The Scene that contains the GameObject.


              


```
//Output the name of the Scene this GameObject belongs tousing UnityEngine;
using UnityEngine.SceneManagement;public class Example : MonoBehaviour
{
    void Start()
    {
        Scene scene = gameObject.scene;
        Debug.Log(gameObject.name + " is from the Scene: " + scene.name);
    }
}
```


            
