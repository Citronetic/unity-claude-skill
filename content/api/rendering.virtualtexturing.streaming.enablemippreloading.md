This version of Unity is unsupported.

                Virtual Texturing is experimental and not ready for production use. The feature and documentation might be changed or removed in the future.


# [Streaming](Rendering.VirtualTexturing.Streaming.html).EnableMipPreloading




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

public static void EnableMipPreloading(int texturesPerFrame,
int mipCount);






### Parameters



| Parameter | Description |
| --- | --- |
| texturesPerFrame | Number of textures per frame to process. The range is 0 through 1024. The default is 0. A number of 0 disables preloading. The higher this number, the more CPU resource will be used on the render thread. |
| mipCount | The number of mipmap levels to preload. The range is 1 through 9. The default is 1, which preloads only the highest mipmap level with the smallest size of 128 by 128 pixels. This is the size of the Streaming Virtual Texturing tile. |





### Description



Enables mipmap level preloading used by Streaming Virtual Texturing.





Use this method to avoid texture pop-in by preloading the smallest-sized mipmap levels into GPU memory. If there are many more virtual textures in materials and `texturesPerFrame` is too low, you might still see black textures pop in. For more targeted texture preload requests, refer to Rendering.VirtualTexturing.Streaming.RequestRegion.html.


            
