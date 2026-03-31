This version of Unity is unsupported.



# [GUIContent](GUIContent.html).image




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



The icon image contained.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    public Texture icon;    void OnGUI()
    {
        if (!icon)
        {
            Debug.LogError("Add a texture on the inspector first");
            return;
        }
        GUI.Button(new Rect(0, 0, 100, 20), new GUIContent(icon));
    }
}
```


            
