# Quizard

Run a quiz from one screen while friends follow the scores on their phones. No accounts and no database: the host's browser is the server, and friends connect to it with a five-character room code (WebRTC through PeerJS).

## Running a quiz
1. Open the site and choose **Host this quiz**. Keep that window open for the whole quiz.
2. Share the room code or the link shown in the header. Friends open it, or enter the code on the home page.
3. Put the board on a TV or projector by opening the "Open board" link in another window.

If a friend cannot connect, use **Settings > New room code**. If the host window is refreshed, it resumes the same room and the same scores.

## Adding a quiz
1. Create `quizzes/<id>/quiz.js` that sets `window.QUIZ` (copy `quizzes/cincinnati/quiz.js` as a template).
2. Add an entry to `quizzes/index.json` with `status: "ready"`.

## Files
- `index.html`: landing page (host a quiz, or join with a code)
- `play.html`: the host console and the board
- `quizzes/`: one folder per quiz, plus `index.json`
- `vendor/peerjs.min.js`: PeerJS 1.5.4 (MIT)

## Notes
- The question bank is public, so anyone with the site link can read the answers in the page source.
- Connections use PeerJS's free public signalling service. It brokers the connection only; scores travel directly between browsers.

## Phones, QR and answer sheets

- The host's Settings tab and the board's "Show join code" scene display a QR code and room code.
- Friends open `play.html?room=CODE&play=1` (or enter the code on the landing page), pick or type a team name, and type answers on their phone. Answers lock when the host reveals the answer or collects the sheets.
- In the Score tab the host sees every submitted answer, with suggested marks (dashed) that can be tapped to change, then fills the scores with one button.
- A quiz can set `theme: "deco"` in its `quiz.js` for the Art Deco look.
