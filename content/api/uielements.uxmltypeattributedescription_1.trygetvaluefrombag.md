This version of Unity is unsupported.



# [UxmlTypeAttributeDescription<T0>](UIElements.UxmlTypeAttributeDescription_1.html).TryGetValueFromBag




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

public bool TryGetValueFromBag([UIElements.IUxmlAttributes](UIElements.IUxmlAttributes.html) bag,
[UIElements.CreationContext](UIElements.CreationContext.html) cc,
ref Type value);






### Parameters



| Parameter | Description |
| --- | --- |
| bag | The attribute bag. |
| cc | The context in which the method retrieves attribute values. |
| value | The attribute's value. |





### Returns



**bool**
        True if the method can retrieve the attribute's value. False otherwise.





### Description



Method that tries to retrieve an attribute's value from an attribute bag.. Returns true if it is found, otherwise returns false.


            
