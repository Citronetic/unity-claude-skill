[Image: image]

# Architecture and Polish

Tutorial

intermediate

+0XP

35 mins

57

(417)

Unity Technologies

[Image: Architecture and Polish]Summary

This part of the[2D Roguelike project](https://learn.unity.com/project/2d-roguelike-tutorial) wraps up development by adding UI and level transitions, sound effects, music, and touch controls.

Resources

- [2D Roguelike Project Assets](https://www.assetstore.unity3d.com/en/#!/content/29825?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951065945)

Languages available:

EnglishEnglishEnglish

## 1. Adding UI & Level Transitions

Q&A (0)

This is part 12 of 14 of the 2D Roguelike tutorial in which we create the UI and add code to the GameManager script to manage the level changes.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Please note that this lesson has been updated to reflect changes to Unity's API. Please refer to the upgrade guide PDF in your asset package.

#### GameManager

```csharp
using UnityEngine;
using System.Collections;
using System.Collections.Generic;        //Allows us to use Lists.
using UnityEngine.UI;                    //Allows us to use UI.

    public class GameManager : MonoBehaviour
    {
        //Time to wait before starting level, int seconds.
        public float levelStartDelay = 2f;
        //Delay between each Player turn.
        public float turnDelay = 0.1f;
        //Starting value for Player food points.
        public int playerFoodPoints = 100;
        //Static instance of GameManager which allows it to be accessed by any other script.
        public static GameManager instance = null;
        //Boolean to check if it's players turn, hidden in inspector but public.
        [HideInInspector] public bool playersTurn = true;

        //Text to display current level number.
        private Text levelText;
        //Image to block out level as levels are being set up, background for levelText.
        private GameObject levelImage;
        //Store a reference to our BoardManager which will set up the level.
        private BoardManager boardScript;
        //Current level number, expressed in game as "Day 1".
        private int level = 1;
        //List of all Enemy units, used to issue them move commands.
        private List<Enemy> enemies;
        //Boolean to check if enemies are moving.
        private bool enemiesMoving;
        //Boolean to check if we're setting up board, prevent Player from moving during setup.
        private bool doingSetup = true;

        //Awake is always called before any Start functions
        void Awake()
        {
            //Check if instance already exists
            if (instance == null)

                //if not, set instance to this
                instance = this;

            //If instance already exists and it's not this:
            else if (instance != this)

                //Then destroy this. This enforces our singleton pattern, meaning there can only ever be one instance of a GameManager.
                Destroy(gameObject);

            //Sets this to not be destroyed when reloading scene
            DontDestroyOnLoad(gameObject);

            //Assign enemies to a new List of Enemy objects.
            enemies = new List<Enemy>();

            //Get a component reference to the attached BoardManager script
            boardScript = GetComponent<BoardManager>();

            //Call the InitGame function to initialize the first level
            InitGame();
        }

        //This is called each time a scene is loaded.
        void OnLevelWasLoaded(int index)
        {
            //Add one to our level number.
            level++;
            //Call InitGame to initialize our level.
            InitGame();
        }

        //Initializes the game for each level.
        void InitGame()
        {
            //While doingSetup is true the player can't move, prevent player from moving while title card is up.
            doingSetup = true;

            //Get a reference to our image LevelImage by finding it by name.
            levelImage = GameObject.Find("LevelImage");

            //Get a reference to our text LevelText's text component by finding it by name and calling GetComponent.
            levelText = GameObject.Find("LevelText").GetComponent<Text>();

            //Set the text of levelText to the string "Day" and append the current level number.
            levelText.text = "Day " + level;

            //Set levelImage to active blocking player's view of the game board during setup.
            levelImage.SetActive(true);

            //Call the HideLevelImage function with a delay in seconds of levelStartDelay.
            Invoke("HideLevelImage", levelStartDelay);

            //Clear any Enemy objects in our List to prepare for next level.
            enemies.Clear();

            //Call the SetupScene function of the BoardManager script, pass it current level number.
            boardScript.SetupScene(level);

        }

        //Hides black image used between levels
        void HideLevelImage()
        {
            //Disable the levelImage gameObject.
            levelImage.SetActive(false);

            //Set doingSetup to false allowing player to move again.
            doingSetup = false;
        }

        //Update is called every frame.
        void Update()
        {
            //Check that playersTurn or enemiesMoving or doingSetup are not currently true.
            if(playersTurn || enemiesMoving || doingSetup)

                //If any of these are true, return and do not start MoveEnemies.
                return;

            //Start moving enemies.
            StartCoroutine (MoveEnemies ());
        }

        //Call this to add the passed in Enemy to the List of Enemy objects.
        public void AddEnemyToList(Enemy script)
        {
            //Add Enemy to List enemies.
            enemies.Add(script);
        }

        //GameOver is called when the player reaches 0 food points
        public void GameOver()
        {
            //Set levelText to display number of levels passed and game over message
            levelText.text = "After " + level + " days, you starved.";

            //Enable black background image gameObject.
            levelImage.SetActive(true);

            //Disable this GameManager.
            enabled = false;
        }

        //Coroutine to move enemies in sequence.
        IEnumerator MoveEnemies()
        {
            //While enemiesMoving is true player is unable to move.
            enemiesMoving = true;

            //Wait for turnDelay seconds, defaults to .1 (100 ms).
            yield return new WaitForSeconds(turnDelay);

            //If there are no enemies spawned (IE in first level):
            if (enemies.Count == 0)
            {
                //Wait for turnDelay seconds between moves, replaces delay caused by enemies moving when there are none.
                yield return new WaitForSeconds(turnDelay);
            }

            //Loop through List of Enemy objects.
            for (int i = 0; i < enemies.Count; i++)
            {
                //Call the MoveEnemy function of Enemy at index i in the enemies List.
                enemies[i].MoveEnemy ();

                //Wait for Enemy's moveTime before moving next Enemy,
                yield return new WaitForSeconds(enemies[i].moveTime);
            }
            //Once Enemies are done moving, set playersTurn to true so player can move.
            playersTurn = true;

            //Enemies are done moving, set enemiesMoving to false.
            enemiesMoving = false;
        }
    }
```

Mark step as complete

## 2. Audio and Sound Manager

Q&A (0)

This is part 13 of 14 of the 2D Roguelike tutorial in which we add the music, sound effects and scripting to control our sound effects.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### SoundManager

```csharp
using UnityEngine;
using System.Collections;

    public class SoundManager : MonoBehaviour
    {
        //Drag a reference to the audio source which will play the sound effects.
        public AudioSource efxSource;
        //Drag a reference to the audio source which will play the music.
        public AudioSource musicSource;
        //Allows other scripts to call functions from the SoundManager
        public static SoundManager instance = null;
        //The lowest a sound effect will be randomly pitched.
        public float lowPitchRange = .95f;
        //The highest a sound effect will be randomly pitched.
        public float highPitchRange = 1.05f;

        void Awake ()
        {
            //Check if there is already an instance of SoundManager
            if (instance == null)
                //if not, set it to this.
                instance = this;
            //If instance already exists:
            else if (instance != this)
                //Destroy this, this enforces our singleton pattern so there can only be one instance of SoundManager.
                Destroy (gameObject);

            //Set SoundManager to DontDestroyOnLoad so that it won't be destroyed when reloading our scene.
            DontDestroyOnLoad (gameObject);
        }

        //Used to play single sound clips.
        public void PlaySingle(AudioClip clip)
        {
            //Set the clip of our efxSource audio source to the clip passed in as a parameter.
            efxSource.clip = clip;

            //Play the clip.
            efxSource.Play ();
        }

        //RandomizeSfx chooses randomly between various audio clips and slightly changes their pitch.
        public void RandomizeSfx (params AudioClip[] clips)
        {
            //Generate a random number between 0 and the length of our array of clips passed in.
            int randomIndex = Random.Range(0, clips.Length);

            //Choose a random pitch to play back our clip at between our high and low pitch ranges.
            float randomPitch = Random.Range(lowPitchRange, highPitchRange);

            //Set the pitch of the audio source to the randomly chosen pitch.
            efxSource.pitch = randomPitch;

            //Set the clip to the clip at our randomly chosen index.
            efxSource.clip = clips[randomIndex];

            //Play the clip.
            efxSource.Play();
        }
    }
```

Mark step as complete

## 3. Adding Mobile Controls

Q&A (0)

This is part 14 of 14 of the 2D Roguelike tutorial in which we add mobile touch screen controls to our player script.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### Player

```csharp
using UnityEngine;
using System.Collections;
using UnityEngine.UI;    //Allows us to use UI.

    //Player inherits from MovingObject, our base class for objects that can move, Enemy also inherits from this.
    public class Player : MovingObject
    {
        //Delay time in seconds to restart level.
        public float restartLevelDelay = 1f;
        //Number of points to add to player food points when picking up a food object.
        public int pointsPerFood = 10;
        //Number of points to add to player food points when picking up a soda object.
        public int pointsPerSoda = 20;
        //How much damage a player does to a wall when chopping it.
        public int wallDamage = 1;
        //UI Text to display current player food total.
        public Text foodText;
        //1 of 2 Audio clips to play when player moves.
        public AudioClip moveSound1;
        //2 of 2 Audio clips to play when player moves.
        public AudioClip moveSound2;
        //1 of 2 Audio clips to play when player collects a food object.
        public AudioClip eatSound1;
        //2 of 2 Audio clips to play when player collects a food object.
        public AudioClip eatSound2;
        //1 of 2 Audio clips to play when player collects a soda object.
        public AudioClip drinkSound1;
        //2 of 2 Audio clips to play when player collects a soda object.
        public AudioClip drinkSound2;
        //Audio clip to play when player dies.
        public AudioClip gameOverSound;

        //Ussed to store a reference to the Player's animator component.
        private Animator animator;
        //Used to store Player food points total during level.
        private int food;
        //Used to store locaiton of screen touch origin for mobile controls.
        private Vector2 touchOrigin = -Vector2.one;

        //Start overrides the Start function of MovingObject
        protected override void Start ()
        {
            //Get a component reference to the Player's animator component
            animator = GetComponent<Animator>();

            //Get the current food point total stored in GameManager.instance between levels.
            food = GameManager.instance.playerFoodPoints;

            //Set the foodText to reflect the current player food total.
            foodText.text = "Food: " + food;

            //Call the Start function of the MovingObject base class.
            base.Start ();
        }

        //This function is called when the behaviour becomes disabled or inactive.
        private void OnDisable ()
        {
            //When Player object is disabled, store the current local food total in the GameManager so it can be re-loaded in next level.
            GameManager.instance.playerFoodPoints = food;
        }

        private void Update ()
        {
            //If it's not the player's turn, exit the function.
            if(!GameManager.instance.playersTurn) return;

            int horizontal = 0;      //Used to store the horizontal move direction.
            int vertical = 0;        //Used to store the vertical move direction.

            //Check if we are running either in the Unity editor or in a standalone build.
            #if UNITY_STANDALONE || UNITY_WEBPLAYER

            //Get input from the input manager, round it to an integer and store in horizontal to set x axis move direction
            horizontal = (int) (Input.GetAxisRaw ("Horizontal"));

            //Get input from the input manager, round it to an integer and store in vertical to set y axis move direction
            vertical = (int) (Input.GetAxisRaw ("Vertical"));

            //Check if moving horizontally, if so set vertical to zero.
            if(horizontal != 0)
            {
                vertical = 0;
            }
            //Check if we are running on iOS, Android, Windows Phone 8 or Unity iPhone
            #elif UNITY_IOS || UNITY_ANDROID || UNITY_WP8 || UNITY_IPHONE

            //Check if Input has registered more than zero touches
            if (Input.touchCount > 0)
            {
                //Store the first touch detected.
                Touch myTouch = Input.touches[0];

                //Check if the phase of that touch equals Began
                if (myTouch.phase == TouchPhase.Began)
                {
                    //If so, set touchOrigin to the position of that touch
                    touchOrigin = myTouch.position;
                }

                //If the touch phase is not Began, and instead is equal to Ended and the x of touchOrigin is greater or equal to zero:
                else if (myTouch.phase == TouchPhase.Ended && touchOrigin.x >= 0)
                {
                    //Set touchEnd to equal the position of this touch
                    Vector2 touchEnd = myTouch.position;

                    //Calculate the difference between the beginning and end of the touch on the x axis.
                    float x = touchEnd.x - touchOrigin.x;

                    //Calculate the difference between the beginning and end of the touch on the y axis.
                    float y = touchEnd.y - touchOrigin.y;

                    //Set touchOrigin.x to -1 so that our else if statement will evaluate false and not repeat immediately.
                    touchOrigin.x = -1;

                    //Check if the difference along the x axis is greater than the difference along the y axis.
                    if (Mathf.Abs(x) > Mathf.Abs(y))
                        //If x is greater than zero, set horizontal to 1, otherwise set it to -1
                        horizontal = x > 0 ? 1 : -1;
                    else
                        //If y is greater than zero, set horizontal to 1, otherwise set it to -1
                        vertical = y > 0 ? 1 : -1;
                }
            }

            //End of mobile platform dependent compilation section started above with #elif
            #endif

            //Check if we have a non-zero value for horizontal or vertical
            if(horizontal != 0 || vertical != 0)
            {
                //Call AttemptMove passing in the generic parameter Wall, since that is what Player may interact with if they encounter one (by attacking it)
                //Pass in horizontal and vertical as parameters to specify the direction to move Player in.
                AttemptMove<Wall> (horizontal, vertical);
            }
        }

        //AttemptMove overrides the AttemptMove function in the base class MovingObject
        //AttemptMove takes a generic parameter T which for Player will be of the type Wall, it also takes integers for x and y direction to move in.
        protected override void AttemptMove <T> (int xDir, int yDir)
        {
            //Every time player moves, subtract from food points total.
            food--;

            //Update food text display to reflect current score.
            foodText.text = "Food: " + food;

            //Call the AttemptMove method of the base class, passing in the component T (in this case Wall) and x and y direction to move.
            base.AttemptMove <T> (xDir, yDir);

            //Hit allows us to reference the result of the Linecast done in Move.
            RaycastHit2D hit;

            //If Move returns true, meaning Player was able to move into an empty space.
            if (Move (xDir, yDir, out hit))
            {
                //Call RandomizeSfx of SoundManager to play the move sound, passing in two audio clips to choose from.
                SoundManager.instance.RandomizeSfx (moveSound1, moveSound2);
            }

            //Since the player has moved and lost food points, check if the game has ended.
            CheckIfGameOver ();

            //Set the playersTurn boolean of GameManager to false now that players turn is over.
            GameManager.instance.playersTurn = false;
        }

        //OnCantMove overrides the abstract function OnCantMove in MovingObject.
        //It takes a generic parameter T which in the case of Player is a Wall which the player can attack and destroy.
        protected override void OnCantMove <T> (T component)
        {
            //Set hitWall to equal the component passed in as a parameter.
            Wall hitWall = component as Wall;

            //Call the DamageWall function of the Wall we are hitting.
            hitWall.DamageWall (wallDamage);

            //Set the attack trigger of the player's animation controller in order to play the player's attack animation.
            animator.SetTrigger ("playerChop");
        }

        //OnTriggerEnter2D is sent when another object enters a trigger collider attached to this object (2D physics only).
        private void OnTriggerEnter2D (Collider2D other)
        {
            //Check if the tag of the trigger collided with is Exit.
            if(other.tag == "Exit")
            {
                //Invoke the Restart function to start the next level with a delay of restartLevelDelay (default 1 second).
                Invoke ("Restart", restartLevelDelay);

                //Disable the player object since level is over.
                enabled = false;
            }

            //Check if the tag of the trigger collided with is Food.
            else if(other.tag == "Food")
            {
                //Add pointsPerFood to the players current food total.
                food += pointsPerFood;

                //Update foodText to represent current total and notify player that they gained points
                foodText.text = "+" + pointsPerFood + " Food: " + food;

                //Call the RandomizeSfx function of SoundManager and pass in two eating sounds to choose between to play the eating sound effect.
                SoundManager.instance.RandomizeSfx (eatSound1, eatSound2);

                //Disable the food object the player collided with.
                other.gameObject.SetActive (false);
            }

            //Check if the tag of the trigger collided with is Soda.
            else if(other.tag == "Soda")
            {
                //Add pointsPerSoda to players food points total
                food += pointsPerSoda;

                //Update foodText to represent current total and notify player that they gained points
                foodText.text = "+" + pointsPerSoda + " Food: " + food;

                //Call the RandomizeSfx function of SoundManager and pass in two drinking sounds to choose between to play the drinking sound effect.
                SoundManager.instance.RandomizeSfx (drinkSound1, drinkSound2);

                //Disable the soda object the player collided with.
                other.gameObject.SetActive (false);
            }
        }

        //Restart reloads the scene when called.
        private void Restart ()
        {
            //Load the last scene loaded, in this case Main, the only scene in the game.
            Application.LoadLevel (Application.loadedLevel);
        }

        //LoseFood is called when an enemy attacks the player.
        //It takes a parameter loss which specifies how many points to lose.
        public void LoseFood (int loss)
        {
            //Set the trigger for the player animator to transition to the playerHit animation.
            animator.SetTrigger ("playerHit");

            //Subtract lost food points from the players total.
            food -= loss;

            //Update the food display with the new total.
            foodText.text = "-"+ loss + " Food: " + food;

            //Check to see if game has ended.
            CheckIfGameOver ();
        }

        //CheckIfGameOver checks if the player is out of food points and if so, ends the game.
        private void CheckIfGameOver ()
        {
            //Check if food point total is less than or equal to zero.
            if (food <= 0)
            {
                //Call the PlaySingle function of SoundManager and pass it the gameOverSound as the audio clip to play.
                SoundManager.instance.PlaySingle (gameOverSound);

                //Stop the background music.
                SoundManager.instance.musicSource.Stop();

                //Call the GameOver function of GameManager.
                GameManager.instance.GameOver ();
            }
        }
    }
```

Are you stuck? [Let a qualified expert get you across the finish line.](https://livehelp.unity.com/client/question/?utm_campaign=connect_americas_acquisition_2019-LiveHelp-Launch&utm_content=LIVEHELP_LEARN-01-all&utm_medium=link&utm_source=learn)

Mark step as complete

## Complete this Tutorial

Mark all steps complete
