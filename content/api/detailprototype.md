This version of Unity is unsupported.



# DetailPrototype





class in
          UnityEngine



/



Implemented in:[UnityEngine.TerrainModule](UnityEngine.TerrainModule.html)


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



Detail prototype used by the Terrain GameObject.





### Properties



| Property | Description |
| --- | --- |
| alignToGround | Rotate detail axis parallel to the ground's normal direction, so that the detail is perpendicular to the ground. |
| density | Controls detail density for this detail prototype, relative to it's size. |
| dryColor | Color when the DetailPrototypes are "dry". |
| healthyColor | Color when the DetailPrototypes are "healthy". |
| holeEdgePadding | Controls how far away detail objects are from the edge of the hole area. |
| maxHeight | Maximum height of the grass billboards (if render mode is GrassBillboard). |
| maxWidth | Maximum width of the grass billboards (if render mode is GrassBillboard). |
| minHeight | Minimum height of the grass billboards (if render mode is GrassBillboard). |
| minWidth | Minimum width of the grass billboards (if render mode is GrassBillboard). |
| noiseSeed | Specifies the random seed value for detail object placement. |
| noiseSpread | Controls the spatial frequency of the noise pattern used to vary the scale and color of the detail objects. |
| positionJitter | Controls how Unity generates the detail positions. |
| prototype | GameObject used by the DetailPrototype. |
| prototypeTexture | Texture used by the DetailPrototype. |
| renderMode | Render mode for the DetailPrototype. |
| targetCoverage | Controls the detail's target coverage. |
| useDensityScaling | Indicates the global density scale set in the terrain settings affects this detail prototype. |
| useInstancing | Indicates whether this detail prototype uses  GPU Instancing for rendering. |
| usePrototypeMesh | Indicates whether this detail prototype uses the Mesh object from the GameObject specified by prototype. |





### Public Methods



| Method | Description |
| --- | --- |
| Validate | Returns true if the detail prototype is valid and the Terrain can accept it. |


            
