This version of Unity is unsupported.



# Vector3Int Constructor




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















## Declaration

public Vector3Int(int x,
int y,
int z);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The X component of the Vector3Int. |
| y | The Y component of the Vector3Int. |
| z | The Z component of the Vector3Int. |





### Description



Initializes and returns an instance of a new Vector3Int with x, y, z components.


              


```
// Attach this script to a GameObject.
// Attach a Tilemap component to the GameObject (Click Add Component button in the Inspector window and go to 2D<Tilemap)
// This script sets a Tile at a Vector3Int position
using UnityEngine;
using UnityEngine.Tilemaps;public class Vector3IntCtorExample : MonoBehaviour
{
    Vector3Int m_Position;
    Tilemap m_Tilemap;
    Tile m_Tile;    void Start()
    {
        // Position to set the Tile at
        m_Position = new Vector3Int(1, 5, -2);
        // Fetch the Tilemap you attach to the GameObject
        m_Tilemap = GetComponent<Tilemap>();
        // Create a Tile
        m_Tile = ScriptableObject.CreateInstance<Tile>();
    }    void Update()
    {
        // Sets a Tile at the position if a Tile does not exist at the position on the Tilemap
        if (!m_Tilemap.HasTile(m_Position))
            m_Tilemap.SetTile(m_Position, m_Tile);
    }
}
```




---








## Declaration

public Vector3Int(int x,
int y);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The X component of the Vector3Int. |
| y | The Y component of the Vector3Int. |





### Description



Initializes and returns an instance of a new Vector3Int with x and y components and sets `z` to zero.


            
