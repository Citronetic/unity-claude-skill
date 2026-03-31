This version of Unity is unsupported.



# [Undo](Undo.html).postprocessModifications




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












                    public static [Undo.PostprocessModifications](Undo.PostprocessModifications.html) postprocessModifications;






### Description



Callback that is triggered whenever a new set of property modifications is created.





Additional resources: [PostprocessModifications](Undo.PostprocessModifications.html).


              


```
using UnityEditor;
using UnityEngine;public class ExamplePostprocessModificationScript : MonoBehaviour
{
    void Start()
    {
        Undo.postprocessModifications += MyPostprocessModificationsCallback;
    }    void OnDestroy()
    {
        Undo.postprocessModifications -= MyPostprocessModificationsCallback;
    }    UndoPropertyModification[] MyPostprocessModificationsCallback(UndoPropertyModification[] modifications)
    {
        // here, you can perform processing of the recorded modifications before returning them
        return modifications;
    }
}
```


            
