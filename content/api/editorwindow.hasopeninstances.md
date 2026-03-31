This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).HasOpenInstances




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

public static bool HasOpenInstances();






### Parameters



| Parameter | Description |
| --- | --- |
| windowType | The type of the window. Must derive from EditorWindow. |





### Returns



**bool**
        Returns true if an [EditorWindow](EditorWindow.html), matching the specified type, is open. Returns false otherwise.





### Description



Checks if an editor window is open.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class HasOpenInstancesExample : EditorWindow
{
    [MenuItem("Examples/Has Open Instances")]
    static void Init()
    {
        var window = EditorWindow.GetWindow<HasOpenInstancesExample>();
        window.Show();
    }

    [MenuItem("Examples/Close Open Instances")]
    static void Close()
    {
        // Check if any window of type HasOpenInstancesExample is open.
        if (EditorWindow.HasOpenInstances<HasOpenInstancesExample>())
        {
            var window = EditorWindow.GetWindow(typeof(HasOpenInstancesExample));
            window.Close();
        }
    }

    void CreateGUI()
    {
        var label = new Label("Hello, World!");
        rootVisualElement.Add(label);
    }
}
```


            
