This version of Unity is unsupported.



# TextGenerationSettings





struct in
          UnityEngine



/



Implemented in:[UnityEngine.TextRenderingModule](UnityEngine.TextRenderingModule.html)


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



















### Description



A struct that stores the settings for TextGeneration.





### Properties



| Property | Description |
| --- | --- |
| alignByGeometry | Use the extents of glyph geometry to perform horizontal alignment rather than glyph metrics. |
| color | The base color for the text generation. |
| font | Font to use for generation. |
| fontSize | Font size. |
| fontStyle | Font style. |
| generateOutOfBounds | Continue to generate characters even if the text runs out of bounds. |
| generationExtents | Extents that the generator will attempt to fit the text in. |
| horizontalOverflow | What happens to text when it reaches the horizontal generation bounds. |
| lineSpacing | The line spacing multiplier. |
| pivot | Generated vertices are offset by the pivot. |
| resizeTextForBestFit | Should the text be resized to fit the configured bounds? |
| resizeTextMaxSize | Maximum size for resized text. |
| resizeTextMinSize | Minimum size for resized text. |
| richText | Allow rich text markup in generation. |
| scaleFactor | A scale factor for the text. This is useful if the Text is on a Canvas and the canvas is scaled. |
| textAnchor | How is the generated text anchored. |
| updateBounds | Should the text generator update the bounds from the generated text. |
| verticalOverflow | What happens to text when it reaches the bottom generation bounds. |


            
