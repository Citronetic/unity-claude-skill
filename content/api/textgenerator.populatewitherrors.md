This version of Unity is unsupported.



# [TextGenerator](TextGenerator.html).PopulateWithErrors




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

public bool PopulateWithErrors(string str,
[TextGenerationSettings](TextGenerationSettings.html) settings,
[GameObject](GameObject.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| str | String to generate. |
| settings | Generation settings. |
| context | The object used as context of the error log message, if necessary. |





### Returns



**bool**
        True if the generation is a success, false otherwise.





### Description



Will generate the vertices and other data for the given string with the given settings.





Will only regenerate if the string AND settings are different from the last execution.


            
