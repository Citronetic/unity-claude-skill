# Project setup

Before you can create interactions with the XR Interaction Toolkit, you must perform some preliminary setup of your Unity project and scenes. This setup includes:

- Satisfy the [Prerequisites](#prerequisites)

- [Configure project settings](#settings)

- [Resolve Project Validation issues](#validation)

- [Set up input](#input)

- [Set up scene objects](#scene)

## Prerequisites

To start using the toolkit, you must first take care of the following prerequisites:

- [Install the toolkit](installation.html)

- Choose a render pipeline: the Universal Render Pipeline (URP) provides the best performance and compatibility. While you can use the High Definition Render Pipeline (HDRP) or the Built-In Render Pipeline, both these options have more limitations on XR platforms. The core interaction toolkit doesn't depend on a particular render pipeline, but some assets in samples provided by the toolkit do use URP-based assets.

- [Enable XR providers](https://docs.unity3d.com/6000.0/Documentation/Manual/xr-configure-providers.html) for the devices that you plan to support.

- [Import the toolkit Starter Assets](installation.html#installing-samples) (recommended): The Starter Assets contain Prefabs, presets, and Input Action assets.

Refer to the [XR section](https://docs.unity3d.com/6000.0/Documentation/Manual/XR.html) of the Unity manual for more general information about setting up a project for XR. Note that the [Starter Assets](samples-starter-assets.html#prefabs) package sample contains a preconfigured XR Origin prefab that already contains most of the toolkit components that you need for implementing interactions. Usually, you can save time and effort by using this prefab instead of the more generic XR Origin configurations described in the [Unity Manual](https://docs.unity3d.com/6000.0/Documentation/Manual/xr-origin.html).

## Configure project settings

The XR Interaction Toolkit has a few settings to consider:

- **XR Interaction Simulator Settings**: whether to automatically add the interaction simulator to your scenes when you run them in the Editor. The simulator translates mouse and keyboard input into XR controller input.

- **Runtime Settings**: affects whether some of the manager components of the toolkit are automatically instantiated as needed.

- **Editor Settings**: affects how the properties of some toolkit components appear in the Inspector.

- **Interaction Layer Settings**: assign labels to the interaction layers. You can use up to 31 interaction layers as a way to control which interactors can operate with which interactables. You must assign a label to a layer before you can use it.

##### Tip

The teleport-related components provided in the Starter Assets assume that layer 31 is named "Teleport."

Refer to [Settings and validation](xri-settings.html) for more information.

## Resolve Project Validation issues

The XR Interaction Toolkit and other XR packages provide a set of validation rules which verify your project configuration. As part of preparing your project, you should check the **Project Validation** section of your **Project Settings** (under **XR Plug-in Management**) and correct any reported issues.

Refer to [Settings and validation](xri-settings.html) for more information.

## Set up input

The toolkit components use input from controllers and XR tracking systems to trigger interactions and control some modes of locomotion. The [XR Default Input Action asset](samples-starter-assets.html#input-actions-asset) in the [Starter Assets](samples-starter-assets.html) defines a standard mapping of these actions to the physical, hardware input control. For example, the default mapping binds **select** to the **Grip** button on a controller and **continuous locomotion** to the thumbsticks. You can use the **XR Default Input Action asset** as-is or adjust its bindings to better suit your project.

The interactor and locomotion prefabs in the [Starter Assets](samples-starter-assets.html) are already configured to use the **XR Default Input Action asset**. If you don't use the starter assets, you must assign an input source to each interactor and locomotion provider component's input properties. The toolkit provides a number of ways to specify the source of input, including by referencing an input action asset, by binding an input action directly on a component, by implementing a custom object, and by setting an input value directly. Refer to [Configure input](configure-input-system.html) for more information.

To use input from the user's hands, you must install the [XR Hands](https://docs.unity3d.com/Packages/com.unity.xr.hands@1.4/manual/index.html) package. Not all XR platforms support hand tracking.

## Set up scene objects

At a minimum, a scene needs the following:

- [XR Interaction Manager](xr-interaction-manager.html)

- [XR Origin](samples-starter-assets.html#prefabs)

- At least one [interactor](interactor-components.html) object (but often you might use a few specialized interactors per hand)

##### Tip

The [Starter Assets](samples-starter-assets.html) contains an XR Origin prefab that includes the standard XR Origin, a full set of interactors, plus all the components for various locomotion styles. You can drag this prefab to a scene to complete the minimum set up needed before designing the scene's interactions and means of locomotion.

For [3D interactions](object-interaction.html), the scene needs interactable objects. For example, you can add an [XR Grab Interactable](xr-grab-interactable.html) component to a GameObject to let the user pick it up (with a suitable interactor).

For [UI interactions](ui-interaction.html), the scene needs world-space canvases with an [XR UI Input Module](xr-ui-input-module.html). You can further customize UI interaction with optional components and specialized interactors. For example, the [XR Poke Interactor](xr-poke-interactor.html) lets the user push a button with their finger or XR controller.

For [locomotion](locomotion-landing.html), the scene needs a [Locomotion Mediator](locomotion-mediator.html), an [XR Body Transformer](xr-body-transformer.html), and [Locomotion Providers](locomotion-providers.html). For teleportation and climbing, you must also add [Locomotion interactables](locomotion-interactables.html) that define where the user can teleport or climb.

## Additional resources

- [Create a basic scene](create-basic-scene.html)

- [Create a scene with locomotion](create-scene-with-locomotion.html)

- [Create a basic interaction](create-basic-interaction.html)
