This version of Unity is unsupported.



# [RayTracingMeshInstanceConfig](Rendering.RayTracingMeshInstanceConfig.html).renderingLayerMask




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












                    public uint renderingLayerMask;






### Description



A mask that you can access in HLSL with `unity_RenderingLayer` built-in shader uniform.


              


```
uniform float4 unity_RenderingLayer;// HLSL usage example:
uint renderingLayerMask = asuint(unity_RenderingLayer.x);
```


            
