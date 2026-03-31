This version of Unity is unsupported.



# [Material](Material.html).SetTextureOffset




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










## Declaration

public void SetTextureOffset(string name,
[Vector2](Vector2.html) value);






## Declaration

public void SetTextureOffset(int nameID,
[Vector2](Vector2.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | The name of the texture property as defined in the shader. For example: "_MainTex". |
| value | Texture placement offset. |





### Description



Sets the placement offset of a given texture. The `name` parameter is defined in the shader. This method creates a new Material instance.





Additional resources: [mainTextureOffset](Material-mainTextureOffset.html) property, [GetTextureOffset](Material.GetTextureOffset.html), [SetTexture](Material.SetTexture.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Scroll main texture based on time    float scrollSpeed = 0.5f;
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer> ();
    }    void Update()
    {
        float offset = Time.time * scrollSpeed;
        rend.material.SetTextureOffset("_TextureName", new Vector2(offset, 0));
    }
}
```


            
