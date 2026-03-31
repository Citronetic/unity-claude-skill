This version of Unity is unsupported.



# SettingsProviderGroupAttribute





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



Attribute used to register multiple [SettingsProvider](SettingsProvider.html) items. Use this attribute to decorate a function that returns an array of [SettingsProvider](SettingsProvider.html) instances. If the function returns null, no SettingsProvider appears in the Settings window.


              


```
using System.IO;
using System.Linq;
using UnityEditor;class XRSettings : SettingsProvider
{
    const string k_XRSettingsFolder = "Assets/Editor/XRSettings";
    public XRSettings(string path, SettingsScope scope = SettingsScope.Project)
        : base(path, scope)
    {
    }    [SettingsProviderGroup]
    public static SettingsProvider[] CreateProviders()
    {
        var files = Directory.GetFileSystemEntries(k_XRSettingsFolder, "*.json");
        return files.Select(entry =>
        {
            // First parameter is the path of the settings in the Settings window.
            return new XRSettings("Project/XRSettings/" + Path.GetFileNameWithoutExtension(entry));
        }).ToArray();
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| SettingsProviderGroupAttribute | Creates a SettingsProviderGroupAttribute used to register multiple SettingsProviders. |


            
