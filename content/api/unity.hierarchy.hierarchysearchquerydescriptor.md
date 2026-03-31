This version of Unity is unsupported.



# HierarchySearchQueryDescriptor





class in
          Unity.Hierarchy



/



Implemented in:[UnityEngine.HierarchyCoreModule](UnityEngine.HierarchyCoreModule.html)


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



Encapsulates all the query filters and text values that are used to filter a hierarchy.





### Static Properties



| Property | Description |
| --- | --- |
| Empty | The default empty query. |
| InvalidQuery | The default invalid query. |





### Properties



| Property | Description |
| --- | --- |
| Filters | User-defined filters. Filters are in this form [filterName][operator][filterValue]. For example: t:Light. Each of these filters can be used by a NodeHandler to filter according to domain-specific characteristics. |
| Invalid | Whether the query invalid. An invalid query yields no node. |
| IsEmpty | Whether the query is empty. |
| IsSystemOnlyQuery | Whether the query uses system filters. This means NodeHandlers won't be called for filtering. |
| IsValid | Whether the query is valid. |
| Strict | Whether the query is evaluated strictly. This means that if any filters are invalid, then the whole query is invalid. |
| SystemFilters | The filters used by the hierarchy. Filters are in this form: [filterName][operator][filterValue]. For example: nodetype:gameobject. These filters are global to all NodeHandlers. |
| TextValues | All textual values. For example: "cube" |





### Constructors



| Constructor | Description |
| --- | --- |
| HierarchySearchQueryDescriptor | The constructor for a query. |





### Public Methods



| Method | Description |
| --- | --- |
| ToString | Converts the query to textual form. A textual query is of the form: <All system Filters> <All user filters> <All textual values>. |


            
