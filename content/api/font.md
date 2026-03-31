This version of Unity is unsupported.



# Font





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.TextRenderingModule](UnityEngine.TextRenderingModule.html)


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



Script interface for [font assets](../Manual/class-Font.html).





You can use this class to dynamically switch fonts on Text Meshes.

Additional resources: [TextMesh](TextMesh.html).





### Properties



| Property | Description |
| --- | --- |
| ascent | The ascent of the font. |
| characterInfo | Access an array of all characters contained in the font texture. |
| dynamic | Is the font a dynamic font. |
| fontSize | The default size of the font. |
| lineHeight | The line height of the font. |
| material | The material used for the font display. |





### Constructors



| Constructor | Description |
| --- | --- |
| Font | Create a new Font. |





### Public Methods



| Method | Description |
| --- | --- |
| GetCharacterInfo | Get rendering info for a specific character. |
| HasCharacter | Does this font have a specific character? |
| RequestCharactersInTexture | Request characters to be added to the font texture (dynamic fonts only). |





### Static Methods



| Method | Description |
| --- | --- |
| CreateDynamicFontFromOSFont | Creates a Font object which lets you render a font installed on the user machine. |
| GetMaxVertsForString | Returns the maximum number of verts that the text generator may return for a given string. |
| GetOSInstalledFontNames | Get names of fonts installed on the machine. |
| GetPathsToOSFonts | Gets the file paths of the fonts that are installed on the operating system. |





### Events



| Event | Description |
| --- | --- |
| textureRebuilt | Set a function to be called when the dynamic font texture is rebuilt. |





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
| ToString | Returns the name of the object. |




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





            
