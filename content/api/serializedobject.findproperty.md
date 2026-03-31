This version of Unity is unsupported.



# [SerializedObject](SerializedObject.html).FindProperty




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

public [SerializedProperty](SerializedProperty.html) FindProperty(string propertyPath);






### Description



Find serialized property by name.





You can use this to find a specific property in the target object.

Additional resources: [GetIterator](SerializedObject.GetIterator.html), [SerializedProperty](SerializedProperty.html).


              


```
using UnityEngine;
using UnityEditor;public class MyObject : ScriptableObject
{
    public int myInt = 42;
}public class SerializedPropertyTest : MonoBehaviour
{
    void Start()
    {
        MyObject obj = ScriptableObject.CreateInstance<MyObject>();
        SerializedObject serializedObject = new UnityEditor.SerializedObject(obj);        SerializedProperty serializedPropertyMyInt = serializedObject.FindProperty("myInt");        Debug.Log("myInt " + serializedPropertyMyInt.intValue);
    }
}
```


            
