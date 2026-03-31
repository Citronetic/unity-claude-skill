This version of Unity is unsupported.



# IRenderPipelineGraphicsSettings





interface in
          UnityEngine.Rendering


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



Classes implementing this interface are stored in [RenderPipelineGlobalSettings](Rendering.RenderPipelineGlobalSettings.html). Use them to store project default data.


              


```
using System;
using System.ComponentModel;
using UnityEngine;
using UnityEngine.Rendering;[
    Serializable,               // required
    Categorization.CategoryInfo("Dummy",1), Categorization.ElementInfo("A",10), // optional: sort out in the Graphics tab
    SupportedOnRenderPipeline   // optional: which SRP support it
]
public class DummyA : IRenderPipelineGraphicsSettings
{
    enum Version
    {
        Initial,        Count,
        Last = Count - 1
    }
    [SerializeField] Version m_Version = Version.Last;
    int IRenderPipelineGraphicsSettings.version => (int)m_Version;
    bool IRenderPipelineGraphicsSettings.isAvailableInPlayerBuild => false;    // data project wise
    public int myInt = 33;
}
```





### Properties



| Property | Description |
| --- | --- |
| isAvailableInPlayerBuild | If the setting is available in player build. |
| version | The current version of this settings. |





### Public Methods



| Method | Description |
| --- | --- |
| Reset | Optional method to perform custom reset logic. |


            
