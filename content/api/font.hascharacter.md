This version of Unity is unsupported.



# [Font](Font.html).HasCharacter




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

public bool HasCharacter(char c);






### Parameters



| Parameter | Description |
| --- | --- |
| c | The character to check for. |





### Returns



**bool**
        Whether or not the font has the character specified.





### Description



Does this font have a specific character?





This function checks whether the font has a particular character defined. Some fonts do not have all characters defined (for example, no symbols, or no lower case characters).


              


```
using UnityEngine;public class FontCheck : MonoBehaviour
{
    // Detects if the current font of a 3D text
    // supports '-' sign
    TextMesh t;
    void Start()
    {
        t = transform.GetComponent<TextMesh>();
        if (t.font.HasCharacter('-'))
        {
            Debug.Log("Font supports '-' sign.");
        }
        else
        {
            Debug.LogWarning("This font doesnt support '-'");
        }
    }
}
```


            
