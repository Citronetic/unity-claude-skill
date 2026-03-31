This version of Unity is unsupported.



# [Material](Material.html).mainTextureOffset




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




                [Switch to Manual](../Manual/class-Material.html)







                    public [Vector2](Vector2.html) mainTextureOffset;






### Description



Defines the UV offset for the main texture in the Material. This property adjusts the position of the texture mapping on a Mesh surface relative to its UV coordinates.





By default, Unity considers a texture with the property name `"_MainTex"` to be the main texture. Use the `[MainTexture]` [ShaderLab Properties attribute](../Manual/SL-Properties.html) to make Unity consider a texture with a different property name to be the main texture.

This property is equivalent to calling [Material.GetTextureOffset](Material.GetTextureOffset.html) or [Material.SetTextureOffset](Material.SetTextureOffset.html) with main texture name as an argument. To modify the offset of other textures in the Material, use the equivalent methods with their respective property names.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Scroll the main texture based on time    float scrollSpeed = 0.5f;
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer> ();
    }    void Update()
    {
        float offset = Time.time * scrollSpeed;
        rend.material.mainTextureOffset = new Vector2(offset, 0);
    }
}
```


            
