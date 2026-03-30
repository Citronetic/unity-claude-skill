This version of Unity is unsupported.

Introducing Android Library and Android Archive plug-ins

Import an Android Library plug-in

# Create an Android Library plug-in

You can create an Android Library **plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) in Unity. Once created, you can directly use it within your Unity project or develop it further in Android Studio.

To create an Android Library plug-in, follow these steps:

1. In your Unity project, create `MyFeature.androidlib` folder. This folder will represent a **Gradle**An Android build system that automates several build processes. This automation means that many common build errors are less likely to occur. [More info](android-gradle-overview.html)
See in [Glossary](Glossary.html#Gradle) module.

2. Create a file named `build.gradle` inside the `MyFeature.androidlib` folder and add the following code:

```gradle
apply plugin: 'com.android.library'

dependencies {
implementation fileTree(dir: 'libs', include: ['*.jar'])
}

android {
    namespace "com.company.myfeature"
    compileSdk getProperty("unity.compileSdkVersion") as int
    buildToolsVersion = getProperty("unity.buildToolsVersion")

    compileOptions {
        sourceCompatibility JavaVersion.valueOf(getProperty("unity.javaCompatabilityVersion"))
        targetCompatibility JavaVersion.valueOf(getProperty("unity.javaCompatabilityVersion"))
    }

    defaultConfig {
        minSdk getProperty("unity.minSdkVersion") as int
        targetSdk getProperty("unity.targetSdkVersion") as int
        ndk {
            abiFilters.addAll(getProperty("unity.abiFilters").tokenize(','))
            debugSymbolLevel getProperty("unity.debugSymbolLevel")
        }
        versionCode getProperty("unity.versionCode") as int
        versionName getProperty("unity.versionName")
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile    ('proguard-android-optimize.txt'), 'proguard-rules. pro'
        }
    }
}
```

3. Create the following folders inside the `MyFeature.androidlib` folder:

- `MyFeature.androidlib/src`

- `MyFeature.androidlib/src/main`

4. Create an `AndroidManifest.xml` file inside the `MyFeature.androidlib/src/main` folder and add the following code:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"/>
```

5. Create a file named `Controller.java` inside the `MyFeature.androidlib/src/main/java/com/company/feature/` folder and add the following code:

```java
package com.company.feature;

public class Controller
{
    public static String getFoo()
    {
        return "This is my feature";
    }
}
```

The Android Library plug-in is now created.

## Use Android Library plug-ins

To use the Android Library plug-in within your Unity project, use the following code:

```cs
using UnityEngine;

public class FeatureUser : MonoBehaviour
{
    readonly string ControllerName = "com.company.feature.Controller";
    AndroidJavaClass m_Class;
    void Start()
    {
        m_Class = new AndroidJavaClass(ControllerName);
    }

    private void OnGUI()
    {
        GUILayout.Space(100);
        GUI.skin.label.fontSize = 30;

        if (m_Class != null)
        {
            GUILayout.Label($"{ControllerName}.getFoo() returns " + m_Class.CallStatic<string>("getFoo"));
        }
        else
        {
            GUILayout.Label($"{ControllerName} was not found?");
        }
    }
}
```

## Develop Android Library plug-ins

As the source files of the Android Library plug-ins aren’t visible in the Unity C# project, modifying or further developing the plug-in requires additional steps as follows:

1. Open the **Build Profiles** (menu: **File** > **Build Profiles**) window.

2. From the list of platforms in the **Platforms** panel, select **Android**.

3. Under **Platform Settings**, enable **Export Project** and **Symlink Sources**.

4. Select **Export**.

5. Select the destination folder and click **Select Folder** to start the export process.

6. After Unity exports the Gradle project, import the Gradle project into Android Studio.

You can develop your Android Library plug-in from Android Studio. As the Unity project directly references the plug-in, any modifications to the Android Library plug-in automatically reflect in the Unity project.

## Additional resources

- [Export an Android project](android-export-process.html)

Introducing Android Library and Android Archive plug-ins

Import an Android Library plug-in
