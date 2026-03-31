This version of Unity is unsupported.



# [Sprite](Sprite.html).GetScriptableObjects




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

public uint GetScriptableObjects(ScriptableObject[] scriptableObjects);






### Parameters



| Parameter | Description |
| --- | --- |
| scriptableObjects | The array of ScriptableObject to contain the ScriptableObjects referenced by the sprite. |





### Returns



**uint**
        Returns the number of ScriptableObjects retrieved.





### Description



Retrieves an array of [ScriptableObject](ScriptableObject.html) referenced by the sprite.





If the size of the arrays passed in as parameters are less than the number of [ScriptableObject](ScriptableObject.html) referenced by the sprite, the arrays will not be resized and the results will be limited.

If the size of the arrays passed in as parameters are bigger than the number of [ScriptableObject](ScriptableObject.html) referenced by the sprite, the number of elements used in the array will be indicated by the return value of the method.

The following is an example usage of adding, getting and removing ScriptableObjects reference to a sprite.


              


```
using UnityEngine;/*
 * Creates a custom ScriptableObject and attaches it
 * to a Sprite. The ScriptableObject is then removed after
 * the first Update loop so that the messages are only printed once.
 */// A custom ScriptableObject to hold any custom data.
public class MyScriptableObject : ScriptableObject
{
    public string myCustomData;
}public class Sample : MonoBehaviour
{
    Sprite m_Sprite;
    void Start()
    {
        var customData = ScriptableObject.CreateInstance<MyScriptableObject>();
        customData.myCustomData = "My Data";
        var texture = Texture2D.whiteTexture;
        m_Sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero, texture.width);
        var spriteRenderer = gameObject.AddComponent<SpriteRenderer>();
        m_Sprite.AddScriptableObject(customData);
        spriteRenderer.sprite = m_Sprite;
    }    void Update()
    {
        var scriptableObjectCount = m_Sprite.GetScriptableObjectsCount();
        if (scriptableObjectCount > 0)
        {
            var scriptableObjects = new ScriptableObject[scriptableObjectCount];
            var retrieveCount = m_Sprite.GetScriptableObjects(scriptableObjects);
            //This will print 1 since there is 1 ScriptableObject reference.
            print(retrieveCount);
            var myScriptableObject = scriptableObjects[0] as MyScriptableObject;
            // This will print "My Data"
            print(myScriptableObject.myCustomData);            // Removing the ScriptableObject reference so that the prints
            // above no longer executes.
            m_Sprite.RemoveScriptableObjectAt(scriptableObjectCount - 1);
        }
    }
}
```


            
