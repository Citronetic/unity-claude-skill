This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).arrayElementType




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












                    public string arrayElementType;






### Description



Type name of the element in an array property. (Read Only)





Returns the C# type name of the element in an array property. In the case of [SerializedPropertyType.ObjectReference](SerializedPropertyType.ObjectReference.html) and other internal values of SerializedPropertyType, the internal serialization type name is returned.


              


```
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class SerializePropertyArrayElementTypeExample : ScriptableObject
{
    // Various kinds of lists/arrays
    public List<string> m_strings;
    public int[] m_ints;
    public List<Vector3> m_vectors;
    public GameObject[] m_gameObjects;    [MenuItem("Example/SerializedProperty arrayElementType Example")]
    static void ArrayElementTypeExample()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializePropertyArrayElementTypeExample>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            LogType(serializedObject, "m_strings");
            LogType(serializedObject, "m_ints");
            LogType(serializedObject, "m_vectors");
            LogType(serializedObject, "m_gameObjects");
        }
    }    static void LogType(SerializedObject serializedObject, string arrayFieldName)
    {
        var arrayType = serializedObject.FindProperty(arrayFieldName).arrayElementType;
        Debug.Log($"{arrayFieldName} array type: {arrayType}");
    }
}
```


            
