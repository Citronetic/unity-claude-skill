This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetAssetListFromSelection




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

public static [VersionControl.AssetList](VersionControl.AssetList.html) GetAssetListFromSelection();






### Description



Returns the version control information about the currently selected Assets.





This method effectively adds all of the currently selected Assets to a [AssetList](VersionControl.AssetList.html) which can be used for further processing.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetAssetListFromSelection")]
    public static void ExampleGetAssetListFromSelection()
    {
        AssetList assets = Provider.GetAssetListFromSelection();
        Debug.Log("Selected asset: " + assets[0].name.ToString());
    }
}
```





The code above adds the currently selected Asset to an [AssetList](VersionControl.AssetList.html) and outputs its name to the console.


            
