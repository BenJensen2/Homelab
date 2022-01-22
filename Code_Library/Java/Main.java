public class Main {
  static void printDecisionDescription(Decision decision) {
    System.out.println(decision.description);
  }

  static void printString(String message) {
    System.out.println(message);
  }

  static void printDefinitionList(Definition currentDefinition){
    for (int i = 0; i< currentDefinition.list.length;i++){
      System.out.println(currentDefinition.list[i] + "\n");
    }
  }

  static Fruit definePatience(){
    Fruit patience = new Fruit();
    patience.name = "Patience";
    Definition websters = new Definition(
      "bearing pains or trials calmly or without complaint",
      "manifesting forbearance under provocation or strain",
      "not hasty or impetuous",
      "steadfast despite opposition, difficulty, or adversity",
      "able or willing to bear —used with of");
    patience.synonyms = new String[]{"Others", "the one"};
    patience.definitions = new Definition[]{websters};
    return patience;
  }

  static void checkFruit(Decision decision){
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
    printString(definePatience().name);
    Fruit patienceDefinition = definePatience();
    printDefinitionList(patienceDefinition.definitions[0]);
    

    isPatientPresent(firstDecision);
  }
}