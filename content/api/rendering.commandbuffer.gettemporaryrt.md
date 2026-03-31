This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).GetTemporaryRT




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

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int antiAliasing,
bool enableRandomWrite,
[RenderTextureMemoryless](RenderTextureMemoryless.html) memorylessMode,
bool useDynamicScale);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int antiAliasing,
bool enableRandomWrite,
[RenderTextureMemoryless](RenderTextureMemoryless.html) memorylessMode);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int antiAliasing,
bool enableRandomWrite);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int antiAliasing);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite,
int antiAliasing,
bool enableRandomWrite,
[RenderTextureMemoryless](RenderTextureMemoryless.html) memorylessMode,
bool useDynamicScale);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite,
int antiAliasing,
bool enableRandomWrite,
[RenderTextureMemoryless](RenderTextureMemoryless.html) memorylessMode);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite,
int antiAliasing,
bool enableRandomWrite);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite,
int antiAliasing);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter,
[RenderTextureFormat](RenderTextureFormat.html) format);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer,
[FilterMode](FilterMode.html) filter);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height,
int depthBuffer);






## Declaration

public void GetTemporaryRT(int nameID,
int width,
int height);






## Declaration

public void GetTemporaryRT(int nameID,
[RenderTextureDescriptor](RenderTextureDescriptor.html) desc,
[FilterMode](FilterMode.html) filter);






## Declaration

public void GetTemporaryRT(int nameID,
[RenderTextureDescriptor](RenderTextureDescriptor.html) desc);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Shader property name for this texture. |
| width | Width in pixels, or -1 for "camera pixel width". |
| height | Height in pixels, or -1 for "camera pixel height". |
| depthBuffer | Depth buffer bits (0, 16 or 24). |
| filter | Texture filtering mode (default is Point). |
| format | Format of the render texture (default is ARGB32). |
| readWrite | Color space conversion mode. |
| antiAliasing | Anti-aliasing (default is no anti-aliasing). |
| enableRandomWrite | Should random-write access into the texture be enabled (default is false). |
| desc | Use this RenderTextureDescriptor for the settings when creating the temporary RenderTexture. |
| memorylessMode | Render texture memoryless mode. |
| useDynamicScale | Whether to enable DynamicResolution for the texture. |





### Description



Add a "get a temporary render texture" command.





This creates a temporary render texture with given parameters, and sets it up as a global shader property with nameID. Use [Shader.PropertyToID](Shader.PropertyToID.html) to create the integer name.

Release the temporary render texture using [ReleaseTemporaryRT](Rendering.CommandBuffer.ReleaseTemporaryRT.html), passing the same nameID. Any temporary textures that were not explicitly released will be removed after camera is done rendering, or after [Graphics.ExecuteCommandBuffer](Graphics.ExecuteCommandBuffer.html) is done.

After getting a temporary render texture, you can set it as active ([SetRenderTarget](Rendering.CommandBuffer.SetRenderTarget.html)) or blit to/from it ([Blit](Rendering.CommandBuffer.Blit.html)). You do not explicitly need to preserve active render targets during command buffer execution (current render targets are saved & restored afterwards).

Additional resources: [ReleaseTemporaryRT](Rendering.CommandBuffer.ReleaseTemporaryRT.html), [SetRenderTarget](Rendering.CommandBuffer.SetRenderTarget.html), [Blit](Rendering.CommandBuffer.Blit.html).


            
