This version of Unity is unsupported.



# PathVisitor





class in
          Unity.Properties



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


                  Leave feedback





Implements interfaces:[IPropertyBagVisitor](Unity.Properties.IPropertyBagVisitor.html), [IPropertyVisitor](Unity.Properties.IPropertyVisitor.html)




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



Helper visitor to visit a single property using a specified [PropertyPath](Unity.Properties.PropertyPath.html).





### Properties



| Property | Description |
| --- | --- |
| Path | The path to visit. |
| ReadonlyVisit | Returns whether or not the visitor will write back values along the path. |
| ReturnCode | Returns the error code encountered while visiting the provided path. |





### Public Methods



| Method | Description |
| --- | --- |
| Reset | Resets the state of the visitor. |





### Protected Methods



| Method | Description |
| --- | --- |
| VisitPath | Method called when the visitor has successfully visited the provided path. |


            
