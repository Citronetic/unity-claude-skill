[Image: image]

# Baking Animation for FBX Export

Tutorial

Beginner

+10XP

30 mins

295

(57)

Unity Technologies

[Image: Baking Animation for FBX Export ]Summary

In this workflow, you’ll learn about baking animation. Baking is a necessary step to be able to export your animations as FBX. This is because control rigs contain Maya specific nodes that are not compatible with FBX. Therefore we must bake our animation onto just the nodes that are compatible with FBX: joints and blendshapes.

Languages available:

EnglishEnglishEnglish

## 1. Introduction

Q&A (0)

#### Topics Covered:

- Referencing
- Namespaces
- What is Baking?
- Baking Animation on Export
- Manually Baking Animation

#### Topics not Covered:

- Rigging for FBX Export
- Loading FBX Files into Unity

#### Assumptions:

This workflow assumes that you have experience using Maya and are familiar with the following terms/concepts:

- Referencing
- Exporting
- FBX file format

Mark step as complete

## 2. Referencing

Q&A (0)

When creating animation, it’s  standard practice to reference assets (characters, props, sets, etc.) into your scene rather than importing them. Referencing maintains a link back to the asset file. In this way, only changes made in the scene (such as animation keys) are saved and  not copies of the assets themselves. This keeps file sizes down and allows for rig updates to propagate out to animation scene files.

Mark step as complete

## 3. Create File Reference

Q&A (0)

To reference an asset into a scene:

1. Open the option box next to File > Create Reference… (*Figure 01*)
2. Check Use namespace.
3. Check Use selected namespace as parent and add new namespace string.
4. Type in a namespace (usually the name of the asset: chr_joe, prp_apple, etc.)
5. Click the reference button, which will open a file browser.
6. Navigate to the asset file you want to reference into your scene.
7. Click open.

[Image: image]Mark step as complete

## 4. Namespaces

Q&A (0)

When referencing an asset, it’s best to use a namespace. A namespace is a unique name prefixed to the beginning of every node in the namespace and separated by a colon (namespace:node). By using namespaces, you can reference in multiple instances of the same asset without worrying about name clashing (multiple nodes sharing the same name).  Namespaces are set in the option box next to: File > Create Reference…

It’s important to know that you can’t import animation from FBX onto an asset that doesn’t have the same namespace, even if the asset’s hierarchy is the same. For this reason, you must be very consistent with the namespace you use for a given asset in every scene you animate with that asset.

In some cases, you may choose to strip out namespaces before exporting. For instance, if you’re working on individual clips of animation (like a character walk cycle) and you wish to use the clip on multiple assets that share the same rigs, you’ll need to first import the reference then remove the namespace before exporting.

Note: You can edit namespaces at any time using the Reference Editor (File > Reference Editor) or the Namespace Editor (Windows > General Editors > Namespace Editor).

Mark step as complete

## 5. What is Baking?

Q&A (0)

Baking is the process of taking the animation driven by a control rig and flattening the results onto the skeleton joints and blendshapes. This is done by setting animation keys on the attributes of the skeleton and blendshape nodes at set intervals (usually every frame). The constraints and connections from the control rig that were originally driving these nodes are then removed or disabled.

After the asset has been baked, the animation will look exactly the same but will no longer be driven by the control rig. This greatly increases playback speed as Maya no longer needs to evaluate the nodes in the control rig to drive the animation. This also means you can no longer use the control rig to update the animation. For this reason, baking is done as a last step after animation is completed.

Mark step as complete

## 6. Manually Baking Animation

Q&A (0)

You may choose to bake animation manually before exporting rather than letting the exporter handle this step for you. This is a good option if you require more fine-grained control over the process or if you are trying to troubleshoot issues encountered while baking animation on export.

Baking manually also allows you to do some rig cleanup to prepare the rig for export (deleting nodes, reordering hierarchy, etc.). This is useful when dealing with complex rig setups that don’t export cleanly.

Mark step as complete

## 7. To bake animation

Q&A (0)

Select all nodes you wish to bake (skinned joints and blendshapes).

Go to Edit > Keys > Bake Simulation

Mark step as complete

## 8. Baking Animation on Export

Q&A (0)

There are two tools for exporting animation from Maya as FBX. The first is the standard Maya export (File > Export Selection…*)*with the file type set to FBX. The second tool is the Game Exporter (File >Game Exporter). Both tools have options to bake the animation during the export process *(Figure 02, Figure 03).*Enabling the bake option will take care of the baking for you during export.

[Image: image][Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
