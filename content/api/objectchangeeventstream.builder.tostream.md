This version of Unity is unsupported.



# [ObjectChangeEventStream.Builder](ObjectChangeEventStream.Builder.html).ToStream




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

public [ObjectChangeEventStream](ObjectChangeEventStream.html) ToStream([Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| allocator | The allocator to use for the new stream. |





### Returns



**ObjectChangeEventStream**
        A new stream that contains all events recorded in this instance at the time of the function call.





### Description



Copies the data collected in this instance into a new [ObjectChangeEventStream](ObjectChangeEventStream.html) instance.





Calling this method does not affect the internal state of this instance. You can construct multiple independent streams from one builder.


            
