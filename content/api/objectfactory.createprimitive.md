This version of Unity is unsupported.



# [ObjectFactory](ObjectFactory.html).CreatePrimitive




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

public static [GameObject](GameObject.html) CreatePrimitive([PrimitiveType](PrimitiveType.html) type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of primitive to create. |





### Description



Creates a GameObject primitive with Undo support. The created primitive will have any existing Preset applied to it, see [Preset Manager](../Manual/class-PresetManager.html).


              


```
using UnityEngine;
using UnityEditor;public class CreatePrimitiveExample
{
    [MenuItem("ObjectFactoryExample/Create Cube GameObject")]
    public void CreateCubeEditor()
    {
        Selection.activeGameObject = ObjectFactory.CreatePrimitive(PrimitiveType.Cube);
    }
}
```


            
