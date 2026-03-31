This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetTypeFromPathAndFileID




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

public static Type GetTypeFromPathAndFileID(string assetPath,
long localIdentifierInFile);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | The Asset's path. |
| localIdentifierInFile | The object's local file identifier. |





### Returns



**Type**
        The object's type.





### Description



Gets an object's type from an Asset path and a local file identifier.





The following script example shows how to get the types of a nested asset. A material asset is added to a scriptable object asset (in this case called DummyObject), and the types of these two assets are extracted by calling GetTypeFromPathAndFileID.


              


```
using UnityEngine;
using UnityEditor;public class GetTypeFromPathAndFileIDExample
{    // Create a menu item under the GameObject menu.
    [MenuItem("AssetDatabase/GetTypeFromPathAndFileIDExample")]
    static void GetNestedType()
    {
        // Create a simple material object.
        Material material = new Material(Shader.Find("Specular"));
        material.name = "My material";        // Create an instance of a simple scriptable object
        DummyObject scriptableObject = ScriptableObject.CreateInstance<DummyObject>();
        scriptableObject.name = "My scriptable object";        // Create the scriptable object asset
        AssetDatabase.CreateAsset(scriptableObject, "Assets/myScriptableObject.asset");        // Add the material to the scriptable object asset
        AssetDatabase.AddObjectToAsset(material, scriptableObject);
        AssetDatabase.SaveAssets();        // Get the path of the created asset
        string scriptableObjectPath = AssetDatabase.GetAssetPath(scriptableObject);        // Get the GUID and the local file identifier of the scriptable object and the material.
        string materialGUID, scriptableObjectGUID;
        long materialFileID, scriptableObjectFileID;
        AssetDatabase.TryGetGUIDAndLocalFileIdentifier(scriptableObject, out scriptableObjectGUID, out scriptableObjectFileID);
        AssetDatabase.TryGetGUIDAndLocalFileIdentifier(material, out materialGUID, out materialFileID);        // Print type, local file identifier and path of the two assets.
        // Notice that the nested assets has the same path as the parent but different local file identifier.
        Debug.Log(scriptableObject.name+" type: "+ AssetDatabase.GetTypeFromPathAndFileID(scriptableObjectPath, scriptableObjectFileID) + ", fileID: "+scriptableObjectFileID+", path: " + scriptableObjectPath);
        Debug.Log(material.name+" type: "+ AssetDatabase.GetTypeFromPathAndFileID(scriptableObjectPath, materialFileID) + ", fileID: " + materialFileID + ", path: " + scriptableObjectPath);
    }
}public class DummyObject : ScriptableObject {
    public string objectName = "dummy";
}
```


            
