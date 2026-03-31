This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).extraUserProperties




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












                    public string[] extraUserProperties;






### Description



A list of default FBX properties to treat as user properties during OnPostprocessGameObjectWithUserProperties.





Specify the names of default FBX properties to be consider as extra user properties to pass to [AssetPostprocessor.OnPostprocessGameObjectWithUserProperties](AssetPostprocessor.OnPostprocessGameObjectWithUserProperties.html).


              


```
using UnityEditor;
using UnityEngine;public class MyPostProcessor : AssetPostprocessor
{
    public override uint GetVersion() => 1;    //Adding 1 FBX default properties to be considered as UserProperties + 1 not existing in the imported FBX
    private void OnPreprocessModel()
    {
        string[] extraUserPropertyNames =
        {
            "currentUVSet",
            "MyNonFbxDefaultProperty"
        };
        ((ModelImporter)assetImporter).extraUserProperties = extraUserPropertyNames;
    }    //Importing a FBX with a user defined Property "MyDefinedProperty"
    private void OnPostprocessGameObjectWithUserProperties(GameObject go, string[] propNames, object[] values)
    {
        foreach (var propName in propNames)
        {
            Debug.Log(propName);
        }
    }    // Will display :
    //  currentUVSet
    //  MyDefinedProperty
}
```


            
