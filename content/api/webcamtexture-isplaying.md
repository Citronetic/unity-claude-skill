This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).isPlaying




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












                    public bool isPlaying;






### Description



Returns if the camera is currently playing.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Tries to start the camera and outputs to the console if is was sucessful or not.
    void Start()
    {
        WebCamTexture webcamTexture = new WebCamTexture();
        webcamTexture.Play();
        Debug.Log(webcamTexture.isPlaying);
    }
}
```


            
