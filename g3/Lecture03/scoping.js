let answerToLifeUniverseEverythingElse = 42;

function processPerson() {
  let name = "Wekoslav";
  let lastName = "Stefanovski";
  let age = 0x29;

  function printNames(first, last) {
    let president = "Zaphod Beeblebrox";

    output(`${first} ${last} (${age})`);
    output(`${name} ${lastName} (${age})`);
    output(
      `answerToLifeUniverseEverythingElse=${answerToLifeUniverseEverythingElse}`
    );
    output(president);
  }

  // output(president); // does not work
  printNames(name, lastName);
}

processPerson();
