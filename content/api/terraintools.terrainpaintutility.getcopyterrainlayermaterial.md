This version of Unity is unsupported.



# [TerrainPaintUtility](TerrainTools.TerrainPaintUtility.html).GetCopyTerrainLayerMaterial




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

public static [Material](Material.html) GetCopyTerrainLayerMaterial();






### Returns



**Material**
        Built in "Hidden/Terrain/TerrainLayerUtils" material.





### Description



Returns the default copy terrain layer material.





This material is used by PaintTexture operations.
                  Pass 0 is used to select a channel from the alphamap and copy it into a single channel intermediary texture
                  Pass 1 is used to copy from the single channel intermediary texture back into the source alphamap.


            
