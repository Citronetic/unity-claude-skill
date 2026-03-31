This version of Unity is unsupported.



# [DetailPrototype](DetailPrototype.html).holeEdgePadding




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












                    public float holeEdgePadding;






### Description



Controls how far away detail objects are from the edge of the hole area.





Specify a non-negative value, which is a scale of the detail mesh's width in world space. ([DetailRenderMode.GrassBillboard](DetailRenderMode.GrassBillboard.html) details have a width of 1.) Unity multiplies this value by the detail mesh's width, and uses the result to determine the radius of a circular area around detail objects, which it then applies for testing against holes.


            
