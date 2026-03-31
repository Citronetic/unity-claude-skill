This version of Unity is unsupported.



# [Awaitable](Awaitable.html).BackgroundThreadAsync




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

public static BackgroundThreadAwaitable BackgroundThreadAsync();






### Returns



**BackgroundThreadAwaitable**
        Awaitable object that completes when switching to a background thread.





### Description



Resumes execution on a ThreadPool background thread. Completes immediately when called from a background thread.


              


```
public async Awaitable Start()
{
    await Awaitable.BackgroundThreadAsync();
    // do some heavy math here without blocking the frame
    float result = 42;
    //switch back to the main frame to be able to call SceneManager.LoadSceneAsync
    await Awaitable.MainThreadAsync();
    await SceneManager.LoadSceneAsync("my-scene");
}
```


            
