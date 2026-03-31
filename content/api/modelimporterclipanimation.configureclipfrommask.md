This version of Unity is unsupported.



# [ModelImporterClipAnimation](ModelImporterClipAnimation.html).ConfigureClipFromMask




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

public void ConfigureClipFromMask([AvatarMask](AvatarMask.html) mask);






### Parameters



| Parameter | Description |
| --- | --- |
| mask | AvatarMask from which the mask settings will be imported. |





### Description



Copy the mask settings from an [AvatarMask](AvatarMask.html) to the clip configuration.





When writing an [AssetPostprocessor](AssetPostprocessor.html), use this method to copy an [AvatarMask](AvatarMask.html) to your clip configuration.

See also: [ModelImporterClipAnimation.ConfigureMaskFromClip](ModelImporterClipAnimation.ConfigureMaskFromClip.html).


              


```
using UnityEditor;
using UnityEngine;public class CopyAvatarMask : AssetPostprocessor
{
    void OnPreprocessAnimation()
    {
        var modelImporter = assetImporter as ModelImporter;        //Create a new AvatarMask to edit the mask
        var mask = new AvatarMask();
        var clips = modelImporter.clipAnimations;        //Acquire the mask from the clip
        clips[0].ConfigureMaskFromClip(ref mask);        //Filter out the first non-root (0) bone
        mask.SetTransformActive(1, false);        //Apply the mask back to the clip
        clips[0].ConfigureClipFromMask(mask);        //Apply the clips back to the ModelImporter
        modelImporter.clipAnimations = clips;        //Destroy the AvatarMask since we're not using it anymore
        Object.DestroyImmediate(mask);
    }
}
```


            
