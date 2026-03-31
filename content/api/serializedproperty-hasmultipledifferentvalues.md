This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).hasMultipleDifferentValues




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












                    public bool hasMultipleDifferentValues;






### Description



Does this property represent multiple different values due to multi-object editing? (Read Only)





Returns true when there are multiple target objects, and they do not all have the same value.
                Additional resources: [SerializedObject.targetObjects](SerializedObject-targetObjects.html), [SerializedObject.SetIsDifferentCacheDirty](SerializedObject.SetIsDifferentCacheDirty.html).


              


```
using UnityEngine;
using UnityEditor;public class SerializePropertyHasMultipleDifferentValuesExample : ScriptableObject
{
    public int m_Matching;
    public int m_Different;    [MenuItem("Example/SerializedProperty hasMultipleDifferentValues Example")]
    static void HasMultipleDifferentValuesExample()
    {
        var instance1 = ScriptableObject.CreateInstance<SerializePropertyHasMultipleDifferentValuesExample>();
        instance1.m_Matching = 1;
        instance1.m_Different = 1;        var instance2 = ScriptableObject.CreateInstance<SerializePropertyHasMultipleDifferentValuesExample>();
        instance2.m_Matching = 1;
        instance2.m_Different = 2;        using (var serializedObject = new SerializedObject(new ScriptableObject[] { instance1, instance2 }))
        {
            var matchingProperty = serializedObject.FindProperty("m_Matching");
            var differentProperty = serializedObject.FindProperty("m_Different");            // Outputs
            //m_Matching  value: 1, matching: True
            //m_Different value: 1, matching: False
            Debug.Log($"m_Matching  value: {matchingProperty.intValue}, matching: {!matchingProperty.hasMultipleDifferentValues}\n" +
                $"m_Different value: {differentProperty.intValue}, matching: {!differentProperty.hasMultipleDifferentValues}");
        }
    }
}
```


            
