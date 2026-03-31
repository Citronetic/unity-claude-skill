This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).DuplicateCommand




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

public bool DuplicateCommand();






### Description



Duplicates the array element referenced by the SerializedProperty.





Used to insert another element in the array, initialized to the same contents as the SerializedProperty.
                Additional resources: [InsertArrayElementAtIndex](SerializedProperty.InsertArrayElementAtIndex.html)


              


```
using UnityEditor;
using UnityEngine;public class SerializedPropertyDuplicateCommandExample : ScriptableObject
{
    public string[] m_Data;    [MenuItem("Example/SerializedProperty/DuplicateCommand Example")]
    static void MenuCallback()
    {
        SerializedPropertyDuplicateCommandExample obj = ScriptableObject.CreateInstance<SerializedPropertyDuplicateCommandExample>();
        obj.m_Data = new string[] { "A", "B", "C" };        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty arrayProperty = serializedObject.FindProperty("m_Data");        SerializedProperty element1 = arrayProperty.GetArrayElementAtIndex(1);
        element1.DuplicateCommand();
        element1.DuplicateCommand();        // Last entry has been shifted from index 2 to index 4
        SerializedProperty lastElement = arrayProperty.GetArrayElementAtIndex(4);
        lastElement.DuplicateCommand();        serializedObject.ApplyModifiedProperties();        // Outputs "A B B B C C"
        Debug.Log("Final array contents: " + string.Join(" ", obj.m_Data));
    }
}
```


            
