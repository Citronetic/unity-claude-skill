This version of Unity is unsupported.



# PhotoCapture





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



Captures a photo from the web camera and stores it in memory or on disk.





Demonstrates how to take a photo using the PhotoCapture functionality and display it on a Unity GameObject.


              


```
using UnityEngine;
using System.Collections;
using System.Linq;
using UnityEngine.Windows.WebCam;public class PhotoCaptureExample : MonoBehaviour
{
    PhotoCapture photoCaptureObject = null;
    Texture2D targetTexture = null;    // Use this for initialization
    void Start()
    {
        Resolution cameraResolution = PhotoCapture.SupportedResolutions.OrderByDescending((res) => res.width * res.height).First();
        targetTexture = new Texture2D(cameraResolution.width, cameraResolution.height);        // Create a PhotoCapture object
        PhotoCapture.CreateAsync(false, delegate(PhotoCapture captureObject) {
            photoCaptureObject = captureObject;
            CameraParameters cameraParameters = new CameraParameters();
            cameraParameters.hologramOpacity = 0.0f;
            cameraParameters.cameraResolutionWidth = cameraResolution.width;
            cameraParameters.cameraResolutionHeight = cameraResolution.height;
            cameraParameters.pixelFormat = CapturePixelFormat.BGRA32;            // Activate the camera
            photoCaptureObject.StartPhotoModeAsync(cameraParameters, delegate(PhotoCapture.PhotoCaptureResult result) {
                // Take a picture
                photoCaptureObject.TakePhotoAsync(OnCapturedPhotoToMemory);
            });
        });
    }    void OnCapturedPhotoToMemory(PhotoCapture.PhotoCaptureResult result, PhotoCaptureFrame photoCaptureFrame)
    {
        // Copy the raw image data into our target texture
        photoCaptureFrame.UploadImageDataToTexture(targetTexture);        // Create a gameobject that we can apply our texture to
        GameObject quad = GameObject.CreatePrimitive(PrimitiveType.Quad);
        Renderer quadRenderer = quad.GetComponent<Renderer>() as Renderer;
        quadRenderer.material = new Material(Shader.Find("Unlit/Texture"));        quad.transform.parent = this.transform;
        quad.transform.localPosition = new Vector3(0.0f, 0.0f, 3.0f);        quadRenderer.material.SetTexture("_MainTex", targetTexture);        // Deactivate our camera
        photoCaptureObject.StopPhotoModeAsync(OnStoppedPhotoMode);
    }    void OnStoppedPhotoMode(PhotoCapture.PhotoCaptureResult result)
    {
        // Shutdown our photo capture resource
        photoCaptureObject.Dispose();
        photoCaptureObject = null;
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| SupportedResolutions | A list of all the supported device resolutions for taking pictures. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Dispose must be called to shutdown the PhotoCapture instance. |
| GetUnsafePointerToVideoDeviceController | Provides a COM pointer to the native IVideoDeviceController. |
| StartPhotoModeAsync | Asynchronously starts photo mode. |
| StopPhotoModeAsync | Asynchronously stops photo mode. |
| TakePhotoAsync | Asynchronously captures a photo from the web camera and saves it to disk. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateAsync | Asynchronously creates an instance of a PhotoCapture object that can be used to capture photos. |





### Delegates



| Delegate | Description |
| --- | --- |
| OnCapturedToDiskCallback | Called when a photo has been saved to the file system. |
| OnCapturedToMemoryCallback | Called when a photo has been captured to memory. |
| OnCaptureResourceCreatedCallback | Called when a PhotoCapture resource has been created. |
| OnPhotoModeStartedCallback | Called when photo mode has been started. |
| OnPhotoModeStoppedCallback | Called when photo mode has been stopped. |


            
