This version of Unity is unsupported.



# Color32





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Representation of RGBA colors in 32 bit format.





Each color component is a byte value with a range from 0 to 255.

Components ([r](Color32-r.html),[g](Color32-g.html),[b](Color32-b.html)) define a color in RGB color space. Alpha component ([a](Color32-a.html))
defines transparency - alpha of 255 is completely opaque, alpha of zero is completely
transparent.





### Properties



| Property | Description |
| --- | --- |
| a | Alpha component of the color. |
| b | Blue component of the color. |
| g | Green component of the color. |
| r | Red component of the color. |
| this[int] | Access the red (r), green (g), blue (b), and alpha (a) color components using [0], [1], [2], [3] respectively. |





### Constructors



| Constructor | Description |
| --- | --- |
| Color32 | Constructs a new Color32 with given r, g, b, a components. |





### Public Methods



| Method | Description |
| --- | --- |
| ToString | Returns a formatted string for this color. |





### Static Methods



| Method | Description |
| --- | --- |
| Lerp | Linearly interpolates between colors a and b using the interpolation ratio t. |
| LerpUnclamped | Linearly interpolates between colors a and b using the interpolation ratio t. |





### Operators



| Operator | Description |
| --- | --- |
| Color | Color32 can be implicitly converted to and from Color. |
| Color32 | Color32 can be implicitly converted to and from Color. |


            
