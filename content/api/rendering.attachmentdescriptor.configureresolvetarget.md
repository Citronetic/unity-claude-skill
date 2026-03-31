This version of Unity is unsupported.



# [AttachmentDescriptor](Rendering.AttachmentDescriptor.html).ConfigureResolveTarget




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

public void ConfigureResolveTarget([Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| tgt | The target surface to receive the MSAA-resolved pixels. |





### Description



When the renderpass that uses this attachment ends, resolve the MSAA surface into the given target.





Changes [storeAction](Rendering.AttachmentDescriptor-storeAction.html) to either [RenderBufferStoreAction.Resolve](Rendering.RenderBufferStoreAction.Resolve.html) or [RenderBufferStoreAction.StoreAndResolve](Rendering.RenderBufferStoreAction.StoreAndResolve.html) depending on whether [ConfigureTarget](Rendering.AttachmentDescriptor.ConfigureTarget.html) has also been called. The target surface format must match the format given in the constructor, and the dimensions of the target surface must match the values given in RenderPass constructor. The target surface must not have MSAA enabled.

                 Note: If you call both `ConfigureResolveTarget` with `storeResults` set to `true` and [ConfigureTarget](Rendering.AttachmentDescriptor.ConfigureTarget.html), Unity stores both the resolved and unresolved MSAA surfaces respectively in `resolveTarget` and `loadStoreTarget`. This means Unity writes more data to memory.


            
