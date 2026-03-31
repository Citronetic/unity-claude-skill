This version of Unity is unsupported.



# BakeInput





class in
          UnityEngine.LightTransport


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



Container for scene data to be used for light transport calculations.





An opaque data structure containing all scene information needed for light baking calculations, including geometry, materials, lights, and probe positions. This object is created by [InputExtraction.ExtractFromScene](LightTransport.InputExtraction.ExtractFromScene.html) and consumed by [InputExtraction.PopulateWorld](LightTransport.InputExtraction.PopulateWorld.html).

                The BakeInput contains:

                - Mesh geometry and material data.
                - Light source information.
                - Terrain height maps and hole maps.
                - Instance transformation data.
                - Lighting related settings.
                - Light probe group positions.

                Additional resources: [InputExtraction.ExtractFromScene](LightTransport.InputExtraction.ExtractFromScene.html), [InputExtraction.PopulateWorld](LightTransport.InputExtraction.PopulateWorld.html).


            
