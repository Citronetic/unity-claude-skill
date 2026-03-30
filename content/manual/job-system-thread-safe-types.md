This version of Unity is unsupported.

Parallel jobs

Introduction to NativeContainer

# Thread safe types

The job system works best when you use it with the [Burst compiler](https://docs.unity3d.com/Packages/com.unity.burst@latest/). Because Burst doesn’t support managed objects, you need to use unmanaged types to access the data in jobs. You can do this with [blittable types](https://learn.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types), or use Unity’s built-in [`NativeContainer`](../ScriptReference/Unity.Collections.LowLevel.Unsafe.NativeContainerAttribute.html) objects.

| Topic | Description |
| --- | --- |
| Introduction to NativeContainer | Understand Unity’s custom thread-safe type, NativeContainer. |
| Implement a custom NativeContainer | Implement custom native containers. |
| Copying NativeContainer structures | Copy and reference multiple native containers. |
| Custom NativeContainer example | Use a real world custom NativeContainer example. |

## Additional resources

- [Burst compiler](https://docs.unity3d.com/Packages/com.unity.burst@latest/)

- [Collections](https://docs.unity3d.com/Packages/com.unity.collections@latest)

Parallel jobs

Introduction to NativeContainer
