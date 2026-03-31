This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).contentHash




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












                    public uint contentHash;






### Description



Provides the hash value for the property. (Read Only)





You can use this to track if there has been any changes to the value at the property path (Additional resources: [SerializedProperty.propertyPath](SerializedProperty-propertyPath.html)).



Please note that:

  -If the size of the property's content is smaller than or equal to 32 bits, then the content will be returned instead of a hash.

  -If the property path leads to an array or complex type, the hash will correspond to the entire content.

  -If the property is a field with [SerializeReference] attribute, or a compound type that contains such a field, then the content hashing doesn't include the content of the referenced object, instead it only hashes the reference id (Additional resources: [SerializedProperty.managedReferenceId](SerializedProperty-managedReferenceId.html)).


              


```
using UnityEngine;
using UnityEditor;public class MyObject : ScriptableObject
{
    public string myString = "answer to life the universe and everything";
    public string[] myStringArray = { "answer", "to", "life", "the", "universe", "and", "everything" };
    public int[] myIntArray = { 42, 442, 422, 4242 };    [MenuItem("Example/Output contentHash from SerializedProperty")]
    static void OutputContentHashFromSerializedProperty()
    {
        var scriptableObject = ScriptableObject.CreateInstance<MyObject>();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            SerializedProperty serializedPropertyMyString = serializedObject.FindProperty("myString");
            SerializedProperty serializedPropertyMyStringArray = serializedObject.FindProperty("myStringArray");
            SerializedProperty serializedPropertyMyIntArray = serializedObject.FindProperty("myIntArray");            uint myStringHash = serializedPropertyMyString.contentHash;
            uint myStringArrayHash = serializedPropertyMyStringArray.contentHash;
            uint MyIntArrayHash = serializedPropertyMyIntArray.contentHash;            serializedPropertyMyString.stringValue = "new string";
            serializedPropertyMyIntArray.DeleteArrayElementAtIndex(1);            serializedObject.ApplyModifiedPropertiesWithoutUndo();            Debug.Log(string.Format("myString: before={0}, after={1}, changed={2}", myStringHash, serializedPropertyMyString.contentHash, myStringHash == serializedPropertyMyString.contentHash ? "no" : "yes"));
            Debug.Log(string.Format("myStringArrayHash: before={0}, after={1}, changed={2}", myStringArrayHash, serializedPropertyMyStringArray.contentHash, myStringArrayHash == serializedPropertyMyStringArray.contentHash ? "no" : "yes"));
            Debug.Log(string.Format("MyIntArrayHash: before={0}, after={1}, changed={2}", MyIntArrayHash, serializedPropertyMyIntArray.contentHash, MyIntArrayHash == serializedPropertyMyIntArray.contentHash ? "no" : "yes"));
        }
    }
}
```


            
