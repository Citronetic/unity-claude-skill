This version of Unity is unsupported.



# [ParticleSystemJobData](ParticleSystemJobs.ParticleSystemJobData.html).inverseStartLifetimes




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












                    public NativeArray<float> inverseStartLifetimes;






### Description



The lifetime of each particle, stored as 1.0f / lifetime.





There are more cases in the native code where we wish to divide by lifetime, rather than multiply by it. Therefore, storing the reciprocal allows us to perform efficent multiplies, rather than slow divides, in the majority of use-cases.


            
