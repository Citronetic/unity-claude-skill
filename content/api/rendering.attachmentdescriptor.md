This version of Unity is unsupported.



# AttachmentDescriptor





struct in
          UnityEngine.Rendering



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



A declaration of a single color or depth rendering surface to be attached into a RenderPass.





A AttachmentDescriptor object identifies a single color or depth rendering surface that can be used with a RenderPass. Note that the AttachmentDescriptor object derives from UnityEngine.Object so they do not get garbage collected like normal C# objects. Instead, they are only GC'd when unloading a Scene or when Resources.UnloadUnusedAssets() is called. Therefore do not create these objects each frame: Instead, create these objects in the constructor of your rendering class, and reuse those objects each frame.





### Properties



| Property | Description |
| --- | --- |
| clearColor | The currently assigned clear color for this attachment. Default is black. |
| clearDepth | Currently assigned depth clear value for this attachment. Default value is 1.0. |
| clearStencil | Currently assigned stencil clear value for this attachment. Default is 0. |
| format | The format of this attachment. |
| graphicsFormat | The GraphicsFormat of this attachment. To use in place of format. |
| loadAction | The load action to be used on this attachment when the RenderPass starts. |
| loadStoreTarget | The surface to use as the backing storage for this AttachmentDescriptor. |
| resolveTarget | When the renderpass that uses this attachment ends, resolve the MSAA surface into the given target. |
| storeAction | The store action to use with this attachment when the RenderPass ends. Only used when either ConfigureTarget or ConfigureResolveTarget has been called. |





### Constructors



| Constructor | Description |
| --- | --- |
| AttachmentDescriptor | Create a AttachmentDescriptor to be used with RenderPass. |





### Public Methods



| Method | Description |
| --- | --- |
| ConfigureClear | When the RenderPass starts, clear this attachment into the color or depth/stencil values given (depending on the format of this attachment). Changes loadAction to RenderBufferLoadAction.Clear. |
| ConfigureResolveTarget | When the renderpass that uses this attachment ends, resolve the MSAA surface into the given target. |
| ConfigureTarget | Binds this AttachmentDescriptor to the given target surface. |


            
