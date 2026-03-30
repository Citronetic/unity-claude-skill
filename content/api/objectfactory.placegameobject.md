This version of Unity is unsupported.



# [ObjectFactory](ObjectFactory.html).PlaceGameObject




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

public static void PlaceGameObject([GameObject](GameObject.html) go,
[GameObject](GameObject.html) parent);






### Parameters



| Parameter | Description |
| --- | --- |
| go | The GameObject to be initialized. |
| parent | An optional GameObject to be set as the parent. |





### Description



Place the given GameObject in the Scene View using the same preferences as built-in Unity GameObjects.





Use this method to create GameObjects centered in the Scene View or at world origin, depending on user preference. This method also ensures that the GameObject has a unique name, also as defined by preferences.


              


```
using UnityEditor;
using UnityEngine;// Creates a new GameObject with the same preferences that built-in GameObjects instantiate with.
class CreateGameObjectExample
{
    [MenuItem("GameObject/3D Object/My Cube")]
    static void CreateCube(MenuCommand command)
    {
        var gameObject = ObjectFactory.CreatePrimitive(PrimitiveType.Cube);
        ObjectFactory.PlaceGameObject(gameObject, command.context as GameObject);
    }
}
```


            
