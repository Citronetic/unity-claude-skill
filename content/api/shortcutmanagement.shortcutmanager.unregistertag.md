This version of Unity is unsupported.



# [ShortcutManager](ShortcutManagement.ShortcutManager.html).UnregisterTag




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

public static void UnregisterTag(string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | Context string identifier. |





### Description



Removes a tag from the custom context list.


              


```
using UnityEditor;
using UnityEditor.ShortcutManagement;
using UnityEngine;public class MyWindow : EditorWindow
{
    const KeyCode shortcutKey = KeyCode.A;    bool customTag;
    bool CustomTag
    {
        get => customTag;
        set
        {
            if (customTag == value) return;            customTag = value;
            var tag = nameof(customTag);            if (customTag)
            {
                ShortcutManager.RegisterTag(tag);
                Debug.Log($"{tag} enabled");
            }
            else
            {
                ShortcutManager.UnregisterTag(tag);
                Debug.Log($"{tag} disabled");
            }
        }
    }    [Shortcut("Tags/No Tag", typeof(MyWindow), shortcutKey)]
    static void NoTagShortcut()
    {
        Debug.Log($"Shortcut for MyWindow without tag context executed");
    }    [Shortcut("Tags/Custom Tag", typeof(MyWindow), nameof(customTag), shortcutKey)]
    static void CustomTagShortcut()
    {
        Debug.Log($"Shortcut for MyWindow with {nameof(customTag)} tag context executed");
    }    [MenuItem("Window/My Window")]
    static void OpenWindow() => EditorWindow.GetWindow(typeof(MyWindow)).Show();    void OnGUI()
    {
        CustomTag = EditorGUILayout.Toggle("Custom Tag", CustomTag);        EditorGUILayout.Space();
        EditorGUILayout.LabelField($"The default binding for window shortcuts is {shortcutKey}");
    }
}
```





Additional resources: RegisterTag.


            
