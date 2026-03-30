[Image: image]

# Encapsulación en programación orientada a objetos

Tutorial

foundational

+10XP

20 mins

29

(1669)

Unity Technologies

[Image: Encapsulación en programación orientada a objetos]Summary

In this tutorial, you’ll learn about the second pillar in object-oriented programming: encapsulation.

- Explain how encapsulation is used to write code that can only be used as intended by the programmer
- Control access to data within a class by applying encapsulation with getters and setters
- Obj-Prog-WIC-3.3: Differentiate between public variables (properties), private variables (fields), and local variables.
- Enable easier readability and debugging by correctly organizing classes to include only singular purpose code

Languages available:

EspañolEnglishEspañol한국어Español

## 1. Overview

Q&A (0)

Much like abstraction, encapsulation focuses heavily on maintaining a level of separation between the underlying complexity of your code and other code that uses it. Due to their similarity, you will sometimes see some followers of OOP practices group abstraction and encapsulation into a single pillar, typically under the header of encapsulation. However, we’re making a distinction that we think is important: while abstraction is all about summarizing code to make it simpler for other programmers, encapsulation is all about protecting values and data, as if they are enclosed in a capsule, so that you control what others do and do not have access to.

Marcar paso como completado

## 2. What is encapsulation?

Q&A (0)[Image: image]

A major theme of encapsulation is safety in code — in other words, the process of ensuring that code is only used as it is intended to be used, and the values and data you are manipulating can’t be corrupted. In encapsulated code, other programmers can’t easily change the values of variables or the properties of objects. It’s impossible to account for all of the different ways that other scripts might access your code, so it's far better to encapsulate what you’ve created so it can only perform as intended.

Let’s take a look at a situation where you used encapsulation during Create with Code, all the way back in [Unit 1 - Player Control](https://learn.unity.com/project/unit-1-driving-simulation?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f). The following were variables used to control a vehicle driving down the road.

[Image: image]

```csharp
public float speed = 20.0f;
public float turnSpeed = 45.0f;
public float horizontalInput;
public float forwardInput;
```

When you first wrote this code, you set all of your variables to be public so you could see how they updated in the Inspector during Play mode. Since you were new to programming at the time, it helped you better understand how the changing values of your variables modified your gameplay. Making your variables public also allowed you to fine-tune the vehicle’s movement by testing your speed and turnSpeed values in real time.

Once you settled on your final numbers, you made your variables private as a means of “locking in” their values.

```csharp
// all variables now private instead of public
private float speed = 20.0f;
private float turnSpeed = 45.0f;
private float horizontalInput;
private float forwardInput;
```

You no longer wanted anyone to be able to easily — perhaps accidentally — change the inputs that you settled on. As simple as it was, this was your first experience with encapsulation.

Accessibility of variables and methods is a major consideration in encapsulation. As a general rule, you want to keep your variables private as often as possible, and set methods to public only when you’re sure that you need to call them from anywhere. Otherwise, they can be used by anyone.

When you’re working on a small project by yourself, encapsulation might not seem important — in fact, making everything public might even seem convenient. However, if you’re working with others, or if others will work on your code later, unexpected problems can easily arise if variables and methods are used when they really shouldn’t be.

Marcar paso como completado

## 3. Private variables and Inspector visibility

Q&A (0)

Making a variable public exposes it to the Inspector, but it also makes it available to be changed in any other method of your application. Good news — there is a way to make values available in the Inspector, otherwise known as **serialized**, without exposing them to other code. This gives you the freedom of modifying variables in the inspector, while still keeping them safe. In fact, the access modifier of a variable (public, private), actually doesn’t control serialization — but public variables are serialized by default. You can easily expose your private variables in the Inspector by adding the [SerializeField] tag.

```csharp
public class Rabbit : MonoBehaviour
{
    [SerializeField] // exposes private variables in the inspector
    private Color furColor;
}
```

[Image: image]Marcar paso como completado

## 4. Find a vulnerable public variable in your project

Q&A (0)

It would be easy to make all your variables private to protect values from misuse, but what about variables that really need to be public? How do you protect them? Let’s work through an example in our project.

In MainManager.cs, you added the following public variable:

```csharp
public static MainManager Instance;
```

You can’t make this variable private because it would cause errors in the other scripts that need access to it, but leaving it public means it’s vulnerable to potential misuse. Let’s cause some mischief to demonstrate the problem:

**1.**For experimental purposes, in MenuUIHandler.cs, add a line of code at the end of the Start() method that sets the MainManager instance to null.

```csharp
MainManager.Instance = null;
```

**2.**  Test your application by selecting the color selection buttons. You will now get a Null Reference Exception in the Console.

[Image: image]

We need some way of preventing this kind of misuse, while still granting public access to the variable.

Marcar paso como completado

## 5. Create a Property with a Getter and a Setter

Q&A (0)

Essentially, what we want to do is make the variable “read-only,” allowing other classes to **get** the value, but not **set** the value. In order to do this, we can use the C# get and set methods, which will control how and when our variable can be used.

**1.**In MainManager.cs, add a get accessor to the end of your MainManager Instance variable:

```csharp
public static MainManager Instance { get; } // add getter to the end of the line
```

As soon as you add a get or set accessor to a variable, that variable becomes a **Property**— a special kind of variable that provides access to internal data through these specialized methods.

**2.** Without a set accessor, this property is strictly read-only —its value cannot be set anywhere. Because of that, there is now an error on that mischievous line of code you added earlier in MenuUIHandler.cs. That’s good — we don’t want any other class to be able to reset it — so you can now delete that line of code.

```csharp
// MainManager.Instance = null; - delete or comment out this line of code
```

**3.**  However, there is still a problem: since the property is strictly read-only, it can’t even be set in its own class, which is causing an error lower down in MainManager.cs on the line Instance = this;. To fix this, add a private setter to the property, which should resolve that error:

```csharp
public static MainManager Instance { get; private set; } // add private setter
```

With this code, you can now **set** the property’s value from within the class, but only **get** it from outside the class. It’s encapsulated to only accept modifications from its own class, safe from misuse and corruption from the outside world!

Marcar paso como completado

## 6. Locate the need for setter validation

Q&A (0)

The getter and setter you added above represent the most basic form of encapsulation, where you are simply getting or setting the value — nothing fancy. This simple implementation is called an **auto-implemented property.**

```csharp
{ get; private set; }
```

But in addition to restricting if or where a value can be set, you might also want to restrict how a value can be set in a more customized, manual way. For example, in an application that allows another class to set the date, you might restrict the month to a number between 1 and 12. Or you might want to prevent the use of negative numbers.

In our warehouse project, there’s a place where we can do precisely that: we have a Production Speed variable that should never be set to a negative number.

**1.**In ResourcePile.cs, locate the exposed public ProductionSpeed variable.

```csharp
public float ProductionSpeed = 0.5f;
```

Also locate the line in ProductivityUnit.cs where that public variable is multiplied by a constant.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier;
```

There’s nothing stopping us, a future version of ourselves, or some other carefree developer from setting this to a negative number, which would cause problems for this project.

**2.**For experimental purposes, mischievously modify this line of code to subtract from the production speed instead of multiplying it.

```csharp
m_CurrentPile.ProductionSpeed -= ProductivityMultiplier; // replace '*=' with '-='
```

Then test your application and use the Productivity Unit to produce a negative result:

[Image: image]

What we need is a custom setter, which can make sure this variable is never set to a negative value.

Marcar paso como completado

## 7. Make a property with a backing field

Q&A (0)

To perform validations or calculations within a getter or setter, you need a **backing field** for your property: a private field (variable) that stores the data exposed by the public property.

Let’s see this in context.

**1.** In ResourcePile.cs, add a private member variable (backing field), using the same name as ProductionSpeed, but store the value in this new private field instead:

```csharp
private float m_ProductionSpeed = 0.5f; // add new private backing field
public float ProductionSpeed; // remove value from public property
```

**2.** With the backing field declared, you can now manually add the get and set functions, which retrieve or assign the backing field when someone accesses the public property.

```csharp
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed // delete semicolon
{
    get { return m_ProductionSpeed; } // getter returns backing field
    set { m_ProductionSpeed = value; } // setter uses backing field
}
```

Since these are not going to be simple get and set methods, it’s not possible to use the “{ get; set; }” shorthand we used with the auto-implemented property earlier.

Instead, we are doing it manually. When someone gets the ProductionSpeed property, it will return the backing field. When someone sets the ProductionSpeed property, the backing field is set to the value they’ve entered.

**3.**Then, since the data is now stored in the backing field rather than the public property, references to the property should be swapped with the private field. In ResourcePile.cs, replace the two references to ProductionSpeed with m_ProductionSpeed.

```csharp
...
m_CurrentProduction += m_ProductionSpeed * Time.deltaTime; // swap in m_ version
...
return $"Producing at the speed of {m_ProductionSpeed}/s"; // swap in m_ version
```

Now, whenever someone tries to get or set the public property, it accesses the backing field encapsulated in the class through the getter and setter. However, we still haven’t actually implemented the setter validation, so that negative number is still possible! We’ll fix that right now.

Marcar paso como completado

## 8. Implement setter validation to prevent negative numbers

Q&A (0)

Finally, with everything configured, we can now implement a validation check within the set method, ensuring the Production Speed is always a positive number. In fact, we can even display a warning message in the console if a negative number is attempted.

**1.**  Within the set method, add an if-else statement that displays a warning message if the value is negative, but successfully sets the value if it’s positive.

```csharp
set
{
    if (value < 0.0f)
    {
        Debug.LogError("You can't set a negative production speed!");
    }
    else
    {
        m_ProductionSpeed = value; // original setter now in if/else statement
    }
}
```

**2.**  Test your application again and see what happens when the production speed is set to a negative number. It should display the error message.

[Image: image]

**3.**  With the setter validation fully implemented and tested, you can now return the ProductivityUnit to function as normal with a multiplication rather than a subtraction operator.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier; // revert '-=' to '*='
```

Marcar paso como completado

## 9. Summary

Q&A (0)

Encapsulation protects your code by controlling the ways values are accessed and changed, so that your code is only used as explicitly designed. Like abstraction, encapsulation places a layer of separation between the underlying complexity of your code and the programmers who might be accessing it.

In the project, you used an auto-implemented property to make a variable read-only to external classes. Then, you wrote a getter and setter for a property with a backing field to prevent it from being set to a negative number. You can now sleep soundly in the knowledge that both of these pieces of data are encapsulated, protected from mischief or misuse.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
