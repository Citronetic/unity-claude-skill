This version of Unity is unsupported.



# [ClothSkinningCoefficient](ClothSkinningCoefficient.html).maxDistance




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












                    public float maxDistance;






### Description



Distance a vertex is allowed to travel from the skinned mesh vertex position.





The Cloth component makes sure
that the cloth vertices stay within maxDistance from the skinned mesh vertex positions.
If maxDistance is zero, the vertex is not simulated but set to the skinned mesh vertex position.
This behavior is useful for attaching the cloth vertex to the skin of an animated character.
Default: 0.2
Range: [0, inf).


            
