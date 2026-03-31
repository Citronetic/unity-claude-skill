This version of Unity is unsupported.



# [Material](Material.html).SetTextureScale




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

public void SetTextureScale(string name,
[Vector2](Vector2.html) value);






## Declaration

public void SetTextureScale(int nameID,
[Vector2](Vector2.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name, e.g. "_MainTex". |
| value | Texture placement scale. |





### Description



Sets the placement scale of texture `propertyName`.





Additional resources: [mainTextureScale](Material-mainTextureScale.html) property, [GetTextureScale](Material.GetTextureScale.html), [SetTexture](Material.SetTexture.html).


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
        // Animates main texture scale in a funky way!
        float scaleX = Mathf.Cos(Time.time) * 0.5f + 1;
        float scaleY = Mathf.Sin(Time.time) * 0.5f + 1;
        rend.material.SetTextureScale("_MainTex", new Vector2(scaleX, scaleY));
    }
}
```


            
