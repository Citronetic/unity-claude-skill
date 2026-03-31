This version of Unity is unsupported.



# [AudioImporter](AudioImporter.html).forceToMono




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












                    public bool forceToMono;






### Description



Force audioclips to mono sound type, so all audio plays through a single channel.


              


```
using UnityEngine;
using UnityEditor;public class Example : AssetPostprocessor
{
    void OnPreprocessAudio()
    {
        AudioImporter audioImporter = assetImporter as AudioImporter;
        if (assetPath.Contains("mono"))
        {
            audioImporter = assetImporter as AudioImporter;
            audioImporter.forceToMono = true;
        }
    }
}
```


            
