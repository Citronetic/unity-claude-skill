This version of Unity is unsupported.



# TextureMipmapLimitSettings





struct in
          UnityEngine



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



Structure that represents texture mipmap limit settings.





This code example illustrates how to modify [TextureMipmapLimitSettings](TextureMipmapLimitSettings.html) from script.


              


```
#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    [MenuItem("MyMenu/Modify MyGroup")]
    static void ModifyMyGroup()
    {
        const string textureMipmapLimitGroupName = "MyGroup";
        if (TextureMipmapLimitGroups.HasGroup(textureMipmapLimitGroupName))
        {
            TextureMipmapLimitSettings settings = QualitySettings.GetTextureMipmapLimitSettings(textureMipmapLimitGroupName);            // For the currently active quality level, this group will now offset the Global Texture Mipmap Limit. (default behavior)
            settings.limitBiasMode = TextureMipmapLimitBiasMode.OffsetGlobalLimit;            // Drop 1 extra mip. Assuming that the limitBias is now 1 and that the Global Texture Mipmap Limit is 1 as well (for example), then textures assigned to 'MyGroup' drop 2 mips in total.
            settings.limitBias++;            QualitySettings.SetTextureMipmapLimitSettings(textureMipmapLimitGroupName, settings);
        }
        else
        {
            Debug.LogError($"Failed to modify settings, could not find texture mipmap limit group '{textureMipmapLimitGroupName}'!");
        }
    }
}
#endif
```





Additional resources: [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html), [QualitySettings.GetTextureMipmapLimitSettings](QualitySettings.GetTextureMipmapLimitSettings.html), [QualitySettings.SetTextureMipmapLimitSettings](QualitySettings.SetTextureMipmapLimitSettings.html).





### Properties



| Property | Description |
| --- | --- |
| limitBias | The new value to apply on top of the global texture mipmap limit. Can act as an offset (default) or an override to it. |
| limitBiasMode | Indicates whether the limitBias functions as an offset to the global texture mipmap limit or, instead, acts as an override to it. |


            
