This version of Unity is unsupported.



# [AudioListener](AudioListener.html).GetSpectrumData




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




                [Switch to Manual](../Manual/class-AudioListener.html)










## Declaration

public static void GetSpectrumData(float[] samples,
int channel,
[FFTWindow](FFTWindow.html) window);






### Parameters



| Parameter | Description |
| --- | --- |
| samples | The array to populate with audio samples. Its length must be a power of 2. |
| channel | The channel to sample from. |
| window | The FFTWindow type to use when sampling. |





### Description



Provides a block of the listener (master)'s spectrum data.





The array given in the samples parameter will be filled with the requested data.

Number of values (the length of the samples array) must be a power of 2. (ie 128/256/512 etc). Min = 64. Max = 8192.
Use [window](FFTWindow.html) to reduce leakage between frequency bins/bands.
Note, the more complex window type, the better the quality, but reduced speed.

This function will use the sampling rate specified in [AudioSettings.outputSampleRate](AudioSettings-outputSampleRate.html), and NOT the sampling rate specified for the audio clip.

**Note**: `GetSpectrumData` provides access to audio data from a short history window (for example, the last few milliseconds) for analysis purposes. Unity doesn't automatically allocate the buffers required to store this history because doing so would be expensive and memory-intensive. Instead, Unity only allocates buffers and starts to record when you first call this function, on a per-object basis. As a result, the output data will initially be empty until the engine processes sufficient audio to populate the buffer. Please note this function isn't suited for critical or chronological, real-time data analysis or processing, or scenarios where you require low latency.

Additional resources: [AudioListener.GetOutputData](AudioListener.GetOutputData.html), [AudioSource.GetSpectrumData](AudioSource.GetSpectrumData.html), [AudioSource.GetOutputData](AudioSource.GetOutputData.html).


              


```
using UnityEngine;
[RequireComponent(typeof(AudioListener))]
public class GetSpectrumDataExample : MonoBehaviour
{
    void Update()
    {
        float[] spectrum = new float[256];        AudioListener.GetSpectrumData(spectrum, 0, FFTWindow.Rectangular);        for (int i = 1; i < spectrum.Length - 1; i++)
        {
            Debug.DrawLine(new Vector3(i - 1, spectrum[i] + 10, 0), new Vector3(i, spectrum[i + 1] + 10, 0), Color.red);
            Debug.DrawLine(new Vector3(i - 1, Mathf.Log(spectrum[i - 1]) + 10, 2), new Vector3(i, Mathf.Log(spectrum[i]) + 10, 2), Color.cyan);
            Debug.DrawLine(new Vector3(Mathf.Log(i - 1), spectrum[i - 1] - 10, 1), new Vector3(Mathf.Log(i), spectrum[i] - 10, 1), Color.green);
            Debug.DrawLine(new Vector3(Mathf.Log(i - 1), Mathf.Log(spectrum[i - 1]), 3), new Vector3(Mathf.Log(i), Mathf.Log(spectrum[i]), 3), Color.blue);
        }
    }
}
```




---






                        **Obsolete**
                        GetSpectrumData returning a float[] is deprecated, use GetSpectrumData and pass a pre allocated array instead.




## Declaration

public static float[] GetSpectrumData(int numSamples,
int channel,
[FFTWindow](FFTWindow.html) window);






### Parameters



| Parameter | Description |
| --- | --- |
| numSamples | Number of values (the length of the samples array). Must be a power of 2. Min = 64. Max = 8192. |
| channel | The channel to sample from. |
| window | The FFTWindow type to use when sampling. |





### Description



*Deprecated Version*. Returns a block of the listener (master)'s spectrum data.





This variation of the function allocates a new array each time it is called. Use the Non-alloc version instead for better performance.


            
