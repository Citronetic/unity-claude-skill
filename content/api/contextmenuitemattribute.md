This version of Unity is unsupported.



# ContextMenuItemAttribute





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



Use this attribute to add a context menu to a field that calls a  named method.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    [ContextMenuItem("Reset", "ResetBiography")]
    [Multiline(8)]
    [SerializeField]
    string playerBiography = "";    void ResetBiography()
    {
        playerBiography = "";
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| function | The name of the function that should be called. |
| name | The name of the context menu item. |





### Constructors



| Constructor | Description |
| --- | --- |
| ContextMenuItemAttribute | Use this attribute to add a context menu to a field that calls a  named method. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
