This version of Unity is unsupported.



# IndirectDrawIndexedArgs





struct in
          UnityEngine



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



Defines the data layout for indexed indirect render calls.





To setup [GraphicsBuffer](GraphicsBuffer.html) for indexed indirect rendering, use this struct to define the data layout. The layout can change between platforms, so to improve portability, use this struct instead of defining the data as raw ints.

Additional resources: [Graphics.RenderMeshIndirect](Graphics.RenderMeshIndirect.html),  [Graphics.RenderPrimitivesIndexedIndirect](Graphics.RenderPrimitivesIndexedIndirect.html).





### Static Properties



| Property | Description |
| --- | --- |
| size | The size of the struct in bytes. |





### Properties



| Property | Description |
| --- | --- |
| baseVertexIndex | The index to add to values fetched from the index buffer. |
| indexCountPerInstance | The number of vertex indices per instance. |
| instanceCount | The number of instances to render. |
| startIndex | The first index to use in the index buffer of the rendering call. |
| startInstance | The first instance to render. |


            
