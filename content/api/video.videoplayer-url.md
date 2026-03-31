This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).url




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












                    public string url;






### Description



The file URL or web URL that the [VideoPlayer](Video.VideoPlayer.html) reads content from.





In addition to URLs, this property also accepts raw paths to local files. The raw paths can either be absolute on the platform or relative to the Player root.

If the user sets both a [VideoPlayer.clip](Video.VideoPlayer-clip.html) and a [VideoPlayer.url](Video.VideoPlayer-url.html), the one that was set last takes precedence.

**Examples**:


              


```
using UnityEngine;
using UnityEngine.Video; public class UrlExample : MonoBehaviour
{
    VideoPlayer videoPlayer;    private void Start()
    {
        // Get the VideoPlayer component from the GameObject that contains this script.
        videoPlayer = GetComponent<VideoPlayer>();        // Using an absolute raw path to a local file.
        videoPlayer.url = "/Users/graham/movie.mov";        // Using a relative raw path to a local file.
        videoPlayer.url = "subdirectory/videofiles/movie.mov";        // Using a web URL.
        videoPlayer.url = "https://ia904602.us.archive.org/25/items/big-buck-bunny_202112/Big%20Buck%20Bunny.mp4";        // Using a file URL.
        videoPlayer.url = "file:///Users/graham/movie.mov";
    }
}
```


            
