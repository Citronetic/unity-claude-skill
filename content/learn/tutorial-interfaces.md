[Image: image]

# Interfaces

Tutorial

intermediate

+10XP

5 mins

123

(369)

Unity Technologies

[Image: Interfaces]Summary

In this tutorial, you’ll review the basics of interfaces. By the end of the tutorial, you’ll be able to:

- Explain what an interface is and how they work.
- Declare an interface.
- Implement an interface.
- Use an implemented interface.

Languages available:

EnglishEnglishEspañol日本語简体中文English

## 1. Overview

Q&A (0)

An interface is a collection of method signatures and properties. You can think of interfaces like a contract that classes can implement: when a class implements an interface, a class instance can be treated as an instance of that interface. This functionality means that you can group together multiple disparate types and treat them in the same way.

By the end of the tutorial, you’ll be able to:

- Explain what an interface is and how they work.
- Declare an interface.
- Implement an interface.
- Use an implemented interface.

Mark step as complete

## 2. Before you begin

Q&A (0)

This tutorial is part of [Intermediate Scripting](https://learn.unity.com/project/intermediate-gameplay-scripting), a collection of basic introductions to a wide range of different programming concepts. If you want a guided introductory learning experience, try the [Create with Code](https://learn.unity.com/course/create-with-code) course or the full [Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer).

Mark step as complete

## 3. What is an interface?

Q&A (0)

An interface is a collection of method signatures and properties. You can write a class or struct to implement an interface by using methods and properties which match the signatures declared by the interface. Classes and structs that implement an interface have methods and properties that can be called in an identical way, which means that they can be called without prior knowledge of the class or struct’s type.

Mark step as complete

## 4. Declare an interface

Q&A (0)

You can declare an interface as you would declare class or struct, but using the **interface** keyword. Within an interface, methods and properties have their signature declared but not their definition.

Here’s an example of an interface:

```csharp
public interface IDamageable
{
   Vector3 Position { get; }
   void Damage (float damage);
}
```

Let’s go through the interface declaration.

#### Name

The interface is called IDamageable. Note that the name starts with the letter I. This is a convention to make it easy for you to identify interfaces; it’s not required, but we recommend that you follow this convention.

#### Property

The first line of the interface is a declaration for a property called Position. The property is of the Vector3 type and must have at least a public getter. The property can optionally have a setter of any protection level.

#### Method

The second line of the interface is the declaration for a single method called Damage. This method has a single float parameter and a return type of void.

#### Other details

All methods and properties in an interface are automatically public and so when declaring them, the **public** keyword is not required. Also, since the definitions of methods and properties are up to the implementing classes and structs, no bodies are required.

Mark step as complete

## 5. Implement an interface

Q&A (0)

When you write a class or a struct that implements an interface, you must:

1. List the interface after any inheritance.

2. Then declare all the methods and properties which are part of the interface.

Here is an example that implements the IDamageable interface:

```csharp
public class PlayerHealth : MonoBehaviour, IDamageable
{
   public float startingHealth = 100f;
   float m_CurrentHealth;
   Vector3 Position
   {
       get
       {
           return transform.position;
       }
   }
   void Start ()
   {
       m_CurrentHealth = startingHealth;
   }
   public void Damage (float damage)
   {
       m_CurrentHealth -= damage;
   }
}
```

In this example, the PlayerHealth class implements the IDamageable interface. The class declares that it is implementing the interface after its MonoBehaviour inheritance. PlayerHealth then declares the Damage method, which matches the signature declared in the IDamageable interface.

Mark step as complete

## 6. Use an implemented interface

Q&A (0)

The advantage of interfaces comes in their grouping and anonymity. Consider a situation in a game using the example code for this tutorial: an explosion goes off and it needs to damage everything nearby. If everything in the game implemented the damage differently then the code for the explosion would have to find all of the affected objects and individually call their methods.

The example below demonstrates how interfaces can help with that problem:

```csharp
using System.Collections.Generic;
using UnityEngine;
public class Explosion : MonoBehaviour
{
   public float range = 10f;
   public float damage = 35f;
   List<IDamageable> m_AllDamageables = new List<IDamageable>();
   void Start()
   {
       MonoBehaviour[] allScripts = FindObjectsOfType<MonoBehaviour>();
       for (int i = 0; i < allScripts.Length; i++)
       {
           if(allScripts[i] is IDamageable)
               m_AllDamageables.Add(allScripts[i] as IDamageable);
       }
   }
   public void Explode ()
   {
       for(int i = 0; i < m_AllDamageables.Count; i++)
       {
           if(Vector3.Distance(m_AllDamageables[i].Position, transform.position) < range)
               m_AllDamageables[i].Damage (damage);
       }
   }

}
```

This example script works in two stages:

1. First, when the Start method is called, the Explosion class finds all of the MonoBehaviours in the scene and adds those which implement the IDamageable interface to a list. For more details on treating objects as different types, review  [Polymorphism](https://learn.unity.com/tutorial/polymorphism?uv=2019.3&projectId=5c88f2c1edbc2a001f873ea5).
2. Then, when the Explode method is called, the class iterates through all of the objects that implement IDamageable, comparing their Positions to identify whether they are in range for the explosion blast. If an object is in range, its Damage method is called.

Mark step as complete

## 7. The SerializeReference attribute

Q&A (0)

Data that is part of a scene or part of an asset in Unity is **serialized**. This essentially means it is converted to another format to be saved to the computer’s drive.

A variable that has an interface type can be populated by a wide variety of different objects that implement that interface. That means that normally Unity would not know what data to serialize and so it would be ignored. However, if you use the SerializeReference attribute, Unity will instead serialize the object that is being represented by the variable.

Here is another example using the IDamageable interface:

```csharp
using UnityEngine;
public class PlayerHealth : MonoBehaviour
{
   [SerializeReference]
   public IDamageable shield = new ProtonShield();
}
public class ProtonShield : IDamageable
{
   public float hitPoints = 10f;
   public Vector3 Position { get; }
   public void Damage(float damage)
   {
       hitPoints -= damage;
   }
}
```

This example is a PlayerHealth script, and the player has a shield. This shield is being initialized to an instance of the ProtonShield class, but any IDamageable class or struct could take its place. The public fields of the ProtonShield class will be visible in the Inspector window, because the SerializeReference attribute is being used.

For further details about using the SerializeReference attribute, review the Intermediate Scripting [Polymorphism tutorial](https://learn.unity.com/tutorial/polymorphism) or the [SerializeReference attribute documentation](https://docs.unity3d.com/ScriptReference/SerializeReference.html?ampDeviceId=45465dfe-2605-4eec-b043-6d169acd2108&ampSessionId=1774888727825&ampTimestamp=1774975465156).

Mark step as complete

## 8. Summary

Q&A (0)

In this tutorial, you learned that interfaces behave as contracts for any classes and structs that implement them. This means that you can treat those classes and structs as instances of the interface. You also reviewed how to declare and implement an interface, following example scripts.

How could interfaces help you work more efficiently as you develop your own game or application?

Mark step as complete

## Complete this Tutorial

Mark all steps complete
