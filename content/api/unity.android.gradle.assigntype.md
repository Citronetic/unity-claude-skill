This version of Unity is unsupported.



# AssignType





enumeration


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



















### Description



An assign type for property elements.





Properties in gradle files use different ways to assign a value. Use the `AssignType` parameter to choose which way to assign the property value.


              


```
using Unity.Android.Gradle;
using UnityEditor.Android;public class ModifyProject : AndroidProjectFilesModifier
{
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // This will produce "buildToolsVersion = '30.0.0'"
        projectFiles.UnityLibraryBuildGradle.Android.BuildToolsVersion.Set("30.0.0", AssignType.Equals);
        // This will produce "compileSdk(30)"
        projectFiles.UnityLibraryBuildGradle.Android.CompileSdk.Set(30, AssignType.Parentheses);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | Places value after a space: property value. |
| Equals | Places value after an equals: property = value. |
| PlusEquals | Places value after plus-equals: property += value. |
| Column | Places value after a column: property : value. |
| Parentheses | Places value in parentheses: property(value). |
| Brackets | Places value in brackets: property [value]. |
| EqualsBrackets | Places value in brackets after an equals: property = [value]. |
| SetFunction | Places value in a set function: property.set(value). |


            
