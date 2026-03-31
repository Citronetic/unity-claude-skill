This version of Unity is unsupported.



# [BuildOptions](BuildOptions.html).BuildScriptsOnly




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Only build the scripts in a project.





Before you can use `BuildScriptsOnly`, you need to build the whole Project. Then you can run builds that only have script changes. Rebuilding the player data will be skipped for faster iteration speed.

Platforms which support the incremental build pipeline will automatically run scripts only builds if Unity detects that the data files have not changed, even if `BuildScriptsOnly` is not used. You can still use `BuildScriptsOnly` to force a script only build and ignore any pending player data changes.

The following script example uses `BuildScriptsOnly`. The script builds the entire Project initially. After you've run the script for the first time, you can use the script to only compile any changes you make to the script. To try this out, add the following Editor script and the game script to your project.


              


```
using UnityEditor;
using UnityEngine;public class EditorExample : MonoBehaviour
{
    [MenuItem("Build/Build scripts")]
    public static void MyBuild()
    {
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
        buildPlayerOptions.scenes = new[] { "Assets/scene.unity" };
        buildPlayerOptions.locationPathName = "scriptBuilds";
        buildPlayerOptions.target = BuildTarget.StandaloneOSX;        // use these options for the first build
        buildPlayerOptions.options = BuildOptions.Development;        // use these options for building scripts
        // buildPlayerOptions.options = BuildOptions.BuildScriptsOnly | BuildOptions.Development;        BuildPipeline.BuildPlayer(buildPlayerOptions);
    }
}
```





Attach the following simple script to an empty GameObject in the scene:


              


```
using UnityEngine;// Change the camera to the usual blue color and display a label.public class ExampleClass : MonoBehaviour
{
    private Camera cam;    void Awake()
    {
        cam = Camera.main;
        cam.clearFlags = CameraClearFlags.SolidColor;
    }    void OnGUI()
    {
        GUI.Label(new Rect(100, 100, 100, 50), "ExampleClass");
    }
}
```





Now run the `Build/Build scripts` example. This builds an executable.  Run that executable and a dark blue window with the label appears. Next add some cubes and spheres to the Project. Make the following script changes:


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    private Camera cam;    // added line
    private float delay;    void Awake()
    {
        delay = 0.0f;
        cam = Camera.main;
        cam.clearFlags = CameraClearFlags.SolidColor;
    }    // added script code
    void FixedUpdate()
    {
        delay = delay + Time.deltaTime;        if (delay > 0.5f)
        {
            cam.backgroundColor = new Color(0.0f, 0.0f, Random.Range(0.0f, 0.25f));
            delay = 0.0f;
        }
    }    void OnGUI()
    {
        GUI.Label(new Rect(100, 100, 100, 50), "ExampleClass");
    }
}
```





Finally, swap the commented lines in the `EditorExample` script:


              


```
using UnityEditor;
using UnityEngine;public class EditorExample : MonoBehaviour
{
    [MenuItem("Build/Build scripts")]
    public static void MyBuild()
    {
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
        buildPlayerOptions.scenes = new[] { "Assets/scene.unity" };
        buildPlayerOptions.locationPathName = "scriptBuilds";
        buildPlayerOptions.target = BuildTarget.StandaloneOSX;        // use these options for the first build
        // buildPlayerOptions.options = BuildOptions.Development;        // use these options for building scripts
        buildPlayerOptions.options = BuildOptions.BuildScriptsOnly | BuildOptions.Development;        BuildPipeline.BuildPlayer(buildPlayerOptions);
    }
}
```





Use the `Build/Build scripts` to regenerate the application and then launch it. The application will now show random changes to the background color. However the added cubes and spheres are not visible.


            
