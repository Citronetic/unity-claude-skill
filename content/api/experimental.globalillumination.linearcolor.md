This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# LinearColor





struct in
          UnityEngine.Experimental.GlobalIllumination



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



Contains normalized linear color values for red, green, blue in the range of 0 to 1, and an additional intensity value.





Additional resources: [Color](Color.html)


              


```
using UnityEngine;
using UnityEngine.Experimental.GlobalIllumination;public class LinearColorExample : MonoBehaviour
{
    void Start()
    {
        // Initialize by setting each component
        LinearColor linearColor = default(LinearColor);
        linearColor.red = 1f;
        linearColor.green = 0.5f;
        linearColor.blue = 0f;
        linearColor.intensity = 16f;        // Get normalized linear color from UnityEngine.Color
        // The conversion doesn't take the alpha component into account
        LinearColor covertedColor = LinearColor.Convert(new Color(1f, 0.5f, 0f, 0.5f), intensity : 16f);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| blue | The blue component in the range of 0.0 to 1.0. |
| green | The green component in the range of 0.0 to 1.0. |
| intensity | The intensity value used to scale the red, green and blue component. |
| red | The red component in the range of 0.0 to 1.0. |





### Static Methods



| Method | Description |
| --- | --- |
| Black | Returns a black color. |
| Convert | Converts a Light's color value to a normalized linear color value, automatically handling gamma conversion if necessary. |


            
