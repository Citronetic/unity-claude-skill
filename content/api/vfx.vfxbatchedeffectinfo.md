This version of Unity is unsupported.



# VFXBatchedEffectInfo





struct in
          UnityEngine.VFX


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



This structure provides runtime information on how Unity batches a [VisualEffectAsset](VFX.VisualEffectAsset.html).





### Properties



| Property | Description |
| --- | --- |
| activeBatchCount | The number of active batches the VisualEffectAsset uses. |
| activeInstanceCount | The number of active VisualEffect instances of this VisualEffectAsset. |
| inactiveBatchCount | The number of inactive batches that are allocated for later reuse. |
| maxInstancePerBatchCapacity | The maximum number of VisualEffect that can be instanciated in a single batch. |
| totalCPUSizeInBytes | The CPU size, in bytes, that the batches of this VisualEffectAsset use. |
| totalGPUSizeInBytes | The GPU size, in bytes, that the batches of this VisualEffectAsset use. |
| totalInstanceCapacity | The total number of VisualEffect that can be instanciated with the current allocated batches. |
| unbatchedInstanceCount | The number of VisualEffect instances that are not batched. |
| vfxAsset | The VisualEffectAsset associated with this Batched Effect Info. |


            
