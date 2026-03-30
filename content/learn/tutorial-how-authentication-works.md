[Image: image]

# How authentication works

Tutorial

foundational

+0XP

0 mins

0

Unity Technologies

[Image: How authentication works]Summary

**Anonymous authentication**

Once set up in Unity Gaming Services (UGS), anonymous sign-in can be implemented using the **SignInAnonymouslyAsync();** method. This means it can happen automatically without the user doing anything.

**The process below shows how anonymous sign-in works.**

Languages available:

EnglishEnglishEnglish

## 1. User opens the app

Q&A (0)[Image: image]

Once the **SignInAnonymouslyAsync();** method is called, anonymous sign-in creates a new user for the game session without any input from the player.

Mark step as complete

## 2. Player ID created

Q&A (0)[Image: image]

A player ID is a unique, random string of numbers used to identify returning and new users on different devices and external providers.

Mark step as complete

## 3. Session token generated

Q&A (0)[Image: image]

A session token is generated and stored in PlayerPrefs. This session token can be used to authorize the player in the future using either anonymous or session login.

Mark step as complete

## 4. Authentication token generated

Q&A (0)[Image: image]

An authentication token is generated, which contains the PlayerID and is used to prevent anyone from overriding it.

Mark step as complete

## 5. User opens the app a second time

Q&A (0)[Image: image]

When a user leaves the app, then re-opens it, there is a cached session token. In this case the **SignInAnonymouslyAsync();** method recovers the existing credentials of the cached user.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
