This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).managedReferenceId




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












                    public long managedReferenceId;






### Description



Id associated with a managed reference.





Available when [propertyType](SerializedProperty-propertyType.html) is [SerializedPropertyType.ManagedReference](SerializedPropertyType.ManagedReference.html).  If the reference is null then the Id is SerializeUtility.RefIdNull.

                    Additional resources: [SerializeReference](SerializeReference.html), [managedReferenceValue](SerializedProperty-managedReferenceValue.html), [ManagedReferenceUtility.GetManagedReferenceIdForObject](Serialization.ManagedReferenceUtility.GetManagedReferenceIdForObject.html).


              


```
using System;
using UnityEditor;
using UnityEngine;public class SerializedPropertyManagedReferenceIdExample : ScriptableObject
{
    [Serializable]
    public class Item
    {
        public int m_data = 1;
    }    [SerializeReference]
    public Item m_Item;    [SerializeReference]
    public Item m_Item2;    [MenuItem("Example/SerializedProperty ManagedReferenceId Example")]
    static void TestMethod1()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializedPropertyManagedReferenceIdExample>();
        scriptableObject.m_Item = new Item();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            var itemProperty = serializedObject.FindProperty("m_Item");
            var item2Property = serializedObject.FindProperty("m_Item2");            // Set m_Item2 to point to the same object as m_Item
            // Note: managedReferenceValue could also be used here, for the same result
            item2Property.managedReferenceId = itemProperty.managedReferenceId;            serializedObject.ApplyModifiedProperties();
        }        // Check the results back on the live object        //Will print "Value of m_Item2.m_data: 1"
        Debug.Log("Value of m_Item2.m_data: " + scriptableObject.m_Item2.m_data);        // Prove that both fields point to the same object
        scriptableObject.m_Item.m_data = 2;        //Will print "Value of m_Item2.m_data: 2"
        Debug.Log("Value of m_Item2.m_data: " + scriptableObject.m_Item2.m_data);
    }
}
```


            
