This version of Unity is unsupported.



# ReflectedMemberProperty<T0,T1>





class in
          Unity.Properties



/



Inherits from:[Unity.Properties.Property_2](Unity.Properties.Property_2.html)



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


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



A ReflectedMemberProperty_2 provides strongly typed access to an underlying FieldInfo or PropertyInfo object.





The implementation uses slow reflection calls internally. This is intended to be used as an intermediate solution for quick editor iteration.





### Constructors



| Constructor | Description |
| --- | --- |
| ReflectedMemberProperty_2 | Initializes a new ReflectedMemberProperty_2 instance for the specified FieldInfo. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| IsReadOnly | Gets a value indicating whether the property is read-only or not. |
| Name | Gets the name of the property. |






### Public Methods

| Method | Description |
| --- | --- |
| Accept | Call this method to invoke IPropertyVisitor.Visit_2 with the strongly typed container and value. |
| DeclaredValueType | Returns the declared value type of the property. |
| GetAttribute | Returns the first attribute of the given type. |
| GetAttributes | Returns all attribute of the given type. |
| GetValue | Returns the property value of a specified container. |
| HasAttribute | Returns true if the property has any attributes of the given type. |
| SetValue | Sets the property value of a specified container. |



### Protected Methods

| Method | Description |
| --- | --- |
| AddAttribute | Adds an attribute to the property. |
| AddAttributes | Adds a set of attributes to the property. |







            
