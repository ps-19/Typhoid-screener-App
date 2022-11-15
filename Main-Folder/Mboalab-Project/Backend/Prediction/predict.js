

function Func(age, Fever, Abdominal_pain, Cough, Diarrheoa, Constipation, Rose_spots, Muscle_weakness, Anorexia, Headache, Skin_Rash, Weightless, Stomach_distention, Malaise, Occult_blood_in_stool, Haemorrahages, Derilium, Abdominal_rigidity, Epistaxis, Loss_of_appetite, Temperature){
    
    if ((Muscle_weakness==="Low") && (Anorexia==="Low") && (Headache==="Low") && ( Skin_Rash==="Low") && (Weightless="Low") && (Stomach_distention==="Low") && (Haemorrahages==="Low") && (Derilium==="Low")){
        return "Very Low Risk";
    }
    else if((Anorexia==="Low") && (Skin_Rash==="Low") && (Weightless==="High") && (Haemorrahages==="Low")){
        return "Low risk";
    }
    else if((Diarrheoa==="Low") && (Constipation==="Low") && (Muscle_weakness==="Low") && (Headache==="High") && (Malaise="Low")){
        return "Low risk";
    }
    else if((Diarrheoa==="Low") && (Muscle_weakness==="Low") && (Anorexia ==="High") && (Headache==="Low") && (Weightless="Low") && (Epistaxis==="Low")){
        return "Low risk";
    }
    else if((Muscle_weakness==="Low") && (Anorexia==="Low") && (Headache==="High") && (Skin_Rash==="Low") && (Malaise==="Low") && (Occult_blood_in_stool==="Low")){
        return "Low risk";
    }
    else if((Muscle_weakness==="High") && (Occult_blood_in_stool==="Low") && (Haemorrahages==="Low") && (Epistaxis==="Low") && (Malaise==="Low") && (Occult_blood_in_stool==="Low")){
        return "Moderate risk";
    }
    else if((Diarrheoa==="Low") && (Headache==="Low") && (Stomach_distention==="High")){
        return "Moderate risk";
    }
    else if((Skin_Rash==="High") && (Occult_blood_in_stool==="Low") && (Haemorrahages==="Low") && (Epistaxis="Low")){
        return "Moderate risk";
    }
    else if((Malaise==="High") && (Occult_blood_in_stool==="Low") && (Haemorrahages==="Low") && (Epistaxis==="Low")){
        return "Moderate risk";
    }
    else if((Diarrheoa==="High") && (Anorexia==="High") && (Haemorrahages==="Low")){
        return "Moderate risk";
    }
    else if( (Muscle_weakness==="High") && (Haemorrahages==="High") && (Derilium==="Low")){
        return "High risk";
    }
    else if((Headache==="High") && (Haemorrahages==="High") && (Derilium==="Low")){
        return "High risk";
    }
    else if((Constipation==="Low") && (Occult_blood_in_stool==="High") && (Derilium==="Low")){
        return "High risk";
    }
    else if((Muscle_weakness==="Low") && (Anorexia==="Low") && (Haemorrahages==="High")){
        return "High risk";
    }
    else if(Derilium==="High"){
        return "Very High risk";
    }
    else if((Diarrheoa==="Low") && (Muscle_weakness==="High") && (Skin_Rash==="High") && (Weightless==="Low") && (Haemorrahages==="Low")){
        return "Very High risk";
    }
    else if((Constipation==="High") && (Muscle_weakness==="Low") && (Anorexia==="High") && (Headache==="High") && (Haemorrahages==="Low")){
        return "Low or Moderate risk";
    }
    else if((Constipation==="Low") && (Muscle_weakness==="Low") && (Anorexia==="High") && (Headache==="Low") && (Weightless==="High") && (Haemorrahages==="Low")){
        return "High or Very High Risk";
    }
    else{
        return "Low risk";
    }

}



module.exports = Func;