This version of Unity is unsupported.



# [Image](UIElements.Image.html).image




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












                    public [Texture](Texture.html) image;






### Description



The texture to display in this image. If you assign a `Texture` or `Texture2D`, the Image element will resize and show the assigned texture.





The following example creates an `Image` element and assigns a texture to it.


              


```
using UnityEngine;
using UnityEngine.UIElements;public class AddImageExample : MonoBehaviour
{
    public Texture2D myTexture;
    void OnEnable()
    {
        var root = GetComponent<UIDocument>().rootVisualElement;
        var imageElement = new Image();
        imageElement.image = myTexture;
        root.Add(imageElement);
    }
}
```


            
