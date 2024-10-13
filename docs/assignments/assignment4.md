---
title: Assignment 4- Backend Design & Implementation
layout: doc
---

# Assignment 4: Backend Design & Implementation :mag:

## Concept Refining & Data Modeling :bookmark_tabs:

### Updated Concepts
After going through my two last concepts, I thought of wanting of refining them in a way they can be more interactive with the user and also serve a more general purpose than what they did prior

The Updates performed were as follows;

1. Moderation Concept -> Reporting Concept

<b>Concept:</b> Reporting[User,Item]

<b>Purpose:</b> Allow users to flag content (posts, comments, etc.) that violates community guidelines, leveraging crowdsourced reporting to ensure the app's atmosphere remains positive.

<b>Operational Principle:</b>  

After content(Posts) is created, the moderation system evaluates it against community guidelines. Content that violates these guidelines can be flagged for review, edited, or removed to preserve a positive environment


<b>State</b>
>flaggedItems: set Item // Tracks content reported(flagged) by users
>
>reviewedItems: set Item // Tracks content that has been reviewed
>
>contentFlags: Item -> one String // Stores flagging reason (e.g "inappropriate language")
>
>reportedBy: Item -> set User
>
>reviewOutcomes: Item -> one String
>
>contentAuthor: Item -> one User


<b> Actions </b>

```
flagItem(u:User, i: Item, reason: String) {
    // Adds Item(Id) to flaggedItems together with a mapping of reason for flagging
}
 ```
 ```
reviewflaggedItem() {
    // Moves content from flaggedItems to reviewedItems with a review outcome 
        (e.g., remove, edit)
}
```
```
getFlaggedItems(out flaggedItemsList: set Item)
{
    // returns the set of items currently flagged for review.
}
```



### Old Concepts 

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

 ## Design Reflection

 While implementing the backend, I made key changes to my original design, particularly with the Moderation Concept, which was redefined as a Reporting Concept. Initially, I envisioned moderation to be system-driven, automatically flagging content. However, I realized that this approach might miss context or nuances, leading to inaccurate content removal. To address this, I switched to a crowdsourced approach where users can flag content, providing better oversight and reducing the risk of unnecessary removal by automated systems.

Another major adjustment was incorporating cron jobs for periodic tasks like sending notifications and reviewing flagged content. Due to the constraints of Vercel’s hobby plan, I can only run these jobs once daily, which prompted thoughtful scheduling. I chose 1 AM for content review, when app activity is low, and 4 PM for sending notifications, aligned with user activity patterns like journaling or reminders. This limitation required a balance between functionality and the available resources, and while a more frequent schedule would be ideal, the current setup serves the essential needs of the app.

The process also revealed ambiguities in handling asynchronous tasks and ensuring that user engagement is maximized without overwhelming the system. In retrospect, I would have explored more flexible options for task scheduling earlier, but overall, the iterative process helped refine my approach to balancing user input and automation, as well as scaling within resource constraints.

