This version of Unity is unsupported.



# DepthState





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Values for the depth state.





Use this with [RenderStateBlock](Rendering.RenderStateBlock.html) and ScriptableRenderContext.DrawRenderers to override the GPU's render state.

Corresponds to the `ZTest` and `ZWrite` commands in [ShaderLab](../Manual/SL-Reference.html).

Additional resources: [RenderStateBlock](Rendering.RenderStateBlock.html), [[ScriptableRenderContext.DrawRenderers], [ShaderLab command: ZTest](../Manual/SL-ZTest.html), [ShaderLab command: ZWrite](../Manual/SL-ZWrite.html).





### Static Properties



| Property | Description |
| --- | --- |
| defaultValue | Default values for the depth state. |





### Properties



| Property | Description |
| --- | --- |
| compareFunction | How should depth testing be performed. |
| writeEnabled | Controls whether pixels from this object are written to the depth buffer. |





### Constructors



| Constructor | Description |
| --- | --- |
| DepthState | Creates a new depth state with the given values. |


            
