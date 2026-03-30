This version of Unity is unsupported.

Cast a ray from a camera

Using multiple cameras

# Move a camera along a ray

It is sometimes useful to get a ray corresponding to a screen position and then move the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) along that ray. For example, you may want to allow the user to select an object with the mouse and then zoom in on it while keeping it “pinned” to the same screen position under the mouse (this might be useful when the camera is looking at a tactical map, for example). The code to do this is fairly straightforward:

```cs
using UnityEngine;
using System.Collections;

public class ExampleScript : MonoBehaviour {
    public bool zooming;
    public float zoomSpeed;
    public Camera camera;

    void Update() {
        if (zooming) {
            Ray ray = camera.ScreenPointToRay(Input.mousePosition);
            float zoomDistance = zoomSpeed * Input.GetAxis("Vertical") * Time.deltaTime;
            camera.transform.Translate(ray.direction * zoomDistance, Space.World);
        }
    }
}
```

Cast a ray from a camera

Using multiple cameras
