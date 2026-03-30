This version of Unity is unsupported.



# PlistElementDict





class in
          UnityEditor.iOS.Xcode



/



Inherits from:[iOS.Xcode.PlistElement](iOS.Xcode.PlistElement.html)


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



Represents a dictionary element in plist document.


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
| this[string] | Convenience method to access the stored values. |
| values | The values stored in the dictionary element. |





### Constructors



| Constructor | Description |
| --- | --- |
| PlistElementDict | Creates new dictionary element. |





### Public Methods



| Method | Description |
| --- | --- |
| CreateArray | Convenience method to set a property to a new array element. |
| CreateDict | Convenience method to set a property to a new dictionary element. |
| SetBoolean | Convenience method to set a boolean property. |
| SetDate | Convenience method to set a date property. |
| SetInteger | Convenience method to set an integer property. |
| SetReal | Convenience method to set an real property. |
| SetString | Convenience method to set a string property. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| this[string] | Convenience method to access properties of a dictionary element. |






### Public Methods

| Method | Description |
| --- | --- |
| AsArray | Convenience function to convert to array element. |
| AsBoolean | Convenience function to convert to bool. |
| AsDate | Convenience function to convert to date. |
| AsDict | Convenience function to convert to dictionary element. |
| AsInteger | Convenience function to convert to integer. |
| AsReal | Convenience function to convert to float. |
| AsString | Convenience function to convert to string. |








            
