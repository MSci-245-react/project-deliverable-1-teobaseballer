[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11384213)
# MSci 245 - Project Deliverable 1

## Due: June 23, 6:00PM

### Development Tips:
- Use CodeSpaces for this project.
- In VSCode terminal on CodeSpaces start a new branch:
```git checkout -b d1```
- As you code, push daily changes to your GitHub repo's `d1` branch:
```
git add .
git commit -m "done feature xyz"
git push origin d1
```

### Deliverable 1 Guidelines

1.	Create the following user interface elements using [Material UI (MUI) components library](https://mui.com/material-ui/getting-started/overview/): 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a)	Use [MUI Grid](https://mui.com/material-ui/react-grid/) to align your user interface (UI) elements on the page. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b)	Use [MUI Typography](https://mui.com/material-ui/react-typography/) to create a header for the entire webpage (e.g., "Review a movie") in `h3` font variant. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c)	Create a [MUI Select element](https://mui.com/material-ui/react-select/) and populate it with 5 movie titles of your choice.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d)	Create a single-line [MUI Text Field](https://mui.com/material-ui/react-text-field/) for the user to input the title of their review. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e)	Create a MUI Text Field of type "Multiline" for the user to input the body of the review (up to 200 characters long). 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f)	Using MUI [RadioGroup and Radio elements](https://mui.com/material-ui/react-radio-button/) create a group of five radio buttons with values for movie ratings on a scale from 1 to 5. Each radio button should have a numerical value label (1, 2, etc.) 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; g)	Create "Submit" button using [MUI Button component](https://mui.com/material-ui/react-button/). 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; h)	For every UI element outlined above, create a label with a short instruction, such as, `Select a movie` or `Enter a review`. 

2.	Implement the following functionalities: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a)	After the user clicks "Submit" button, perform the following validation checks:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i.	Check if the user has selected a movie from the Select element. If no, render a message in red font directly on the page underneath the Select element: `Select your movie`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii.	Check if the review title text field is empty. If yes, render a message in red font directly on the page underneath the text box: `Enter your review title`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii.	Check if the review body text field is empty. If yes, render a message in red font directly on the page underneath the text box `Enter your review`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv.	Check if the user has not selected a rating number. If not, render a message in red font directly on the page underneath the text box: `Select the rating`.
Important: do not use alert() built-in html function for these error messages.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b)	If the user has successfully entered all data, show a confirmation message underneath all the textboxes: `Your review has been received` and render below all of the user-entered data formatted using MUI Typography and Grid UI elements as necessary.

3.	Organize your React code into six components (one per file):  

![image](/img/D1-component-tree.png)

The placeholder component files have been created for you under `client/src/components/App`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a)	The App component must render the Review component.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b)	The Review component must: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i.	contain all the functions outlined in `2.a` and `2.b`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii.	manage at least five states: `movies`, `selectedMovie`, `enteredTitle`, `enteredReview`, `selectedRating`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii.	contain MUI elements `1.a`, `1.b` and `1.g`. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c)	The MovieSelection component must contain the elements described in `1.c`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d)	The ReviewTitle component must contain the the elements described in `1.d`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e)	The ReviewBody component must contain the elements described in `1.e`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f)	The ReviewRating component must contain the elements described in `1.f`.

2.	The list of movies, rendered in the Select MUI element, must be stored in a stateful list `movies`.

3.	Your app should not store the history of user-entered reviews. As soon as the user enters new data and clicks "Submit" button, your app should overwrite the previously entered review. The app should work as specified with such repeated entries of reviews in one browser session.

4.	After you finish your development, make sure that the app renders in the browser and functions according to the specifications.

5.	Push changes to the GitHub:

```
git add .
git commit -m "completed"
git push origin d1
```

6.	In your GitHub repo, create new pull request and merge `d1` branch with the `main` branch.





