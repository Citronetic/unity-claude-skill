This version of Unity is unsupported.



# Motion





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



Stores a reference to an animation asset associated with a [State Machine](../Manual/AnimationStateMachines.html) state.





The [Motion](Motion.html) class acts as an abstraction for APIs that accept either the [AnimationClip](AnimationClip.html) or [BlendTree](Animations.BlendTree.html) animation classes.

Additional resources: [AnimatorState.motion](Animations.AnimatorState-motion.html), [AnimatorController.AddMotion](Animations.AnimatorController.AddMotion.html), [BlendTree.AddChild](Animations.BlendTree.AddChild.html).

This example demonstrates how to create a [BlendTree](Animations.BlendTree.html) from a selection of [AnimationClips](AnimationClip.html). This example also demonstrates how a [BlendTree](Animations.BlendTree.html) is composed of two or more child [Motion](Motion.html)s, and how to use a [BlendTree](Animations.BlendTree.html) to instantiate an [AnimatorState](Animations.AnimatorState.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;

static class MotionClassExample
{
    [MenuItem("Example/Create Animator Controller From Selected Clips")]
    static void CreateAnimatorControllerFromClips()
    {
        // Get the Motion-derived assets in the selection. You can only do this with AnimationClip assets.
        var motions = new List<Motion>();
        foreach (var obj in Selection.objects)
        {
            if (obj is Motion clip)
            {
                motions.Add(clip);
            }
        }

        if (motions.Count == 0)
        {
            Debug.LogWarning("No clips selected");
            return;
        }

        // Create an AnimationController in the project.
        var animatorController =
            AnimatorController.CreateAnimatorControllerAtPath(
                AssetDatabase.GenerateUniqueAssetPath("Assets/MotionExample.controller"));

        // Create a BlendTree that blends between the selected Motion objects.
        var blendTree = new BlendTree { name = "Default" };
        for (var i = 0; i < motions.Count; i++)
        {
            var clip = motions[i];
            blendTree.AddChild(clip, (float)i / motions.Count);
        }

        // Create a new state from the BlendTree (which is itself a Motion).
        animatorController.AddMotion(blendTree);

        // Make sure the BlendTree is persisted.
        AssetDatabase.AddObjectToAsset(blendTree, animatorController);

        // Show the new  AnimatorController in the project window.
        Selection.activeObject = animatorController;
        EditorGUIUtility.PingObject(animatorController);
    }
}
```





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
