This version of Unity is unsupported.



# [Physics2D](Physics2D.html).OverlapCollider




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

public static int OverlapCollider([Collider2D](Collider2D.html) collider,
List<Collider2D> results);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | The Collider that defines the area used to query for other Collider overlaps. |
| results | The list to receive results. |





### Returns



**int**
        Returns the number of results placed in the `results` list.





### Description



Gets a list of all Colliders that overlap the given `Collider`.





The integer return value is the number of results written into the `results` list. The results list will be resized if it doesn't contain enough elements to report all the results. This prevents memory from being allocated for results when the `results` list does not need to be resized, and improves garbage collection performance when the query is performed frequently.

Additional resources: [Collider2D.Overlap](Collider2D.Overlap.html) and [Rigidbody2D.Overlap](Rigidbody2D.Overlap.html).




---








## Declaration

public static int OverlapCollider([Collider2D](Collider2D.html) collider,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
List<Collider2D> results);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | The Collider that defines the area used to query for other Collider overlaps. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing. |
| results | The list to receive results. |





### Returns



**int**
        Returns the number of results placed in the `results` list.





### Description



Gets a list of all Colliders that overlap the given `Collider`.





The integer return value is the number of results written into the `results` list. The results list will be resized if it doesn't contain enough elements to report all the results. This prevents memory from being allocated for results when the `results` list does not need to be resized, and improves garbage collection performance when the query is performed frequently.

Additional resources: [Collider2D.Overlap](Collider2D.Overlap.html) and [Rigidbody2D.Overlap](Rigidbody2D.Overlap.html).




---








## Declaration

public static int OverlapCollider([Collider2D](Collider2D.html) collider,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
Collider2D[] results);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | The Collider that defines the area used to query for other Collider overlaps. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing. |
| results | The array to receive results.  The size of the array determines the maximum number of results that can be returned. |





### Returns



**int**
        Returns the number of results placed in the `results` array.





### Description



Gets a list of all Colliders that overlap the given `Collider`.





The integer return value is the number of Colliders that overlap the `Collider` and which could be stored in the supplied array given its length. The results array will not be resized if it doesn't contain enough elements to report all the results.  The significance of this is that no memory is allocated for the results and so garbage collection performance is improved when the check is performed frequently.

Additional resources: [Collider2D.Overlap](Collider2D.Overlap.html) and [Rigidbody2D.Overlap](Rigidbody2D.Overlap.html).


            
