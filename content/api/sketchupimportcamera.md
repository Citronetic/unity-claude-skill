This version of Unity is unsupported.



# SketchUpImportCamera





struct in
          UnityEditor


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



Structure to hold camera data extracted from a SketchUp file.





When importing a SketchUp file, Unity retrieves the current camera view the file is saved with and the camera view of all the scenes in the SketchUp file. The camera data of each Scene is stored in [SketchUpImportScene](SketchUpImportScene.html)

This can be extracted later from [SketchUpImporter](SketchUpImporter.html).





### Properties



| Property | Description |
| --- | --- |
| aspectRatio | Aspect ratio of the camera. |
| farPlane | The near clipping plane distance. |
| fieldOfView | Field of view of the camera. |
| isPerspective | Indicate if the camera is using a perspective or orthogonal projection. |
| lookAt | The position the camera is looking at. |
| nearPlane | The far clipping plane distance. |
| orthoSize | The orthogonal projection size of the camera. This value only make sense if SketchUpImportCamera.isPerspective is false. |
| position | The position of the camera. |
| up | Up vector of the camera. |


            
