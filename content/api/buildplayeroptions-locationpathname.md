This version of Unity is unsupported.



# [BuildPlayerOptions](BuildPlayerOptions.html).locationPathName




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












                    public string locationPathName;






### Description



Specifies the path for the application to be built.





The value of `locationPathName` determines both the location and the file name of the built application.

                This path can be either relative to the project directory or an absolute path.

                Unity does not modify this path automatically, so it must include the correct file name and extension based on the target platform.

                If the directory doesn't exist, Unity will create the directory automatically during the build process.

**Guidelines**:



          - The path must include your chosen file name. For example, `Builds/MyApp.apk` for Android, `Builds/MyApp.exe` for Windows. Unity does not append extensions automatically.

          - For Android Package, use the `.apk` extension and for Android App Bundle, use the `.aab` extension.

          - For Windows, use the `.exe` extension.

          - For Mac, use the `.app` extension.

          - If the path is relative (e.g., `Builds/MyApp`), Unity will treat it as relative to the project root directory.

          - To place the build outside the project directory,  specify an absolute path such as `C:/MyBuilds/MyApp.exe`.





Don't use the following project directories for `locationPathName`:



          - Assets/

          - ProjectSettings/

          - Library/

          - Packages/

          - UserSettings/





**Note:** Paths pointing directly to the user desktop are not allowed.


            
