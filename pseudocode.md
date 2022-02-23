# pseudocode for Mind Reader App
## Main Goal:
Create single page web app that plays a game. Focus is to Use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.
By Default the app should prompt the user to click through the single page app tand see a new view for every step.

- [] Pseudocode the problem in its entirety
- [] Use Javascript to successfully show the transition from one view to the next
- [] Show state management for each step of the single page app("view" 1,2,3,..)
    * Only create a single index.html
    * No need to refresh the page (manually or using JS)
    * Update state using a variable that tells the computer what 'view' it is
    * Use functions to move forward a view, backward, reset to the first view, and display the correct view on load/after every state change
- [] Use Icons of your choice
- [] All multiples of 9 should be the same symbol so the math gimmick works

## Objects:

* Page 1
    1. Header txt
    2. Circle Go forward button
* Page 2
    1. Header txt
    2. Square Next forward button
    3. Helper txt
     4. Circle return/refresh button
* Page 3
    1. Header txt
    2. Square Next forward button
    3. Helper txt
    4. Circle return/refresh button
* Page 4
    1. Header txt
    2. Square Next forward button
    3. Helper txt
    4. Circle return/refresh button
* Page 5
    1. Array of Symbols/Scroll Header txt
    2. Square Reveal forward button
    3. Helper txt
    4. Circle return/refresh button
* Page 6
    1. Header txt
    2. Helper txt
    3. Circle return/refresh button

 ## Pseudocode:
**Start:** Start Program for Mind Reader App

**INIT** Create Variables for Program

 * Square button - addEventListener for click to next page. String name(Reveal) differnt for page 5

 * Circle button - addEventListener for Go to next page on click for page 1. Second function to Return/Refresh for pages 2-6