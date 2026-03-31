This version of Unity is unsupported.



# [Application](Application.html).streamingAssetsPath




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












                    public static string streamingAssetsPath;






### Description



The path to the `StreamingAssets`  folder (Read Only).





Use the `StreamingAssets` folder to store assets. At runtime, `Application.streamingAssetsPath` provides the path to the folder. Add the asset name to `Application.streamingAssetsPath`. The built application can load the asset at this address. You can use the [Debug.Log](Debug.Log.html) class to print the path to the `StreamingAssets` folder to the Unity Console.

You cannot use synchronous filesystem APIs, such as the C# `System.IO.File` class, to access the `StreamingAssets` folder on the WebGL and Android platforms. No file access is available on WebGL. Android uses a compressed `.apk` file. These platforms return a URL. Use the [UnityWebRequest](Networking.UnityWebRequest.html) class to access the assets.


              


```
using UnityEngine;
using System.IO;
using UnityEngine.Video;// Application-streamingAssetsPath example.
//
// Play a video and let the user stop/start it.
// The video location is StreamingAssets. The video is
// played on the camera background.public class Example : MonoBehaviour
{
    private UnityEngine.Video.VideoPlayer videoPlayer;
    private string status;    void Start()
    {
        GameObject cam = GameObject.Find("Main Camera");
        videoPlayer = cam.AddComponent<UnityEngine.Video.VideoPlayer>();        // Obtain the location of the video clip.
        videoPlayer.url = Path.Combine(Application.streamingAssetsPath, "SampleVideo_1280x720_5mb.mp4");        // Restart from beginning when done.
        videoPlayer.isLooping = true;        // Do not show the video until the user needs it.
        videoPlayer.Pause();        status = "Press to play";
    }    void OnGUI()
    {
        GUIStyle buttonWidth = new GUIStyle(GUI.skin.GetStyle("button"));
        buttonWidth.fontSize = 18 * (Screen.width / 800);        if (GUI.Button(new Rect(Screen.width / 16, Screen.height / 16, Screen.width / 3, Screen.height / 8), status, buttonWidth))
        {
            if (videoPlayer.isPlaying)
            {
                videoPlayer.Pause();
                status = "Press to play";
            }
            else
            {
                videoPlayer.Play();
                status = "Press to pause";
            }
        }
    }
}
```





The following code example demonstrates how to access a file in the `StreamingAssets` folder on Android platform.


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Threading.Tasks;public class LoadStreamingAsset : MonoBehaviour
{
    async void Start()
    {
        string filePath = System.IO.Path.Combine(Application.streamingAssetsPath, "filetoload.txt");        UnityWebRequest request = UnityWebRequest.Get(filePath);
        UnityWebRequestAsyncOperation operation = request.SendWebRequest();        while (!operation.isDone)
        {
            await Task.Yield();
        }        if (request.result == UnityWebRequest.Result.Success)
        {
            Debug.Log(request.downloadHandler.text);
        }
        else
        {
            Debug.LogError("Cannot load file at " + filePath);
        }
    }
}
```


            
