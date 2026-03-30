[Image: image]

# Start MonoBehaviour Methods

Tutorial

Beginner

+10XP

5 mins

299

(272)

Unity Technologies

[Image: Start MonoBehaviour Methods]Summary

How to use Awake and Start, two of Unity's initialization functions.

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. Overview

Q&A (0)

A lot of the scripting in Unity is done using MonoBehaviours. These are pieces of code that can be attached to GameObjects and usually run code related to the GameObject to which they are attached. An important part of coding with these scripts are the methods that are called automatically as the GameObject is initialized. These methods are Awake, OnEnable and Start. In this tutorial we will be looking at each of these methods and their differences.

ステップを完了としてマーク

## 2. Before you begin

Q&A (0)

#### New to Unity?

If you’re new to Unity, welcome! The [**Unity Essentials learning pathway**](https://learn.unity.com/pathway/unity-essentials) has been designed to help you get set up and ready to create in the Unity Editor. We recommend you complete this pathway before continuing with [Beginner Scripting](https://learn.unity.com/project/beginner-gameplay-scripting).

#### Review the Unity Editor basics

If you need to refresh your memory of the Unity Editor basics, you can take a moment to review [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) at any time.

ステップを完了としてマーク

## 3. Awake

Q&A (0)

The first method to be called on a MonoBehaviour is Awake. It is called as soon as the MonoBehaviour is loaded into the scene. This means that if the GameObject with the script already exists in the scene when it starts then Awake will be called immediately. Otherwise, if the GameObject with the script is instantiated or the script is added after the start of the scene, Awake will be called then.

#### Uses for Awake

Awake is only ever called once and so it is often best used for setting up any references between scripts that will exist for as long as the scene does.

ステップを完了としてマーク

## 4. OnEnable

Q&A (0)

The second method to be called on a MonoBehaviour is OnEnable. It is called whenever the MonoBehaviour is enabled. This means that if the GameObject with the script already exists in the scene when it starts then OnEnable will be called just after Awake. Similarly to Awake, it will be called on MonoBehaviours for instantiated GameObjects or when a MonoBehaviour is added to a GameObject. Unlike Awake, OnEnable can be called multiple times over the life of the MonoBehaviour. It is called every time the script is enabled.

#### Uses for OnEnable

Since OnEnable is called whenever a script is starting to be used it is often best used for setting up things that exist or should happen while the MonoBehaviour is enabled. This might be something like a shield script that controls the visual aspects of a player’s shield. Whenever the script is disabled then the visuals for the shield are off but whenever the script is re-enabled, the visuals are shown. It is commonly paired with the OnDisable method for techniques like this. OnDisable is called whenever the MonoBehaviour’s enabled flag is set to false.

ステップを完了としてマーク

## 5. Start

Q&A (0)

The third method to be called on a MonoBehaviour is Start. It is called right before Update is called for the first time. Since Update is only called when the MonoBehaviour is enabled, Start will be called after OnEnable the first time that the script is enabled. Like Awake, Start will only ever be called once, however unlike Awake and like OnEnable, Start will only be called on an enabled MonoBehaviour.

#### Uses for Start

Since Start is only called once, it should be used to initialize things that need to persist throughout the life of the script but should only need to be setup immediately before use. A common example is setting the initial value for a variable such as setting a current health variable to be the value of a starting health variable.

ステップを完了としてマーク

## 6. An important note about usage

Q&A (0)

All games and applications are different. Even very similar ones can be implemented in wildly different ways. The examples given here are from common practices but might not fit what you are creating. When deciding which method should call your initialization code, think about when the method is called and what you need it to do.

ステップを完了としてマーク

## 7. Summary

Q&A (0)

In this tutorial you learned about the beginning of the life-cycle of MonoBehaviour scripts and how to use the methods called then for initialization.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
