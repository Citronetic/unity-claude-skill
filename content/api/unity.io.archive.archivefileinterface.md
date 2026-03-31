This version of Unity is unsupported.



# ArchiveFileInterface





class in
          Unity.IO.Archive



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides methods for managing Unity archive files.





This class offers a low level interface for managing Unity archive files.

                Archive files are mounted into a [ContentNamespace](Unity.Content.ContentNamespace.html). Once an archive is mounted its contents can be accessed with [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) or [ContentLoadInterface.LoadContentFileAsync](Unity.Loading.ContentLoadInterface.LoadContentFileAsync.html).

                AssetBundles use the archive format and can be loaded with this API, but in most cases it's preferable to load AssetBundles using the [AssetBundle](AssetBundle.html) class, or via the Addressables package.

                The `data.unity3d` file generated when [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html) is called with [BuildOptions.CompressWithLz4](BuildOptions.CompressWithLz4.html) or [BuildOptions.CompressWithLz4HC](BuildOptions.CompressWithLz4HC.html) is also an archive file. In that case the `ArchiveFileInterface` API is not normally needed, because the contents of the archive are automatically available in the Player.

                Additional resources: [ContentBuildInterface.ArchiveAndCompress](Build.Content.ContentBuildInterface.ArchiveAndCompress.html).


              


```
// The following example describes how to create an archive with
// ContentBuildInterface.ArchiveAndCompress and mount the archive with
// ArchiveFileInterface.MountAsync. This example produces an archive that uses LZ4
// compression and contains one text file.using Unity.Collections.LowLevel.Unsafe;
using Unity.Content;
using Unity.IO.Archive;
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor.Build.Content;
#endifpublic class SampleBehaviour : MonoBehaviour
{
#if UNITY_EDITOR
  unsafe void CreateAndMountArchive()
  {
    // Create the Archive
    ResourceFile[] rFiles = new ResourceFile[1];
    ResourceFile rf = new ResourceFile();
    rf.fileName = "Assets/file1.txt"; // Path of the existing file, to copy into the Archive
    rf.fileAlias = "file1.txt";       // Path given to the file inside the Archive
    rFiles[0] = rf;    string archivePath = System.IO.Path.Combine(Application.streamingAssetsPath, "myArchive");
    ContentBuildInterface.ArchiveAndCompress(rFiles, archivePath, UnityEngine.BuildCompression.LZ4);    // Mount the Archive
    var ns = ContentNamespace.GetOrCreateNamespace("MyNamespace123");
    ArchiveHandle ahandle = ArchiveFileInterface.MountAsync(ns, archivePath, "a:");
    ahandle.JobHandle.Complete();    string textFilePath = ahandle.GetMountPath() + "file1.txt"; // ns:/MyNamespace123/a:/file1.txt
    ReadCommand cmd;
    cmd.Size = 1024;
    cmd.Buffer = UnsafeUtility.Malloc(cmd.Size, 4, Unity.Collections.Allocator.Temp);
    cmd.Offset = 0;

    NativeArray<ReadCommand> cmds = new NativeArray<ReadCommand>(1, Allocator.Persistent);
    cmds[0] = cmd;    ReadHandle rHandle = AsyncReadManager.Read(textFilePath, (ReadCommand*)cmds.GetUnsafePtr(), 1);
    rHandle.JobHandle.Complete();    // ...At this point cmd.Buffer contains contents from file1.txt (up to 1024 bytes)...    rHandle.Dispose();
    UnsafeUtility.Free(cmd.Buffer, Unity.Collections.Allocator.Temp);
    cmds.Dipose():    ahandle.Unmount().Complete();
  }
#endif
}
```





### Static Methods



| Method | Description |
| --- | --- |
| GetMountedArchives | Retrieves all mounted archives. |
| MountAsync | Loads all files in an archive to a mount point. |


            
