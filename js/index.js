function typeName() {
  var nameText = document.getElementById('name-text');

  var typewriter = new Typewriter(nameText, {
    loop: false
  });

  typewriter.typeString("hi, i'm selina")
    .start();
}
