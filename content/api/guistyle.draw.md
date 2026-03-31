This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).Draw




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




                [Switch to Manual](../Manual/class-GUIStyle.html)










## Declaration

public void Draw([Rect](Rect.html) position,
bool isHover,
bool isActive,
bool on,
bool hasKeyboardFocus);






### Description



Draw this GUIStyle on to the screen, internal version.





Draw plain GUIStyle without text nor image.




---








## Declaration

public void Draw([Rect](Rect.html) position,
string text,
bool isHover,
bool isActive,
bool on,
bool hasKeyboardFocus);






### Description



Draw the GUIStyle with a text string inside.




---








## Declaration

public void Draw([Rect](Rect.html) position,
[Texture](Texture.html) image,
bool isHover,
bool isActive,
bool on,
bool hasKeyboardFocus);






### Description



Draw the GUIStyle with an image inside. If the image is too large to fit within the content area of the style it is scaled down.




---








## Declaration

public void Draw([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
int controlID);






## Declaration

public void Draw([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
int controlID,
bool on);






## Declaration

public void Draw([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
bool isHover,
bool isActive,
bool on,
bool hasKeyboardFocus);






### Description



Draw the GUIStyle with text and an image inside. If the image is too large to fit within the content area of the style it is scaled down.


            
