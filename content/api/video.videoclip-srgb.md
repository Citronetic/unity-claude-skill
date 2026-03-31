This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).sRGB




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












                    public bool sRGB;






### Description



Whether the imported clip contains sRGB color data (Read Only).





This setting controls whether sRGB->Linear color space conversion is done when the [VideoPlayer](Video.VideoPlayer.html) is loading the video data into textures. This setting is only relevant when [Linear color space](../Manual/LinearLighting.html) is used.

Most movies store color data in sRGB color space. Set [VideoClipImporter.sRGBClip](VideoClipImporter-sRGBClip.html) to true in most cases.

Non-color movies are commonly stored as linear values, and the GPU should not perform color space conversions. Set to false in the [VideoClipImporter](VideoClipImporter.html) for non-color movies.

This setting corresponds to [VideoClipImporter.sRGBClip](VideoClipImporter-sRGBClip.html) in the video clip importer.

Additional resources: [PlayerSettings.colorSpace](PlayerSettings-colorSpace.html).


              


```
using UnityEngine;
using UnityEngine.Video;public class SRGBExample : MonoBehaviour
{
    VideoPlayer videoPlayer;    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        // Get the VideoClip from the VideoPlayer
        VideoClip clip = videoPlayer.clip;        if (clip != null)
        {
            // Output if the clip contains sRGB color data.
            Debug.Log("Does this clip use sRGB color data? : " + clip.sRGB);
        }
        else
        {
            Debug.LogError("No VideoClip assigned to the VideoPlayer.");
        }
    }
}
```


            
