This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).videoRotationAngle




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












                    public int videoRotationAngle;






### Description



Returns an clockwise angle (in degrees), which can be used to rotate a polygon so camera contents are shown in correct orientation.





Call [Application.RequestUserAuthorization](Application.RequestUserAuthorization.html) before creating a
WebCamTexture.


              


```
// Starts a camera and assigns the texture to the current renderer.
// Updates polygon's orientation according to camera's given angle.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public WebCamTexture webcamTexture;
    public Quaternion baseRotation;
    void Start()
    {
        webcamTexture = new WebCamTexture();
        Renderer renderer = GetComponent<Renderer>();
        renderer.material.mainTexture = webcamTexture;
        baseRotation = transform.rotation;
        webcamTexture.Play();
    }    void Update()
    {
        transform.rotation = baseRotation * Quaternion.AngleAxis(webcamTexture.videoRotationAngle, Vector3.up);
    }
}
```


            
