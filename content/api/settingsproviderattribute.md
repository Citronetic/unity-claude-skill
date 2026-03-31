This version of Unity is unsupported.



# SettingsProviderAttribute





class in
          UnityEditor


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



Attribute used to register a new [SettingsProvider](SettingsProvider.html). Use this attribute to decorate a function that returns an instance of a [SettingsProvider](SettingsProvider.html). If the function returns null, no SettingsProvider appears in the Settings window.


              


```
using System.IO;
using System.Linq;
using UnityEditor;class MyCustomSettingsProvider : SettingsProvider
{
    const string k_MyCustomSettingsPath = "Resources/MyCustomSettings.asset";
    public MyCustomSettingsProvider(string path, SettingsScope scope)
        : base(path, scope) {}    public static bool IsSettingsAvailable()
    {
        return File.Exists(k_MyCustomSettingsPath);
    }    [SettingsProvider]
    public static SettingsProvider CreateMyCustomSettingsProvider()
    {
        if (IsSettingsAvailable())
        {
            return new MyCustomSettingsProvider("MyCustomSettings", SettingsScope.Project);
        }        // Settings Asset doesn't exist yet. No need to display anything in the Settings window.
        return null;
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| SettingsProviderAttribute | Creates a new SettingsProviderAttribute used to register new SettingsProvider. |


            
