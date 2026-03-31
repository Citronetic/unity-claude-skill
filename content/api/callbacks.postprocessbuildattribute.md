This version of Unity is unsupported.



# PostProcessBuildAttribute





class in
          UnityEditor.Callbacks



/



Inherits from:[CallbackOrderAttribute](CallbackOrderAttribute.html)


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



Add this attribute to a method to get a notification just after building the player.


              


```
// C# example:
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;public class MyBuildPostprocessor {
    [PostProcessBuildAttribute(1)]
    public static void OnPostprocessBuild(BuildTarget target, string pathToBuiltProject) {
        Debug.Log( pathToBuiltProject );
        }
}
```





PostProcessBuildAttribute has an option to provide an order index in the callback, starting at 0. This is useful if you have more than one PostProcessBuildAttribute callback, and you would like them to be called in a certain order. Callbacks are called in order, starting at zero.


            Additional resources: [IPostprocessBuildWithReport](Build.IPostprocessBuildWithReport.html)





### Inherited Members














            
