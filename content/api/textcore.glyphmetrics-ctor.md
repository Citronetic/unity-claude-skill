This version of Unity is unsupported.



# GlyphMetrics Constructor




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















## Declaration

public GlyphMetrics(float width,
float height,
float bearingX,
float bearingY,
float advance);






### Parameters



| Parameter | Description |
| --- | --- |
| width | The width of the glyph. |
| height | The height of the glyph. |
| bearingX | The horizontal bearingX. |
| bearingY | The horizontal bearingY. |
| advance | The horizontal advance. |





### Description



Constructs a new GlyphMetrics structure.





The horizontal bearingX represents the distance from the current drawing position (origin) relative to the element's left bounding box edge (bbox).

The horizontal bearingY represents the distance from the current drawing position (origin) relative to the element's top bounding box edge (bbox). This represents the top of the text element.

The horizontal advance represents the distance to increase (left to right) or decrease (right to left) the drawing position relative to the origin of the text element. This represents the origin of the next text element.


            
