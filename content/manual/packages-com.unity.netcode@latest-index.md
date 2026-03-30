# Class GhostComponentVariationAttribute



Generate a serialization variant for a component using the [GhostFieldAttribute](Unity.NetCode.GhostFieldAttribute.html) annotations
present in variant declaration.
The component variant can be assigned at authoring time using the GhostAuthoringComponent editor.

Note: This is incompatible with any type implementing [DontSupportPrefabOverridesAttribute](Unity.NetCode.DontSupportPrefabOverridesAttribute.html).





##### Inheritance

    [object](https://learn.microsoft.com/dotnet/api/system.object)
    [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)
    GhostComponentVariationAttribute




##### Inherited Members


      [Attribute.Equals(object)](https://learn.microsoft.com/dotnet/api/system.attribute.equals)


      [Attribute.GetCustomAttribute(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type))


      [Attribute.GetCustomAttribute(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean))


      [Attribute.GetCustomAttribute(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type))


      [Attribute.GetCustomAttribute(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean))


      [Attribute.GetCustomAttribute(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type))


      [Attribute.GetCustomAttribute(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean))


      [Attribute.GetCustomAttribute(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type))


      [Attribute.GetCustomAttribute(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean))


      [Attribute.GetCustomAttributes(Assembly)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly))


      [Attribute.GetCustomAttributes(Assembly, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean))


      [Attribute.GetCustomAttributes(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type))


      [Attribute.GetCustomAttributes(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean))


      [Attribute.GetCustomAttributes(MemberInfo)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo))


      [Attribute.GetCustomAttributes(MemberInfo, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean))


      [Attribute.GetCustomAttributes(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type))


      [Attribute.GetCustomAttributes(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean))


      [Attribute.GetCustomAttributes(Module)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module))


      [Attribute.GetCustomAttributes(Module, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean))


      [Attribute.GetCustomAttributes(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type))


      [Attribute.GetCustomAttributes(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean))


      [Attribute.GetCustomAttributes(ParameterInfo)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo))


      [Attribute.GetCustomAttributes(ParameterInfo, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean))


      [Attribute.GetCustomAttributes(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type))


      [Attribute.GetCustomAttributes(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean))


      [Attribute.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode)


      [Attribute.IsDefaultAttribute()](https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute)


      [Attribute.IsDefined(Assembly, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type))


      [Attribute.IsDefined(Assembly, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean))


      [Attribute.IsDefined(MemberInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type))


      [Attribute.IsDefined(MemberInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean))


      [Attribute.IsDefined(Module, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type))


      [Attribute.IsDefined(Module, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean))


      [Attribute.IsDefined(ParameterInfo, Type)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type))


      [Attribute.IsDefined(ParameterInfo, Type, bool)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean))


      [Attribute.Match(object)](https://learn.microsoft.com/dotnet/api/system.attribute.match)


      [Attribute.TypeId](https://learn.microsoft.com/dotnet/api/system.attribute.typeid)


      [object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))


      [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)


      [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)


      [object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)




###### **Namespace**: [Unity.NetCode](https://docs.unity3d.com/Packages/com.unity.netcode@6.5/api/Unity.NetCode.html)



###### **Assembly**: Unity.NetCode.dll



##### Syntax




```csharp
[AttributeUsage(AttributeTargets.Struct)]
public class GhostComponentVariationAttribute : Attribute
```




##### **Remarks**



When declaring a variant, all fields that should be serialized must be declared. Any missing field or new field
not present in the original struct will not be serialized.



### Constructors




#### GhostComponentVariationAttribute(Type, string, bool)



Initialize and declare the variant for a given component type.
We can't constrain on a specific interface, thus, the validation is done at compile time in the constructor (for now).




##### Declaration




```csharp
public GhostComponentVariationAttribute(Type componentType, string displayName = null, bool isTestVariant = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| Type | componentType | ComponentType |
| string | displayName | DisplayName |
| bool | isTestVariant | IsTestVariant |



### Fields



#### ComponentType



Type that this variant is overriding.  Assigned at construction time.




##### Declaration




```csharp
public readonly Type ComponentType
```




##### Field Value



| Type | Description |
| --- | --- |
| Type |  |



### Properties




#### DisplayName



User friendly, readable name for the variant. Used mainly for UI and logging purposes.
If not assigned at construction time, the annotated class name will be used instead.
"Default", "ClientOnly" and "DontSerialize" are not valid names and will be treated as null.




##### Declaration




```csharp
public string DisplayName { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| string |  |



##### Examples



"Translation - 2D"




#### IsTestVariant



True if editor-only. Hides it in the user-facing dropdown.
If true; we'll set this variant as the default in the editor, assuming we're unable to find a "proper" default.




##### Declaration




```csharp
public bool IsTestVariant { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| bool |  |




#### VariantHash



The unique hash for the component variation.
The hash is computed at compile time (assigned to the generated serialization class) and
then assigned at runtime to the attribute when all the variant are
registered by the [GhostComponentSerializerCollectionSystemGroup](Unity.NetCode.GhostComponentSerializerCollectionSystemGroup.html).
The hash itself is then used at both edit and runtime to identify the variation used for each component.




##### Declaration




```csharp
public ulong VariantHash { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| ulong |  |
