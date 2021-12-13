
# React assignment spec

## Application spec description

Create a small responsive React web application that searches for movies using Rapid API IMDB "by search" API and lists search results in a selectable list that can be toggled to a card layout with a more information display from the IMDB "By ID or Title" API on selection and a favourites list.

## User flow:

- [ ]  App loads with a search bar and a view favourites button. The favourites button opens a list of favourites.
- [ ]  User types a search string for a title by name.
- [ ]  Query the title name and display a list of titles with the following info; Title, Poster, Type and Year with a toggle button to change this list to a card view and back to a list view (persist this toggled state and favourites list).
- [ ]  If the user selects a Title, show a [modal/popup/drawer/enlarged card/expanded list row...*(your choice)*] containing "more information" from the "By ID or Title API" and an "add to favourites" button. If the Title exists in the favourites add a remove from button too.
- [ ]  If the user clicks add to favourites, add the title to persisted favourites list.
- [ ]  If the user clicks remove from favourites, remove the title from persisted favourites list.
- [ ]  If the user clicks on view favourites show the same list/card functionality but list only titles added to favourites with a "remove" button.

## Use the following resources:

- React Bootstrap components [[https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)]
- RapidAPI for IMDB (Create yourself a free account) make all API keys and endpoint easily configurable.
 [[https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative)] *(suggestion, because calls are limited do a call, copy the data and mock until you're ready to test with the API)*
- React easy-peasy for state management and persisting favourites list and toggle state to localStorage. [[https://easy-peasy.vercel.app/](https://easy-peasy.vercel.app/)]

## Limitations:

- JavaScript Fetch() only please, no packages for API calls.
- Use only React functional components and hooks.

## Upon completion:

- Please add your work to a git repository with a descriptive README file
- Make repo public and send a link to the interviewers, you can also just keep the repo private and add the interviewers as contributors to the repo if you'd prefer that.

I hope you have fun with this assignment and feel free to do styling and layouts as you wish while still using the Bootstrap components.

## Comments

- This is the first time I've worked with React bootstrap, so that was something new to me - I've worked with non react bootstrap though. To be honest, I prefer building everything from scratch, all the styles etc - that's what I usually do.

- I have never worked with Easy-peasy state management, nor Redux as our app just doesn't use it. This was a little difficult so I had to spend some time making it work.

- Our app is built in class based components (Apparently functional is too new and will confuse people ¯\\_(ツ)_/¯). I have built some smaller things in functional react with hooks, but I usually fall back to class based because I'm used to it.

- Because of time contstraints I felt like my file structure was a little messy, so I'd have given that a bit of a clean up. I also maybe would have made it prettier, but I didn't spend much time on non-functional features of the app. I did however try to make it as responsive as posible as I believe that is a key feature.

- Thank you for the opportunity, I enjoyed the project and hope to hear soon :).
