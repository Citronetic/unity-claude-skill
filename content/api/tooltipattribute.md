This version of Unity is unsupported.



# TooltipAttribute





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



Specify a tooltip for a field in the Inspector window.





[Image: image]


      *Tooltip hovering over the class it was added to.*

In the following script a `Tooltip` is added. This provides information to the user about
the range of values for the `health` variable.  The suggested range is provided in the
`TooltipAttribute` string.

Note: Unity will only use Tooltips from Fields when displaying them in the Editor. You can add Tooltips to other areas, such as classes, structs, and properties to work with user created editor extensions, but Unity won't display them in the Editor.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    [Tooltip("Health value between 0 and 100.")]
    int health = 0;
}
```





### Properties



| Property | Description |
| --- | --- |
| tooltip | The tooltip text. |





### Constructors



| Constructor | Description |
| --- | --- |
| TooltipAttribute | Specify a tooltip for a field. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
