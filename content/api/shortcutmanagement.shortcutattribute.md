This version of Unity is unsupported.



# ShortcutAttribute





class in
          UnityEditor.ShortcutManagement



/



Inherits from:[ShortcutManagement.ShortcutBaseAttribute](ShortcutManagement.ShortcutBaseAttribute.html)


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



















### Description



Registers a static method as the action for an action shortcut.





An action shortcut triggers when the binding for the shortcut is pressed down. The method that this attribute is placed on must either take no arguments or take a single argument of type [ShortcutArguments](ShortcutManagement.ShortcutArguments.html).

You can bind a [ClutchShortcutAttribute](ShortcutManagement.ClutchShortcutAttribute.html) and a [ShortcutAttribute](ShortcutManagement.ShortcutAttribute.html) to the same mouse button. In this case, the action shortcut triggers when the mouse button is released.





### Properties



| Property | Description |
| --- | --- |
| displayName | Optional override of the Shortcut ID when listing the Shortcut in the configuration interface. |





### Constructors



| Constructor | Description |
| --- | --- |
| ShortcutAttribute | Creates an attribute for an action shortcut with an ID, optional context, and optional default binding. |





### Inherited Members














            
