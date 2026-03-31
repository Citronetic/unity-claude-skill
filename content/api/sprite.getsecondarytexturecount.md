This version of Unity is unsupported.



# [Sprite](Sprite.html).GetSecondaryTextureCount




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

public int GetSecondaryTextureCount();






### Returns



**int**
        Returns the number of Secondary Textures that the Sprite is using.





### Description



Gets the number of Secondary Textures that the Sprite is using.


              


```
using UnityEngine;// Create a Sprite with Secondary Texture properties and retrieves the total number of
// Secondary Texture properties the Sprite has.public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        var texture = new Texture2D(64, 64);
        var secondaryTexture1 = new Texture2D(64, 64);
        var secondaryTexture2 = new Texture2D(64, 64);
        var secondaryTexture3 = new Texture2D(64, 64);
        var secondarySpriteTexture = new[]
        {
            new SecondarySpriteTexture()
            {
                name = "_SecondaryTexture1",
                texture = secondaryTexture1
            },
            new SecondarySpriteTexture()
            {
                name = "_SecondaryTexture2",
                texture = secondaryTexture2
            },
            new SecondarySpriteTexture()
            {
                name = "_SecondaryTexture3",
                texture = secondaryTexture3
            }
        };        var sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero, 100, 0, SpriteMeshType.FullRect, Vector4.zero, false, secondarySpriteTexture);
        int spriteSecondaryTextureCount = sprite.GetSecondaryTextureCount();
        // This will print 3 since there are 3 Secondary Texture properties in the Sprite.
        print(spriteSecondaryTextureCount);
    }
}
```


            
