This version of Unity is unsupported.



# [AnimationStreamHandleUtility](Animations.AnimationStreamHandleUtility.html).ReadInts




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

public static void ReadInts([Animations.AnimationStream](Animations.AnimationStream.html) stream,
NativeArray<PropertyStreamHandle> handles,
NativeArray<int> buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The animation stream. |
| handles | The PropertyStreamHandle array to read from. |
| buffer | The buffer that stores integer values. |





### Description



Reads integer properties from the PropertyStreamHandle array (handles) and stores the integers in the provided buffer. The buffer must have enough allocated space to store all values.


            
