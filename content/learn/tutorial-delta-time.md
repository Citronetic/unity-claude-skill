[Image: image]

# Time

Tutorial

Beginner

+10XP

5 mins

154

(114)

Unity Technologies

[Image: Time]Summary

What is Delta Time and how can it be used in your games to smooth and interpret values?

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. Overview

Q&A (0)

The concept of time and how it changes is important to almost every game. This tutorial will cover some of the basics of how to use the passage of time to affect things in your project. The Time class is going to be forefront in how this is done.

단계를 완료로 표시

## 2. Before you begin

Q&A (0)

#### New to Unity?

If you’re new to Unity, welcome! The [**Unity Essentials learning pathway**](https://learn.unity.com/pathway/unity-essentials) has been designed to help you get set up and ready to create in the Unity Editor. We recommend you complete this pathway before continuing with [Beginner Scripting](https://learn.unity.com/project/beginner-gameplay-scripting).

#### Review the Unity Editor basics

If you need to refresh your memory of the Unity Editor basics, you can take a moment to review [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) at any time.

단계를 완료로 표시

## 3. Change over time

Q&A (0)

In Unity and generally throughout all computer graphics, images are rapidly iterated through to give the impression of movement and change. Each of these images is known as a frame. They are shown at a speed called the frame rate which is measured in fps or frames per second. You may have heard the term used in phrases like “... runs at 60 fps…” meaning 60 images are displayed per second.

It is important to note that these frames do not necessarily take the same amount of time to render and will just be displayed when all the calculations for that frame are finished and it is ready. This means that if something is supposed to happen smoothly over time, such as something moving at a constant speed, this variation in frame times needs to be accounted for.

This can be done using the deltaTime variable of the Time class. Consider the rate of change of something to be its ‘speed’. This could be an actual speed in the case of movement or it could be any other change that happens over time. In the same way the amount that something changes by would be its ‘distance’ and this is generally what needs to be calculated - the change that needs to happen per frame.

To calculate distance when given speed, multiply the time it takes to travel that distance. In Unity the MonoBehaviour method Update is called once per frame. With methods that are called repeatedly such as Update, the variable Time.deltaTime is changed so that it is equal to the time between these calls. As such, when it is used in Update, Time.deltaTime is equal to the time between frames.

단계를 완료로 표시

## 4. Delta Time

Q&A (0)

Here is an example of Time.deltaTime being used to move a gameobject smoothly over several frames.

```csharp
using UnityEngine;
public class Mover : MonoBehaviour
{
   public float speed = 5f;
   void Update()
   {
       transform.position += Vector3.forward * (speed * Time.deltaTime);
   }
}
```

In this example the script’s transform has its position added to every Update call - that is, every frame - in the forward direction. The amount that is added is the speed variable multiplied by Time.deltaTime which equals a distance. This distance will change depending on the length of the frame. If the frame takes a long time then Time.deltaTime will be larger and so the calculated distance will be longer. Conversely, if the frame is very quick then Time.deltaTime will be smaller and so the calculated distance will be shorter.

단계를 완료로 표시

## 5. Time Scale

Q&A (0)

For the most part it is assumed that time continues at the same speed throughout a project but on occasions there can be a need for it to run at a different rate. The most common example of this is the concept of bullet-time where everything slows down in order to emphasize the speed things are happening. In order to facilitate this, the Time class has a variable called timeScale. The default time scale is 1, this means that 1 second of game time will take 1 second of real time. Reducing the time scale will slow down aspects of gameplay such as physics and animation. A timescale of 0.5 will mean that 0.5 seconds of game time will take 1 second of real time - things happen half as fast. Likewise a timescale of 2 will mean that 2 seconds of game time will take 1 second of real time - things happen twice as fast.

단계를 완료로 표시

## 6. Scaled time vs unscaled time

Q&A (0)

Having a global control that slows down or speeds up aspects of gameplay can be extremely useful. However, there are often instances where some parts need to run at a normal speed and others need to be scaled. A common example of this is a game menu when gameplay is paused. In this case, the menu would run using unscaled time. Unscaled time always runs in parallel with real time. In this scenario the game play elements would be running with scaled time and when the time scale is set to 0 those elements would pause. Meanwhile the menu would be running with unscaled time and so menu operations would continue as normal.

단계를 완료로 표시

## 7. Time Scale Example

Q&A (0)

The below example shows how to use the different time concepts that have been covered above.

```csharp
using UnityEngine;
public class BulletTime : MonoBehaviour
{
   public AnimationCurve bulletTimeScale;
   bool m_IsUsingBulletTime;
   float m_UnscaledElapsedTime;
   public void StartBulletTime()
   {
       m_UnscaledElapsedTime = 0f;
       m_IsUsingBulletTime = true;
   }
   void Update()
   {
       if (m_IsUsingBulletTime)
       {
           Time.timeScale = bulletTimeScale.Evaluate(m_UnscaledElapsedTime);
           m_UnscaledElapsedTime += Time.unscaledDeltaTime;
           if (m_UnscaledElapsedTime > bulletTimeScale[bulletTimeScale.length - 1].time)
           {
               m_IsUsingBulletTime = false;
           }
       }
       else
       {
           Time.timeScale = 1f;
       }
   }
}
```

The above example is a very basic bullet time system. When the StartBulletTime method is called externally, it resets the timer and sets the bool that controls what happens in the Update method. If bullet time is being used then the if statement will be entered. It will set the time scale to the evaluation of the animation curve. The timer will then be incremented by the unscaledDeltaTime. It is important to note that this must be the unscaledDeltaTime because the deltaTime will be affected by the timeScale. If the animation curve sets the time scale to zero then the deltaTime will be zero too. The timer is then compared to the time of the last keyframe on the animation curve and if it is exceeded then bullet time is stopped.

단계를 완료로 표시

## 8. Summary

Q&A (0)

This tutorial covered the basic aspects of time and using it. It is important to keep in mind whether systems and features you create need to work with time or unscaled time and if so how they will be manipulated.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
