This version of Unity is unsupported.



# [AnimatorController](Animations.AnimatorController.html).CreateStateMachineBehaviour




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

public static int CreateStateMachineBehaviour([MonoScript](MonoScript.html) script);






### Parameters



| Parameter | Description |
| --- | --- |
| script | MonoScript class to instantiate. |





### Returns



**int**
        Returns instance id of created object, returns 0 if something is not valid.





### Description



This function will create a StateMachineBehaviour instance based on the class define in this script.





This function will validate that the monoscript is a valid statemachine behaviour, the class must be a sub class of StateMachineBehaviour and shouldn't be a generic.
Additional resources: [StateMachineBehaviour](StateMachineBehaviour.html).


              


```
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;public class AddSMB
{
    public void DoAddStateMachineBehaviour(UnityEditor.Animations.AnimatorState state, MonoScript monoScript)
    {
        if (state == null)
            return;        int instanceID = AnimatorController.CreateStateMachineBehaviour(monoScript);
        if (instanceID == 0)
        {
            Debug.LogError("Could not create state machine behaviour " + monoScript.name);
            return;
        }        state.AddStateMachineBehaviour(monoScript.GetClass());        var obj = EditorUtility.InstanceIDToObject(instanceID);
        if (obj == null)
            Debug.LogError("No object could be found with instance id: " + instanceID);
        else
            AssetDatabase.AddObjectToAsset(obj, state.ToString());
    }
}
```


            
