This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).Stop




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

public void Stop();






### Description



Stops the camera.





Call [Application.RequestUserAuthorization](Application.RequestUserAuthorization.html) before creating a
WebCamTexture.


              


```
// Starts a camera and assigns the texture to the current renderer.
// Stops the camera when the "Stop" button is clicked and released.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public WebCamTexture webcamTexture;    void Start()
    {
        webcamTexture = new WebCamTexture();
        webcamTexture.Play();        Renderer renderer = GetComponent<Renderer>();        if (webcamTexture.isPlaying)
            renderer.material.mainTexture = webcamTexture;
    }    void OnGUI()
    {
        if (webcamTexture.isPlaying)
            if (GUILayout.Button("Stop"))
                webcamTexture.Stop();
    }
}
```


            
