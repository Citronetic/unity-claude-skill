This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).propertyType




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












                    public [SerializedPropertyType](SerializedPropertyType.html) propertyType;






### Description



Type of this property (Read Only).





Property type determines which of the "value" variable accessors are valid.
For example, only [boolValue](SerializedProperty-boolValue.html) is valid for [SerializedPropertyType.Boolean](SerializedPropertyType.Boolean.html)


For numeric types [SerializedPropertyType.Float](SerializedPropertyType.Float.html) and [SerializedPropertyType.Integer](SerializedPropertyType.Integer.html), the best accessor can be determined with [numericType](SerializedProperty-numericType.html),
for example [floatValue](SerializedProperty-floatValue.html) should be used for [SerializedPropertyNumericType.Float](SerializedPropertyNumericType.Float.html) and [doubleValue](SerializedProperty-doubleValue.html) should be used for [SerializedPropertyNumericType.Double](SerializedPropertyNumericType.Double.html).

Additional resources: [SerializedPropertyType](SerializedPropertyType.html), [numericType](SerializedProperty-numericType.html).


            
