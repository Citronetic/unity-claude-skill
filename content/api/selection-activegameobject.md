This version of Unity is unsupported.



# [Selection](Selection.html).activeGameObject




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












                    public static [GameObject](GameObject.html) activeGameObject;






### Description



Returns the active game object. (The one shown in the inspector).





It will also return game objects that might be Prefabs or non-modifiable objects.


              


```
using UnityEngine;
using UnityEditor;class Example : EditorWindow
{
    // Rotates the selected Game Object +45 degrees if the user presses 'g'
    // or -45 degrees if the user presses 'Shift + g'
    // If no object is selected, the Menus are grayed out.    [MenuItem("Example/Rotate Green +45 _g")]
    static void RotateGreenPlus45()
    {
        GameObject obj = Selection.activeGameObject;
        obj.transform.Rotate(Vector3.up * 45);
    }    [MenuItem("Example/Rotate Green +45 _g", true)]
    static bool ValidatePlus45()
    {
        return Selection.activeGameObject != null;
    }    [MenuItem("Example/Rotate green -45 #g")]
    static void RotateGreenMinus45()
    {
        GameObject obj = Selection.activeGameObject;
        obj.transform.Rotate(Vector3.down * 45);
    }    [MenuItem("Example/Rotate green -45 #g", true)]
    static bool ValidateMinus45()
    {
        return Selection.activeGameObject != null;
    }
}
```


            
