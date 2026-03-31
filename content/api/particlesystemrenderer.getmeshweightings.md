This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).GetMeshWeightings




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

public int GetMeshWeightings(out float[] weightings);






### Parameters



| Parameter | Description |
| --- | --- |
| weightings | An array this function populates with the list of Mesh weightings the ParticleSystemRenderer uses for particle Mesh selection. If the array is smaller than the number of weights, this function cannot populate it with every weight. If the array is larger than the number of weights, this function ignores indices greater than the number of weights. Use ParticleSystemRenderer.meshCount to get the number of Meshes, and thus weights, the ParticleSystemRenderer has. |





### Returns



**int**
        The number of weights this function wrote to the destination array.





### Description



Gets the array of Mesh weightings to use when randomly selecting particle meshes.





Additional resources: [ParticleSystemRenderer.meshDistribution](ParticleSystemRenderer-meshDistribution.html).


            
