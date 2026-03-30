[Image: image]

# Create modular and maintainable code with the observer pattern

Tutorial

intermediate

+0XP

15 mins

36

(82)

Unity Technologies

[Image: Create modular and maintainable code with the observer pattern]Summary

By implementing common game programming design patterns in your Unity project, you can efficiently build and maintain a clean, organized, and readable codebase. Design patterns not only reduce refactoring and the time spent testing, but they also speed up onboarding and development processes, contributing to a solid foundation that can be used to grow your game, development team, and business.

Think of design patterns not as finished solutions you can copy and paste into your code, but as extra tools that can help you build larger, scalable applications when used correctly.

This tutorial explains the observer pattern and how it can help support the principle of loose coupling between objects that interact with each other.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

By implementing common game programming design patterns in your Unity project, you can efficiently build and maintain a clean, organized, and readable codebase. Design patterns not only reduce refactoring and the time spent testing, but they also speed up onboarding and development processes, contributing to a solid foundation that can be used to grow your game, development team, and business.

Think of design patterns not as finished solutions you can copy and paste into your code, but as extra tools that can help you build larger, scalable applications when used correctly.

This tutorial explains the observer pattern and how it can help support the principle of loose coupling between objects that interact with each other.

The content here is based on the free e-book, [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false), which explains well known design patterns and shares practical examples for using them in your Unity project.

Other articles in the Unity game programming design patterns series are available on the [Unity best practices](https://unity.com/how-to) hub, or you can check out the following links:

- [Object pooling](https://learn.unity.com/tutorial/65df850fedbc2a082fb11029?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The state pattern](https://learn.unity.com/tutorial/65df7f9bedbc2a083a63757b?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The factory pattern](https://learn.unity.com/tutorial/65e0df08edbc2a2447bf0b98?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The MVC and MVP patterns](https://learn.unity.com/tutorial/65e0cfacedbc2a2351773054?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The command pattern](https://learn.unity.com/tutorial/65e0e048edbc2a23a5ee7442?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)

Mark step as complete

## 2. Observer pattern

Q&A (0)

At runtime, any number of things can occur in your game. What happens when the player destroys an enemy? Or when they collect a power-up or reach a new level? In each of these scenarios, you often need a mechanism that allows some objects to notify others without directly referencing them. Unfortunately, as your codebase increases, this adds unnecessary dependencies that can lead to inflexibility and excess overhead in code maintenance.

The observer pattern is a common solution to this problem. It allows your objects to communicate but stay loosely coupled using a one-to-many dependency. This means that when one object changes states, all dependent objects get notified automatically.

An analogy to help visualize this is a radio tower that broadcasts to many different listeners. It doesn’t need to know who is tuning in, just that the broadcast is going live on the right frequency at the right time.

[Image: image]

The object that is broadcasting is called the **subject**. The other objects that are listening are called the **observers**, or sometimes **subscribers**(this page uses the name observer throughout).

The benefit of the pattern is that it decouples the subject from the observer, which doesn’t really know the observers or care what they do once they receive the signal. While the observers have a dependency on the subject, the observers themselves don’t know about one another.

Observers are simply notified whenever the subject’s state changes, allowing them to update themselves accordingly. This way, it becomes easier to modify or extend the code without affecting other parts of the system.

Another benefit is that the observer pattern encourages the development of reusable code, as observers can be reused in different contexts without needing to be modified. Finally, it often improves code readability, since the dependencies between objects are clearly defined.

Mark step as complete

## 3. Understanding events

Q&A (0)

You can design your own subject-observer classes, but that’s usually unnecessary since C# already implements the pattern using events. The observer pattern is so widespread that it’s built into the C# language, and for good reason: It can help you create more modular, reusable, and maintainable code.

What is an event? It’s a notification that indicates something has happened, and involves a few steps:

- The publisher (also known as the subject) creates an event based on a [delegate](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) establishing a specific function signature. The event is just some action that the subject will perform at runtime (e.g., take damage, click a button, and so on). The publisher maintains a list of its dependents (the observers) and sends notifications to them when its state changes, which is represented by this event.
- The observers then each make a method called an event handler*,* which must match the delegate’s signature. The observers are objects that receive notifications from the publisher and update themselves accordingly.
- Each observer’s event handler subscribes to the publisher’s event. You can have as many observers join the subscription as necessary. All of them will wait for the event to trigger.
- When the publisher signals the occurrence of an event at runtime, it’s referred to as raising the event. This, in turn, invokes the observers’ event handlers, which run their own internal logic in response.

[Image: image]

In this way, you make many components react to a single event from the subject. If the subject indicates that a button is clicked, the observers could play back an animation or sound, trigger a cutscene, or save a file. Their response could be anything, which is why you’ll frequently find the observer pattern used to send messages between objects.

#### Delegates versus events

A delegate is a type that defines a method signature. This allows you to pass methods as arguments to other methods. Think of it like a variable that holds a reference to a method, instead of a value.

An event, on the other hand, is essentially a special type of delegate that allows classes to communicate with each other in a loosely coupled way. For general information about the differences between delegates and events, see [Distinguishing Delegates and Events in C#](https://learn.microsoft.com/en-us/dotnet/csharp/distinguish-delegates-events).

Mark step as complete

## 4. A simple subject in code

Q&A (0)

Let’s take a look at how you might define a basic subject/publisher in the code below.

```csharp
using UnityEngine;
using System;

public class Subject: MonoBehaviour
{
    public event Action ThingHappened;

    public void DoThing()
    {
        ThingHappened?.Invoke();
    }
}
```

In the Subject class in the code example above, you inherit from MonoBehaviour in order to be able to attach it to a GameObject more easily, although that’s not a requirement.

While you are free to define your own custom delegate, you can also use the [System.Action](https://docs.microsoft.com/en-us/dotnet/api/system.action?view=net-6.0), which works in most use cases. In the code example, there’s no need to send parameters with the event, but if that was needed, it’s as easy as using the [Action<T>](https://docs.microsoft.com/en-us/dotnet/api/system.action-1?view=net-6.0) delegate and passing them as a [List<T>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0) within the angle brackets (up to 16 parameters).

In the code snippet, ThingHappened is the actual event, which the subject invokes in the DoThing method.

The “?.” operator is a null-conditional operator, which means that the event will only be invoked if it is not null. The Invoke method is used to raise an event, which means that it will execute any event handlers that are subscribed to the event. In this case, the DoThing method will raise the ThingHappened event if it is not null, which will execute any event handlers that are subscribed to the event.

You can download a [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616)that demonstrates the observer and other design patterns in action.

Mark step as complete

## 5. A simple observer in code

Q&A (0)

To listen to the event, you can build an example **Observer**class, like the pared-down code example below (also available in the [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616)).

Attach this script to a GameObject as a component and reference the **subjectToObserver**in the **Inspector**window to listen for the **ThingHappened**event.

The **OnThingHappened**method can contain any logic the observer executes in response to the event. Often developers add the prefix “On” to denote the event handler (use the naming convention from your style guide).

In the Awake or Start, you can subscribe to the event with the **+=** operator. That [combines](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/how-to-combine-delegates-multicast-delegates) the observer’s **OnThingHappened**method with the subject’s **ThingHappened**.

If anything runs the subject’s **DoThing**method, that raises the event. Then, the observer’s **OnThingHappened**event handler invokes automatically and prints the debug statement.

**Note**: If you delete or remove the observer at runtime while it’s still subscribed to the **ThingHappened**, calling that event could result in an error. Thus, it’s important to unsubscribe from the event in the MonoBehaviour’s **OnDestroy**method with an **-=** operator at appropriate times in the object’s lifecycle.

```csharp
public class Observer : MonoBehaviour
{
    [SerializeField] private Subject subjectToObserve;

    private void OnThingHappened()
    {
        // any logic that responds to event goes here
        Debug.Log("Observer responds");
    }

    private void Awake()
    {
        if (subjectToObserve != null)
        {
            subjectToObserve.ThingHappened += OnThingHappened;
        }
    }

    private void OnDestroy()
    {
        if (subjectToObserve != null)
        {
            subjectToObserve.ThingHappened -= OnThingHappened;
        }
    }
}
```

Mark step as complete

## 6. Use cases for the observer pattern

Q&A (0)

If you download the [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616)and go to the folder named **11 Observer**, you’ll find an example which shows a simple button (ExampleSubject) and speaker (AudioObserver), animation (AnimObserver), and particle effect (ParticleSystemObserver).

When you click the button the ExampleSubject invokes a ThingHappened event. The AudioObserver, AnimObserver, and ParticleSystemObserver invoke their event handling methods in response.

[Image: image]

The observers can exist on the same or different GameObjects. Note that the AnimObserver produces the button animation on the ExampleSubject, while the AudioObservers and ParticleSystemObserver occupy different GameObjects.

The **ButtonSubject**allows the user to invoke a **Clicked**event with the mouse button. Several other GameObjects with the **AudioObserver**and **ParticleSystemObserver**components can then respond in their own ways to the event.

Determining which object is a subject and which is an observer only varies by usage. Anything that raises the event acts as the subject, and anything that responds to the event is the observer. Different components on the same GameObject can be subjects or observers. Even the same component can be a subject in one context and an observer in another.

For instance, the **AnimObserver**in the example adds a little bit of movement to the button when clicked. It acts as an observer even though it’s part of the ButtonSubject GameObject.

Mark step as complete

## 7. Use cases for the observer pattern

Q&A (0)

You can apply the observer pattern to nearly everything that happens during the course of gameplay. For example, your game could raise an event every time the player destroys an enemy, collects an item, or clicks a button. If you need a statistics system that tracks scores or achievements, the observer pattern could allow you to create one without affecting the original gameplay code.

Many Unity applications apply events to:

- Objectives or goals
- Win/lose conditions
- PlayerDeath, EnemyDeath, or Damage
- Item pickups
- User interface
- Triggering audio or VFX effects

The subject simply needs to raise an event at the right time, and then any number of observers can subscribe.

Mark step as complete

## 8. UnityEvents vs UnityActions

Q&A (0)

Unity also includes a separate system of [**UnityEvents**](https://docs.unity3d.com/ScriptReference/Events.UnityEvent.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302), which uses the [**UnityAction**](https://docs.unity3d.com/ScriptReference/Events.UnityAction.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302) delegate from the **UnityEngine.Events** API. It can be configured in the Inspector (providing a graphical interface for the observer pattern), allowing developers to specify which methods should be invoked when the event is raised.

If you’ve used Unity’s UI system (for example, creating a [UI Button](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-Button.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302)’s OnClick event), you already have some experience with this.

[Image: image]

In the image above, the button’s **OnClick**event invokes and triggers a response from the two AudioObservers’ **OnThingHappened** methods. You can thus set up a subject’s event without code.

UnityEvents are useful if you want to allow designers or nonprogrammers to create gameplay events. However, be aware that they may be slower than their equivalent events or actions from the System namespace. UnityActions also have the extra benefit of being used to invoke methods that take arguments, whereas UnityEvents are limited to methods that do not have arguments.

Weigh performance versus usage when considering UnityEvents and UnityActions. UnityEvents are simpler and easier to use, but are more limited in terms of the types of methods that can be invoked. Some might also argue that they can be more error-prone by exposing all events in the Inspector.

Mark step as complete

## 9. Pros and cons

Q&A (0)

Implementing an event adds some extra work, but it does offer advantages:

- **The observer pattern helps decouple your objects:** The event publisher does not need to know anything about the event subscribers themselves. Instead of creating a direct dependency between one class and another, the subject and observer communicate while maintaining a degree of separation (loose-coupling).
- **You don’t have to build it**: C# includes an established event system, and you can use [System.Action](https://docs.microsoft.com/en-us/dotnet/api/system.action?view=net-6.0) delegate instead of defining your own delegates. Alternatively, Unity also includes [UnityEvents](https://docs.unity3d.com/ScriptReference/Events.UnityEvent.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302) and [UnityActions](https://docs.unity3d.com/ScriptReference/Events.UnityAction.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302).
- **Each observer implements its own event handling logic:** In this way, each observing object maintains the logic it needs to respond. This makes it easier to debug and unit test.
- **It’s well-suited for user interface:** Your core gameplay code can live separately from your UI logic. Your UI elements then listen for specific game events or conditions and respond appropriately. The MVP and MVC patterns use the observer pattern for this purpose.

But, you should also be aware of these caveats:

- **It adds additional complexity:** Like other patterns, creating event-driven architecture does require more setup at the outset. Also, be careful deleting subjects or observers. Make sure you unregister observers in OnDestroy so the memory reference is properly released when the observer is no longer needed.
- **The observers need a reference to the class that defines the event:** Observers still have a dependency to the class that is publishing the event. Using a static EventManager (see next section) that handles all events can help disentangle objects from each other
- **Performance can be an issue:** Event-driven architecture adds extra overhead. Large scenes and many GameObjects can hinder performance.

Mark step as complete

## 10. Improvements to the pattern

Q&A (0)

While only a basic version of the observer pattern is introduced here, you can expand this to handle all of your game application’s needs.

Consider these suggestions when setting up the observer pattern:

- **Use the ObservableCollection class:** C# provides a dynamic [ObservableCollection](https://docs.microsoft.com/en-us/dotnet/api/system.collections.objectmodel.observablecollection-1?view=net-5.0) to track specific changes. It can notify your observers when items get added, removed, or when the list is refreshed.
- **Pass a unique instance ID as an argument:** Each GameObject in the hierarchy has a unique [instance ID](https://docs.unity3d.com/ScriptReference/Object.GetInstanceID.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302). If you trigger an event that could apply to more than one observer, pass the unique ID into the event (use type [Action<int>](https://docs.microsoft.com/en-us/dotnet/api/system.action-1?view=net-6.0)). Then only run the logic in the event handler if the GameObject matches the unique ID.
- **Create a static EventManager:** Because events can drive much of your gameplay, many Unity applications use a static or singleton EventManager. This way, your observers can reference a central source of game events as the subject to make setup easier.

The [FPS Microgame](https://learn.unity.com/project/fps-template) has a good implementation of a static EventManager that implements custom GameEvents and includes static helper methods to add or remove listeners.

The [Unity Open Project](https://unity.com/open-projects) also showcases a game architecture where [ScriptableObjects relay UnityEvents](https://www.youtube.com/watch?v=WLDgtRNK2VE). It uses events to play audio or load new scenes.

- **Create an event queue:** If you have a lot of objects in your scene, you might not want to raise your events all at once. Imagine the cacophony of a thousand objects playing back sounds when you invoke a single event.
Combining the observer pattern with the command pattern allows you to encapsulate your events into an event queue. Then you can use a command buffer to play back the events one at a time or selectively ignore them as necessary (e.g., if you have a maximum number of objects that can make sounds at once).

The observer pattern heavily figures into the Model View Presenter (MVP) architectural pattern, which is covered in the e-book [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false).

Mark step as complete

## 11. More advanced resources for programming in Unity

Q&A (0)[Image: image]

You’ll find many more tips on how to use design patterns in your Unity applications, as well as the SOLID principles, in the free e-book[Level up your code with game programming patterns.](https://unity.com/resources/design-patterns-solid-ebook?isGated=false)

All advanced Unity technical e-books and articles are available on the [best practices hub](https://unity.com/how-to). The e-books are also available on the [advanced best practices page in the documentation.](https://docs.unity3d.com/2023.3/Documentation/Manual/best-practice-guides.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950230302)

Mark step as complete

## Complete this Tutorial

Mark all steps complete
