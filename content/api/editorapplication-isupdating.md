This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).isUpdating




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












                    public static bool isUpdating;






### Description



True if the Editor is currently refreshing the AssetDatabase.





During AssetDatabase refreshing time, the editor checks to see if any files have changed,
        whether they need to be reimported, and reimports them. The isUpdating property will return
        true or false depending on whether the AssetDatabase is being loaded or not. (Read Only)


              


```
using UnityEditor;public class NewSceneWhileNotUpdating
{
    // Simple editor Script that lets you create a new
    // Scene if editor is not updating.    [MenuItem("Example/New Scene while not updating")]
    static void EditorPlaying()
    {
        if (!EditorApplication.isUpdating)
        {
            EditorApplication.NewScene();
        }
    }
}
```


            
