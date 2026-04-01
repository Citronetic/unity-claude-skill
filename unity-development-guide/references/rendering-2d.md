# Rendering 2D

## Key Concepts

**SpriteRenderer**: The primary component for displaying 2D images. Assign a Sprite asset (imported from PNG/PSD with Texture Type: Sprite). Key properties: `sprite`, `color` (tint/alpha), `flipX`/`flipY`, `sortingLayerName`, `sortingOrder`. SpriteRenderer works with URP's 2D Renderer for lighting.

**Sorting Layers and Order**: 2D rendering uses Sorting Layers (broad categories: Background, Default, Foreground, UI) and Sorting Order (integer within a layer). Lower numbers render first (behind). Configure Sorting Layers in Edit > Project Settings > Tags and Layers. Use `SpriteRenderer.sortingLayerName` and `sortingOrder` in code.

**Sprite Atlas**: Pack multiple sprites into a single texture atlas to reduce draw calls. Create via Assets > Create > 2D > Sprite Atlas. Add folders or individual sprites. Unity batches sprites from the same atlas into single draw calls. Critical for mobile performance.

**Tilemaps**: Grid-based 2D level design system. Components: Grid (parent), Tilemap (renders tiles), TilemapCollider2D (physics). Paint tiles using the Tile Palette window. Use Rule Tiles for auto-tiling (corners, edges auto-connect). Multiple tilemap layers for ground, walls, decorations.

**2D Lighting (URP)**: Requires URP with 2D Renderer. Light types: Freeform (custom shape), Sprite (cookie-based), Spot, Global, Point. Each light has intensity, color, and target sorting layers. Shadows work with ShadowCaster2D component. Normal maps on sprites enable dynamic 2D lighting.

## Patterns & Workflows

### Sprite Setup and Animation
```csharp
using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]
public class SpriteFlash : MonoBehaviour
{
    [SerializeField] private Color flashColor = Color.white;
    [SerializeField] private float flashDuration = 0.1f;

    private SpriteRenderer sr;
    private Color originalColor;
    private MaterialPropertyBlock mpb;

    private void Awake()
    {
        sr = GetComponent<SpriteRenderer>();
        originalColor = sr.color;
        mpb = new MaterialPropertyBlock();
    }

    // Call this when hit -- flash then restore color
    public async void Flash()
    {
        sr.color = flashColor;
        await Awaitable.WaitForSecondsAsync(flashDuration);
        sr.color = originalColor;
    }

    // Alternative: use MaterialPropertyBlock to avoid breaking batching
    public void FlashWithMPB()
    {
        sr.GetPropertyBlock(mpb);
        mpb.SetColor("_Color", flashColor);
        sr.SetPropertyBlock(mpb);

        // Schedule restore (using Invoke for simplicity)
        Invoke(nameof(RestoreColor), flashDuration);
    }

    private void RestoreColor()
    {
        sr.GetPropertyBlock(mpb);
        mpb.SetColor("_Color", originalColor);
        sr.SetPropertyBlock(mpb);
    }
}
```

### Sprite Sorting Configuration
```csharp
using UnityEngine;

public class ParallaxLayer : MonoBehaviour
{
    [SerializeField] private string sortingLayerName = "Background";
    [SerializeField] private int sortingOrder = 0;

    private SpriteRenderer sr;

    private void Awake()
    {
        sr = GetComponent<SpriteRenderer>();
        sr.sortingLayerName = sortingLayerName;
        sr.sortingOrder = sortingOrder;
    }
}
```

### Tilemap Setup and Scripting
```csharp
using UnityEngine;
using UnityEngine.Tilemaps;

public class TilemapController : MonoBehaviour
{
    [SerializeField] private Tilemap groundTilemap;
    [SerializeField] private Tilemap wallTilemap;
    [SerializeField] private TileBase wallTile;
    [SerializeField] private TileBase groundTile;

    // Set a tile at grid position
    public void PlaceWall(Vector3Int gridPos)
    {
        wallTilemap.SetTile(gridPos, wallTile);
    }

    // Remove a tile
    public void RemoveWall(Vector3Int gridPos)
    {
        wallTilemap.SetTile(gridPos, null);
    }

    // Convert world position to grid position
    public Vector3Int WorldToGrid(Vector3 worldPos)
    {
        return groundTilemap.WorldToCell(worldPos);
    }

    // Check if a tile exists at a position
    public bool HasWallAt(Vector3Int gridPos)
    {
        return wallTilemap.HasTile(gridPos);
    }

    // Fill a rectangular area
    public void FillArea(BoundsInt area, TileBase tile, Tilemap tilemap)
    {
        TileBase[] tiles = new TileBase[area.size.x * area.size.y * area.size.z];
        for (int i = 0; i < tiles.Length; i++) tiles[i] = tile;
        tilemap.SetTilesBlock(area, tiles);
    }
}
```

### Procedural Tilemap Generation
```csharp
using UnityEngine;
using UnityEngine.Tilemaps;

public class LevelGenerator : MonoBehaviour
{
    [SerializeField] private Tilemap floorMap;
    [SerializeField] private Tilemap wallMap;
    [SerializeField] private TileBase floorTile;
    [SerializeField] private TileBase wallTile;
    [SerializeField] private int width = 50;
    [SerializeField] private int height = 50;

    public void GenerateLevel()
    {
        floorMap.ClearAllTiles();
        wallMap.ClearAllTiles();

        for (int x = 0; x < width; x++)
        {
            for (int y = 0; y < height; y++)
            {
                var pos = new Vector3Int(x, y, 0);

                // Border walls
                if (x == 0 || x == width - 1 || y == 0 || y == height - 1)
                {
                    wallMap.SetTile(pos, wallTile);
                }
                else
                {
                    floorMap.SetTile(pos, floorTile);
                }
            }
        }

        // Refresh colliders after bulk tile placement
        wallMap.GetComponent<TilemapCollider2D>()?.ProcessTilemapChanges();
    }
}
```

### 2D Lighting Setup
```csharp
using UnityEngine;
using UnityEngine.Rendering.Universal;

// 2D Lighting requires URP 2D Renderer
// Setup: URP Asset > Renderer List > Add 2D Renderer
public class TorchLight : MonoBehaviour
{
    [SerializeField] private Light2D pointLight;
    [SerializeField] private float flickerAmount = 0.2f;
    [SerializeField] private float flickerSpeed = 5f;

    private float baseIntensity;

    private void Awake()
    {
        baseIntensity = pointLight.intensity;
    }

    private void Update()
    {
        // Simple flicker effect using Perlin noise
        float noise = Mathf.PerlinNoise(Time.time * flickerSpeed, 0f);
        pointLight.intensity = baseIntensity + (noise - 0.5f) * flickerAmount;
    }
}
```

## Code Examples

### Sprite Sheet Animation (Manual Control)
```csharp
using UnityEngine;

public class SpriteAnimator : MonoBehaviour
{
    [SerializeField] private Sprite[] frames;
    [SerializeField] private float fps = 12f;

    private SpriteRenderer sr;
    private int currentFrame;
    private float timer;

    private void Awake()
    {
        sr = GetComponent<SpriteRenderer>();
    }

    private void Update()
    {
        if (frames.Length == 0) return;

        timer += Time.deltaTime;
        if (timer >= 1f / fps)
        {
            timer -= 1f / fps;
            currentFrame = (currentFrame + 1) % frames.Length;
            sr.sprite = frames[currentFrame];
        }
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `SpriteRenderer.sprite` | Get/set the displayed sprite |
| `SpriteRenderer.color` | Tint color and alpha |
| `SpriteRenderer.flipX/flipY` | Mirror sprite without changing scale |
| `SpriteRenderer.sortingLayerName` | Set sorting layer |
| `SpriteRenderer.sortingOrder` | Set order within sorting layer |
| `Tilemap.SetTile(pos, tile)` | Place/remove tile at grid position |
| `Tilemap.GetTile(pos)` | Read tile at grid position |
| `Tilemap.WorldToCell(worldPos)` | Convert world to grid coordinates |
| `Tilemap.CellToWorld(cellPos)` | Convert grid to world coordinates |
| `Tilemap.ClearAllTiles()` | Remove all tiles |
| `Light2D` (URP) | 2D light component |
| `ShadowCaster2D` (URP) | 2D shadow casting component |
| `SpriteAtlas.GetSprite(name)` | Get sprite from atlas at runtime |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use 3D lighting for 2D games | Use URP 2D Renderer with Light2D | 3D lights don't interact with SpriteRenderer correctly |
| Set `SpriteRenderer.material` directly | Use `MaterialPropertyBlock` for per-instance changes | Direct material assignment breaks sprite batching |
| Use oversized textures for sprites | Use appropriate texture sizes and Sprite Atlas | Large textures waste VRAM; atlasing reduces draw calls |
| Set sorting order to random large numbers | Use organized Sorting Layers and sequential orders | Predictable sorting prevents visual artifacts |
| Use 3D colliders with Tilemap | Use `TilemapCollider2D` + `CompositeCollider2D` | 2D tilemaps need 2D physics; Composite merges collider shapes for performance |
| Import sprites as Default texture type | Set Texture Type to "Sprite (2D and UI)" | Wrong type disables sprite features (atlas, slicing, pivot) |

## Version Notes

- **Unity 6.0+**: URP 2D Renderer is production-ready with full lighting and shadow support.
- **Unity 6.0+**: Sprite Atlas V2 is the default. V1 atlas workflow deprecated.
- **Unity 6.0+**: `TilemapCollider2D.ProcessTilemapChanges()` replaces the old auto-refresh for better performance.
- **Unity 6.0+**: ShadowCaster2D supports custom shadow shapes beyond collider bounds.
