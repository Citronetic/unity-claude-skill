# Input System -- Synthesis Notes

> Source: 74 pages from learn-tutorial(22), api-reference(49), manual(2), package-docs(1)
> Generated: 2026-03-31
> Status: CURATED

## Key Concepts

**New Input System vs Legacy**: The New Input System (package `com.unity.inputsystem`) is the required approach for Unity 6+ projects. It handles keyboard, mouse, gamepad, touch, and XR inputs through a unified action-based API. The legacy `Input.GetKey()`/`Input.GetAxis()` still works but is not extensible and lacks rebinding support.

**Input Actions**: Define what the player can do (Move, Jump, Fire) separately from which buttons do it. Create `.inputactions` assets in the Editor. Actions have types: `Button` (press), `Value` (continuous axis), `PassThrough` (raw, no processing). Bind multiple devices to the same action for automatic cross-platform input.

**PlayerInput Component**: The simplest way to wire Input Actions to gameplay code. Attach to a GameObject, assign the Input Actions asset, and choose notification mode: "Send Messages" (calls methods by name), "Invoke Unity Events" (Inspector-wired events), or "Invoke C# Events" (subscribe in code). Use C# Events for production code.

**Action Maps**: Group related actions. Example: "Player" map (Move, Jump, Fire), "UI" map (Navigate, Submit, Cancel), "Vehicle" map (Steer, Accelerate). Only one map active at a time per PlayerInput. Switch maps for context changes (entering vehicle, opening menu).

## Patterns & Workflows

### Input Actions Setup (C# Events Pattern)
```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// Requires: PlayerInput component on same GameObject with Input Actions asset assigned
// PlayerInput Behavior: Invoke C# Events
public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 10f;

    private PlayerInput playerInput;
    private InputAction moveAction;
    private InputAction jumpAction;
    private Rigidbody2D rb;
    private Vector2 moveInput;

    private void Awake()
    {
        playerInput = GetComponent<PlayerInput>();
        rb = GetComponent<Rigidbody2D>();

        // Get actions by name from the PlayerInput's action map
        moveAction = playerInput.actions["Move"];
        jumpAction = playerInput.actions["Jump"];
    }

    private void OnEnable()
    {
        jumpAction.performed += OnJump;
    }

    private void OnDisable()
    {
        jumpAction.performed -= OnJump;
    }

    private void Update()
    {
        // Read continuous value (Vector2 for 2D movement)
        moveInput = moveAction.ReadValue<Vector2>();
    }

    private void FixedUpdate()
    {
        rb.linearVelocity = new Vector2(moveInput.x * moveSpeed, rb.linearVelocity.y);
    }

    private void OnJump(InputAction.CallbackContext context)
    {
        // Only fires on performed (button pressed), not canceled
        rb.linearVelocity = new Vector2(rb.linearVelocity.x, jumpForce);
    }
}
```

### Direct Input Action References (No PlayerInput Component)
```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class DirectInputExample : MonoBehaviour
{
    // Drag InputActionReference from .inputactions asset in Inspector
    [SerializeField] private InputActionReference moveActionRef;
    [SerializeField] private InputActionReference fireActionRef;

    private void OnEnable()
    {
        moveActionRef.action.Enable();
        fireActionRef.action.Enable();
        fireActionRef.action.performed += OnFire;
    }

    private void OnDisable()
    {
        fireActionRef.action.performed -= OnFire;
        moveActionRef.action.Disable();
        fireActionRef.action.Disable();
    }

    private void Update()
    {
        Vector2 move = moveActionRef.action.ReadValue<Vector2>();
        transform.Translate(new Vector3(move.x, 0, move.y) * Time.deltaTime * 5f);
    }

    private void OnFire(InputAction.CallbackContext ctx)
    {
        Debug.Log("Fire!");
    }
}
```

### Touch Input (Mobile)
```csharp
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.InputSystem.EnhancedTouch;

public class TouchHandler : MonoBehaviour
{
    private void OnEnable()
    {
        EnhancedTouchSupport.Enable();
        UnityEngine.InputSystem.EnhancedTouch.Touch.onFingerDown += OnFingerDown;
        UnityEngine.InputSystem.EnhancedTouch.Touch.onFingerMove += OnFingerMove;
    }

    private void OnDisable()
    {
        UnityEngine.InputSystem.EnhancedTouch.Touch.onFingerDown -= OnFingerDown;
        UnityEngine.InputSystem.EnhancedTouch.Touch.onFingerMove -= OnFingerMove;
        EnhancedTouchSupport.Disable();
    }

    private void OnFingerDown(Finger finger)
    {
        Vector2 screenPos = finger.screenPosition;
        Debug.Log($"Touch at {screenPos}");
    }

    private void OnFingerMove(Finger finger)
    {
        Vector2 delta = finger.currentTouch.delta;
        // Use delta for swipe/drag gestures
    }
}
```

### Action Map Switching
```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class InputManager : MonoBehaviour
{
    private PlayerInput playerInput;

    private void Awake()
    {
        playerInput = GetComponent<PlayerInput>();
    }

    public void SwitchToUI()
    {
        playerInput.SwitchCurrentActionMap("UI");
    }

    public void SwitchToGameplay()
    {
        playerInput.SwitchCurrentActionMap("Player");
    }

    public void SwitchToVehicle()
    {
        playerInput.SwitchCurrentActionMap("Vehicle");
    }
}
```

## Code Examples

### Runtime Rebinding
```csharp
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;

public class RebindUI : MonoBehaviour
{
    [SerializeField] private InputActionReference actionToRebind;
    [SerializeField] private Text bindingText;
    [SerializeField] private Button rebindButton;

    private InputActionRebindingExtensions.RebindingOperation rebindOp;

    private void Start()
    {
        UpdateBindingDisplay();
        rebindButton.onClick.AddListener(StartRebind);
    }

    private void StartRebind()
    {
        actionToRebind.action.Disable();
        bindingText.text = "Press a key...";

        rebindOp = actionToRebind.action.PerformInteractiveRebinding()
            .WithControlsExcluding("Mouse") // Exclude mouse from rebind
            .OnMatchWaitForAnother(0.1f)
            .OnComplete(op =>
            {
                op.Dispose();
                actionToRebind.action.Enable();
                UpdateBindingDisplay();
                // Save: PlayerPrefs or JSON
                string overrides = actionToRebind.action.actionMap.asset.SaveBindingOverridesAsJson();
                PlayerPrefs.SetString("InputBindings", overrides);
            })
            .OnCancel(op =>
            {
                op.Dispose();
                actionToRebind.action.Enable();
                UpdateBindingDisplay();
            })
            .Start();
    }

    private void UpdateBindingDisplay()
    {
        bindingText.text = InputControlPath.ToHumanReadableString(
            actionToRebind.action.bindings[0].effectivePath,
            InputControlPath.HumanReadableStringOptions.OmitDevice);
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `InputAction.ReadValue<T>()` | Read current action value (Vector2, float, etc.) |
| `InputAction.performed` | Event when action is fully performed |
| `InputAction.started` | Event when action begins |
| `InputAction.canceled` | Event when action stops |
| `InputAction.Enable()` / `Disable()` | Toggle action on/off |
| `PlayerInput.SwitchCurrentActionMap()` | Change active action map |
| `InputActionRebindingExtensions.PerformInteractiveRebinding()` | Start interactive rebind |
| `InputSystem.SaveBindingOverridesAsJson()` | Serialize custom bindings |
| `InputSystem.LoadBindingOverridesFromJson()` | Restore custom bindings |
| `EnhancedTouchSupport.Enable()` | Enable touch tracking (must call before using Touch API) |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use `Input.GetKey()` / `Input.GetAxis()` | Use New Input System `InputAction` API | Legacy system: no rebinding, no multi-device, limited extensibility |
| Hardcode input bindings in code | Define in `.inputactions` asset, bind in Editor | Assets support rebinding, multiple devices, platform adaptation |
| Read input in `FixedUpdate()` | Read input in `Update()`, apply in `FixedUpdate()` | Input polling aligns with frame rate, not physics timestep |
| Forget to Enable/Disable actions | Enable in `OnEnable`, Disable in `OnDisable` | Disabled actions don't fire; leaking enabled actions wastes resources |
| Skip `EnhancedTouchSupport.Enable()` | Call it before using `Touch.onFingerDown` etc. | Enhanced touch API requires explicit opt-in |
| Use "Send Messages" in production | Use "Invoke C# Events" for PlayerInput | Send Messages uses reflection; C# events are type-safe and faster |

## Version Notes

- **Unity 6.0+**: New Input System is the default for new projects. Legacy Input Manager still available but not recommended.
- **Unity 6.0+**: Enhanced Touch API fully integrated with Input System for mobile/touch input.
- **Input System 1.8+**: Improved gamepad rumble API and device hot-swapping support.
