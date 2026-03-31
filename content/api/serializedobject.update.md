This version of Unity is unsupported.



# [SerializedObject](SerializedObject.html).Update




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

public void Update();






### Description



Update serialized object's representation.





When a SerializedObject is constructed, the target objects are serialized, and the SerializeObject and SerializedProperty API provide
                read and write access to that serialized representation.  If one or more of the target objects are changed, via another SerializedObject instance
                or direct writes to the target objects, then the SerializedObject internal serialized representation can get out of sync.  Calling Update() will
                reserialize the target objects so that the SerializedObject reflects their latest state.

                Calling Update() will discard any locally modified properties that have not yet been applied.

                Additional resources: [SerializedObject.hasModifiedProperties](SerializedObject-hasModifiedProperties.html), [SerializedObject.ApplyModifiedProperties](SerializedObject.ApplyModifiedProperties.html)


              


```
using System;
using System.Text;
using UnityEngine;
using UnityEditor;public class SerializeObjectUpdate : ScriptableObject
{
    public int m_Field = 1;    [MenuItem("Example/SerializedObject Update")]
    static void UpdateExample()
    {
        var scriptableObject = ScriptableObject.CreateInstance<SerializeObjectUpdate>();
        var sb = new StringBuilder();        using (var serializedObject = new SerializedObject(scriptableObject))
        {
            SerializedProperty field = serializedObject.FindProperty("m_Field");            // Change underlying object
            scriptableObject.m_Field = 2;            // SerializedObject still thinks value is 1
            sb.Append($"SerializedObject value before Update: {field.intValue} ");            //hasModifiedProperties returns false because no changes have been made via SerializedProperty API
            sb.Append($"(SerializedObject dirty: {serializedObject.hasModifiedProperties}), ");            // Update so that SerializedObject sees the new value
            serializedObject.Update();
            sb.AppendLine($"after Update: {field.intValue}");            // Another scenario is when Update is called while there are pending changes in the SerializedObject
            field.intValue = 3;
            sb.Append($"SerializedObject value before Update: {field.intValue} ");
            sb.Append($"(SerializedObject dirty: {serializedObject.hasModifiedProperties}), ");            // Value reverts back to 2, because ApplyModifiedProperties was not called
            // and SerializedObject has been put back in sync with the object's state
            serializedObject.Update();
            sb.AppendLine($"after Update: {field.intValue}. (Dirty: {serializedObject.hasModifiedProperties})");            Debug.Log(sb.ToString());
        }
    }
}
```


            
