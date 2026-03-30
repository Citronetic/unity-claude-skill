[Image: image]

# Challenge — Configure Free Teleportation

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: Challenge — Configure Free Teleportation]Summary

In this challenge, you will be implementing the FreeTeleport script into the construction site scene. Once implemented, you can explore the scene in the Editor runtime or build the project to the Oculus Go to test it out there.

Resources

- [Tutorial25_TeleportChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200408/136fddbf-0e3a-4f66-a4ab-f467666292ea/Tutorial25_TeleportChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952258780)

Languages available:

EnglishEnglishEnglish

## 1. Moving with Free Teleportation for Site Exploration

Q&A (0)

In this challenge, you will implement the FreeTeleport script into the construction site Scene. Once implemented, you can explore the Scene in the Editor runtime or build the project to the Oculus Go to test it out there.

[Image: image][Image: image]

In this challenge, you will implement Free Teleport to give your users the ability to move freely around the Scene. To do this, you will:

1. Attach the****Free Teleport component to the OVRCameraRig
2. Configure the Free Teleport component appropriately
3. Ensure the teleport surface has a Collider component attached

Mark step as complete

## 2. Attach the Free Teleport Component to the OVRCameraRig

Q&A (0)

*Add the Free Teleport component to the OVRCameraRig to give the user the ability to freely navigate the virtual Scene.*

[Image: image]

1. Locate the **OVRCameraRig** in the Hierarchy.
2. In the OVRCameraRig’s Inspector**,** click **Add Component**.
3. Search for and select the **FreeTeleport** component.

Mark step as complete

## 3. Configure the Free Teleport Component

Q&A (0)

*Configure the Free Teleport component to work in your Scene.*

[Image: image]

1. Set the parameters appropriately on the **FreeTeleport component** in the Inspector window.
2. Set **Controller** to **R Tracked Remote**.
3. Set the **Controller Transform** to the **RightHandAnchor**.
4. Set the **Button** to **Primary Index Trigger**.
5. Assign the **Teleport Marker** to **TeleportMarker** Prefab.

Mark step as complete

## 4. Ensure the Teleport Surface has a Collider Component

Q&A (0)

*Confirm that the ground GameObject has a Collider so that the Free Teleport component will be able to detect the teleport surface.*

[Image: image]

1. Find the **Ground GameObject** in the Hierarchy.
2. Look at its Inspector.
3. Ensure you see a **Collider**object.

[Image: image]

**Tip — Mesh Colliders**

Most GameObjects visible in the Scene will have a **Collider** by default; however, if the object does not, you can quickly add a **Mesh Collider** (**Add Component > Mesh Collider**).

Mark step as complete

## 5. Key Takeaways

Q&A (0)

*Click Play and now you will be able to teleport freely around the Scene. (Note that you are able to test this with the mouse and WASD keys for rapid iteration.) After it's working in the Editor, deploy the project to the Oculus Go and try it in VR!*

[Image: image]

By completing this module, you're now able to:

1. Add and configure the Free Teleport component

2. Ensure the Teleportable Surface” has a Collider on it

3. Test the functionality in the Editor

Mark step as complete

## Complete this Tutorial

Mark all steps complete
