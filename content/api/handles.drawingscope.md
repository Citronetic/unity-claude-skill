This version of Unity is unsupported.



# DrawingScope





struct in
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



Disposable helper struct for automatically setting and reverting [Handles.color](Handles-color.html) and/or [Handles.matrix](Handles-matrix.html).





This struct allows you to temporarily set the value of [Handles.color](Handles-color.html) and/or [Handles.matrix](Handles-matrix.html) inside of a block of code and automatically revert them to their previous values when the scope is exited.


              


```
using UnityEditor;
using UnityEngine;// a custom editor that draws a labeled circle around the selected MeshRenderer in the scene view
[CustomEditor(typeof(MeshRenderer))]
public class MeshRendererEditor : Editor
{
    protected virtual void OnSceneGUI()
    {
        MeshRenderer meshRenderer = (MeshRenderer)target;        // get an orientation pointing from the selected object to the camera
        Vector3 cameraToTarget = Camera.current.transform.position - meshRenderer.transform.position;
        Quaternion billboardOrientation = Quaternion.LookRotation(cameraToTarget, Camera.current.transform.up);        // set the handle matrix to the target's position, oriented facing the camera
        Matrix4x4 matrix = Matrix4x4.TRS(meshRenderer.transform.position, billboardOrientation, Vector3.one);
        using (new Handles.DrawingScope(Color.magenta, matrix))
        {
            // draw a magenta circle around the selected object with a label at the top
            Vector3 size = meshRenderer.bounds.size;
            float radius = Mathf.Max(size.x, size.y, size.z);
            Handles.DrawWireArc(Vector3.zero, Vector3.forward, Vector3.right, 360f, radius);
            Handles.Label(Vector3.up * radius, meshRenderer.name);
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| originalColor | The value of Handles.color at the time this DrawingScope was created. |
| originalMatrix | The value of Handles.matrix at the time this DrawingScope was created. |





### Constructors



| Constructor | Description |
| --- | --- |
| Handles.DrawingScope | Create a new DrawingScope and set Handles.color and/or Handles.matrix to the specified values. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Automatically reverts Handles.color and Handles.matrix to their values prior to entering the scope, when the scope is exited. You do not need to call this method manually. |


            
