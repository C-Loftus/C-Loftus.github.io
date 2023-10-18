 ---
title: "Creating the Best Custom Foot Pedal With Talon Voice"
date: 2023-10-08T10:49:04-04:00
draft: true
summary: ""
---

_All code mentioned in this article can be found here: [https://github.com/C-Loftus/my_talon_scripts/tree/master/pedal](https://github.com/C-Loftus/my_talon_scripts/tree/master/pedal)_


{{< rawhtml >}}
<br>
 
{{< /rawhtml >}}

# An Intro
 For the past three years I've been doing the majority of my computer input all with talon voice. Out of all the features in Talon, I believe that foot pedals are some of the most underutilized and most powerful.   After all, they
- have a natural and tactile feel with clear on and off states
-  are ideal for tasks like scrolling
-  eliminate repetitive voice commands
- give the voice more time to rest
-  allow for variable length inputs when held down

 Then by using foot pedals alongside Talon we now have:
- contextual function overrides based on the current application
- a system that runs out of the box on Linux, Mac and Windows
-  our entire accessibility stack integrated and easily sharing state if necessary
   -   For instance, we can use our foot pedal to  toggle our eye tracker or modify our voice commands

All code described in this article can be used with your own Talon setup, almost no configuration  needed!


# A Pedal? Isn't That Just a Button?

Implementing foot pedals correctly isn't as easy as it sounds From a hardware standpoint, many pedals are poorly designed and require excessive force to activate. It's not uncommon to hear stories of Talon users who purchase a pedal but end up overusing it and developing repetitive strain injury in their feet. 

On the software side, operating systems generally don't handle processing multiple keys together without modifiers (e.g., shift, control). As a result, if we want to have a cross platform petal that can handle have multiple key presses at the same time, we need to utilize Talon's cron library to process a state dictionary in parallel, creating the illusion of simultaneous key presses.

By utilizing multiple key presses, we can transform a pedal with 3 switches into a device with six separate actions. Additionally, by incorporating special actions for specific length presses, we can add another three actions. Finally, when we introduce contextual overriding, the potential for actions becomes virtually infinite. 

#  A Software Overview

If you remap your pedal or foot switch to the proper keys as defined in the talon frontend you should be able to use  [my code](https://github.com/C-Loftus/my_talon_scripts/tree/master/pedal) right out of the box without any configuration.  If you look inside my `overrides` folder, you can see the variety of custom actions that are overridden contextually.  For instance, by default the left and right panels scroll up and down respectively, but if I am watching a YouTube video they control the volume.

## Software Explanation

 Talon has the ability to  capture and operate upon key presses. A Talon file is used as a frontend by which the backend state dictionary is updated.  by binding each pedal as a hot key with a key that is rarely used like num lock,  we can capture input without needing a special joystick library.  
 
 Most nicer petals like the kinesis advantage or the Olympus foot switch can remap keys at the hardware level so we don't need any extra software.   Additionally by using normal keys,  once we progress two custom pedals, we don't need access to the Arduino joystick library and can use a wider variety of microcontrollers. 

 ```talon 
 # An example key capture in the Talon script 
 # ( Specifically for the center pedal)

 # Center button (`kpplus` as it is mapped within the kinesis advantage)
key(keypad_divide:down):    
   user.pedal_down('center')
key(keypad_divide:up):     
    user.pedal_up('center')
 ```

 After pressing down the key, an internal state dictionary is then updated.

#  Custom Hardware
 Back with my hands developed problems, looking to remain playing games is a hobby I got pretty in too dance dance revolution.  despite the fact of the games entirely played with your feet comment it feels like a natural extension of the body  and its ergonomic enough to play for hours at a time .

  By incorporating design elements from these communities, I was able to create a customized pedal that is specifically designed for accessibility and Talon usage.
  


![My foot pedal that is custom designed to look like a dance dance revolution dance](/image.png)

By incorporating force-sensitive resistors, we are able to activate the panel without actually stepping on it (although stepping is still an option). Instead, we can simply shift our weight onto it or make small movements such as pivoting our ankles or standing on our toes.

These tighter movements make the design ideal for use at a standing desk. Additionally, since there is no need for ankle hinges, there is a lower risk of developing interior tibial tendinitis.  We have a wider range of movements available to activate the sensor.

While this may not seem significant for occasional pedal usage, it is crucial to optimize the design to minimize repetitive strain, especially for individuals who press pedals hundreds of times a day at their desks.
 

{{< rawhtml >}}
<hr>
{{< /rawhtml >}}

If you or someone you know could benefit from personalized sessions for learning talon and optimizing a personal setup, please feel free to [reach out to me ](/contact) .   I'd love to help you get your workflow to the next level.

  {{< chat pedal >}} 