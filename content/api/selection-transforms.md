This version of Unity is unsupported.



# [Selection](Selection.html).transforms




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












                    public static Transform[] transforms;






### Description



Returns the top level selection, excluding Prefabs.





This is the most common selection type when working with Scene objects.


              


```
using UnityEngine;
using UnityEditor;class LookAtMainCamera : ScriptableObject
{
    [MenuItem("Example/Selection looks at Main Camera _l")]    static void Look()
    {
        var camera = Camera.main;        if (camera)
        {
            foreach (Transform transform in Selection.transforms)
            {
                Undo.RegisterUndo(transform, transform.name + " Looks at Main Camera");
                transform.LookAt(camera.transform);
            }
        }
    }    //The menu item will be disabled if nothing is selected.
    [MenuItem("Example/Selection looks at Main Camera _l", true)]
    static bool ValidateSelection()
    {
        return Selection.transforms.Length != 0;
    }
}
```


            
