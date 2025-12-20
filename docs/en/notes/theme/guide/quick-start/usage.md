---
title: Configuration
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /en/guide/usage/
tags:
  - Guide
  - Quick Start
---

# Getting Started

## Sign in with Odysee and Wander

To configure getty, you just need to log in. Wander App is a secure and easy-to-use digital wallet for Odysee, allowing you to authenticate to getty without traditional passwords. It is essential for accessing getty features such as widget configuration and encrypted data management. [Install Wander here](https://www.wander.app/).

::: important

You only need to log in once with your **Odysee account** and set up your channel statistics. Then, verify the session with Wander. This allows your channel statistics to be imported into your getty account.

:::

![getty](https://thumbs.odycdn.com/670b5b8097b19e458bcab74f1ec0af65.webp)

## Back up your wallet

We recommend backing up your Wander wallet in a safe place. This wallet backup is also necessary when setting up your wallet in Odysee with Wander. To learn more about how to back up your wallet, visit the documentation on Odysee. [Integrated Wander Wallet](https://help.odysee.tv/category-monetization/).

## Modules and widgets in getty

Each module or widget in getty must be configured so you can integrate it into your OBS scenes or live streaming software. It's not necessary to configure all of them, but if you need to set up the most basic ones, here we show you how to configure the most important widgets.

![getty](https://thumbs.odycdn.com/daa2905e83e9ca900b2193a17cd15678.webp)

## Configure Live Analytics

The metrics of your live streams are important so you can know the performance of each live stream you do on Odysee. These analytics show you aspects like the number of hours per live stream, the average viewers, and much more.

To configure live analytics, you need to enter the **ClaimID of your channel** that will go live.

::: note

To find the ClaimID, go to your channel page, and in the **"About"** tab you can find the channel's ClaimID, copy the ClaimID and paste it into the Live Analytics. When you go live, the analytics will record your stream's activity.

:::

![getty](https://thumbs.odycdn.com/590036db3922292d1c925446638c8e67.webp)

## Configure live chat

The live chat widget has multiple configurations, but for it to work in your live streaming software, you need to configure the chat from the getty admin. To do this, go to the chat page, then enter the ClaimID of the live post you created on Odysee, which will be used to display chat messages.

You can find the post's ClaimID by pressing the Credits icon and there you can see the post's ClaimID, copy it and paste it into the chat configuration in getty. Then save the changes and copy the integration URL for OBS.

![getty](https://thumbs.odycdn.com/14d359d0d19e0ee4e1eed45108aa0a97.webp)

![getty](https://thumbs.odycdn.com/dbbced7a84dafd2da037bc135458b4d4.webp)

In summary, each widget or module that requires a specific ClaimID can be added manually. For example, to configure the Viewers widget or the achievement system, you need to enter the channel's ClaimID. Each widget has its own URL to integrate into OBS Studio or any live streaming software you use to connect to Odysee.

::: important

In some cases, OBS Studio may cache some widget. If you notice any strange behavior, you can refresh the widget from the browser source in OBS, clear the cache, and try again.

:::
