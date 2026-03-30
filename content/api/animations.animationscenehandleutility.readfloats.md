This version of Unity is unsupported.



# [AnimationSceneHandleUtility](Animations.AnimationSceneHandleUtility.html).ReadFloats




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

public static void ReadFloats([Animations.AnimationStream](Animations.AnimationStream.html) stream,
NativeArray<PropertySceneHandle> handles,
NativeArray<float> buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The animation stream. |
| handles | The PropertySceneHandle array to read from. |
| buffer | The buffer that stores float values. |





### Description



Reads float properties from the PropertySceneHandle array (handles) and stores the floats in the provided buffer. The buffer must have enough allocated space to store all values.


            
