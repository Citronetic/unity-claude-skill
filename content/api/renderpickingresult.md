This version of Unity is unsupported.



# RenderPickingResult





struct in
          UnityEditor


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



This struct contains information to notify Unity the outcome of this render picking callback.





This struct type has to be returned from the [RenderPickingCallback](HandleUtility.RenderPickingCallback.html) to notify Unity of:



          - The number of consecutive picking indices used during the callback

          - The [ResolvePickingCallback](HandleUtility.ResolvePickingCallback.html) delegate to invoke when the user clicks on a pixel, whose value is the `selectionId` encoded from the picking index used during the callback. Refer to [resolver](RenderPickingResult-resolver.html) for more information.

          - Alternatively, you can use a [ResolvePickingWithWorldPositionCallback](HandleUtility.ResolvePickingWithWorldPositionCallback.html) delegate if you need the world space position or the depth value for the resolve callback to work. Refer to [resolverWithWorldPos](RenderPickingResult-resolverWithWorldPos.html).





If nothing has been rendered, return [RenderPickingResult.NoOperation](RenderPickingResult.NoOperation.html).





### Static Properties



| Property | Description |
| --- | --- |
| NoOperation | The constant value to be returned from RenderPickingCallback delegates signifying that nothing has been rendered. |





### Properties



| Property | Description |
| --- | --- |
| renderedPickingIndexCount | The number of consecutive picking indices used during the current RenderPickingCallback. |
| resolver | The callback to invoke to resolve a picking index into a GameObject reference. |
| resolverWithWorldPos | The callback to invoke to resolve a picking index into a GameObject reference. |





### Constructors



| Constructor | Description |
| --- | --- |
| RenderPickingResult | Constructs a RenderPickingResult value. |


            
