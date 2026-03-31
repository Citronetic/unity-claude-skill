This version of Unity is unsupported.



# JobProducerTypeAttribute





class in
          Unity.Jobs.LowLevel.Unsafe



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



Indicates that a job interface's Execute method can be Burst compiled.





All job interface types must be marked with the JobProducerType. This is used to compile the Execute method by the Burst ASM inspector.





### Properties



| Property | Description |
| --- | --- |
| ProducerType | Contains the Execute static method which the job system invokes. |





### Constructors



| Constructor | Description |
| --- | --- |
| JobProducerTypeAttribute | Indicates which type is the JobProducerType. |


            
