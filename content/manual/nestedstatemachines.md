This version of Unity is unsupported.

State Machine Behaviours

Animation Layers

# Sub-State Machines

It is common for a character to have complex actions that consist of a number of stages. Rather than handle the entire action with a single state, it makes sense to identify the separate stages and use a separate state for each. For example, a character may have an action called “Trickshot” where it crouches to take a steady aim, shoots and then stands up again.

[Image: The sequence of states in a Trickshot action]
The sequence of states in a “Trickshot” action

Although this is useful for control purposes, the downside is that the **state machine**The set of states in an Animator Controller that a character or animated GameObject can be in, along with a set of transitions between those states and a variable to remember the current state. The states available will depend on the type of gameplay, but typical states include things like idling, walking, running and jumping. [More info](StateMachineBasics.html)
See in [Glossary](Glossary.html#StateMachine) will become large and unwieldy as more of these complex actions are added. You can simplify things somewhat just by separating the groups of states visually with empty space in the editor. However, Mecanim goes a step further than this by allowing you to collapse a group of states into a single named item in the state machine diagram. These collapsed groups of states are called **Sub-state machines**.

You can create a sub-state machine by right clicking on an empty space within the **Animator Controller**Controls animation through Animation Layers with Animation State Machines and Animation Blend Trees, controlled by Animation Parameters. The same Animator Controller can be referenced by multiple models with Animator components. [More info](class-AnimatorController.html)
See in [Glossary](Glossary.html#AnimatorController) window and selecting **Create Sub-State Machine** from the context menu. A sub-state machine is represented in the editor by an elongated hexagon to distinguish it from normal states.

[Image: A sub-state machine]
A sub-state machine

When you double-click the hexagon, the editor is cleared to let you edit the sub-state machine as though it were a completely separate state machine in its own right. The bar at the top of the window shows a “breadcrumb trail” to show which sub-state machine is currently being edited (and note that you can create sub-state machines within other sub-state machines, and so on). Clicking an item in the trail will focus the editor on that particular sub-state machine.

[Image: The breadcrumb trail]
The “breadcrumb trail”

## External transitions

As noted above, a sub-state machine is just a way of visually collapsing a group of states in the editor, so when you make a transition to a sub-state machine, you have to choose which of its states you want to connect to.

[Image: Choosing a target state within the Trickshot sub-state machine]
Choosing a target state within the “Trickshot” sub-state machine

You will notice an extra state in the sub-state machine whose name begins with *Up*.

[Image: The Up state]
The “Up” state

The *Up* state represents the “outside world”, the state machine that encloses the sub-state machine in the view. If you add a transition from a state in sub-state machine to the *Up* state, you will be prompted to choose one of the states of the enclosing machine to connect to.

[Image: Connecting to a state in the enclosing machine]
Connecting to a state in the enclosing machine

State Machine Behaviours

Animation Layers
