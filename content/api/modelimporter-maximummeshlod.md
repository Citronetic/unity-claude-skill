This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).maximumMeshLod




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












                    public int maximumMeshLod;






### Description



The maximum LOD level index after which the mesh generation stops.





The import process stops after the LOD level index reaches the value of this property. For example, if you set this property to 5, the generated LOD levels will only go up to LOD5. The generation process might stop before the LOD level reaches the value in this property if the stop condition is met.

A negative value means that there is no limit on the number of LOD levels.


            
