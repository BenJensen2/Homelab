import References.Definition;
import References.Source;
import People.Attribute;
import People.Person;

public class Main {

  static void printString(String message) {
    System.out.println(message);
  }

  static void printBoolean(boolean message) {
    System.out.println(message);
  }

  static boolean checkFamilySuccess(Person person) {
    if (person.attributes[0].name == "Spiritual Leader") {
      return true;
    } else if (person.attributes[0].name != "Spiritual Leader") {
      return false;
    } else
      return false;
  }

  static void creation() {
    Word theWord = new Word(); // John 1

    printString("In the begining");
    printString("God created: ");
    Heaven theHeavens = new Heaven();
    printString("The heavens");
    Earth theEarth = new Earth();
    printString("and the earth");
    printString("The earth was without form");
    printString("and void");
    printString("darkness was over the face of the deep");
    printString("and the Spirit of God was hovering over the face of the waters");
    printString("and God said: 'Let there be light'");
    Light light = new Light();
    printString("and there was light");
  }

  
  static void createDefinitions(){
    Definition beginningHebrew = new Definition();
    
    // beginningHebrew.source = strongsHebrew;
    // beginning.hebrew = "רֵאשִׁית";
  }
  
  static void createWords(){
    Word beginning = new Word();
    beginning.name = "beginning";
    beginning.hebrewDefinition = beginningHebrew;
    
    createDefinitions();
  }

  // Creates all the sources used
  static void createSources(){
    Source strongsHebrew = new Source();
    Source strongsGreek = new Source();
    Source bible = new Source();
    Source websters = new Source();
    createWords();
  }
  
  static void createReferences(){
    createSources();
  }

  public static void main(String[] args) {
    createReferences()

    // God existed
    God Elohim = new God();
    Spirit RuahElohim = new Spirit();

    // In the beginning
    creation();
    Husband husbandRole = new Husband();

    // Attributes
    Attribute spiritualLeader = new Attribute("Spiritual Leader");
    
    
    // Create Ben
    Person ben = new Person();
    ben.firstName = "Ben";
    ben.lastName = "Jensen";

    ben.attributes =  new Attribute[] {spiritualLeader};
    printString("Ben's family will succeed: ");
    printBoolean(checkFamilySuccess(ben));

    // Create Current Life, Society, World
    Life currentLife = new Life();
    currentLife.characteristics = new String[] { "busier than ever before", "more fast paced than ever before" };
    Society currentSociety = new Society();
    currentSociety.characteristics = new String[] { "Being torn apart", "Anti-family forces" };
    World currentWorld = new World();
    currentWorld.life = currentLife;
    currentWorld.society = currentSociety;
    currentWorld.attacks = new String[] { "Distractions", "Temptations" };

    // Standard of Godliness
    Standard standardOfGodliness = new Standard();
    standardOfGodliness.charecteristics = new String[] { "Thoroughly Biblical", "Intensely practical",
        "Truly spiritual" };

    // Stuart Scott
    // - Basics
    Person stuartScott = new Person();
    stuartScott.firstName = "Stuart";
    stuartScott.lastName = "Scott";
    stuartScott.title = "Doctor";
    stuartScott.titleAbbreviated = "Dr.";

    // Role husband = 

    // - Characteristics
    // stuartScott.qualities = new String[] {"Passion","Insight","Godly Man","Committed"};
    
    // Roles
    // Role.Husband stuart = new Role.Husband("Stuart", stuartScott.qualities);
    stuartScott.roles = new Object[] {};

    // Institutions
    Institution mastersUniversity = new Institution();
    mastersUniversity.name = "The Master's University";


  }
}