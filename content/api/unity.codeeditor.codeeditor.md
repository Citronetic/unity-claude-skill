This version of Unity is unsupported.



# CodeEditor





class in
          Unity.CodeEditor


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



Handles interaction with the code editor.





### Static Properties



| Property | Description |
| --- | --- |
| CurrentEditorPath | The path to the external code editor that Unity uses used to open script assets. |
| Editor | A singleton instance of CodeEditor. The Unity Editor references this instance to handle code editor callbacks. |





### Properties



| Property | Description |
| --- | --- |
| CurrentCodeEditor | Returns the current IExternalCodeEditor instance for the code editor. |
| CurrentInstallation | Returns the current CodeEditor.Installation instance for the code editor. |





### Public Methods



| Method | Description |
| --- | --- |
| GetCodeEditorForPath | Each registered code editor package has an instance of IExternalCodeEditor. This method invokes IExternalCodeEditor.TryGetInstallationForPath on that instance. It returns the first instance that returns a valid installation. |
| GetFoundScriptEditorPaths | Collects all installations from registered instances of IExternalCodeEditor. This is done using IExternalCodeEditor.Installations. |
| GetInstallationForPath | Each registered code editor package has an instance of IExternalCodeEditor. This method invokes IExternalCodeEditor.TryGetInstallationForPath on that instance. It finds the first instance that returns a valid installation, and returns the installation. |
| SetCodeEditor | Sets the path to the code editor that Unity uses to open script assets. |





### Static Methods



| Method | Description |
| --- | --- |
| OSOpenFile | Open an application with a quoted string of arguments. |
| ParseArgument | Parse a string using the rules defined under External Tools. |
| QuoteForProcessStart | Quotes a string to pass to Process.Start as a single argument, and appends it to this string builder. |
| Register | Register an instance of IExternalCodeEditor to use when populating Preferences/External Tools menu. Calls ref::Initialize if you select the instance. |
| Unregister | Remove an instance of IExternalCodeEditor from the list of registered code editors. Calls ref::Initialize if you select the instance. |


            
