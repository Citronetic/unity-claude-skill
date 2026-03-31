This version of Unity is unsupported.



# ReserveModifiersAttribute Constructor




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

public ReserveModifiersAttribute([ShortcutManagement.ShortcutModifiers](ShortcutManagement.ShortcutModifiers.html) modifiers);






### Parameters



| Parameter | Description |
| --- | --- |
| modifiers | One or more modifiers to reserve. |





### Description



Creates an attribute that reserves a modifier for a single shortcut.


              


```
using UnityEditor;
using UnityEditor.ShortcutManagement;
using UnityEngine;public class CustomSceneViewNavigation : ScriptableSingleton<CustomSceneViewNavigation>
{
    bool moveForward;
    bool moveBack;
    bool boost;    [ClutchShortcut("Custom Scene Navigation/Move Forward", KeyCode.KeypadMinus)]
    [ReserveModifiers(ShortcutModifiers.Shift)]
    static void MoveForward(ShortcutArguments args)
    {
        instance.moveForward = args.stage == ShortcutStage.Begin;
    }    [ClutchShortcut("Custom Scene Navigation/Move Back", KeyCode.KeypadPlus)]
    [ReserveModifiers(ShortcutModifiers.Shift)]
    static void MoveBack(ShortcutArguments args)
    {
        instance.moveBack = args.stage == ShortcutStage.Begin;
    }    private void OnEnable()
    {
        SceneView.duringSceneGui += DuringSceneGUI;
    }    private void OnDisable()
    {
        SceneView.duringSceneGui -= DuringSceneGUI;
    }    void DuringSceneGUI(SceneView view)
    {
        boost = Event.current.shift;        var speed = boost ? 5 : 1;
        var direction = Vector3.zero;        if (moveForward)
            direction += view.camera.transform.forward;        if (moveBack)
            direction += -view.camera.transform.forward;        view.pivot += direction.normalized * Time.smoothDeltaTime * speed;
    }
}
```


            
