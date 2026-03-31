This version of Unity is unsupported.



# RadeonRaysProbeIntegrator





class in
          UnityEngine.LightTransport


                  Leave feedback





Implements interfaces:[IProbeIntegrator](LightTransport.IProbeIntegrator.html)




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



RadeonRays-based light probe integrator.





This integrator implementation uses the [RadeonRaysContext](LightTransport.RadeonRaysContext.html) class, which implements the [IDeviceContext](LightTransport.IDeviceContext.html) interface. It uses the RadeonRays SDK for ray-triangle intersection testing and the OpenCL 1.2 API for compute.





### Constructors



| Constructor | Description |
| --- | --- |
| RadeonRaysProbeIntegrator | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Disposes the probe integrator. |
| IntegrateDirectRadiance | Integrate direct radiance. |
| IntegrateIndirectRadiance | Integrate indirect radiance. |
| IntegrateOcclusion | Integrate occlusion. |
| IntegrateValidity | Integrate validity. |
| Prepare | Prepare the integrator. |
| SetProgressReporter | Set progress tracker. |


            
