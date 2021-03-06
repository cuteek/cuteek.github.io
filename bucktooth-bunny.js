<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bunners</title>
  </head>
  <body>
    <script src="js/main.js" type="text/javascript">
      var eyeSize = 39;
      var toothLength = 16;
      ellipse(150, 70, 60, 120); // left ear
      ellipse(240, 70, 60, 120); // right ear

      ellipse(200, 170, 150, 150); // face

      fill(0, 0, 0);
      ellipse(170, 150, eyeSize, eyeSize); // left eye
      ellipse(230, 150, eyeSize, eyeSize); // right eye

      line(150, 200, 250, 200); // mouth

      noFill();
      rect(185, 200, 15, toothLength); // left tooth
      rect(200, 200, 15, toothLength); // right tooth
    </script>
  </body>
</html>
