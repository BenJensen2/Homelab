public class Main {
  static void printDecisionDescription(Decision decision) {
    System.out.println(decision.description);
  }

  static void printString(String message) {
    System.out.println(message);
  }

  static void printDefinition(Definition definiton) {
    String[] definitionList = definiton.list;
    int listLength = definitionList.length;
    for (int i = 0; i < listLength; i++) {
      printString(definitionList[i] + "\n");
    }
  }

  static void printDefinitions(Fruit fruit) {
    Definition[] definitions = fruit.definitions;
    int definitionsLength = definitions.length;
    for (int i = 0; i < definitionsLength; i++) {
      printString(definitions[i].source);
      printDefinition(definitions[i]);
    }
  }

  static void printFruit(Fruit fruit) {
    printString(fruit.name);
    printDefinitions(fruit);
  }

  static void printDefinitionList(Definition currentDefinition) {
    for (int i = 0; i < currentDefinition.list.length; i++) {
      System.out.println(currentDefinition.list[i] + "\n");
    }
  }

  static Fruit defineFruit(String name, Definition definitions) {
    Fruit newFruit = new Fruit(name, definitions);
    return newFruit;
  }

  static void checkFruit(Decision decision) {
  }

  static void isPatientPresent(Decision decision) {
    String message = "Not able to read";
    if (decision.patient == null) {
      message = "The decision has not been evaluated";
    } else if (decision.patient == true) {
      message = "The decision is patient";
    } else if (decision.patient == false) {
      message = "The decision is not patient";
    }
    printString(message);
  }

  public static void main(String[] args) {
    Decision firstDecision = new Decision();
    firstDecision.description = "Listen to Amichi";
    printDecisionDescription(firstDecision);

    Definition love = new Definition("bible", "patient", "kind", "does not envy", "does not boast", "is not proud",
        "does not dishonor others", "is not self-seeking", "is not easily angered", "keeps no record of wrongs",
        "does not delight in evil", "rejoices in truth", "always protects", "always trusts", "always trusts",
        "always hopes", "always perseveres");

    Definition patience = new Definition("websters", "bearing pains or trials calmly or without complaint",
        "manifesting forbearance under provocation or strain",
        "not hasty or impetuous",
        "steadfast despite opposition, difficulty, or adversity",
        "able or willing to bear —used with of");

    Definition kind = new Definition("websters", "of sympathetic of helpful nature", "forbearing nature",
        "arising from or characterized by sympathy of forbearance");
        
    Definition sympathetic = new Definition("websters",
        "existing or operating through an affinity, interdependence or mutual association",
        "appropriate to one's mood, inclinations or disposition", "marked by kindly or pleased by appreciation",
        "given to, marked by, or arising from sympathy, compassion, friendliness, and sensitivity to other's emotions",
        "favorably inclined", "showing empathy", "arousing sympathy or compassion");

    // Define & print Love
    Fruit Love = defineFruit("Love", love);
    // printDefinition(love);
    // printFruit(Love);

    // Define & print patience
    Fruit Patience = defineFruit("Patience", patience);
    // printFruit(Patience);

    // Define & print Kind
    Fruit Kind = defineFruit("Kind", kind);
    printFruit(Kind);
    printDefinition(sympathetic);

    isPatientPresent(firstDecision);
  }
}