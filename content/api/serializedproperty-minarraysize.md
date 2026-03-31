This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).minArraySize




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












                    public int minArraySize;






### Description



The smallest number of elements in the array across all target objects. (Read Only)





If the SerializedObject contains multiple objects, this property returns the smallest number of elements.  Unlike [SerializedProperty.arraySize](SerializedProperty-arraySize.html) the minimum size is returned even if it is larger than [SerializedObject.maxArraySizeForMultiEditing](SerializedObject-maxArraySizeForMultiEditing.html).  In that case SerializedObject.maxArraySizeForMultiEditing could be increased to permit access to the array contents.

When the SerializedObject contains only a single object, this property behaves in the same way as [SerializedProperty.arraySize](SerializedProperty-arraySize.html) and returns the true array size.

Additional resources: [arraySize](SerializedProperty-arraySize.html), [isArray](SerializedProperty-isArray.html), [SerializedObject.targetObjects](SerializedObject-targetObjects.html).


              


```
using UnityEditor;
using UnityEngine;public class MinArraySizeExample : ScriptableObject
{
    public int[] m_data;    [MenuItem("Example/SerializedProperty MinArraySize Example")]
    static void TestMethod()
    {
        const int largeArraySize = 100; // Larger than the default maxArraySizeForMultiEditing value of 64        MinArraySizeExample obj1 = ScriptableObject.CreateInstance<MinArraySizeExample>();
        obj1.m_data = new int[largeArraySize];        for (int i = 0; i < largeArraySize; i++)
            obj1.m_data[i] = i;        // Second object with its own copy of the large array
        MinArraySizeExample obj2 = ScriptableObject.CreateInstance<MinArraySizeExample>();
        obj2.m_data = obj1.m_data;        // Create serialized object for manipulating both objects
        SerializedObject serializedObject = new SerializedObject(new Object[] { obj1, obj2 });
        SerializedProperty property = serializedObject.FindProperty("m_data");        // arraySize returns 0 but minArraySize returns largeArraySize
        Debug.LogFormat("Array Size: {0}\nMin Array Size: {1}\nMax Array Size: {2}",
            property.arraySize, property.minArraySize, serializedObject.maxArraySizeForMultiEditing);        // Any call to GetArrayElementAtIndex() at this point would fail        // Extend the max permitted array size
        serializedObject.maxArraySizeForMultiEditing = property.minArraySize;        // Now arraySize returns largeArraySize, and the elements can be retrieved
        Debug.LogFormat("New Array Size: {0}, Last element: {1}", property.arraySize, property.GetArrayElementAtIndex(largeArraySize - 1).intValue);
    }
}
```


            
