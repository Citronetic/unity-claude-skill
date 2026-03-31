This version of Unity is unsupported.



# [EditorAction](Actions.EditorAction.html).Finish




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

public void Finish([Actions.EditorActionResult](Actions.EditorActionResult.html) result);






### Parameters



| Parameter | Description |
| --- | --- |
| result | The state that the EditorAction was finished in. |





### Description



Finishes an [EditorAction](Actions.EditorAction.html) with a specific result.





Call this method to forcibly end an active [EditorAction](Actions.EditorAction.html) with a [EditorActionResult](Actions.EditorActionResult.html). A common use is when implementing atomic actions that do not require interactivity.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Actions;

public class SingleFrameActionSample : EditorAction
{
    [MenuItem("Test/Start Single Frame Action")]
    static void StartEditorActionSample()
    {
        Start(new SingleFrameActionSample(4));
    }

    int m_Value;

    public SingleFrameActionSample(int value)
    {
        m_Value = value;
        Finish(EditorActionResult.Success);
    }

    protected override void OnFinish(EditorActionResult result)
    {
        m_Value += 2;
        Debug.Log($"Action Finished [{result}] with value: {m_Value}");
    }
}
```


            
