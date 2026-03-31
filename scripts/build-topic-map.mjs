#!/usr/bin/env node
/**
 * build-topic-map.mjs
 *
 * Reads manifest.json and assigns every verified URL entry to one of
 * 16 synthesis topics (or "skip"). Outputs synthesis/topic-map.json.
 *
 * Topics (from ROADMAP phases 5-8):
 *   project-setup, editor-workflows, scripting-fundamentals, scripting-patterns,
 *   physics, input-system, testing, rendering-2d, rendering-3d, ui-toolkit,
 *   animation, audio, build-deploy, cli-tools, asset-pipeline, mobile-platform
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// ── Topic definitions ──────────────────────────────────────────────

const TOPICS = [
  'project-setup', 'editor-workflows', 'scripting-fundamentals', 'scripting-patterns',
  'physics', 'input-system', 'testing', 'rendering-2d', 'rendering-3d', 'ui-toolkit',
  'animation', 'audio', 'build-deploy', 'cli-tools', 'asset-pipeline', 'mobile-platform',
  'skip'
];

// ── API class-name to topic mapping ────────────────────────────────

const API_CLASS_RULES = [
  // Physics
  [/^(Physics|Physics2D|Rigidbody|Rigidbody2D|Collider|Collider2D|BoxCollider|SphereCollider|CapsuleCollider|MeshCollider|CharacterController|Joint|HingeJoint|FixedJoint|SpringJoint|ConfigurableJoint|CharacterJoint|SliderJoint2D|HingeJoint2D|DistanceJoint2D|SpringJoint2D|FixedJoint2D|RelativeJoint2D|FrictionJoint2D|TargetJoint2D|WheelJoint2D|ContactPoint|ContactPoint2D|Collision|Collision2D|RaycastHit|RaycastHit2D|BoxCollider2D|CircleCollider2D|CapsuleCollider2D|EdgeCollider2D|PolygonCollider2D|CompositeCollider2D|AreaEffector2D|BuoyancyEffector2D|PointEffector2D|PlatformEffector2D|SurfaceEffector2D|PhysicsMaterial|PhysicsMaterial2D|PhysicsScene|PhysicsScene2D|ArticulationBody|WheelCollider)\b/i, 'physics'],

  // Input
  [/^(Input|InputSystem|InputAction|InputActionMap|InputActionAsset|InputBinding|InputControl|InputDevice|Gamepad|Keyboard|Mouse|Touchscreen|Pointer|Joystick|Pen|Sensor|PlayerInput|PlayerInputManager|TouchSimulation|EnhancedTouch|InputControlScheme|InputUser)\b/i, 'input-system'],

  // Audio
  [/^(Audio|AudioSource|AudioListener|AudioMixer|AudioMixerGroup|AudioMixerSnapshot|AudioClip|AudioReverbZone|AudioReverbFilter|AudioLowPassFilter|AudioHighPassFilter|AudioDistortionFilter|AudioEchoFilter|AudioChorusFilter|Microphone)\b/i, 'audio'],

  // Animation
  [/^(Animator|Animation|AnimationClip|AnimationCurve|AnimationEvent|AnimationState|AnimatorController|AnimatorOverrideController|AnimatorStateInfo|AnimatorTransitionInfo|AnimatorClipInfo|AnimatorControllerParameter|RuntimeAnimatorController|Avatar|AvatarBuilder|AvatarMask|BlendTree|StateMachineBehaviour|HumanBodyBones|HumanDescription|HumanPose|HumanPoseHandler|Keyframe|PlayableGraph|AnimationPlayableOutput|AnimationMixerPlayable|AnimatorPlayable|AnimationClipPlayable|AnimationLayerMixerPlayable|AnimationScriptPlayable|PropertyStreamHandle|TransformStreamHandle|TransformSceneHandle|PropertySceneHandle|IAnimationJob)\b/i, 'animation'],

  // Rendering 2D
  [/^(Sprite|SpriteRenderer|SpriteMask|SpriteAtlas|SpriteShape|SpriteSkin|Tilemap|TilemapRenderer|TilemapCollider2D|Tile|TileBase|RuleTile|AnimatedTile|TilemapLayout|Light2D|ShadowCaster2D|PixelPerfectCamera|SpriteLibrary|SpriteResolver|SpriteBone|SortingGroup|SortingLayer)\b/i, 'rendering-2d'],

  // Rendering 3D / General rendering (Camera, Light, Material, Shader, Render, URP, Mesh, Terrain, LOD, Lightmap)
  [/^(Camera|Light|LightProbe|LightProbeGroup|LightProbeProxyVolume|LightmapSettings|Material|Shader|ShaderLab|ComputeShader|Render|RenderTexture|RenderBuffer|RenderSettings|RenderPipeline|RenderPipelineAsset|RenderPipelineManager|ScriptableRenderContext|ScriptableRenderPipeline|UniversalRenderPipeline|URP|HDRP|Mesh|MeshFilter|MeshRenderer|SkinnedMeshRenderer|MeshCollider|Terrain|TerrainData|TerrainCollider|LODGroup|LOD|Cubemap|ReflectionProbe|OcclusionArea|OcclusionPortal|GraphicsSettings|Graphics|GraphicsBuffer|GraphicsFormat|CommandBuffer|ScriptableRenderer|Volume|VolumeProfile|Skybox|Fog|Flare|LensFlare|Projector|LineRenderer|TrailRenderer|ParticleSystem|ParticleSystemRenderer|VisualEffect|VFX)\b/i, 'rendering-3d'],

  // UI Toolkit / uGUI
  [/^(UIElements|VisualElement|VisualTreeAsset|UIDocument|IMGUI|GUILayout|GUIStyle|GUISkin|GUIContent|GUIUtility|GUI|Canvas|CanvasGroup|CanvasScaler|CanvasRenderer|GraphicRaycaster|Button|Toggle|Slider|Scrollbar|Dropdown|InputField|Text|Image|RawImage|ScrollRect|Selectable|LayoutGroup|HorizontalLayoutGroup|VerticalLayoutGroup|GridLayoutGroup|ContentSizeFitter|AspectRatioFitter|RectTransform|RectTransformUtility|EventSystem|BaseInputModule|StandaloneInputModule|PointerEventData|TextMeshPro|TMP_Text|TMP_FontAsset|TMP_SpriteAsset|StyleSheet|USS|UxmlElement|UxmlAttribute|UxmlFactory|UxmlTraits|UxmlSerializedData|Foldout|Label|ListView|TreeView|TextField|IntegerField|FloatField|ObjectField|PropertyField|InspectorElement|BindableElement|TemplateContainer|BaseField|PopupWindow|EditorWindow)\b/i, 'ui-toolkit'],

  // Scripting fundamentals (core types)
  [/^(MonoBehaviour|Component|GameObject|Transform|Object|Coroutine|YieldInstruction|WaitForSeconds|WaitForFixedUpdate|WaitForEndOfFrame|WaitUntil|WaitWhile|ScriptableObject|CustomYieldInstruction|Behaviour|Attribute|SerializeField|SerializeReference|RequireComponent|AddComponentMenu|CreateAssetMenu|Header|Space|Range|Tooltip|HideInInspector|ExecuteInEditMode|ExecuteAlways|ContextMenu|ContextMenuItemAttribute|Debug|Time|Mathf|Vector2|Vector3|Vector4|Quaternion|Matrix4x4|Color|Color32|Rect|Bounds|Ray|Ray2D|LayerMask|Plane|Hash128|Random|GradientColorKey|Gradient|AnimationCurve|PropertyAttribute|MultilineAttribute|TextAreaAttribute|Serialization|JsonUtility)\b/i, 'scripting-fundamentals'],

  // Build / Deploy
  [/^(BuildPipeline|BuildSettings|BuildTarget|BuildTargetGroup|BuildOptions|BuildReport|BuildSummary|PlayerSettings|EditorBuildSettings|EditorBuildSettingsScene|BuildPlayerOptions|PostProcessBuild|PreProcessBuild|BuildAssetBundles|Il2CppCompilerConfiguration|ScriptingImplementation)\b/i, 'build-deploy'],

  // Asset pipeline
  [/^(AssetBundle|AssetBundleManifest|AssetBundleRequest|Addressables|AddressableAssets|AssetDatabase|AssetImporter|TextureImporter|ModelImporter|AudioImporter|AssetPostprocessor|AssetModificationProcessor|PrefabUtility|AssetPreview|AssetServer|Caching|PackageManager|Resources|StreamingAssets|PluginImporter|ScriptedImporter)\b/i, 'asset-pipeline'],

  // Editor workflows
  [/^(Editor|EditorApplication|EditorGUI|EditorGUILayout|EditorGUIUtility|EditorStyles|EditorPrefs|EditorUtility|EditorWindow|MenuItem|MenuCommand|CustomEditor|CustomPropertyDrawer|PropertyDrawer|DecoratorDrawer|SerializedObject|SerializedProperty|Selection|Undo|PrefabStage|SceneManagement|SceneAsset|Handles|HandleUtility|SceneView|GameView|InspectorWindow|ProjectBrowser|GenericMenu|EditorSceneManager|Gizmos|GizmoType)\b/i, 'editor-workflows'],

  // Testing
  [/^(TestRunner|Assert|NUnit|UnityTest|TestFixture|Test|SetUp|TearDown|OneTimeSetUp|OneTimeTearDown|TestCase|TestCaseSource|Category|Timeout|PlayModeTest|EditModeTest|UnityPlatform|ConditionalIgnore)\b/i, 'testing'],

  // Mobile / Platform
  [/^(Application|SystemInfo|Screen|Resolution|Display|Handheld|TouchScreenKeyboard|LocationService|Compass|Gyroscope|Accelerometer|WebCamTexture|NotificationServices|LocalNotification|RemoteNotification|AndroidJNI|AndroidJNIHelper|AndroidJavaObject|AndroidJavaClass|AndroidJavaProxy|iOSDevice|iOSStatusBarStyle|UnityEngine\.iOS|UnityEngine\.Android)\b/i, 'mobile-platform'],
];

// ── Manual filename keyword to topic mapping ───────────────────────

const MANUAL_RULES = [
  // Physics
  [/\b(physics|rigidbod|collider|trigger|raycast|joint|2d-physics|collision|effector|articulation)\b/i, 'physics'],
  // Input
  [/\b(input-system|input-action|inputsystem|playerinput|new-input|enhanced-touch)\b/i, 'input-system'],
  // Audio
  [/\b(audio|sound|mixer|audioclip|audiosource|audiolistener|microphone)\b/i, 'audio'],
  // Animation
  [/\b(animat|mecanim|animator|state-machine|blend-tree|playable|humanoid|avatar|ik-|inverse-kinematics)\b/i, 'animation'],
  // Rendering 2D
  [/\b(sprite|tilemap|2d-light|2d-render|spriteatlas|spritemask|pixel-perfect|2d-sorting)\b/i, 'rendering-2d'],
  // Rendering 3D / general rendering
  [/\b(urp-|hdrp-|render-pip|shader|material|lighting|lightmap|camera|post-process|volume|mesh|terrain|lod|cubemap|reflection-probe|skybox|fog|particle|vfx|visual-effect|srp-|render-graph|render-pass|shadow|anti-alias|bloom|tonemapping|color-grading|ssao|screen-space|global-illumination|baked-gi|probe-volume|depth-of-field|motion-blur|lens-flare|occlusion|decal|gpu-instancing)\b/i, 'rendering-3d'],
  // UI Toolkit
  [/\b(ui-toolkit|uitk|uxml|uss|uielements|visual-element|uidocument|ui-builder|ugui|canvas|event-system|tmpro|textmeshpro|ui-system|imgui|ongui|runtime-ui|editor-ui)\b/i, 'ui-toolkit'],
  // Scripting fundamentals
  [/\b(monobehaviour|gameobject|component|lifecycle|awake|start-update|fixedupdate|script-serial|serializ|coroutine|event-function|creating-script|script-compil|class-mono|execution-order|namespace|attribute)\b/i, 'scripting-fundamentals'],
  // Scripting patterns
  [/\b(scriptableobject|async|async-await|unitask|design-pattern|singleton|observer|command-pattern|object-pooling|dependency-injection)\b/i, 'scripting-patterns'],
  // Build / Deploy
  [/\b(build-|player-setting|platform-switch|il2cpp|mono-backend|aot|build-config|publishing|android-build|ios-build|webgl-build|standalone-build|batch-mode|headless)\b/i, 'build-deploy'],
  // CLI tools
  [/\b(command-line|cli-|batch-mode|batchmode|editor-command-line|unity-command)\b/i, 'cli-tools'],
  // Asset pipeline
  [/\b(asset-bundle|addressable|asset-import|asset-manage|asset-pipeline|assetdatabase|asset-postprocess|package-manager|packages-|asmdef|assembly-definition|streaming-assets|resources-folder|preload|asset-store)\b/i, 'asset-pipeline'],
  // Editor workflows
  [/\b(editor-|inspector|prefab|scene-manage|gameobject-|hierarchy|project-window|console|profiler|frame-debug|custom-editor|property-drawer|gizmo|handle|scene-view|toolbar|menu-item|undo-|selection-|serialized)\b/i, 'editor-workflows'],
  // Testing
  [/\b(test-framework|testing|unit-test|playmode-test|editmode-test|nunit|test-runner)\b/i, 'testing'],
  // Project setup
  [/\b(project-|install|unity-hub|getting-started|2d-or-3d|folder-structure|gitignore|lfs|meta-file|project-setting|preferences|quality-setting|tag-layer|time-setting|sort-order)\b/i, 'project-setup'],
  // Mobile / Platform
  [/\b(mobile|android-|ios-|touch-|screen-resolution|performance-|optimization|profiling|batching|draw-call|gpu-|cpu-|memory-|frame-rate|target-fps)\b/i, 'mobile-platform'],
];

// ── Learn tutorial filename keyword to topic mapping ───────────────

const LEARN_RULES = [
  [/\b(physics|rigidbod|collider|trigger|raycast|force|gravity|2d-physics)\b/i, 'physics'],
  [/\b(input|control|gamepad|keyboard|touch|pointer|joystick)\b/i, 'input-system'],
  [/\b(audio|sound|music|sfx|mixer)\b/i, 'audio'],
  [/\b(animat|animator|animation|blend|mecanim|timeline|playable)\b/i, 'animation'],
  [/\b(sprite|tilemap|2d-|pixel)\b/i, 'rendering-2d'],
  [/\b(shader|material|light|camera|render|urp|hdrp|post-process|particle|vfx|mesh|terrain|skybox)\b/i, 'rendering-3d'],
  [/\b(ui-|canvas|button|panel|menu|hud|toolkit|uxml|uss|interface|dropdown|slider|scroll|text)\b/i, 'ui-toolkit'],
  [/\b(script|c-sharp|csharp|monobehaviour|component|gameobject|variable|method|function|class|loop|array|condition|debug|log)\b/i, 'scripting-fundamentals'],
  [/\b(scriptableobject|pattern|pooling|singleton|observer|async|coroutine|design)\b/i, 'scripting-patterns'],
  [/\b(build|deploy|publish|platform|export)\b/i, 'build-deploy'],
  [/\b(asset|import|package|prefab|resource|addressable)\b/i, 'asset-pipeline'],
  [/\b(editor|inspector|hierarchy|scene|project-window|tool)\b/i, 'editor-workflows'],
  [/\b(test|testing|nunit|unittest)\b/i, 'testing'],
  [/\b(setup|install|hub|start|intro|begin|first|create-project|getting-started|essentials|welcome|overview|foundations|fundamental)\b/i, 'project-setup'],
  [/\b(mobile|android|ios|optimization|performance|profil)\b/i, 'mobile-platform'],
];

// ── Non-English filename patterns ──────────────────────────────────

const NON_ENGLISH_PATTERNS = [
  /-jp\b/, /-kr\b/, /-es\b/, /-de\b/, /-fr\b/, /-pt\b/, /-zh\b/, /-ja\b/, /-ko\b/,
  /gyoyug/, /gwajeong/, /configuracion/, /peurojegteu/, /seoljeong/,
  /puroziekuto/, /rokomoshiyon/, /noshe.ding/, /sijag/, /caryange/,
  /dongryeog/, /mandeulgi/, /idong/, /aenimeisyeon/, /enjin/,
  /haegsim/, /gaenyeom/, /deiteo/, /traslado/, /introduccion/,
  /proyecto/, /movimiento/, /interaccion/, /creacion/, /aprendizaje/,
  // Korean romanization patterns
  /gang-/, /-gang\b/, /geulsseugi/, /saeroun/,
  // Japanese romanization patterns
  /tsukuru/, /hajimeru/, /kihon/, /nyumon/, /puroguramu/, /gemu/,
];

// ── Main logic ─────────────────────────────────────────────────────

function assignApiTopic(contentFile) {
  // Extract class name from filename: content/api/{classname}.md or content/api/{classname}-{member}.md
  const filename = contentFile.replace(/^content\/api\//, '').replace(/\.md$/, '');

  // The filename is lowercase. We match against our rules which are case-insensitive.
  // Split on dots or hyphens to get the class part
  const parts = filename.split(/[\.\-]/);
  const className = parts[0];

  for (const [regex, topic] of API_CLASS_RULES) {
    if (regex.test(className) || regex.test(filename)) {
      return topic;
    }
  }

  // Fallback: skip (API pages not matching any known category)
  return 'skip';
}

function assignManualTopic(contentFile) {
  const filename = contentFile.replace(/^content\/manual\//, '').replace(/\.md$/, '');

  for (const [regex, topic] of MANUAL_RULES) {
    if (regex.test(filename)) {
      return topic;
    }
  }

  // General manual pages that don't match specific topics
  return 'skip';
}

function assignLearnTopic(contentFile) {
  const filename = contentFile.replace(/^content\/learn\//, '').replace(/\.md$/, '');

  // Check non-English first
  for (const pattern of NON_ENGLISH_PATTERNS) {
    if (pattern.test(filename)) {
      return 'skip';
    }
  }

  for (const [regex, topic] of LEARN_RULES) {
    if (regex.test(filename)) {
      return topic;
    }
  }

  // Default for learn content: scripting-fundamentals (most tutorials teach scripting)
  return 'skip';
}

function assignTopic(entry) {
  const { source, status, contentFile, wordCount } = entry;

  // Non-verified entries => skip
  if (status !== 'verified') return 'skip';

  // Insufficient content => skip
  if (!contentFile || wordCount < 50) return 'skip';

  // Route by source
  switch (source) {
    case 'api-reference':
      return assignApiTopic(contentFile);

    case 'manual':
      return assignManualTopic(contentFile);

    case 'learn-tutorial':
    case 'learn-project':
    case 'learn-course':
    case 'learn-other':
      return assignLearnTopic(contentFile);

    case 'best-practice':
      return assignLearnTopic(contentFile); // Use learn rules for best practices

    case 'package-docs':
      return assignManualTopic(contentFile); // Use manual rules for package docs

    default:
      return 'skip';
  }
}

// ── Entry point ────────────────────────────────────────────────────

function main() {
  console.log('Reading manifest.json...');
  const manifest = JSON.parse(readFileSync('manifest.json', 'utf8'));
  const entries = Object.values(manifest.urls);
  console.log(`Total manifest entries: ${entries.length}`);

  const verified = entries.filter(e => e.status === 'verified');
  console.log(`Verified entries: ${verified.length}`);

  // Build topic assignments
  const topicMap = {};
  for (const topic of TOPICS) {
    topicMap[topic] = [];
  }

  let assigned = 0;
  for (const entry of entries) {
    const topic = assignTopic(entry);
    topicMap[topic].push({
      url: entry.url,
      source: entry.source,
      contentFile: entry.contentFile || null,
      wordCount: entry.wordCount || 0,
    });
    assigned++;
  }

  // Sort pages within each topic by wordCount descending
  for (const topic of TOPICS) {
    topicMap[topic].sort((a, b) => (b.wordCount || 0) - (a.wordCount || 0));
  }

  // Build counts
  const topicCounts = {};
  for (const topic of TOPICS) {
    topicCounts[topic] = topicMap[topic].length;
  }

  // Output
  const output = {
    generatedAt: new Date().toISOString(),
    topicCounts,
    topics: topicMap,
  };

  mkdirSync('synthesis', { recursive: true });
  writeFileSync('synthesis/topic-map.json', JSON.stringify(output, null, 2));

  // Print summary table
  console.log('\n=== Topic Assignment Summary ===\n');
  console.log('Topic'.padEnd(28) + 'Count'.padStart(8));
  console.log('-'.repeat(36));

  let totalNonSkip = 0;
  for (const topic of TOPICS) {
    const count = topicCounts[topic];
    console.log(topic.padEnd(28) + String(count).padStart(8));
    if (topic !== 'skip') totalNonSkip += count;
  }

  console.log('-'.repeat(36));
  console.log('Total (non-skip)'.padEnd(28) + String(totalNonSkip).padStart(8));
  console.log('Total (all)'.padEnd(28) + String(assigned).padStart(8));
  console.log(`\nWrote synthesis/topic-map.json`);
}

main();
