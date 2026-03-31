This version of Unity is unsupported.



# [LightProbesQuery](LightProbesQuery.html).CalculateInterpolatedLightAndOcclusionProbes




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

public void CalculateInterpolatedLightAndOcclusionProbes(NativeArray<Vector3> positions,
NativeArray<int> tetrahedronIndices,
NativeArray<SphericalHarmonicsL2> lightProbes,
NativeArray<Vector4> occlusionProbes);






### Parameters



| Parameter | Description |
| --- | --- |
| positions | The array of world space positions used to evaluate the probes. |
| tetrahedronIndices | The array of tetrahedron indices that guide interpolation. Start with values of 0 and reuse results between frames for faster lookup. |
| lightProbes | The array of light probes where the resulting lighting is written to. |
| occlusionProbes | The array of occlusion probes where the resulting occlusion is written to. |





### Description



Calculate light probes and occlusion probes at the given world space positions.


            
