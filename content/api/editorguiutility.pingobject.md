This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).PingObject




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

public static void PingObject([Object](Object.html) obj);






## Declaration

public static void PingObject(int targetInstanceID);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to be pinged. |





### Description



Ping an object in the Scene like clicking it in an inspector.





[PingObject](EditorGUIUtility.PingObject.html) will cause the Hierarchy to highlight the pinged object. The pinged
          object does not have to be selected.  For example [GameObject.Find](GameObject.Find.html) can be used
          to locate an object to ping.


              


```
// Pings the currently selected Object
using UnityEditor;
using UnityEngine;public class PingObjectExample
{
    [MenuItem("Examples/Ping Selected")]
    static void Ping()
    {
        if (!Selection.activeObject)
        {
            Debug.Log("Select an object to ping");
            return;
        }        EditorGUIUtility.PingObject(Selection.activeObject);
    }
}
```


            
