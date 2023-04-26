---
title: "Linux Hands-Free Accessibility"
date: 2022-06-01T19:06:34-04:00
draft: false
tags: ["linux", "software", "accessibility", "programming"]
---

In this post I hope to show some of my opinions on the state of hands free accessibility on Linux. Many of these software choices and setup decisions are platform agnostic, but I am primarily focused on Linux. Most of these tools are intended to be used by people who are otherwise able boded besides their hands or arms.

## General Principles

Generally speaking, with accessibility software your goal should be to perform as much work with as little input as possible. This applies to not only the hands, but any other input method like voice control, eye trackers, foot pedals, or other forms of alternative input. If you use any input method in excess it is not a question of if you are going to develop a repetitive strain injury, but rather when. All the software I list below follows these goals. Namely not to just try and replicate keyboard behavior with the voice, but rather to try and optimize it to begin with.

## Software I Recommend

### Talon Voice

Without a doubt the most important tool you can use is [talon voice](https://talonvoice.com/). It provides an offline voice parser, a simple scripting language, and a python API for your own programming. With these tools you can essentially use voice to control any action on the desktop that could be done through the keyboard or API calls.

### VSCode

Once again, there's a clear choice with regards to code editing. Visual Studio Code is easy to customize, it is well documented, and it provides a significant amount of commands and keyboard shortcuts that can be called from talon. While others have experimented with emacs configurations I would not recommend this due to the lack of extension support from Cursorless.

### Cursorless

By far the best to extension to edit code and also general general text is [cursorless](https://github.com/cursorless-dev/cursorless). This extension allows you to select any word in a text file and perform operations on it through talon voice commands. It is difficult to describe if you have not used it before, but it is not only the optimal way to code through voice, but also an exciting way to rethink how text editing is done.

### Distributions

In the past, I have used Linux Mint, Arch Linux, Ubuntu, Fedora, Debian, and Void Linux. Once you get enough experience, the most important difference is software packaging. As a result, I have to say that Fedora or Ubuntu are the best choices if you are concerned about accessibility. I think it is very important to have a distribution that is well supported and generally popular. Configuring files through the terminal tends to be rather cumbersome through voice and alternative distributions like NixOS don't work out of the box with Talon. Even if some of these problems are more so just annoyances and can be easily fixed, I believe the goal with accessibility is to have as few of these annoyances as possible and have a maximally stable system. This reduces any chance that your accessibility software will fail and you will be forced to find a solution yourself.

<!-- ### Window Managers
Contrary to the popular belief of beginners on Linux, your distribution does not determine your window manager.  Once again, I think that stability is important when choosing your window manager. However at the same time, I believe that it is extremely important to choose a window manager or a desktop environment that can be easily controlled through keyboard commands. This makes it much easier to create custom behavior through talon   scripts.

#### DWM and other Tilings Window Managers
 While many do not like how light weight it is, DWM has a lot of great benefits. It is extremely easy to rebind keys and essentially every action in the window manager can be controlled through a keyboard combination. Additionally, considering the fact windows tile dynamically, it is much easier to resize windows then it would be on a stacking window manager. Obviously though there are a few major downsides to DWM. Considering the customization has to be done through the source code, it can easily disrupt the stability of a system. Additionally you also have to bind external keyboard shortcuts in a program like sxhkd.  Overall, while I would not recommend DWM  I think it is important to remark of it, since I believe that it has some notable benefits.

  Generally speaking, i3  And other tiling window mangers  have many of the same benefits and downsides.  They can automate window resizing and in doing so streamline your workflow. However, the time spent customizing may prove to be a hassle. -->

### Pop Tiling Shell

For my desktop environment, I personally use Pop Tiling Shell on Ubuntu Gnome. This extension allows me to have dynamic window tiling and better keyboard shortcuts for the window manager, while still using a full featured desktop environment like Gnome. This extension does have some bugs since it is building upon the Gnome shell which isn't really intended for this sort of behavior. That being said, I prefer being in a full desktop environment since there is generally more functionality built in.

If you are looking for a more lightweight option, I would recommend awesomewm. It is a stand alone tiling window manager, but it is easier to customize than DWM, has sensible defaults out of the box, and still has dynamic tiling unlike i3.
now sawb it's he

### Rango

[Rango](https://github.com/david-tejada/rango) is an extension similar to Vimium that allows you to navigate web pages through voice commands. It is built upon talon for its voice parsing. Rango allows you to greatly speed up your web navigation by giving every link a small two letter tag above it. This allows you to simply say the name of the tag instead of needing to use your mouse or click using an eye tracker.

## Current Problems and The Future

While all these software choices can greatly improve your workflow there are still a few shortcomings on Linux. First, GUI applications still tend to be very mouse driven and cumbersome to use with voice. This is especially the case for creative applications like digital audio work stations, video editing, or artistic software. Voice is simply not a great input method for these sorts of activities with how they are currently designed. From what I have seen, Mac applications tend to do better on this front. For instance, the Mac GUI keyboard navigation program Vimac seems to be a tool that could be quite useful if an alternative was developed on Linux.

Next, Linux is obviously not a proprietary operating system so it does not always have good interoperability with mobile devices. If you have an iPhone, it can quickly become frustrating to have to constantly pick up your phone to message others. iPhones provide no easy way to send SMS from a non-Mac desktop. While iMessage and SMS are not particularly great protocols to begin with, unfortunately they're often necessary for many users.

Ultimately I think the latter problem can be mitigated as we move towards a future of Linux mobile devices. Linux mobile devices allow the user to have a similar workflow and tools on both mobile and the desktop. While there is much work to do on this front, I am hopeful that one day the same accessibility tools on the desktop will have convenient interoperability with those on mobile.
