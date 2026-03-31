This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).enumDisplayNames




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












                    public string[] enumDisplayNames;






### Description



Display-friendly names of enumeration of an enum property.





Similar to enumNames, but formatted with spaces and capitalization.

Additional resources: [enumNames](SerializedProperty-enumNames.html), [propertyType](SerializedProperty-propertyType.html), [SerializedPropertyType.Enum](SerializedPropertyType.Enum.html), [enumValueIndex](SerializedProperty-enumValueIndex.html), [InspectorNameAttribute](InspectorNameAttribute.html).


              


```
using UnityEditor;
using UnityEngine;public enum OptionEnum
{
    ValueFirst = 1,
    ValueSecond = 2,
    ValueThird = 3,    [InspectorName("Value 4 - Best choice")]
    ValueForth = 4,    [InspectorName("Value 5 - Avoid")]
    ValueFifth = 5,    None = 0
}public class EnumDisplayNameExample : ScriptableObject
{
    public OptionEnum MyEnum = OptionEnum.ValueForth;    [MenuItem("Example/SerializedProperty enumDisplayName Example")]
    static void MenuCallbackup()
    {
        EnumDisplayNameExample obj = ScriptableObject.CreateInstance<EnumDisplayNameExample>();
        SerializedObject serializedObject = new SerializedObject(obj);
        SerializedProperty enumProperty = serializedObject.FindProperty("MyEnum");        // Print the members of the enum, sorted by value
        // Will output:
        // Names: None,ValueFirst,ValueSecond,ValueThird,ValueForth,ValueFifth
        Debug.Log("Names: " + string.Join(",", enumProperty.enumNames));        //The display names show the InspectorName string when specified,
        //otherwise a more human readable version of the enum member name
        //Will output:
        //Display names: None,Value First,Value Second,Value Third,Value 4 - Best choice,Value 5 - Avoid
        Debug.Log("Display names: " + string.Join(",", enumProperty.enumDisplayNames));        //Will output:
        //Current value: Value 4 - Best choice
        Debug.Log("Current value: " + enumProperty.enumDisplayNames[enumProperty.enumValueIndex]);
    }
}
```


            
