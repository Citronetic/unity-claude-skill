This version of Unity is unsupported.



# [DetailPrototype](DetailPrototype.html).usePrototypeMesh




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












                    public bool usePrototypeMesh;






### Description



Indicates whether this detail prototype uses the Mesh object from the GameObject specified by [prototype](DetailPrototype-prototype.html).





If [renderMode](DetailPrototype-renderMode.html) is [DetailRenderMode.Grass](DetailRenderMode.Grass.html), you can set this value to either `true` or `false`. However, if [renderMode](DetailPrototype-renderMode.html) is [DetailRenderMode.GrassBillboard](DetailRenderMode.GrassBillboard.html), you must set this value to `false`. And if [renderMode](DetailPrototype-renderMode.html) is [DetailRenderMode.VertexLit](DetailRenderMode.VertexLit.html), you must set this value to `true`. Otherwise, this detail prototype won't render.


            
