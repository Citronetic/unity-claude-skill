This version of Unity is unsupported.



# [SpriteAtlasManager](U2D.SpriteAtlasManager.html).atlasRegistered




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



Trigger when a [SpriteAtlas](U2D.SpriteAtlas.html) is registered via invoking the callback in [SpriteAtlasManager.atlasRequested](U2D.SpriteAtlasManager-atlasRequested.html).


              


```
using UnityEngine;
using UnityEngine.U2D;public class AtlasRegistrationListener : MonoBehaviour
{
    void OnEnable()
    {
        SpriteAtlasManager.atlasRegistered += AtlasRegistered;
    }    void OnDisable()
    {
        SpriteAtlasManager.atlasRegistered -= AtlasRegistered;
    }    void AtlasRegistered(SpriteAtlas spriteAtlas)
    {
        Debug.LogFormat("Registered {0}.", spriteAtlas.name);
    }
}
```





Additional resources: [SpriteAtlasManager.atlasRegistered](U2D.SpriteAtlasManager-atlasRegistered.html).


            
