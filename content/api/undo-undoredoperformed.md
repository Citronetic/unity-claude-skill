This version of Unity is unsupported.



# [Undo](Undo.html).undoRedoPerformed




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












                    public static [Undo.UndoRedoCallback](Undo.UndoRedoCallback.html) undoRedoPerformed;






### Description



Callback that is triggered after an undo or a redo was executed.





For more information on whether the callback was called from an undo or a redo, use [undoRedoEvent](Undo-undoRedoEvent.html) instead.


              


```
using UnityEditor;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        Undo.undoRedoPerformed += MyUndoRedoCallback;
    }    void MyUndoRedoCallback()
    {
        // code for the action to take on Undo/Redo
    }
}
```


            
