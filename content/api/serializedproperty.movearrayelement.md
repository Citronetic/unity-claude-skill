This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).MoveArrayElement




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

public bool MoveArrayElement(int srcIndex,
int dstIndex);






### Description



Move an array element from srcIndex to dstIndex.





Additional resources: [isArray](SerializedProperty-isArray.html), [InsertArrayElementAtIndex](SerializedProperty.InsertArrayElementAtIndex.html), [DeleteArrayElementAtIndex](SerializedProperty.DeleteArrayElementAtIndex.html)


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class MoveArrayElementExample : ScriptableObject
{
    public List<string> m_Data;    [MenuItem("Example/SerializedProperty/MoveArrayElementExample Example")]
    static void MenuCallback()
    {
        MoveArrayElementExample obj = ScriptableObject.CreateInstance<MoveArrayElementExample>();
        obj.m_Data = new List<string>() { "cat", "The", "jumped.", "big" };        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty arrayProperty = serializedObject.FindProperty("m_Data");        arrayProperty.MoveArrayElement(0, 1);
        arrayProperty.MoveArrayElement(3, 1);        serializedObject.ApplyModifiedProperties();        // Outputs "The big cat jumped."
        Debug.Log("Final array contents: " + string.Join(" ", obj.m_Data));
    }
}
```


            
