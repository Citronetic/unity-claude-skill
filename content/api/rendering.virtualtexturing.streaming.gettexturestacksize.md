This version of Unity is unsupported.

                Virtual Texturing is experimental and not ready for production use. The feature and documentation might be changed or removed in the future.


# [Streaming](Rendering.VirtualTexturing.Streaming.html).GetTextureStackSize




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

public static void GetTextureStackSize([Material](Material.html) mat,
int stackNameId,
out int width,
out int height);






### Parameters



| Parameter | Description |
| --- | --- |
| mat | The Material that contains the Virtual Texture Stack. The Virtual Texture Stacks contained in a Material are declared in the Material's Shader. |
| stackNameId | The unique identifier for the name of the Virtual Texture Stack, as declared in the Shader. To find the identifier for a given Shader property name, use Shader.PropertyToID. |
| width | Unity populates width with the width of the Virtual Texture Stack, in pixels. |
| height | Unity populates height with the height of the Virtual Texture Stack, in pixels. |





### Description



Gets the width and height of a Virtual Texture Stack, in pixels.





The width and height of a Virtual Texture Stack are usually based on the width and height of the Textures assigned to the Material; however, various factors can cause the width and height of a Virtual Texture Stack to differ from the width and height of its Textures. Use this method to get the current width and height of a Virtual Texture Stack, in pixels.

Use this function to perform logic based on the width and height of the Virtual Texture Stack, such as calculating a mip level.

The width and height of a Virtual Texture Stack are constant for a given set of Textures. If you change the Textures assigned to the Material, the width and height of the Virtual Texture Stack might change.

If you pass invalid data to this method, such as a null Material or an invalid identifier, Unity will throw an exception and the values of `width` and `height` will remain unmodified.


            
