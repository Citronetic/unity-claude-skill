This version of Unity is unsupported.



# [EditorAction](Actions.EditorAction.html).OnFinish




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

protected void OnFinish([Actions.EditorActionResult](Actions.EditorActionResult.html) result);






### Parameters



| Parameter | Description |
| --- | --- |
| result | The state that the EditorAction was finished in. |





### Description



Callback raised when the [EditorAction](Actions.EditorAction.html) is finished.





This function is responsible for finalizing and cleaning up any state created by the [EditorAction](Actions.EditorAction.html).

When the [EditorActionResult](Actions.EditorActionResult.html) is cancelled, remove any created artifacts from the scene. When the result is [EditorActionResult.Success](Actions.EditorActionResult.Success.html), clean up any temporary resources and commit the finalized objects to the scene.


            
