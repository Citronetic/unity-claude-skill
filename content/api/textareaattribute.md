This version of Unity is unsupported.



# TextAreaAttribute





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



Attribute to make a string be edited with a height-flexible and scrollable text area.





You can specify the minimum and maximum lines for the TextArea, and the field will expand according to the size of the text. A scrollbar will appear if the text is bigger than the area available.

**Note:**  The maximum lines refers to the maximum size of the TextArea.  There is no maximum to the number of lines entered by the user.

[Image: image]

*Text Area in Inspector.*


              


```
using UnityEngine;public class TextAreaExample : MonoBehaviour
{
    [TextAreaAttribute]
    public string MyTextArea;
}
```





### Properties



| Property | Description |
| --- | --- |
| maxLines | The maximum amount of lines the text area can show before it starts using a scrollbar. |
| minLines | The minimum amount of lines the text area will use. |





### Constructors



| Constructor | Description |
| --- | --- |
| TextAreaAttribute | Attribute to make a string be edited with a height-flexible and scrollable text area. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
