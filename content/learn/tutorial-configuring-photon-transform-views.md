[Image: image]

# Configuring Photon Transform Views

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: Configuring Photon Transform Views]Summary

In this tutorial, you’ll learn how to use and configure Photon Transform Views to synchronize Transform information across Photon-networked Unity applications.

Languages available:

EnglishEnglishEnglish

## 1. Configuring Photon Transform Views

Q&A (0)

This tutorial has been verified using Unity 2019.4.11f1 and PUN 2 Version 2.22

In this tutorial, you’ll learn how to use and configure Photon Transform Views to synchronize Transform information across Photon-networked Unity applications. The newer, simpler, Photon Transform View (**Figure 01**) allows the user to synchronize any combination of a Transform’s position, rotation, and scale using stock, non-changeable settings. Photon Transform View Classic (**Figure 02**) adds the ability to teleport an observed Transform whose position changes more than a specified distance, and offers options for interpolation and extrapolation.

[Image: image][Image: image]Mark step as complete

## 2. Photon Transform View Classic Options

Q&A (0)

**Synchronize Position**

- **Enable teleport for great distances**: If an observed Transform moves farther than a specified distance, Photon can instantly place it at the new position.
- **Interpolate Option**: An observed Transform’s position can either be synchronized at each update, or moved smoothly toward it.
- **Lerp/Fixed Speed**: Controls how fast a Transform’s position is changed toward the updated value when Interpolate Option is set to Fixed Speed or Lerp.
- **Extrapolate Option**: Disabled by default, this option allows Photon to attempt to predict the position of an observed Transform.

**Synchronize Rotation**

- **Interpolate Option**: Photon can synchronize an observed Transform’s rotation at each update, or transition smoothly using Lerp or Rotate Towards.
- **Lerp/Rotate Towards Speed**: Controls how fast a Transform is rotated toward the updated value.
- **Synchronize Scale**
- **Interpolate Option**: Scale can either be synchronized at each update, the default behavior, or interpolated using Lerp or MoveTowards.
- **Lerp/MoveTowards Speed**: Controls how fast a Transform’s scale is changed toward the updated value.

**Synchronize Scale**

- **Interpolate Option**: Scale can either be synchronized at each update, the default behavior, or interpolated using Lerp or MoveTowards.
- **Lerp/MoveTowards Speed**: Controls how fast a Transform’s scale is changed toward the updated value.

Mark step as complete

## 3. Applying a Photon Transform View

Q&A (0)

1. Load or create a PUN-enabled project with a valid AppId.

2. In a new Scene, create an empty GameObject by selecting **Create Empty** from the GameObject drop-down. Name it *Photon*.

3. Attach a **Connect And Join Random** component.

4. Create a Sphere by selecting **3D Object > Sphere** from the GameObject drop-down.

5. Attach a **Photon View** component.

6. Attach a **Photon Transform View** or **Photon Transform View Classic** component.

7. The **Photon Transform View** component should automatically populate the slot labeled **Observed Components** in the Photon View Inspector (**Figure 03**).

[Image: image]

8. Position the MainCamera where the Sphere is visible in its view.

9. Save the Scene and build your project, making sure to include only this Scene in the build.

10. Enter Play Mode.

11. While Play Mode is active, launch the Build, either on another machine, or in Windowed mode on the same machine.

12. (If running the Build on the same machine) If the Build starts in fullscreen mode, press Alt-Enter and drag the window to another position (or monitor, in a multi-monitor setup) so that both the running Build and Unity Editor Scene view are visible.

13. In the Photon View section of the Sphere’s Inspector, enable **Controlled locally** (**Figure 04**). This will make the Unity Editor instance the master, and cause the Build to sync to it.

[Image: image]

14. Move the Sphere in the Unity Editor, either using the Move Gizmo in Scene view, or by directly changing the values in the Transform Inspector.

15. The Sphere in the Build should move to match the position of the Sphere in the Unity Editor.

16. Exit the Build and Play Mode.

Mark step as complete

## 4. Conclusion

Q&A (0)

The Photon Transform View component makes it incredibly easy to update the position, rotation, and scale of a Transform across instances of a Photon-enabled application.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
