[Image: image]

# 3.2 Introduction to animation blending

Tutorial

Beginner

+10XP

10 mins

0

Unity Technologies

[Image: 3.2 Introduction to animation blending]Summary

In this tutorial, you’ll:

- Explore what animation blending is and how it works.
- Identify when blending is used when animating with Unity.

Languages available:

한국어English日本語한국어한국어

## 1. Overview

Q&A (0)

In this tutorial, you’ll be looking at the basics of animation blending and how it is used in several different ways.

단계를 완료로 표시

## 2. Before you begin

Q&A (0)

This tutorial builds on the [**core concepts tutorials**](https://learn.unity.com/project/course-overview-and-core-concepts?uv=2019.4&courseId=5eba874aedbc2a00219550ff) — if you haven’t completed those, you might want to do that before starting.

You do not need to use the Unity project for Introduction to 3D Animation Systems to complete this tutorial.

단계를 완료로 표시

## 3. What is animation blending?

Q&A (0)

Sometimes when a GameObject is playing an animation, you’ll want to change which animation is playing or play another animation at the same time. When multiple animations are played at the same time and through the same GameObject hierarchy, the animations are doing what is called **blending**.

The most common blending is when two or more animations want to change the value of a single binding. The result is that the values for each animation are combined and the binding is changed to the combined value.

단계를 완료로 표시

## 4. How does blending work?

Q&A (0)

There are several different complex algorithms used to blend animations together, most of which you won’t be covering in this tutorial series.

However, what you do need to know is that all the algorithms follow the same overall process:

- Each animation is given a **weight**. This weight represents how much the animation affects the result of the blend.
- Higher weights mean the animation will have more of an effect and lower weights mean the animation will have less of an effect.
- Typically, weights are normalized. This means that the sum of the weights for all the animations being blended equals one.

The most simple algorithm for animation blending is a **Weighted Sum**. This works by going through each binding and multiplying its value at the current time by the Animation Clip’s weight. Unity then adds all the weighted values together and sets the binding to the result.

#### Review an example

Animation A sets a Light component’s **Intensity** to **5** at a particular time.

Animation B sets the same Light component’s **Intensity** to **10**at the same time.

Animation A has a weight of **0.2**.

Animation B has a weight of **0.8**.

The blending of these two animations causes the Light component’s **Intensity** to be:

5*0.2 + 10*0.8 = **9**

단계를 완료로 표시

## 5. Which features use blending?

Q&A (0)

The three most common features that use blending are:

- Transitions
- Blend Trees
- Layers

Let’s explore each of these in a little more detail.

#### Transitions

The most common occurrence of blending animations is in Transitions. When a Transition starts, the animation of the second state starts playing. As the Transition continues, the weight of it increases, while the weight of the previous state decreases.

#### Blend Trees

Blend Trees are used in place of a single Animation Clip in a state. They blend the multiple Animation Clips they contain.

#### Layers

Blending in Layers works slightly differently than with Transitions and Blend Trees. All the animation in a Layer is completely evaluated before it’s then blended with the next Layer. The result of this blend is then evaluated before it is blended with subsequent Layers, and so on.

단계를 완료로 표시

## 6. Blending in practice

Q&A (0)

These features can be used in isolation, but it’s not always that simple. What about Transitions between two Blend Trees, for example?

The answer is that animation blending can be **nested**. Weighting happens multiplicatively, so each Animation Clip has its weight calculated before the final result is calculated.

One of the most important things to remember when working with animation features is that while they’re all used to play and blend animations, each feature does it differently. The key to getting a good animation result is understanding what tools you should use to blend animations to achieve the result you want.

단계를 완료로 표시

## 7. Summary

Q&A (0)

In this tutorial, you’ve started to explore animation blending. You’ve learned:

- What animation blending is and how it works.
- Which features of an animation use animation blending.
- How blending for each of those features differs.
- That blending can be nested to combine multiple Blend Trees.

In the next tutorial, you’ll [**learn about Animator States**](https://learn.unity.com/tutorial/3-3-creating-and-configuring-animator-states?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f).

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
