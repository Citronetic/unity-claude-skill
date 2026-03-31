This version of Unity is unsupported.



# [Mesh](Mesh.html).SetIndexBufferParams




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public void SetIndexBufferParams(int indexCount,
[Rendering.IndexFormat](Rendering.IndexFormat.html) format);






### Parameters



| Parameter | Description |
| --- | --- |
| indexCount | Size of index buffer. |
| format | Format of the indices. |





### Description



Sets the index buffer size and format.





Note: This method is designed for advanced users aiming for maximum performance because it operates on the underlying mesh data structures that primarily work on raw index buffers, vertex buffers and mesh subset data. Using this method, Unity performs very little data validation, so you must ensure your data is valid.

In particular, you must ensure that the index buffer does not contain out-of-bounds indices, and that the sub-mesh index range and bounds are
updated via [SetSubMesh](Mesh.SetSubMesh.html).

For information about the difference between the simpler and more advanced methods of assigning data to a Mesh from script, see the notes on the [Mesh](Mesh.html) page.

General usage pattern is:


              


```
var mesh = new Mesh();// setup vertex buffer data
mesh.vertices = ...;// set index buffer
mesh.SetIndexBufferParams(...);
mesh.SetIndexBufferData(...);// setup information about mesh subsets
mesh.subMeshCount = ...;
mesh.SetSubMesh(index, ...);
```





When you change the index buffer size or format, the [subMeshCount](Mesh-subMeshCount.html) reverts to one,
and the index buffer data is uninitialized. To set values, use [SetIndexBufferData](Mesh.SetIndexBufferData.html).

Note that changing [subMeshCount](Mesh-subMeshCount.html) to a smaller value than it was previously resizes the index buffer to be smaller. The new index buffer size is set to [SubMeshDescriptor.indexStart](Rendering.SubMeshDescriptor-indexStart.html) of the first removed sub-mesh.

If the index buffer size exceeds the maximum buffer size that the device supports, the method raises an exception. For more information, see [SystemInfo.maxGraphicsBufferSize](SystemInfo-maxGraphicsBufferSize.html).

Additional resources: [SetIndexBufferData](Mesh.SetIndexBufferData.html), [subMeshCount](Mesh-subMeshCount.html), [SetSubMesh](Mesh.SetSubMesh.html), [SetSubMeshes](Mesh.SetSubMeshes.html).


            
