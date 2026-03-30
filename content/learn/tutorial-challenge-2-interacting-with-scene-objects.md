[Image: image]

# Challenge 2: Interacting with Scene Objects

Tutorial

intermediate

+10XP

0 mins

1

(15)

Unity Technologies

[Image: Challenge 2: Interacting with Scene Objects]Summary

In this challenge, you must set up interactable objects in your scene.

Languages available:

EnglishEnglishEnglish

## 1. Setting up your Scene Object

Q&A (0)

1. Select the object with which you would like to interact.

2. Ensure it has a collider component as well. If not, add a collider.

3. Add the Rigidbody to the object

4. Add the XR Grab Interactable component

[Image: image]

5. Click play and try pointing and grabbing objects. You have now configured distance grab.

[Image: image]Mark step as complete

## 2. Setting up Direct Grab

Q&A (0)

1. To setup direct grab, remove the Line Renderer, visual, and ray interaction (three components) from the hands if you want to grab objects directly (rather than from a distance)

2. Add the XR Direct Interactor component to each controller

[Image: image]

Bonus:

- Can use layers to manage which objects to interact with
- Can specify specific points to attach the objects to (attach transform)
- Can add sound events (upon grabbing an object)
- Can add haptic feedback (upon grabbing an object)
- Events for hover and select

3. Add a collider to the hands and make it a trigger

4. Click play and test your grab functionality. You should now be able to grab objects directly

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
