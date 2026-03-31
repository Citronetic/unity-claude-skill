This version of Unity is unsupported.



# [Texture2D](Texture2D.html).PackTextures




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

public Rect[] PackTextures(Texture2D[] textures,
int padding,
int maximumAtlasSize,
bool makeNoLongerReadable);






### Parameters



| Parameter | Description |
| --- | --- |
| textures | Array of textures to pack into the atlas. |
| padding | Padding in pixels between the packed textures. |
| maximumAtlasSize | Maximum size of the resulting texture. |
| makeNoLongerReadable | Should the texture be marked as no longer readable? |





### Returns



**Rect[]**
        An array of rectangles containing the UV coordinates in the atlas for each input texture, or null if packing fails.





### Description



Packs multiple Textures into a texture atlas.





This function will replace the current texture with the atlas made from the supplied textures.
The size, format and mipmaps of any of the textures can change after packing.

The resulting texture atlas will be as large as needed to fit all input textures but only up to `maximumAtlasSize` in
each dimension. If the input textures can't all fit into a texture atlas of the desired size then they will be
scaled down to fit.

The following conditions will cause the atlas to be created as an uncompressed texture using the [TextureFormat.RGBA32](TextureFormat.RGBA32.html) format:



          - If not all input textures are compressed.

          - If some input textures have mipmaps and others have none.

          - If the compressed input textures have mipmaps and padding > 0. This is due to alignment restrictions on the compressed texture formats.





If the texture atlas is compressed and has a padding value greater than zero, the padding value is rounded up to the next multiple of four. This happens because of alignment restrictions on compressed texuture formats.

The atlas packing code only supports the following input texture formats:



          - ARGB4444

          - ETC

          - ETC2

          - DXT1

          - DXT5

          - BC7

          - ASTC 4x4





All input textures must have the same compression format or be a mixture of compatible compression formats, otherwise the atlas format falls back to uncompressed.
Variants of the same compressed format can be mixed in an atlas, where they stay compressed:



          - [TextureFormat.DXT1](TextureFormat.DXT1.html) and TextureFormat::pref:DXT5 result in a [TextureFormat.DXT5](TextureFormat.DXT5.html) atlas.

          - [TextureFormat.ETC2_RGB](TextureFormat.ETC2_RGB.html), [TextureFormat.ETC_RGB4](TextureFormat.ETC_RGB4.html), and [TextureFormat.ETC2_RGBA8](TextureFormat.ETC2_RGBA8.html) result in a [TextureFormat.ETC2_RGBA8](TextureFormat.ETC2_RGBA8.html) atlas.





However, if the input textures mix unrelated formats, such as BC7 with ASTC 4x4 or DXT5, this causes the atlas packing code to fall back to [TextureFormat.RGBA32](TextureFormat.RGBA32.html).

If none of the input textures have mipmaps, the atlas also has no mipmaps.
Using compressed input textures of varying sizes with mipmaps will limit the resulting atlas mipcount to that of the smallest input texture minus two.
This is to ensure each atlas item mip level fills at least one block of compressed data.  This can lead to reduced GPU performance as the larger atlas items will be limited in their ability to reduce texture cache pressure by sampling lower resolution mip levels. For optimal performance it is recommended to pack input textures of similar sizes into different atlases.

Take the following compressed atlas example:



          - One item is 256x256 with a total of 9 mip levels.

          - Another item is 1024x2048 with a total of 12 mip levels.





The resulting compressed atlas will only have 7 mip levels:



          - The smallest item (256x256) needs to drop 2 of its mip levels (1x1 and 2x2) to satisfy the compression block size (4x4) alignment requirement.

          - The largest item (1024x2048) will need to drop 5 mip levels, with its resulting smallest mip level being 32x32.





Packing both textures into different atlases with similar item sizes, such as one for items with a minimum dimension of 256 and another with a minimum of 1024, will reduce the number of mip levels that are dropped when atlassing.

If `makeNoLongerReadable` is `true` then the texture will be marked as no longer readable
and memory will be freed after uploading to the GPU.
By default `makeNoLongerReadable` is set to `false`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Source textures.
    Texture2D[] atlasTextures;    // Rectangles for individual atlas textures.
    Rect[] rects;    void Start()
    {
        // Pack the individual textures into the smallest possible space,
        // while leaving a two pixel gap between their edges.
        Texture2D atlas = new Texture2D(8192, 8192);
        rects = atlas.PackTextures(atlasTextures, 2, 8192);
    }
}
```


            
