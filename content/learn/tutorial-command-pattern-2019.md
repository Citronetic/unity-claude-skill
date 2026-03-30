[Image: image]

# Command Pattern

Tutorial

intermediate

+10XP

30 mins

105

(21)

Unity Technologies

[Image: Command Pattern]SummarySkills

In this project, you will learn about the Command Pattern. You will then go onto setup your own implementation of the command pattern by programming an Undo function.

This tutorial is part of the [Unity Junior Programmer](https://learn.unity.com/pathway/junior-programmer) pathway.

Resources

- [Commandpattern-Tutorial .zip](https://unity-connect-prd.storage.googleapis.com/20231108/2ba0bb37-04fd-4557-83bf-9239cc136861/Commandpattern-Tutorial%20.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952847330)

Languages available:

EnglishEnglishEnglish

## 1. What is the Command Pattern?

Q&A (0)

The Command Pattern is a design pattern (a template for how to solve a programming problem) that encapsulates all of the information about a specific action or event, and sets it up so it can be called at a later time by any other script. This keeps the code clean and isolated, and simplifies the process of calling the action or event. An added benefit is that any script calling on the command doesn’t need to know anything about the command itself. It simply makes the call, and the rest is taken care of.

Let’s take a look at how this all works. Below is a typical example of how an action is called in script:

```csharp
if(Input.GetKeyDown(Keycode.S))
{
  transform.Translate(Vector3.back);
}
```

Notice how the action is tied to a specific action within a specific script. The transform.Translate will only occur if this particular script is active, and if the user presses the S key. But what if we wanted to make this more modular, so any script could call on this particular action?

Now, let’s take that same functionality and use the Command Pattern instead:

```csharp
class MoveCommand
{
  Transform moved;

  public MoveCommand(Transform target)
  {
      moved = target;
  }
  public void Execute()
  {
      moved.Translate(Vector3.back);
  }
}
//then where we detect input
if(Input.GetKeyDown(Keycode.S))
{
  MoveCommand command = new MoveCommand(transform);
  command.Execute();
}
```

Notice that the action is now fully encapsulated into a class and the actual calling of the action is handled by an Execute command. This may seem like more work at first glance, but since our command is now an instance of a class, it can be easily manipulated, passed around, and stored.

The use cases for the Command Pattern are limited, as often a programmer may prefer to use delegates rather than this specific design pattern. However, there are some instances where the Command Pattern is uniquely useful, and an example of this is an undo function. Since commands are called as instances of objects, we can easily create a record of every time a command is called in an application. This effectively gives us a history that we can refer back to whenever the need arises, solving half of the problem presented to us when trying to create undo functionality. With the ability to track command history handled, we then need only create a function that performs the inverse of the action initially called.

Let’s see an example of this in action!

Mark step as complete

## 2. Practical Example: The Command Pattern in action

Q&A (0)[Image: image]

To show the Command Pattern at work, we’ve provided a simple turn based game example. Open the **Main** scene in the Scenes folder, and press Play to test the game. Select one of the two black statues to highlight the cells in which the statue can move. Click on the desired cell, and the statue will move to that location. Next, repeat the process for one of the white statues. Each statue is able to move freely within a specified radius on the board, unless that spot is currently occupied by another statue.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

The provided project has multiple script files to manage all of the behaviour for the game, but we’ll only be focusing on the scripts that manage the movement for our units.

In the project, navigate to the Scripts folder, and open the **UserControl** script. Look for the method called MoveUnit():

```csharp
void MoveUnit()
{
//We use the Raycast function of the Gameboard which will output in clickedCell which cell was clicked.
if (Gameboard.Instance.Raycast(Camera.main.ScreenPointToRay(Mouse.current.position.ReadValue()),
    out Vector3Int clickedCell))
  {
    //m_MovableCells contains all the cells our currently selected unit can move to.
    //So we check if the cell we just clicked is part of that list.
    if (m_MovableCells.Contains(clickedCell))
      {
          var unit = Gameboard.Instance.GetUnit(clickedCell);
          //only if there is no unit on the target cell do we move there
          if (unit == null)
          {
              MoveCommand cmd = new MoveCommand(m_SelectedUnit.CurrentCell, clickedCell);
              CommandManager.Instance.AddCommand(cmd);
          }
      }
  }
  DeselectUnit();
  m_CurrentState = State.SelectingUnit;
}
```

In this method, we begin by determining which cell we clicked on the game board via a raycast check. If the selected cell is part of our MovableCells list (which is a list that contains all of the valid cells to which our Unit is able to move), we then create a new MoveCommand. This then gets passed to the CommandManager, which will handle the actual execution of the command, as well as eventually manage the undo functionality.

Let’s look at the Command Manager! Back in the Scripts folder, open CommandManager.

```csharp
public class CommandManager : MonoBehaviour
{
  public interface ICommand
  {
    void Execute();
  }

  public static CommandManager Instance { get; private set; }

  private Stack<ICommand> m_CommandsBuffer = new Stack<ICommand>();

  private void Awake()
  {
      Instance = this;
  }

  public void AddCommand(ICommand command)
  {
      command.Execute();
      m_CommandsBuffer.Push(command);
  }
}
```

The Command Manager begins by defining an interface for our command. An interface in C# is best thought of as a kind of contract. Any class that implements an interface has to use everything that the interface defines. In our specific case, our interface ICommand has the Execute() method, so anything that implements that interface will have to implement Execute() as well. Note that *how*Execute() is used can be different for each class that implements it. All that matters is that it *is*used! To learn more about Interfaces,[refer to this video](https://www.youtube.com/watch?v=50_qBoKGKxs&ab_channel=Unity).

You can see how the interface is implemented in the AddCommand method at the bottom of the code snippet, where it serves as the method’s parameter. What this does is sets the method up so any class can call on it, so long as the class is implementing the ICommand interface. Because of this requirement, we are able to safely call on the Execute method, and then store a record of this command in a Stack. Unlike Lists, Stacks only allow access to the top level element in the collection, which eliminates the risk of accidentally accessing our command records out of order. At any time, we’ll only be able to access the very last command that we recorded, which is perfect for an undo feature!

Now let’s see how to implement a command for movement. In the scripts folder, navigate to the **Commands** subfolder and open **MoveCommand**.

```csharp
public class MoveCommand : CommandManager.ICommand
{
private Vector3Int m_From;
private Vector3Int m_To;

  public MoveCommand(Vector3Int start, Vector3Int end)
  {
      m_From = start;
      m_To = end;
  }

  public void Execute()
  {
      var unit = Gameboard.Instance.GetUnit(m_From);
      if (unit != null)
      {
          Gameboard.Instance.MoveUnit(unit, m_To);
          Gameboard.Instance.SwitchTeam();
      }
  }
}
```

The MoveCommand method takes the current position of the object and the location of the target cell as start and end parameters respectively. These parameters are assigned to variables, and that’s it!

Note that instead of extending Monobehaviour, this class is extending our ICommand in the CommandManager. Because of this, we know that this class must include the Execute method. Here, we use Execute with the data we gathered from the MoveCommand to access the current Unit and move it to the selected cell on the board. To finish the turn sequence, we also call on a method to switch over to the opposing team.

Mark step as complete

## 3. Write the Undo functionality

Q&A (0)

Let’s quickly review where we’re at. We’re able to capture the user’s input in the form of clicks on the play board, which in turn creates a MoveCommand, which gets Executed, and then is put on our Stack of recorded commands. We now have all of our core functionality for moving forward and remembering where we’ve been, but what about going back?

The answer is simple: Create a countermeasure to the Execute command!

We want our new functionality to be universally used, so we’ll place it within our ICommand interface in the **CommandManager** script.

```csharp
public interface ICommand
{
  void Execute();
  void Undo();
}
```

With this change saved, the Unity console will throw an error for any class that implements our ICommand interface. This is because they haven’t implemented the Undo method yet, so let’s take care of that!

Let’s return to the **MoveCommand** script and write our Undo functionality:

```csharp
public void Undo()
{
  var unit = Gameboard.Instance.GetUnit(m_To);
  if (unit != null)
  {
      Gameboard.Instance.MoveUnit(unit, m_From);
  }
   //we switch back which team is playing, as we undid a move, it go back to previous team
   Gameboard.Instance.SwitchTeam();
}
```

Our MoveComand class stores two variables: m_To (the current position of the object), and m_From (the position of where it wants to go). With the Execute command, we use the Gameboard’s MoveUnit method to move the selected object, feeding it the m_To variable as a parameter. In our Undo method, we reverse this by simply feeding the same MoveUnit method the m_From variable!

We now have the functionality to undo our command, but nothing to actually call it yet. Let’s add an Undo command to our **CommandManager** that we can call on a UI button we place in the scene. This Undo function will call Undo on our target command, which is the one on top of our Stack:

```csharp
public void Undo()
{
  if(m_CommandsBuffer.Count == 0)
    return;

  var cmd = m_CommandsBuffer.Pop();
  cmd.Undo();
}
```

Using Pop() returns the most recent entry from a Stack and then removes it, so by doing this, we remove our last command from our history!

In the scene, create a new UI button on the canvas and change its text to say Undo. On the button’s OnClick method in the inspector, add the **CommandManager**gameobject and select Undo as the target function.

Mark step as completeOptional Step

## 4. Challenge: Write a capture command

Q&A (0)

Now it's your turn to try writing your own Command (and associated undo!). Currently, our statues can move around, but can’t move on a cell occupied by another statue. Let’s write a command that will create functionality for capturing the enemy statue.

This command should:

- Move the active statue to the occupied cell
- Move the enemy statue to the side of the game board. This will represent its capture.

Begin by creating a new file called **CaptureCommand** in the Commands folder nested under the Script folder. Refer to the MoveCommand for guidance on how to write the new command. To simplify things, we’ve provided a method that will handle moving the target statue to the side of the board. Access it with this line:

```csharp
Gameboard.Instance.TakeOutUnit(Unit);
```

Remember that you can add other member variables like m_From and m_To to your command class to store data. You’ll need to store the captured statue as a reference so you can move it back onto the board when the Undo method is called.

#### Solution

```csharp
public class CaptureCommand : CommandManager.ICommand
{
private Vector3Int m_Start;
private Vector3Int m_End;

private Unit m_Captured;
private Unit m_Capturing;

  public CaptureCommand(Vector3Int start, Vector3Int end)
  {
      m_Start = start;
      m_End = end;
  }

  public void Execute()
  {
      m_Captured = Gameboard.Instance.GetUnit(m_End);
      m_Capturing = Gameboard.Instance.GetUnit(m_Start);

      Gameboard.Instance.MoveUnit(m_Capturing, m_End);
      Gameboard.Instance.TakeOutUnit(m_Captured);
      Gameboard.Instance.SwitchTeam();
  }
  public void Undo()
  {
      Gameboard.Instance.MoveUnit(m_Capturing, m_Start);
      Gameboard.Instance.MoveUnit(m_Captured, m_End);
      Gameboard.Instance.SwitchTeam();
  }
}
```

Note that both units are being stored. This is so we can easily replace them on their respective cells on Undo.

The **UserControl** script must also be updated to handle what’s supposed to happen when a statue moves into an occupied cell. This is what the MoveUnit function looks like right now:

```csharp
void MoveUnit()
{
       //We use the Raycast function of the Gameboard which will output in clickedCell which cell was clicked.
 if (Gameboard.Instance.Raycast(Camera.main.ScreenPointToRay(Mouse.current.position.ReadValue()),
    out Vector3Int clickedCell))
  {
       //m_MovableCells contains all the cells our currently selected unit can move to.
       //So we check if the cell we just clicked is part of that list.
    if (m_MovableCells.Contains(clickedCell))
      {
          var unit = Gameboard.Instance.GetUnit(clickedCell);

          //only if there is no unit on the target cell do we move there
          if (unit == null)
          {
              MoveCommand cmd = new MoveCommand(m_SelectedUnit.CurrentCell, clickedCell);
              CommandManager.Instance.AddCommand(cmd);
          }
      }
  }
  DeselectUnit();
  m_CurrentState = State.SelectingUnit;
}
```

We only create the MoveCommand if the target cell isn’t currently occupied. If it is occupied, we instead create our new CaptureCommand:

```csharp
void MoveUnit()
{
if (Gameboard.Instance.Raycast(Camera.main.ScreenPointToRay(Mouse.current.position.ReadValue()),
    out Vector3Int clickedCell))
  {
      if (m_MovableCells.Contains(clickedCell))
      {
          var unit = Gameboard.Instance.GetUnit(clickedCell);

          if (unit == null)
          {
              MoveCommand cmd = new MoveCommand(m_SelectedUnit.CurrentCell, clickedCell);
              CommandManager.Instance.AddCommand(cmd);
          }
          else if (unit.Side != m_SelectedUnit.Side)
          {
              //we're capturing the unit there!
              CaptureCommand command = new CaptureCommand(m_SelectedUnit.CurrentCell, unit.CurrentCell);
              CommandManager.Instance.AddCommand(command);
          }
      }
  }
  DeselectUnit();
  m_CurrentState = State.SelectingUnit;
}
```

Mark step as complete

## 5. More resources

Q&A (0)

To learn more about command patterns, check out this YouTube video,  [**Level up your code: Command pattern**](https://youtu.be/attURV3JWKQ)and the [**Level up your programming with game programming patterns ebook**](https://unity.com/resources/level-up-your-code-with-game-programming-patterns?isGated=false).

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## Complete this Tutorial

Mark all steps complete
