This version of Unity is unsupported.



# [AnimatorController](Animations.AnimatorController.html).FindStateMachineBehaviourContext




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

public static StateMachineBehaviourContext[] FindStateMachineBehaviourContext([StateMachineBehaviour](StateMachineBehaviour.html) behaviour);






### Parameters



| Parameter | Description |
| --- | --- |
| behaviour | The State Machine Behaviour to get context for. |





### Returns



**StateMachineBehaviourContext[]**
        Returns the State Machine Behaviour edition context.





### Description



Use this function to retrieve the owner of this behaviour.





Please note that this function is very slow. It is not recommended to use this function every frame.
Additional resources: [StateMachineBehaviourContext](Animations.StateMachineBehaviourContext.html).


              


```
using UnityEngine;
using UnityEditor;
public class IdleBehaviour : StateMachineBehaviour
{
    public int transitionCount;
    protected int randomTransitionId = Animator.StringToHash("random");    // OnStateEnter is called when a transition starts and the state machine starts to evaluate the state
    override public void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
    }    // OnStateUpdate is called at each engine tick between OnStateEnter and OnStateExit callback
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        if (stateInfo.normalizedTime > 0.5f)
            animator.SetInteger(randomTransitionId, Random.Range(0, transitionCount));
    }    // OnStateExit is called when a transition ends and the state machine ends to evaluate the state
    override public void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
    }
}[CustomEditor(typeof(IdleBehaviour), true)]
public class IdleBehaviourEditor : Editor
{
    UnityEditor.Animations.StateMachineBehaviourContext[] context;    SerializedProperty transitionCount;    public void OnEnable()
    {
        context = UnityEditor.Animations.AnimatorController.FindStateMachineBehaviourContext(target as StateMachineBehaviour);
        if (context != null)
        {
            // animatorObject can be an AnimatorState or AnimatorStateMachine
            UnityEditor.Animations.AnimatorState state = context[0].animatorObject as UnityEditor.Animations.AnimatorState;
            if (state != null)
            {
                IdleBehaviour behaviour = target as IdleBehaviour;
                behaviour.transitionCount = state.transitions.Length;
            }
        }        transitionCount = serializedObject.FindProperty("transitionCount");
    }    public override void OnInspectorGUI()
    {
        serializedObject.Update();        EditorGUI.BeginDisabledGroup(true);
        EditorGUILayout.PropertyField(transitionCount);
        EditorGUI.EndDisabledGroup();        serializedObject.ApplyModifiedProperties();
    }
}
```


            
