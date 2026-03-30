[Image: image]

# How to use the factory pattern for object creation at runtime

Tutorial

intermediate

+10XP

30 mins

7

(16)

Unity Technologies

[Image: How to use the factory pattern for object creation at runtime]Summary

Implementing common game programming design patterns in your Unity project can help you efficiently build and maintain a clean, organized, and readable codebase. Design patterns reduce refactoring and testing time, speeding up development processes and contributing to a solid foundation that can be used to grow your game, team, and business.

Think of design patterns not as finished solutions you can copy and paste into your code, but as extra tools that can help you build larger, scalable applications.

This tutorial explains the factory design pattern.

Languages available:

EnglishEnglishEnglish

## 1. Level up your code: Factory pattern

Q&A (0)

Before you begin this tutorial, check out the video below for a brief overview of how you can use the factory pattern in a Unity project to build an interface to create objects in a superclass, while allowing subclasses to alter the type of objects.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 2. Overview

Q&A (0)

Implementing common game programming design patterns in your Unity project can help you efficiently build and maintain a clean, organized, and readable codebase. Design patterns reduce refactoring and testing time, speeding up development processes and contributing to a solid foundation that can be used to grow your game, team, and business.

Think of design patterns not as finished solutions you can copy and paste into your code, but as extra tools that can help you build larger, scalable applications.

This tutorial explains the factory design pattern.

The content here is based on the free e-book, [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false).

Check out more articles in the Unity game programming design patterns series on the [Unity best practices](https://unity.com/how-to) hub or via these links:

- [Object pooling](https://learn.unity.com/tutorial/65df850fedbc2a082fb11029?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The state pattern](https://learn.unity.com/tutorial/65df7f9bedbc2a083a63757b?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The observer pattern](https://learn.unity.com/tutorial/65de086fedbc2a06ac2aca58?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The MVC and MVP patterns](https://learn.unity.com/tutorial/65e0cfacedbc2a2351773054?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The command pattern](https://learn.unity.com/tutorial/65e0e048edbc2a23a5ee7442?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)

Mark step as complete

## 3. Understanding the factory pattern

Q&A (0)

Sometimes it’s helpful to have a special object that creates other objects. Many games spawn a variety of things over the course of gameplay, and you often don’t know what you need at runtime until you actually need it.

The factory pattern designates a special object called – you guessed it – a factory for this purpose. On one level, it encapsulates many of the details involved in spawning its products. The immediate benefit is to declutter your code.

[Image: image]

However, if each product follows a common interface or base class, you can take this a step further and make it contain more of its own construction logic, hiding it away from the factory itself. Creating new objects thus becomes more extensible.

You can also subclass the factory to make multiple factories dedicated to specific products. Doing this helps generate enemies, obstacles, or anything else at runtime.

Mark step as complete

## 4. Test the factory pattern in a sample project

Q&A (0)

A [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616) is available on the Unity Asset Store that demonstrates different programming design patterns in the context of game development, including the factory pattern.

The factory pattern sample consists of code for a player to move around a maze. In the maze, you can spawn two different GameObjects called **products**by clicking. They both use the same interface and share a similar shape, but one spawns particles and the other plays a sound.

[Image: image]

The factory pattern scene is in the folder named **6  Factory**.

Mark step as complete

## 5. Creating a simple factory

Q&A (0)

Imagine you want to create a factory pattern to instantiate items for a game level. You can use prefabs to create GameObjects, but you might also want to run some custom behavior when creating each instance.

Rather than using **if**statements or a **switch**to maintain this logic, create an interface called "IProduct" and an abstract class called "Factory" as outlined in the code example below:

```csharp
public interface IProduct
{
    public string ProductName { get; set; }

    public void Initialize();
}

public abstract class Factory : MonoBehaviour
{
    public abstract IProduct GetProduct(Vector3 position);

    // shared method with all factories
    …
}
```

Products need to follow a specific template for their methods, but they don’t otherwise share any functionality. Hence, you define the **IProduct**interface.

Factories might need some shared common functionality, so this sample uses abstract classes. Just be mindful of Liskov substitution from the SOLID principles when using subclasses. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, any program that uses a superclass reference should be able to use any of its subclasses without knowing it.

Mark step as complete

## 6. Class structure in the factory pattern

Q&A (0)

The **IProduct**interface defines what is common between your products. In this case, you simply have a **ProductName**property and any logic the product runs on **Initialize**.

You can then define as many products as you need (**ProductA**, **ProductB**, etc.) so long as they follow the **IProduct**interface.

The base class, **Factory**, has a **GetProduct**method that returns an **IProduct**. It’s abstract, so you can’t make instances of **Factory**directly. You derive a couple of concrete subclasses (**ConcreteFactoryA** and **ConcreteFactoryB**), which will actually get the different products.

**GetProduct**in this example takes a Vector3 position so that you can instantiate a prefab GameObject more easily at a specific location. A field in each concrete factory also stores the corresponding template prefab.

The result is a structure which looks something like the image below:

[Image: image]Mark step as complete

## 7. Code example

Q&A (0)

In the code snippet below, you can see a sample **ProductA**and **ConcreteFactoryA**:

```csharp
public class ProductA : MonoBehaviour, IProduct
{
    [SerializeField] private string productName = "ProductA";
    public string ProductName { get => productName; set => productName = value ; }

    private ParticleSystem particleSystem;

    public void Initialize()
    {
        // any unique logic to this product
        gameObject.name = productName;
        particleSystem = GetComponentInChildren<ParticleSystem>();
        particleSystem?.Stop();
        particleSystem?.Play();
    }
}

public class ConcreteFactoryA : Factory
{

    [SerializeField] private ProductA productPrefab;

    public override IProduct GetProduct(Vector3 position)
    {
        // create a Prefab instance and get the product component
        GameObject instance = Instantiate(productPrefab.gameObject, position, Quaternion.identity);
        ProductA newProduct = instance.GetComponent<ProductA>();

        // each product contains its own logic
        newProduct.Initialize();

        return newProduct;
    }
}
```

Here, you’ve made the product classes MonoBehaviours that implement **IProduct**take advantage of prefabs in the factory.

Note how each product can have its own version of **Initialize**. The example **ProductA**prefab contains a ParticleSystem, which plays when the **ConcreteFactoryA**instantiates a copy. The factory itself does not contain any specific logic for triggering the particles; it only invokes the **Initialize**method, which is common to all products.

Explore the sample project to see how the **ClickToCreate**component switches between factories to create **ProductA**and **ProductB**, which have different behaviors. **ProductB**plays a sound when it spawns, while **ProductA**sets off a particle effect to illustrate the core concept of the product variations.

Mark step as complete

## 8. Pros and cons

Q&A (0)

You’ll benefit the most from the factory pattern when setting up many products. Defining new product types in your application doesn’t change your existing ones or require you to modify previous code.

Separating each product’s internal logic into its own class keeps the factory code relatively short. Each factory only knows to invoke **Initialize**on each product without being privy to the underlying details.

The downside is that you create a number of classes and subclasses to implement the pattern. Like the other patterns, this introduces a bit of overhead, which may be unnecessary if you don’t have a large variety of products. On the other hand, the initial time spent setting up the classes may be a good thing in the long run in terms of decoupling your code and making it easier to maintain.

Mark step as complete

## 9. Adapting the factory pattern

Q&A (0)

The implementation of the factory can vary widely from what’s shown here. Consider the following adjustments when building your own factory pattern:

- **Use a dictionary to search for products:** You might want to store your products as key-value pairs in a dictionary. Use a unique string identifier (for example, the name or some ID) as the key and the type as a value. This can make retrieving products and/or their corresponding factories more convenient.
- **Make the factory (or a factory manager) static:** This makes it easier to use but requires additional setup. Static classes won’t appear in the **Inspector**window, so you will need to make your collection of products static as well.
- **Apply it to non-GameObjects and non-MonoBehaviours:** Don’t limit yourself to prefabs or other Unity-specific components. The factory pattern can work with any C# object.
- **Combine with the object pool pattern:** Factories don’t necessarily need to instantiate or create new objects. They can also retrieve existing ones in the **Hierarchy**window. If you are instantiating many objects at once (for example, projectiles from a weapon), use the [object pool pattern](https://unity.com/how-to/use-object-pooling-boost-performance-c-scripts-unity) for more optimized memory management.

Factories can spawn any gameplay element on an as-needed basis. However, creating products is often not their only purpose. You might be using the factory pattern as part of another larger task (for example, setting up UI elements in a dialog box of parts of a game level).

Mark step as complete

## 10. More resources

Q&A (0)[Image: image]

Find more tips on how to use design patterns in your Unity applications, as well as the SOLID principles, in the free e-book [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false).

You can find all advanced Unity technical e-books and articles on the [best practices](https://unity.com/how-to) hub. The e-books are also available on the [advanced best practices](https://docs.unity3d.com/Manual/best-practice-guides.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950221288) page in documentation.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
