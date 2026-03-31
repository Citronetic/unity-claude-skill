This version of Unity is unsupported.



# [IDictionaryPropertyVisitor](Unity.Properties.IDictionaryPropertyVisitor.html).Visit




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

public void Visit(Property<TContainer,TDictionary> property,
ref TContainer container,
ref TDictionary dictionary);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property being visited. |
| container | The container being visited. |
| dictionary | The dictionary value. |





### Description



Implement this method to accept visitation for a specialized dictionary property.





This method is invoked by IDictionaryPropertyAccept_1


            
