This version of Unity is unsupported.



# [AssetImportContext](AssetImporters.AssetImportContext.html).DependsOnCustomDependency




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

public void DependsOnCustomDependency(string dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| dependency | Name of dependency. You can use any name you like, but because these names are global across all your Assets, it can be useful to use a naming convention (eg a path-based naming system as in the example below) to avoid clashes with other custom dependency names. |





### Description



Allows you to specify that an Asset has a custom dependency.





Use custom dependency if need to setup a dependency to something that can't be expressed as either an source asset dependency or artifact dependency.


              


```
using UnityEngine;
using UnityEditor.AssetImporters;
using UnityEditor.Experimental;
using UnityEngine.Assertions;
using UnityEditor;class MySystem
{
    public const string CustomDependencyName = "MyProject/Settings";    public static string GetSetting()
    {
        return "42";
    }    public static void RegisterCustomDependency()
    {
        // You cannot register a custom dependency during the Asset Import process, so this method must be called before the Asset is imported.
        UnityEditor.AssetDatabase.RegisterCustomDependency(CustomDependencyName, Hash128.Compute(GetSetting()));
    }
}class SomeValue : ScriptableObject
{
    public int value;
}[ScriptedImporter(1, "data", AllowCaching = true)]
public class MyDataImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        ctx.DependsOnCustomDependency(MySystem.CustomDependencyName);        var someObj = ScriptableObject.CreateInstance<SomeValue>();        var setting = MySystem.GetSetting();
        if (setting == "42")
            someObj.value = 100;
        else
            someObj.value = -1;        ctx.AddObjectToAsset("someObj", someObj);
    }
}
```


            
