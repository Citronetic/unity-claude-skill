This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).depth




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












                    public int depth;






### Description



Nesting depth of the property. (Read Only)





Additional resources: [propertyPath](SerializedProperty-propertyPath.html).


              


```
using System;
using System.Text;
using UnityEngine;
using UnityEditor;public class SerializePropertyDepthExample : ScriptableObject
{
    // Declare fields to demonstrate data at different depths
    public int m_depth0;    [Serializable]
    public struct Nested
    {
        public int m_depth1;        [Serializable]
        public struct NestedInNested
        {
            public int m_depth2;
            public Vector2 m_vectorDepth2; // Contains x,y at depth 3
        };
        public NestedInNested m_Nested1;
    };
    public Nested m_Nested0;
    public bool m_boolDepth0;    [MenuItem("Example/SerializedProperty depth Example")]
    static void DepthExample()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializePropertyDepthExample>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            var report = new StringBuilder();            var iterator = serializedObject.FindProperty("m_depth0");            const bool visitChildren = true;
            do
            {
                report.AppendLine($"Found {iterator.propertyPath} (depth {iterator.depth})");
            }
            while (iterator.Next(visitChildren));            //Output:
            //Found m_depth0 (depth 0)
            //Found m_Nested0 (depth 0)
            //Found m_Nested0.m_depth1 (depth 1)
            //Found m_Nested0.m_Nested1 (depth 1)
            //Found m_Nested0.m_Nested1.m_depth2 (depth 2)
            //Found m_Nested0.m_Nested1.m_vectorDepth2 (depth 2)
            //Found m_Nested0.m_Nested1.m_vectorDepth2.x (depth 3)
            //Found m_Nested0.m_Nested1.m_vectorDepth2.y (depth 3)
            //Found m_boolDepth0 (depth 0)
            Debug.Log(report.ToString());
        }
    }
}
```


            
