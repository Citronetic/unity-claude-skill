This version of Unity is unsupported.

Introduction to reducing shader variants in URP

Strip feature shader variants in URP

# Check how many shader variants your build has in URP

To log how many variants Unity compiles and strips in total, follow these steps:

1. Open the [Graphics settings window](urp-global-settings.html).

2. In the ****Shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) Stripping** section, select a logging level other than **Disabled**.

3. Build your project.

4. To see the logged information, open the `Editor.log` log file and search for `ShaderStrippingReport`. For the location of `Editor.log`, refer to [log files](../log-files.html).

To log more detailed shader variant information, follow these steps:

1. Open the [Graphics settings window](urp-global-settings.html).

2. In the **Additional Shader Stripping Settings** section, select **Export Shader Variants**.

3. Build your project.

4. In the folder with your project files, open `Temp/graphics-settings-stripping.json` and `Temp/shader-stripping.json`.

## Additional resources

- [Check how many shader variants you have](../shader-how-many-variants.html)

- [Shader variant stripping](../shader-variant-stripping.html)

Introduction to reducing shader variants in URP

Strip feature shader variants in URP
