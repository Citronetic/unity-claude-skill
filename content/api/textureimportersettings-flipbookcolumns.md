This version of Unity is unsupported.



# [TextureImporterSettings](TextureImporterSettings.html).flipbookColumns




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












                    public int flipbookColumns;






### Description



The number of columns in the source image for a Texture2DArray or Texture3D.





When Unity imports a texture with a [textureShape](TextureImporterSettings-textureShape.html) of [TextureImporterShape.Texture2DArray](TextureImporterShape.Texture2DArray.html) or [TextureImporterShape.Texture3D](TextureImporterShape.Texture3D.html), it divides the source image into cells. Each cell is imported into its own layer or depth slice of the resulting texture. You can set the number of cells using the [flipbookColumns](TextureImporterSettings-flipbookColumns.html) and [flipbookRows](TextureImporterSettings-flipbookRows.html) settings.


            
