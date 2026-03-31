This version of Unity is unsupported.



# [ContactPair](ContactPair.html).GetContactPoint




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

public ref readonly [ContactPairPoint](ContactPairPoint.html) GetContactPoint(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The ContactPairPoint index. |





### Returns



**ContactPairPoint**
        A reference or a copy of the [ContactPairPoint](ContactPairPoint.html) struct at `index`.





### Description



Gets the [ContactPairPoint](ContactPairPoint.html) at the provided `index` of this pair.





Can be used with the `ref readonly` keywords to avoid copying the whole struct on the stack.


            
