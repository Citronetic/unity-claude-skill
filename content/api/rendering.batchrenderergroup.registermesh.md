This version of Unity is unsupported.



# [BatchRendererGroup](Rendering.BatchRendererGroup.html).RegisterMesh




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

public [Rendering.BatchMeshID](Rendering.BatchMeshID.html) RegisterMesh([Mesh](Mesh.html) mesh);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | Unity mesh. |





### Returns



**BatchMeshID**
        BatchRendererGroup mesh ID.





### Description



Registers a mesh in `BatchRendererGroup` and returns its `BatchMeshID`. Each registration of a specific mesh increases its number of owners by 1.


            
