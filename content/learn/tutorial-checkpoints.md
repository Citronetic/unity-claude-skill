[Image: image]

# Checkpoints

Tutorial

Beginner

+10XP

60 mins

26

(203)

Unity Technologies

[Image: Checkpoints]Summary

Checkpoints are a common element of most modern games. They allow the player to save their progress, so that if they die, they respawn back at that checkpoint.

Languages available:

EnglishEnglish日本語简体中文English

## 1. Find the Checkpoint

Q&A (0)

There’s a Checkpoint Prefab in the GameKit 3D Lite. To find it, go to**3D GamekitLite > Prefabs > Utilities > Checkpoint.**

[Image: image]

The Checkpoint is invisible, and **Ellen** triggers it by walking into the Collider area (the green wireframe box). To ensure that the player knows that they have triggered a checkpoint and knows where they are going to respawn, you should use a visual cue in the game to illustrate that **Ellen** hit the checkpoint.

In this example, we are going to add another **Crystal** to the Scene, and set it up so that it activates when **Ellen** touches a Checkpoint. To do this, we need to place a **Crystal**and a Checkpoint, and then set the Checkpoint up so that when **Ellen** touches it, it sends a Game Command to the **Crystal.**

To add a Checkpoint:

- Drag and drop the **Checkpoint** Prefab into the Scene and place it to ensure that Ellen can touch the Collider.
- Resize it to make sure it only covers the area you want to include.

[Image: image]

In the**Inspector** window, Set the **Layer** setting to**Checkpoint.**

[Image: image]

Go to **3D GamekitLite > Prefabs > Interactables** and drag a **Crystal** Prefab into the Scene. Place it near the checkpoint area and rename it to **CheckpointCrystal.**

[Image: image]

- To link the two GameObjects, select the **Checkpoint**.
- Select **Add Component.**
- Add **Send On Trigger Event**(type it in the search box to find it).

Apply the following settings to the **Send On Trigger Event**component:

- Set **Interaction Type t**o **Activate.**
- Set **Interactive Object**to**GateCheckpoint**via the GameObject selection.
- Enable**One Shot**.
- Set**Layers** to**Player.**This allows the play character (Ellen) to collide with the area.

[Image: image]

To verify the connection between them, select the **CheckpointCrystal**, view the**Inspector** window to check that the **Game Command Receiver** has **Checkpoint** listed in the Senders list.

[Image: image]

To test the checkpoint, press**Play** and walk into the **Checkpoint.**The **CheckpointCrystal** now should activate. Next, test what happens if she dies. She should respawn in the center of the Checkpoint volume.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
