# CLI Tools -- Synthesis Notes

> Source: 6 pages from manual(6)
> Generated: 2026-03-31
> Status: CURATED

## Key Concepts

**Unity Command-Line Arguments**: Unity Editor can run entirely headless from the command line. Use `-batchmode` to run without UI, `-quit` to exit after execution, `-executeMethod` to run a static C# method. Essential for CI/CD pipelines, automated builds, and batch processing.

**Batch Mode**: `-batchmode` runs Unity without the GUI. No Editor windows open, no scene view rendering. Much faster for builds and automated tasks. Always pair with `-quit` to ensure Unity exits after the task completes. Use `-logFile <path>` to capture output.

**License Activation**: For CI runners, activate Unity license via command line: `-serial <key> -username <email> -password <pass>`. Return license with `-returnlicense`. For floating licenses or CI, use Unity Licensing Server.

**Test Runner CLI**: Run Unity Test Framework from command line with `-runTests`. Specify `-testPlatform` (EditMode, PlayMode, or a BuildTarget), `-testFilter` for specific tests, `-testResults` for NUnit XML output. See testing.md for full reference.

## Patterns & Workflows

### Common Command-Line Patterns
```bash
# Open project without loading scene (fastest startup)
Unity -batchmode -quit -projectPath /path/to/project -logFile -

# Build a player
Unity -batchmode -quit -projectPath /path/to/project \
  -executeMethod BuildScript.BuildAndroid \
  -logFile build.log

# Import assets and reimport all
Unity -batchmode -quit -projectPath /path/to/project \
  -importPackage /path/to/package.unitypackage \
  -logFile import.log

# Run tests and output results
Unity -batchmode -projectPath /path/to/project \
  -runTests \
  -testPlatform EditMode \
  -testResults ./test-results.xml \
  -logFile test.log

# Run specific test by filter
Unity -batchmode -projectPath /path/to/project \
  -runTests \
  -testPlatform PlayMode \
  -testFilter "HealthTests" \
  -testResults ./results.xml

# Build with custom scripting defines
Unity -batchmode -quit -projectPath /path/to/project \
  -executeMethod BuildScript.Build \
  -logFile build.log

# Asset import overrides for faster CI builds
Unity -batchmode -quit -projectPath /path/to/project \
  -overrideMaxTextureSize 256 \
  -overrideTextureCompression ForceUncompressed \
  -executeMethod BuildScript.Build

# Activate license on CI runner
Unity -batchmode -quit \
  -serial XXXX-XXXX-XXXX-XXXX-XXXX \
  -username user@example.com \
  -password "password" \
  -logFile activation.log

# Return license (cleanup CI runner)
Unity -batchmode -quit -returnlicense -logFile return.log
```

### CI Build Script (Callable from -executeMethod)
```csharp
using UnityEditor;
using UnityEngine;
using System;

public static class CIBuildScript
{
    // Called via: Unity -executeMethod CIBuildScript.Build
    public static void Build()
    {
        // Read environment variables for CI configuration
        string buildTarget = Environment.GetEnvironmentVariable("BUILD_TARGET") ?? "Android";
        string buildPath = Environment.GetEnvironmentVariable("BUILD_PATH") ?? "Builds/output";

        BuildTarget target = buildTarget switch
        {
            "Android" => BuildTarget.Android,
            "iOS" => BuildTarget.iOS,
            "WebGL" => BuildTarget.WebGL,
            "StandaloneWindows64" => BuildTarget.StandaloneWindows64,
            "StandaloneOSX" => BuildTarget.StandaloneOSX,
            "StandaloneLinux64" => BuildTarget.StandaloneLinux64,
            _ => BuildTarget.Android
        };

        var options = new BuildPlayerOptions
        {
            scenes = GetEnabledScenes(),
            locationPathName = buildPath,
            target = target,
            options = BuildOptions.None
        };

        var report = BuildPipeline.BuildPlayer(options);

        // Exit with error code for CI
        if (report.summary.result != UnityEditor.Build.Reporting.BuildResult.Succeeded)
        {
            Debug.LogError($"Build failed: {report.summary.result}");
            EditorApplication.Exit(1);
        }
        else
        {
            Debug.Log($"Build succeeded: {report.summary.totalSize / (1024*1024):F1}MB");
            EditorApplication.Exit(0);
        }
    }

    private static string[] GetEnabledScenes()
    {
        var scenes = EditorBuildSettings.scenes;
        var enabled = new System.Collections.Generic.List<string>();
        foreach (var scene in scenes)
        {
            if (scene.enabled) enabled.Add(scene.path);
        }
        return enabled.ToArray();
    }
}
```

### Profiler from Command Line
```bash
# Run profiler and capture data
Unity -batchmode -projectPath /path/to/project \
  -executeMethod ProfilerScript.CaptureProfile \
  -logFile profiler.log

# Profiler-specific arguments
Unity -batchmode -projectPath /path/to/project \
  -profiler-enable \
  -profiler-log-file profiler-data.raw \
  -profiler-maxusedmemory 1073741824 \
  -executeMethod ProfilerScript.RunBenchmark
```

## API Quick Reference

| CLI Argument | Purpose |
|-------------|---------|
| `-batchmode` | Run without GUI (headless) |
| `-quit` | Exit after completing execution |
| `-projectPath <path>` | Open specific project |
| `-executeMethod <Class.Method>` | Run static C# method on launch |
| `-logFile <path>` | Write log to file (use `-` for stdout) |
| `-runTests` | Run Unity Test Framework |
| `-testPlatform <mode>` | Test mode: EditMode, PlayMode, or BuildTarget |
| `-testFilter <name>` | Filter tests by name/pattern |
| `-testResults <path>` | Write NUnit XML test results |
| `-buildTarget <target>` | Set build target platform |
| `-overrideMaxTextureSize <N>` | Override texture import max size |
| `-overrideTextureCompression <mode>` | Override texture compression |
| `-serial <key>` | Activate Unity license |
| `-returnlicense` | Deactivate Unity license |
| `-nographics` | Skip GPU initialization (server builds) |
| `-disable-assembly-updater` | Skip API updater (faster CI imports) |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Run CI builds with GUI | Use `-batchmode -quit` | GUI wastes resources and causes hangs on headless servers |
| Forget `-logFile` on CI | Always specify `-logFile <path>` or `-logFile -` | Without logs, CI failures are impossible to diagnose |
| Hardcode paths in build scripts | Read from env vars or CLI args | CI environments have different paths than local machines |
| Skip `-quit` with `-batchmode` | Always pair them | Without `-quit`, Unity stays running and blocks CI |
| Use `-runTests` with `-quit` | Use `-runTests` without `-quit` (test runner quits itself) | `-quit` can terminate before tests finish |
| Leave licenses activated on CI | Use `-returnlicense` in cleanup step | Floating licenses have a limited seat count |

## Version Notes

- **Unity 6.0+**: `-overrideMaxTextureSize` and `-overrideTextureCompression` available for faster CI imports.
- **Unity 6.0+**: Build Profiles can be specified via CLI for per-profile builds.
- **Unity 6.0+**: `-disable-assembly-updater` skips automatic API update checks for faster CI.
- **Unity 6.0+**: Multi-process builds (`-buildMultiProcess`) parallelize compilation.
