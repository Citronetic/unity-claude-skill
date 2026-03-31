This version of Unity is unsupported.



# [SpriteRenderer](SpriteRenderer.html).size




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












                    public [Vector2](Vector2.html) size;






### Description



Property to set or get the size to render when the [SpriteRenderer.drawMode](SpriteRenderer-drawMode.html) is set to [SpriteDrawMode.Sliced](SpriteDrawMode.Sliced.html) or [SpriteDrawMode.Tiled](SpriteDrawMode.Tiled.html).





Assigning a Sprite to [SpriteRenderer.sprite](SpriteRenderer-sprite.html) when it is null will also set the [SpriteRenderer.size](SpriteRenderer-size.html) value to the Sprite's width and height.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private Rigidbody2D rb;
    private SpriteRenderer sprRend;    void Awake()
    {
        sprRend = gameObject.AddComponent<SpriteRenderer>() as SpriteRenderer;
        sprRend.drawMode = SpriteDrawMode.Sliced;        rb = gameObject.AddComponent<Rigidbody2D>() as Rigidbody2D;
        rb.bodyType = RigidbodyType2D.Kinematic;
    }    void Start()
    {
        gameObject.GetComponent<SpriteRenderer>().sprite = Resources.Load<Sprite>("image256x128");
        gameObject.transform.Translate(0.0f, 0.0f, 0.0f);
    }    void Update()
    {
        //Press the Space key to increase the size of the sprite
        if (Input.GetKey(KeyCode.Space))
        {
            sprRend.size += new Vector2(0.05f, 0.01f);
            Debug.Log("Sprite size: " + sprRend.size.ToString("F2"));
        }
    }
}
```


            
