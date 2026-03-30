This version of Unity is unsupported.



# PlistDocument





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



Represents an Apple property list document. For more information on property lists, refer to [Apple's documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44).


              


```
using System;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class PlistDocumentExample
{
    [PostProcessBuild]
    public static void PlistDocumentAPIExample(BuildTarget buildTarget, string pathToBuiltProject)
    {
        if (buildTarget == BuildTarget.iOS)
        {
            // Read the contents of the Info.plist file that was generated during the build
            string plistPath = pathToBuiltProject + "/Info.plist";
            PlistDocument plist = new PlistDocument();
            plist.ReadFromFile(plistPath);

            // Get root plist element
            PlistElementDict rootDict = plist.root;            // Use helper methods such as SetBoolean, SetInteger or SetDate to modify or create new Info.plist entries
            // If a specified key doesn't already exist in the Info.plist, a new entry will be created
            rootDict.SetBoolean("ExampleBoolean", true);
            rootDict.SetInteger("ExampleInteger", 10);
            rootDict.SetDate("ExampleDate", DateTime.Today);            // Write the changes to the Info.plist file
            plist.WriteToFile(plistPath);
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| root | The root element of the property list document. |
| version | The version of the property list document. At the moment Apple uses '1.0' for all property list files. |





### Constructors



| Constructor | Description |
| --- | --- |
| PlistDocument | Creates a new property list document instance. |





### Public Methods



| Method | Description |
| --- | --- |
| Create | Create a new property list Document. |
| ReadFromFile | Reads the document from a file identified by the given path. |
| ReadFromStream | Reads the project from the given text reader. |
| ReadFromString | Reads the document from the given string. |
| WriteToFile | Writes the project contents to the specified file. |
| WriteToStream | Writes the document contents to the specified text writer. |
| WriteToString | Writes the document contents to a string. |


            
