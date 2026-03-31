This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).originalPath




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












                    public string originalPath;






### Description



Gets the original video clip file path as it was imported into Unity. (Read Only).





Use this property to find the original location of the file when you imported it into Unity. If you move the video clip file, this property’s value remains as the original location. The value only updates if you reimport the file.

**Note**: When you import your video file, if you enable **Transcode** in the VideoClip Import Settings, `originalPath` returns the new video format instead of the original format. For example, if you do the following:



          1. Import an MP4 video file into Unity.

          2. Click on the file to show the Import Settings window.

          3. Enable **Transcode**.

          4. Set **Codec** to **VP8**.





Unity imports the video file in the WebM format, and `originalPath` returns `.webm` instead of `.mp4`. To get your original format instead, use [AssetDatabase.GetAssetPath](AssetDatabase.GetAssetPath.html).

Additional resources: [VideoClip Importer](https://docs.unity3d.com/Manual/class-VideoClip.html).


              


```
// The script outputs the clip’s original path to the console.
// Assign this script and a VideoPlayer component to a GameObject in your Scene.
// In the VideoPlayer component, assign a video clip. using UnityEngine;
using UnityEngine.Video;
using UnityEditor;public class OriginalPathExample : MonoBehaviour
{
    void Start()
    {
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();
        VideoClip videoClip = videoPlayer.clip;
        // Get the original video file path as it was imported into Unity.
        string originalPath = videoClip.originalPath;
        Debug.Log("Original Path: " + originalPath);        // Verify if the original file exists.
        if (System.IO.File.Exists(originalPath))
        {
            Debug.Log("Original video file found at: " + originalPath);
        }
        else
        {
            Debug.Log("Original video file not found at: " + originalPath +
                ". Checking AssetDatabase instead.");
            // Check Asset database instead for the video clip.
            string assetPath = AssetDatabase.GetAssetPath(videoClip);
            if (System.IO.File.Exists(assetPath))
            {
                Debug.Log("Original video file found at " + assetPath);
            }
            else Debug.LogWarning("Original video file not found!");
        }
    }
}
```


            
