This version of Unity is unsupported.



# [GameObjectRecorder](Animations.GameObjectRecorder.html).BindComponent




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

public void BindComponent([Component](Component.html) component);






### Parameters



| Parameter | Description |
| --- | --- |
| component | The component to bind. |





### Description



Adds bindings for all the properties of **component**.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;public class BindComponentScript : MonoBehaviour
{
    void Start()
    {
        var recorder = new GameObjectRecorder(gameObject);        // Add bindings for all the properties of the Transform and BoxCollider components.
        recorder.BindComponent(transform);
        recorder.BindComponent(GetComponent<BoxCollider>());
    }
}
```


            
