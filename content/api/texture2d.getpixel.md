This version of Unity is unsupported.



# [Texture2D](Texture2D.html).GetPixel




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

public [Color](Color.html) GetPixel(int x,
int y,
int mipLevel = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x coordinate of the pixel to get. The range is 0 through (texture width - 1). |
| y | The y coordinate of the pixel to get. The range is 0 through (texture height - 1). |
| mipLevel | The mipmap level to sample. The range is 0 through the texture's Texture.mipmapCount. The default value is 0. |





### Returns



**Color**
        The pixel color.





### Description



Gets the pixel color at coordinates (`x`, `y`).





This method gets pixel data from the texture in CPU memory. [Texture.isReadable](Texture-isReadable.html) must be `true`.

The lower left corner is (0, 0). If the pixel coordinate is outside the texture's dimensions, Unity clamps or repeats it, depending on the texture's [TextureWrapMode](TextureWrapMode.html).

`GetPixel` might be slower than some other texture methods because it converts the format the texture uses into [Color](Color.html). `GetPixel` also needs to decompress compressed textures, and use memory to store the decompressed area. To get pixel data more quickly, use [GetPixelData](Texture2D.GetPixelData.html) instead.

If you need to get a large block of pixels, it might be faster to use [GetPixels32](Texture2D.GetPixels32.html) or [GetPixels](Texture2D.GetPixels.html).

You can't use `GetPixel` with textures that use Crunch texture compression.

Additional resources: [GetPixels32](Texture2D.GetPixels32.html), [GetPixels](Texture2D.GetPixels.html), [SetPixel](Texture2D.SetPixel.html), [GetPixelBilinear](Texture2D.GetPixelBilinear.html).


              


```
// Sets the y coordinate of the transform to follow a heightmapusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Texture2D heightmap;
    public Vector3 size = new Vector3(100, 10, 100);    void Update()
    {
        int x = Mathf.FloorToInt(transform.position.x / size.x * heightmap.width);
        int z = Mathf.FloorToInt(transform.position.z / size.z * heightmap.height);
        Vector3 pos = transform.position;
        pos.y = heightmap.GetPixel(x, z).grayscale * size.y;
        transform.position = pos;
    }
}
```


            
