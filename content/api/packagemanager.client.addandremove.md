This version of Unity is unsupported.



# [Client](PackageManager.Client.html).AddAndRemove




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




                [Switch to Manual](../Manual/class-PackageManager.html)










## Declaration

public static [PackageManager.Requests.AddAndRemoveRequest](PackageManager.Requests.AddAndRemoveRequest.html) AddAndRemove(string[] packagesToAdd,
string[] packagesToRemove);






### Parameters



| Parameter | Description |
| --- | --- |
| packagesToAdd | An array of strings representing the package(s) to be added:

                - To install a specific version of a package, use a package identifier ("name@version"). This is the only way to install a pre-release version.
                - To install the latest compatible (released) version of a package, specify only the package name.
                - To install a git package, specify a git url.
                - To install a local package, specify a value in the format "file:/path/to/package/folder".
                - To install a local tarball package, specify a value in the format "file:/path/to/package-file.tgz".

                ArgumentException is thrown if packagesToAdd contains null or empty values. |
| packagesToRemove | An array of strings representing the names of package(s) to be removed.

                ArgumentException is thrown if packagesToRemove contains null or empty values. |





### Returns



**AddAndRemoveRequest**
        An [AddAndRemoveRequest](PackageManager.Requests.AddAndRemoveRequest.html) instance, which you can use to get the [PackageCollection](PackageManager.PackageCollection.html) representing the package that were added and removed from the project from the `AddAndRemoveRequest.Result` property.





### Description



Adds package dependencies to the project and removes package dependencies from the project. Requesting different dependencies often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts. For more information, see [Dependency and resolution](../Manual/upm-dependencies.html).



Calling this function is much more efficient than calling the Add and Remove functions several times because for this function, the Package Manager only has to solve the dependency list once, instead of constructing a new dependency graph after each call.





`ArgumentException` is thrown if both `packagesToAdd` and `packagesToRemove` are `null` or empty.

                    `AddAndRemove()` is an asynchronous operation. Before the operation is complete, you can use the `AddAndRemoveRequest` instance to monitor the asynchronous operation.

                    **Note:** Make sure any other Client operations have completed before calling this method. For more information, see the note on the [Client](PackageManager.Client.html) class reference page.


            
