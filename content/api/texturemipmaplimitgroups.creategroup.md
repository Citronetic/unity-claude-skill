This version of Unity is unsupported.



# [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html).CreateGroup




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

public static void CreateGroup(string groupName);






### Parameters



| Parameter | Description |
| --- | --- |
| groupName | Name of the new texture mipmap limit group. |





### Description



(Editor Only) Attempts to create a texture mipmap limit group with the indicated `groupName`.





This operation fails and throws an exception if `groupName` is null/empty or a texture mipmap limit group with the same name already exists. If no other group with the same name exists, Unity creates the new group across all quality levels. By default, the new group mirrors the global texture mipmap limit.

If Unity creates the new group successfully, textures previously bound to `groupName` stop using [QualitySettings.globalTextureMipmapLimit](QualitySettings-globalTextureMipmapLimit.html) as a fallback and begin respecting the new group's [TextureMipmapLimitSettings](TextureMipmapLimitSettings.html) instead.


              


```
#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    // Attempts to create a texture mipmap limit group with the name "MyGroup", as long as it doesn't exist already.
    [MenuItem("MyMenu/Create MipmapLimitGroup")]
    static void CreateMyGroup()
    {
        const string textureMipmapLimitGroup = "MyGroup";
        if (!TextureMipmapLimitGroups.HasGroup(textureMipmapLimitGroup))
        {
            TextureMipmapLimitGroups.CreateGroup(textureMipmapLimitGroup);
        }
        else
        {
            Debug.LogError($"Cannot create new texture mipmap limit group '{textureMipmapLimitGroup}', it already exists!");
        }
    }
}
#endif
```





Additional resources: [HasGroup](TextureMipmapLimitGroups.HasGroup.html), [RemoveGroup](TextureMipmapLimitGroups.RemoveGroup.html).


            
