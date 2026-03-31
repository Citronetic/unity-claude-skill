This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).managedReferenceFieldTypename




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












                    public string managedReferenceFieldTypename;






### Description



String corresponding to the value of the managed reference field full type string.





Contains a valid value when [propertyType](SerializedProperty-propertyType.html) is [SerializedPropertyType.ManagedReference](SerializedPropertyType.ManagedReference.html). This property is Read Only (you cannot write to it).


                    Contrary to [managedReferenceFullTypename](SerializedProperty-managedReferenceFullTypename.html), this property returns the full static type name for the managed reference field, not the dynamic instance's type.


                    The full static type name string returned has the following format: "[assembly-name] [namespace.][parent-class-names][classname]" where:

                    - `[assembly-name]` is the name of the assembly that contains the target type

                    - `[namespace.]` is an optional (if empty) namespace followed by a '.'

                    - `[parent-class-names]` is a '/' separated list of optional parent class names (in the case of nested class definitions)

                    - `[classname]` is the managed reference field class name.


                    Additional resources: [propertyType](SerializedProperty-propertyType.html), [SerializedPropertyType.ManagedReference](SerializedPropertyType.ManagedReference.html).


            
