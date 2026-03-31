This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).GetArrayElementAtIndex




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

public [SerializedProperty](SerializedProperty.html) GetArrayElementAtIndex(int index);






### Description



Returns the element at the specified index in the array.





Additional resources: [isArray](SerializedProperty-isArray.html), [arraySize](SerializedProperty-arraySize.html), [Next](SerializedProperty.Next.html).


              


```
using UnityEditor;
using UnityEngine;public class ArrayExample : ScriptableObject
{
    public int[] m_data;    [MenuItem("Example/SerializedProperty GetArrayElementAtIndex Example")]
    static void Example()
    {
        ArrayExample obj = ScriptableObject.CreateInstance<ArrayExample>();
        obj.m_data = new int[] { 3, 2, 1 };        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty property = serializedObject.FindProperty("m_data");        for (int i = 0; i < property.arraySize; i++)
        {
            SerializedProperty element = property.GetArrayElementAtIndex(i);            //Will print
            //m_data.Array.data[0] : 3
            //m_data.Array.data[1] : 2
            //m_data.Array.data[2] : 1
            Debug.Log(element.propertyPath + " : " + element.intValue);
        }
    }
}
```


            
