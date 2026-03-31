This version of Unity is unsupported.



# [UserBuildSettings.DebugSymbols](Android.UserBuildSettings.DebugSymbols.html).level




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












                    public static [Unity.Android.Types.DebugSymbolLevel](Unity.Android.Types.DebugSymbolLevel.html) level;






### Description



Specifies the type of debug metadata to include in the symbol files.





You can choose to include either a symbol table that translates active memory addresses into method names, or complete debugging information for in-depth debugging.


              


```
using UnityEditor.Android;
using Unity.Android.Types;public class Settings
{
    public void Setup()
    {
        UserBuildSettings.DebugSymbols.level = DebugSymbolLevel.SymbolTable;
    }
}
```


            
