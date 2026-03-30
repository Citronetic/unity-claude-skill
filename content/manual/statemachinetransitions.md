This version of Unity is unsupported.

Animation Parameters

Animation transitions

# State Machine Transitions

State Machine Transitions exist to help you simplify large or complex State Machines. They allow you to have a higher level of abstraction over the **state machine**The set of states in an Animator Controller that a character or animated GameObject can be in, along with a set of transitions between those states and a variable to remember the current state. The states available will depend on the type of gameplay, but typical states include things like idling, walking, running and jumping. [More info](StateMachineBasics.html)
See in [Glossary](Glossary.html#StateMachine) logic.

Each view in the **animator window**The window where the Animator Controller is visualized and edited. [More info](AnimatorWindow.html)
See in [Glossary](Glossary.html#AnimatorWindow) has an Entry and Exit node. These are used during State Machine Transitions.

The Entry node is used when transitioning into a state machine. The entry node will be evaluated and will branch to the destination state according to the conditions set. In this way the entry node can control which state the state machine begins in, by evaluating the state of your parameters when the state machine begins.

Because state machines always have a default state, there will always be a default transition branching from the entry node to the default state.

[Image: An entry node with a single default entry transition]
An entry node with a single default entry transition

You can then add additional transitions from the Entry node to other states, to control whether the state machine should begin in a different state.

[Image: An entry node with a multiple entry transitions]
An entry node with a multiple entry transitions

The Exit node is used to indicate that a state machine should exit.

Each sub-state within a state machine is considered a separate and complete state machine, so by using these entry and exit nodes, you can control the flow from a top-level state machine into its sub-state machines more elegantly.

It is possible to mix state machine transitions with regular state transitions, so it is possible to transition from state to state, from a state to a statemachine, and from one statemachine directly to another statemachine.

Animation Parameters

Animation transitions
