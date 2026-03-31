This version of Unity is unsupported.



# [UserBuildSettings.DebugSymbols](Android.UserBuildSettings.DebugSymbols.html).format




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












                    public static [Unity.Android.Types.DebugSymbolFormat](Unity.Android.Types.DebugSymbolFormat.html) format;






### Description



Specifies the format for the symbols package.





You can package symbols as a zip file, directly embed those into the app bundle (aab), or use both methods.

**Note:** Unity doesn’t embed symbols into an apk. In this case, upload a separate zip file with symbols.


              


```
using UnityEditor.Android;
using Unity.Android.Types;public class Settings
{
    public void Setup()
    {
        UserBuildSettings.DebugSymbols.format = DebugSymbolFormat.IncludeInBundle | DebugSymbolFormat.Zip | DebugSymbolFormat.LegacyExtensions;
    }
}
```


            
