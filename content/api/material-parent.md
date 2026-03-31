This version of Unity is unsupported.



# [Material](Material.html).parent




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




                [Switch to Manual](../Manual/class-Material.html)







                    public [Material](Material.html) parent;






### Description



Parent of this material.





Materials with a non null parent are referred to as material variants.

Material variants will inherit all their properties from their parent, and can override them on a per property basis. Changing the value of a property of a material will therefore impact all variants below in the hierarchy.

This property is only available in the Editor, in a built project all material hierarchies are flattened.

Additional resources: [Material.IsChildOf](Material.IsChildOf.html), [Material.IsPropertyOverriden](Material.IsPropertyOverriden.html), [Material.IsPropertyLocked](Material.IsPropertyLocked.html).


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
#if UNITY_EDITOR
    [MenuItem("GameObject/Create Material Variant")]
    static void DuplicateMaterial()
    {
        Material selected = Selection.activeObject as Material;
        if (selected == null)
            return;        // Create a material variant from selected material
        // And override it's color to red
        Material material = new Material(selected);
        material.parent = selected;
        material.color = Color.red;        AssetDatabase.CreateAsset(material, "Assets/" + selected.name + " Variant.mat");
    }
#endif
}
```


            
