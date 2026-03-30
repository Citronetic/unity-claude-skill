[Image: image]

# Challenge: Setting up URP

Tutorial

intermediate

+10XP

15 mins

9

(157)

Unity Technologies

[Image: Challenge: Setting up URP]Summary

The goal of this exercise is to:

- Walk through the steps to import and setup URP in a Unity project.
- Convert a project from using the Standard Render Pipeline to URP
- Import URP from the Package Manager, and set up a URP Asset.
- Convert the Materials from an existing Standard Render Pipeline project to URP Materials
- Create new URP Materials and add them to new GameObjects.

Languages available:

EnglishEnglishEnglish

## 1. Installing the Universal Render Pipeline

Q&A (0)

- In Package Manager, locate the Universal RP (URP / Universal Render Pipeline)
- Select Install, and wait for the load to finish.

[Image: image]Mark step as complete

## 2. Setting up URP Materials

Q&A (0)

- Once installed, right click in the Projects Window and create a new Pipeline Asset
- Open your Graphics Settings, and assign the new Pipeline Asset to the Graphics parameter.
- If your project uses Materials with the Standard Shader, then you will need to convert these Materials to URP Materials (which use the URP Lit Shader).
- Convert your project’s Materials to use the URP Lit Shader by selecting **Edit**> **Render Pipeline**> **Universal Render** **Pipeline**> **Upgrade Project Materials to UniversalRP Materials**.

[Image: image]

- Double check your project’s Materials to ensure they’re ready to go.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
