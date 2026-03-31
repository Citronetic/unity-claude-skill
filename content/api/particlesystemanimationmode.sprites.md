This version of Unity is unsupported.



# [ParticleSystemAnimationMode](ParticleSystemAnimationMode.html).Sprites




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



Use a list of sprites to construct a sequence of animation frames.





Defines the sprites that are added to Texture Sheet Animation.

Additional resources: [ParticleSystemAnimationMode.Grid](ParticleSystemAnimationMode.Grid.html)


              


```
using UnityEngine;// A particle sprite example.
// The gameobject this script is attached to must have the
// ParticleSystem attached.  The TextureSheetAnimation mode
// is set to Sprites.  This script adds a single texture to
// the ParticleSystem.[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    public Texture2D tex;
    private ParticleSystem ps;
    private Sprite sprite;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        sprite = Sprite.Create(tex, new Rect(0.0f, 0.0f, tex.width, tex.height), Vector2.zero);        var textureSheetAnimation = ps.textureSheetAnimation;
        textureSheetAnimation.enabled = true;
        textureSheetAnimation.mode = ParticleSystemAnimationMode.Sprites;
        textureSheetAnimation.AddSprite(sprite);
    }
}
```


            
