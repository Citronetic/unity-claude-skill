This version of Unity is unsupported.



# Sampler





class in
          UnityEngine.Profiling



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Provides control over a CPU Profiler label.





Sampler is a counter which produces timings information you can see in [CPU Profiler](../Manual/ProfilerCPU.html).
Use this class to get information about built-in or custom Profiler label.

Additional resources: [Sampler.Get](Profiling.Sampler.Get.html), [CustomSampler](Profiling.CustomSampler.html), [CPU Usage Profiler](../Manual/ProfilerCPU.html).





### Properties



| Property | Description |
| --- | --- |
| isValid | Returns true if Sampler is valid. (Read Only) |
| name | Sampler name. (Read Only) |





### Public Methods



| Method | Description |
| --- | --- |
| GetRecorder | Returns Recorder associated with the Sampler. |





### Static Methods



| Method | Description |
| --- | --- |
| Get | Returns Sampler object for the specific CPU Profiler label. |
| GetNames | Returns number and names of all registered Profiler labels. |


            
