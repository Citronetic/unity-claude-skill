This version of Unity is unsupported.



# AdvancedObjectSelectorAttribute Constructor




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

public AdvancedObjectSelectorAttribute(string id,
int defaultPriority,
bool defaultActive);






### Parameters



| Parameter | Description |
| --- | --- |
| id | A unique identifier for this advanced object selector. |
| defaultPriority | The default priority of this advanced object selector. |
| defaultActive | The default active state of this advanced object selector. |





### Description



Registers a method to act as an advanced object selector.





A unique identifier is required when registering a custom advanced object selector. If the identifier is not unique, the advanced object selector is not registered and a warning is displayed in the console. The same identifier must be used by the attribute [AdvancedObjectSelectorValidatorAttribute](SearchService.AdvancedObjectSelectorValidatorAttribute.html) to properly register an advanced object selector. The priority and active state of the advanced object selector can be overriden by users in the **Preferences/Search** settings page.




---








## Declaration

public AdvancedObjectSelectorAttribute(string id,
string displayName,
int defaultPriority,
bool defaultActive);






### Parameters



| Parameter | Description |
| --- | --- |
| id | A unique identifier for this advanced object selector. |
| displayName | The display name of this advanced object selector, shown in the Preferences/Search settings page. |
| defaultPriority | The default priority of this advanced object selector. |
| defaultActive | The default active state of this advanced object selector. |





### Description



Registers a method to act as an advanced object selector.





A unique identifier is required when registering a custom advanced object selector. If the identifier is not unique, the advanced object selector is not registered and a warning is displayed in the console. The same identifier must be used by the attribute [AdvancedObjectSelectorValidatorAttribute](SearchService.AdvancedObjectSelectorValidatorAttribute.html) to properly register an advanced object selector. The priority and active state of the advanced object selector can be overriden by users in the **Preferences/Search** settings page.


            
