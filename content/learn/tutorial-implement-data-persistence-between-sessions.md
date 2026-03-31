[Image: image]

# Implement data persistence between sessions

Tutorial

foundational

+10XP

20 mins

18

(328)

Unity Technologies

[Image: Implement data persistence between sessions]Summary

In this tutorial, you’ll write code to save and load the color that the user selects so that it persists between sessions of the application. By the end of this tutorial, you will be able to:

- Call the appropriate start-up methods in the initialization sequence of the app
- Store and organize data by applying data structures such as lists and dictionaries
- Save user data in the shutdown sequence of the app

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

Right now, when you’re testing the work-in-progress application in Unity Editor, the color that you select for the forklifts in the warehouse won’t be saved the next time you test the application. If you create a build of this app, it will be a standalone experience each time the user runs it.

It would be helpful to save the user’s last chosen color, so that it’s automatically selected when they start the application. In this tutorial, you’ll build on your previous work to implement data persistence between scenes and do so **between sessions**.

Here’s what that might look like in your project:

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

**Tip:** If you’ve taken a break between this tutorial and the previous one, you might find it helpful to review the [introduction to data persistence](https://learn.unity.com/tutorial/676202bdedbc2a0152780fa6) before continuing.

ステップを完了としてマーク

## 2. Evaluate your brief

Q&A (0)

In this tutorial, you’re going to write the color selected by the user to a file. Then, you’re going to configure the MainManager to check whether that file exists when the application starts. If the file does exist, then the MainManager will read the color stored to it and set the color picker to that color.

Before you get started, take a few minutes to review the project brief. Imagine that you will perform this task on your own. Write down answers to the following questions:

- What do you need to implement, and where will you implement it ? Write down your thoughts now, to compare them with the approach we take.
- Where have you encountered similar functionality before, in Create with Code or other learning experiences? Even if you can’t access the code, think about examples of data persistence between sessions that you’re familiar with.
- Beyond Unity Learn, what resources could help you do this? Think about options within the Unity ecosystem and beyond it.

Taking a few minutes to reflect on what you already know before you begin a task is a very useful exercise, particularly if that task feels challenging. If you completed **[Unity Essentials](https://learn.unity.com/pathway/unity-essentials),** you explored [the mindset established creators take to learn Unity](https://learn.unity.com/tutorial/how-our-established-creators-learned-unity#5fa44852edbc2a001f616c92). This is a great time to refresh your memory of that approach.

Identifying the tools at your disposal and reviewing your previous learning can provide really helpful opportunities to think through different approaches to meet a brief. You can take this approach as you continue your learning journey far beyond this pathway — it’s rare that there’s only one way to do something!

ステップを完了としてマーク

## 3. How can data persist between sessions?

Q&A (0)

For data to persist between sessions, it needs to be stored in some way. In your case, you’ll need to convert the color your user selects into a format that can be stored and then read when they load the application again.

The process of converting complex data into a format in which it can be stored is called **serialization**. When you’re ready to access the data again, the process of converting it back is called **deserialization**.

[Image: image]

There are different formats that you can use to store data, depending on what the data is and what you want to do with it. In this case, you’re going to use the **JSON**format.

ステップを完了としてマーク

## 4. What is JSON?

Q&A (0)

JSON is a text format used to store data and exchange it between platforms. It was first developed for the web, and its full name is  **J**ava**S**cript **O**bject **N**otation. It’s based on JavaScript but is language independent — you can use it whether you’re writing C# code or using any other programming language.

The JSON format stores data in the form of a **key:value** pair. The key is a string, and the value can be:

- a number
- a string
- a Boolean (true/false)
- an array of values
- Another JSON object

##### How does this format work?

The following JSON string encodes an object storing basic information about a person:

```csharp
{
  "name": "John",
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York"
  }
  "pet": [“dog”, “cat”]
}
```

Let’s break down the example:

- Each **object** is surrounded by curly braces ( **{ }** ).
- Each **entry** is in the form of a key:value pair, separated by a comma.
- The entry “pet” is an array of strings — array values are listed between square brackets ( **[ ]** ).
- The value associated with the entry “address” is between curly braces too — this is because it is another JSON object.

ステップを完了としてマーク

## 5. Why is JSON a good fit for your brief?

Q&A (0)

JSON was developed to exchange data between very different systems, which makes it a good fit for saving data in your application. Unity has a helper class called **JsonUtility**, which allows you to take a serializable class and transform it into its JSON representation. Let’s see how this works for both serializing and deserializing data.

**Serializing data**

Consider the following PlayerData class:

```csharp
[Serializable]
public class PlayerData
{
    public int level;
    public Vector3 position;
    public string playerName;
}
```

Imagine that you want to pass this class to JsonUtility with the following values:

```csharp
PlayerData myData = new PlayerData();
myData.level = 1;
myData.position = new Vector3(3.0f, 4.4f, 2.3f);
myData.playerName = "John";
```

Calling **string json = JsonUtility.ToJson(myData);** will result in the following JSON string:

```csharp
{
    “level”: 1,
    “position”: {
        “x” : 3.0,
        “y” : 4.4,
        “z” : 2.3 },
    “playerName”: “John”
}
```

Note that since **position**is a vector3, it is encoded as a new JSON object with three keys: **x**, **y**, and **z**. This is because the Vector3 class (extremely simplified) is:

```csharp
[Serializable]
public class Vector3
{
    public float x;
    public float y;
    public float z;
}
```

**Deserializing data**

JsonUtility also has a method that does the inverse of the process you’ve just seen: FromJson<T>.

This method will take a string containing some JSON data and create an instance of the object with its fields filled in. It uses a template argument — as you may have noticed when reviewing the PlayerData JSON string, the original type of that data is not stored in the JSON file. Unity needs the template argument to read the right value in the right field.

To extend our example, calling **PlayerData myData = JsonUtility.FromJson<PlayerData>(json);** will fill **myData** with the values in the JSON string.

**Limitations of JsonUtility**

There are some limitations to Unity’s JsonUtility class, which was designed for performance and simplicity. JsonUtility doesn’t work on primitive types, arrays, lists, or dictionaries.

As you might expect, JsonUtility only works on the **Serializable type** — MonoBehaviour or the other classes/structs you write onto which you can add the **[Serializable]** attribute. If you try to save a class that contains multiple pieces of data and one of them won’t save, it’s probably because it isn’t serializable. For example, if you convert a class to JSON that has a dictionary in the middle, the dictionary won’t be saved because it’s not serializable. If something appears not to be saving properly in a class, check to make sure that it’s a serializable type!

For more information, consult [the Unity documentation on JSON Serialization](https://docs.unity3d.com/Manual/JSONSerialization.html).

ステップを完了としてマーク

## 6. Add a SaveData class

Q&A (0)

To save and load the user’s last chosen color, you’ll need three things in the MainManager class:

1. A **SaveData** class that stores the color.
2. A **Save method that** transforms that class into JSON format and writes it to a file.
3. A **Load method that** transforms the data from the JSON file back into the SaveData class.

Let’s start with the SaveData class:

**1.**  Open MainManager.cs in your IDE.

**2.**Add the following code at the end of the MainManager class (within the scope of its closing brace):

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}
```

Review the new code

SaveData is a simple class, which only contains the color that the user selects. Note that you have added a [System.Serializable] attribute above it. This line is required for JsonUtility, as you just learned — it will only transform things to JSON if they are tagged as Serializable.

Why are you creating a class and not giving the MainManager instance directly to the JsonUtility? Well, most of the time you won’t save everything inside your classes. It’s good practice and more efficient to use a small class that only contains the specific data that you want to save.

ステップを完了としてマーク

## 7. Add a SaveColor method

Q&A (0)

Next, let’s add the SaveColor method:

**1.**Leave a line free after the SaveData class.

**2.** Add the following code:

```csharp
public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}
```

**3.**The final line will be highlighted as an error in your IDE because we need to add a new namespace to the script. At the top of your script, add the following:

```csharp
using System.IO;
```

Review the new code

Let’s break down this new method in sequence. First, you created a new instance of the save data and filled its team color class member with the TeamColor variable saved in the MainManager:

```csharp
SaveData data = new SaveData();
data.TeamColor = TeamColor;
```

Next, you transformed that instance to JSON with **JsonUtility.ToJson**:

```csharp
string json = JsonUtility.ToJson(data);
```

Finally, you used the special method **File.WriteAllText**to write a string to a file:

```csharp
File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
```

The first parameter is the path to the file. You’ve used a Unity method called **Application.persistentDataPath** that will give you a folder where you can save data that will survive between application reinstall or update and append to it the filename savefile.json.

**Note:** The Unity Scripting API [lists the actual paths per platform](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html).

The second parameter is the text you want to write in that file — in this case, your JSON!

ステップを完了としてマーク

## 8. Add a LoadColor method

Q&A (0)

Now let’s add the LoadColor method:

**1.**Leave a line free after the SaveColor method.

**2.** Add the following code:

```csharp
public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

Review the new code

This method is a reversal of the SaveColor method:

```csharp
string path = Application.persistentDataPath + "/savefile.json";
```

It uses the method**File.Exists** to check if a .json file exists. If it doesn’t, then nothing has been saved, so no further action is needed. If the file does exist, then the method will read its content with **File.ReadAllText**:

```csharp
if (File.Exists(path))
{
    string json = File.ReadAllText(path);
```

It will then give the resulting text to **JsonUtility.FromJson** to transform it back into a SaveData instance:

```csharp
SaveData data = JsonUtility.FromJson<SaveData>(json);
```

Finally, it will set the TeamColor to the color saved in that SaveData:

```csharp
TeamColor = data.TeamColor;
```

Double check your new code

Before you continue, double check the code you’ve added to make sure it’s within the scope of the MainManager class:

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}

public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}

public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

ステップを完了としてマーク

## 9. Load and save the color in the application

Q&A (0)

You’re nearly finished, but first you need to load the saved color (if one exists) when the application starts and save the color on exit. Let’s implement that now:

**1.**  In MainManager.cs (which you should still have open), find the **Awake** method.

**2.**  Call the **LoadColor**method **at the end of Awake**:

```csharp
LoadColor();
```

**3.**  Save your changes, then open MenuUIHandler.cs in your IDE.

**4.**   At the end of the **Start** method, add the following code:

```csharp
ColorPicker.SelectColor(MainManager.Instance.TeamColor);
```

This line will pre-select the saved color in the MainManager (if there is one) when the menu screen is launched.

**5.**At the beginning of the **Exit** method, add the following code:

```csharp
MainManager.Instance.SaveColor();
```

This line will save the user’s last selected color when the application exits.

ステップを完了としてマーク

## 10. Add testing functionality

Q&A (0)

Finally, let’s add some quick testing functionality to the MenuUIHandler so that you can save and load the color from the application instantly:

**1.**  Add the following two methods to MenuUIHandler.cs:

```csharp
public void SaveColorClicked()
{
    MainManager.Instance.SaveColor();
}

public void LoadColorClicked()
{
    MainManager.Instance.LoadColor();
    ColorPicker.SelectColor(MainManager.Instance.TeamColor);
}
```

**2.** Save your changes.

**3.** Link these methods to the Load and Save Color buttons. If you need to recap this process, review how you [configured the Start button](https://learn.unity.com/tutorial/676202a9edbc2a019fcfe5bc?uv=6#676202a9edbc2a019fcfe5c3).

#### Test in the Editor

Test your changes to the application thoroughly, including the standard save on exit and load on launch.

ステップを完了としてマーク

## 11. Next steps

Q&A (0)

In this tutorial, you’ve implemented data persistence between sessions in your application, so that the last color chosen by the user is pre-selected when they reload the application. Great stuff!

Next, you’ll prepare a submission by applying what you’ve learned to meet a basic game brief in a new Unity project.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
