This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).SupportsVertexAttributeFormat




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

public static bool SupportsVertexAttributeFormat([Rendering.VertexAttributeFormat](Rendering.VertexAttributeFormat.html) format,
int dimension);






### Parameters



| Parameter | Description |
| --- | --- |
| format | The VertexAttributeFormat format to look up. |
| dimension | The dimension of vertex data to check for. |





### Returns



**bool**
        True if the format with the given dimension is supported.





### Description



Indicates whether the given combination of a vertex attribute format and dimension is supported on this device.





Not all [VertexAttributeFormat](Rendering.VertexAttributeFormat.html) and dimension combinations are supported.
The most common restriction is that format and dimension data size must be a multiple of 4 bytes, so
for example [VertexAttributeFormat.UNorm8](Rendering.VertexAttributeFormat.UNorm8.html) with dimensions below 4 are not supported.
Some platforms or devices might have more limitations, for example [VertexAttributeFormat.Float16](Rendering.VertexAttributeFormat.Float16.html)
is not supported by some mobile phones.

Additional resources: [VertexAttributeFormat](Rendering.VertexAttributeFormat.html), [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html).


            
