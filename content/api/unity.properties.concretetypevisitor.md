This version of Unity is unsupported.



# ConcreteTypeVisitor





class in
          Unity.Properties



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


                  Leave feedback





Implements interfaces:[IPropertyBagVisitor](Unity.Properties.IPropertyBagVisitor.html)




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



Base class to implement a visitor responsible for getting an object's concrete type as a generic.





It is required that the visited object is a container type with a property bag.





### Protected Methods



| Method | Description |
| --- | --- |
| VisitContainer | Implement this method to receive the strongly typed callback for a given container. |


            
