This version of Unity is unsupported.

Modify the Gradle project files for a Unity application

Modify Gradle project files with the Android Project Configuration Manager

# Modify Gradle project files with Gradle template files

To have some control over the format and contents of **Gradle**An Android build system that automates several build processes. This automation means that many common build errors are less likely to occur. [More info](android-gradle-overview.html)
See in [Glossary](Glossary.html#Gradle) project files, you can override Unity’s default templates with your own custom template. To do this:

1. Go to **Edit** > **Project Settings** to open the Project Settings window.

2. Select the **Player** tab, then open [Android Player Settings](class-PlayerSettingsAndroid.html)

3. In the **Publishing Settings** section, enable the checkbox that corresponds to the Gradle project file type you want to create a custom template for. This creates a Gradle project template file and displays the path to the file.

4. Modify the template file to control the final format and contents of the final Gradle project file.

**Note**: If there is a discrepancy between the values set in the Android **Player settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) and the template file, Unity displays a warning message, and Player settings take precedence.

To verify that your template modifications give the result that you expect, [export your project](android-export-process.html) and view the final Gradle project files in the resulting project.

## Additional resources

- [Gradle template variables](android-gradle-template-variables.html)

- [Export an Android project](android-export-process.html)

- [Modify Gradle project files with the Android Project Configuration Manager](android-modify-gradle-project-files-agp.html)

- [Modify Gradle project files with Android Studio](android-modify-gradle-project-files-android-studio.html)

Modify the Gradle project files for a Unity application

Modify Gradle project files with the Android Project Configuration Manager
