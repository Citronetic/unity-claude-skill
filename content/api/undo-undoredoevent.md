This version of Unity is unsupported.



# [Undo](Undo.html).undoRedoEvent




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












                    public static [Undo.UndoRedoEventCallback](Undo.UndoRedoEventCallback.html) undoRedoEvent;






### Description



Callback that is triggered after any undo or redo event.


              


```
using UnityEditor;
using UnityEngine;public class ExampleUndoRedoEventScript : MonoBehaviour
{
    void Start()
    {
        Undo.undoRedoEvent += OnUndoRedoEvent;
    }    void OnDestroy()
    {
        Undo.undoRedoEvent -= OnUndoRedoEvent;
    }    void OnUndoRedoEvent(in UndoRedoInfo info)
    {
        // code for the action to take on Undo or Redo event
    }
}
```


            
