This version of Unity is unsupported.



# NativeSetThreadIndexAttribute





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



Inject a worker thread index into an int on the job struct.





This is usually used in the implementation of atomic containers. The index is guaranteed to be unique to any other job that might
be running in parallel.

Additional resources: [JobsUtility.ThreadIndex](Unity.Jobs.LowLevel.Unsafe.JobsUtility.ThreadIndex.html)


            
