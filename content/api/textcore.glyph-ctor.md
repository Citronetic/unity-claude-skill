This version of Unity is unsupported.



# Glyph Constructor




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

public Glyph();






## Declaration

public Glyph([TextCore.Glyph](TextCore.Glyph.html) glyph);






## Declaration

public Glyph(uint index,
[TextCore.GlyphMetrics](TextCore.GlyphMetrics.html) metrics,
[TextCore.GlyphRect](TextCore.GlyphRect.html) glyphRect);






## Declaration

public Glyph(uint index,
[TextCore.GlyphMetrics](TextCore.GlyphMetrics.html) metrics,
[TextCore.GlyphRect](TextCore.GlyphRect.html) glyphRect,
float scale,
int atlasIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| glyph | Glyph used as a reference for the new glyph. |
| index | The index of the glyph in the font file. |
| metrics | The metrics of the glyph. |
| glyphRect | The GlyphRect defining the position of the glyph in the atlas texture. |
| scale | The relative scale of the glyph. |
| atlasIndex | The index of the atlas texture that contains the glyph. |





### Description



Constructor for a new glyph.


            
