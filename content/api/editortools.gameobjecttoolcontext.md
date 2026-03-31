This version of Unity is unsupported.



# GameObjectToolContext





class in
          UnityEditor.EditorTools



/



Inherits from:[EditorTools.EditorToolContext](EditorTools.EditorToolContext.html)


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



This class represents the default context for manipulation tools. When [GameObjectToolContext](EditorTools.GameObjectToolContext.html) is active, manipulation tools affect the transform property of GameObjects in the [SceneView](SceneView.html) [Selection](Selection.html).





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| target | The object being inspected. |
| targets | An array of the objects being inspected. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetAdditionalToolTypes | Get an additional collection of tools to display in the same category as the built-in transform tools. |
| OnActivated | Invoked after this EditorToolContext becomes the active tool context. |
| OnToolGUI | Implements any common functionality for the set of manipulation tools available for this context. |
| OnWillBeDeactivated | Invoked before this EditorToolContext stops being the active tool context. |
| PopulateMenu | Adds menu items to the Scene view context menu. |
| ResolveTool | Returns the matching EditorTool type for the specified Tool given the context. |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |



### Protected Methods

| Method | Description |
| --- | --- |
| GetEditorToolType | Defines the EditorTool type for a given Tool. |



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
| CreateInstance | Creates an instance of a scriptable object. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |



### Messages

| Message | Description |
| --- | --- |
| Awake | Called when an instance of ScriptableObject is created. |
| OnDestroy | This function is called when the scriptable object will be destroyed. |
| OnDisable | This function is called when the scriptable object goes out of scope. |
| OnEnable | This function is called when the object is loaded. |
| OnValidate | Editor-only function that Unity calls when the script is loaded or a value changes in the Inspector. |
| Reset | Reset to default values. |




            
