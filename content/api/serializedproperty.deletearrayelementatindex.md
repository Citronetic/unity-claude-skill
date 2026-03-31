This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).DeleteArrayElementAtIndex




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

public void DeleteArrayElementAtIndex(int index);






### Description



Delete the element at the specified index in the array.





Additional resources: [isArray](SerializedProperty-isArray.html), [InsertArrayElementAtIndex](SerializedProperty.InsertArrayElementAtIndex.html), [MoveArrayElement](SerializedProperty.MoveArrayElement.html), [DeleteCommand](SerializedProperty.DeleteCommand.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class DeleteArrayElementAtIndexExample : ScriptableObject
{
    public List<string> m_Data;    [MenuItem("Example/SerializedProperty/DeleteArrayElementAtIndex Example")]
    static void MenuCallback()
    {
        DeleteArrayElementAtIndexExample obj = ScriptableObject.CreateInstance<DeleteArrayElementAtIndexExample>();
        obj.m_Data = new List<string>() { "The", "big", "cat", "jumped." };        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty arrayProperty = serializedObject.FindProperty("m_Data");        arrayProperty.DeleteArrayElementAtIndex(1);        // With previous deletion index 2 now becomes the last element
        arrayProperty.DeleteArrayElementAtIndex(2);        serializedObject.ApplyModifiedProperties();        // Outputs "The cat"
        Debug.Log("Final array contents: " + string.Join(" ", obj.m_Data));
    }
}
```


              


```
using UnityEngine;
using UnityEditor;public class DeleteArrayElementAtIndexExample2 : ScriptableObject
{
    public int[] m_Array = new int[] { 1, -1, -1, 3, -1, -1, 1, 3, -1 };    [MenuItem("Example/SerializedProperty/DeleteArrayElementAtIndex Example 2")]
    static void MenuCallback()
    {
        var scriptableObject = ScriptableObject.CreateInstance<DeleteArrayElementAtIndexExample2>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            SerializedProperty arrayProperty = serializedObject.FindProperty("m_Array");            // Iterate the array removing any negative numbers
            int arraySize = arrayProperty.arraySize;
            for (int index = 0; index < arraySize;)
            {
                var arrayElement = arrayProperty.GetArrayElementAtIndex(index);
                if (arrayElement.intValue < 0)
                {
                    arrayProperty.DeleteArrayElementAtIndex(index);
                    arraySize--;
                }
                else
                {
                    index++;
                }
            }            serializedObject.ApplyModifiedProperties();
            Debug.Log("Cleaned array contents: " + string.Join(" ", scriptableObject.m_Array));
        }
    }
}
```


            
