This version of Unity is unsupported.



# [Texture](Texture.html).updateCount




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












                    public uint updateCount;






### Description



This counter is incremented when the Texture is updated.





Note: If you perform an update from the GPU side, you should increment the counter yourself. (For instance, when blitting into a [RenderTexture](RenderTexture.html)). (see [IncrementUpdateCount](Texture.IncrementUpdateCount.html)).


              


```
using UnityEngine;
using System.Collections.Generic;public class MyTextureCache
{
    struct TextureCacheMeta
    {
        internal int index;
        internal uint updateCount;
    }    Dictionary<Texture, TextureCacheMeta> m_TextureMetas = new Dictionary<Texture, TextureCacheMeta>();
    RenderTexture m_Cache;    public Texture cache { get { return m_Cache; } }    public int CacheTexture(Texture Texture)
    {
        var index = -1;
        TextureCacheMeta meta;
        if (m_TextureMetas.TryGetValue(Texture, out meta))
        {
            if (meta.updateCount != Texture.updateCount)
            {
                // Texture has changed since last caching
                // So blit again into the cache Texture
                BlitTextureAt(meta.index, Texture);
                meta.updateCount = Texture.updateCount;
                m_TextureMetas[Texture] = meta;
            }
        }
        else
        {
            index = GetNextIndex();
            if (index < 0)
            {
                Debug.LogError("Invalid index");
                return -1;
            }            m_TextureMetas[Texture] = new TextureCacheMeta
            {
                index = index,
                updateCount = Texture.updateCount
            };
        }
        return index;
    }    void BlitTextureAt(int index, Texture Texture) { /* copy pixels in cache */ }
    int GetNextIndex() { return -1; /* Get next index to use in the cache */ }
}
```


            
