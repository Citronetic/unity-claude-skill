This version of Unity is unsupported.



# [Camera](Camera.html).CalculateProjectionMatrixFromPhysicalProperties(Matrix4x4,float,Vector2,Vector2,GateFitParameters)




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




                [Switch to Manual](../Manual/class-Camera.html)














### Parameters



| Parameter | Description |
| --- | --- |
| output | The calculated matrix. |
| focalLength | Focal length in millimeters. |
| sensorSize | Sensor dimensions in Millimeters. |
| lensShift | Lens offset relative to the sensor size. |
| nearClip | Near plane distance. |
| farClip | Far plane distance. |
| gateFitParameters | Gate fit parameters to use. See GateFitParameters. |





### Description



Calculates the projection matrix from focal length, sensor size, lens shift, near plane distance, far plane distance, and Gate fit parameters.
                    To calculate the projection matrix without taking Gate fit into account, use  Camera.GateFitMode.None . Additional resources: [GateFitParameters](Camera.GateFitParameters.html)


            
