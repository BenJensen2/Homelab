var theDecision = {
  descripiton: "Listen to Amichi",
  patient: true,
};
function isPatient(decision) {
  if (decision.patient == true) {
    console.log("The decision is patient");
  } else if (decision.patient == false) {
    console.log("The decision is not patient");
  } else if (!decision.patient) {
    console.log("Patience hasn't been evaluated");
  }
}
function isKind(decision) {
  if (decision.kindness == true) {
    console.log("The decision is kind");
  } else if (decision.kindness == false) {
    console.log("The decision is not kind");
  } else if (!decision.kindness) {
    console.log("Kindness hasn't been evaluated");
  }
}
isPatient(theDecision);
isKind(theDecision);

var kindnessDefinition = ["friendly", "generous", "considerate"];
function matchesDescription(initialDescriptionString, definitionArray) {
  var descriptionArray = parseDescription(initialDescriptionString);
  for (var i = 0; i < descriptionArray.length(); i++) {}
}
var considerDefinition = ["think carefully about", "regard", "listen"];
function matchesDefinition(definition, description) {
  if (definition.includes(description)) {
    return true;
  } else return false;
}
function parseDescription(description) {
  return description.toLowerCase().split(" ");
}
console.log(parseDescription(theDecision.descripiton));
console.log(
  matchesDefinition(
    considerDefinition[2],
    parseDescription(theDecision.descripiton)[0]
  )
);
