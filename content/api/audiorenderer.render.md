This version of Unity is unsupported.



# [AudioRenderer](AudioRenderer.html).Render




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

public static bool Render(NativeArray<float> buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| buffer | The buffer to write the sample data to. |





### Returns



**bool**
        True if the recording succeeded.





### Description



Performs the recording of the main output as well as any optional mixer groups that have been registered via AudioRenderer.AddMixerGroupSink.


            
