This version of Unity is unsupported.



# IRenderPipelineResources





interface in
          UnityEngine.Rendering


                  Leave feedback





Implements interfaces:[IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html)




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



Classes implementing this interface contain the resources required for your graphic features to work.





Classes implementing this interface will contain all the resources that are mandatory for your Render Pipeline to work.
There is a mechanism that allows to set up null fields for you based on [ResourcePathAttribute](Rendering.ResourcePathAttribute.html) attribute. When the resource is created, a loading mechanism is called to make sure your resources are not created with null values. It is only called automatically at creation.

See also ResourceContainerAttribute.


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System;[Serializable]
[SupportedOnRenderPipeline(typeof(DummyPipelineAsset))]
class MyResourceForFeatureX : IRenderPipelineResources
{
    enum Version
    {
        Initial,
        ChangedIcon1,
        ChangedShader,

        Count,
        Last = Count - 1
    }
    [SerializeField, HideInInspector] Version m_version = Version.Last;
    public int version => (int)m_version;    [ResourcePath("ResourceAssets/resourceIcon1.png")]
    public Texture2D icon1;
    [ResourcePath("ResourceAssets/resourceIcon2.png")]
    public Texture2D icon2;
    [ResourcePath("My/Shader/Path", ResourcePathAttribute.SearchType.ShaderName)]
    public Shader shader;
}
```





Here we add a MyResourceForFeatureX that contains various icons and shader for a rendering feature. With the SupportedOn, we only add it for the SRP Universal Render Pipeline. Feel free to replace it by your own pipeline or HDRenderPipelineAsset if you use them.


            
