This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetDependencies




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

public static string[] GetDependencies(string pathName);






## Declaration

public static string[] GetDependencies(string pathName,
bool recursive);






### Parameters



| Parameter | Description |
| --- | --- |
| pathName | The path to the asset for which dependencies are required. |
| recursive | Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false). |





### Returns



**string[]**
        The paths of all assets that the input depends on.





### Description



Returns an array of all the assets that are dependencies of the asset at the specified **pathName**.

**Note:** [GetDependencies](AssetDatabase.GetDependencies.html)() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  [GetDependencies](AssetDatabase.GetDependencies.html)() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.





If **recursive** is true, the list returned will also include the input path itself.  Note that this function returns all assets that are referenced by the input asset; these references are not necessarily required during the build process.




---








## Declaration

public static string[] GetDependencies(string[] pathNames);






## Declaration

public static string[] GetDependencies(string[] pathNames,
bool recursive);






### Parameters



| Parameter | Description |
| --- | --- |
| pathNames | The path to the assets for which dependencies are required. |
| recursive | Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false). |





### Returns



**string[]**
        The paths of all assets that the input depends on.





### Description



Returns an array of the paths of assets that are dependencies of all the assets in the list of **pathName**s that you provide.

**Note:** [GetDependencies](AssetDatabase.GetDependencies.html)() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  [GetDependencies](AssetDatabase.GetDependencies.html)() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.





If **recursive** is true, the list returned will also include the input paths themselves.  Note that this function returns all assets that are referenced by the input asset; these references are not necessarily required during the build process.


              


```
using System.Text;
using UnityEditor;
using UnityEngine;public class GetDependenciesExample : MonoBehaviour
{
    [MenuItem("APIExamples/GetDependencies")]
    static void GetAllDependenciesForScenes()
    {
        var allScenes = AssetDatabase.FindAssets("t:Scene");
        string[] allPaths = new string[allScenes.Length];
        int curSceneIndex = 0;        foreach (var guid in allScenes)
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            allPaths[curSceneIndex] = path;
            ++curSceneIndex;
        }        var dependencies = AssetDatabase.GetDependencies(allPaths);        StringBuilder dependenciesString = new StringBuilder();
        dependenciesString.AppendLine();        foreach (var curDependency in dependencies)
        {
            dependenciesString.Append(curDependency);
            dependenciesString.AppendLine();
        }        Debug.Log("All dependencies for Scenes in Project: " + dependenciesString);
    }
}
```


            
