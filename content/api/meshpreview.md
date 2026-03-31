This version of Unity is unsupported.



# MeshPreview





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



Use this class to render an interactive preview of a mesh.





Use this class from an [ObjectPreview](ObjectPreview.html) or [Editor.OnPreviewGUI](Editor.OnPreviewGUI.html) to render an interactive mesh preview.





### Properties



| Property | Description |
| --- | --- |
| mesh | The Mesh to display in the preview space. |





### Constructors



| Constructor | Description |
| --- | --- |
| MeshPreview | Creates a new MeshPreview instance with a Mesh target. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Releases allocated resources associated with this object. |
| OnPreviewGUI | Call this from an Editor.OnPreviewGUI or ObjectPreview.OnPreviewGUI to draw a mesh preview. |
| OnPreviewSettings | Call this from Editor.OnPreviewSettings or ObjectPreview.OnPreviewSettings to draw additional settings related to the mesh preview. |
| RenderStaticPreview | Creates a texture preview to override Editor.RenderStaticPreview. The current mesh will be drawn. |





### Static Methods



| Method | Description |
| --- | --- |
| GetInfoString | Returns a short summary of the Mesh attributes (ex, does this mesh contain positions, normals, tangents, etc...). |


            
