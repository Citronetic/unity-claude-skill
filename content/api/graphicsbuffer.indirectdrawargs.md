This version of Unity is unsupported.



# IndirectDrawArgs





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



Defines the data layout for non-indexed indirect render calls.





To setup [GraphicsBuffer](GraphicsBuffer.html) for non-indexed indirect rendering, use this struct to define the data layout. The layout can change between platforms, so for improved portability, use this struct instead of defining the data as raw ints.

Additional resources: [Graphics.RenderPrimitivesIndirect](Graphics.RenderPrimitivesIndirect.html).





### Static Properties



| Property | Description |
| --- | --- |
| size | The size of the struct in bytes. |





### Properties



| Property | Description |
| --- | --- |
| instanceCount | The number of instances to render. |
| startInstance | The first instance to render. |
| startVertex | The first vertex to render. |
| vertexCountPerInstance | The number of vertices per instance. |


            
