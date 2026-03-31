This version of Unity is unsupported.



# [Material](Material.html).mainTextureScale




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







                    public [Vector2](Vector2.html) mainTextureScale;






### Description



The scale of the main texture.





By default, Unity considers a texture with the property name name `"_MainTex"` to be the main texture. Use the `[MainTexture]` [ShaderLab Properties attribute](../Manual/SL-Properties.html) to make Unity consider a texture with a different property name to be the main texture.

This is the same as calling [Material.GetTextureScale](Material.GetTextureScale.html) or [Material.SetTextureScale](Material.SetTextureScale.html) with the property name of the main texture as a parameter.

Additional resources: [SetTextureScale](Material.SetTextureScale.html), [GetTextureScale](Material.GetTextureScale.html), [ShaderLab: Properties](../Manual/SL-Properties.html), [ShaderPropertyFlags.MainTexture](Rendering.ShaderPropertyFlags.MainTexture.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer>();
    }    void Update()
    {
        // Animates main texture scale in a funky way!
        float scaleX = Mathf.Cos(Time.time) * 0.5f + 1;
        float scaleY = Mathf.Sin(Time.time) * 0.5f + 1;
        rend.material.mainTextureScale = new Vector2(scaleX, scaleY);
    }
}
```


            
