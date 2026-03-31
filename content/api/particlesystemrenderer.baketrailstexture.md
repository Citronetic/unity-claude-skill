This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).BakeTrailsTexture




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

public int BakeTrailsTexture(ref [Texture2D](Texture2D.html) verticesTexture,
ref [Texture2D](Texture2D.html) indicesTexture,
[ParticleSystemBakeTextureOptions](ParticleSystemBakeTextureOptions.html) options);






## Declaration

public int BakeTrailsTexture(ref [Texture2D](Texture2D.html) verticesTexture,
ref [Texture2D](Texture2D.html) indicesTexture,
[Camera](Camera.html) camera,
[ParticleSystemBakeTextureOptions](ParticleSystemBakeTextureOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| verticesTexture | A Texture2D to receive the snapshot of the particle trail vertices. |
| indicesTexture | A Texture2D to receive the snapshot of the particle trail indices. |
| camera | The Camera used to determine which way camera-space particles face. |
| options | Specifies whether to include the rotation and scale of the Transform in the baked Texture2D. |





### Returns



**int**
        The number of indices used by the Particle System trails.





### Description



Creates a snapshot of ParticleSystem Trails and stores them in a `Texture2D`.


            
