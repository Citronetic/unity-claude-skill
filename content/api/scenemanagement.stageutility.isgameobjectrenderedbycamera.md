This version of Unity is unsupported.



# [StageUtility](SceneManagement.StageUtility.html).IsGameObjectRenderedByCamera




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

public static bool IsGameObjectRenderedByCamera([GameObject](GameObject.html) gameObject,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The GameObject to check. |
| camera | The camera to check. |





### Returns



**bool**
        True if the GameObject is rendered by the camera.





### Description



Is the given GameObject rendered by the given Camera?





This is not related to culling, but simply checks if the stages of the GameObject and camera respectively means that the Camera is able to render the GameObject.


            
