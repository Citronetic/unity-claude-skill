This version of Unity is unsupported.



# [LineRenderer](LineRenderer.html).textureScale




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




                [Switch to Manual](../Manual/class-LineRenderer.html)







                    public [Vector2](Vector2.html) textureScale;






### Description



A multiplier for the UV coordinates of the line texture.


              


```
using UnityEngine;
using System.Collections;
using UnityEditor;[RequireComponent(typeof(LineRenderer))]
public class ExampleClass : MonoBehaviour
{
    public LineTextureMode textureMode = LineTextureMode.Stretch;
    public float textureScale = 1.0f;
    private LineRenderer lr;    void Start()
    {
        lr = GetComponent<LineRenderer>();
        lr.material = new Material(Shader.Find("Sprites/Default"));        // Set some positions
        Vector3[] positions = new Vector3[3];
        positions[0] = new Vector3(-2.0f, -1.0f, 0.0f);
        positions[1] = new Vector3(0.0f, -0.5f, 0.0f);
        positions[2] = new Vector3(2.0f, -1.0f, 0.0f);
        lr.positionCount = positions.Length;
        lr.SetPositions(positions);
    }    void Update()
    {
        lr.textureMode = textureMode;
        lr.textureScale = new Vector2(textureScale, 1.0f);
    }    void OnGUI()
    {
        textureMode = GUI.Toggle(new Rect(25, 25, 200, 30), textureMode == LineTextureMode.Tile, "Tiled") ? LineTextureMode.Tile : LineTextureMode.Stretch;        GUI.Label(new Rect(25, 60, 200, 30), "Texture Scale");
        textureScale = GUI.HorizontalSlider(new Rect(125, 65, 200, 30), textureScale, 0.1f, 4.0f);
    }
}
```


            
