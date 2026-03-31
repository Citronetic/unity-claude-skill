[Image: image]

# 클래스

Tutorial

Beginner

+10XP

10 mins

8

(35)

Unity Technologies

[Image: 클래스]Summary

클래스를 사용하여 정보를 저장하고 구성하는 방법과, 클래스의 일부와 함께 작동하는 생성자를 생성하는 방법을 알아봅니다.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [데이터 유형](https://learn.unity.com/tutorial/data-types?projectId=5c8920b4edbc2a113b6bc26a)

다음: [인스턴스화](https://learn.unity.com/tutorial/instantiate?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 클래스

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 한국어

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### **SingleCharacterScript**

```csharp
using UnityEngine;
using System.Collections;

public class SingleCharacterScript : MonoBehaviour
{
    public class Stuff
    {
        public int bullets;
        public int grenades;
        public int rockets;

        public Stuff(int bul, int gre, int roc)
        {
            bullets = bul;
            grenades = gre;
            rockets = roc;
        }
    }


    public Stuff myStuff = new Stuff(10, 7, 25);
    public float speed;
    public float turnSpeed;
    public Rigidbody bulletPrefab;
    public Transform firePosition;
    public float bulletSpeed;


    void Update ()
    {
        Movement();
        Shoot();
    }


    void Movement ()
    {
        float forwardMovement = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        float turnMovement = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;

        transform.Translate(Vector3.forward * forwardMovement);
        transform.Rotate(Vector3.up * turnMovement);
    }


    void Shoot ()
    {
        if(Input.GetButtonDown("Fire1") && myStuff.bullets > 0)
        {
            Rigidbody bulletInstance = Instantiate(bulletPrefab, firePosition.position, firePosition.rotation) as Rigidbody;
            bulletInstance.AddForce(firePosition.forward * bulletSpeed);
            myStuff.bullets--;
        }
    }
}
```

#### **Inventory**

```csharp
using UnityEngine;
using System.Collections;

public class Inventory : MonoBehaviour
{
    public class Stuff
    {
        public int bullets;
        public int grenades;
        public int rockets;
        public float fuel;

        public Stuff(int bul, int gre, int roc)
        {
            bullets = bul;
            grenades = gre;
            rockets = roc;
        }

        public Stuff(int bul, float fu)
        {
            bullets = bul;
            fuel = fu;
        }

        // 생성자
        public Stuff ()
        {
            bullets = 1;
            grenades = 1;
            rockets = 1;
        }
    }


    // Stuff 클래스의 인스턴스(오브젝트) 생성
    public Stuff myStuff = new Stuff(50, 5, 5);

    public Stuff myOtherStuff = new Stuff(50, 1.5f);

    void Start()
    {
        Debug.Log(myStuff.bullets);
    }
}
```

#### **MovementControls**

```csharp
using UnityEngine;
using System.Collections;

public class MovementControls : MonoBehaviour
{
    public float speed;
    public float turnSpeed;


    void Update ()
    {
        Movement();
    }


    void Movement ()
    {
        float forwardMovement = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        float turnMovement = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;

        transform.Translate(Vector3.forward * forwardMovement);
        transform.Rotate(Vector3.up * turnMovement);
    }
}
```

#### **Shooting**

```csharp
using UnityEngine;
using System.Collections;

public class Shooting : MonoBehaviour
{
    public Rigidbody bulletPrefab;
    public Transform firePosition;
    public float bulletSpeed;


    private Inventory inventory;


    void Awake ()
    {
        inventory = GetComponent<Inventory>();
    }


    void Update ()
    {
        Shoot();
    }


    void Shoot ()
    {
        if(Input.GetButtonDown("Fire1") && inventory.myStuff.bullets > 0)
        {
            Rigidbody bulletInstance = Instantiate(bulletPrefab, firePosition.position, firePosition.rotation) as Rigidbody;
            bulletInstance.AddForce(firePosition.forward * bulletSpeed);
            inventory.myStuff.bullets--;
        }
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
