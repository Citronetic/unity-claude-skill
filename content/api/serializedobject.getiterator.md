This version of Unity is unsupported.



# [SerializedObject](SerializedObject.html).GetIterator




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

public [SerializedProperty](SerializedProperty.html) GetIterator();






### Description



Get the first serialized property.





You can use this to go over all properties of the target object.
Typically, when the desired field name is known, it is better to use [FindProperty](SerializedObject.FindProperty.html) to retrieve the associated [SerializedProperty](SerializedProperty.html) more quickly.
However this method can be useful for more general code that needs to scan different types of objects, e.g. when the names of desired properties is not known in advance.

                Additional resources: [FindProperty](SerializedObject.FindProperty.html), [SerializedProperty.NextVisible](SerializedProperty.NextVisible.html), [SerializedProperty.Reset](SerializedProperty.Reset.html).


              


```
using System;
using System.Text;
using UnityEngine;
using UnityEditor;public class SerializeObjectGetIteratorExample : ScriptableObject
{
    public bool m_FirstField;    [MenuItem("Example/SerializedObject GetIterator")]
    static void GetIteratorExample()
    {
        // Each Unity Object has some internal properties that will be serialized.
        // Some of these are visible in the inspector, others are hidden.
        // Typically they can be ignored, but when using SerializedObject.GetIterator() they
        // appear prior to the C# fields.
        var scriptableObject = ScriptableObject.CreateInstance<SerializeObjectGetIteratorExample>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            SerializedProperty iterator = serializedObject.GetIterator();            var sb = new StringBuilder();
            sb.AppendLine("Visible Internal Properties:");            // GetIterator returns a root that is above all others (depth -1)
            // so first property is found by stepping into the children
            bool visitChildren = true;
            iterator.NextVisible(visitChildren);            // For rest of scan stay at the same level (depth 0)
            visitChildren = false;            do
            {
                if (iterator.name == "m_FirstField")
                    break; // Found first field from the C# object                sb.AppendLine($"\t{iterator.name}");
            }
            while (iterator.NextVisible(visitChildren));            // Repeat, using "Next" to show the hidden properties as well as visible
            sb.AppendLine("All Internal Properties:");            iterator.Reset();
            visitChildren = true;
            iterator.Next(visitChildren);
            visitChildren = false;            do
            {
                if (iterator.name == "m_FirstField")
                    break;
                sb.AppendLine($"\t{iterator.name}");
            }
            while (iterator.Next(visitChildren));            Debug.Log(sb.ToString());
        }
    }
}
```


            
