This version of Unity is unsupported.



# HelpURLAttribute





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



Provide a custom documentation URL for a class.





The provided URL is expected to be an absolute path. If no file is found at the URL, the path is resolved relative to the Unity documentation, which can be either the manual or scripting reference.


              


```
using UnityEngine;
using UnityEditor;[HelpURL("http://example.com/docs/MyComponent.html")]
public class MyComponent
{
}
```





### Properties



| Property | Description |
| --- | --- |
| URL | The documentation URL specified for this class. |





### Constructors



| Constructor | Description |
| --- | --- |
| HelpURLAttribute | Initialize the HelpURL attribute with a documentation url. |


            
