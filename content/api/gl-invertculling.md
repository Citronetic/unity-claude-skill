This version of Unity is unsupported.



# [GL](GL.html).invertCulling




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












                    public static bool invertCulling;






### Description



Select whether to invert the backface culling (true) or not (false).





This flag can "flip" the culling mode of all rendered objects. Major use case: rendering reflections for mirrors, water etc. Since virtual camera for rendering the reflection is mirrored, the culling order has to be inverted. You can see how the Water script in Effects standard package does that.


              


```
// When attached to the camera, this script
// will make all rendering be flipped "inside out",
// i.e. back faces of objects will be rendered instead
// of front faces.
using UnityEngine;[ExecuteInEditMode]
public class ExampleScript : MonoBehaviour
{
    private bool oldCulling;
    public void OnPreRender()
    {
        oldCulling = GL.invertCulling;
        GL.invertCulling = true;
    }    public void OnPostRender()
    {
        GL.invertCulling = oldCulling;
    }
}
```


            
