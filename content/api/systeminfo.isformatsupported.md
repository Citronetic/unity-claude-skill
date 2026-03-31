This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).IsFormatSupported




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

public static bool IsFormatSupported([Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
[Experimental.Rendering.GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) usage);






### Parameters



| Parameter | Description |
| --- | --- |
| format | The GraphicsFormat format to look up. |
| usage | The GraphicsFormatUsage usage to look up. |





### Returns



**bool**
        Returns true if the format is supported for the specific usage. Returns false otherwise.





### Description



Verifies that the specified graphics format is supported for the specified usage.





If a specific usage is not supported by a format, the operation will fail.

Additional resources: [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) enum and [GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) flags.




---






                        **Obsolete**
                        Use overload with a GraphicsFormatUsage parameter instead.




## Declaration

public static bool IsFormatSupported([Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
FormatUsage usage);






### Description



Obsolete. Use the overload with a [GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) parameter instead.


            
