# Fleet Ready course

Shared code and content for the Fleet Ready lessons and quizzes in Kajabi, served by GitHub Pages at https://swalker06.github.io/fleet-ready-course/

- `course.js`: the list of modules, in order.  The order sets the module numbers, next-step buttons, "Module X of Y", the breakdown email and the module cards on fleet-ready.com.
- `modules/<slug>.js`: the wording for one module's lesson and quiz.
- `fr.js`: the engine that draws the lessons and quizzes.  Rarely needs changing.

## What goes in each Kajabi post

Lesson post (code view):

    <div id="fr-lesson-SLUG"></div>
    <script src="https://swalker06.github.io/fleet-ready-course/fr.js"></script>

Quiz post:

    <div id="fr-quiz-SLUG"></div>
    <script src="https://swalker06.github.io/fleet-ready-course/fr.js"></script>

## Adding a module

1. Create the module and its two posts (lesson, quiz) in Kajabi.
2. Add `modules/<slug>.js` (copy an existing one).
3. Add a line to `course.js` in the right place with the slug, title, summary, category id and the two post ids.
4. Paste the two snippets into the new posts.

Changes go live within about ten minutes.
