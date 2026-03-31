[Image: image]

# Scriptable Object 入門

Tutorial

Beginner

+10XP

65 mins

0

Unity Technologies

[Image: Scriptable Object 入門]Summary

Scriptable Objects は素晴らしいデータコンテナです。Scriptable Objects は、シーン内のゲームオブジェクトにアタッチする必要がなく、プロジェクトのアセットとして保存することができます。多くの場合、データを保存するためだけのアセットとして使用されますが、オブジェクトをシリアライズするために使用することもでき、シーンの中でインスタンス化することもできます。このセッションではシリアライズについては詳しく説明しませんが、このテーマに触れ、Scriptable Objects がどのように役立つかを説明します。Scriptable Objects とは何かを説明するだけでなく、Scriptable Objects を使った非常に簡単な例をいくつか紹介します。

Resources

- [Unity Blog - Serialization in Unity](https://blogs.unity3d.com/2014/06/24/serialization-in-unity/?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035041005)
- [Learn - Persistence: Saving and Loading Data](https://learn.unity.com/tutorial/persistence-saving-and-loading-data)

Languages available:

日本語English日本語日本語

## 1. Scriptable Objects 入門 - ライブトレーニング（2016年2月）

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### MyScriptableObjectClass

```csharp
using UnityEngine;
using System.Collections;

[CreateAssetMenu(fileName = "Data", menuName = "Inventory/List", order = 1)]
public class MyScriptableObjectClass : ScriptableObject {
    public string objectName = "New MyScriptableObject";
    public bool colorIsRandom = false;
    public Color thisColor = Color.white;
    public Vector3[] spawnPoints;
}
```

#### UseMyScriptableObject

```csharp
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class UseMyScriptableObject : MonoBehaviour {
    public MyScriptableObjectClass myScriptableObject;
    private List<Light> myLights;

    // Use this for initialization
    void Start ()
    {
        myLights = new List<Light>();
        foreach (Vector3 spawn in myScriptableObject.spawnPoints)
        {
            GameObject myLight = new GameObject("Light");
            myLight.AddComponent <Light>();
            myLight.transform.position = spawn;
            myLight.GetComponent<Light>().enabled = false;
            if (myScriptableObject.colorIsRandom)
            {
                myLight.GetComponent<Light>().color = new Color (Random.Range (0.0f, 1.0f), Random.Range (0.0f, 1.0f), Random.Range (0.0f, 1.0f));
            }
            else
            {
                myLight.GetComponent<Light>().color = myScriptableObject.thisColor;
            }
            myLights.Add (myLight.GetComponent<Light>());
        }
    }

    // Update is called once per frame
    void Update () {
        if (Input.GetButtonDown ("Fire1"))
        {
            foreach (Light light in myLights)
            {
                light.enabled = !light.enabled;
            }
        }
        if (Input.GetButtonDown("Fire2"))
        {
            UpdateLights();
        }

    }

    void UpdateLights ()
    {
        foreach (var myLight in myLights)
        {
            myLight.color = new Color(Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f));
        }
    }
}
```

#### MakeScriptableObject

```csharp
using UnityEngine;
using System.Collections;
using UnityEditor;

public class MakeScriptableObject {
    [MenuItem("Assets/Create/My Scriptable Object")]
    public static void CreateMyAsset()
    {
        MyScriptableObjectClass asset = ScriptableObject.CreateInstance<MyScriptableObjectClass>();

        AssetDatabase.CreateAsset(asset, "Assets/NewScripableObject.asset");
        AssetDatabase.SaveAssets();

        EditorUtility.FocusProjectWindow();

        Selection.activeObject = asset;
    }
}
```

#### InventoryItem

```csharp
using UnityEngine;
using System.Collections;

[System.Serializable]                         //    Our Representation of an InventoryItem
public class InventoryItem
{
    public string itemName = "New Item";      //    What the item will be called in the inventory
    public Texture2D itemIcon = null;         //    What the item will look like in the inventory
    public Rigidbody itemObject = null;       //    Optional slot for a PreFab to instantiate when discarding
    public bool isUnique = false;             //    Optional checkbox to indicate that there should only be one of these items per game
    public bool isIndestructible = false;     //    Optional checkbox to prevent an item from being destroyed by the player (unimplemented)
    public bool isQuestItem = false;          //    Examples of additional information that could be held in InventoryItem
    public bool isStackable = false;          //    Examples of additional information that could be held in InventoryItem
    public bool destroyOnUse = false;         //    Examples of additional information that could be held in InventoryItem
    public float encumbranceValue = 0;        //    Examples of additional information that could be held in InventoryItem  !!!
}
```

#### InventoryItemList

```csharp
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class InventoryItemList : ScriptableObject
{
    public List<InventoryItem> itemList;
}
```

#### InventoryItemEditor

```csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using System.Collections.Generic;

public class InventoryItemEditor : EditorWindow {

    public InventoryItemList inventoryItemList;
    private int viewIndex = 1;

    [MenuItem ("Window/Inventory Item Editor %#e")]
    static void  Init ()
    {
        EditorWindow.GetWindow (typeof (InventoryItemEditor));
    }

    void  OnEnable () {
        if(EditorPrefs.HasKey("ObjectPath"))
        {
            string objectPath = EditorPrefs.GetString("ObjectPath");
            inventoryItemList = AssetDatabase.LoadAssetAtPath (objectPath, typeof(InventoryItemList)) as InventoryItemList;
        }

    }

    void  OnGUI () {
        GUILayout.BeginHorizontal ();
        GUILayout.Label ("Inventory Item Editor", EditorStyles.boldLabel);
        if (inventoryItemList != null) {
            if (GUILayout.Button("Show Item List"))
            {
                EditorUtility.FocusProjectWindow();
                Selection.activeObject = inventoryItemList;
            }
        }
        if (GUILayout.Button("Open Item List"))
        {
                OpenItemList();
        }
        if (GUILayout.Button("New Item List"))
        {
            EditorUtility.FocusProjectWindow();
            Selection.activeObject = inventoryItemList;
        }
        GUILayout.EndHorizontal ();

        if (inventoryItemList == null)
        {
            GUILayout.BeginHorizontal ();
            GUILayout.Space(10);
            if (GUILayout.Button("Create New Item List", GUILayout.ExpandWidth(false)))
            {
                CreateNewItemList();
            }
            if (GUILayout.Button("Open Existing Item List", GUILayout.ExpandWidth(false)))
            {
                OpenItemList();
            }
            GUILayout.EndHorizontal ();
        }

            GUILayout.Space(20);

        if (inventoryItemList != null)
        {
            GUILayout.BeginHorizontal ();

            GUILayout.Space(10);

            if (GUILayout.Button("Prev", GUILayout.ExpandWidth(false)))
            {
                if (viewIndex > 1)
                    viewIndex --;
            }
            GUILayout.Space(5);
            if (GUILayout.Button("Next", GUILayout.ExpandWidth(false)))
            {
                if (viewIndex < inventoryItemList.itemList.Count)
                {
                    viewIndex ++;
                }
            }

            GUILayout.Space(60);

            if (GUILayout.Button("Add Item", GUILayout.ExpandWidth(false)))
            {
                AddItem();
            }
            if (GUILayout.Button("Delete Item", GUILayout.ExpandWidth(false)))
            {
                DeleteItem(viewIndex - 1);
            }

            GUILayout.EndHorizontal ();
            if (inventoryItemList.itemList == null)
                Debug.Log("Inventory is empty");
            if (inventoryItemList.itemList.Count > 0)
            {
                GUILayout.BeginHorizontal ();
                viewIndex = Mathf.Clamp (EditorGUILayout.IntField ("Current Item", viewIndex, GUILayout.ExpandWidth(false)), 1, inventoryItemList.itemList.Count);
                //Mathf.Clamp (viewIndex, 1, inventoryItemList.itemList.Count);
                EditorGUILayout.LabelField ("of   " +  inventoryItemList.itemList.Count.ToString() + "  items", "", GUILayout.ExpandWidth(false));
                GUILayout.EndHorizontal ();

                inventoryItemList.itemList[viewIndex-1].itemName = EditorGUILayout.TextField ("Item Name", inventoryItemList.itemList[viewIndex-1].itemName as string);
                inventoryItemList.itemList[viewIndex-1].itemIcon = EditorGUILayout.ObjectField ("Item Icon", inventoryItemList.itemList[viewIndex-1].itemIcon, typeof (Texture2D), false) as Texture2D;
                inventoryItemList.itemList[viewIndex-1].itemObject = EditorGUILayout.ObjectField ("Item Object", inventoryItemList.itemList[viewIndex-1].itemObject, typeof (Rigidbody), false) as Rigidbody;

                GUILayout.Space(10);

                GUILayout.BeginHorizontal ();
                inventoryItemList.itemList[viewIndex-1].isUnique = (bool)EditorGUILayout.Toggle("Unique", inventoryItemList.itemList[viewIndex-1].isUnique, GUILayout.ExpandWidth(false));
                inventoryItemList.itemList[viewIndex-1].isIndestructible = (bool)EditorGUILayout.Toggle("Indestructable", inventoryItemList.itemList[viewIndex-1].isIndestructible,  GUILayout.ExpandWidth(false));
                inventoryItemList.itemList[viewIndex-1].isQuestItem = (bool)EditorGUILayout.Toggle("QuestItem", inventoryItemList.itemList[viewIndex-1].isQuestItem,  GUILayout.ExpandWidth(false));
                GUILayout.EndHorizontal ();

                GUILayout.Space(10);

                GUILayout.BeginHorizontal ();
                inventoryItemList.itemList[viewIndex-1].isStackable = (bool)EditorGUILayout.Toggle("Stackable ", inventoryItemList.itemList[viewIndex-1].isStackable , GUILayout.ExpandWidth(false));
                inventoryItemList.itemList[viewIndex-1].destroyOnUse = (bool)EditorGUILayout.Toggle("Destroy On Use", inventoryItemList.itemList[viewIndex-1].destroyOnUse,  GUILayout.ExpandWidth(false));
                inventoryItemList.itemList[viewIndex-1].encumbranceValue = EditorGUILayout.FloatField("Encumberance", inventoryItemList.itemList[viewIndex-1].encumbranceValue,  GUILayout.ExpandWidth(false));
                GUILayout.EndHorizontal ();

                GUILayout.Space(10);

            }
            else
            {
                GUILayout.Label ("This Inventory List is Empty.");
            }
        }
        if (GUI.changed)
        {
            EditorUtility.SetDirty(inventoryItemList);
        }
    }

    void CreateNewItemList ()
    {
        // There is no overwrite protection here!
        // There is No "Are you sure you want to overwrite your existing object?" if it exists.
        // This should probably get a string from the user to create a new name and pass it ...
        viewIndex = 1;
        inventoryItemList = CreateInventoryItemList.Create();
        if (inventoryItemList)
        {
            inventoryItemList.itemList = new List<InventoryItem>();
            string relPath = AssetDatabase.GetAssetPath(inventoryItemList);
            EditorPrefs.SetString("ObjectPath", relPath);
        }
    }

    void OpenItemList ()
    {
        string absPath = EditorUtility.OpenFilePanel ("Select Inventory Item List", "", "");
        if (absPath.StartsWith(Application.dataPath))
        {
            string relPath = absPath.Substring(Application.dataPath.Length - "Assets".Length);
            inventoryItemList = AssetDatabase.LoadAssetAtPath (relPath, typeof(InventoryItemList)) as InventoryItemList;
            if (inventoryItemList.itemList == null)
                inventoryItemList.itemList = new List<InventoryItem>();
            if (inventoryItemList) {
                EditorPrefs.SetString("ObjectPath", relPath);
            }
        }
    }

    void AddItem ()
    {
        InventoryItem newItem = new InventoryItem();
        newItem.itemName = "New Item";
        inventoryItemList.itemList.Add (newItem);
        viewIndex = inventoryItemList.itemList.Count;
    }

    void DeleteItem (int index)
    {
        inventoryItemList.itemList.RemoveAt (index);
    }
}
```

#### CreateInventoryItemList

```csharp
using UnityEngine;
using System.Collections;
using UnityEditor;

public class CreateInventoryItemList {
    [MenuItem("Assets/Create/Inventory Item List")]
    public static InventoryItemList  Create()
    {
        InventoryItemList asset = ScriptableObject.CreateInstance<InventoryItemList>();

        AssetDatabase.CreateAsset(asset, "Assets/InventoryItemList.asset");
        AssetDatabase.SaveAssets();
        return asset;
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
