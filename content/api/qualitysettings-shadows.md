This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).shadows




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




                [Switch to Manual](../Manual/class-QualitySettings.html)







                    public static [ShadowQuality](ShadowQuality.html) shadows;






### Description



Real-time Shadows type to be used.





This determines which type of shadows should be used. The available options are Hard and Soft Shadows, Hard Shadows Only and Disable Shadows.

Additional resources: [Light.shadows](Light-shadows.html).


              


```
using UnityEngine;// Let the shadow quality be selectedpublic class ExampleScript : MonoBehaviour
{
    private int selection = 0;
    private string[] itemName = {"   Disable   ", "   HardOnly   ", "   Hard and Soft   "};    void Start()
    {
        QualitySettings.shadows = ShadowQuality.All;
    }    void OnGUI()
    {
        GUILayout.BeginVertical("Box");
        selection = GUILayout.SelectionGrid(selection, itemName, 1, GUILayout.MinWidth(200), GUILayout.MinHeight(100));
        GUILayout.EndVertical();        switch (selection)
        {
            case 0: QualitySettings.shadows = ShadowQuality.Disable; break;
            case 1: QualitySettings.shadows = ShadowQuality.HardOnly; break;
            default: QualitySettings.shadows = ShadowQuality.All; break;
        }
    }
}
```


            
