This version of Unity is unsupported.



# [TextElement](UIElements.TextElement.html).PostProcessTextVertices




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












                    public Action<GlyphsEnumerable> PostProcessTextVertices;






### Description



Callback fired after UI Toolkit has generated the vertex data for a
 [TextElement](UIElements.TextElement.html) and before the geometry is sent to the renderer.
 Use it to inspect or modify each glyph’s quad (position, tint, UVs, etc.) to
 implement custom per‑glyph effects.


            
