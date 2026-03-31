This version of Unity is unsupported.



# States





enumeration


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



Describes the various version control states an asset can have.





### Properties



| Property | Description |
| --- | --- |
| None | The version control state is unknown. |
| Local | The asset is not under version control. |
| Synced | The asset is up to date. |
| OutOfSync | A newer version of the asset is available on the version control server. |
| Missing | The asset exists in version control but is missing on the local machine. |
| CheckedOutLocal | The asset has been checked out on the local machine. |
| CheckedOutRemote | The asset has been checked out on a remote machine. |
| DeletedLocal | The asset has been deleted locally. |
| DeletedRemote | The asset has been deleted on a remote machine. |
| AddedLocal | The asset was locally added to version control. |
| AddedRemote | Remotely this asset was added to version control. |
| Conflicted | There is a conflict with the asset that needs to be resolved. |
| LockedLocal | The asset is locked by the local machine. |
| LockedRemote | The asset is locked by a remote machine. |
| Updating | The state of the asset is currently being queried from the version control server. |
| ReadOnly | The asset is read only. |
| MetaFile | This instance of the class actaully refers to a .meta file. |
| MovedLocal | The asset has been moved locally. |
| MovedRemote | The asset has been moved on a remote machine. |
| Unversioned | This asset is either ignored or doesn't exist in version control. |
| Exclusive | Only a single user can checkout this asset |


            
