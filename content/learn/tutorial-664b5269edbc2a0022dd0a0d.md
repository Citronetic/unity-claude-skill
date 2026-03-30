[Image: image]

# Player movement

Tutorial

intermediate

+10XP

45 mins

2

Unity Technologies

[Image: Player movement]Summary

In this tutorial, you’ll explore the three systems that relate to the player character’s movement: input, animation, and navigation. You’ll also investigate accessibility considerations for player movement in your own game.

**Note**: This tutorial contains an overview of input remapping for Out of Circulation.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

Not all games require player movement, but it’s a key feature of narrative adventure games like Out of Circulation. Player movement is also significantly impacted by player input, which has some associated accessibility considerations we needed to navigate to create an experience that players could explore using a range of different input types.

In this tutorial, you’ll:

- Evaluate the three systems that relate to player movement in Out of Circulation.
- Adjust the player movement parameters in Out of Circulation and evaluate the impact.
- Investigate accessibility considerations related to player movement in your own game.

**Note**: If you’d like to refresh your memory of the high-level details of Out of Circulation before you begin, review [**Explore Out of Circulation**](https://learn.unity.com/tutorial/explore-out-of-circulation-1?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Mark step as complete

## 2. Our accessibility requirements

Q&A (0)

#### Initial requirements

We did not set specific accessibility requirements related to player movement when we began working on Out of Circulation.

However, the following requirements related to input remapping had a significant impact on our player movement system:

- Player input must be remappable for keyboard, mouse, and gamepad or alternative input.
- Players must be able to set their preferred controls associated with each possible action at runtime in an input section of the game settings.
- Players must be able to use the On-Screen Keyboard (OSK) or other digital keyboards as well as analog hardware.

When you implement input remapping for a game, it means that players can use the controller that works best for them. This is an important choice to give your players.

Mark step as complete

## 3. Player movement: Input system

Q&A (0)

Out of Circulation uses Unity’s [Input System package](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950336724). You can use the Input System to define actions in the game, such as moving the player character or interacting with an NPC. Each action has a specific data type, such as Boolean for a button and Vector2 for a direction. With the Input System, you can add a control binding to each action. This binding specifies the control for that action.

The Input System provides the benefit of abstracting the actions from the code so you can query the value of an action without having to know the control to which it is bound. This benefit means that you can rebind actions without changing your code. Rebinding the action controls is called **input remapping**.

The Input System supports overrides on each binding so the original binding is left unaltered. This means that the control can be reset back to the default binding. The Input System also has a built-in feature to save or read those overrides into a JSON file that you can save to disk.

#### Custom code: SaveSystem.cs

The only input-related code written especially for Out of Circulation handles creating bindings at runtime.

If a player wants to override the default bindings at runtime (in the accessibility settings), they can save their chosen input controls. This won’t overwrite the defaults that we’ve created for the project, and the player can revert back to the default values if they need to.

The override data is saved to a custom JSON file via the **SaveSystem** script, in the function **SaveInput**. It’s loaded on initialization, using the **InternalInit** function of the same class.

Mark step as complete

## 4. Player movement: Animation system

Q&A (0)

There are three common ways that animated characters using [**NavMesh Agents**](https://docs.unity3d.com/Manual/class-NavMeshAgent.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950336724) can move:

1. The NavMeshAgent can move the character directly.
2. A script can move the character, using pathing information from the NavMeshAgent.
3. The root motion of animations can move the character.

You can split and combine these three approaches, as we have done in the vertical slice.

#### Sureswim’s movement

In Out of Circulation, the NavMeshAgent moves the player character (approach 1), but the character’s rotation is controlled by script (approach 2) and the animation tries to match that movement.

To keep things as simple as possible, the player character only has two animations: an idle animation for when they are stationary and a walk animation for when they are moving.

These two animations are blended together in a Blend Tree that uses the character’s movement speed as its blend parameter. Since the walk animation has no root motion, there is no easy way of determining how fast the character is walking in the animation. This means that there could be a mismatch between the actual movement of the character and the way the character is animating.

To address this, the playback speed of the AnimatorController is set each frame using a calculation based on:

- The speed at which the character is actually moving.
- A speed we determined, using trial and error, at which the animation appears to be moving.

Mark step as complete

## 5. Player movement: Navigation system

Q&A (0)

Player character navigation is based on the NavMesh system. We created a specific **NavMeshAgentController**script to set the destination of a NavMesh Agent component so the player character can move around within scenes. The way that the NavMeshAgentController sets this destination varies based on the input device being used. The NavMeshAgentController script detects which input type is being used, listening for the input of that type.

#### Pointer input

Pointer input is the simplest kind of input that Out of Circulation uses. This process works for any input method that we defined under **Gameplay/Pointer Interact** on our [InputActionAsset](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.9/manual/ActionAssets.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950336724), which is called **CharacterControl**.

This is what happens when the player uses pointer input to move their character:

1. The NavMeshAgentController script listens for the pointer input (such as the click of the mouse) and raycasts into the scene at the pointer’s location.
2. The NavMeshAgentController script checks for anything hit, specifically the ground or InteractiveObjects.
3. If the ground is hit, the NavMeshAgentController sets the point that is hit as the destination. If an InteractiveObject is hit, the NavMeshAgentController sets the interaction location for that InteractiveObject as the destination.
4. If an InteractiveObject is selected as the destination, this selection blocks other navigation input until the interaction is finished. The block prevents the player from accidentally leaving an interaction before it is finished.

#### Axis-based input

The other process for moving the character is axis-based input, including the Arrow keys or WASD controls, a joystick, or anything else that is defined by our [InputActionAsset](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.9/manual/ActionAssets.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950336724).

This is what happens when the player uses axis-based input to move their character:

1. The NavMeshAgentController script reads the axis values for input as a vector.
2. The script converts this vector into a vector in the scene’s world space relative to the camera.
3. The script then sets a destination in the vector’s direction, at a specific short distance from the player character’s position.
4. The previous three steps happen every frame, so the destination will constantly be updated. This results in smooth movement.

Mark step as complete

## 6. Intent to interact with axis-based input

Q&A (0)

It’s not enough to allow players to use a range of different input controllers — the user experience for those players should be just as good as the user experience with the default supported controller. If you don’t support the range of ways that players can access your game equally, then you’re not actually making the experience of your game equally available to players who do not use your default input controller.

Correctly identifying the interactive object that the player intends to interact with is an important aspect of successfully supporting axis-based input for Out of Circulation. If this identification system doesn’t work well, the user experience for players who use axis-based input will be considerably poorer than the experience using pointer input.

#### The InteractiveObject challenge

There is a specific complication that needs to be addressed if a player is using axis-based input to interact with an InteractiveObject, like an NPC or collectable item.

In Out of Circulation, there are a number of different InteractiveObjects that the player can interact with in each gameplay scene. We needed a system to decide which InteractiveObject the player was most likely to be trying to interact with at any given time. This system would then allow us to highlight that object for the player. There are a number of different factors that could indicate player intent to interact with an object, which is what makes this system challenging to implement and refine.

#### The basic calculation

The first stage of calculating player intent is to create a number of vectors. These vectors are:

- A vector for the player’s input in worldspace.
- A vector from the player character to every InteractiveObject in the scene.

The system then needs to work out which InteractiveObject the player is most likely to want to interact with so that it can highlight this object.

To determine this object, the system analyzes:

1. The angle between the two vectors for each InteractiveObject in the scene.
2. The distance between the player character and each InteractiveObject in the scene.

**Note**: You don’t need to review exactly how this works to understand the system’s functionality. However, if you want to review the calculation, you can do so in the **NavMeshController**script. The function name is**FindDesiredInteractableIndexForAxisInput**.

#### Determining player intent

In our system, strong player intention to interact with an object is indicated by a small angle between the vectors and a short distance between the player character and the interactive object.

Conversely, weak player intention to interact with a particular object is indicated by a large angle between the vectors and greater distance between the player character and the interactive object.

In the diagram below, InteractiveObjects are identified with numbered boxes. The system would determine that the player most likely intends to interact with **InteractiveObject 3** in this diagram, as this would involve the smallest angle and shortest distance.

[Image: image]

After making calculations based on the distance and angle values, the system highlights the InteractiveObject that the player has demonstrated the strongest intent to interact with.

**Note**: Regardless of whether the player intends to interact with an InteractiveObject or not, the same calculations must be made so that the most likely InteractiveObject can be highlighted.

Mark step as complete

## 7. User feedback for axis-based input interaction

Q&A (0)

User feedback is critical in the design and development process — it took multiple user feedback cycles to achieve the final player movement for the vertical slice.

After completing our initial work on the player movement system, we included the system in a milestone build for review. It became clear to us that players had different expectations of how this system should work. We identified two important actions to take to improve the system:

1. Some testers thought the angle between the two vectors for each InteractiveObject in the scene should be the most important factor in the calculation. Other testers thought the distance between the vectors should be more important. We needed to be able to refine the weighting system.
2. Player input alone was not always enough to determine strong player intent to interact with an InteractiveObject. The direction that the player character was facing also needed to be taken into account.

#### Refined weighting for angle and distance

In order to be able to find a compromise between the two different user perspectives, we weighted the comparable (the result of the system’s calculations) using a public variable called **angleAdditonalInteractionWeighting**.

#### Player character’s forward direction

We adjusted the system to take into account the forward vector of the player character’s Transform. This adjustment incorporated the direction that the player character is facing into the system’s calculations.

When the system cannot find an appropriate InteractiveObject using the player’s input, it reverts to using the player character's forward direction. When the system does this, it uses the player character’s forward vector for its calculations instead of the input vector (the **m_InputInWorldSpace**variable).

Mark step as complete

## 8. Explore: Configure the NavMeshController public variables

Q&A (0)

Take some time to experiment with Out of Circulation’s public variables for player movement. To configure the variables like we did as part of our testing:

**1.**  Open your Out of Circulation Unity project.

**2.**  Load a gameplay scene of your choice and enter Play mode.

**3.**  In the Hierarchy, expand the **DontDestroyOnLoad** GameObject and select the **Character(Clone)**child GameObject.

**4.**  In the Inspector, find the Nav Mesh Agent Controller (Script) component.

[Image: image]

**5.**  Experiment with the variables and consider the impact that your adjustments have on the player experience.

#### The player movement variables

The following public variables are available to configure:

- **Max Angle Of Interaction**: The maximum allowable angle between (1) the direction the player character is facing or (2) the player input and the direction from the character to an interactable object. Any object that has a greater angle than this value won’t be considered for interaction or highlighting.
- **Max Distance Of Interaction:**The maximum allowable distance between the player character and an InteractiveObject for that object to be registered by axis input and considered for interaction or highlighting.
- **Angle Additional Interaction Weighting:** Determines the importance of a small angle between (1) the direction the player character is facing or (2) the player input and the direction from the character to an interactable object. When you increase this value, you increase the importance of a small angle.
- **Axis Input Destination Distance:** The distance from the player character at which the script sets the NavMeshAgent’s destination when using axis input.
- **Max Path Angle Error:** Determines the maximum allowable angle between the player character’s intended direction of travel and the calculated path’s direction. For example, if the player’s input leads into a wall, the destination may be set on the other side of that wall. In this scenario, the calculated path may be completely different from the direction of input and therefore undesired by the player. The system will not be able to set a path that has an angle that differs from the input by more than this value.
- **Orientation Interpolation Speed:**The speed at which the player character turns to face the direction in which they are moving (degrees per second).
- **Teleport To Interactable Object Distance:**The distance between the player character and an InteractiveObject at which (1) the character’s path is canceled and (2) the character is snapped to the object. This is useful in games where exact player character positioning is important.

Mark step as complete

## 9. Extend: Implement a remap control reminder

Q&A (0)

If you want to learn more about the control remapping in this project, you can implement an onscreen control reminder (our descoped requirement).

To implement this reminder, you will need to:

- Query the [Input Action Asset](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.9/manual/ActionAssets.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950336724) bindings, which are available through the **ControlManager** class.
- Display the strings that contain the bound input controls in a small reminder UI window that the player can turn on or off using the **GetBindingDisplayString** function on the Action.

**Hint**: If you need more guidance, you can reuse the code that we created for the input remapping tabs in the game settings to do this. This code is located in the **UIControlSettingBase** class.

Mark step as complete

## 10. Input remapping in your game

Q&A (0)

As you work on your own game, consider the following questions:

- **[Scoping for remappable input](https://gameaccessibilityguidelines.com/support-more-than-one-input-device/):**Out of Circulation’s player actions are simple, so making the input remappable was well within the scope of our project. What actions does your game require players to complete? Have you fully scoped your project so that you can implement remappable controls?
- **[Control reminders](https://gameaccessibilityguidelines.com/indicate-allow-reminder-of-controls-during-gameplay/):**Will your players be able to view a reminder of the game controls, including ones that have been remapped, during gameplay? We didn’t include this in Out of Circulation, though you may have added it as an extension to our work.
- **[Data persistence](https://gameaccessibilityguidelines.com/ensure-that-all-settings-are-savedremembered/):**Out of Circulation’s remapped controls are saved between multiple sessions, whether you are playing a game build or testing in the Unity Editor. Will you implement data persistence in your game so that players can save remapped controls between sessions? If you’d like to learn more about data persistence, you can start with the Junior Programmer mission [**Manage scene flow and data**](https://learn.unity.com/mission/programming-systems-and-architecture).
- **[Control sensitivity](https://gameaccessibilityguidelines.com/include-an-option-to-adjust-the-sensitivity-of-controls/):**There is no control sensitivity in Out of Circulation. If you are implementing this in your game, how do you plan to make it customizable for a range of players with different needs using different input controls?

**Important**: Your answers to these questions are not a substitute for regular testing and feedback from players with disabilities.

#### Further resources

To learn more about accessibility for player movement and input mapping, start with the [SpecialEffect DevKit](https://specialeffectdevkit.info/), which includes detailed guidance on action mapping and input interactions.

Remember, you can also refer to [the accessibility resources that you explored earlier in this course](https://learn.unity.com/tutorial/create-your-production-plan?uv=2021.3&courseId=625fdcaaedbc2a43147471e0&projectId=626970c3edbc2a6b79429613#6283e13bedbc2a60117fe9b1).

Mark step as complete

## 11. Next steps

Q&A (0)

Explore the other tutorials in [**Design and development**](https://learn.unity.com/project/design-and-development?courseId=625fdcaaedbc2a43147471e0) to find out about other aspects of Out of Circulation’s development. When you’re ready, progress to [**Continue your journey**](https://learn.unity.com/project/continue-your-journey?courseId=625fdcaaedbc2a43147471e0).

Mark step as complete

## Complete this Tutorial

Mark all steps complete
