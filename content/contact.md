---
showReadingTime: false
showTOC: false
title: Contact Me
summary: Let's Connect!
categories:
  - Contact
---

{{< rawhtml >}}
<!-- <style>
input[type="text"],
input[type="email"],
textarea {
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--secondary); /* Set your desired background color */
  outline: none;
}


</style> -->

<style>

</style>

<form action="https://getform.io/f/361378af-87a4-4f95-8a69-a9fc7998783e" method="POST">
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" placeholder="Send me a message or a service inquiry!"></textarea><br><br>
    <label for="email">Your Email:</label><br>
    <input type="email" id="email" name="email" placeholder="Let me know how to best respond to you!" required><br>
    <center>
    <button type="submit" class="submit">Submit</button>
    </center>
    <span id="email-error" class="error-message"></span><br>

</form>

<script>
  function validateForm() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    // Check if the email input is valid
    if (!emailInput.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      return false; // Prevent form submission
    } else {
      emailError.textContent = ""; // Clear error message
      return true; // Allow form submission
    }
  }
</script>

{{< /rawhtml >}}


# My Links

- https://www.linkedin.com/in/coltonl/
- https://github.com/C-Loftus
- `@Colton L` on the [Talon Slack](https://talonvoice.slack.com/team/U02S1LGCH9A)
<!-- - Email: p4e6e09vr [-at-] mozmail (dot) com
  - Forwards to my main email to prevent spam -->
