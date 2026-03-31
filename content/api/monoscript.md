This version of Unity is unsupported.



# MonoScript





class in
          UnityEditor



/



Inherits from:[TextAsset](TextAsset.html)


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



Representation of Script assets.





This class represents C# files stored in the project.





### Public Methods



| Method | Description |
| --- | --- |
| GetClass | Returns the System.Type object of the class implemented by this script. |





### Static Methods



| Method | Description |
| --- | --- |
| FromMonoBehaviour | Returns the MonoScript object containing specified MonoBehaviour. |
| FromScriptableObject | Returns the MonoScript object containing specified ScriptableObject. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |
| bytes | The raw bytes of the text asset. (Read Only) |
| dataSize | The size of the text asset data in bytes. (Read Only) |
| text | The text contents of the file as a string. (Read Only) |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| GetData | Gets raw text asset data. |
| ToString | Returns the contents of the TextAsset as a read-only string. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
