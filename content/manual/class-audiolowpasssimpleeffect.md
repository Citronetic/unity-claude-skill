This version of Unity is unsupported.

Audio SFX Reverb Effect

Audio High Pass Simple Effect

# Audio Low Pass Simple Effect

The **Audio Low Pass Simple Effect** passes low frequencies of an [AudioMixer](class-AudioMixer.html) group while removing frequencies higher than the **Cutoff Frequency**.

## Properties

[Image: The AudioGroup Inspector displays the configurable property of an Audio Low Pass Simple Effect.]
The AudioGroup Inspector displays the configurable property of an Audio Low Pass Simple Effect.

| Property: | Function: |
| --- | --- |
| Cutoff freq | Lowpass cutoff frequency in Hertz (range 10.0 to 22000.0, default = 5000.0). |

## Details

The **Resonance** (short for Lowpass Resonance Quality Factor) determines how much the filter’s self-resonance is dampened. Higher lowpass resonance quality indicates a lower rate of energy loss, that is the oscillations die out more slowly.

For additional control over the resonance value of the low pass filter use the [Audio Low Pass effect](class-AudioLowPassEffect.html).

AudioLowPassSimpleEffect

Audio SFX Reverb Effect

Audio High Pass Simple Effect
