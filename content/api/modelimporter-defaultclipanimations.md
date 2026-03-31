This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).defaultClipAnimations




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












                    public ModelImporterClipAnimation[] defaultClipAnimations;






### Description



Generate a list of all default animation clip based on TakeInfo.





Additional resources: [ModelImporterClipAnimation](ModelImporterClipAnimation.html). Additional resources: [TakeInfo](TakeInfo.html).


              


```
using UnityEngine;
using UnityEditor;
public class CreateAnimationClip : AssetPostprocessor
{
    void OnPreprocessAnimation()
    {
        ModelImporter modelImporter = assetImporter as ModelImporter;
        modelImporter.clipAnimations = modelImporter.defaultClipAnimations;
    }
}
```


            
