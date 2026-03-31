This version of Unity is unsupported.



# [ContactPairHeader](ContactPairHeader.html).body




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












                    public [Component](Component.html) body;






### Description



The first [Rigidbody](Rigidbody.html) or [ArticulationBody](ArticulationBody.html) in the pair.





Use with the `as` keyword to determine the actual type of the component.


              


```
using UnityEngine;public class Example
{
    public Rigidbody ExtractRigidbodyFromContactPairHeader(ContactPairHeader header)
    {
        return header.body as Rigidbody;
    }    public ArticulationBody ExtractArticulationBodyFromContactPairHeader(ContactPairHeader header)
    {
        return header.body as ArticulationBody;
    }
}
```


            
