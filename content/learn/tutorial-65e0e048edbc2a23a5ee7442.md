[Image: image]

# Use the command pattern for flexible and extensible game systems

Tutorial

intermediate

+10XP

30 mins

9

(22)

Unity Technologies

[Image: Use the command pattern for flexible and extensible game systems]Summary

Implementing common game programming design patterns in your Unity project can help you efficiently build and maintain a clean, organized, and readable codebase. Design patterns reduce refactoring and testing time, speeding up development processes and contributing to a solid foundation that can be used to grow your game, team, and business.

Think of design patterns not as finished solutions you can copy and paste into your code, but as extra tools that can help you build larger, scalable applications.

This tutorial explains the command design pattern.

Languages available:

EnglishEnglishEnglish

## 1. Level up your code: Command pattern

Q&A (0)

Before you begin this tutorial, check out the video below for a brief overview of how you can use the command pattern in a Unity project to delay logic so you can execute, manage, or plan a series of actions in a flexible way, undo and redo a set of actions, and evaluate a sequence of actions.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 7:23Loaded: 0.00%0:00Remaining Time -7:231xPlayback Rate

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

This tutorial explains the command design pattern.

The content here is based on the free e-book, [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false).

Check out more articles in the Unity game programming design patterns series on the [Unity best practices](https://unity.com/how-to) hub or via these links:

- [Object pooling](https://learn.unity.com/tutorial/65df850fedbc2a082fb11029?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The state pattern](https://learn.unity.com/tutorial/65df7f9bedbc2a083a63757b?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The observer pattern](https://learn.unity.com/tutorial/65de086fedbc2a06ac2aca58?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The MVC and MVP patterns](https://learn.unity.com/tutorial/65e0cfacedbc2a2351773054?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)
- [The factory pattern](https://learn.unity.com/tutorial/65e0df08edbc2a2447bf0b98?uv=2022.3&projectId=65de084fedbc2a0699d68bfb)

Mark step as complete

## 3. Understanding the command pattern

Q&A (0)

The command programming design pattern is one of the original Gang of Four, and is useful whenever you want to track a specific series of actions. You’ve likely seen the command pattern at work if you’ve played a game that uses undo/redo functionality or keeps your input history in a list. Imagine a strategy game where the user can plan several turns before actually executing them. That’s the command pattern.

The command pattern allows actions to be represented as objects. Encapsulating actions as objects enables you to create a flexible and extensible system for controlling the behavior of GameObjects in response to user input. This works by encapsulating one or more method calls as a command object rather than invoking a method directly. Then you can store these command objects in a collection, like a queue or a stack, which works as a small buffer.

[Image: image]

Storing command objects in this way enables you to control the timing of their execution by potentially delaying a series of actions for later playback. Similarly, you are able to redo or undo them and add extra flexibility to control each command object’s execution.

Here are some common applications of the pattern across different game genres:

- In a real-time strategy game, the command pattern could be used to queue up unit and building actions. The game would then execute each command as resources become available.
- In a turn-based strategy game, the player could select a unit and then store its moves or actions in a queue or other collection. At the end of the turn, the game would execute all of the commands in the player’s queue.
- In a puzzle game, the command pattern could allow the player to undo and redo actions.
- In a fighting game, reading button presses or gamepad motions in a specific command list could result in combos and special moves.

Mark step as complete

## 4. Command pattern in a sample project

Q&A (0)

Try out the [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616) that demonstrates different programming design patterns in the context of game development, including the command pattern.

In this sample, the player can move around a maze by clicking the buttons on the left side. As your player moves around, you can see a trail of movement. But more importantly, you can undo and redo your previous actions.

[Image: image]

To find the corresponding scene in the project, go to the folder named **9 Command**.

Mark step as complete

## 5. The command object and command invoker

Q&A (0)

To implement the command pattern, you’ll need a general object that will contain your action. This command object will hold what logic to perform and how to undo it.

There are a number of ways to implement this, but here’s a simple version using an interface called **ICommand**:

```csharp
public interface ICommand
{
    void Execute();
    void Undo();
}
```

In this case, every gameplay action will apply the **ICommand**interface (you could also implement this with an abstract class).

Each command object will be responsible for its own **Execute**and **Undo**methods. So adding more commands to your game won’t affect any existing ones.

The **CommandInvoker**class is then responsible for executing and undoing commands. In addition to the **ExecuteCommand**and **UndoCommand**methods, it has an undo stack to hold the sequence of command objects.

```csharp
public class CommandInvoker
{
    // stack of command objects to undo
    private static Stack<ICommand> _undoStack = new Stack<ICommand>();

    // second stack of redoable commands
    private static Stack<ICommand> _redoStack = new Stack<ICommand>();

    // execute a command object directly and save to the undo stack
    public static void ExecuteCommand(ICommand command)
    {
        command.Execute();
        _undoStack.Push(command);

        // clear out the redo stack if we make a new move
        _redoStack.Clear();
    }

    public static void UndoCommand()
    {
        if (_undoStack.Count > 0)
        {
            ICommand activeCommand = _undoStack.Pop();
            _redoStack.Push(activeCommand);
            activeCommand.Undo();
        }
    }

    public static void RedoCommand()
    {
        if (_redoStack.Count > 0)
        {
            ICommand activeCommand = _redoStack.Pop();
            _undoStack.Push(activeCommand);
            activeCommand.Execute();
        }
    }
  }
}
```

Mark step as complete

## 6. Example: Undoable movement

Q&A (0)

In the sample project you can move your player around a small maze. A simple option for shifting the player’s position is to create a **PlayerMover**.

To do this, you’ll need to pass in a **Vector3**into the **Move**method to guide the player along the four compass directions. You can also use a raycast to detect the walls in the appropriate **LayerMask**. Of course, implementing what you want to apply to the command pattern is separate from the pattern itself.

```csharp
public class PlayerMover : MonoBehaviour
{
    [SerializeField] private LayerMask obstacleLayer;
    private const float boardSpacing = 1f;

    public void Move(Vector3 movement)
    {
        transform.position = transform.position + movement;
    }

    public bool IsValidMove(Vector3 movement)
    {
        return !Physics.Raycast(transform.position, movement, boardSpacing, obstacleLayer);
    }
}
```

Mark step as complete

## 7. The MoveCommand

Q&A (0)

To follow the command pattern, capture the **PlayerMover’s Move**method as an object. Instead of calling **Move**directly, create a new class, "MoveCommand", that implements the **ICommand**interface.

```csharp
public class MoveCommand : ICommand
{
    PlayerMover playerMover;
    Vector3 movement;
    public MoveCommand(PlayerMover player, Vector3 moveVector)
    {
        this.playerMover = player;
        this.movement = moveVector;
    }
    public void Execute()
    {
        playerMover.Move(movement);
    }
    public void Undo()
    {
        playerMover.Move(-movement);
    }
}
```

Whatever logic you want to accomplish goes in here, so invoke **Move**with the movement vector.

**ICommand**also needs an **Undo**method to restore the scene back to its previous state. In this case, the **Undo**logic subtracts the movement vector, essentially pushing the player in the opposite direction.

The **MoveCommand**stores any parameters that it needs to execute. Set these up with a constructor. In this case, you save the appropriate **PlayerMover**component and the movement vector.

Once you create the command object and save its needed parameters, use the **CommandInvoker’s**static **ExecuteCommand**and **UndoCommand**methods to pass in your **MoveCommand**. This runs the **MoveCommand’s Execute**or **Undo**and tracks the command object in the undo stack.

The **InputManager**doesn’t call the **PlayerMover’s Move**method directly. Instead, add an extra method, "RunMoveCommand", to create a new **MoveCommand**and send it to the **CommandInvoker**.

Then, set up the various **onClick**events of the UI Buttons to call **RunPlayerCommand**with the four movement vectors.

[Image: image]

Check out the [sample project](https://assetstore.unity.com/packages/essentials/tutorial-projects/level-up-your-code-with-design-patterns-and-solid-289616) for implementation details for the **InputManager**. You can also set up your own input using the keyboard or gamepad. Your player can now navigate the maze. Select the **Undo**button so you can backtrack to the beginning square.

```csharp
private void RunPlayerCommand(PlayerMover playerMover, Vector3 movement)
{
    if (playerMover == null)
    {
        return;
    }

    if (playerMover.IsValidMove(movement))
    {
        ICommand command = new MoveCommand(playerMover, movement);
        CommandInvoker.ExecuteCommand(command);
    }
}
```

Mark step as complete

## 8. Pros and cons

Q&A (0)

Implementing replayability or undoability is as simple as generating a collection of command objects. You can also use the command buffer to play back actions in sequence with specific controls.

For example, think about a fighting game where a series of specific button clicks triggers a combo move or attack. Storing player actions with the command pattern makes setting up these combos much simpler.

On the flip side, the command pattern introduces more structure, just like the other design patterns. You’ll have to decide where these extra classes and interfaces provide enough benefit for deploying command objects in your application

[Image: image]

Once you learn the basics, you can affect the timing of commands and play them back in succession or reverse, depending on the context.

Consider the following when incorporating the command pattern:

- **Create more commands:** The sample project only includes one type of command object, the **MoveCommand**. You can create any number of command objects that implement **ICommand**and track them using the **CommandInvoker**.
- **Adding redo functionality is a matter of adding another stack:** When you undo a command object, push it onto a separate stack that tracks redo operations. This way you can quickly cycle through the undo history or redo those actions. Clear out the redo stack when the user invokes an entirely new movement (you can find an implementation in the sample project).
- **Use a different collection for your buffer of command objects:** A queue might be handier if you want first in, first out (FIFO) behavior. If you use a list, track the currently active index; commands before active index are undoable. Commands after the index are redoable.
- **Limit the size of the stacks:** Undo and redo operations can quickly get out of control. Limit the stacks to the least number of commands.
- **Pass any necessary parameters into the constructor:** This helps encapsulate the logic as seen in the **MoveCommand**example.
- **The CommandInvoker**: Like other external objects, the **CommandInvoker** doesn’t see the inner workings of the command object, only invoking **Execute**or **Undo**. Give the command object any data needed to work when calling the constructor.

Mark step as complete

## 9. Level up your code: Pattern combo

Q&A (0)

Now you're familiar with each pattern, check out the video below to learn more about how they can be used together.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 7:57Loaded: 0.00%0:00Remaining Time -7:571xPlayback Rate

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

## 10. More resources

Q&A (0)[Image: image]

Find more tips on how to use design patterns in your Unity applications, as well as the SOLID principles, in the free e-book [Level up your code with design patterns and SOLID](https://unity.com/resources/design-patterns-solid-ebook?isGated=false).

You can find all advanced Unity technical e-books and articles on the [best practices](https://unity.com/how-to) hub. The e-books are also available on the [advanced best practices](https://docs.unity3d.com/Manual/best-practice-guides.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950233028) page in documentation.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
