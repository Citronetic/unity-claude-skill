This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).JobWorkerCount




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












                    public static int JobWorkerCount;






### Description



Current number of worker threads available to the Unity JobQueue.





By default, this property takes the value of JobWorkerMaximumCount. You can set the value of this property at runtime to dynamically
reduce the number worker threads available to the job queue. This can have the effect of saving power, or reducing the CPU load on a shared or virtual machine. This is useful
if you have multiple instances of your application running as a server, and you want to prevent any single instance from monopolizing the resources of the machine.

You can't set this value below 0, or above the value of the JobWorkerMaximumCount property. Trying to do so throwa an out of range exception.

On some platforms, such as Android, Unity automatically adjusts this value at runtime if the operating system indicates that the number of available cores has changed. This
can happen if the device has entered, or left, power-saving mode. However, if you set this property manually to any valid value, Unity stops any automatic adjustment and
ignores any requests from the operating system. To restore the automatic adjustment mode, call ResetJobWorkerCount.


            
