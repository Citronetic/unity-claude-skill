This version of Unity is unsupported.



# [PhysicsJobOptions2D](PhysicsJobOptions2D.html).islandSolverCostThreshold




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












                    public int islandSolverCostThreshold;






### Description



The minimum threshold cost of all bodies, contacts and joints in an island during discrete island solving.





The discrete island solver generates "islands", which are bodies connected together by contacts. These contact islands are solved together as they all potentially affect each other when moving. The first stage is generating the contact islands. When a contact island has been created, it can then be evaluated in a job. However, executing lots of small contact islands each as a job can lead to lots of jobs, and can be very inefficient. To reduce the number of contact islands processed by each job, each job island has a cost associated with it. A job island's cost is automatically calculated by summing the cost of the island's bodies, contacts and joints. Each of these has its own scaling property, [islandSolverBodyCostScale](PhysicsJobOptions2D-islandSolverBodyCostScale.html), [islandSolverContactCostScale](PhysicsJobOptions2D-islandSolverContactCostScale.html) and [islandSolverJointCostScale](PhysicsJobOptions2D-islandSolverJointCostScale.html) respectively. The island is only processed by a job if the total cost of the island is above the [islandSolverCostThreshold](PhysicsJobOptions2D-islandSolverCostThreshold.html).

Increasing the cost threshold will increase the number of islands solved in each job.  Depending on the number and size of contact islands, this allows you to control the efficiency of discrete island solving.


            
