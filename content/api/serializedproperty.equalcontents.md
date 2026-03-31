This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).EqualContents




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

public static bool EqualContents([SerializedProperty](SerializedProperty.html) x,
[SerializedProperty](SerializedProperty.html) y);






### Description



See if contained serialized properties are equal.


              


```
using UnityEditor;
using UnityEngine;public class EqualContentsExample : ScriptableObject
{
    public int m_A = 4;
    public int m_B = 4;    [MenuItem("Example/SerializedProperty EqualContents Example")]
    static void Example()
    {
        EqualContentsExample obj = ScriptableObject.CreateInstance<EqualContentsExample>();
        SerializedObject serializedObject = new SerializedObject(obj);        SerializedProperty propertyA = serializedObject.FindProperty("m_A");
        SerializedProperty propertyB = serializedObject.FindProperty("m_B");        // False because pointing to different properties
        Debug.Log("EqualContents : " + SerializedProperty.EqualContents(propertyA, propertyB));        // True because both have value 4
        Debug.Log("DataEquals : " + SerializedProperty.DataEquals(propertyA, propertyB));
    }
}
```


            
