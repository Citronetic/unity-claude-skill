[Image: image]

# Creating your strategy

Tutorial

Beginner

+10XP

30 mins

5

(81)

Unity Technologies

[Image: Creating your strategy]Summary

In this tutorial, you’ll :

- Explore how to plan your Monetization strategy
- Examine tips and best practices for testing
- Explore how to implement, measure and iterate your strategy
- Organize your goals and deliverables using a[monetization and UA strategy checklist](https://connect-prd-cdn.unity.com/20200311/158fa132-5779-4550-a001-c6742746ecc1/Monetization%20and%20UA%20Strategy%20Checklist.pdf)
- Reflect on whether you should use interstitials instead of rewarded ads as part of your strategy

Resources

- [Monetization Glossary.pdf](https://unity-connect-prd.storage.googleapis.com/20200309/4cf4d6d3-e9e2-49ae-8d1a-45cf5f9a6b21/Monetization%20Glossary.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954260707)
- [Qualitative Monetization Research - Sample Interview Questionnaire.pdf](https://unity-connect-prd.storage.googleapis.com/20200311/70d5f732-4889-4cf8-b57e-d6d25704656c/Qualitative%20Monetization%20Research%20-%20Sample%20Interview%20Questionnaire.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954260707)
- [Monetization and UA Strategy Checklist.pdf](https://unity-connect-prd.storage.googleapis.com/20200311/c9122a3f-bbc0-4031-9bd5-844be09c4257/Monetization%20and%20UA%20Strategy%20Checklist.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954260707)

Languages available:

EnglishEnglishEspañol日本語English

## 1. Overview

Q&A (0)

In [Implementing performance-driven paid UA](https://learn.unity.com/tutorial/implementing-performance-driven-paid-user-acquisition?publish=true#), you examined the key partner ecosystem and different solutions available for various user acquisition needs. In this tutorial, you will explore the basics for creating a Monetization and User Acquisition strategy.

Mark step as complete

## 2. Preparing for monetization

Q&A (0)

As you’ve explored already in this course, a game should be designed with monetization methods already in mind. This includes some planning as to where IAP and ads will be integrated into your core game loop.

Make sure to do your homework by researching the placements and formats used in other games designing your own game, as it will be a bit more difficult to make significant changes to these components once your game is live.

If you are already deeper into your development cycle without having thought about monetization yet, don’t worry —  you’re not out of luck. You may simply have to do more testing and iterating to ensure your monetization efforts are keeping your players engaged.

Mark step as complete

## 3.  Plan your marketing strategy and brand identity

Q&A (0)

Before you even start trying to monetize your game or acquire new users, think about the brand identity of your game. This includes a range of different elements, including:

- Your target audience (what they respond well to)
- Art
- Creative themes

A clearly defined brand identity will help you craft the right messaging, create the right app store listing, and generate creative and concepts that your target audience will respond to.

Creating your own marketing strategy

The top five key things you need to do to create a comprehensive marketing strategy are:

**1.**  Define your target audience

**2.** Define your goals, objectives and key performance indicators

**3.** Identify key challenges and plan how you will overcome them

**4.** Craft messaging for your target users

**5.** Identify channels where you can reach your audience with your message, and consider how you will do this

Identify the outcomes you want to achieve

It’s important to understand the available channels where you can get your message across and identify exactly what outcome you want to achieve. Do you just want users to know what your game is, or do you want to be more focused on getting people to actually install the game? These two goals may require different channels, different messaging, or both.

You can then identify the resources needed to utilize those channels, and a way to measure your efforts to ensure you are spending money effectively to grow your game.

Mark step as complete

## 4.  Planning your measures of success

Q&A (0)

It’s really important to define your measures of success in advance.This may look different at various stages of your game’s lifecycle.  For example, you may find that you want to only monetize through IAP for the first few months of your game’s launch in order to minimize any disruption to gameplay and grow your users as fast as you can organically.

You may decide not to activate ads in your app until you've reached a critical mass of users. If that’s the case, you should still build ad placements into the desired locations of your game and just keep them empty until you’re ready to serve the ads.

Planning for this ahead of time will make the execution of your strategy much simpler.

Case Study: Castle Fusion

In **Castle Fusion by Shark Jump**, ad placements prompt users to watch a video in exchange for a chance to spin the wheel and get a reward as seen in [Castle Fusion's Monetization touchpoints](https://learn.unity.com/tutorial/deeper-dive-into-monetization#5e663c74edbc2a01c81f7483).

This type of ad can only exist because the game designers had already planned to include consumable items (in this case gems), which can be used both in gameplay and as a reward for engaging with an ad.

Had the developer in this case not introduced consumable items in the game, rewarded video ads would not be a viable option unless they went back and changed their game design, which may have been extremely complex and time-consuming.

Let's explore some tips and best practices for testing next.

Mark step as complete

## 5. Identifying what to test

Q&A (0)

You can test just about anything related to monetization (such as in-app purchases) and user acquisition (such as your referral process)  in your game.  However, as you explored earlier in the course, it’s important to focus on one thing at a time so you can identify exactly what has caused a particular change.

Consider the following guidance if you’re unsure what to start testing:

- New ad placements, for example adding a trigger point for a Rewarded Video ad
- New ad formats, for example Rewarded Video, Interstitial, or Banner ads
- New prices for in-app purchases, for example lowering prices to reduce churn or increasing prices to boost revenue per player
- Different scaling for accumulating virtual currency, for example increasing the amount of currency a player gets after set periods or actions, to give them more purchasing power and increase the likelihood that they’ll remain engaged.

Before you test anything, you need to ensure you know exactly how you will be evaluating its success. Let's look at some common measures of success next.

Mark step as complete

## 6. Identifying measures for success

Q&A (0)

It’s important to identify the measures of success that are right for your game, and the particular element of it that you are testing, before you begin. This means that you will be able to effectively evaluate the impact of the changes that you make.

Common measures used to evaluate the success of testing include the following:

eCPM - effective cost per thousand impressions (ads only)

eCPM is the standard measure of pricing for digital ad inventory. Publishers have the ability to set target eCPM rates for selling inventory in their game so they can evaluate what people are willing to pay for various ad placements and formats. They can also use this to evaluate ad networks against each other, to see which networks are bringing them the highest prices from advertisers.

Fill rate (ads only)

Fill rate is the percentage of ad requests that get filled by the ad networks you work with. It is calculated by dividing the number of ad impressions an app actually serves, by the number of times an app requested an ad from a network. The reason this may be less than 100% is if you have a specified price point (eCPM) of which networks are not fully able to bring you advertisers willing to pay. Fill rate gives you an indicator of how much you can realistically demand for ad space in your game.

Retention (or players returning to your game) over 7 or 30 days

Depending on the type of game you operate, the timeframe you select might be longer or shorter. For example, deep games targeting committed gamers may have longer retention, while hypercasual games typically have shorter retention.

This is entirely expected, so there is no need to panic if you operate a hypercasual game. Just remember to use a shorter retention window as your baseline.

Attributable revenue

You may be able to easily view revenue in aggregate increase or decrease after making changes. However, you introduce more ads and/or IAP touchpoints in your game, your aggregate revenue number becomes a less accurate signal of the true impact of each individual change. If you run a lot of ads in your game, it’s unlikely that all revenue is coming from a single ad. Make sure that your analytics can isolate revenue impact to specific sources.

Mark step as complete

## 7. Testing your changes

Q&A (0)

Now that you’ve explored the importance of identifying measures for success before you begin, consider the following practical guidance for testing your changes.

Test one thing at a time.It’s worth repeating: if you want to try new ad placements, test one and see what happens before scaling your changes any further.

Focus on the gameplay experience

Keep gameplay at the forefront of your mind when testing. Make choices that maintain as engaging a player experience as possible, and. analyze any impact to retention.

Start with A/B testing

A/B testing is the simplest and most common way to test. It involves testing one version of an experience with some of your users, and another version with another equal quantity of users. Typically, there are no major behavioral differences within your control shown by any of the users included in the testing.

You can A/B test to identify whether ads are causing a retention loss, for example by showing one group of users no ads and evaluating what happens. Most research shows that ads/IAP have minimal effect on retention, but again, focus on the gameplay. Be reasonable about how many ads you show, and how often you do so.

You do not need to split an A/B test as 50% of your users in one group and 50% of your users in another. In order to reduce the impact of testing on your player base you can have smaller testing groups, where 10% are in one group and 10% in another, with the remaining 80% not exposed to the test at all.

As long as the two groups are comparable to each other and generate enough volume of data for you to analyze, your test should yield useful results.

Testing your user acquisition strategy

The same testing process applies to marketing and user acquisition. Identify your measures of success in advance.

Remember the very important metrics to pay attention to when your campaign is running that you explored in [Implementing performance-driven paid UA](https://learn.unity.com/tutorial/implementing-performance-driven-paid-user-acquisition?publish=true#).

Mark step as complete

## 8. Implementing your strategy

Q&A (0)

When you identify the changes you want to implement, make sure you have or will have the resources to implement it. If your vision is significantly greater than your resources, you might need to scale back and make smaller changes before you can execute your broader vision

This may include often-overlooked resourcing logistics, such as having:

- Sufficient design resources to create assets for UA campaigns
- A dedicated resource to execute and measure experiments
- Developer support, to integrate multiple ad networks for your monetization efforts

Try not to implement everything at once, as it can become difficult to isolate the impact each change has on your players and on your business.

Mark step as complete

## 9.  Implementing your strategy: key monetization guidance

Q&A (0)

Before you implement your monetization strategy, use the following guidance to help you refine your implementation plans:

Don’t try to implement your entire vision at once

There may be an endless list of tactics you wish to employ in your game right from the start. Narrow it down to the essentials and build from there. This will enable you to isolate the effects, positive or negative, to specific things you add or change in your game. It will also help you optimize over the long term.

Ensure your implementation matches your resources

It’s usually a better use of time to do three things exceptionally well than to do ten things of average or poor quality. For example, if your plan involves a robust set of ad networks managed through a mediation platform with many different ad formats and price points, having the developer of the game also manage the revenue generation from ads is likely going to be too much to manage.

Establish process not only to implement, but to maintain post implementation

Make sure that you establish processes that extend to the whole lifecycle of your game. For example, consider the following questions:

- Once your ads are in place, how will you test new ad formats?
- How often will you test new ad networks?
- Will you hire additional headcount to manage revenue generation more effectively?
- If you are using IAP, how often will you look to optimize pricing or expand your set of consumable items?

Having at least a general sense of answers to these questions will immediately give you a head start over your competition.

Future proof as much as you can

One simple way to set yourself up for long-term monetization success is to plan for what your game’s revenue generation may look like a year down the road. This may include having ad surfacing points at various points of your game which you might leverage in the future. These surfacing points can be empty with no ads being served until you are ready and resourced to do so.

The fewer technical changes you need to make in the future to accommodate a growing monetization program the better.

Establish partner evaluation criteria

A common misstep many developers make is to “set and forget” partner integrations after they occur. Whether it be an ad network, mediation provider, analytics provider, or something else make sure that you periodically evaluate whether it is delivering value in line with your expectations.

Remember, there are often new entrants into the market as well as emerging new capabilities from existing partners so it is worth auditing who you work with at least a few times a year.

Mark step as complete

## 10. Implementing your strategy: key user acquisition guidance

Q&A (0)

Before you implement your user acquisition strategy, use the following guidance to help you refine your implementation plans:

Identify the marketing channels you want to start with

In an ideal world, you might want to try to utilize various marketing channels so you can identify what works best for you. While a testing mentality is important, you should also try to narrow your choice down to where you can really invest your time and resources to get the most impact.

Ensure your implementation matches your resources

As you reviewed in the previous step, it’s usually a better use of time to do three things exceptionally well than to do ten things of average or poor quality. If your user acquisition plan involves a robust set of ad partners that all offer different pricing models, targeting methodology, and reporting, this may be challenging for you  to manage.

Give data enough time to mature

Once you know your specific payback period, whether that is 7 days, 14 days, or longer, give your campaigns at least that amount of time before deciding if they work or not. You should be willing to pivot your marketing budget quickly, and to try out new partners and channels, but don’t rush to conclusions before giving your investment enough time to show a return.

Be open to a hybrid of organic and paid efforts

You might think that you can rely on your game having organic or viral growth. The app stores are crowded and it can be challenging fighting for coveted space on a user’s device. That’s why you should consider utilizing both organic and paid marketing efforts. When these are combined, each can help influence the other.

Pay attention to user retention and player lifetime value (LTV)

Make sure you are still mindful of player retention and LTV metrics. While there are many optimizations you can make to your marketing tactics, if you are losing the players you are acquiring you may need to go back to the game design and analyze where players are dropping off and why.

It might make sense to first focus on fixing those fundamental elements of the core game loop, and then continue to invest in your marketing activities.

Mark step as complete

## 11. Create an Implementation strategy checklist

Q&A (0)

To keep yourself on track throughout your game’s development cycle, launch, and post-launch, make sure you have a checklist that includes:

- Critical items you need to account for
- Why you need to account for them
- What the specific deliverable is against each item

As an example, we’ve put together a sample checklist which you can refer to at any time. (You can find this checklist in the Materials section at the top of this tutorial)

Please note that this checklist covers both monetization and user acquisition. If you and your team structure focus predominantly on one or the other, you can adjust it accordingly.

Mark step as complete

## 12. Measuring your implementation's success

Q&A (0)

Whether you have the necessary internal analytics or choose to use a third party, make sure that everything you decide to track in the planning phase is supported by the tools you have access to.

This may include straightforward metrics like eCPM or revenue attribution (which touchpoints and/or partners actually drove your revenue), but may also include more sophisticated measures such as player lifetime value (LTV), retention rates, or user-level reporting to help with segmentation.

Review [Monetization solution providers](https://learn.unity.com/tutorial/monetization-solution-providers?publish=true#) if you’d like to refresh your memory of how these metrics are measured.

Mark step as complete

## 13. Separate your primary and secondary KPIs

Q&A (0)

Make sure the instrumentation of your analytics gives clear visibility into your key performance indicators (KPIs). It’s helpful to separate these into:

- Primary KPIs, the few select metrics you are using to evaluate whether or not your business is truly succeeding
- Secondary KPIs, less crucial measures which can provide key insights and potentially unlock opportunities that can help you deliver on your primary KPIs

An example of this is that total revenue may be a primary KPI, while your average player retention rate over 7 days may be a secondary KPI. While the secondary KPI may not be your ultimate measure of success, it strongly impacts your primary KPI of total revenue. Being able to track these KPIs with your analytics will make your life a lot easier and avoid consuming engineering resources in order to measure things you didn’t anticipate needing during your planning.

Mark step as complete

## 14.  Iterating and refining

Q&A (0)

The whole point of measuring the right things is to be able to take action on what you’ve learned.

Establish a clear process loop of **Measure > Learn > Deploy > Measure** on a regular cadence.This will enable you to continue growing, and to establish standards for you and other stakeholders to adhere to.

[Image: image]

If for any reason this process needs to change, ensure that you involve and engage all the relevant stakeholders.

Thinking about whether you should use interstitials instead of rewarded ads as part of your strategy? Let's ask the experts what they think.

Mark step as complete

## 15. Ask the experts!

Q&A (0)

Would you like to hear more about strategy from an expert?

Watch Cathal and Illya, both Unity monetization experts, discuss:

1. When should you use interstitials instead of rewarded ads and how do they affect retention?

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Mark step as complete

## 16. Summary

Q&A (0)

In this tutorial, you have:

- Explored how to plan your Monetization strategy
- Examined tips and best practices for testing
- Explored how to implement, measure and iterate your strategy
- Organized your goals and deliverables using a monetization and UA strategy checklist (you can find this checklist in the Materials section of this tutorial)
- Reflected on what strategies are best for which games

In [Refining and consolidating your monetization strategy](https://learn.unity.com/tutorial/refining-and-consolidating-your-strategy?publish=true#) explore the iterative evaluation cycle in more detail. You'll:

- Understand how to gather and interpret the data on your monetization
- Devise a qualitative monetization research questionnaire (you can find a template in the Materials section of this tutorial)
- Reflect on ways to refine your strategy (video)
- Answer some reflection questions on [a case study](http://response.unity3d.com/ads-case-study-next-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954260707)

Mark step as complete

## Complete this Tutorial

Mark all steps complete
