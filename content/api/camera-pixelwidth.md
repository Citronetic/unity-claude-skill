This version of Unity is unsupported.



# [Camera](Camera.html).pixelWidth




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public int pixelWidth;






### Description



How wide is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only).





Use this to return how wide the Camera viewport is in pixels. This is read-only.


              


```
//Attach this script to an empty GameObject
//Create a new Camera (Create>Camera) and position it appropriately. Attach it to the Second Camera field in the Inspector of the GameObject
//Press the space key to enable and disable the second Camera
using UnityEngine;public class Example : MonoBehaviour
{
    //Attach a new Camera in the Inspector window
    public Camera m_SecondCamera;
    //This is set as the main Camera in this script
    Camera m_FirstCamera;    void Start()
    {
        //Disable the second Camera
        m_SecondCamera.enabled = false;
        //Set where to place the second Camera along with its width and height
        m_SecondCamera.pixelRect = new Rect(0, 0, 400, 200);
        //Set the first Camera as the main Camera
        m_FirstCamera = Camera.main;
    }    void Update()
    {
        //Press the space key to toggle the second Camera and output camera pixel width and height
        if (Input.GetKeyDown(KeyCode.Space))
        {
            //Check if the second camera is enabled yet
            if (!m_SecondCamera.enabled)
            {
                //Toggle the second Camera and output the second Camera's details
                ToggleCamera(m_SecondCamera, m_SecondCamera);
            }
            else
            {
                //Toggle the second Camera and output the first Camera's details
                ToggleCamera(m_SecondCamera, m_FirstCamera);
            }
        }
    }    //Toggle the Camera and output the Camera specified
    void ToggleCamera(Camera cameraToggle, Camera cameraOutput)
    {
        //Set Camera on and off
        cameraToggle.enabled = !cameraToggle.enabled;        //Output the Camera's new Pixel width
        Debug.Log("Pixel width :" + cameraOutput.pixelWidth + " Pixel height : " + cameraOutput.pixelHeight);
    }
}
```


            
