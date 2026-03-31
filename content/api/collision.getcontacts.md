This version of Unity is unsupported.



# [Collision](Collision.html).GetContacts




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

public int GetContacts(ContactPoint[] contacts);






### Parameters



| Parameter | Description |
| --- | --- |
| contacts | An array of ContactPoint used to receive the results. |





### Returns



**int**
        Returns the number of contacts placed in the `contacts` array.





### Description



Retrieves all contact points for this collision.





When retrieving contacts, you should ensure that the provided array is large enough to contain all the contacts you are interested in. The array is usually reused, so it should be large enough to return a reasonable quantity of contacts. This function also means that no allocations occur, which means no work is produced for the garbage collector.

You can check how many contacts are available using [contactCount](Collision-contactCount.html).

Additional resources: [contactCount](Collision-contactCount.html).




---








## Declaration

public int GetContacts(List<ContactPoint> contacts);






### Parameters



| Parameter | Description |
| --- | --- |
| contacts | A list of ContactPoint used to receive the results. |





### Returns



**int**
        Returns the number of contacts placed in the `contacts` list.





### Description



Retrieves all contact points for this collision.





When retrieving contacts, try to make the provided list large enough to contain all the contacts you need. If the list is not large enough, Unity will automatically increase its size so that it can contain all the contacts. The list is usually reused, so it should be large enough to return a reasonable quantity of contacts. If the list does not have to be increased in size then this function will not allocate any memory, which means no work is produced for the garbage collector.

You can check how many contacts are available using [contactCount](Collision-contactCount.html).

Additional resources: [contactCount](Collision-contactCount.html).


            
