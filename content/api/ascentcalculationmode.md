This version of Unity is unsupported.



# AscentCalculationMode





enumeration


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



Method used for calculating a font's ascent.





The ascent is the distance from the baseline to the top of the font. Font designers define this differently within the metrics of various fonts: some fonts will use the bounding box height, some will use cap height, and others will account for diacritics such as accent marks. Because these differences can affect vertical alignment of text, Unity offers multiple methods of determining the ascent value to use internally.

See [https://en.wikipedia.org/wiki/Typeface#Font_metrics](https://en.wikipedia.org/wiki/Typeface#Font_metrics) for additional information about ascent and  font metrics.





### Properties



| Property | Description |
| --- | --- |
| Legacy2x | Legacy bounding box method. |
| FaceAscender | Ascender method. |
| FaceBoundingBox | Bounding box method. |


            
