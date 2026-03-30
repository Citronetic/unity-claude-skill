                  **Method group is Obsolete**





# [RenderPipelineAsset](Rendering.RenderPipelineAsset.html).prefixedRenderingLayerMaskNames




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













                        **Obsolete**
                        This property is obsolete. Use RenderingLayerMask API and Tags & Layers project settings instead. #from(23.3).

                    public string[] prefixedRenderingLayerMaskNames;






### Returns



**string[]**
        Returns the mask names defined in [renderingLayerMaskNames](Rendering.RenderPipelineAsset-renderingLayerMaskNames.html), but with each name prefixed by its index in the array, a colon, and a space. For example, if the element with an index of 2 has the name "Example Name", its value in this array is "2: Example Name".





### Description



Returns the names of the Rendering Layer Masks for this pipeline, with each name prefixed by a unique numerical ID.





This property is useful for creating custom Editor UI for a render pipeline. If the array of Rendering Layer Mask names contains duplicate names, this property lets you distinguish them by their prefix.


            
