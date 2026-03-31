This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).arraySize




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












                    public int arraySize;






### Description



The number of elements in the array.





If the SerializedObject contains a single object, this property returns the number of elements in the array.

If the SerializedObject contains multiple objects, this property returns the smallest number of elements. This is done so that iteration of the SerializedObject only exposes properties found in all objects.

If there are multiple objects and the smallest array size is larger than [SerializedObject.maxArraySizeForMultiEditing](SerializedObject-maxArraySizeForMultiEditing.html) then this property returns 0 and the elements cannot be retrieved with [SerializedProperty.GetArrayElementAtIndex](SerializedProperty.GetArrayElementAtIndex.html).

Setting this property to a size smaller than the current size discards elements from the end, retaining the existing element content for the remaining elements.
Setting this property to a larger size increases the array size by appending new elements at the end.  The values of those new elements are undefined until explicitly assigned some desired content, as demonstrated in the second example below.

Additional resources: [isArray](SerializedProperty-isArray.html), [minArraySize](SerializedProperty-minArraySize.html), [GetArrayElementAtIndex](SerializedProperty.GetArrayElementAtIndex.html), [InsertArrayElementAtIndex](SerializedProperty.InsertArrayElementAtIndex.html), [DeleteArrayElementAtIndex](SerializedProperty.DeleteArrayElementAtIndex.html), [ClearArray](SerializedProperty.ClearArray.html), [SerializedObject.targetObjects](SerializedObject-targetObjects.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class SerializePropertyArraySizeExample : ScriptableObject
{
    public List<string> m_ListOfStrings = new List<string> { "zero", "one", "two" };
    public string m_NotInArray = "blah";    [MenuItem("Example/SerializedProperty/ArraySize Example")]
    static void ArraySizeExample()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializePropertyArraySizeExample>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            var arrayProperty = serializedObject.FindProperty("m_ListOfStrings");
            var arraySize = arrayProperty.arraySize;
            var arrayElement = arrayProperty.GetArrayElementAtIndex(0);            var concatenated = "Combined array contents: ";
            for (int i = 0; i < arraySize; i++, arrayElement.Next(false))
            {
                concatenated += arrayElement.stringValue + " ";
            }
            Debug.Log(concatenated);
        }
    }
}
```


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class SerializePropertyArrayResizeExample : ScriptableObject
{
    public List<string> m_ListOfStrings;    [MenuItem("Example/SerializedProperty/ArraySize Example 2")]
    static void MenuCallback()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializePropertyArrayResizeExample>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            var arrayProperty = serializedObject.FindProperty("m_ListOfStrings");            // Allocate an initial size of the array
            arrayProperty.arraySize = 2;            // Set the desired initial content for the new elements
            arrayProperty.GetArrayElementAtIndex(0).stringValue = "zero";
            arrayProperty.GetArrayElementAtIndex(1).stringValue = "one";            // Append another element
            arrayProperty.arraySize++;
            arrayProperty.GetArrayElementAtIndex(arrayProperty.arraySize - 1).stringValue = "two";            serializedObject.ApplyModifiedProperties();
            Debug.Log("Combined array contents: " + string.Join(" ", scriptableObject.m_ListOfStrings));
        }
    }
}
```


            
