This version of Unity is unsupported.

Audio Effects

Audio High Pass Effect

# Audio Low Pass Effect

The **Audio Low Pass Effect** passes low frequencies of an [AudioMixer](class-AudioMixer.html) group while removing frequencies higher than the **Cutoff Frequency**.

## Properties

[Image: The AudioGroup Inspector displays the configurable properties of an Audio Low Pass Effect.]
The AudioGroup Inspector displays the configurable properties of an Audio Low Pass Effect.

| Property: | Function: |
| --- | --- |
| Cutoff freq | Lowpass cutoff frequency in Hertz (range 10.0 to 22000.0, default = 5000.0). |
| Resonance | Lowpass resonance quality value (range 1.0 to 10.0, default = 1.0). |

## Details

The **Resonance** (short for Lowpass Resonance Quality Factor) determines how much the filter’s self-resonance is dampened. Higher lowpass resonance quality indicates a lower rate of energy loss, that is the oscillations die out more slowly.

AudioLowPassEffect

Audio Effects

Audio High Pass Effect
