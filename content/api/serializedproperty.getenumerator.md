This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).GetEnumerator




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

public IEnumerator GetEnumerator();






### Description



Retrieves an iterator for enumerating over the visible child properties of the current property.  If the property is an array it will enumerate over the array elements.





Additional resources: [NextVisible](SerializedProperty.NextVisible.html), [GetEndProperty](SerializedProperty.GetEndProperty.html), [GetArrayElementAtIndex](SerializedProperty.GetArrayElementAtIndex.html)


              


```
using UnityEditor;
using UnityEngine;public class EnumerateExample : ScriptableObject
{
    public Vector3 m_vector3 = new Vector3(1.0f, 2.0f, 3.0f);
    public int m_anotherField = 2;    [MenuItem("Example/SerializedProperty GetEnumerator Example")]
    static void Example()
    {
        EnumerateExample obj = ScriptableObject.CreateInstance<EnumerateExample>();
        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty property = serializedObject.FindProperty("m_vector3");        // Visit the x, y, z values of the vector, stopping once m_anotherField is reached
        var enumerator = property.GetEnumerator();
        while (enumerator.MoveNext())
        {
            property = enumerator.Current as SerializedProperty;
            Debug.Log(property.propertyPath + " : " + property.floatValue);
        }
    }
}
```


            
