This version of Unity is unsupported.



# DownloadHandlerTexture Constructor




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

public DownloadHandlerTexture();






### Description



Default constructor.





Convenience constructor. Assumes the value of `readable` is `false`. The [Texture](Texture.html) returned by `texture` will not have its texture data accessible from script.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;public class Example : MonoBehaviour
{
    IEnumerator Start()
    {
        using (var uwr = new UnityWebRequest("https://website.com/image.jpg", UnityWebRequest.kHttpVerbGET))
        {
            uwr.downloadHandler = new DownloadHandlerTexture();
            yield return uwr.SendWebRequest();
            GetComponent<Renderer>().material.mainTexture = DownloadHandlerTexture.GetContent(uwr);
        }
    }
}
```




---








## Declaration

public DownloadHandlerTexture(bool readable);






### Parameters



| Parameter | Description |
| --- | --- |
| readable | Value to set for TextureImporter.isReadable. |





### Description



Constructor, allows [TextureImporter.isReadable](TextureImporter-isReadable.html) property to be set.





The value in `readable` will be used to set the [TextureImporter.isReadable](TextureImporter-isReadable.html) property when importing the downloaded texture data.




---








## Declaration

public DownloadHandlerTexture([Networking.DownloadedTextureParams](Networking.DownloadedTextureParams.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| parameters | Parameters specifying various properties of texture that will be created. |





### Description



Constructor that allows you to specify the full set of supported properties when creating a texture from a downloaded image.





The value of `parameters` allows control of more properties of the texture. Refer to [Texture2D](Texture2D.html) for more information about texture properties.


            
