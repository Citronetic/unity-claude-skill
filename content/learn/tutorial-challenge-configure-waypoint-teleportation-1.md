[Image: image]

# Challenge — Configure Waypoint Teleportation

Tutorial

Beginner

+10XP

30 mins

0

(7)

Unity Technologies

[Image: Challenge — Configure Waypoint Teleportation]Summary

In this challenge, you will implement the FreeTeleport script into the construction site scene.

Resources

- [Tutorial23_WaypointChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200408/439a5f3a-0a7e-44a9-9393-7dbf719653e4/Tutorial23_WaypointChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952296389)

Languages available:

EnglishEnglishEnglish

## 1. Moving with Waypoint Teleportation for a Site Tour

Q&A (0)

In this challenge, you will implement the FreeTeleport script into the construction site Scene. Once implemented, you can explore the Scene in the Editor or build the project to the Oculus Go to test it out there.

[Image: image]

In this Scene, you will implement Free Teleport to give your users the ability to move freely around the Scene. To do this, you will:

1. Attach the Free Teleport component to the OVRCameraRig
2. Configure the Free Teleport component appropriately
3. Ensure the teleport surface has a Collider****component attached

Mark step as complete

## 2. Add Waypoint Positions to the Scene

Q&A (0)

*Create five Empty GameObjects and position them around the Scene so the user can see different areas of the Scene. (Below are some recommended locations, but feel free to position them to your liking)*

***Note**: You may see some messages appear in the console window. Don't worry — they will not affect your project. If you would like, you can click the "Clear" button to clear the messages*

[Image: image][Image: image][Image: image][Image: image][Image: image]

1. Create five empty GameObjects (**Create > Empty GameObject**).
2. Rename them **Waypoint Position 1**, **Waypoint Position 2**, **Waypoint Position 3**, **Waypoint Position 4**, and **Waypoint Position 5***.*
3. Position them around the Scene in places you think the user would like to see (use the above images as a guide).

Mark step as complete

## 3. Assign the References

Q&A (0)

*Add the newly created Waypoint Positions to the Waypoint Positions list on the Waypoint Teleport component.*

[Image: image]

1. Locate the **Waypoint Teleport** component on the **TeleportRig GameObject**.
2. In the Inspector, adjust the **Waypoint Positions list** size to five on the **Waypoint Teleport component**.
3. Drag each of the **Waypoint Teleport** **positions** into the list.

(**Hint**: Adjust the size of the Waypoint Positions list to reveal additional references.)

**Tip — Collapse Inspector Window**

Use the arrow icon to collapse components to keep the Inspector clutter-free.

[Image: image]Mark step as complete

## 4. Test it in the Editor

Q&A (0)

*Press play and use the provided UI buttons to test the functionality of your newly create Waypoint Positions.*

[Image: image]

1. Press **Play**.
2. In the Game view, use the provided UI to cycle through the Waypoint Positions you created.
3. If you don’t like the position of a Waypoint, adjust its position and rotation and repeat Steps 1 and 2.

Mark step as complete

## 5. Bonus Challenge

Q&A (0)

Add additional Waypoint Positions to the Scene and position them so the user can see the rest of the Scene.

[Image: image]Mark step as complete

## 6. Key Takeaways

Q&A (0)

You've now set up and configured the Waypoint Teleport component to work with your uniquely positioned Teleport Positions. You can now implement this form of locomotion with custom teleport positions in any of your VR projects.

By completing this module, you’re now able to:

- Create and position new Waypoints for the VR user to visit
- Connect them to the WaypointTeleport Component
- Test it in the Editor

Mark step as complete

## Complete this Tutorial

Mark all steps complete
