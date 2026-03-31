This version of Unity is unsupported.



# [Camera](Camera.html).orthographicSize




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







                    public float orthographicSize;






### Description



Camera's half-size when in orthographic mode.





The `orthographicSize` property defines the viewing volume of an [orthographic](Camera-orthographic.html) Camera. To edit `orthographicSize`, you must set the Camera projection to orthographic.

The height of the viewing volume is (`orthographicSize` * 2). Unity calculates the width of the viewing volume using `orthographicSize` and the camera's [aspect](Camera-aspect.html).

Unity ignores `orthographicSize` if the camera is not orthographic. Use [fieldOfView](Camera-fieldOfView.html) instead.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Assign this Camera in the Inspector
    public Camera m_OrthographicCamera;
    // These are the positions and dimensions of the Camera view in the Game view
    float m_ViewPositionX, m_ViewPositionY, m_ViewWidth, m_ViewHeight;    void Start()
    {
        // This sets the Camera view rectangle to be in the bottom corner of the screen
        m_ViewPositionX = 0;
        m_ViewPositionY = 0;        // This sets the Camera view rectangle to be smaller so you can compare the orthographic view of this Camera with the perspective view of the Main Camera
        m_ViewWidth = 0.4f;
        m_ViewHeight = 0.4f;        // If a Camera has been assigned in the inspector, enable orthographic mode and change the size
        if (m_OrthographicCamera)
        {
            // This enables the orthographic mode
            m_OrthographicCamera.orthographic = true;            // Set the size of the viewing volume you'd like the orthographic Camera to pick up
            m_OrthographicCamera.orthographicSize = 5.0f;            // Set the orthographic Camera Viewport size and position
            m_OrthographicCamera.rect = new Rect(m_ViewPositionX, m_ViewPositionY, m_ViewWidth, m_ViewHeight);
        }
    }
}
```


            
