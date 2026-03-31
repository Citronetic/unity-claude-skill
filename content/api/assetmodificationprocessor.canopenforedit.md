This version of Unity is unsupported.



# [AssetModificationProcessor](AssetModificationProcessor.html).CanOpenForEdit(string[],List<string>,StatusQueryOptions)




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
        Returns `true` if all files can be opened for editing.





### Description



This is called by Unity when inspecting assets to determine if they can potentially be opened for editing.





This is called by Unity's own systems, but you can also call it if you are implementing your own Editor tools such as a custom version control integration.

Additional resources: [AssetDatabase.CanOpenForEdit](AssetDatabase.CanOpenForEdit.html), [StatusQueryOptions](StatusQueryOptions.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;class CustomAssetModificationProcessor : UnityEditor.AssetModificationProcessor
{
    static bool CanOpenForEdit(string[] paths, List<string> outNotEditablePaths, StatusQueryOptions statusQueryOptions)
    {
        Debug.Log("CanOpenForEdit:");
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
| message | Returns a reason for the asset not being available for editing. |





### Returns



**void**
        True if the asset is considered available for editing by the selected version control system.





### Description



This is called by Unity when inspecting an asset to determine if it can potentially be opened for editing.





Although this is called by Unity's own systems, you can also call it if you are implementing your own Editor tools such as a custom version control integration. Consider using method overload that accepts an array of file paths to improve version control system performance.


            
