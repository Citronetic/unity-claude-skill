This version of Unity is unsupported.



# [ArchiveHandle](Unity.IO.Archive.ArchiveHandle.html).Compression




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












                    public [CompressionType](CompressionType.html) Compression;






### Description



The type of compression the archive uses.





Only accessible if the archive loaded successfully.

                    Additional resources: [AssetBundles compression](../Manual/AssetBundles-Cache.html).


              


```
using Unity.Content;
using Unity.IO.Archive;
using UnityEditor;
using UnityEngine;public static class ArchiveUtilities
{
#if UNITY_EDITOR
    [MenuItem("Debug/Check Archive Compression")]
    static public void CheckCompression()
    {
        string archivePath = EditorUtility.OpenFilePanel("Pick AssetBundle or other Unity Archive file", "", "");
        if (archivePath.Length == 0)
            return;        Debug.Log($"Bundle {archivePath} has compression type {GetArchiveCompression(archivePath)}");
    }
#endif    static public UnityEngine.CompressionType GetArchiveCompression(string archivePath)
    {
        var archiveHandle = ArchiveFileInterface.MountAsync(ContentNamespace.Default, archivePath, "temp:");
        archiveHandle.JobHandle.Complete();        if (archiveHandle.Status == ArchiveStatus.Failed)
            throw new System.ArgumentException($"Failed to load {archivePath}");        var compression = archiveHandle.Compression;
        archiveHandle.Unmount().Complete();        return compression;
    }
}
```


            
