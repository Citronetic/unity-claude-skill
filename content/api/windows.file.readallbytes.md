This version of Unity is unsupported.



# [File](Windows.File.html).ReadAllBytes




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

public static byte[] ReadAllBytes(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Complete path of the file to open for reading. |





### Returns



**byte[]**
        Managed array of bytes of the complete file content.





### Description



Opens a binary file, reads the contents of the file into a byte array, and then closes the file.





If the file is not found, the function returns an empty array of bytes ( size=0 ).


              


```
var filePath = "path_to_your_file/yourfile.dat";// Check if the file exists
if (File.Exists(filePath))
{
    // Read the entire file into a byte array
    var fileData = File.ReadAllBytes(filePath);    // Output the size of the file
    Debug.Log($"File size: {fileData.Length} bytes");
}
else
{
    Debug.LogError($"File not found at path: {filePath}");
}
```


            
