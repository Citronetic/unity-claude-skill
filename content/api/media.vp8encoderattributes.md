This version of Unity is unsupported.



# VP8EncoderAttributes





struct in
          UnityEditor.Media


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



Descriptor for VP8 encoder attributes.


              


```
using UnityEditor.Media;
using UnityEngine;
using Unity.Collections;
using System.IO;public class Recorder
{
    static public void RecordMovie()
    {
        VP8EncoderAttributes vp8Attr = new VP8EncoderAttributes
        {
            keyframeDistance = 25
        };        var videoAttr = new VideoTrackEncoderAttributes(vp8Attr)
        {
            frameRate = new MediaRational(50),
            width = 320,
            height = 200,
            targetBitRate = 3000000
        };        var audioAttr = new AudioTrackAttributes
        {
            sampleRate = new MediaRational(48000),
            channelCount = 2,
            language = "fr"
        };        int sampleFramesPerVideoFrame = audioAttr.channelCount *
            audioAttr.sampleRate.numerator / videoAttr.frameRate.numerator;        var encodedFilePath = Path.Combine(Path.GetTempPath(), "my_movie.webm");        Texture2D tex = new Texture2D((int)videoAttr.width, (int)videoAttr.height, TextureFormat.RGBA32, false);        using (var encoder = new MediaEncoder(encodedFilePath, videoAttr, audioAttr))
        using (var audioBuffer = new NativeArray<float>(sampleFramesPerVideoFrame, Allocator.Temp))
        {
            for (int i = 0; i < 100; ++i)
            {
                // Fill 'tex' with the video content to be encoded into the file for this frame.
                // ...
                encoder.AddFrame(tex);                // Fill 'audioBuffer' with the audio content to be encoded into the file for this frame.
                // ...
                encoder.AddSamples(audioBuffer);
            }
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| keyframeDistance | The maximum distance between I-frames. |


            
