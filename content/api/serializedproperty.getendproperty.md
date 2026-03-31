This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).GetEndProperty




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

public [SerializedProperty](SerializedProperty.html) GetEndProperty();






## Declaration

public [SerializedProperty](SerializedProperty.html) GetEndProperty(bool includeInvisible);






### Description



Retrieves the SerializedProperty that defines the end range of this property.





It's the first property that's not a child or grandchild of this property.
The end property can be used to iterate over all children of a property by using [EqualContents](SerializedProperty.EqualContents.html).


              


```
using UnityEditor;
using UnityEngine;public class GetEndPropertyExample : ScriptableObject
{
    public Vector2 m_vector2 = new Vector2(1.0f, 2.0f);
    public bool m_bool = false;    [MenuItem("Example/SerializedProperty GetEndProperty Example")]
    static void Example()
    {
        GetEndPropertyExample obj = ScriptableObject.CreateInstance<GetEndPropertyExample>();
        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty property = serializedObject.FindProperty("m_vector2");        // Visit the x, y values of the vector, stopping once m_bool is reached
        var endOfChildrenIteration = property.GetEndProperty();
        while (property.NextVisible(true) && !SerializedProperty.EqualContents(property, endOfChildrenIteration))
        {
            Debug.Log(property.propertyPath + " : " + property.floatValue);
        }
    }
}
```


            
