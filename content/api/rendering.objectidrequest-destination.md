This version of Unity is unsupported.



# [ObjectIdRequest](Rendering.ObjectIdRequest.html).destination




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












                    public [RenderTexture](RenderTexture.html) destination;






### Description



RenderTexture to store the rendering result of the request. The colors in this RenderTexture can be decoded to determine the object that was rendered at each pixel, first by decoding the color to an index using [ObjectIdResult.DecodeIdFromColor](Rendering.ObjectIdResult.DecodeIdFromColor.html) and then by looking this index up in ObjectIdResult._idToObjectMapping.


            
