This version of Unity is unsupported.



# VideoCodec





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



Choose the video codec to use to import video clips.





Use this enum to set [VideoImporterTargetSettings.codec](VideoImporterTargetSettings-codec.html).

A video codec compresses (encodes) or decompresses (decodes) video data to reduce the file size but avoid reduction of quality as much as possible. For Unity to consider the video codec when it imports a video, make sure to enable the **Transcoding** property in the video clip’s **Inspector** window. For more information about video encoding, refer to [Video encoding compatibility reference](../Manual/video-encoding-compatibility.html).


              


```
// This script creates an Editor menu option that reimports a video with your preferred video codec (Auto is default).
// Put this script in your Assets>Editor folder. If you don't have an Editor folder, create your own.
// In the script, change the videoPath to a video file in your project. Save the script.
// In the menu, go to Tools and select Change video codec settings.
// The video reimports with the new video codec. using UnityEngine;
using UnityEditor;public class VideoImportSettingsEditor : MonoBehaviour
{    [MenuItem("Tools/Change video codec settings")]
    static void SetVideoImporterSettings()
    {
        // Path to the video file in your project. Change the path to suit your own project.
        string videoPath = "Assets/YourVideo.mp4";
        // Change this to your preferred video codec.
        VideoCodec preferredCodec = VideoCodec.Auto;         // Get the VideoClipImporter for the video file
        VideoClipImporter importer = AssetImporter.GetAtPath(videoPath) as VideoClipImporter;        if (importer != null)
        {
            VideoImporterTargetSettings defaultSettings = importer.defaultTargetSettings;
            // Set the video codec to your chosen video codec.
            defaultSettings.codec = preferredCodec;            // Apply the updated settings for standalone.
            importer.SetTargetSettings("Standalone", defaultSettings);            // Re-import the video file.
            importer.SaveAndReimport();            Debug.Log($"Updated video importer settings for: {videoPath}");
        }
        else
        {
            Debug.LogError($"Failed to find VideoClipImporter for the path: {videoPath}");
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Auto | Choose the codec that supports hardware decoding on the target platform. |
| H264 | Encode video with the H.264 codec. |
| H265 | Encode video with the H.265 codec. |
| VP8 | Encode video using the vp8 codec. |


            
