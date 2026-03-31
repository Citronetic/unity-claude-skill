This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).GetMaterialProperty




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

public static [MaterialProperty](MaterialProperty.html) GetMaterialProperty(Object[] mats,
string name);






## Declaration

public static [MaterialProperty](MaterialProperty.html) GetMaterialProperty(Object[] mats,
int propertyIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| mats | The selected materials. |
| name | Property name. |
| propertyIndex | Property index. |





### Returns



**MaterialProperty**
        Returns the property at the specified index.





### Description



Get information about a single shader property.





When implementing custom MaterialEditors, you'd usually pass the `this.targets` array to this function, where `this.targets` is all the selected materials.

Additional resources: [GetMaterialProperties](MaterialEditor.GetMaterialProperties.html), [MaterialProperty](MaterialProperty.html).


            
