This version of Unity is unsupported.



# [JsonUtility](JsonUtility.html).FromJson




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

public static T FromJson(string json);






### Parameters



| Parameter | Description |
| --- | --- |
| json | The JSON representation of the object. |





### Returns



**T**
        An instance of the object.





### Description



Create an object from its JSON representation.





Internally, this method uses the Unity serializer. The object you're creating and all its fields must meet the requirements for serialization by the Unity serializer. For the full list of these requirements, refer to [Serialization rules](../Manual/script-serialization-rules.html) in the manual.

`FromJson` only supports plain classes and structures. It does not support classes derived from `UnityEngine.Object`, such as MonoBehaviour or ScriptableObject. To deserialize data into classes derived from MonoBehaviour or ScriptableObject, use [JsonUtility.FromJsonOverwrite](JsonUtility.FromJsonOverwrite.html) instead.

Field initializers and any logic in the default constructor are executed during deserialization. After the instance is constructed, fields that appear in the supplied JSON representation are set to those values. Any fields missing from the JSON keep their values as assigned by the constructor or field initializers.

If the input is null or empty, `FromJson` returns null.

`FromJson` can be called from background threads.


              


```
using UnityEngine;public class FromJsonTest : MonoBehaviour
{
    public static string completeJson = "{\"name\":\"Dr Charles\",\"lives\":3,\"health\":0.8}";
    // Partial JSON, missing lives and health. In this example, these fields will get their values from the initializer and constructor respectively.
    public static string partialJson = "{\"name\":\"Dr Charles\"}";    void Start()
    {
        PlayerInfo player1 = PlayerInfo.CreateFromJSON(completeJson);
        Debug.Log("Player1 Name: " + player1.name); // Dr Charles
        Debug.Log("Player1 Lives: " + player1.lives); // 3
        Debug.Log("Player1 Health: " + player1.health); // 0.8
        PlayerInfo player2 = PlayerInfo.CreateFromJSON(partialJson);
        Debug.Log("Player2 Name: " + player2.name); // Dr Charles (from JSON)
        Debug.Log("Player2 Lives: " + player2.lives); // 2 (from initializer)
        Debug.Log("Player2 Health: " + player2.health); // 1 (from constructor)
    }}[System.Serializable]
public class PlayerInfo
{
    public string name = "Unknown";
    public int lives = 2;
    public float health;    public PlayerInfo()
    {
        health = 1.0f;
    }    public static PlayerInfo CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<PlayerInfo>(jsonString);
    }}
```




---








## Declaration

public static object FromJson(string json,
Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| json | The JSON representation of the object. |
| type | The type of object represented by the Json. |





### Returns



**object**
        An instance of the object.





### Description



Create an object from its JSON representation.





Internally, this method uses the Unity serializer. The object you're creating and all its fields must meet the requirements for serialization by the Unity serializer. For the full list of these requirements, refer to [Serialization rules](../Manual/script-serialization-rules.html) in the manual.

`FromJson` only supports plain classes and structures. It does not support classes derived from `UnityEngine.Object`, such as MonoBehaviour or ScriptableObject. To deserialize data into classes derived from MonoBehaviour or ScriptableObject, use [JsonUtility.FromJsonOverwrite](JsonUtility.FromJsonOverwrite.html) instead.

Field initializers and any logic in the default constructor are executed during deserialization. After the instance is constructed, fields that appear in the supplied JSON representation are set to those values. Any fields missing from the JSON keep their values as assigned by the constructor or field initializers.

`FromJson` can be called from background threads.


            
