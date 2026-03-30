This version of Unity is unsupported.



# [ObjectFactory](ObjectFactory.html).AddComponent




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

public static [Component](Component.html) AddComponent([GameObject](GameObject.html) gameObject,
Type type);






## Declaration

public static T AddComponent([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The GameObject to add the new component to. |
| type | The type of component to create and add to the GameObject. |





### Returns



**Component**
        Returns the component that was created and added to the GameObject.





### Description



Creates a new component and adds it to the specified GameObject.


              


```
using UnityEngine;
using UnityEditor;public class CreateComponentExample
{
    [MenuItem("ObjectFactoryExample/Add Camera to Selection")]
    public void AddDefaultComponentEditor()
    {
        if (Selection.activeGameObject != null)
        {
            Camera camera = ObjectFactory.AddComponent<Camera>(Selection.activeGameObject);
        }
    }
}
```


            
