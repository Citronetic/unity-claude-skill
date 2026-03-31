This version of Unity is unsupported.



# RangeAttribute





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



Attribute used to make a float or int variable in a script be restricted to a specific range.





When this attribute is used, the float or int will be shown as a slider in the Inspector instead of the default number field.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // This integer will be shown as a slider,
    // with the range of 1 to 6 in the Inspector
    [Range(1, 6)]
    public int integerRange;    // This float will be shown as a slider,
    // with the range of 0.2f to 0.8f in the Inspector
    [Range(0.2f, 0.8f)]
    public float floatRange;
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| RangeAttribute | Attribute used to make a float or int variable in a script be restricted to a specific range. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
