This version of Unity is unsupported.

Code optimization

Introduction to asynchronous programming with Awaitable

# Asynchronous programming with the Awaitable class

Asynchronous programming allows your code to perform long-running tasks without blocking the main thread. This allows your application to remain responsive and perform other tasks while it waits for an asynchronous task to complete.

Unity supports a simplified asynchronous programming model using the .NET [async](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/async) key word and [await](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await) operator.

Before reading about asynchronous programming in Unity, make sure you understand the fundamental elements of asynchronous programming in .NET. For important context, refer to [Asynchronous programming with async and await](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/) and [Task asynchronous programming model](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/task-asynchronous-programming-model).

| Topic | Description |
| --- | --- |
| Introduction to Awaitable | Understand the key features of Unity’s Awaitable and how it compares to both .NET Task and iterator-based coroutines. |
| Awaitable completion and continuation | Understand how asynchronous code resumes on completion of an awaited task and how this affects the function and performance of your application. |
| Awaitable code example reference | Solve common asynchronous programming problems with a reference of Awaitable code examples. |

## Additional resources

- [Awaitable API reference](../ScriptReference/Awaitable.html)

- [C# Job System](job-system.html)

- [Coroutines](Coroutines.html)

Code optimization

Introduction to asynchronous programming with Awaitable
