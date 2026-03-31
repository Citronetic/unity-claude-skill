This version of Unity is unsupported.



# [Camera](Camera.html).fieldOfView




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







                    public float fieldOfView;






### Description



The vertical field of view of the Camera, in degrees.





This is the vertical field of view; horizontal field of view depends on the viewport's aspect ratio. For for more information, see [VerticalToHorizontalFieldOfView](Camera.VerticalToHorizontalFieldOfView.html).

If [Camera.orthographic](Camera-orthographic.html) is `true`, the Camera ignores `fieldOfView`.

Some VR SDKs have fixed field of view values that are used for VR cameras. When VR is enabled with those SDKs, this property will always return the value from the SDK. You will see a warning logged if you attempt to set the property and the value will be ignored.

If you make changes to [Camera.projectionMatrix](Camera-projectionMatrix.html), the Camera ignores `fieldOfView`. This lasts until you call [Camera.ResetProjectionMatrix](Camera.ResetProjectionMatrix.html).

In the Unity Editor, this corresponds to the **Clipping Planes: Near** property in the Camera component Inspector.


              


```
// Attach this script to an empty GameObject.
// This script creates a Slider that allows you to manipulate the Camera's field of view. Place GameObjects in the Scene to show the full effect.using UnityEngine;public class CameraFieldOfViewExample : MonoBehaviour
{
    // This is the field of view that the Camera has
    float m_FieldOfView;    void Start()
    {
        // Start the Camera field of view at 60
        m_FieldOfView = 60.0f;
    }    void Update()
    {
        // Update the camera's field of view to be the variable returning from the Slider
        Camera.main.fieldOfView = m_FieldOfView;
    }    void OnGUI()
    {
        // Set up the maximum and minimum values the Slider can return
        float max = 150.0f;
        float min = 20.0f;        // This Slider changes the field of view of the Camera between the minimum and maximum values
        m_FieldOfView = GUI.HorizontalSlider(new Rect(20, 20, 100, 40), m_FieldOfView, min, max);
    }
}
```


            
