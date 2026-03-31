This version of Unity is unsupported.



# [Renderer](Renderer.html).sortingOrder




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












                    public int sortingOrder;






### Description



Renderer's order within a sorting layer.





You can group GameObjects into layers in their [SpriteRenderer](SpriteRenderer.html) component. This is called the [SortingLayer](SortingLayer.html).
The sorting order decides what priority each GameObject has to the Renderer within each Sorting Layer.
The lower the number you give it, the further back the GameObject appears. The higher the number, the closer the GameObject looks to the Camera. This is very effective when creating 2D scroller games, as you may want certain GameObjects on the same layer but certain parts to appear in front of others, for example, layering clouds and making them appear in front of the sky.

**Note**: The value must be between -32768 and 32767.


              


```
//Attach a script like this to a Sprite GameObject (Create>2D Object>Sprite). Assign a Sprite to it in the Sprite field.
//Repeat the first step for another two Sprites and make them overlap each other slightly. This shows how the order number changes the view of the Sprites.using UnityEngine;
public class MyScript : MonoBehaviour
{
    public int MyOrder;
    public string MyName;
}
```


              


```
//Create a folder named “Editor” (Right click in your Assets folder, Create>Folder)
//Put this script in the folder.
//This script adds fields to the Inspector of your GameObjects with the MyScript script attached. Edit the fields to change the layer and order number each Sprite belongs to.using UnityEngine;
using UnityEditor;// Custom Editor using SerializedProperties.[CustomEditor(typeof(MyScript))]
public class MeshSortingOrderExample : Editor
{
    SerializedProperty m_Name;
    SerializedProperty m_Order;    private SpriteRenderer rend;    void OnEnable()
    {
        // Fetch the properties from the MyScript script and set up the SerializedProperties.
        m_Name = serializedObject.FindProperty("MyName");
        m_Order = serializedObject.FindProperty("MyOrder");
    }    void CheckRenderer()
    {
        //Check that the GameObject you select in the hierarchy has a SpriteRenderer component
        if (Selection.activeGameObject.GetComponent<SpriteRenderer>())
        {
            //Fetch the SpriteRenderer from the selected GameObject
            rend = Selection.activeGameObject.GetComponent<SpriteRenderer>();
            //Change the sorting layer to the name you specify in the TextField
            //Changes to Default if the name you enter doesn't exist
            rend.sortingLayerName = m_Name.stringValue;
            //Change the order (or priority) of the layer
            rend.sortingOrder = m_Order.intValue;
        }
    }    public override void OnInspectorGUI()
    {
        // Update the serializedProperty - always do this in the beginning of OnInspectorGUI.
        serializedObject.Update();
        //Create fields for each SerializedProperty
        EditorGUILayout.PropertyField(m_Name, new GUIContent("Name"));
        EditorGUILayout.PropertyField(m_Order, new GUIContent("Order"));
        //Update the name and order of the Renderer properties
        CheckRenderer();        // Apply changes to the serializedProperty - always do this in the end of OnInspectorGUI.
        serializedObject.ApplyModifiedProperties();
    }
}
```


            
