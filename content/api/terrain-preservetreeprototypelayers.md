This version of Unity is unsupported.



# [Terrain](Terrain.html).preserveTreePrototypeLayers




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












                    public bool preserveTreePrototypeLayers;






### Description



Allows you to specify how Unity chooses the [layer](../Manual/Layers.html) for tree instances.





Unity automatically assigns a [layer](../Manual/Layers.html) to the tree instances on your terrain. This property allows you to specify whether the tree instances should have the same layer value as the terrain GameObject, or whether they should take on the same layer value as their tree prototype Prefab (which means each type of tree can have a unique layer value). The default is false, which means trees get the terrain GameObject's layer. Set this value to true if you want your trees to take on the layer value of their prototype Prefabs.


            
