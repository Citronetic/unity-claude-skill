This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).NextVisible




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

public bool NextVisible(bool enterChildren);






### Description



Move to next visible property.





Additional resources: [Next](SerializedProperty.Next.html), [hasVisibleChildren](SerializedProperty-hasVisibleChildren.html), [isExpanded](SerializedProperty-isExpanded.html), [Reset](SerializedProperty.Reset.html), [HideInInspector](HideInInspector.html).


              


```
using System;
using System.Text;
using UnityEngine;
using UnityEditor;public class SerializePropertyNextVisible : ScriptableObject
{
    public bool m_SeeMe1;    [HideInInspector]
    public bool m_HideMe1;    [SerializeField]
    private bool m_SeeMe2;    [HideInInspector]
    public bool m_HideMe2;    [MenuItem("Example/SerializedProperty NextVisible Example")]
    static void TestNextOnCyclicGraph()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializePropertyNextVisible>();
        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            var serializedProperty = serializedObject.GetIterator();            var sb = new StringBuilder();
            sb.AppendLine("Visible Properties:");            // Move from the root to the first visible property
            bool visitChild = true;
            serializedProperty.NextVisible(visitChild);            // Rest of scan stays at same level
            visitChild = false;
            do
            {
                // Note: some properties from the supporting Unity base objects are exposed
                // (and visible in the inspector), for example "m_Script".
                sb.AppendLine(serializedProperty.name);
            }
            while (serializedProperty.NextVisible(visitChild));            /*Expected output
            m_Script
            m_SeeMe1
            m_SeeMe2
            */
            Debug.Log(sb.ToString());
        }
    }
}
```


            
