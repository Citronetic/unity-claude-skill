This version of Unity is unsupported.



# VideoTrackEncoderAttributes





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



Descriptor for video track format.


              


```
using UnityEditor.Media;
using UnityEditor;
using UnityEngine;public class Recorder
{
    public VideoTrackEncoderAttributes CreateEncoderAttributes()
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
        };        return videoAttr;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| bitRateMode | The VideoBitrateMode for the encoded video. |
| frameRate | The frame rate for the encoded video, in frames per second, expressed as a fraction. |
| height | The image height in pixels. |
| includeAlpha | True if the track is to include the alpha channel found in the texture passed to AddFrame. False otherwise. |
| targetBitRate | The target bit rate for the encoder. |
| width | The image width in pixels. |





### Constructors



| Constructor | Description |
| --- | --- |
| VideoTrackEncoderAttributes | Create a new VideoTrackEncoderAttributes with specific H.264 encoding options. |


            
