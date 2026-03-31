This version of Unity is unsupported.



# [AudioType](AudioType.html).AUDIOQUEUE




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



The audio file you want to stream uses Apple’s Audio Queue file format.





Use Apple’s Audio Queue audio type to stream an AAC, ALAC or MP3 file on iOS or macOS. Extracodecdata is a pointer to an FMOD_AUDIOQUEUE_EXTRACODECDATA structure. Use this type to stream files with the extension `.acc`, `.m4a`, `.alac`, or `.mp3`.


              


```
// This script uses the Audio Queue audio type to stream an mp3 audio file from the web. Attach this script to a GameObject.
// Replace the url in the script with where you host your file.

using UnityEngine;
using UnityEngine.Networking;
using System.Collections;public class MyBehaviour : MonoBehaviour
{
    AudioSource audioSource;    void Start()
    {
        // Add an AudioSource to your GameObject.
        audioSource = gameObject.AddComponent<AudioSource>();
        StartCoroutine(GetAudioClip());
    }    IEnumerator GetAudioClip()
    {
        // Replace the string with where you host your audio file.
        string url = "https://www.your-website.com/mp3sound.mp3";        // Stream audio, store it as an audio clip and play it.
        using (UnityWebRequest www = UnityWebRequestMultimedia.GetAudioClip(url, AudioType.AUDIOQUEUE))
        {
            yield return www.SendWebRequest();            if (www.result == UnityWebRequest.Result.ConnectionError)
            {
                Debug.Log(www.error);
            }
            else
            {
                AudioClip myClip = DownloadHandlerAudioClip.GetContent(www);

                audioSource.clip = myClip;
                audioSource.Play();
            }
        }
    }
}
```


            
