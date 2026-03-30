This version of Unity is unsupported.

Define a namespace prefix

Best practices for managing elements

# Troubleshooting custom control library compilation

This troubleshooting guide helps you resolve issues when compiling custom controls into DLLs.

## Symptoms

When you compile custom controls into DLLs, you might encounter the following issues:

- Custom controls don’t appear in the UI Builder.

- Custom controls don’t serialize correctly when building libraries (DLLs).

## Cause

UI Toolkit uses the [UxmlElement](../ScriptReference/UIElements.UxmlElementAttribute.html) code generator to support UXML serialization. However, when compiling custom controls into DLLs, the generated serialization code isn’t included by default, causing issues with element visibility and serialization.

## Resolution

To resolve this issue, run the UI Toolkit source generator (`Unity.UIToolkit.SourceGenerator.dll`) during the DLL compilation process.

1. Find the source generator file in your Unity installation. It’s typically located at: `<Unity Installation Path>\Data\Tools\Unity.SourceGenerators\Unity.UIToolkit.SourceGenerator.dll`.

2. Add the source generator as an analyzer in your library project’s `.csproj` file within an `<ItemGroup>`:

```xml
<ItemGroup>
    <Analyzer Include="path\to\Unity.UIToolkit.SourceGenerator.dll" />
</ItemGroup>
```

3. Compile your library as usual. This triggers the source generator, which generates the required [UxmlSerializedData](../ScriptReference/UIElements.UxmlSerializedData.html) class for your custom control.

**Tip**: Always rebuild your library against the Unity version you’re using because the generated code might vary between versions.

## Additional resources

- [Customize the custom control UXML tag name](ui-systems/custom-control-customize-uxml-tag-names.html)

- [Define UXML attributes for built-in data types](ui-systems/custom-control-attributes-built-in-types.html)

- [Define UXML attributes for complex data types](ui-systems/custom-control-attributes-complex-data-types.html)

- [Customize UXML attributes](ui-systems/custom-control-customize-uxml-attributes.html)

Define a namespace prefix

Best practices for managing elements
