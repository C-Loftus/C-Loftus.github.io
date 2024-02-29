---
title: "Creating Dev Tools for the Blind and Visually Impaired"
date: 2024-01-07T12:24:53-05:00
draft: true
summary: ""
---

_All code for this repo can be found at: [https://github.com/C-Loftus/sight-free-talon](https://github.com/C-Loftus/sight-free-talon)_

Recently I've been developing `sight-free-talon`, a program that allows computer use entirely through voice and audio. To my knowledge, my repo is the only actively maintained, and cross platform solution in the world for this task.

Using low vision tools like screen readers alongside voice input is deceptively hard for those who have never used both. Sophisticated voice input tools like [https://github.com/david-tejada/rango](https://github.com/david-tejada/rango) or [https://github.com/cursorless-dev/cursorless](https://github.com/cursorless-dev/cursorless) are great but they are totally dependent on visual markers. On the other hand, screen readers like NVDA are totally dependent on the keyboard to move focus. Additionally, challenges with voice input like misrecognitions are much more tedious to correct non-visually.

From an outsider's perspective, I feel that the greatest issue with non-visual computer use is the inability to efficiently skim text and the slow rate of navigation on complicated interfaces. Yet through voice we can entirely circumvent this. By using platform accessibility APIs, I support commands for saying the name of the element and allowing the user to directly click on it. So no need to use tab or arrow keys to move the NVDA or system focus.

My program is an extension over Talon Voice and a variety of screen readers, with NVDA currently being the best supported. Talon is not easy but it is by far the most customizable and robust option for voice controlled computer use.
