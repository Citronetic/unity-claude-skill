This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).IsPersistent




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

public static bool IsPersistent([Object](Object.html) target);






### Description



Determines if an object is stored on disk.





Typically assets like Prefabs, textures, audio clips, animation clips, materials are stored on disk.

Returns false if the object lives in the Scene. Typically this is a game object or component but
it could also be a material that was created from code and not stored in an asset but instead
stored in the Scene.


              


```
using UnityEditor;
using UnityEngine;
// Tells if an Object is stored on disk or not.
public class PersistentInfo : EditorWindow
{
    [MenuItem("Examples/Object on Disk?")]
    static void CheckPersistent()
    {
        bool persistent = EditorUtility.IsPersistent(Selection.activeObject);
        Debug.Log(Selection.activeObject.name + ": " + (persistent ? "Stored on disk" : "Not on disk"));
    }    [MenuItem("Examples/Object on Disk?", true)]
    static bool ValidateCheckPersistent()
    {
        return Selection.activeObject != null;
    }
}
```


            
