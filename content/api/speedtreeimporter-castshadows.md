This version of Unity is unsupported.



# [SpeedTreeImporter](SpeedTreeImporter.html).castShadows




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




                [Switch to Manual](../Manual/class-SpeedTreeImporter.html)







                    public bool[] castShadows;






### Description



Gets and sets an array of booleans to enable shadow casting for each LOD.





Because shadow casting comes with an increased performance cost, you may want to only render shadows on the SpeedTree assets that are nearest to the player. You can use this feature to improve performance by disabling shadow casting on some of your less detailed LOD levels where the models are far enough away from the camera that the absence of this effect is not noticeable. The array length that you supply must match the number of LOD levels in your SpeedTree asset, and typically would have true values at the start, and false values at the end. For example, if your SpeedTree asset has three LOD levels, you might pass an array of `[ true, true, false ]` to enable shadow casting on the first two LOD levels, but disable it on the third.


            
