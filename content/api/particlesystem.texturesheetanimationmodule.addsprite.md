This version of Unity is unsupported.



# [ParticleSystem.TextureSheetAnimationModule](ParticleSystem.TextureSheetAnimationModule.html).AddSprite




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




                [Switch to Manual](../Manual/class-ParticleSystem.html)










## Declaration

public void AddSprite([Sprite](Sprite.html) sprite);






### Parameters



| Parameter | Description |
| --- | --- |
| sprite | The Sprite to be added. |





### Description



Add a new Sprite.





Additional resources: [ParticleSystem.TextureSheetAnimationModule.RemoveSprite](ParticleSystem.TextureSheetAnimationModule.RemoveSprite.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private Sprite sprite;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        sprite = Sprite.Create(Texture2D.whiteTexture, new Rect(0, 0, 1, 1), Vector2.zero);        var textureSheetAnimation = ps.textureSheetAnimation;
        textureSheetAnimation.enabled = true;
        textureSheetAnimation.mode = ParticleSystemAnimationMode.Sprites;
        textureSheetAnimation.AddSprite(sprite);
    }
}
```


            
