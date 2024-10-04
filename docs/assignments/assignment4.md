---
title: Assignment 4- Backend Design & Implementation
layout: doc
---

# Assignment 4: Backend Design & Implementation :mag:

## Concept Refining & Data Modeling :bookmark_tabs:

After going through my <a href="https://nisha-nathan.github.io/portfolio-nisha/assignments/assignment3.html">A3</a>, I opted to do some concept revisions and I will list these concepts as well as their abstract data models

1. Concept:Authenticating

Originally, this concept was the User concept but I decided to redesigning to Authenticating to properly reflect its purpose

State
> registeredUsers : set User
>
> username,password: registeredUsers -> one String

2. Concept:Sessioning[User]

State
> active: set Session
>
> user: active -> one User

3. Concept:Posting[User]

State
>posts : set Post
>
>author: Post -> one User
>
>content: Post -> one String


4. Concept:Reaction[User,Item]

State
> reactions: Item -> set Users
>
> reactionCount: Item -> one Int

5. Concept:Notifications[User,Event]

State
> pendingNotifications : set Notification
>
>  deliveredNotifications : set Notification
>
> to: pendingNotifications, deliveredNotifications -> one User
>
> for: pendingNotifications, deliveredNotifications -> one Event

6. Concept:Moderating[Item]

State
> pendingReview : set Item
>
> approvedItems : set Item
>
> flaggedReasons: pendingReview -> one String

7. Concept:Feed[Items]

State
> feeds: set Feed
>
> feedItems: Feed -> set Item
>
>feedType: Feed -> One String

### Global Data model
<img src="./Global Data Model.jpg">

### Data model for individual concepts
<img src="./Individual Data Models.jpg">


## Project Links :pushpin:
 <a href="https://github.com/Nisha-Nathan/backend-starter">Github Link</a>

 <a href="https://uplift-app-blush.vercel.app/">Vercel Deployment</a>
