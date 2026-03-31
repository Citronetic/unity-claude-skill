This version of Unity is unsupported.



# [IPropertyBag<T0>](Unity.Properties.IPropertyBag_1.html).GetProperties




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

public PropertyCollection<TContainer> GetProperties();






### Returns



**PropertyCollection<TContainer>**
        A IEnumerator_1 structure for all properties.





### Description



Returns an enumerator that iterates through all static properties for the type.





This should return a subset properties returned by GetProperties.




---








## Declaration

public PropertyCollection<TContainer> GetProperties(ref TContainer container);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container hosting the data. |





### Returns



**PropertyCollection<TContainer>**
        A IEnumerator_1 structure for all properties.





### Description



Returns an enumerator that iterates through all static and dynamic properties for the given container.





This should return all static properties returned by GetProperties in addition to any dynamic properties.
 If the container is a collection type all elements will be iterated.


            
