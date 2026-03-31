This version of Unity is unsupported.



# [Font](Font.html).GetOSInstalledFontNames




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

public static string[] GetOSInstalledFontNames();






### Returns



**string[]**
        An array of the names of all fonts installed on the machine.





### Description



Get names of fonts installed on the machine.





GetOSInstalledFontNames lets you get the names of all the fonts installed on the machine. These names can be passed to [CreateDynamicFontFromOSFont](Font.CreateDynamicFontFromOSFont.html), to dynamically render text using any font installed on the user's OS.


              


```
using UnityEngine;
using System.Collections;// A simple UI to display a selection of OS fonts and allow changing the UI font to any of them.
public class FontSelector : MonoBehaviour
{
    Vector2 scrollPos;
    string[] fonts;    void Start()
    {
        fonts = Font.GetOSInstalledFontNames();
    }    void OnGUI()
    {
        scrollPos = GUILayout.BeginScrollView(scrollPos);        foreach (var font in fonts)
        {
            if (GUILayout.Button(font))
                GUI.skin.font = Font.CreateDynamicFontFromOSFont(font, 12);
        }
        GUILayout.EndScrollView();
    }
}
```


            
