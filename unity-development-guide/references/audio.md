# Audio

## Key Concepts

**AudioSource + AudioClip**: `AudioSource` is the component that plays sound. `AudioClip` is the sound data asset. Attach AudioSource to any GameObject. Assign AudioClip and call `Play()`. For positional (3D) audio, the AudioSource's position relative to the AudioListener determines volume and panning.

**AudioListener**: One per scene, typically on the Main Camera. Represents the "ears" of the player. Only one active AudioListener is allowed -- multiple will produce a warning. For split-screen, use a single listener and manage it manually.

**AudioMixer**: Route multiple AudioSources through mixer groups for volume control, effects, and ducking. Create: Assets > Create > Audio Mixer. Groups: Master > Music, SFX, UI, Ambient. Expose parameters for runtime control. Snapshots save/restore full mixer states.

**Compression Formats**: Import settings matter for memory and load time. Use Vorbis (OGG) for long clips (music, ambience) -- streaming, small footprint. Use ADPCM for short frequent SFX -- fast decode, moderate size. Use PCM only when uncompressed quality is critical. On mobile, use Vorbis for everything.

**Spatial Audio**: Set AudioSource "Spatial Blend" to 1.0 for full 3D audio. Configure rolloff (Linear or Logarithmic) and min/max distance. Use Audio Reverb Zones for environmental effects. For 2D games, keep Spatial Blend at 0 (2D stereo).

## Patterns & Workflows

### Audio Manager Singleton
```csharp
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance { get; private set; }

    [Header("Mixer")]
    [SerializeField] private AudioMixer mainMixer;

    [Header("Sources")]
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private AudioSource sfxSource;

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    // Play one-shot SFX (multiple can overlap)
    public void PlaySFX(AudioClip clip, float volume = 1f)
    {
        sfxSource.PlayOneShot(clip, volume);
    }

    // Play music (crossfade optional)
    public void PlayMusic(AudioClip clip, bool loop = true)
    {
        musicSource.clip = clip;
        musicSource.loop = loop;
        musicSource.Play();
    }

    // Volume control via exposed mixer parameters
    public void SetMusicVolume(float normalizedValue)
    {
        // Convert 0-1 slider to decibels (-80 to 0)
        float dB = normalizedValue > 0.001f ? Mathf.Log10(normalizedValue) * 20f : -80f;
        mainMixer.SetFloat("MusicVolume", dB); // "MusicVolume" must be exposed parameter
    }

    public void SetSFXVolume(float normalizedValue)
    {
        float dB = normalizedValue > 0.001f ? Mathf.Log10(normalizedValue) * 20f : -80f;
        mainMixer.SetFloat("SFXVolume", dB);
    }
}
```

### Spatial Audio (3D Sound)
```csharp
using UnityEngine;

public class SpatialSFX : MonoBehaviour
{
    [SerializeField] private AudioClip clip;
    [SerializeField] private float minDistance = 1f;
    [SerializeField] private float maxDistance = 20f;

    // Spawn a one-shot 3D sound at a position
    public static void PlayAtPoint(AudioClip clip, Vector3 position, float volume = 1f)
    {
        // Built-in method: creates temp GameObject, plays clip, destroys it
        AudioSource.PlayClipAtPoint(clip, position, volume);
    }

    // Better alternative: use pooled AudioSource for control
    public static AudioSource PlayAtPosition(AudioClip clip, Vector3 position,
        float minDist = 1f, float maxDist = 20f, float volume = 1f)
    {
        var go = new GameObject("SFX_OneShot");
        go.transform.position = position;

        var source = go.AddComponent<AudioSource>();
        source.clip = clip;
        source.spatialBlend = 1f; // Full 3D
        source.minDistance = minDist;
        source.maxDistance = maxDist;
        source.rolloffMode = AudioRolloffMode.Linear;
        source.volume = volume;
        source.Play();

        Destroy(go, clip.length + 0.1f);
        return source;
    }
}
```

### Audio Mixer Snapshots
```csharp
using UnityEngine;
using UnityEngine.Audio;

public class AudioStateManager : MonoBehaviour
{
    [SerializeField] private AudioMixer mixer;
    [SerializeField] private AudioMixerSnapshot normalSnapshot;
    [SerializeField] private AudioMixerSnapshot pausedSnapshot;   // Music low, SFX muted
    [SerializeField] private AudioMixerSnapshot combatSnapshot;   // SFX louder, music intense
    [SerializeField] private float transitionTime = 0.5f;

    public void EnterPauseMenu()
    {
        pausedSnapshot.TransitionTo(transitionTime);
    }

    public void ResumGame()
    {
        normalSnapshot.TransitionTo(transitionTime);
    }

    public void EnterCombat()
    {
        combatSnapshot.TransitionTo(transitionTime);
    }
}
```

### Randomized Sound Effects
```csharp
using UnityEngine;

public class FootstepSounds : MonoBehaviour
{
    [SerializeField] private AudioClip[] footstepClips;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private float pitchVariation = 0.1f;
    [SerializeField] private float volumeVariation = 0.1f;

    // Call from Animation Event at footstep keyframes
    public void PlayFootstep()
    {
        if (footstepClips.Length == 0) return;

        // Random clip selection
        var clip = footstepClips[Random.Range(0, footstepClips.Length)];

        // Randomize pitch and volume for variety
        audioSource.pitch = 1f + Random.Range(-pitchVariation, pitchVariation);
        audioSource.volume = 1f + Random.Range(-volumeVariation, 0f);
        audioSource.PlayOneShot(clip);
    }
}
```

### Background Music with Crossfade
```csharp
using UnityEngine;
using System.Collections;

public class MusicPlayer : MonoBehaviour
{
    [SerializeField] private AudioSource sourceA;
    [SerializeField] private AudioSource sourceB;
    [SerializeField] private float crossfadeDuration = 2f;

    private AudioSource activeSource;

    private void Awake()
    {
        activeSource = sourceA;
    }

    public void CrossfadeTo(AudioClip newTrack)
    {
        var fadeOut = activeSource;
        var fadeIn = (activeSource == sourceA) ? sourceB : sourceA;

        fadeIn.clip = newTrack;
        fadeIn.volume = 0f;
        fadeIn.Play();

        StartCoroutine(Crossfade(fadeOut, fadeIn));
        activeSource = fadeIn;
    }

    private IEnumerator Crossfade(AudioSource from, AudioSource to)
    {
        float elapsed = 0f;
        float fromStartVol = from.volume;

        while (elapsed < crossfadeDuration)
        {
            elapsed += Time.unscaledDeltaTime; // Use unscaled so it works during pause
            float t = elapsed / crossfadeDuration;
            from.volume = Mathf.Lerp(fromStartVol, 0f, t);
            to.volume = Mathf.Lerp(0f, 1f, t);
            yield return null;
        }

        from.Stop();
        from.volume = 1f;
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `AudioSource.Play()` | Play assigned clip |
| `AudioSource.PlayOneShot(clip, vol)` | Play clip without interrupting current |
| `AudioSource.Stop()` | Stop playback |
| `AudioSource.Pause()` / `UnPause()` | Pause/resume playback |
| `AudioSource.PlayClipAtPoint(clip, pos)` | Static: play 3D sound at position |
| `AudioSource.clip` | Get/set the AudioClip |
| `AudioSource.volume` | Get/set volume (0-1) |
| `AudioSource.pitch` | Get/set pitch (1 = normal) |
| `AudioSource.spatialBlend` | 0 = 2D, 1 = 3D |
| `AudioSource.loop` | Enable looping |
| `AudioMixer.SetFloat(param, value)` | Set exposed mixer parameter |
| `AudioMixer.GetFloat(param, out value)` | Read mixer parameter |
| `AudioMixerSnapshot.TransitionTo(time)` | Blend to snapshot over time |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Play music through regular SFX source | Use dedicated AudioSource per category (music, SFX, UI) | Separate sources enable independent volume control |
| Use linear volume sliders directly | Convert to decibels: `Mathf.Log10(value) * 20` | Human hearing is logarithmic; linear sliders feel wrong |
| Load all audio clips uncompressed | Use Vorbis for music, ADPCM for SFX | Uncompressed audio wastes memory; Vorbis streams efficiently |
| Create new AudioSource per sound effect | Use `PlayOneShot()` for overlapping SFX | Creating GameObjects per sound is wasteful |
| Forget AudioListener on camera | Ensure exactly one active AudioListener | No listener = no sound; multiple = warning + weird panning |
| Use PCM compression on mobile | Use Vorbis with quality 40-70% | PCM clips are huge; mobile memory is limited |

## Version Notes

- **Unity 6.0+**: WebGL audio uses standardized Web Audio API. `AudioSource.PlayOneShot` works reliably across browsers.
- **Unity 6.0+**: Audio Mixer supports more exposed parameters for runtime control.
- **Unity 6.0+**: Improved audio spatializer plugin support for XR applications.
