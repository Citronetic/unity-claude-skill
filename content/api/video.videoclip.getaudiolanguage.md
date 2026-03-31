This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).GetAudioLanguage




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

public string GetAudioLanguage(ushort audioTrackIdx);






### Parameters



| Parameter | Description |
| --- | --- |
| audioTrackIdx | Index of the audio track you want to query in the video. |





### Returns



**string**
        The abbreviated name of the language.





### Description



Gets the language of the video clip’s audio tracks, if the audio tracks have an assigned language.





This returns nothing if the track was created without a specified language.
You can use this function to switch out audio tracks in your video depending on the language preference of the user. The audio language is normally a 2 or 3 letter language code following the ISO 639-2/T or 639-2/B standards. For example, the code for English is normally “en” or “eng”. Check your audio files to see what codes they have. Some audio tracks don't have language information, in which case this function returns an empty string.

Additional resources: [VideoPlayer.EnableAudioTrack](Video.VideoPlayer.EnableAudioTrack.html).


              


```
// This script loops through each of the audio tracks to check their languages. If their language matches your preferred language (userLanguage),
// this script enables that audio track and deactivates the other tracks.
// You need to assign this script to a GameObject in your Scene, and assign a VideoPlayer component to it in the Inspector.
// Also set userLanguage to the language you want. using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Video;public enum Language
{
    English, French, Spanish, German, Japanese, Chinese, Italian, Portuguese, Russian, Korean, Arabic, Danish, Dutch, Finnish, Icelandic
}public class GetAudioLanguageExample : MonoBehaviour
{
    // Dictionary to map user-friendly language names to shorthand codes. The codes for your files might be different.
    public static readonly Dictionary<Language, string> LanguageCodes = new Dictionary<Language, string>
    {
        { Language.English, "eng" },
        { Language.French, "fra" },
        { Language.Spanish, "spa" },
        { Language.German, "deu" },
        { Language.Japanese, "jpn" },
        { Language.Chinese, "zho" },
        { Language.Italian, "ita" },
        { Language.Portuguese, "por" },
        { Language.Russian, "rus" },
        { Language.Korean, "kor" },
        { Language.Arabic, "ara" },
        { Language.Danish, "dan" },
        { Language.Dutch, "nld" },
        { Language.Finnish, "fin"},
        { Language.Icelandic, "isl"}
    };    VideoPlayer videoPlayer;    // Choose your language.
    public Language userLanguage;    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        // Get the VideoClip from the VideoPlayer
        VideoClip clip = videoPlayer.clip;        if (clip != null)
        {
            // Get the number of audio tracks in the VideoClip
            int audioTrackCount = clip.audioTrackCount;
            Debug.Log("User chose " + userLanguage.ToString());            // Search the dictionary for the user's choice to get the language code.
            if (LanguageCodes.TryGetValue(userLanguage, out string userLanguageCode))
            {
                Debug.Log("User language was " + userLanguage + " and the code is : " + userLanguageCode);
                // Loop through each audio track see if they have an assigned language that matches your language choice.
                for (ushort i = 0; i < audioTrackCount; i++)
                {
                    string audioLanguage = clip.GetAudioLanguage(i);
                    Debug.Log("Audio track " + i + " has language: " + audioLanguage);                    // If the audio track has the preferred language, enable this audio track.
                    if (audioLanguage == userLanguageCode)
                    {
                        videoPlayer.EnableAudioTrack(i, true);
                        Debug.Log("Audio track " + i + " was enabled.");
                    }
                    // If the audio track doesn't have the chosen language, disable the track.
                    else
                    {
                        videoPlayer.EnableAudioTrack(i, false);
                        Debug.Log("Audio track " + i + " was disabled.");
                    }
                }
            }
        }
        else
        {
            Debug.LogError("No VideoClip assigned to the VideoPlayer.");
        }
    }
}
```


            
