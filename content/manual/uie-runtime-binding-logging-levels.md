This version of Unity is unsupported.

Convert data types

Create custom binding types

# Define logging levels

During the update of the binding, errors might occur where binding objects try to access invalid properties, encounter `null` values along a property path, or encounter missing type converters. By default, the binding system logs all errors to the Console, which can impact performance.

To control the console output, you can define logging levels for the binding system. The following are the available logging levels:

- **BindingLogLevel.All** Errors are consistently logged to the console.

- **BindingLogLevel.Once**: Errors are logged to the console only the first time they occur.

- **BindingLogLevel.None**: Error logging is disabled.

You can set the global and per-panel configurations to customize logging behavior.

The following example sets the global log level of all panels or windows.

```cs
Binding.SetGlobalLogLevel(BindingLogLevel.Once);
```

The following example sets the log level per panel:

```cs
Binding.SetPanelLogLevel(myElement.panel, BindingLogLevel.None);
```

**Note:** The per-panel or the per-window logging level settings override the global logging level settings.

## Additional resources

- [Runtime data binding](UIE-runtime-binding.html)

- [Create runtime data binding](UIE-runtime-binding-types.html)

- [Define a data source](UIE-runtime-binding-define-data-source.html)

- [Define binding modes and update triggers](UIE-runtime-binding-mode-update.html)

- [Convert data types](UIE-runtime-binding-data-type-conversion.html)

Convert data types

Create custom binding types
