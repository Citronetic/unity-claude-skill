This version of Unity is unsupported.



# JobProducerTypeAttribute Constructor




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

public JobProducerTypeAttribute(Type producerType);






### Parameters



| Parameter | Description |
| --- | --- |
| producerType | The type containing a static Execute method which the job system invokes. |





### Description



Indicates which type is the JobProducerType.





The job system and the Burst compiler uses this attribute when determining how to instantiate custom job types.


            
