This version of Unity is unsupported.



# [ShortcutManager](ShortcutManagement.ShortcutManager.html).RegisterContext




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

public static void RegisterContext([ShortcutManagement.IShortcutContext](ShortcutManagement.IShortcutContext.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The custom context to add to the shortcut context list. |





### Description



Registers a [IShortcutContext](ShortcutManagement.IShortcutContext.html) as a custom context used to filter shortcuts.





Additional resources: [ShortcutManager.UnregisterContext](ShortcutManagement.ShortcutManager.UnregisterContext.html).


              


```
using UnityEditor;
using UnityEditor.ShortcutManagement;
using UnityEngine;

public class ShortcutContextSample : EditorWindow
{
    public class CustomShortcutContext : IShortcutContext
    {
        public bool active
        {
            get
            {
                if (!(focusedWindow is ShortcutContextSample view))
                    return false;

                return view.toggleValue;
            }
        }
    }

    [Shortcut("Custom Shortcut Context/Sample Shortcut", typeof(CustomShortcutContext), KeyCode.Mouse1)]
    static void SampleShortcut(ShortcutArguments args)
    {
        Debug.Log("The sample shortcut was called.");
    }

    bool m_ToggleValue = false;
    public bool toggleValue => m_ToggleValue;

    CustomShortcutContext m_ShortcutContext = new CustomShortcutContext();

    [MenuItem("Window/Custom Editor Window")]
    public static void ShowWindow()
    {
        ShortcutContextSample wnd = GetWindow<ShortcutContextSample>();
        wnd.titleContent = new GUIContent("Custom Editor Window");
    }

    void OnGUI()
    {
        var content = new GUIContent("Toggle", "Toggle to activate the shortcut context.");
        m_ToggleValue = EditorGUILayout.Toggle(content, m_ToggleValue);
    }

    private void OnEnable()
    {
        ShortcutManager.RegisterContext(m_ShortcutContext);
    }

    private void OnDisable()
    {
        ShortcutManager.UnregisterContext(m_ShortcutContext);
    }
}
```


            
