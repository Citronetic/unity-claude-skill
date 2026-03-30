[Image: image]

# Integrate, Deploy, and Monitor your service

Tutorial

advanced

+10XP

180 mins

1

Unity Technologies

[Image: Integrate, Deploy, and Monitor your service]Summary

At Unity, we use processes in compliance with Continuous Integration (CI) and Continuous Deployment (CD) best practices. Once a service is deployed, we use a variety of tools for monitoring and ensuring that it continues to meet privacy and security requirements.

In this tutorial, you will learn about Unity processes for CI, CD, and observability.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

At Unity, we use processes in compliance with Continuous Integration (CI) and Continuous Deployment (CD) best practices. Once a service is deployed, we use a variety of tools for monitoring and ensuring that it continues to meet privacy and security requirements.

In this tutorial, you will learn about Unity processes for CI, CD, and observability.

Mark step as complete

## 2. How Unity does CI/CD

Q&A (0)

[GitHub Actions](https://confluence.unity3d.com/display/DS/GitHub+Actions?ampDeviceId=45465dfe-2605-4eec-b043-6d169acd2108&ampSessionId=1774888727825&ampTimestamp=1774975299464) is recommended for continuous integration and deployment for backend and frontend projects. Templates are used to ensure that security and functional static analysis tools pass before pull requests are accepted.

CI for Packages is handled by the Unity “[Yamato](https://internaldocs.unity.com/yamato_continuous_integration/workflows/quick-start/)” system, and deployed using the Unity “[Bokken](https://internaldocs.unity.com/bokken_device_provisioning/)” system for testing on all platforms supported by the editor and engine. Yamato was developed at Unity to provide a consistent build environment for production of packages either for bundling in the editor release, or as optional downloads in the Unity Marketplace.

[Terraform Enterprise](https://docs.google.com/document/d/1LblLjE-J6MG2Q341pRHSbQaBuIgbR_CPVVd0xIztmAA/edit#heading=h.ppd1tt2dl693) is used to deploy Infrastructure-as-Code and containers to Google Cloud. IaC makes for easy code reviews and predictable changes.

[Engineering Services](https://unity-intranet--simpplr.visualforce.com/apex/simpplr__app?u=/site/a143t00000DdcRpAAJ/dashboard) (specifically, Production Reliability Engineering) provides Google Cloud and on-premises hosting, as well as release engineering tools for packages (here, Developer Services). Once on-boarded using the [comprehensive guide](https://docs.unityops.net/es-service-infra-setup/), monitoring will be added for incident response by service engineers and site reliability engineers to review for improvement.

Mark step as complete

## 3.  How Unity does Monitoring

Q&A (0)

Observability is the concept of using telemetry from a service to understand its operation. Metrics, traces, and logs are the three types of telemetry.

**Metrics**

For services, [Prometheus](https://prometheus.io/) protocol is used to pull time-series metrics. Metrics inform when something happened, what happened, and how much. Engineering Services provides a central system called [“Kronus”](https://docs.unityops.net/kronus/v2/getting_started/quickstart/) that can ingest Prometheus metrics at-scale (using Cortex) and prepare this data for view in [Grafana](https://grafana.com/grafana/).

Kubernetes infrastructure level metrics are provided in Anthos and GKE by Cilium (in GKE it is described as the Dataplane V2 system). [One-time configuration](https://docs.cilium.io/en/v1.10/gettingstarted/grafana/#deploy-cilium-and-hubble-with-metrics-enabled) by Helm variables is needed to expose Prometheus metrics for consumption by Cortex.

**Tracing**

For tracing, [OpenTelemetry](https://opentelemetry.io/) (OTel) must be used to capture and forward structured session data as calls travel between dependent services and into code call stacks. Each call into a dependency, whether a network or library call, can add a “span” to the trace. When errors occur, the sequence of spans can illustrate the path the request took to a fine degree. Using an open standard like OpenTelemetry ensures that multiple client libraries and sidecar layers are compatible and won’t require major changes.

[Grafana Tempo](https://grafana.com/docs/tempo/latest/getting-started/?pg=oss-tempo&plcmt=resources) should be used to capture and analyze OTel operational traces. Tempo can create a [service-graph](https://grafana.com/docs/tempo/latest/grafana-agent/service-graphs/) from aggregated data to determine “hot-paths” in the service

Mark step as complete

## 4. How Unity does privacy, security, & threat modeling

Q&A (0)

**Code**

[Security guidelines](https://confluence.unity3d.com/display/SEC/Secure+Software+Development+Lifecycle+SSDLC+-+Secure+Development+Guidance?ampDeviceId=45465dfe-2605-4eec-b043-6d169acd2108&ampSessionId=1774888727825&ampTimestamp=1774975299464) for project code are detailed by the Security organization for a Secure Software Development Lifecycle (SSDLC).

**Data**

Database and storage connectivity must be secured at the transport layer with TLS, and access should follow the principles of [Least-Privilege Access](https://www.okta.com/identity-101/what-is-least-privilege-access/). Data access by Unity employees should be authorized using credentials from Okta and Google Single-Sign On (SSO), and clearly-defined RBAC policies. When data is accessed by a customer, authorization is provided by Unity Services Identity service and Unity ID SSO.

Data that is categorized as Personally Identifiable Information, or falls into legally defined categories in the user’s location (such as the EU [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) laws) must have automated access and deletion APIs that can be executed at a customer’s request.

PII that is associated with a Unity employee should only be used directly for business purposes, and only for the period of their employment. Authorization should be explicitly requested for any use of potentially private customer data.

**Transport**

Unity adopts the current industry recommendation of a [Zero-Trust](https://www.crowdstrike.com/cybersecurity-101/zero-trust-security/) security model. In order to provide versatility of cloud services, such as the ability to run in public, private, or hybrid-cloud scenarios, this methodology allows consistent ways of managing risk.

For developer-facing services, mutual authentication TLS (mTLS) with game services is handled by using a common root Certificate Authority (CA) for each certificate, and configuration of [Google Cloud Traffic Director and Envoy proxies](https://cloud.google.com/traffic-director/docs/deploy#envoy-gke-pods). The same CA is needed to be used for both ends of the channel in order to establish trust between the two cluster endpoints. Issuance of client certificates is handled by Google [Certificate Authority Service](https://cloud.google.com/certificate-authority-service/) by the Unity Gateway Service and connections are routed from its proxy to the created cloud service.

Service-to-Service transport security, such as for connections between the Unity Gateway Service and a Unity backend service, is handled natively by [Google Cloud ATLS](https://cloud.google.com/docs/security/encryption-in-transit/application-layer-transport-security). While this is not traditional TLS, it offers similar security levels at a higher performance level within the Google Cloud region.

For data center deployments, mTLS within a “fleet” (sets of managed Kubernetes clusters, on-prem or in Google Cloud) is enabled by configuration in [Anthos service mesh](https://cloud.google.com/service-mesh/docs/unified-install/plan-install). Anthos [Mesh CA](https://cloud.google.com/service-mesh/docs/security/security-overview#features) can automate secret storage and rotation (here, certificates) similar to ATLS, but requires additional steps during installation to turn on the optional feature. [Google Cloud IAP](https://cloud.google.com/iap/) is used to establish mutual trust between the cluster in Anthos and the Unity Gateway Service.

Connectivity with non-Unity, and non-Google Cloud services must be expressly reviewed for security compliance, and approved specifically, and individually, for use by user, developer, or internal Unity user use cases.

**Identity**

Service identity is provided by the hosting environment, using [Google Cloud IAM](https://cloud.google.com/iam/) (for [Anthos as well](https://cloud.google.com/service-mesh/docs/unified-install/options/iap-integration)). This establishes mutual trust with Transport Layer Security (mTLS) between running containers. Encryption are terminated at the side-car container, removing the need for services to implement TLS. Tokens are automatically created and rotated by this system, lowering operational burden for certificate management.

Identity for customers is split into developers and players. For developers, the “Unity Services Identity” *(publicly-facing, the “Unity ID”)* is used and for players, the “Unity Player Identity” is used. For the purpose of Ads, monetized users can be associated to a player identity *(with user permission)*.

The Developer identity is used for “Unity Dashboard” **Front-End** and **Package** components (the latter only when in the Editor) to find the actions users are allowed to execute, using [Roles-based Access Controls](https://services.docs.internal.unity3d.com/unity-services-gateway/roles-and-permissions/rbac?ampDeviceId=45465dfe-2605-4eec-b043-6d169acd2108&ampSessionId=1774888727825&ampTimestamp=1774975299464). The Player identity is used when called from the Unity run-time (such as in a running game) into the [Unity Game Gateway](https://services.docs.internal.unity3d.com/unity-game-gateway/?ampDeviceId=45465dfe-2605-4eec-b043-6d169acd2108&ampSessionId=1774888727825&ampTimestamp=1774975299464).

Mark step as complete

## 5. Set up CI/CD for your project

Q&A (0)

Work with your onboarding buddy to make sure you have all the necessary tools set up for effective CI/CD processes on your team.

Mark step as complete

## 6. Next Steps

Q&A (0)

You have now completed the bulk of the content for this onboarding course. Next, you’ll complete a self-assessment to make sure you know everything you need to before beginning work on a Unity Cloud Service. Finally, you’ll have an opportunity to submit and share the project you’ve been working on with your colleagues and future onboarding participants.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
