This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).deviceName




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












                    public string deviceName;






### Description



Set this to specify the name of the device to use.





This only has an effect when set while the camera is not running.

**Note:** If you want to use WebCamTexture to get the camera stream from a device connected through Unity Remote, you must initialize it through the constructor. It's not possible to change the device using [WebCamTexture.deviceName](WebCamTexture-deviceName.html) from regular to remote devices and vice versa.


              


```
// Sets the device of the WebCamTexture to the first one available and starts playing it
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        WebCamDevice[] devices = WebCamTexture.devices;
        WebCamTexture webcamTexture = new WebCamTexture();        if (devices.Length > 0)
        {
            webcamTexture.deviceName = devices[0].name;
            webcamTexture.Play();
        }
    }
}
```


            
