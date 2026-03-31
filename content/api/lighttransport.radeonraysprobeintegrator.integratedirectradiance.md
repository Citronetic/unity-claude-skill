This version of Unity is unsupported.



# [RadeonRaysProbeIntegrator](LightTransport.RadeonRaysProbeIntegrator.html).IntegrateDirectRadiance(IDeviceContext,int,int,int,BufferSlice<SphericalHarmonicsL2>)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context. |
| positionOffset | Offset measured from the beginning of the probe position buffer. |
| positionCount | Number of probes to integrate. |
| sampleCount | Number of samples to take. |
| ignoreEnvironment | Ignore environment lighting when computing direct contribution. |
| radianceEstimateOut | Buffer slice to write the radiance estimate into. |





### Returns



**void**
        Return code.





### Description



Integrate direct radiance.





The integrator does spherical sampling of incoming direct radiance for each probe position.


            
