[Image: image]

# Coroutines

Tutorial

intermediate

+10XP

5 mins

329

(350)

Unity Technologies

[Image: Coroutines]Summary

Coroutines are a way of performing an operation over time instead of instantly. They can be useful, but there are some important things you need to be aware of when you use them to avoid inefficiency in your game or application.

By the end of this tutorial, you’ll be able to:

- Explain what a coroutine is and how they work.
- Determine when it is appropriate to use coroutines.
- Implement coroutines with the correct syntax.

Languages available:

EnglishEnglishEspañol日本語简体中文English

## 1. Overview

Q&A (0)

Coroutines are a way of performing an operation over time instead of instantly. They can be useful, but there are some important things you need to be aware of when you use them to avoid inefficiency in your game or application.

By the end of the tutorial, you’ll be able to:

- Explain what a coroutine is and how they work.
- Determine when it is appropriate to use coroutines.
- Implement coroutines with the correct syntax.

Mark step as complete

## 2. Before you begin

Q&A (0)

This tutorial is part of [Intermediate Scripting](https://learn.unity.com/project/intermediate-gameplay-scripting), a collection of basic introductions to a wide range of different programming concepts. If you want a guided introductory learning experience, try the [Create with Code](https://learn.unity.com/course/create-with-code) course or the full [Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer).

Mark step as complete

## 3. How do coroutines work?

Q&A (0)

Coroutines work by encapsulating methods which have a return type of IEnumerator. **IEnumerator** is an interface type from the System.Collections namespace which is used to support iteration. When IEnumerator is used for Coroutines, it will cause execution of your code to pause and resume at various points that you determine, iterating through them.

When you encapsulate a method with a coroutine, this creates an object in which the method and all necessary data are stored.

Mark step as complete

## 4. Why do people use coroutines?

Q&A (0)

Coroutines provide an excellent way of easily managing things that need to happen after a delay or over the course of time. They prevent Update methods from becoming bloated with timers and the other workings required to achieve the same outcome with a different approach.

#### Disadvantages of using Coroutines

The major disadvantage of using Coroutines is the way that they use memory. Full details of how memory in C# and Unity works is beyond the scope of this tutorial, but in summary:

- Memory is split into two locations for C#: the stack and the heap.
- Storing and accessing memory on the heap is more complicated than memory on the stack, and can have a significant impact on the efficiency of your game or application.
- Coroutines create temporary objects which are stored on the heap.
- As a very general rule, you should avoid this increased use of the heap unless you have a clear rationale for doing so.

Mark step as complete

## 5. Coroutine Syntax

Q&A (0)

You need to use a specific format for a method to be used as a coroutine. Here’s an example:

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
public class CoroutineTesting : MonoBehaviour
{
   public CanvasGroup fadeCanvasGroup;
   public float fadeSpeed = 1f;
   public int sceneToLoadIndex;
   public void FadeAndLoadScene()
   {
       StartCoroutine(FadeAndLoadSceneRoutine());
   }
   IEnumerator FadeAndLoadSceneRoutine()
   {
       float alpha = 0f;
       while (alpha < 1f)
       {
           alpha += fadeSpeed * Time.deltaTime;
           fadeCanvasGroup.alpha = alpha;
           yield return null;
       }
       yield return new WaitForSeconds(0.5f);
       SceneManager.LoadScene(sceneToLoadIndex);
   }
}
```

Let’s go through the example in detail.

#### The FadeAndLoadScene method

In this example, there is a public method called FadeAndLoadScene. When it is called it starts a coroutine using the StartCoroutine method — specifically, the FadeAndLoadSceneRoutine.

#### The FadeAndLoadSceneRoutine method

This method will instantly create a variable called alpha and enter into a while loop. FadeAndLoadSceneRoutine will then increment the alpha variable and set the alpha of a CanvasGroup.

#### The coroutine pause

The keyword **yield** is used whenever execution of the coroutine should be paused. Whatever comes after the **return** keyword specifies how long the coroutine should be paused for. In this example it returns null, which tells Unity to only pause FadeAndLoadSceneRoutine for one frame.

The next frame execution will continue from this point and continue through the loop. This means that the alpha of the CanvasGroup will be increased slightly each frame until it reaches 1.

#### The coroutine end

The example ends with another yield statement. This time the returned value is a new WaitForSeconds object initialized to half a second.

WaitForSeconds will make execution pause for half a second. Execution will then continue; the coroutine will load a scene and then end.

Mark step as complete

## 6. When should you use coroutines?

Q&A (0)

Coroutines can be powerful tools, but they can also cause big performance problems if you use them carelessly. It’s best to use coroutines in projects where performance is not the highest priority, such as turn-based games or anything where a lack of optimization will not drastically affect the gameplay or application experience. You can also use coroutines in situations like fading out to load another scene, as in the above example for this tutorial, or other situations which occur infrequently.

If you’re working on a project that relies on optimized performance, you should avoid using coroutines. You can generally use the Update method for operations which occur with a regular cadence.

**Important:** Even infrequent allocations of memory can build up, so consider the potential impact of every coroutine that you choose to use.

Mark step as complete

## 7. Summary

Q&A (0)

In this tutorial, you explored how coroutines work. You identified situations where coroutines can be useful, but also explored their potential impact on the performance of your project.

As you continue your journey as a creator, you’ll build your confidence in determining when and how to use tools like coroutines which can be very useful but also have disadvantages that you need to consider carefully.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
