This version of Unity is unsupported.



# [ObjectFactory](ObjectFactory.html).CreateInstance




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

public static Object CreateInstance(Type type);






## Declaration

public static T CreateInstance();






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of instance to create. |





### Description



Create a new instance of the given type.





Use this method to create any type of serialized object in the Editor. The created instance uses default values.


              


```
using UnityEngine;
using UnityEditor;public class CreateInstanceExample
{
    [MenuItem("ObjectFactoryExample/Create Material Asset")]
    public void CreateMaterialEditor()
    {
        Material material = ObjectFactory.CreateInstance<Material>();
        material.shader = Shader.Find("Transparent/Diffuse");
        AssetDatabase.CreateAsset(material, "Assets/newMaterial.mat");
    }
}
```


            
