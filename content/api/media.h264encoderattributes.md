This version of Unity is unsupported.



# H264EncoderAttributes





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



Descriptor for H.264 encoder attributes.


              


```
using UnityEditor.Media;
using UnityEngine;
using UnityEditor;
using Unity.Collections;
using System.IO;public class Recorder
{
    static public void RecordMovie()
    {
        H264EncoderAttributes h264Attr = new H264EncoderAttributes
        {
            gopSize = 25,
            numConsecutiveBFrames = 2,
            profile = VideoEncodingProfile.H264High
        };        var videoAttr = new VideoTrackEncoderAttributes(h264Attr)
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
            audioAttr.sampleRate.numerator / videoAttr.frameRate.numerator;        var encodedFilePath = Path.Combine(Path.GetTempPath(), "my_movie.mp4");        Texture2D tex = new Texture2D((int)videoAttr.width, (int)videoAttr.height, TextureFormat.RGBA32, false);        using (var encoder = new MediaEncoder(encodedFilePath, videoAttr, audioAttr))
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
| gopSize | The maximum size of a group of pictures, in frames. |
| numConsecutiveBFrames | The maximum number of consecutive B frames between I and P frames. |
| profile | The VideoEncodingProfile for the encoded video. |


            
