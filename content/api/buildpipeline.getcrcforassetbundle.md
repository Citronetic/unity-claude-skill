This version of Unity is unsupported.



# [BuildPipeline](BuildPipeline.html).GetCRCForAssetBundle




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

public static bool GetCRCForAssetBundle(string targetPath,
out uint crc);






### Parameters



| Parameter | Description |
| --- | --- |
| targetPath | Asset bundle path. |
| crc | A resulting checksum of the given asset bundle. |





### Returns



**bool**
        True if the method successfully reads the manifest file and extracts the CRC value. False if it cannot find the .manifest file associated to the `targetPath` or fails to parse the CRC value, which might happen due to incorrect paths.





### Description



Extract the CRC checksum for the given AssetBundle.





A 32-bit checksum is generated during the AssetBundle build process and recorded in the .manifest file and exposed by this method.

Additional resources: [CRC Checksums](../Manual/AssetBundles-Integrity.html), [AssetBundleManifest.GetAssetBundleHash](AssetBundleManifest.GetAssetBundleHash.html)


              


```
using UnityEngine;
using UnityEditor;public class CheckAssetBundleCRCExample
{
    [MenuItem("Debug/Check AssetBundle CRC")]
    static public void CheckAssetBundleCRC()
    {
        string targetPath = EditorUtility.OpenFilePanel("Pick AssetBundle", "", "");
        uint crc;
        if (targetPath.Length == 0 || !BuildPipeline.GetCRCForAssetBundle(targetPath, out crc))
            return;        Debug.Log($"AssetBundle {targetPath} has CRC equal to {crc}");
    }
}
```


            
