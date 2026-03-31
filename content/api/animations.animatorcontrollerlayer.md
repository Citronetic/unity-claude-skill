This version of Unity is unsupported.



# AnimatorControllerLayer





class in
          UnityEditor.Animations


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



Contains a state machine that controls animations of a model or parts of it.





An [AnimatorController](Animations.AnimatorController.html) uses [AnimatorControllerLayers](Animations.AnimatorControllerLayer.html) to manage and blend multiple animation states.
You can add a layer to an [AnimatorController](Animations.AnimatorController.html) in the Animator window or through scripting using [AnimatorController.AddLayer](Animations.AnimatorController.AddLayer.html). [AnimatorController.layers](Animations.AnimatorController-layers.html) contains the list of layers of an [AnimatorController](Animations.AnimatorController.html).


              


```
using UnityEditor;
using UnityEditor.Animations;

// This example demonstrates how to create an AnimatorController that contains an injured layer and a fatigued layer
// by default.
public class AnimatorControllerLayerExample
{
    [MenuItem("Example/AnimatorController with Default Layers")]
    public static void CreateAnimatorControllerWithDefaultLayers()
    {
        // Create an AnimatorController
        var controller = AnimatorController.CreateAnimatorControllerAtPath("Assets/NewControllerWithLayers.controller");

        // Create a new injured layer
        var injuredLayer = new AnimatorControllerLayer
        {
            name = "Injured",
            stateMachine = new AnimatorStateMachine()
        };

        // Add the layer to the controller
        controller.AddLayer(injuredLayer);

        // Create a new fatigued layer
        var fatiguedLayer = new AnimatorControllerLayer
        {
            name = "Fatigued",
            stateMachine = new AnimatorStateMachine()
        };

        // Add the layer to the controller
        controller.AddLayer(fatiguedLayer);

        // Save the controller
        AssetDatabase.SaveAssetIfDirty(controller);
    }
}
```





Additional resources: [AnimationLayers](../Manual/AnimationLayers.html) manual. [AnimatorController.RemoveLayer](Animations.AnimatorController.RemoveLayer.html) for removing layers.





### Properties



| Property | Description |
| --- | --- |
| avatarMask | The AvatarMask that is used to mask the animation on the given layer. |
| blendingMode | The blending mode used by the layer. It is not taken into account for the first layer. |
| defaultWeight | The default blending weight that the layers has. It is not taken into account for the first layer. |
| iKPass | When active, the layer will have an IK pass when evaluated. It will trigger an OnAnimatorIK callback. |
| name | The name of the layer. |
| stateMachine | The state machine for the layer. |
| syncedLayerAffectsTiming | When active, the layer will take control of the duration of the Synced Layer. |
| syncedLayerIndex | Specifies the index of the Synced Layer. |





### Public Methods



| Method | Description |
| --- | --- |
| GetOverrideBehaviours | Gets the override behaviour list for the state on the given layer. |
| GetOverrideMotion | Gets the override motion for the state on the given layer. |
| SetOverrideBehaviours | Sets the override behaviour list for the state on the given layer. |
| SetOverrideMotion | Sets the override motion for the state on the given layer. |


            
