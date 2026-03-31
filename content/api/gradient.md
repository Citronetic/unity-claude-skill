This version of Unity is unsupported.



# Gradient





class in
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



Represents a Gradient used for animating colors.





Gradients allow animating or interpolating colors by having several "color keys" and "alpha keys". Color keys and alpha keys are separate, and each key has a time specified for it, ranging from 0.0 (0%) to 1.0 (100%). Note that the alpha and colors keys will be automatically sorted by time value and that it is ensured to always have a minimum of 2 color keys and 2 alpha keys.

How the colors are interpolated between the keys is controlled by [GradientMode](GradientMode.html).

Public Gradient variables used in scripts automatically display the gradient editor in the inspector window. [GradientUsageAttribute](GradientUsageAttribute.html) allows specifying whether the gradient colors should be high dynamic range for editing.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        var gradient = new Gradient();        // Blend color from red at 0% to blue at 100%
        var colors = new GradientColorKey[2];
        colors[0] = new GradientColorKey(Color.red, 0.0f);
        colors[1] = new GradientColorKey(Color.blue, 1.0f);        // Blend alpha from opaque at 0% to transparent at 100%
        var alphas = new GradientAlphaKey[2];
        alphas[0] = new GradientAlphaKey(1.0f, 0.0f);
        alphas[1] = new GradientAlphaKey(0.0f, 1.0f);        gradient.SetKeys(colors, alphas);        // What's the color at the relative time 0.25 (25%) ?
        Debug.Log(gradient.Evaluate(0.25f));
    }
}
```





Additional resources: [GradientColorKey](GradientColorKey.html), [GradientAlphaKey](GradientAlphaKey.html), [SerializedProperty.gradientValue](SerializedProperty-gradientValue.html).





### Properties



| Property | Description |
| --- | --- |
| alphaKeyCount | The number of alpha keys defined in the gradient. |
| alphaKeys | All alpha keys defined in the gradient. |
| colorKeyCount | The number of color keys defined in the gradient. |
| colorKeys | All color keys defined in the gradient. |
| colorSpace | Indicates the color space that the gradient color keys are using. |
| mode | Controls how the gradient colors are interpolated. |





### Constructors



| Constructor | Description |
| --- | --- |
| Gradient | Create a new Gradient object. |





### Public Methods



| Method | Description |
| --- | --- |
| Evaluate | Calculate color at a given time. |
| GetAlphaKeys | Get all the alpha keys assigned to the gradient. |
| GetColorKeys | Get all the color keys assigned to the gradient. |
| SetAlphaKeys | Setup gradient with an array of alpha keys. |
| SetColorKeys | Setup gradient with an array of color keys. |
| SetKeys | Setup Gradient with an array of color keys and alpha keys. |


            
