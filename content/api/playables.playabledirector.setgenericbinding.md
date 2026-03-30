This version of Unity is unsupported.



# [PlayableDirector](Playables.PlayableDirector.html).SetGenericBinding




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

public void SetGenericBinding([Object](Object.html) key,
[Object](Object.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The source object in the PlayableBinding. |
| value | The object to bind to the key. |





### Description



Sets the binding of a reference object from a [PlayableBinding](Playables.PlayableBinding.html).





Use this method to associate assets to objects loaded in the scene. For example, use SetGenericBinding to bind a Timeline track to a GameObject or Component.

If the value is set to null, the source object is bound to null and the dependency between the PlayableDirector and the source object is kept.


            
