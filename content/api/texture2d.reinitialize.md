This version of Unity is unsupported.



# [Texture2D](Texture2D.html).Reinitialize




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

public bool Reinitialize(int width,
int height);






## Declaration

public bool Reinitialize(int width,
int height,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
bool hasMipMap);






## Declaration

public bool Reinitialize(int width,
int height,
[TextureFormat](TextureFormat.html) format,
bool hasMipMap);






### Parameters



| Parameter | Description |
| --- | --- |
| width | The new width of the texture. |
| height | The new height of the texture. |
| format | The new format of the texture. |
| hasMipMap | Whether the texture reserves memory for a full mipmap chain. |





### Returns



**bool**

          `true` if the reinitialization was a success.





### Description



Reinitializes a Texture2D, making it possible for you to replace `width`, `height`, `textureformat`, and `graphicsformat` data for that texture.





This action also clears the pixel data associated with the texture from the CPU and GPU.

This function is very similar to the [Texture](Texture.html) constructor, except it works on a Texture object that already exists rather than creating a new one.

It is not possible to reinitialize **Crunched** textures, so if you pass a **Crunched** texture to this method, it returns `false`.  See [texture formats](../Manual/texture-compression-formats.html) for more information about compressed and crunched textures.

Call [Apply](Texture2D.Apply.html) to  upload the changed pixels to the graphics card.

[Texture.isReadable](Texture-isReadable.html) must be `true`.

`Texture2D.Reinitialize` does not automatically update the [special texture properties](../Manual/SL-PropertiesInPrograms.html) {TextureName}`_TexelSize` and {TextureName}`_HDR`, which Unity sets automatically on shaders and materials that use the texture. After using `Texture2D.Reinitialize`, you should update {TextureName}`_TexelSize` and {TextureName}`_HDR` on your material or shader if you need them.


            
