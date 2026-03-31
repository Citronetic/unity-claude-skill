This version of Unity is unsupported.



# [Mesh](Mesh.html).MarkModified




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

public void MarkModified();






### Description



Notify [Renderer](Renderer.html) components of mesh geometry change.





By default, whenever Mesh data changes that could affect the geometry of the mesh, all [Renderer](Renderer.html) components that use
this mesh get notified. For example, [MeshRenderer](MeshRenderer.html) components recalculate their bounding boxes, and [ShapeModule](ParticleSystem.ShapeModule.html)
rebuild internal data used for mesh surface emission.

However a [MeshUpdateFlags.DontNotifyMeshUsers](Rendering.MeshUpdateFlags.DontNotifyMeshUsers.html) flag can be used in [Mesh.SetVertexBufferData](Mesh.SetVertexBufferData.html),
[Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html) or [Mesh.SetSubMesh](Mesh.SetSubMesh.html) in order to skip this notification.
This can be beneficial when you know that many mesh modifications will happen before the
renderer components will need to actually update. A manual call to `MarkModified` can be used later
to notify the dependent renderer components of a mesh geometry change.

`MarkModified` function only needs to be called if you actually use the `DontNotifyMeshUsers` flag. In all other cases
the mesh change notifications happen automatically.

Additional resources: [Mesh.SetVertexBufferData](Mesh.SetVertexBufferData.html), [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html), [Mesh.SetSubMesh](Mesh.SetSubMesh.html).


            
