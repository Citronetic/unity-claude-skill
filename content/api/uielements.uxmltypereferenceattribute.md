This version of Unity is unsupported.



# UxmlTypeReferenceAttribute





class in
          UnityEngine.UIElements



/



Inherits from:[PropertyAttribute](PropertyAttribute.html)



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Provides information about the expected type when applied to a Type field or property that has the [UxmlAttributeAttribute](UIElements.UxmlAttributeAttribute.html) attribute.





When defining a Type field or property with the [UxmlAttributeAttribute](UIElements.UxmlAttributeAttribute.html) in Unity, you can use the UxmlTypeReference
 attribute to specify the base type that the value should inherit from.
 This allows you to provide additional information about the expected type of the value and helps Unity ensure that the
 correct type is assigned to the attribute.


The following example creates a custom control and restricts the attribute type to only accept values that are derived from [VisualElement](UIElements.VisualElement.html):


              


```
using System;
using UnityEngine.UIElements;[UxmlElement]
public partial class TypeRestrictionExample : VisualElement
{
    [UxmlAttribute, UxmlTypeReference(typeof(VisualElement))]
    public Type elementType { get; set; }
}
```





### Properties



| Property | Description |
| --- | --- |
| baseType | The base type that the value inherits from. |





### Constructors



| Constructor | Description |
| --- | --- |
| UxmlTypeReferenceAttribute | Provides information about the expected type when applied to a Type field or property that has the UxmlAttributeAttribute attribute. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
