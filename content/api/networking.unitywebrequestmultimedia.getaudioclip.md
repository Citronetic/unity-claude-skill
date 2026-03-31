This version of Unity is unsupported.



# [UnityWebRequestMultimedia](Networking.UnityWebRequestMultimedia.html).GetAudioClip




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

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) GetAudioClip(string uri,
[AudioType](AudioType.html) audioType);






## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) GetAudioClip(Uri uri,
[AudioType](AudioType.html) audioType);






### Parameters



| Parameter | Description |
| --- | --- |
| uri | The URI of the audio clip to download. |
| audioType | The type of audio encoding for the downloaded audio clip. See AudioType. |





### Returns



**UnityWebRequest**
        A [UnityWebRequest](Networking.UnityWebRequest.html) properly configured to download an audio clip and convert it to an [AudioClip](AudioClip.html).





### Description



Create a [UnityWebRequest](Networking.UnityWebRequest.html) to download an audio clip via HTTP GET and create an [AudioClip](AudioClip.html) based on the retrieved data.





This method creates a [UnityWebRequest](Networking.UnityWebRequest.html) and sets the target URL to the string `uri` argument. This method sets no other flags or custom headers.

This method attaches a [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html) object to the [UnityWebRequest](Networking.UnityWebRequest.html). [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html) is a specialized [DownloadHandler](Networking.DownloadHandler.html). It is optimized for storing data which is to be used as an audio clip in the Unity Engine. Using this class significantly reduces memory reallocation compared to downloading raw bytes and creating an audio clip manually in script.

This method attaches no [UploadHandler](Networking.UploadHandler.html) to the [UnityWebRequest](Networking.UnityWebRequest.html).


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;public class MyBehaviour : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(GetAudioClip());
    }    IEnumerator GetAudioClip()
    {
        using (UnityWebRequest www = UnityWebRequestMultimedia.GetAudioClip("https://www.my-server.com/audio.ogg", AudioType.OGGVORBIS))
        {
            yield return www.SendWebRequest();            if (www.result == UnityWebRequest.Result.ConnectionError)
            {
                Debug.Log(www.error);
            }
            else
            {
                AudioClip myClip = DownloadHandlerAudioClip.GetContent(www);
            }
        }
    }
}
```


            
