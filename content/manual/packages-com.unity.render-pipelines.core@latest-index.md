# Class VolumeParameter



The base class for all parameter types stored in a [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html).

This class serves as a base for different parameter types that are used within the Volume system, such as those controlling post-processing effects, lighting settings, and other volume-related parameters.

The [VolumeParameter](UnityEngine.Rendering.VolumeParameter.html) class implements the [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable) interface, enabling cloning of the parameter's values for later use or manipulation.





##### Inheritance

    [object](https://learn.microsoft.com/dotnet/api/system.object)
    VolumeParameter

      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>



##### Implements

    [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)




##### Inherited Members


      [object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))


      [object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))


      [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)


      [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)


      [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)


      [object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)


      [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)




###### **Namespace**: [UnityEngine.Rendering](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.5/api/UnityEngine.Rendering.html)



###### **Assembly**: Unity.RenderPipelines.Core.Runtime.dll



##### Syntax




```csharp
[Serializable]
public abstract class VolumeParameter : ICloneable
```




##### **Remarks**



The [VolumeParameter](UnityEngine.Rendering.VolumeParameter.html) class is an abstract base class, and cannot be instantiated directly.
Derived classes like [VolumeParameter<T>](UnityEngine.Rendering.VolumeParameter-1.html) represent specific parameter types, such as float, vector, or color values, and can be used to configure individual settings in a Volume component.

It is important to note that this class is designed to allow various parameter types to be stored and managed collectively.
This mechanism enables developers to create complex and configurable Volume components that can be customized with different parameter types (e.g., sliders for float values, color pickers for color values, etc.).



### Fields



#### k_DebuggerDisplay



A beautified string for debugger output. This is set on a `DebuggerDisplay` on every
parameter types.




##### Declaration




```csharp
public const string k_DebuggerDisplay = "{m_Value} ({m_OverrideState})"
```




##### Field Value



| Type | Description |
| --- | --- |
| string |  |



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)




#### m_OverrideState



The current override state for this parameter. The Volume system considers overriden parameters
for blending, and ignores non-overriden ones.




##### Declaration




```csharp
[SerializeField]
protected bool m_OverrideState
```




##### Field Value



| Type | Description |
| --- | --- |
| bool |  |



##### See Also


      [overrideState](UnityEngine.Rendering.VolumeParameter.html#UnityEngine_Rendering_VolumeParameter_overrideState)



### Properties




#### overrideState



The current override state for this parameter. The Volume system considers overriden parameters
for blending, and ignores non-overriden ones. It is also used in the VolumeStack to determine whether
a given parameter has been overridden and thus needs to be reset to its default state in the next update.




##### Declaration




```csharp
public virtual bool overrideState { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| bool |  |



##### Remarks



You can override this property to define custom behaviors when the override state
changes.



##### See Also


      [m_OverrideState](UnityEngine.Rendering.VolumeParameter.html#UnityEngine_Rendering_VolumeParameter_m_OverrideState)



### Methods




#### Clone()



Clones the current instance of the [VolumeParameter](UnityEngine.Rendering.VolumeParameter.html)




##### Declaration




```csharp
public abstract object Clone()
```




##### Returns



| Type | Description |
| --- | --- |
| object | A new created instance with the same values as the current instance of VolumeParameter |



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### GetValue<T>()



Casts and gets the typed value of this parameter.




##### Declaration




```csharp
public T GetValue<T>()
```




##### Returns



| Type | Description |
| --- | --- |
| T | A value of type T. |



##### Type Parameters



| Name | Description |
| --- | --- |
| T | The type of the value stored in this parameter |



##### Remarks



This method is unsafe and does not do any type checking.



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### IsObjectParameter(Type)



Checks if a given type is an [ObjectParameter<T>](UnityEngine.Rendering.ObjectParameter-1.html).




##### Declaration




```csharp
public static bool IsObjectParameter(Type type)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| Type | type | The type to check. |



##### Returns



| Type | Description |
| --- | --- |
| bool | true if type is an ObjectParameter<T>,
false otherwise. |



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### OnDisable()



Unity calls this method when the parent [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html) goes out of scope.




##### Declaration




```csharp
protected virtual void OnDisable()
```




##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### OnEnable()



Unity calls this method when the parent [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html) loads.




##### Declaration




```csharp
protected virtual void OnEnable()
```




##### Remarks



Use this if you need to access fields and properties that you can not access in
the constructor of a `ScriptableObject`. ([VolumeParameter](UnityEngine.Rendering.VolumeParameter.html) are
generally declared and initialized in a [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html), which is a
`ScriptableObject`). Unity calls this right after it constructs the parent
[VolumeComponent](UnityEngine.Rendering.VolumeComponent.html), thus allowing access to previously
inaccessible fields and properties.



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### Release()



Override this method to free all allocated resources




##### Declaration




```csharp
public virtual void Release()
```




##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)





#### SetValue(VolumeParameter)



Sets the value of this parameter to the value in `parameter`.




##### Declaration




```csharp
public abstract void SetValue(VolumeParameter parameter)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| VolumeParameter | parameter | The VolumeParameter to copy the value from. |



##### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)



### Implements


      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)



### Extension Methods


      [ReflectionUtils.GetField(object, string)](UnityEngine.Rendering.Tests.ReflectionUtils.html#UnityEngine_Rendering_Tests_ReflectionUtils_GetField_System_Object_System_String_)


      [ReflectionUtils.GetFields(object)](UnityEngine.Rendering.Tests.ReflectionUtils.html#UnityEngine_Rendering_Tests_ReflectionUtils_GetFields_System_Object_)


      [ReflectionUtils.Invoke(object, string, params object[])](UnityEngine.Rendering.Tests.ReflectionUtils.html#UnityEngine_Rendering_Tests_ReflectionUtils_Invoke_System_Object_System_String_System_Object___)


      [ReflectionUtils.SetField(object, string, object)](UnityEngine.Rendering.Tests.ReflectionUtils.html#UnityEngine_Rendering_Tests_ReflectionUtils_SetField_System_Object_System_String_System_Object_)


      [AnalyticsUtils.ToNestedColumnWithDefault<T>(T, T, bool)](UnityEditor.Rendering.AnalyticsUtils.html#UnityEditor_Rendering_AnalyticsUtils_ToNestedColumnWithDefault__1___0___0_System_Boolean_)


      [AnalyticsUtils.ToNestedColumn<T>(T, T)](UnityEditor.Rendering.AnalyticsUtils.html#UnityEditor_Rendering_AnalyticsUtils_ToNestedColumn__1___0___0_)



### See Also


      [VolumeManager](UnityEngine.Rendering.VolumeManager.html)
      [VolumeComponent](UnityEngine.Rendering.VolumeComponent.html)
      [VolumeParameter](UnityEngine.Rendering.VolumeParameter-1.html)<T>
      [ICloneable](https://learn.microsoft.com/dotnet/api/system.icloneable)
      [VolumeStack](UnityEngine.Rendering.VolumeStack.html)
