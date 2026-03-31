This version of Unity is unsupported.



# [AndroidPluginImporterUtilities](Android.AndroidPluginImporterUtilities.html).SetAndroidSharedLibraryType




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















## Declaration

public static void SetAndroidSharedLibraryType([PluginImporter](PluginImporter.html) importer,
[Android.AndroidSharedLibraryType](Android.AndroidSharedLibraryType.html) type);






### Description



Sets the type of content that the shared library contains.





This is only applicable for plugins that use the `.so` file extension.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Android;public class SharedLibraryTypes : EditorWindow
{
    const string SharedLibraryPath = "Insert_Path_To_SharedLibrary.so";    [MenuItem("Examples/SharedLibraryTypes")]
    static void Init()
    {
        SharedLibraryTypes window = (SharedLibraryTypes)EditorWindow.GetWindow(typeof(SharedLibraryTypes), true, "SharedLibraryTypes");
        window.Show();
    }    void SetFileToBe(AndroidSharedLibraryType type)
    {
        PluginImporter imp = (PluginImporter)PluginImporter.GetAtPath(SharedLibraryPath);
        imp.SetAndroidSharedLibraryType(type);
    }    void OnGUI()
    {
        if (GUILayout.Button("Set file to be symbol"))
            SetFileToBe(AndroidSharedLibraryType.Symbol);        if (GUILayout.Button("Set file to be executable"))
            SetFileToBe(AndroidSharedLibraryType.Executable);
    }
}
```


            
