This version of Unity is unsupported.



# [CameraEditorUtils](CameraEditorUtils.html).GetFrustumPlaneAt




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

public static void GetFrustumPlaneAt([Matrix4x4](Matrix4x4.html) clipToWorld,
[Vector3](Vector3.html) viewPosition,
float distance,
Vector3[] points);






### Parameters



| Parameter | Description |
| --- | --- |
| clipToWorld | Clip space to world space matrix. |
| viewPosition | View position in world space. |
| distance | Distance from the view position of the plane. |
| points | Calculated points.  (A minimum size of 4 elements is required). |





### Description



Calculate the points of the frustrum plane facing the viewer at a specific distance.

The points array will be filled with the calculated points in the following order: left bottom, left top, right top and right bottom.


            
