This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphicsStateCollection](Experimental.Rendering.GraphicsStateCollection.html).GetGraphicsStateCountForVariant




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

public int GetGraphicsStateCountForVariant([Shader](Shader.html) shader,
[Rendering.PassIdentifier](Rendering.PassIdentifier.html) passId,
LocalKeyword[] keywords);






## Declaration

public int GetGraphicsStateCountForVariant([Experimental.Rendering.GraphicsStateCollection.ShaderVariant](Experimental.Rendering.GraphicsStateCollection.ShaderVariant.html) variant);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | Shader used in the variant. |
| passId | PassIdentifier used in the variant. |
| keywords | Array of keywords used in the variant. |
| variant | The input shader variant. |





### Returns



**int**
        The number of graphics states associated to input shader variant.





### Description



Get the number of graphics states associated to a shader variant.


            
