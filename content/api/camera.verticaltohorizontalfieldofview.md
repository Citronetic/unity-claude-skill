This version of Unity is unsupported.



# [Camera](Camera.html).VerticalToHorizontalFieldOfView




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










## Declaration

public static float VerticalToHorizontalFieldOfView(float verticalFieldOfView,
float aspectRatio);






### Parameters



| Parameter | Description |
| --- | --- |
| verticalFieldOfView | The vertical field of view value in degrees. |
| aspectRatio | The aspect ratio value used for the conversion. |





### Returns



**float**
        The horizontal field of view in degrees.





### Description



Converts the vertical [field of view](../Manual/UnderstandingFrustum.html) (FOV) to the horizontal FOV, based on the value of the aspect ratio parameter.





Additional resources: [fieldOfView](Camera-fieldOfView.html), [aspect](Camera-aspect.html), [HorizontalToVerticalFieldOfView](Camera.HorizontalToVerticalFieldOfView.html), [FieldOfViewToFocalLength](Camera.FieldOfViewToFocalLength.html), [FocalLengthToFieldOfView](Camera.FocalLengthToFieldOfView.html).


              


```
using UnityEngine;public class DisplayFov : MonoBehaviour
{
    public Camera target;    void OnGUI()
    {
        float verticalFOV = target.fieldOfView;
        float horizontalFOV = Camera.VerticalToHorizontalFieldOfView(verticalFOV, target.aspect);        GUILayout.Label($"Vertical FOV : {verticalFOV} degrees");
        GUILayout.Label($"Horizontal FOV : {horizontalFOV} degrees");
    }
}
```


            
