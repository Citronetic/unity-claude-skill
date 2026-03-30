[Image: image]

# Create and interpret basic Analytics reports

Tutorial

Beginner

+10XP

25 mins

19

Unity Technologies

[Image: Create and interpret basic Analytics reports]Summary

In this tutorial, you’ll review the default reports that are included on the Unity Dashboard and learn several methods to visualize and organize your data.

Languages available:

日本語English日本語日本語

## 1.  Overview

Q&A (0)

Analytics includes several default reports that you can use to view common metrics of your game. It also includes a funnel feature, Data Explorers, both in the Dashboard and in structured query language (SQL), as well as an Event Browser to troubleshoot events.

ステップを完了としてマーク

## 2. Default Dashboard reports

Q&A (0)

The [Unity Gaming Services Dashboard](https://dashboard.unity3d.com/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954158963) provides a number of pre-built reports.

To view pre-built reports on the Unity Dashboard, follow this instruction:

**1.** In the Unity Dashboard, navigate to **Analytics**> **Dashboards** > **Game performance**.

This view contains an overview of player counts and session data. You can filter it by country, platform, version, acquisition channel, and pre-defined audience criteria.

Descriptions of these reports are as follows:

- **Daily new users**:****The number of players that have sent data from your game for the first time, each calendar day. Use this chart to see how many new players have started playing your game. This is distinct from installs or download, as that data is only available through the app stores.
- **Daily active users (DAU)**: The number of players active in your game. An active player is any player that starts a session. **DAU** is the number of players active on each calendar day.
- **Monthly new users**: The number of players that have sent data from your game for the first time, each calendar month. Use this chart to see how many new players have started playing your game.
- **Weekly and monthly active users (WAU and MAU)**: The number of players active in your game. An active player is any player that starts a session. **WAU** is the number of players active in the previous seven days from any given calendar day. **MAU** is the number of players active in the previous 30 days from any given calendar day.
- **Session length**: The average session length for players playing your game. Use this chart to see how long players are playing your game for and how that changes over time. For example, an average session length of four minutes on July 18th means player sessions were an average of four minutes long that day. We’ve removed sessions that are shorter than three seconds and longer than four hours to prevent the average from being skewed by improbable session lengths.
- **Session per DAU**: The number of sessions per DAU. Use this chart to see how many sessions, on average, your players are playing each day. For example, an average number of sessions per DAU of three on May 25th means active players played an average of three sessions each day.

There are more default reports to explore on the Analytics Dashboard’s navigation menu. They provide detailed information on revenue, retention, and user acquisition. The **Data Explorer**, **Custom Dashboard**, **Funnels**, and **SQL Data Explorer** tools let you create your own charts.

ステップを完了としてマーク

## 3. Create a custom funnel

Q&A (0)

Use funnels to find out more about the First-Time User Experience (FTUE). A **funnel** can tell you, for example, whether the user went all the way through a tutorial, and how many levels your users go through before they lose interest.

To create a funnel, follow these instructions:

**1.** In the Unity Dashboard, go to **Analytics** > **Funnels**.

**2.** Select the **+** **New Funnel** button.

**3.** Choose the date range, country, platform, version, and audience for your data.

You must have a minimum of two steps for your funnel to work.

**4.** Open the **Step** **1 dropdown**and****select****the **levelCompleted**event you created earlier.

**5.** Select the **+** **Add Parameter** button and select the **levelName**parameter.

**6.** Select the **Equal To** verification and enter “level1” as the parameter value for **Step** **1**.

**7.** Copy the first step by selecting the **Duplicate** button on the right. Change the parameter to “level2”.

**8.** Delete the empty **Step** **3**.

**9.** Select the **Apply** button to run the report.

**10.** Save your funnel by selecting **Save Funnel.**Fill the name and description in the **Save Funnel** window, then select **Save**.

[Image: Creating the funnel on the Event Steps view.]

The report will give you an overview of how far your users got through your game.

Since there are four randomly completed levels in the game, you should add more steps to identify which levels users are reaching. In this case, users are completing up to level 2.

[Image: Funnel results overview.]

ステップを完了としてマーク

## 4. Use Data Explorer

Q&A (0)

Use the **Data Explorer** tool to filter and use your data based on user metrics or events, and group them by platform, country, or version.

This tool is aimed at users who are not comfortable writing SQL queries. You can query your game data based on predefined metrics or events, apply dimension filters, and group your data by specific values, which splits the results into multiple series. You can toggle between bar chart, line graph, and area graph visualizations.

To explore your data with the Data Explorer, follow these instructions:

**1.** On the Unity Dashboard, navigate to **Analytics** > **Data Explorer**>**Create your first report**.

**2.** Add the **levelCompleted**event.

**3.** Select the **Aggregate by Sum**button.

**4.** Observe you can view a graph of the number of events per day for the level event.

**Tip**: You can also filter this event by the **levelName**parameter.

**5.** Select **Add Dimension**>**Event Parameter**.

**6**. Delete the **Day** **Dimension**.

This graph will show you how many levels have been completed over the past 14 days.

**7.** Change the date range to your desired date range.

**8.** Select****the**Save**button.

**9.** Name the report so it can be used at a later date.

[Image:  Data Explorer window.]

ステップを完了としてマーク

## 5. Use the SQL Data Explorer

Q&A (0)

Use the **SQL Data Explorer** tool to write and execute read-only SQL queries on your data, plot the results into different types of visualizations, and add those to the Unity Analytics Dashboard. By doing this, you can gain insights that might not have surfaced with other Analytics products.

**SQL** is a programming language used to communicate with databases. A basic understanding of writing SQL queries is required to use SQL Data Explorer.

To explore your data with SQL Data Explorer, follow these instructions:

**1.** Go to the Unity Dashboard and navigate to **Analytics** > **SQL Data Explorer**.

**2.** Enter the following basic SQL query to view your daily active users for the last 30 days:

```
select
      EVENT_DATE as "Event Date",
      EVENT_JSON:levelName::STRING as "Level Name",
      count(distinct user_id) as "Players"
from
      EVENTS
where
      EVENT_DATE > CURRENT_DATE-30
      AND EVENT_NAME = 'levelCompleted'
group by
      EVENT_DATE,
      EVENT_JSON:levelName::STRING
order by
      EVENT_JSON:levelName::STRING
```

The **group by** and **order by** lines use the **levelName** parameter to reveal the number of players that have attempted each level.

**3.** Choose the **Event Date** for your X axis.

**4.** Choose the **Players**as your Y axis.

**5**. Select the **Apply** button to see the chart.

**6.** Once you’re satisfied with the report, select the **Save Report**button.

**7.** Name your report according to the data you are displaying for easy access in the future, and select the **Confirm**button.

For advanced queries, check out our [SQL Cookbook](https://github.com/Unity-Technologies/UGS-SQL-Cookbook).

ステップを完了としてマーク

## 6. Validate events with the Event Browser

Q&A (0)

While building your game and implementing analytics events, you may encounter issues such as events not showing up even if the Editor is showing them as being recorded. The **Event Browser** tool can help you troubleshoot any events that are failing event validation and being rejected. To view this information, follow this instruction:

1. In the Unity Dashboard, go to **Analytics**>**Event Browser** and select **Invalid Events**.

[Image: Event Browser showing invalid events.]

This view will list the events that are failing, along with the reason and a copy of the event data that was sent.

Below is a table that showcases some of the most common issues when implementing analytics events and their solutions.

[Image: image]

If you’re not getting events on your mobile device, check out [our guide using Charles Proxy](https://support.unity.com/hc/en-us/articles/115002917683-Using-Charles-Proxy-with-Unity) so you can see exactly what events you are sending from the game client.

If any other problems arise, please visit the [Analytics forum](https://discussions.unity.com/tag/unity-analytics) or open a [Unity support ticket](https://support.unity.com/hc/en-us/requests/new?ticket_form_id=360001936712&serviceName=analytics).

ステップを完了としてマーク

## 7. Next steps

Q&A (0)

You’ve completed this learning experience for Unity Analytics! You’ve learned how to configure your Unity projects to use Unity Analytics, how to use standard and custom events and set up their parameters, and how to visualize your Analytics data on the Dashboard.

These tutorials are enough to get you started, but there’s more to explore. To learn about more ways to use Analytics in your games, check out the [Unity Analytics documentation in the Unity Manual](https://docs.unity.com/en-us/analytics).

Analytics is a part of Unity Gaming Services (UGS). Learn about other services available with your UGS subscription on the [Unity Gaming Services page of the Unity website](https://unity.com/solutions/gaming-services).

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
