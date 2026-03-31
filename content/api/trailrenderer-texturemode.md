This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).textureMode




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




                [Switch to Manual](../Manual/class-TrailRenderer.html)







                    public [LineTextureMode](LineTextureMode.html) textureMode;






### Description



Choose whether the U coordinate of the trail texture is tiled or stretched.





Stretching maps the texture along the trail with no repeats. Tiling maps the texture along the trail with repeats every world unit. To change the repeat rate, use [TrailRenderer.textureScale](TrailRenderer-textureScale.html) or [Material.SetTextureScale](Material.SetTextureScale.html).


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;[RequireComponent(typeof(TrailRenderer))]
public class ExampleClass : MonoBehaviour
{
    public LineTextureMode textureMode = LineTextureMode.Stretch;
    public float textureScale = 1.0f;
    private TrailRenderer tr;    void Start()
    {
        tr = GetComponent<TrailRenderer>();
        tr.material = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        tr.textureMode = textureMode;
        tr.textureScale = new Vector2(textureScale, 1.0f);
        tr.transform.position = new Vector3(Mathf.Sin(Time.time * 1.51f) * 7.0f, Mathf.Cos(Time.time * 1.27f) * 4.0f, 0.0f);
    }    void OnGUI()
    {
        textureMode = GUI.Toggle(new Rect(25, 25, 200, 30), textureMode == LineTextureMode.Tile, "Tiled") ? LineTextureMode.Tile : LineTextureMode.Stretch;        GUI.Label(new Rect(25, 60, 200, 30), "Tile Amount");
        textureScale = GUI.HorizontalSlider(new Rect(125, 65, 200, 30), textureScale, 0.1f, 4.0f);
    }
}
```


            
