This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).enumNames




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












                    public string[] enumNames;






### Description



Names of enumeration of an enum property.





Additional resources: [enumDisplayNames](SerializedProperty-enumDisplayNames.html), [propertyType](SerializedProperty-propertyType.html), [SerializedPropertyType.Enum](SerializedPropertyType.Enum.html), [enumValueIndex](SerializedProperty-enumValueIndex.html).


              


```
using UnityEditor;
using UnityEngine;public enum ExampleEnum
{
    ValueFirst = 1,
    ValueSecond = 2,
    ValueThird = 3,
}public class EnumExample : ScriptableObject
{
    public ExampleEnum MyEnum = ExampleEnum.ValueSecond;    [MenuItem("Example/SerializedProperty Enum API")]
    static void Example()
    {
        EnumExample obj = ScriptableObject.CreateInstance<EnumExample>();
        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty enumProperty = serializedObject.FindProperty("MyEnum");        //MyEnum value: 2
        //Name of current value: ValueSecond
        //DisplayName: Value Second
        Debug.Log("MyEnum value: " + enumProperty.intValue +
            "\nName of current value: " + enumProperty.enumNames[enumProperty.enumValueIndex] +
            "\nDisplayName: " + enumProperty.enumDisplayNames[enumProperty.enumValueIndex]);
    }
}
```


            
