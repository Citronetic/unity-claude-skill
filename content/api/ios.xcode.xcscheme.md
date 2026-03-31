This version of Unity is unsupported.



# XcScheme





class in
          UnityEditor.iOS.Xcode


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



Represents an Xcode scheme (xcscheme file).


              


```
#if UNITY_IOS
string schemePath = pathToBuiltProject + "/Unity-iPhone.xcodeproj/xcshareddata/xcschemes/Unity-iPhone.xcscheme";var xcscheme = new XcScheme();
xcscheme.ReadFromFile(schemePath);xcscheme.SetMetalValidationOnRun(XcScheme.MetalValidation.Extended);
xcscheme.SetFrameCaptureModeOnRun(XcScheme.FrameCaptureMode.Metal);
xcscheme.AddArgumentPassedOnLaunch("--myarg = 1");xcscheme.WriteToFile(schemePath);
#endif
```





### Constructors



| Constructor | Description |
| --- | --- |
| XcScheme | Creates a new instance of the XcScheme class. |





### Public Methods



| Method | Description |
| --- | --- |
| AddArgumentPassedOnLaunch | Adds command line arguments to be passed on launch. |
| GetBuildConfiguration | Returns the build configuration used for running. |
| ReadFromFile | Reads the scheme from a file identified by the given path. |
| ReadFromStream | Reads the scheme from the given text reader. |
| ReadFromString | Reads the scheme from the given string. |
| SetBuildConfiguration | Sets the build configuration to be used for running. |
| SetDebugExecutable | Sets the **Debug executable** toggle in the scheme. |
| SetFrameCaptureModeOnRun | Sets whether frame capture should be enabled. |
| SetMetalValidationOnRun | Sets the **Metal API Validation** option in the scheme. |
| WriteToFile | Writes the scheme contents to the specified file. |
| WriteToStream | Writes the scheme contents to the specified text writer. |
| WriteToString | Writes the contents of the scheme to a string. |


            
