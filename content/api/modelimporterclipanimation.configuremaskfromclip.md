This version of Unity is unsupported.



# [ModelImporterClipAnimation](ModelImporterClipAnimation.html).ConfigureMaskFromClip




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

public void ConfigureMaskFromClip(ref [AvatarMask](AvatarMask.html) mask);






### Parameters



| Parameter | Description |
| --- | --- |
| mask | AvatarMask to which the masking values will be saved. |





### Description



Copy the current masking settings from the clip to an [AvatarMask](AvatarMask.html).





When writing an [AssetPostprocessor](AssetPostprocessor.html), use this method to copy the  [AvatarMask](AvatarMask.html) from your clip configuration so that you can modify it.

Note: you will need to use [ModelImporterClipAnimation.ConfigureClipFromMask](ModelImporterClipAnimation.ConfigureClipFromMask.html) to apply the [AvatarMask](AvatarMask.html) back on the [ModelImporterClipAnimation](ModelImporterClipAnimation.html)

See also: [ModelImporterClipAnimation.ConfigureClipFromMask](ModelImporterClipAnimation.ConfigureClipFromMask.html).


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


            
