This version of Unity is unsupported.



# [FSR2Context](AMD.FSR2Context.html).initData




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












                    public ref readonly [AMD.FSR2CommandInitializationData](AMD.FSR2CommandInitializationData.html) initData;






### Description



The immutable initialization parameters used to configure FSR2.





Set once when creating the [FSR2Context](AMD.FSR2Context.html) with [GraphicsDevice.CreateFeature](AMD.GraphicsDevice.CreateFeature.html). These values determine the internal resolution limits, display size, and operational flags.

Additional resources: [FSR2CommandInitializationData](AMD.FSR2CommandInitializationData.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.HighDefinition;
using UnityEngine.Experimental.Rendering;
using UnityEngine.AMD;// Example HDRP custom pass
public class CustomFSRPass : CustomPass
{
    void InitializeAMDDevice()
    {
        // device initialization code
    }
    bool HasOutputResolutionChanged(CustomPassContext ctx)
    {
        // detect resolution change
    }
    bool HasInputResolutionChanged(CustomPassContext ctx)
    {
        // detect resolution change
    }    protected override void Setup(ScriptableRenderContext renderContext, CommandBuffer cmd)
    {
        // setup code
    }    protected override void Execute(CustomPassContext ctx)
    {
        bool initializeFsr2Context = fsr2Context == null || HasInputResolutionChanged(ctx) || HasOutputResolutionChanged(ctx);
        if (initializeFsr2Context)
        {
            if (fsr2Context != null)
            {
                amdDevice.DestroyFeature(ctx.cmd, fsr2Context);
                fsr2Context = null;
            }            Vector2Int renderSize = ctx.cameraColorBuffer.GetScaledSize();
            float scalingRatio = amdDevice.GetUpscaleRatioFromQualityMode(m_Quality);
            uint displaySizeWidth = (uint)(renderSize.x * scalingRatio);
            uint displaySizeHeight = (uint)(renderSize.y * scalingRatio);            FSR2CommandInitializationData initData = new FSR2CommandInitializationData();
            initData.SetFlag(FfxFsr2InitializationFlags.EnableHighDynamicRange, true);
            initData.SetFlag(FfxFsr2InitializationFlags.EnableDisplayResolutionMotionVectors, true);
            initData.SetFlag(FfxFsr2InitializationFlags.EnableMotionVectorsJitterCancellation, false);
            initData.SetFlag(FfxFsr2InitializationFlags.DepthInverted, true);
            initData.maxRenderSizeWidth = displaySizeWidth;
            initData.maxRenderSizeHeight = displaySizeHeight;
            initData.displaySizeWidth = displaySizeWidth;
            initData.displaySizeHeight = displaySizeHeight;
            fsr2Context = amdDevice.CreateFeature(ctx.cmd, initData);            // At this point, we can access the readonly initData within the fsr2Context.
            Debug.LogFormat("FSR2 Context:\n" +
                    "\tmaxRenderSizeWidth={0}\n\tmaxRenderSizeHeight={1}\n" +
                    "\tdisplaySizeWidth={2}\n\tdisplaySizeHeight={3}\n" +
                    "\tflags={4}",
                fsr2Context.initData.maxRenderSizeWidth,
                fsr2Context.initData.maxRenderSizeHeight,
                fsr2Context.initData.displaySizeWidth,
                fsr2Context.initData.displaySizeHeight,
                fsr2Context.initData.ffxFsrFlags
            );
        }        // pass execution code
    }    protected override void Cleanup()
    {
        // cleanup code
    }    private GraphicsDevice amdDevice = null;
    private FSR2Context fsr2Context = null;
    [SerializeField] public FSR2Quality m_Quality = FSR2Quality.Quality;
    // other fields
}
```


            
