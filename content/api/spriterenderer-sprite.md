This version of Unity is unsupported.



# [SpriteRenderer](SpriteRenderer.html).sprite




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












                    public [Sprite](Sprite.html) sprite;






### Description



The Sprite to render.





The [SpriteRenderer](SpriteRenderer.html) component will render the assigned Sprite.sprite
          sprite.  The rendered sprite can be changed by specifying a different
          sprite in the [sprite](SpriteRenderer-sprite.html) variable.


              


```
// Example that loads sprites from a texture in the Resources folder
// and allows them to be chosen by the selection button.using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private string spriteNames = "part_explosion";
    private Rect buttonPos;
    private int spriteVersion = 0;
    private SpriteRenderer spriteR;
    private Sprite[] sprites;    void Start()
    {
        buttonPos = new Rect(10.0f, 10.0f, 150.0f, 50.0f);
        spriteR = gameObject.GetComponent<SpriteRenderer>();
        sprites = Resources.LoadAll<Sprite>(spriteNames);
    }    void OnGUI()
    {
        if (GUI.Button(buttonPos, "Choose next sprite"))
        {
            spriteVersion += 1;
            if (spriteVersion > 3)
                spriteVersion = 0;
            spriteR.sprite = sprites[spriteVersion];
        }
    }
}
```


            
