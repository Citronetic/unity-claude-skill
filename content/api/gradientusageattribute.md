This version of Unity is unsupported.



# GradientUsageAttribute





class in
          UnityEngine



/



Inherits from:[PropertyAttribute](PropertyAttribute.html)



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



Controls how the [Gradient](Gradient.html) inspector editor treats the color values.





Use this attribute on a Gradient public script variable. You can control the [colorSpace](GradientUsageAttribute-colorSpace.html) and [hdr](GradientUsageAttribute-hdr.html) flags.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Inspector editor for this gradient
    // allows to setup regular low dynamic range
    // colors.
    public Gradient defaultGradient;    // Inspector editor for this gradient allows
    // to setup HDR colors.
    [GradientUsage(true)]
    public Gradient hdrGradient;
}
```





### Properties



| Property | Description |
| --- | --- |
| colorSpace | The color space the Gradient uses. |
| hdr | If set to true the Gradient uses HDR colors. |





### Constructors



| Constructor | Description |
| --- | --- |
| GradientUsageAttribute | Attribute for gradient fields. Used to configure the GUI for the Gradient Editor. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
