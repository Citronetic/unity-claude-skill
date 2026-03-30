This version of Unity is unsupported.



# [SerializationUtility](SerializationUtility.html).ClearAllManagedReferencesWithMissingTypes




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

public static bool ClearAllManagedReferencesWithMissingTypes([Object](Object.html) obj);






### Description



Removes all managed references that are missing their type.





This method removes all serialized data associated with managed reference fields that have missing types.

This API is useful for removing missing type warning messages when an asset is loaded, for example if there is a reference to a class in a package that is not being used anymore.

This method returns false if the object had no references with missing types.

Additional resources: [ClearManagedReferenceWithMissingType](SerializationUtility.ClearManagedReferenceWithMissingType.html), [SerializeReference](SerializeReference.html).


              


```
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEditor;public class ClearMissingTypeExample
{
    [MenuItem("Example/Clear ScriptableObject References with Missing Types")]
    static public void ClearMissingTypesOnScriptableObjects()
    {
        var report = new StringBuilder();        var guids = AssetDatabase.FindAssets("t:ScriptableObject", new[] {"Assets"});
        foreach (string guid in guids)
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            Object obj = AssetDatabase.LoadMainAssetAtPath(path);
            if (obj != null)
            {
                if (SerializationUtility.ClearAllManagedReferencesWithMissingTypes(obj))
                {
                    report.Append("Cleared missing types from ").Append(path).AppendLine();
                }
                else
                {
                    report.Append("No missing types to clear on ").Append(path).AppendLine();
                }
            }
        }        Debug.Log(report.ToString());
    }
}
```


            
