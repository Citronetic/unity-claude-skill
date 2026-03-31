This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).GetCompatibleFormat




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

public static [Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) GetCompatibleFormat([Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
[Experimental.Rendering.GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) usage);






### Parameters



| Parameter | Description |
| --- | --- |
| format | The GraphicsFormat format to look up. |
| usage | The GraphicsFormatUsage usage to look up. |





### Returns



**GraphicsFormat**
        Returns a format supported by the platform. If no equivalent or compatible format is supported, the function returns GraphicsFormat.None.





### Description



Returns a format supported by the platform for the specified usage.





If the platform supports the specified format for the usage, this method returns the input format. Otherwise, the method searches for a supported format with similar properties to the input format. If the platform doesn't support any similar format, the method returns a fallback format. For example, if the input format is a compressed format that isn't supported, the function returns an uncompressed equivalent format. If the platform doesn't support any equivalent or compatible  fallback formats, this method returns GraphicsFormat.None.

Additional resources: [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) enum and [GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) flags.




---






                        **Obsolete**
                        Use overload with a GraphicsFormatUsage parameter instead.




## Declaration

public static [Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) GetCompatibleFormat([Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
FormatUsage usage);






### Description



Obsolete. Use the overload with a [GraphicsFormatUsage](Experimental.Rendering.GraphicsFormatUsage.html) parameter instead.


            
