This version of Unity is unsupported.



# TextAsset





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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




                [Switch to Manual](../Manual/class-TextAsset.html)














### Description



Represents a raw text or binary file asset.





You can use raw text files in your project as assets and get their contents through
this class. For more information, see [text](TextAsset-text.html).

You can access the file as a raw byte array to access data from binary files. For more
information on how to access data from binary files, see [bytes](TextAsset-bytes.html) and [GetData](TextAsset.GetData.html).

For more information about importing text or binary files into your project as Text Assets,
see [Text Asset](../Manual/class-TextAsset.html).





### Properties



| Property | Description |
| --- | --- |
| bytes | The raw bytes of the text asset. (Read Only) |
| dataSize | The size of the text asset data in bytes. (Read Only) |
| text | The text contents of the file as a string. (Read Only) |





### Constructors



| Constructor | Description |
| --- | --- |
| TextAsset | Creates a new TextAsset with specified text contents. |





### Public Methods



| Method | Description |
| --- | --- |
| GetData | Gets raw text asset data. |
| ToString | Returns the contents of the TextAsset as a read-only string. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |




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





            
