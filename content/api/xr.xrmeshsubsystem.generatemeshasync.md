This version of Unity is unsupported.



# [XRMeshSubsystem](XR.XRMeshSubsystem.html).GenerateMeshAsync




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

public void GenerateMeshAsync([XR.MeshId](XR.MeshId.html) meshId,
[Mesh](Mesh.html) mesh,
[MeshCollider](MeshCollider.html) meshCollider,
[XR.MeshVertexAttributes](XR.MeshVertexAttributes.html) attributes,
Action<MeshGenerationResult> onMeshGenerationComplete);






### Parameters



| Parameter | Description |
| --- | --- |
| meshId | The MeshId of the mesh you wish to generate. |
| mesh | The Mesh to write the results into. |
| meshCollider | (Optional) The MeshCollider to populate with physics data. This may be null. |
| attributes | The vertex attributes you'd like to use. |
| onMeshGenerationComplete | The delegate to invoke when the generation completes. |





### Description



Requests the generation of the Mesh with [MeshId](XR.MeshId.html) `meshId`. Unity calls `onMeshGenerationComplete` when generation finishes.





Use this method to request that a mesh is asynchronously generated. "Generation" includes extracting the mesh data from the subsystem's mesh provider (e.g., an AR device) and baking the [MeshCollider](MeshCollider.html) (if `meshCollider` is not null).

                    This happens in a background thread. For large meshes, this can take several frames to complete. `onMeshGenerationComplete` is invoked when the generation completes.

                    The mesh vertices are provided in session space.

                    Additional resources: [XRMeshSubsystem.TryGetMeshInfos](XR.XRMeshSubsystem.TryGetMeshInfos.html)




---








## Declaration

public void GenerateMeshAsync([XR.MeshId](XR.MeshId.html) meshId,
[Mesh](Mesh.html) mesh,
[MeshCollider](MeshCollider.html) meshCollider,
[XR.MeshVertexAttributes](XR.MeshVertexAttributes.html) attributes,
Action<MeshGenerationResult> onMeshGenerationComplete,
[XR.MeshGenerationOptions](XR.MeshGenerationOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| meshId | The MeshId of the mesh you wish to generate. |
| mesh | The Mesh to write the results into. |
| meshCollider | (Optional) The MeshCollider to populate with physics data. This may be null. |
| attributes | The vertex attributes you'd like to use. |
| onMeshGenerationComplete | The delegate to invoke when the generation completes. |
| options | The mesh generation options. |





### Description



Requests the generation of the Mesh with [MeshId](XR.MeshId.html) `meshId`. Unity calls `onMeshGenerationComplete` when generation finishes.





This variant allows you to specify additional mesh generation options.

                    **Note:** If the [MeshGenerationOptions.ConsumeTransform](XR.MeshGenerationOptions.ConsumeTransform.html) flag is set in the `options` argument, the resulting mesh will be relative to the transform provided by the [MeshGenerationResult](XR.MeshGenerationResult.html). If this flag is not set, the vertices are transformed into session space and the [MeshGenerationResult](XR.MeshGenerationResult.html) will contain an identity transform.

                    Additional resources: [XRMeshSubsystem.TryGetMeshInfos](XR.XRMeshSubsystem.TryGetMeshInfos.html)


            
