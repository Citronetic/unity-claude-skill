This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).IntegrateValidity




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

public [LightTransport.IProbeIntegrator.Result](LightTransport.IProbeIntegrator.Result.html) IntegrateValidity([LightTransport.IDeviceContext](LightTransport.IDeviceContext.html) context,
int positionOffset,
int positionCount,
int sampleCount,
BufferSlice<float> validityEstimateOut);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Device context for computation and memory operations. |
| positionOffset | Starting index in the probe position buffer. |
| positionCount | Number of probe positions to process. |
| sampleCount | Number of directional samples to take per probe. |
| validityEstimateOut | Output buffer for validity values (one float per probe). |





### Returns



**Result**
        Result indicating success or failure with detailed error information.





### Description



Computes validity factors indicating the reliability of each probe position.





This method evaluates how reliable each probe position is for lighting interpolation by analyzing the geometric environment around the probe.

The validity calculation:



          - Value 1.0: Probe is in an open area with good visibility.

          - Values between 0-1: Probe has partial validity.

          - Value 0.0: Probe is inside geometry or in an invalid location.





Validity is determined by whether rays hit front-facing vs back-facing surfaces.

Invalid probes (low validity) should be excluded from lighting calculations or given reduced influence during interpolation.


              


```
// Compute validity for all probes
BufferID validityBuffer = context.CreateBuffer(probeCount, sizeof(float));
var validitySlice = new BufferSlice<float>(validityBuffer, 0);var result = integrator.IntegrateValidity(context, 0, probeCount, 1024, validitySlice);if (result.type == IProbeIntegrator.ResultType.Success)
{
    // Read back validity values
    var validityData = new NativeArray<float>(probeCount, Allocator.Temp);
    context.ReadBuffer(validitySlice, validityData);
    context.Flush();    // Identify invalid probes
    for (int i = 0; i < probeCount; i++)
    {
        if (validityData[i] < 0.5f)
        {
            Debug.LogWarning($"Probe {i} has low validity: {validityData[i]}");
        }
    }
}
```


            
