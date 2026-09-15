Rashad Fitness V12

What's new in V12:
- Real animated exercise previews. Instead of blending between two photos, the exercise guide
  now shows an actual moving stick-figure: a small skeleton (joints + bones) that smoothly
  tweens from the start position to the finish position and back, on a continuous loop. This
  was auto-rigged from the existing V9 artwork (joint positions were detected from the images,
  matched between start/finish, and connected into a skeleton), then hand-checked one by one.
  30 of 31 exercises got the real animation. Hyperextension's artwork didn't auto-rig cleanly,
  so it keeps the V10/V11-style photo crossfade instead of showing a broken animation -- happy
  to hand-fix that one specifically if you want it upgraded too.
- Offline cache version bumped to V12.

Carried over from V11:
- Muscle map on the Progress page: front/back body diagram shaded by how much you've trained
  each muscle group in the last 7 days, with a legend and exercise suggestions for whatever
  you've neglected (one-tap add to today's workout).
- Service worker now activates updates immediately (skipWaiting + clients.claim) instead of
  waiting for every tab to close, so future updates show up as soon as you reopen the app.

Carried over from V10:
- Exercise library shows a real photo thumbnail for every exercise.
- Body scan: daily progress photo log with gallery, streak counter, and first-vs-latest compare.
- Artwork added for Bench Press, Leg Curl, Plank, Reverse Pec Fly, Face Pull.

Carried over from V9:
- Exercise-specific instructional guide: muscles worked, step-by-step instructions, form tips,
  common mistakes, take-care notes, similar exercises, best set, progressive-overload suggestion.
- Morning check-in, readiness, sleep, water, food history, custom food photos and progress.
- Existing local data migrates automatically -- no action needed.

Deploy:
Replace ALL files in the GitHub repository root and commit.
