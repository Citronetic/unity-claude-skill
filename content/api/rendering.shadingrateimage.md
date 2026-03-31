This version of Unity is unsupported.



# ShadingRateImage





class in
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



Encapsulate the informations and capabilities related to variable rate shading images.





To accommodate various graphic APIs, post-process configurations, and XR support, shading rate images necessitate both an image and its vertically flipped counterpart. While some combinations directly utilize the image, others mandate a flipped version. Unity has chosen to combine both to simplify developement. The resolution of shading rate images is in tiles and is platform-dependent. Functions that needs to be aware of this will specify how conversion is handled.





### Static Methods



| Method | Description |
| --- | --- |
| AllocFromPixelSize | Creates a shading rate image. This function performs the conversion from pixel to tile before the allocation. |
| GetAllocTileSize | Returns the tile size based on the given pixel size. |
| GetRenderTextureDescriptor | Utility function to create a RenderTextureDescriptor compatible with a shading rate image. This function does not perform the conversion from pixel to tile. |


            
