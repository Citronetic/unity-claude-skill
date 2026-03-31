This version of Unity is unsupported.



# [Texture](Texture.html).height




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












                    public int height;






### Description



Height of the Texture in pixels.





This value is the height of the Texture at the highest resolution that [PlayerSettings.mipStripping](PlayerSettings-mipStripping.html) allows.

In the Unity Editor, this returns the height of the Texture at full resolution.

At run time, if [PlayerSettings.mipStripping](PlayerSettings-mipStripping.html) is disabled, this returns the height of the Texture at full resolution. If [PlayerSettings.mipStripping](PlayerSettings-mipStripping.html) is enabled, this returns the height of the Texture at the highest resolution that has not been stripped.


Additional resources: [QualitySettings.globalTextureMipmapLimit](QualitySettings-globalTextureMipmapLimit.html), [PlayerSettings.mipStripping](PlayerSettings-mipStripping.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Print Texture size to the Console
    Texture Texture;
    void Start()
    {
        print("Size is " + Texture.width + " by " + Texture.height);
    }
}
```


            
