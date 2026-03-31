This version of Unity is unsupported.



# [Cubemap](Cubemap.html).requestedMipmapLevel




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












                    public int requestedMipmapLevel;






### Description



The mipmap level to load.





Normally, the mipmap streaming system selects which mipmap to load based on the position of all Cameras. Setting this field forces a specific mipmap to be loaded and overrides the mipmap streaming system. The mipmap level can still be modified by budgeting memory. Use the streamingMipmapsPriority property to increase the chance of a particular Texture mipmap level being selected by the mipmap streaming system.

Additional resources: [ClearRequestedMipmapLevel](Cubemap.ClearRequestedMipmapLevel.html).


            
