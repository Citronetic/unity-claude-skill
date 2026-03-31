This version of Unity is unsupported.



# VideoCapture





class in
          UnityEngine.Windows.WebCam



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Records a video from the web camera directly to disk.





This API is supported in the Windows Players (Standalone and Universal Windows Platform) and in the Windows Editor. The final video recording will be stored on the local file system in the MP4 format. VideoCapture is implemented using the WinRT interface: Windows.Media.Capture.IMediaCapture.

For more information, see Microsoft documentation on [Windows MediaCapture](https://docs.microsoft.com/en-us/uwp/api/Windows.Media.Capture.MediaCapture).

**Note:** Universal Windows Platform requires both webcam and microphone capabilities.


              


```
using UnityEngine;
using System.Collections;
using System.Linq;
using UnityEngine.Windows.WebCam;public class VideoCaptureExample : MonoBehaviour
{
    static readonly float MaxRecordingTime = 5.0f;    VideoCapture m_VideoCapture = null;
    float m_stopRecordingTimer = float.MaxValue;    // Use this for initialization
    void Start()
    {
        StartVideoCaptureTest();
    }    void Update()
    {
        if (m_VideoCapture == null || !m_VideoCapture.IsRecording)
        {
            return;
        }        if (Time.time > m_stopRecordingTimer)
        {
            m_VideoCapture.StopRecordingAsync(OnStoppedRecordingVideo);
        }
    }    void StartVideoCaptureTest()
    {
        Resolution cameraResolution = VideoCapture.SupportedResolutions.OrderByDescending((res) => res.width * res.height).First();
        Debug.Log(cameraResolution);        float cameraFramerate = VideoCapture.GetSupportedFrameRatesForResolution(cameraResolution).OrderByDescending((fps) => fps).First();
        Debug.Log(cameraFramerate);        VideoCapture.CreateAsync(false, delegate(VideoCapture videoCapture)
        {
            if (videoCapture != null)
            {
                m_VideoCapture = videoCapture;
                Debug.Log("Created VideoCapture Instance!");                CameraParameters cameraParameters = new CameraParameters();
                cameraParameters.hologramOpacity = 0.0f;
                cameraParameters.frameRate = cameraFramerate;
                cameraParameters.cameraResolutionWidth = cameraResolution.width;
                cameraParameters.cameraResolutionHeight = cameraResolution.height;
                cameraParameters.pixelFormat = CapturePixelFormat.BGRA32;                m_VideoCapture.StartVideoModeAsync(cameraParameters,
                    VideoCapture.AudioState.ApplicationAndMicAudio,
                    OnStartedVideoCaptureMode);
            }
            else
            {
                Debug.LogError("Failed to create VideoCapture Instance!");
            }
        });
    }    void OnStartedVideoCaptureMode(VideoCapture.VideoCaptureResult result)
    {
        Debug.Log("Started Video Capture Mode!");
        string timeStamp = Time.time.ToString().Replace(".", "").Replace(":", "");
        string filename = string.Format("TestVideo_{0}.mp4", timeStamp);
        string filepath = System.IO.Path.Combine(Application.persistentDataPath, filename);
        filepath = filepath.Replace("/", @"\");
        m_VideoCapture.StartRecordingAsync(filepath, OnStartedRecordingVideo);
    }    void OnStoppedVideoCaptureMode(VideoCapture.VideoCaptureResult result)
    {
        Debug.Log("Stopped Video Capture Mode!");
    }    void OnStartedRecordingVideo(VideoCapture.VideoCaptureResult result)
    {
        Debug.Log("Started Recording Video!");
        m_stopRecordingTimer = Time.time + MaxRecordingTime;
    }    void OnStoppedRecordingVideo(VideoCapture.VideoCaptureResult result)
    {
        Debug.Log("Stopped Recording Video!");
        m_VideoCapture.StopVideoModeAsync(OnStoppedVideoCaptureMode);
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| SupportedResolutions | A list of all the supported device resolutions for recording videos. |





### Properties



| Property | Description |
| --- | --- |
| IsRecording | Indicates whether or not the VideoCapture instance is currently recording video. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | You must call Dispose to shutdown the VideoCapture instance and release the native WinRT objects. |
| GetUnsafePointerToVideoDeviceController | Provides a COM pointer to the native IVideoDeviceController. |
| StartRecordingAsync | Asynchronously records a video from the web camera to the file system. |
| StartVideoModeAsync | Asynchronously starts video mode. |
| StopRecordingAsync | Asynchronously stops recording a video from the web camera to the file system. |
| StopVideoModeAsync | Asynchronously stops video mode. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateAsync | Asynchronously creates an instance of a VideoCapture object that can be used to record videos from the web camera to disk. |
| GetSupportedFrameRatesForResolution | Returns the supported frame rates at which a video can be recorded given a resolution. |





### Delegates



| Delegate | Description |
| --- | --- |
| OnStartedRecordingVideoCallback | Called when the web camera begins recording the video. |
| OnStoppedRecordingVideoCallback | Called when the video recording has been saved to the file system. |
| OnVideoCaptureResourceCreatedCallback | Called when a VideoCapture resource has been created. |
| OnVideoModeStartedCallback | Called when video mode has been started. |
| OnVideoModeStoppedCallback | Called when video mode has been stopped. |


            
