This version of Unity is unsupported.



# SceneAsset





class in
          UnityEditor



/



Inherits from:[Object](Object.html)


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



SceneAsset is used to reference Scene objects in the Editor.





This can be used as the type for ObjectField UI elements, to allow the user to pick a Scene object as the value of the field.

This example shows how to pick a Scene in the editor. The ScenePicker component is placed on a game object in the Scene:


              


```
using UnityEngine;public class ScenePicker : MonoBehaviour
{
    [SerializeField]
    public string scenePath;
}
```





The ScenePickerEditor script must be in the Editor directory of the project. It provides the custom inspector in the editor that uses the SceneAsset class in an ObjectField to allow the user to pick a Scene.


              


```
using UnityEngine;
using UnityEditor;[CustomEditor(typeof(ScenePicker), true)]
public class ScenePickerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        ScenePicker picker = target as ScenePicker;
        SceneAsset oldScene = AssetDatabase.LoadAssetAtPath<SceneAsset>(picker.scenePath);        serializedObject.Update();        EditorGUI.BeginChangeCheck();
        SceneAsset newScene = EditorGUILayout.ObjectField("scene", oldScene, typeof(SceneAsset), false) as SceneAsset;        if (EditorGUI.EndChangeCheck())
        {
            string newPath = AssetDatabase.GetAssetPath(newScene);
            SerializedProperty scenePathProperty = serializedObject.FindProperty("scenePath");
            scenePathProperty.stringValue = newPath;
        }
        serializedObject.ApplyModifiedProperties();
    }
}
```





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





            
