This version of Unity is unsupported.

How Root Motion works

Animator component

# Scripting Root Motion

Sometimes your animation comes as “in-place”, which means if you put it in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), it will not move the character that it’s on. In other words, the animation does not contain “**root motion**Motion of character’s root node, whether it’s controlled by the animation itself or externally. [More info](RootMotion.html)
See in [Glossary](Glossary.html#RootMotion)”. For this, you can modify root motion from a script. To put everything together follow the steps below (note there are many variations of achieving the same result, this is just one recipe).

1. Open the **inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) for the FBX file that contains the in-place animation, and go to the **Animation** tab.

2. Make sure the **Muscle Definition**This allows you to have more intuitive control over the character’s skeleton. When an Avatar is in place, the Animation system works in muscle space, which is more intuitive than bone space. [More info](MuscleDefinitions.html)
See in [Glossary](Glossary.html#Muscledefinition) is set to the **Avatar**An interface for retargeting animation from one rig to another. [More info](ConfiguringtheAvatar.html)
See in [Glossary](Glossary.html#Avatar) you intend to control (let’s say this avatar is called *Dude*, and it has already been added to the **Hierarchy View**).

3. Select the **animation clip**Animation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. [More info](class-AnimationClip.html)
See in [Glossary](Glossary.html#AnimationClip) from the available clips.

4. Make sure **Loop Pose**An animation clip setting that blends the end and start of an animation to create a seamless join. [More info](class-AnimationClip.html)
See in [Glossary](Glossary.html#LoopPose) is properly aligned (the light next to it is green), and that the checkbox for **Loop Pose** is clicked.

[Image: The Animation tab displays the selected Run animation clip with the Loop Pose property enabled. The start and end of the loop match as indicated by Loop Match being green.]
The Animation tab displays the selected Run animation clip with the Loop Pose property enabled. The start and end of the loop match as indicated by Loop Match being green.

5. Preview the animation in the animation viewer to make sure the beginning and the end of the animation align smoothly, and that the character is moving “in-place”.

6. On the animation clip [create a curve](animeditor-AnimationCurves.html) that will control the speed of the character (you can add a curve from the **Animation Import inspector** **Curves-> +**).

7. Name that curve something meaningful, like “Runspeed”.

[Image: The Curves property expanded and displaying the animation curve for the Runspeed property.]
The Curves property expanded and displaying the animation curve for the Runspeed property.

8. Create a new **Animator Controller**Controls animation through Animation Layers with Animation State Machines and Animation Blend Trees, controlled by Animation Parameters. The same Animator Controller can be referenced by multiple models with Animator components. [More info](class-AnimatorController.html)
See in [Glossary](Glossary.html#AnimatorController), (let’s call it **RootMotionController**).

9. Drop the desired animation clip into it, this should create a state with the name of the animation (say **Run**).

10. Add a parameter to the Controller with the same name as the curve (in this case, “Runspeed”).

[Image: The Runspeed parameter added to the BaseLayer of the RootMotionController.]
The Runspeed parameter added to the BaseLayer of the RootMotionController.

11. Select the character **Dude** in the **Hierarchy**, whose inspector should already have an **Animator** component.

12. Drag **RootMotionController** onto the **Controller** property of the Animator.

13. If you press play now, you should see the “Dude” running in place.

14. Finally, to control the motion, you will need to create a script (RootMotionScript.cs), that implements the [OnAnimatorMove](../ScriptReference/MonoBehaviour.OnAnimatorMove.html) callback:

```cs
using UnityEngine;
using System.Collections;

[RequireComponent(typeof(Animator))]

public class RootMotionScript : MonoBehaviour {

   void OnAnimatorMove()
   {
      Animator animator = GetComponent<Animator>();

      if (animator)
      {
         Vector3 newPosition = transform.position;
         newPosition.z += animator.GetFloat("Runspeed") * Time.deltaTime;
         transform.position = newPosition;
      }
   }
}
```

15. You should attach RootMotionScript.cs to the “Dude” object. When you do this, the **Animator component**A component on a model that animates that model using the Animation system. The component has a reference to an Animator Controller asset that controls the animation. [More info](class-AnimatorController.html)
See in [Glossary](Glossary.html#AnimatorComponent) will detect that the script has an [OnAnimatorMove](../ScriptReference/MonoBehaviour.OnAnimatorMove.html) function and show the **Apply Root Motion** property as *Handled by Script*

[Image: The Animator component with the Apply Root Motion property set to Handled by Script.]
The Animator component with the Apply Root Motion property set to Handled by Script.

How Root Motion works

Animator component
