This version of Unity is unsupported.



# [RadeonRaysProbeIntegrator](LightTransport.RadeonRaysProbeIntegrator.html).Prepare




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

public void Prepare([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
[LightTransport.IWorld](LightTransport.IWorld.html) world,
BufferSlice<Vector3> positions,
float pushoff,
int bounceCount);






### Parameters



| Parameter | Description |
| --- | --- |
| world | World. |
| positions | BufferSlice containing the probe positions to integrate. |
| pushoff | The offset to add to the rays traced from each probe position. You can use this parameter to prevent self-intersections when 32 bit floating point precision is an issue, for instance when integrating a large open world. |
| bounceCount | Number of light bounces. |
| context | Device context. |





### Description



Prepare the integrator.





The preparation can take a significant time if the world is large or OpenCL kernels haven't been written to cache yet.


            
