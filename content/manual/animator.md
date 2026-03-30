This version of Unity is unsupported.

Create an Animator Controller

Animator Window

# Animator Controller Asset

Use an **Animator Controller**Controls animation through Animation Layers with Animation State Machines and Animation Blend Trees, controlled by Animation Parameters. The same Animator Controller can be referenced by multiple models with Animator components. [More info](class-AnimatorController.html)
See in [Glossary](Glossary.html#AnimatorController) asset to maintain a set of animations for a character or object.

[Image: An Animator Controller Asset in the Project Folder]
An Animator Controller Asset in the Project Folder

Animator Controller assets are created from the Assets menu, or from the Create menu in the **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow).

In most situations, it’s normal to have multiple animations and transition between them when certain game conditions occur. For example, you could transition from a walk animation to a jump whenever the spacebar is pressed. However, even if you just have a single **animation clip**Animation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. [More info](class-AnimationClip.html)
See in [Glossary](Glossary.html#AnimationClip), you still need to place it into an Animator Controller to use it on a Game Object.

The Animator Controller has references to the Animation clips it uses. The Animator Controller manages the various Animation Clips and the Transitions between them using a ****State Machine**The set of states in an Animator Controller that a character or animated GameObject can be in, along with a set of transitions between those states and a variable to remember the current state. The states available will depend on the type of gameplay, but typical states include things like idling, walking, running and jumping. [More info](StateMachineBasics.html)
See in [Glossary](Glossary.html#StateMachine)**, which could be thought of as a flow-chart of Animation Clips and Transitions. You can find more information about state machines [here](AnimationStateMachines.html).

[Image: A simple Animator Controller]
A simple Animator Controller

Unity automatically creates an Animator Controller when you begin animating a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) using the Animation Window, or when you attach an Animation Clip to a GameObject.

To manually create an Animator Controller, right-click within either column of the Project window and select **Create** > **Animator Controller**.

Create an Animator Controller

Animator Window
