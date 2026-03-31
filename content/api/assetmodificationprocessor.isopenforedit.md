This version of Unity is unsupported.



# [AssetModificationProcessor](AssetModificationProcessor.html).IsOpenForEdit(string[],List<string>,StatusQueryOptions)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| assetOrMetaFilePaths | Paths to Assets or their .meta files, relative to the project folder. |
| outNotEditablePaths | Destination list of non-editable Asset paths. |
| statusQueryOptions | Specifies how Unity should query the version control system. The default value is StatusQueryOptions.UseCachedIfPossible. |





### Returns



**void**
        Returns `true` if all files are editable.





### Description



This is called by Unity when inspecting assets to determine if an editor should be disabled.





Although this is called by Unity's own systems, you can also call it if you are implementing your own Editor tools such as a custom version control integration.

Additional resources: [AssetDatabase.IsOpenForEdit](AssetDatabase.IsOpenForEdit.html), [StatusQueryOptions](StatusQueryOptions.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;class CustomAssetModificationProcessor : UnityEditor.AssetModificationProcessor
{
    static bool IsOpenForEdit(string[] paths, List<string> outNotEditablePaths, StatusQueryOptions statusQueryOptions)
    {
        Debug.Log("IsOpenForEdit:");
        foreach (var path in paths)
            Debug.Log(path);
        return true;
    }
}
```




---












### Parameters



| Parameter | Description |
| --- | --- |
| assetOrMetaFilePath | Path to the asset file or its .meta file on disk, relative to project folder. |
| message | Returns a reason for the asset not being open for edit. |





### Returns



**void**
        True if the asset is considered open for edit by the selected version control system.





### Description



This is called by Unity when inspecting an asset to determine if an editor should be disabled.





Although this is called by Unity's own systems, you can also call it if you are implementing your own Editor tools such as a custom version control integration. Consider using method overload that accepts an array of file paths to improve version control system performance.


            
