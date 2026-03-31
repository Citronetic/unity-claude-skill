This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).clipAnimations




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












                    public ModelImporterClipAnimation[] clipAnimations;






### Description



Animation clips to split animation into. Additional resources: [ModelImporterClipAnimation](ModelImporterClipAnimation.html).





When you import a file for the first time clipAnimations will be always empty.
If you need to populate clipAnimations before the first import you can use an [AssetPostprocessor](AssetPostprocessor.html) and override [AssetPostprocessor.OnPreprocessAnimation](AssetPostprocessor.OnPreprocessAnimation.html).


              


```
using UnityEditor;
using UnityEngine;public class CreateAnimationClip : AssetPostprocessor
{
    void OnPreprocessAnimation()
    {
        var modelImporter = assetImporter as ModelImporter;
        modelImporter.clipAnimations = modelImporter.defaultClipAnimations;
    }
}
```


            
