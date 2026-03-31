This version of Unity is unsupported.



# [PhotoCapture](Windows.WebCam.PhotoCapture.html).SupportedResolutions




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












                    public static IEnumerable<Resolution> SupportedResolutions;






### Description



A list of all the supported device resolutions for taking pictures.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Windows.WebCam;public class PhotoCaptureResolutionExample : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
        foreach (Resolution resolution in PhotoCapture.SupportedResolutions)
        {
            Debug.Log(resolution);
        }
    }
}
```





Prints out a list of all the supported device resolutions that can be used when taking pictures.


            
