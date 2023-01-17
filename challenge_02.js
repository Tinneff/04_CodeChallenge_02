/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// Daniels lösung

let alter, name;

alter = prompt("Bitte Alter angeben:");
nutzer = prompt("Bitte Namen angeben:");switch (true)
{
        case (alter <=5):
            console.log(nutzer +" trinkt Milch");
            break;
        case (alter >= 6 && alter <=12):
            console.log(nutzer +" trinkt Saft");
            break;
        case (alter >=13 && alter <18):
            console.log(nutzer +" trinkt Cola");
            break;
        case (alter >=18):
            console.log(nutzer +" trinkt Wein");
            break;
        default:
            console.log("Eingabe bitte prüfen!");
            break    
}