This version of Unity is unsupported.



# [AudioSource](AudioSource.html).GetSpectrumData




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




                [Switch to Manual](../Manual/class-AudioSource.html)










## Declaration

public void GetSpectrumData(float[] samples,
int channel,
[FFTWindow](FFTWindow.html) window);






### Parameters



| Parameter | Description |
| --- | --- |
| samples | The array to populate with frequency domain representations of audio samples. The array length must be a power of 2 (such as 128, 256, 512). Also, the length must not be less than 64 or greater than 8192. |
| channel | The channel to sample from. |
| window | The FFTWindow type to use when sampling. |





### Description



Provides the block of audio frequencies (spectrum data) of the AudioSource that is currently playing.





This method fills the array you pass as the `samples` parameter with the spectrum data of the AudioSource.

The frequency domain represents the frequencies and amplitude of an audio signal. Spectrum data provides the raw frequency domain data of the audio, which you can use to create a spectrogram to visualize the data.

Audio frequency bands are ranges of sound frequencies that describe different parts of the audio spectrum (like sub-bass, bass, brilliance). The audio frequency bands are evenly spaced between 0 to half of the sampling rate. GetSpectrumData uses the sampling rate from [AudioSettings.outputSampleRate](AudioSettings-outputSampleRate.html), not the sampling rate in the audio clip.

Use [window](FFTWindow.html) to reduce leakage or scalloping loss between audio frequency bins/bands.

**Note:** A more complex window type might be less efficient and worsen resolution (lobe width).

**Note**: `GetSpectrumData` provides access to audio data from a short history window (for example, the last few milliseconds) for analysis purposes. Unity doesn't automatically allocate the buffers required to store this history because doing so would be expensive and memory-intensive. Instead, Unity only allocates buffers and starts to record when you first call this function, on a per-object basis. As a result, the output data will initially be empty until the engine processes sufficient audio to populate the buffer. Please note this function isn't suited for critical or chronological, real-time data analysis or processing, or scenarios where you require low latency.

For related information, refer to [AudioSource.GetOutputData](AudioSource.GetOutputData.html), [AudioListener.GetSpectrumData](AudioListener.GetSpectrumData.html), [AudioListener.GetOutputData](AudioListener.GetOutputData.html).


              


```
using UnityEngine;
[RequireComponent(typeof(AudioSource))]
public class AudioSourceGetSpectrumDataExample : MonoBehaviour
{
    AudioSource m_MyAudioSource;    void Start()
    {
        m_MyAudioSource = GetComponent<AudioSource>();
    }

    void Update()
    {
        float[] spectrum = new float[256];        m_MyAudioSource.GetSpectrumData(spectrum, 0, FFTWindow.Rectangular);        // Loop through the populated array
        // Start the loop from 1 and to 1 less than the length, so the loop can draw lines between adjacent bins.         for (int i = 1; i < spectrum.Length - 1; i++)
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

public float[] GetSpectrumData(int numSamples,
int channel,
[FFTWindow](FFTWindow.html) window);






### Parameters



| Parameter | Description |
| --- | --- |
| numSamples | The number of samples to retrieve. Must be a power of 2. |
| channel | The channel to sample from. |
| window | The FFTWindow type to use when sampling. |





### Returns



**float[]**
        Returns a block of the currently playing source's spectrum data.





### Description



This version of GetSpectrumData is obsolete.





This version of GetSpectrumData is obsolete. Use the other version of GetSpectrumData instead.

This variation of the function allocates a new array each time it is called. Use the other version instead for better performance.

Number of values (numSamples) must be a power of 2. (ie 128/256/512 etc). Min = 64. Max = 8192.
Use [window](FFTWindow.html) to reduce leakage between frequency bins/bands.
Note, the more complex window type, the better the quality, but reduced speed.


            
