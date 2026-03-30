This version of Unity is unsupported.



# [AnimationStreamHandleUtility](Animations.AnimationStreamHandleUtility.html).WriteFloats




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

public static void WriteFloats([Animations.AnimationStream](Animations.AnimationStream.html) stream,
NativeArray<PropertyStreamHandle> handles,
NativeArray<float> buffer,
bool useMask);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The animation stream. |
| handles | The PropertyStreamHandle array to write to. |
| buffer | The buffer of float properties. |
| useMask | Set to true to write new values if the matching stream handles have not already been modified. |





### Description



Writes float properties from the buffer to the PropertyStreamHandle array (handles).


            
