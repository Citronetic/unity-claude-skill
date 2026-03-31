This version of Unity is unsupported.



# [Coverage](TestTools.Coverage.html).enabled




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












                    public static bool enabled;






### Returns



**bool**
        Returns true if code coverage is enabled; otherwise, returns false.





### Description



Enables or disables code coverage. Note that Code Coverage can affect the performance.


              


```
// Create a new C# script called CodeCoverageMenuItem and place it under the Editor folder.// This class creates a toggle menu item under Code Coverage > Enable Code Coverage.
// Use it to enable/disable Code Coverage.using UnityEditor;
using UnityEngine.TestTools;class CodeCoverageMenuItem
{
    const string EnableCodeCoverageItemName = "Code Coverage/Enable Code Coverage";    [MenuItem(EnableCodeCoverageItemName, false)]
    static void EnableCodeCoverage()
    {
        Coverage.enabled = !Coverage.enabled;
    }    [MenuItem(EnableCodeCoverageItemName, true)]
    static bool EnableCodeCoverageValidate()
    {
        Menu.SetChecked(EnableCodeCoverageItemName, Coverage.enabled);
        return true;
    }
}
```


            
