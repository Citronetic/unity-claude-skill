[Image: image]

# Creating Custom Rules with the PiXYZ RuleEngine

Tutorial

Beginner

+10XP

30 mins

26

(8)

Unity Technologies

[Image: Creating Custom Rules with the PiXYZ RuleEngine]Summary

The Rule Engine in the PiXYZ Plugin for Unity allows you to define rule sets to help optimize or stage your scene in an automatic way. In this tutorial you will learn how to create custome rles with the PiXYZ RuleEngine.

Languages available:

EnglishEnglishEnglish

## 1. Introduction

Q&A (0)

*This tutorial has been verified using Unity 2019 LTS*

The Rule Engine in the PiXYZ Plugin for Unity allows you to define Rule Sets to help optimize or stage your scene in an automatic way. Unlike the Toolbox, Rule Engine actions are applied sequentially, allowing one-click importing and optimizing and staging, which can be very handy when importing multiple similar files requiring the same kind of processing.

Mark step as complete

## 2. Creating the Custom Rule

Q&A (0)

Creating the custom rule is a straightforward process.

1. First, click PiXYZ > RuleEngine > Create New Rule Set. This will create a new Rule Set and place it within your Project Folder (**Figure 01**).

[Image: image]

2. Select your New Rule Set located in your Project file. You can rename this Rule Set to whatever you wish. Selecting the New Rule Set will show the interactive creation process in the Inspector window (**Figure 02**).

[Image: image]

3. Click on the ‘+’ in the Inspector within the shaded New Rule block. This is where we will add a starting point to the new rule. For example, using Latest Imported Model as your starting point, you know that the next rule block will operate on the latest model you have imported with PiXYZ (**Figure 03**).

[Image: image]

4. With the starting point created, we can now add our logic. Click the ‘+’ icon again. You will notice you can use the majority of the actions available in the Toolbox to create your own Rule Sets (**Figure 04**).

[Image: image]

5. You can add multiple actions, but keep in mind they will be executed sequentially, from top to bottom. To reorder the sequence of rules, click the three horizontal bars icon in the top-left of the rule you wish to move and drag it down or up in the sequence. When you’re ready to execute your new custom rule, you can run it directly by clicking Run (**Figure 05**).

[Image: image]

You can also run the Rule Set by linking your Rule Set in the Import Window or in Live Sync. And you can have multiple blocks of Rules within a single Rule Set. Clicking the ‘+’ icon underneath the New Rule block will create an additional block of Rules that you can modify for more specific control and organization of your Rule Set.

Mark step as complete

## 3. Conclusion

Q&A (0)

PiXYZ Rule Engine is a great tool for helping ease the process of importing multiple files that need the same amount of work. It’s designed to help optimize the process of managing multiple GameObjects instead of spending extra time doing everything manually. It’s important to become familiar with this tool as it will save you countless hours of repetitive work.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
