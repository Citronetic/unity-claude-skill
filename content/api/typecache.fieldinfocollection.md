This version of Unity is unsupported.



# FieldInfoCollection





struct in
          UnityEditor


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



Represents a read-only collection of FieldInfo and implements an IList interface.





**Note:** The collection is immutable for the duration of Unity domain lifecycle. All *IList* methods that might alter the collection always throw *NotSupportedException*.





### Properties



| Property | Description |
| --- | --- |
| Count | The number of elements in FieldInfoCollection. |
| IsFixedSize | Whether the FieldInfoCollection is of a fixed size. This property is always set to true. |
| IsReadOnly | Whether the FieldInfoCollection is read-only. This property is always set to true. |
| IsSynchronized | Whether the FieldInfoCollection is synchronized. This property is always set to true. |
| this[int] | Gets the element at the specified index. |





### Public Methods



| Method | Description |
| --- | --- |
| Contains | Determines whether an element is in the FieldInfoCollection. |
| CopyTo | Copies the collection to an array. |
| GetEnumerator | Gets an enumerator that iterates through a FieldInfoCollection. |
| IndexOf | Gets the first occurrence of an item in the FieldInfoCollection. |


            
