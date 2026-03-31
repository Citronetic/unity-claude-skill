This version of Unity is unsupported.



# [Font](Font.html).GetCharacterInfo




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

public bool GetCharacterInfo(char ch,
out characterInfo info,
int size = 0,
[FontStyle](FontStyle.html) style = FontStyle.Normal);






### Parameters



| Parameter | Description |
| --- | --- |
| ch | The character you need rendering information for. |
| info | Returns the CharacterInfo struct with the rendering information for the character (if available). |
| size | The size of the character (default value of zero will use font default size). |
| style | The style of the character. |





### Description



Get rendering info for a specific character.





Note: You should only ever need to use this when you want to implement your own text rendering.
If the character `ch` with the specified `size` and `style` is present in the font texture, then this method will
return true, and info will contain the texture placement information for that character. If the character is not
present, this method returns false. If `size` is zero, it will use the default size for the font.

Additional resources: [characterInfo](Font-characterInfo.html). Example at [RequestCharactersInTexture](Font.RequestCharactersInTexture.html).


            
