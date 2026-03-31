This version of Unity is unsupported.



# NativeSetClassTypeToNullOnScheduleAttribute





class in
          Unity.Collections.LowLevel.Unsafe



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



Sets the managed reference to a class to null on a copy of the job struct that is passed to a job.





The job system doesn't allow managed references in a job struct. However, sometimes it's necessary to have a class in a job struct,
even though in the context of the job it is always null. When this attribute is applied to a field in a job struct, the managed reference to the class is set
to null on the copy of the job struct that's passed to the job.

Additional resources: [IJob](Unity.Jobs.IJob.html).


            
