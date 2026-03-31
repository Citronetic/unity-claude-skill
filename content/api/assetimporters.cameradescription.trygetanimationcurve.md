This version of Unity is unsupported.



# [CameraDescription](AssetImporters.CameraDescription.html).TryGetAnimationCurve




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

public bool TryGetAnimationCurve(string clipName,
string propertyName,
out [AnimationCurve](AnimationCurve.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| clipName | The name of the AnimationClip. |
| propertyName | The name of the camera property. |
| value | The retrieved AnimationCurve, if one exists for the specified camera property. |





### Returns



**bool**
        Returns true if the camera property is animated. Returns false otherwise.





### Description



Retrieves the AnimationCurve for an animated camera property in a specific AnimationClip.


            
