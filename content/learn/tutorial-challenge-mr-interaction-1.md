[Image: image]

# Challenge — MR Interaction

Tutorial

Beginner

+10XP

30 mins

5

(12)

Unity Technologies

[Image: Challenge — MR Interaction]Summary

In this challenge, you will display information about and manipulate a Rover using HoloLens interactions.

Resources

- [Tutorial22_InteractionChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200409/bd0b587b-674a-4031-b3d5-33a80b082fa2/Tutorial22_InteractionChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952686580)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you will display information about and manipulate a Rover using HoloLens interactions.

To do so, you’ll need to:

1. Set up your Scene for Mixed Reality development
2. Configure PointerEnter Gaze controls
3. Configure PointerExit Gaze controls
4. Display information to the user when they click on the intractable object
5. Configure the PointerClick event to hide display information
6. Create a Voice Manager to handle keyword inputs
7. Add voice controls to the Rover to recenter the object on command
8. Add the ability to scale and rotate the object

Mark step as complete

## 2. Set Up Your Scene for Mixed Reality Development

Q&A (0)

1. Open the **Mixed Reality Scene Settings**window (**Mixed Reality Toolkit**> **Configure**> **Apply Mixed Reality Scene Settings**).
2. Check the following checkboxes and leave the others unchecked.
3. Click **Apply**.

[Image: image]Mark step as complete

## 3. Add a Highlight Material to the Sphere

Q&A (0)

*Add the Event Trigger component to the Interaction Sphere and configure its Mesh Renderer Material to highlight upon gaze.*

[Image: image]

1. Select the****Interaction Sphere** in the Hierarchy.
2. In the Inspector,****click **Add Component**,****then search for and select the **Event Trigger** to add it to the GameObject.
3. Add a **Pointer Enter Event**by clicking **Add New Event Type** and selecting **PointerEnter**.
4. Add a Unity Event by clicking the **+** button in the bottom-right corner.
5. Drag the **Interaction Sphere**GameObject** into the GameObject slot.
6. In the function drop-down, select **MeshRenderer** > **Material**. In the Material field, select **Highlight Material**.

--------------------

**Tip — Indicating Interaction**

Highlighting an object is a common design pattern to indicate interactivity. If one can interact with an object, typically there will be some type of feedback as one gets close to that object. Sometimes it’s visual feedback; other times it’s haptic or auditory feedback.

For this challenge, we use visual feedback to signal interactivity and do so by changing the Material upon gaze.

Mark step as complete

## 4. Implement the Return State after the Highlight Interaction

Q&A (0)

*Add the Pointer Exit Event to the Interaction Sphere and configure it so the object returns to the default Material when the user looks looks away.*

[Image: image]

1. Select the **Interaction Sphere** in the Hierarchy.
2. Add a **Pointer Exit Event**by clicking **Add New Event Type** and selecting **PointerExit**.****
3. Add a Unity Event by clicking the **+** button in the bottom-right corner.
4. In the GameObject slot, select the **Interaction Sphere GameObject**.
5. In the function drop-down, select **MeshRenderer**> **Material**, and in the **Material Field**, select **Default Material**.
6. Test it out!

Mark step as complete

## 5. Display Information During an Air Tap

Q&A (0)

*Configure the information UI to display with a PointerClick****event so the user can access the informational page by airtapping (clicking) on the Sphere.*

[Image: image]

1. Select the **Interaction Sphere** in the Hierarchy.
2. Add a **Pointer Click Event**by clicking **Add New Event Type** and selecting **PointerClick**.****
3. Add a Unity event by clicking the **+** button in the bottom-right corner.
4. In the GameObject slot, select the **Informational UI GameObject** (**Interactable Sphere > Information UI**).
5. In the function drop-down, select **GameObject > Enable** and check the box.

Mark step as complete

## 6. Configure the UI-Disable Interaction

Q&A (0)

*Configure another PointerClick event to hide, or disable, the informational UI when the user clicks on the page.*

1. Select the **Informational UI** (**Interactable Sphere** > **Informational UI**) in the Hierarchy.
2. In the Inspector,****click **Add Component**, then search for and select the **Event Trigger** to add to the GameObject.
3. Add a **Pointer Exit** **Event** by clicking **Add New Event Type** and selecting **PointerClick**.
4. Add a Unity Event by clicking the **+**button in the bottom-right corner.
5. In the GameObject slot, select the **Informational UI GameObject**.
6. In the function drop-down, select **GameObject > Enable** and leave the checkbox unchecked.
7. Try it out!

[Image: image]Mark step as complete

## 7. Configure Voice Commands with a Keyword

Q&A (0)

*Create an empty GameObject named Voice Manager, add a Speech Input Source component, and add “recenter” to the keywords list.*

[Image: image][Image: image]

1. Create an empty GameObject (**Create > Empty GameObject**) and name it **VoiceManager**.
2. Add the **Speech Input Source component** by hitting **Add Component**, then searching for and selecting **Speech Input Source**.
3. In the keywords drop-down, hit the **+**button to add a new keyword.
4. In the keyword slot, type **recenter** and leave the **Key Shortcut** as **None**for now.

Mark step as complete

## 8. Add Voice Control to the Rover

Q&A (0)

*Add a Speech Input Handler component to the Rover and add the “recenter” keyword to the keywords list. This will allow you to implement functionality when the user says “recenter.”*

1. Add the **Speech Input Handler**to the GameObject by hitting **Add Component**, searching for the **Speech Input Handler**, and double-clicking to select.
2. Add the **recenter** keyword that was declared in the **Speech Input Source** by hitting the **+** button and using the drop-down to select **recenter**.
3. Add a Response event by hitting the **+** button and dragging in the **Rover GameObject**.
4. Add the Recenter functionality to the Response event by using the drop-down to select **Recenter Controller > Recenter**.

Try it out!

[Image: image]Mark step as complete

## 9. Add the Ability to Rotate and Scale

Q&A (0)

*Add the Bounding Box Rig to the Rover and configure the Bounding Box Prefab.*

[Image: image]

1. Add the **Bounding Box Rig** to the Rover by hitting **Add Component** and searching for the **Bounding Box Rig.**
2. Find the **BoundingBoxBasic.prefab****(**Holotoolkit > UX > Prefabs > BoundingBoxes > BoundingBoxBasic.prefab**) in the Project view.
3. With the Rover selected, drag the **BoundingBoxBasic.prefab****into the **Bounding Box Prefab** slot on the **Bounding Box Rig**component.

[Image: image][Image: image]Mark step as complete

## 10. Key Takeaways

Q&A (0)

Congratulations! You've now configured the Mars Rover to work with HoloLens interaction. The interaction patterns integrated in this challenge are the most common types of HoloLens interaction and are especially useful in pre-authored training applications.

By completing this challenge, you've learned core HoloLens interactions:

1. In-editor HoloLens interaction simulation
2. Gaze interactions to highlight interactable objects
3. Gestures to display additional information
4. Voice commands to recenter the object of interest
5. Use the Bounding Box Prefab to rotate and scale the object of interest with the HoloLens

Mark step as complete

## Complete this Tutorial

Mark all steps complete
