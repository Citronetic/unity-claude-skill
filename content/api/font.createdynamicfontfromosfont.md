This version of Unity is unsupported.



# [Font](Font.html).CreateDynamicFontFromOSFont




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

public static [Font](Font.html) CreateDynamicFontFromOSFont(string fontname,
int size);






## Declaration

public static [Font](Font.html) CreateDynamicFontFromOSFont(string[] fontnames,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| fontname | The name of the OS font to use for this font object. |
| size | The default character size of the generated font. |
| fontnames | Am array of names of OS fonts to use for this font object. When rendering characters using this font object, the first font which is installed on the machine, which contains the requested character will be used. |





### Returns



**Font**
        The generate Font object.





### Description



Creates a Font object which lets you render a font installed on the user machine.





CreateDynamicFontFromOSFont creates a font object which references fonts from the OS. This lets you render text using any font installed on the user's machine. See [GetOSInstalledFontNames](Font.GetOSInstalledFontNames.html) for getting names of installed fonts at runtime, which can be used with this function.


            
