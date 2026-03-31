This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).GetPixels




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

public Color[] GetPixels();






### Returns



**Color[]**
        An array that contains the pixel colors.





### Description



Gets the pixel color data for a mipmap level as [Color](Color.html) structs.





This method gets pixel data from the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`.

The array contains the pixels row by row, starting at the bottom left of the texture. The size of the array is the width × height of the texture.

Each pixel is a [Color](Color.html) struct.

A single call to `GetPixels` is usually faster than multiple calls to [GetPixel](WebCamTexture.GetPixel.html), especially for large textures. If a lower-precision representation is acceptable, [GetPixels32](WebCamTexture.GetPixels32.html) is faster and uses less memory because it does not perform integer-to-float conversions.

If `GetPixels` fails, Unity throws an exception. `GetPixels` might fail if the array contains too much data.

**Note:** For depth data based WebCamTexture instances, this method returns an array of the depth values via [Color.r](Color-r.html) property. Additional resources: [WebCamTexture.isDepth](WebCamTexture-isDepth.html).




---








## Declaration

public Color[] GetPixels(int x,
int y,
int blockWidth,
int blockHeight);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The starting x position of the section to fetch. |
| y | The starting y position of the section to fetch. |
| blockWidth | The width of the section to fetch. |
| blockHeight | The height of the section to fetch. |





### Returns



**Color[]**
        An array that contains the pixel colors.





### Description



Gets the pixel color data for part of the texture as [Color](Color.html) structs.





This version of `GetPixels` returns part of the texture instead of the whole texture.

**Note:** For depth data based WebCamTexture instances, this method returns an array of the depth values via [Color.r](Color-r.html) property. Additional resources: [WebCamTexture.isDepth](WebCamTexture-isDepth.html).


            
