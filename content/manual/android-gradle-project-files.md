This version of Unity is unsupported.

Unity and Gradle version compatibility

Gradle project structure

# Gradle project files

Gradle project files configure different aspects of your application, such as the modules to include and how to build them.

The following table lists the **Gradle**An Android build system that automates several build processes. This automation means that many common build errors are less likely to occur. [More info](android-gradle-overview.html)
See in [Glossary](Glossary.html#Gradle) project files that exist for Unity projects and describes the purpose of each one.

| Gradle project file | Purpose |
| --- | --- |
| Main Manifest | Contains important metadata about your Android application. For more information, refer to Unity Library Manifest. |
| Unity Launcher Manifest | Contains important metadata about your Android application’s launcher. For more information, refer to Unity Launcher Manifest. |
| Main Gradle | Contains information on how to build your Android application as a library. |
| Launcher Gradle | Contains instructions on how to build your Android application. |
| Base Gradle | Contains configuration that’s shared between all other templates and Gradle projects. |
| Gradle Properties | Contains configuration settings for the Gradle build environment. This includes:
 The JVM (Java Virtual Machine) memory configuration.
 A property to allow Gradle to build using multiple JVMs.
A property for choosing the tool to do the minification. A property to not compress native libs when building an app bundle. |
| Gradle Settings | Contains declaration of artifact repositories to resolve external dependencies required for your application. |
| Proguard | Contains configuration settings for the minification process. Note: If minification removes necessary Java code, add a rule in this file to keep that code. |

## Additional resources

- [Gradle project structure](android-gradle-project-structure.html)

- [Unity Library Manifest](android-library-manifest.html)

- [Unity Launcher Manifest](android-launcher-manifest.html)

Unity and Gradle version compatibility

Gradle project structure
