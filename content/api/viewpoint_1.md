This version of Unity is unsupported.



# Viewpoint<T0>





class in
          UnityEditor


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



















### Description



Defines a Viewpoint that can be selected from the Cameras overlay.





Use this base class with [ICameraLensData](ICameraLensData.html) to define a Viewpoint and expose a component in the Cameras overlay. If you expose a component in the Cameras overlay, you can use the Cameras overlay to look through that component in the Scene view.

To use this class, you must have a custom representation of your camera lens in a [MonoBehaviour](MonoBehaviour.html).

When detected, the Cameras overlay creates an instance of the Viewpoint class for each component that is type T0 in the scene.

The Cameras overlay uses the icon that is attached to the component in the UI.


              


```
using UnityEngine;public class MyVirtualCamera : MonoBehaviour
{
    public float fov;
    public float nearPlane;
    public float farPlane;    public bool physicalProps;
    public float focalLength;
    public Vector2 sensor;
    public Vector2 lensShift;
    public Camera.GateFitMode gateFit;
}
```


              


```
using UnityEngine;
using UnityEditor;class VirtualCameraViewpoint : Viewpoint<MyVirtualCamera>, ICameraLensData
{
    public VirtualCameraViewpoint(MyVirtualCamera target) : base(target) { }    public float NearClipPlane => Target.nearPlane;    public float FarClipPlane => Target.farPlane;    // If you are not using physical properties, FieldOfView can change from the SceneView with the scrollwheel action while looking through a camera.
    public float FieldOfView { get => Target.fov; set => Target.fov = value; }    public bool UsePhysicalProperties => Target.physicalProps;    // If you are using physical properties, FocalLength can change from the SceneView with the scrollwheel action while looking through a camera.
    public float FocalLength { get => Target.focalLength; set => Target.focalLength = value; }    public Vector2 SensorSize => Target.sensor;    public Vector2 LensShift => Target.lensShift;    public Camera.GateFitMode GateFit => Target.gateFit;    // The SceneView sets orthographic to true when:
    // - the 2DMode button is toggled on.
    // - orthographic view is set from the Orientation gizmo.
    //
    // In this example, our representation doesn't consider orthographic view.
    public bool Orthographic { get => false; set { } }
    public float OrthographicSize { get => 0; set { } }
}
```





### Properties



| Property | Description |
| --- | --- |
| Position | The world position. |
| Rotation | The world rotation. |
| Target | Returns the component the Viewpoint is attached to cast as T. |
| TargetObject | A reference to the Component of type T this Viewpoint is attached to. |





### Constructors



| Constructor | Description |
| --- | --- |
| Viewpoint_1 | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| CreateVisualElement | CreateVisualElement is called when a Viewpoint is selected in the Cameras Overlay. |


            
