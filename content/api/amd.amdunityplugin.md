This version of Unity is unsupported.



# AMDUnityPlugin





class in
          UnityEngine.AMD



/



Implemented in:[UnityEngine.AMDModule](UnityEngine.AMDModule.html)


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



Provides methods to manage loading and unloading AMD module plugins.





`AMDUnityPlugin` contains the implementation for AMD's [FidelityFX Super Resolution 2](https://gpuopen.com/fidelityfx-superresolution-2/) (FSR2) temporal upscaler.

To access this API, follow these steps:



          1. Open the **Package Manager** window

          2. Go to **Built-in packages**.

          3. Enable the **AMD** package.





Once enabled, the plugin is automatically loaded by Unity and becomes available for both built-in and custom FSR2 integration workflows.

**Note:** You don't need to use this API to enable FSR2 in a Unity project. For more information, refer to [HDRP Dynamic Resolution](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.2/manual/Dynamic-Resolution.html).

`AMDUnityPlugin` enables advanced users to access and integrate AMD's FSR2 functionality directly in custom rendering workflows.
It's primarily intended for users who want to bypass the built-in engine integration available in the High Definition Render Pipeline (HDRP) and implement their own FSR2 logic, such as through a `CustomPass` or other Scriptable Render Pipeline (SRP) extensions.

When using this API manually, it's good practice to verify that the plugin is available using [AMDUnityPlugin.IsLoaded](AMD.AMDUnityPlugin.IsLoaded.html).
In case the plugin fails to load automatically (for example, the end user isn't using the native AMD package), you can load it manually using [AMDUnityPlugin.Load](AMD.AMDUnityPlugin.Load.html).

Additional resources: [FSR2Context](AMD.FSR2Context.html), [GraphicsDevice](AMD.GraphicsDevice.html), [CommandBuffer](Rendering.CommandBuffer.html), [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.HighDefinition;
using UnityEngine.AMD;// Example HDRP custom pass
public class CustomFSRPass : CustomPass
{
    public static bool EnsureAMDPluginLoaded()
    {
        if (!AMDUnityPlugin.IsLoaded())
        {
            Debug.Log("AMDUnityPlugin is not loaded!");
            if (!AMDUnityPlugin.Load())
            {
                Debug.LogError("Unable to load AMDUnityPlugin");
                return false;
            }
        }        Debug.Log("AMDUnityPlugin is successfully loaded!");
        return true;
    }    void InitializeAMDDevice()
    {
        if (!EnsureAMDPluginLoaded())
            return;        // device initialization code
    }    protected override void Setup(ScriptableRenderContext renderContext, CommandBuffer cmd)
    {
        if (amdDevice == null)
        {
            InitializeAMDDevice();
        }

        // other pass setup code
    }    protected override void Execute(CustomPassContext ctx)
    {
        // pass execution code
    }    protected override void Cleanup()
    {
        // pass cleanup code
    }    private GraphicsDevice amdDevice = null;
    // other member variables
}
```





### Static Methods



| Method | Description |
| --- | --- |
| IsLoaded | Checks whether the AMDUnityPlugin in the AMD native module has been loaded or not. |
| Load | Attempts to dynamically load the AMDUnityPlugin. |


            
