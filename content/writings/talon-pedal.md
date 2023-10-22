---
title: "Custom Foot Pedals With Talon Voice"
date: 2023-10-08T10:49:04-04:00
draft: true
summary: ""
---

_All code mentioned in this article can be found here:_

_[https://github.com/C-Loftus/colton_talon/tree/master/pedal](https://github.com/C-Loftus/colton_talon/tree/master/pedal)_

# An Intro
 For the past three years I've been doing the majority of my computer input all with [Talon Voice](https://talon.wiki/). Out of all the features in Talon, I believe that foot pedals are some of the most underutilized and most powerful.   After all, they
- have a natural and tactile feel with clear on and off states
-  are ideal for tasks like scrolling
-  eliminate repetitive voice commands or hotkeys
- improve productivity with a body part that is normally unused
-  allow for variable length inputs when held down

 Then by using foot pedals specifically alongside Talon we now have:
- contextual function overrides based on the current application
- a system that runs out of the box on Linux, Mac and Windows
-  our entire accessibility stack integrated and easily sharing state if necessary
   -  we can use our foot pedal to  toggle our eye tracker or modify our voice commands

All code described in this article can be used with your own Talon setup, almost no configuration  needed!



# Motivation

 Optimizing your foot pedal set up isn't as easy as it sounds. From a hardware standpoint, many pedals are poorly designed and require excessive force to activate. It's not uncommon to hear stories of Talon users who purchase a pedal but end up overusing it and developing repetitive strain injury in their feet. 

On the software side, operating systems generally don't handle processing multiple keys together without modifiers (e.g., shift, control). As a result, if we want to have a cross platform pedal that can handle have multiple key presses at the same time, we need to utilize Talon's cron library to process a state dictionary in parallel, creating the illusion of simultaneous key presses.

By utilizing multiple key presses, we can transform a pedal with 3 switches into a device with 7 separate actions. Additionally, by incorporating special actions for specific length presses, we can add another 3 actions. Finally, when we introduce contextual overriding, the potential for actions becomes virtually infinite. 

# Software Overview

If you remap your pedal or foot switch to the proper keys as defined in the talon frontend you should be able to use  [my code](https://github.com/C-Loftus/colton_talon/tree/master/pedal) right out of the box without any configuration.  If you look inside my `overrides` folder, you can see the variety of custom actions that are overridden contextually.  For instance, by default the west and east direction pedals  scroll up and down respectively, but if I am watching a YouTube video they control the volume.

_Technical Note:  If you are not interested in multiple key presses at the same time, or custom hardware, you could do this entirely in a simple `.talon` file,  using a pedal that is natively supported in Talon like the Elgato Stream Deck. However, I think my solution gives more custom behavior_

## Technical Explanation

Talon has the ability to  capture and operate upon key presses. A `.talon` file is used as a frontend by which the backend state dictionary is updated.  By binding each pedal as a hotkey with a key that is rarely used like numlock,  we can capture input without needing a special joystick library.  
 
Most nicer pedals like the Kinesis Advantage or the Olympus footswitch can remap keys at the hardware level so we don't need any extra software.   Additionally by using normal keys,  once we progress to custom pedals, we don't need access to the Arduino joystick library and can use a wider variety of microcontrollers. 

Once we have the proper mapping, we can easily capture the key and send it to Python.

 ```talon 
key(keypad_divide:down):    
   user.pedal_down('north')
key(keypad_divide:up):     
    user.pedal_up('north')
 ```

After pressing down the key, an internal state dictionary is then updated. By using Talon we can do more complex custom behavior beyond just a simple hotkey. The code below is the default functionality

```python
@mod.action_class
class Actions:

   ...

   def north_up():
      """Toggles Talon by Default"""
      actions.user.toggle_sleep_mode()

```

 Then if the context matches then it will override the default `north_up` function.
```python
ctx = Context()
ctx.matches = """title: /YouTube/
title: /SoundCloud/
title: /Internet Archive/
"""

@ctx.action_class("user")
class Actions:

   ...

   def north_up():
      """Pauses a Video Player Using a Keyboard Shortcut"""
      actions.key("space")


```



#  Custom Hardware

DanceDanceRevolution  is one of the few games I have played that is intended to be played with hands-free-input and still feels natural while doing so.  By leveraging some of the design decisions used for the game, we can create a foot pedal that is more ergonomic and less likely to cause repetitive strain injury.  
  


![My foot pedal that is custom designed to look like a dance dance revolution dance](/image.png)

Using force-sensitive resistors, we are able to activate the panel with very little movement. We can simply shift our weight onto it or make small movements such as pivoting our ankles or standing on our toes. ( Of course we can also make full stomp-like movements as well)

These types of movements make the design ideal for use at a standing desk. Additionally, since there is no need for ankle hinges, there is a lower risk of developing RSI around the ankle or foot (such as you might get driving a truck for a long period of time).

While this may not seem significant for occasional pedal usage, it is crucial to optimize the design for individuals who press pedals hundreds of times a day at their desks.
 
## Design Decisions

If you are familiar with this type of input method, it is likely that you have encountered either a large metal arcade pad or a flimsy, foldable soft pad for home console use.

My design incorporates wood and polycarbonate, making it considerably more portable than a large metal pad, while still providing enough stability for use at a standing desk with shoes. 

For those who prefer using the panel barefoot, there is a slight lip near the sensor's edge that  allows you to easily feel the edge of the panel with your feet without looking down.

# Conclusion

Foot pedals and experimental input methods are not discussed nearly enough and there is so much potential for improvement. In the future, I would be interested in designing a larger pedal/pad and developing input methods that incorporate more of the body.  What if we were able to use actual dance steps to move the cursor or type characters?  What if we could use our entire body to control the computer?  With alternative input methods it is up to us to reimagine our computer use. It is my vision to transform them into a healthier activity with more natural movement.  

 Beyond just my pedal, I believe strongly that custom hardware is one of the best ways to tailor Talon your needs and experiment with previously unseen input options. Regardless of your current health or abilities,  anyone who uses computers for a significant portion of their day with only conventional input methods is at risk for RSI or other related health issues.

  Thus, when we create these sorts of custom devices and leverage accessibility software like Talon Voice, we are not only optimizing our productivity, but also our health. I'm really excited about these possibilities and intend on building more custom hardware in the future. 

{{< rawhtml >}}
<hr>

{{< /rawhtml >}}

If you or someone you know could benefit from personalized sessions for learning Talon and optimizing a personal setup, please feel free to [reach out to me ](/contact). I'd love to help you get your workflow to the next level.

{{< chat pedal >}} 

{{< rawhtml >}}

<!-- <div class="comments">
    <script defer>
       // load utteranc comment
        function updateTheme() {
         let s = document.createElement('script');
         let getTheme = localStorage.getItem('pref-theme');
         getTheme = getTheme == null ? 'light' : getTheme;
         let theme = getTheme === 'dark' ? 'github-dark' : 'github-light';
         s.src = 'https://utteranc.es/client.js';
         s.setAttribute('repo', 'C-Loftus/c-loftus.github.io');
         s.setAttribute('issue-term', 'title');
         s.setAttribute('theme', theme);
         s.setAttribute('crossorigin', 'anonymous');
         s.setAttribute('async', '');
         document.querySelector('div.comments').innerHTML = '';
         document.querySelector('div.comments').appendChild(s);
        }
   updateTheme();
   // rerender on click of button with id "theme-toggle"
   document.querySelector('#theme-toggle').addEventListener('click', () => {
     updateTheme();
     });
    </script>
</div> -->

{{< /rawhtml >}}