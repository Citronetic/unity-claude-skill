This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).DataEquals




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

public static bool DataEquals([SerializedProperty](SerializedProperty.html) x,
[SerializedProperty](SerializedProperty.html) y);






### Description



Compares the data for two SerializedProperties. This method ignores paths and SerializedObjects.


              


```
using System;
using UnityEngine;
using UnityEditor;public class SerializedPropertyDataEqualsExample : ScriptableObject
{
    [Serializable]
    public struct SomeData
    {
        public string aStringValue;
        public float aFloatValue;
    }    [Serializable]
    public struct SomeOtherData
    {
        public string anotherStringValue;
        public float anotherFloatValue;
    }    [SerializeField]
    SomeData someData;
    [SerializeField]
    SomeOtherData[] otherDataArray;    static bool AreBothPropertiesEquals()
    {
        // Create an instance of the ScriptableObject
        var testObject = ScriptableObject.CreateInstance<SerializedPropertyDataEqualsExample>();
        // Set the first class to some values
        testObject.someData.aStringValue = "ThisValue";
        testObject.someData.aFloatValue = 5.1f;
        // Set the first array entry of the second class to the exact same values
        testObject.otherDataArray = new SomeOtherData[1];
        testObject.otherDataArray[0].anotherStringValue = "ThisValue";
        testObject.otherDataArray[0].anotherFloatValue = 5.1f;        var serializedObject = new SerializedObject(testObject);
        // Serialized property that refers to data from the first class
        var propertyOne = serializedObject.FindProperty("someData");
        // SerializedProperty that refers to data from the first entry of the second class array
        var propertyTwo = serializedObject.FindProperty("otherDataArray.Array.data[0]");
        // Compare data from each SerializedProperty.
        bool result = SerializedProperty.DataEquals(propertyOne, propertyTwo);        serializedObject.Dispose();
        DestroyImmediate(testObject);
        return result;
    }    [MenuItem("Example/SerializedPropertyDataEqualsExample")]
    static void TestMethod()
    {
        Debug.Log("Are properties equals ? " + AreBothPropertiesEquals());
    }
}
```


            
