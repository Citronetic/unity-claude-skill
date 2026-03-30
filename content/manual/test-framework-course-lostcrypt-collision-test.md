This version of Unity is unsupported.

4. Reach Wand Test

6. Asset Change Test

# 5. Collision Test

## Learning Objectives

Check for **collisions**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collision) and make sure that LostCrypt does not have bugs that allow your character to move outside of the map.

## Exercise

Take a look at a game object `Environment/Character Bounds - Left`. You can see that it is placed at the left side of our 2D map. It is meant to protect players from exiting the map and falling into textures. Let’s see if it fulfills its purpose.

1. Add a new test `MainScene\_CharacterDoesNotFallIntoTextures` in `MovementTest.cs`.

2. Make your character move left and occasionally jump with some wait interval in between jumps.

3. In test, Assert that *Sara Variant* game object position is within bounds of our current **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../CreatingScenes.html)
See in [Glossary](../../../Glossary.html#Scene).

## Hints

- Similarly to the previous test, let’s set some arbitrary amount of seconds as our timeout. Sara should stay within the bounds of the scene for the given time.

- You might want to use `WaitForSeconds(0.5f)` between jumps to emulate User behaviour better.

- Study the Scene and hardcode X, and Y position used for out of map check, or better - get it dynamically from `Character Bounds - Left` game object.

## Solution

`MovementTest.cs`

```cs
using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.SceneManagement;

public class MovementTest
{
    const float _testTimeout = 20.0f;
    private Transform _characterTransform;

    [UnityTest]
    public IEnumerator MainScene_CharacterDoesNotFallIntoTextures()
    {
        SceneManager.LoadScene("Assets/Scenes/Main.unity", LoadSceneMode.Single);
        yield return waitForSceneLoad();

        yield return GoLeft();
        while (Time.timeSinceLevelLoad < _testTimeout)
        {
            yield return new WaitForSeconds(0.5f);
            yield return Jump();
            if (GetCurrentCharacterPosition().x < -75f && GetCurrentCharacterPosition().y < -10f)
            {
                Assert.Fail("Character escaped the map and fell into textures! :(");
            }
        }
    }

    private Vector3 GetCurrentCharacterPosition()
    {
        // Get Main character's Transform which is used to manipulate position.
        if (_characterTransform == null)
        {
            _characterTransform = GameObject.Find("Sara Variant").transform;
        }

        return _characterTransform.position;
    }

    private IEnumerator Jump()
    {
        TestInputControl.Jump = true;
        yield return null;
        TestInputControl.Jump = false;
    }

    private IEnumerator GoLeft()
    {
        TestInputControl.MoveRight = false;
        yield return null;
        TestInputControl.MoveLeft = true;
    }

    private IEnumerator waitForSceneLoad()
    {
        while (SceneManager.GetActiveScene().buildIndex > 0)
        {
            yield return null;
        }
    }
}
```

Our test fails, we have a bug in one of our Sample Unity projects. How would you approach fixing this problem? There are plenty of possibilities, go ahead and try to fix it as part of this training:

- Introduce new Character Bounds Box **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider) that will prevent the bug from happening.

- Rework our Sara character collision logic.

4. Reach Wand Test

6. Asset Change Test
