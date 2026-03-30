[Image: image]

# Develop a Backend

Tutorial

advanced

+10XP

180 mins

1

Unity Technologies

[Image: Develop a Backend]Summary

The Backend of a Unity Cloud Service is the traditional cloud service that takes connections from game SDKs or admin UIs.

In this tutorial, you will learn how a backend is created in Unity Cloud Service development.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

The Backend of a Unity Cloud Service is the traditional cloud service that takes connections from game SDKs or admin UIs.

[Image: image]

In this tutorial, you will learn how a backend is created in Unity Cloud Service development.

Mark step as complete

## 2. How does Unity Architectural Services do backend development?

Q&A (0)

The **backend** is created in the Go programming language, and built into a Linux Docker container.

Backend services are run in Google Cloud using Google Kubernetes Engine.

APIs are exposed to Unity users and game players via [Unity Gateway Service](https://services.docs.internal.unity3d.com/unity-services-gateway/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951445253), using [Player Identity](https://confluence.unity3d.com/pages/viewpage.action?spaceKey=PLAYERIDENTITY&title=Player+Identity&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951445253) or [Developer Identity](https://services.docs.internal.unity3d.com/unity-services-identity-documentation/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951445253) authentication and authorization.

Mark step as complete

## 3. Select a recommended IDE

Q&A (0)

JetBrains offers tools for creation and development of Go and React projects, named [Goland](https://www.jetbrains.com/go/) and [WebStorm](https://www.jetbrains.com/webstorm/), and are recommended for a complete IDE experience. Registration can be obtained from [IT by license server](https://confluence.unity3d.com/pages/viewpage.action?pageId=74580504&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951445253).

An unsupported, lightweight, alternative is [Visual Studio Code](https://code.visualstudio.com/), with appropriate [extensions](https://marketplace.visualstudio.com/VSCode).

Mark step as complete

## 4. Select a recommended Database

Q&A (0)

Traditional SQL databases are not recommended for new services, as they have difficulty scaling horizontally (or can’t at all). Scaling vertically is a limiting factor, as advanced hardware is far more expensive than commodity servers (economies of scale) as well as availability of more performant hardware has a cap (you can only expand memory and CPU so much).

Beyond scaling, traditional SQL databases are more difficult to maintain over time. Migrations for live data to a larger, vertically scaled server, require twice as much allocated compute and storage for a long period of replication time. Changes to the data schema and relationships between data types require extensive migration scripting or code, and can cause additional problems during service version rollbacks.

[ScyllaDB](https://www.scylladb.com/) is recommended for organizing semi-structured data into “key-key-value” tuples, for high-frequency read or write scenarios. Rows are horizontally distributed across the database server cluster using the partition and row keys. Both Apache Cassandra and DynamoDB database compatibility modes exist for workload migrations. ScyllaDB was designed as a highly-performant “rewrite” of Cassandra in C++.

[MongoDB](https://www.mongodb.com/) is recommended for organizing unstructured data into “collections” of “documents”, which can also be used with Geospatial (GIS) queries, for high-frequency read scenarios. Queries can link “nested” documents across Collections, and [sharding strategies](https://www.mongodb.com/blog/post/performance-best-practices-sharding) inform how the data is distributed across the database cluster.

In the case where structured data is used along with a requirement for consistency and atomicity, [CockroachDB](https://www.cockroachlabs.com/docs/stable/orchestrate-cockroachdb-with-kubernetes-multi-cluster.html) is recommended to provide horizontal scaling and a Postgres-compatible SQL interface in both Anthos and GKE. CockroachDB is used instead of a public-cloud specific system, such as Google Spanner, in order to have a fully supported system on both on-premises or private cloud scenarios, and 1-to-1 on a software engineer’s development machine. Emulation systems are not updated with the frequency as the actual cloud-specific system, which is an additional downside to the restricted deployment.

Mark step as complete

## 5. Set up your Backend

Q&A (0)

Set up the backend of your mini cloud service. Work with your onboarding buddy to make sure it follows recommended conventions and meets requirements.

Mark step as complete

## 6. Next Steps

Q&A (0)Mark step as complete

## Complete this Tutorial

Mark all steps complete
