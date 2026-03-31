This version of Unity is unsupported.



# [Sprite](Sprite.html).texture




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












                    public [Texture2D](Texture2D.html) texture;






### Description



Get the reference to the used Texture. If packed this will point to the atlas, if not packed will point to the source Sprite.





This only returns the Texture the Sprite is currently using. You cannot change the Texture using this.


              


```
//Attach this script to a Sprite GameObject. Make sure it has a SpriteRenderer component (should have by default)
//Next, attach a second Sprite in the Inspector window of your first Sprite GameObjectusing UnityEngine;public class Example : MonoBehaviour
{
    SpriteRenderer m_SpriteRenderer;
    public Sprite m_Sprite;    void Start()
    {
        //Fetch the SpriteRenderer of the Sprite
        m_SpriteRenderer = GetComponent<SpriteRenderer>();
        //Output the current Texture of the Sprite (this returns the source Sprite if the Texture isn't packed)
        Debug.Log("Texture 1 : " + m_SpriteRenderer.sprite.texture);
    }    void Update()
    {
        //Press Space key to change the Sprite to the Sprite you attach in the Inspector
        if (Input.GetKeyDown(KeyCode.Space))
        {
            //Change the Sprite
            m_SpriteRenderer.sprite = m_Sprite;
            //Output the Texture of the new Sprite (this returns the source Sprite if the Texture isn't packed)
            Debug.Log("Texture 2 : " + m_SpriteRenderer.sprite.texture);
        }
    }
}
```


            
