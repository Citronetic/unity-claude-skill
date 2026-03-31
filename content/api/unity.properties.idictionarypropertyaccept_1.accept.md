This version of Unity is unsupported.



# [IDictionaryPropertyAccept<T0>](Unity.Properties.IDictionaryPropertyAccept_1.html).Accept




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

public void Accept([Unity.Properties.IDictionaryPropertyVisitor](Unity.Properties.IDictionaryPropertyVisitor.html) visitor,
Property<TContainer,TDictionary> property,
ref TContainer container,
ref TDictionary dictionary);






### Parameters



| Parameter | Description |
| --- | --- |
| visitor | The visitor being run. |
| property | The property being visited. |
| container | The container being visited. |
| dictionary | The dictionary value. |





### Description



Call this method to invoke IDictionaryPropertyVisitor.Visit{TContainer, TDictionary, TKey, TValue}.





This method is used to join the container, the key and the value type.


            
