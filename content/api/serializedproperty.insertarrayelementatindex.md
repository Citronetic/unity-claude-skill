This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).InsertArrayElementAtIndex




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

public void InsertArrayElementAtIndex(int index);






### Description



Insert an new element at the specified index in the array.





The value of the inserted element is undefined and should be explicitly set after calling this function.

Additional resources: [isArray](SerializedProperty-isArray.html), [arraySize](SerializedProperty-arraySize.html), [GetArrayElementAtIndex](SerializedProperty.GetArrayElementAtIndex.html).


              


```
using UnityEditor;
using UnityEngine;public class InsertArrayElementAtIndexExample : ScriptableObject
{
    public string[] m_Data;    [MenuItem("Example/SerializedProperty/InsertArrayElementAtIndex Example")]
    static void MenuCallback()
    {
        InsertArrayElementAtIndexExample obj = ScriptableObject.CreateInstance<InsertArrayElementAtIndexExample>();
        obj.m_Data = new string[] { "The", "cat" };        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty arrayProperty = serializedObject.FindProperty("m_Data");        arrayProperty.InsertArrayElementAtIndex(1);
        arrayProperty.GetArrayElementAtIndex(1).stringValue = "big";        arrayProperty.InsertArrayElementAtIndex(arrayProperty.arraySize);
        arrayProperty.GetArrayElementAtIndex(arrayProperty.arraySize - 1).stringValue = "jumped.";        serializedObject.ApplyModifiedProperties();        // Outputs "The big cat jumped."
        Debug.Log("Final array contents: " + string.Join(" ", obj.m_Data));
    }
}
```


            
