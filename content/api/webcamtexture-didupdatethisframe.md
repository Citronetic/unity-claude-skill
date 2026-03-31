This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).didUpdateThisFrame




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












                    public bool didUpdateThisFrame;






### Description



Did the video buffer update this frame?





Use this to check if the video buffer has changed since the last frame. When setting a low frame rate,
it is likely that the video will update slower than the game. Since it would not make sense to do expensive video
processing in each Update call, check this value before doing any processing.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    WebCamTexture webcamTexture;
    Color32[] data;    void Start()
    {
        // Start web cam feed
        webcamTexture =  new WebCamTexture();
        webcamTexture.Play();
        data = new Color32[webcamTexture.width * webcamTexture.height];
    }    void Update()
    {
        if (webcamTexture.didUpdateThisFrame)
        {
            webcamTexture.GetPixels32(data);
            // Do processing of data here.
        }
    }
}
```


            
