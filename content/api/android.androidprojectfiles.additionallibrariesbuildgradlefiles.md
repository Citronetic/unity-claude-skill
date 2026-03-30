This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).AdditionalLibrariesBuildGradleFiles




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












                    public IReadOnlyDictionary<string,ModuleBuildGradleFile> AdditionalLibrariesBuildGradleFiles;






### Description



A representation of the `build.gradle` files that were added to plug-ins (libraries) that didn't have a `build.gradle` file.





Files are located in `unityLibrary/{pluginName}/build.gradle`.

                    If you have a plug-in called `myLibrary` that doesn't contain `build.gradle` file, the file will be generated and placed in `unityLibrary/mylibrary.androidlib/build.gradle`. You can use this path to access the file object in this dictionary.


              


```
using System.IO;
using UnityEditor.Android;
using Unity.Android.Gradle;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Add a Google() repository to a build.gradle file in mylibrary.androidlib library
        var myLibraryBuildGradle = projectFiles.AdditionalLibrariesBuildGradleFiles[Path.Combine("unityLibrary", "mylibrary.androidlib", "build.gradle")];
        myLibraryBuildGradle.Repositories.AddRepository(Repositories.Google);
    }
}
```


            
