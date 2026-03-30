This version of Unity is unsupported.

The status bar

Console window

# The Background Tasks window

The Background Tasks window displays the progress of any running asynchronous tasks. For example, you can see the progress for [shader compilation](SL-ShaderCompileTargets.html), [lightmap](Lightmappers.html)A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) baking, and [occlusion culling](OcclusionCulling.html)A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling).

To open the Background Tasks window, do one of the following:

- From the menu, select **Window** > **General** > **Progress**.

- From the Unity Editor [status bar](StatusBar.html), click the global progress bar or the activity indicator (spinner).

[Image: The Background Tasks Window]
The Background Tasks Window

1. ****Toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar)**: Provides options to [filter tasks](#filtering-tasks-by-status) and [clear inactive tasks](#clearing-inactive-tasks) from the list.

2. **Task list**: Displays [progress information](#task-information) about each task for the following:

- Active tasks, including tasks that have stopped responding.

- Some finished tasks. By default, Unity removes these from the list, but some are designed to stay in the list until you [clear them](#clearing-inactive-tasks) manually.

- Failed and cancelled tasks.

## Task information

Each entry in the Background Tasks window displays the following information about the task.

[Image: Components of a background task entry]
Components of a background task entry

| Screenshot label | Section | Displays |
| --- | --- | --- |
| 1 | Task name/description | A name or short description for the task. |
| 2 | Progress bar | Indicates how close the task is to completion. If the task is indeterminate, because its progress is not measurable, the bar shows a small filled region that moves from side to side until the task is finished. |
| 3 | Percent complete | Shows how close the task is to completion, as a percentage. For indeterminate tasks, whose progress is not measurable, this area is empty. |
| 4 | Cancel | Click to cancel an active task. If the task cannot be cancelled, this icon does not appear. |
| 5 | Status | Optionally displays a short description of the current activity for an active task.  When the task finishes, this area displays its final status (for example, finished, failed, or cancelled). |
| 6 | Time elapsed/remaining/total | When an active task takes longer than a few seconds, displays either the current time elapsed or the estimated time remaining. When the task finishes, this area displays the total time elapsed. |

### Subtasks

Some tasks spawn subtasks. The progress window displays an overall progress entry in the parent task (1), and a sub progress entry for each child task (2).

[Image: Subtasks in the Background Tasks window]
Subtasks in the Background Tasks window

Monitor subtasks to determine which part of a complex task takes the most time. This is useful for operations like lightmap baking, which can have hundreds of subtasks.

## View task status

Background tasks can have the following statuses:

| Status | Description | Icon |
| --- | --- | --- |
| Active | The task is running and reports progress as percent complete, or estimated time remaining. | None |
| Indeterminate | The task is running and reports progress, but cannot determine how close it is to being complete. | None |
| Finished | The task finished successfully | (check mark) |
| Unresponsive | The task has not reported any progress for five seconds. | None |
| Cancelled | The task is no longer active because you cancelled it manually.Some tasks cannot be cancelled from the Background Tasks window. | (warning symbol) |
| Failed | The task is no longer active because it failed | (error symbol) |

### Filter tasks by status

Use the filter options in the Background Tasks window toolbar to hide and show different types of tasks.

[Image: Filter toggles in the Background Tasks window]
Filter toggles in the Background Tasks window

| Filter option | Shows or hides |
| --- | --- |
| (check mark) | Finished tasks |
| (warning symbol) | Cancelled and unresponsive tasks |
| (error symbol) | Failed tasks |

## Cancel active tasks

You can cancel some running tasks directly from the Background Tasks window. To cancel a running task click the **cancel** (**x**) icon.

## Clear inactive tasks

Click the **Clear inactive** button in the toolbar to remove all inactive tasks from the list.

Unity automatically clears most finished tasks from the list. However, some tasks are designed to stay in the list until you clear them manually.

Failed and cancelled tasks also stay in the list until you clear them.

To clear unresponsive tasks, you must cancel them first.

## View global progress

The Unity Editor [status bar](StatusBar.html) displays a global progress bar that shows the aggregate overall progress of all active tasks. It does not include finished, failed, or cancelled tasks.

The status bar

Console window
