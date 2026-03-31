This version of Unity is unsupported.



# UxmlElementAttribute Constructor




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

public UxmlElementAttribute();






### Description



Exposes a type of VisualElement to UXML and UI Builder




---








## Declaration

public UxmlElementAttribute(string uxmlName);






### Parameters



| Parameter | Description |
| --- | --- |
| uxmlName | Provides a custom name for the element. |





### Description



Declares a custom control with a custom element name.




---








## Declaration

public UxmlElementAttribute(string uxmlName,
params Type[] supportedTypes);






### Parameters



| Parameter | Description |
| --- | --- |
| uxmlName | The name to use for the element in UXML, such as my-custom-element. |
| supportedTypes | An array of supported child element types. This can be passed as individual Type arguments. |





### Description



Declares a custom control with a custom element name and a list of supported child types.


            
