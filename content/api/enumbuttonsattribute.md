This version of Unity is unsupported.



# EnumButtonsAttribute





class in
          UnityEngine



/



Inherits from:[PropertyAttribute](PropertyAttribute.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Attribute to enable editing an enum with a [ToggleButtonGroup](UIElements.ToggleButtonGroup.html).


              


```
using System;
using System.Collections.Generic;
using UnityEngine;

public enum Position
{
    First,
    Second,
    Third
}

[Flags]
public enum DaysOfWeek
{
    None = 0,
    Sunday = 1 << 0,
    Monday = 1 << 1,
    Tuesday = 1 << 2,
    Wednesday = 1 << 3,
    Thursday = 1 << 4,
    Friday = 1 << 5,
    Saturday = 1 << 6,

    Weekdays = Monday | Tuesday | Wednesday | Thursday | Friday,
    Weekend = Saturday | Sunday,
}

public class EnumExample : MonoBehaviour
{
    [EnumButtons]
    public Position number;

    [EnumButtons]
    public DaysOfWeek days;

    [EnumButtons]
    public List<Position> numbersList;
}
```





### Properties



| Property | Description |
| --- | --- |
| includeObsolete | Whether to display obsolete enum values? |





### Constructors



| Constructor | Description |
| --- | --- |
| EnumButtonsAttribute | Attribute to enable editing an enum with a ToggleButtonGroup. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
