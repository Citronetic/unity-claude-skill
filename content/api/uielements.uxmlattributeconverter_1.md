This version of Unity is unsupported.



# UxmlAttributeConverter<T0>





class in
          UnityEditor.UIElements


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



















### Description



Converts a UxmlAttribute type to and from a string.





Fields marked with [UxmlAttributeAttribute](UIElements.UxmlAttributeAttribute.html) are represented in UXML by a single string attribute,
 however, to properly serialize these attributes, you must declare a UxmlAttributeConverter.
 This converter converts the string attribute value into the appropriate data type for the marked field.
 Additionally, the data type must be serializable by the Unity serializer and adhere to
 the [serialization rules](../Manual/script-serialization-rules.html).

 **Note:** The following types have native support and you can use them without declaring a UxmlAttributeConverter:



          - bool

          - byte

          - sbyte

          - char

          - string

          - short

          - ushort

          - int

          - uint

          - long

          - ulong

          - Enum

          - float

          - double

          - Type([UxmlTypeReferenceAttribute](UIElements.UxmlTypeReferenceAttribute.html))

          - [Color](Color.html)

          - [Hash128](Hash128.html)

          - [Length](UIElements.Length.html)

          - [Bounds](Bounds.html)

          - [BoundsInt](BoundsInt.html)

          - [Rect](Rect.html)

          - [RectInt](RectInt.html)

          - [Vector2](Vector2.html)

          - [Vector2Int](Vector2Int.html)

          - [Vector3](Vector3.html)

          - [Vector3Int](Vector3Int.html)

          - [Vector4](Vector4.html)

          - [Gradient](Gradient.html)

          - [AnimationCurve](AnimationCurve.html)

          - [ToggleButtonGroupState](UIElements.ToggleButtonGroupState.html)





The following example creates a custom control that uses a class instance and a list of class instances as its attributes.


              


```
using System;
using System.Collections.Generic;
using UnityEngine.UIElements;[Serializable]
public class MyClassWithData
{
    public int myInt;
    public float myFloat;
}[UxmlElement]
public partial class MyElementWithData : VisualElement
{
    [UxmlAttribute]
    public MyClassWithData someData;    [UxmlAttribute]
    public List<MyClassWithData> lotsOfData;
}
```





To support the class, declare a converter:


              


```
using System;
using System.Globalization;
using UnityEditor.UIElements;public class MyClassWithDataConverter : UxmlAttributeConverter<MyClassWithData>
{
    public override MyClassWithData FromString(string value)
    {
        // Split using a | so that comma (,) can be used by the list.
        var split = value.Split('|');        return new MyClassWithData
        {
            myInt = int.Parse(split[0]),
            myFloat = float.Parse(split[1], CultureInfo.InvariantCulture)
        };
    }    public override string ToString(MyClassWithData value) => FormattableString.Invariant($"{value.myInt}|{value.myFloat}");
}
```





Example UXML:


              


```
<ui:UXML xmlns:ui="UnityEngine.UIElements">
    <MyElementWithData some-data="1|2.3" lots-of-data="1|2,3|4,5|6" />
</ui:UXML>
```





You can also use generic attribute converters. However, you must declare the attribute with the generic type. To use a type derived from a generic type, declare a new converter specifically for it.
 The following example uses a generic attribute converter and a custom property drawer to create a generic serialized dictionary:


              


```
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;[Serializable]
public class SerializableDictionary<TKey, TValue> : Dictionary<TKey, TValue>, ISerializationCallbackReceiver
{
    [SerializeField] public List<TKey> keys = new List<TKey>();
    [SerializeField] public List<TValue> values = new List<TValue>();    void ISerializationCallbackReceiver.OnAfterDeserialize() => TransferSerializedKeys();
    void ISerializationCallbackReceiver.OnBeforeSerialize() { }    public void TransferSerializedKeys()
    {
        Clear();        for (var i = 0; i < Math.Min(keys.Count, values.Count); i++)
        {
            this[keys[i]] = values[i];
        }
    }
}[UxmlElement]
public partial class MyDictElement : VisualElement
{
    [UxmlAttribute]
    public SerializableDictionary<int, string> dictionaryIntString;    [UxmlAttribute]
    public SerializableDictionary<int, int> dictionaryIntInt;    [UxmlAttribute]
    public SerializableDictionary<string, string> dictionaryStringString;
}
```





Generic attribute converter:


              


```
using System;
using System.Globalization;
using System.Text;
using UnityEditor.UIElements;public class SerializableDictionaryConverter<TKey, TValue> : UxmlAttributeConverter<SerializableDictionary<TKey, TValue>>
{
    static string ValueToString(object v) => Convert.ToString(v, CultureInfo.InvariantCulture);    public override string ToString(SerializableDictionary<TKey, TValue> source)
    {
        var sb = new StringBuilder();
        foreach (var pair in source)
        {
            sb.Append($"{ValueToString(pair.Key)}|{ValueToString(pair.Value)},");
        }
        return sb.ToString();
    }    public override SerializableDictionary<TKey, TValue> FromString(string source)
    {
        var result = new SerializableDictionary<TKey, TValue>();
        var items = source.Split(',');
        foreach (var item in items)
        {
            var fields = item.Split('|');
            var key = (TKey)Convert.ChangeType(fields[0], typeof(TKey));
            var value = (TValue)Convert.ChangeType(fields[1], typeof(TValue));            result.keys.Add(key);
            result.values.Add(value);
        }
        result.TransferSerializedKeys();
        return result;
    }
}
```





Custom property drawer:


              


```
using UnityEditor;
using UnityEditor.UIElements;
using UnityEngine.UIElements;[CustomPropertyDrawer(typeof(SerializableDictionary<,>))]
class SerializableDictionaryPropertyDrawer : PropertyDrawer
{
    SerializedProperty m_Property;
    SerializedProperty m_Keys;
    SerializedProperty m_Values;    public override VisualElement CreatePropertyGUI(SerializedProperty property)
    {
        m_Property = property;
        m_Keys = property.FindPropertyRelative("keys");
        m_Values = property.FindPropertyRelative("values");        var list = new ListView()
        {
            showAddRemoveFooter = true,
            showBorder = true,
            showAlternatingRowBackgrounds = AlternatingRowBackground.All,
            showFoldoutHeader = true,
            showBoundCollectionSize = false,
            reorderable = true,
            reorderMode = ListViewReorderMode.Animated,
            virtualizationMethod = CollectionVirtualizationMethod.DynamicHeight,
            headerTitle = property.displayName,
            bindingPath = m_Keys.propertyPath,
            overridingAddButtonBehavior = OnAddButton,
            bindItem = BindListItem,
        };
        return list;
    }    void BindListItem(VisualElement item, int index)
    {
        item.Clear();        item.Add(new PropertyField(m_Keys.GetArrayElementAtIndex(index)) { label = "Key" });
        item.Add(new PropertyField(m_Values.GetArrayElementAtIndex(index)) { label = "Value" });
        item.Bind(m_Property.serializedObject);
    }    void OnAddButton(BaseListView baseListView, Button button)
    {
        m_Keys.InsertArrayElementAtIndex(m_Keys.arraySize);
        m_Values.InsertArrayElementAtIndex(m_Values.arraySize);
        m_Property.serializedObject.ApplyModifiedProperties();
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| FromString | Provides a type converted from a string representation. |
| ToString | Provides a string representation of a type. |


            
