This version of Unity is unsupported.



# [Sprite](Sprite.html).OverrideGeometry




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

public void OverrideGeometry(Vector2[] vertices,
ushort[] triangles);






### Parameters



| Parameter | Description |
| --- | --- |
| vertices | Array of vertex positions in Sprite Rect space. |
| triangles | Array of sprite mesh triangle indices. |





### Description



Sets up new Sprite geometry.





Vertex positions are in [Sprite.rect](Sprite-rect.html) space meaning from [Rect.zero](Rect-zero.html)
        to [Rect.size](Rect-size.html). Pivot offset and transformation to unit space is done automatically.

The size of the triangle array must always be a multiple of 3.  The vertices connected to the
triangle can be shared by simply indexing into the same vertex.

Sprite UVs are calculated automatically by mapping the provided geometry onto the Sprite's Texture.

The Sprite's mesh type will be changed to [SpriteMeshType.Tight](SpriteMeshType.Tight.html) when the API is called.

Additional resources: [Sprite.rect](Sprite-rect.html).

The script example below shows an example on how the API can be used.


              


```
// Switch a Sprite's geometry between a triangle and a quad.
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private SpriteRenderer m_SpriteRenderer;
    private Rect m_ButtonPos;
    void Start()
    {
        m_SpriteRenderer = gameObject.AddComponent<SpriteRenderer>();
        // Create a blank Texture and Sprite to override later on.
        var texture2D = new Texture2D(64, 64);
        m_SpriteRenderer.sprite = Sprite.Create(texture2D, new Rect(0, 0, texture2D.width, texture2D.height), Vector2.zero, 64);        m_ButtonPos = new Rect(10.0f, 10.0f, 200.0f, 30.0f);
    }    // Use OverrideGeometry to switch the Sprite's mesh to a triangle or quad
    void ChangeSprite()
    {
        Sprite o = m_SpriteRenderer.sprite;
        if (o.triangles.Length != 3)
        {
            var sv = new[]
            {
                new Vector2(0, 0),
                new Vector2(o.textureRect.width, 0),
                new Vector2(o.textureRect.width * 0.5f, o.textureRect.height),
            };
            var indices = new ushort[] { 0, 1, 2 };
            o.OverrideGeometry(sv, indices);
        }
        else
        {
            var sv = new[]
            {
                new Vector2(0, 0),
                new Vector2(o.textureRect.width, 0),
                new Vector2(o.textureRect.width, o.textureRect.height),
                new Vector2(0, o.textureRect.height),
            };
            var indices = new ushort[] { 0, 1, 2, 2, 3, 0 };
            o.OverrideGeometry(sv, indices);
        }
    }    void OnGUI()
    {
        if (GUI.Button(m_ButtonPos, "Perform OverrideGeometry"))
            ChangeSprite();
    }
}
```


            
