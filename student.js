
function createGod(gName, gAge, gRating) {

   let god = {

    name: gName ,

    age: gAge,

    rating: gRating,

    birthYear() {

      let today = new Date();

      let yearDay = today.getFullYear();
      let year=yearDay - this.age
       console.log(year);
      return (year);
    },

  };
  return god; 
}
function isGenZ(obj) {

  if (obj.birthYear() > 2000) {

    return 1;

  }

  return 0;

}
 function pr(obj){
       let predictedPoints = (obj.rating / 60) * 100 - 3*isGenZ(obj) ;
        console.log(predictedPoints );
     }
 function sp(obj){
      let sr=obj.rating;
       if(sr>=85){
          console.log("оценкa : 5");
          }
       if(sr>+60 && sr<80){
           console.log("оценкa : 4");
          }
       if(sr>=40 && sr<60){
          console.log("оценкa : 3");
       }
       else{
          console.log("оценкa : 2");
       }
     }

function avrageAge(gods) {

  let ageSum = 0;

  for (let god of gods) {

    ageSum = ageSum + god.age;

  }

  console.log(`Average God's age is: ${ageSum/gods.length}`);

}

 function arr(){
   let d;
  
   for(;;){
      let studentsList = [];
  let n = prompt(" Enter the name of student");
  let ag = prompt ("Enter the age of student");
  let  r= prompt ("Enter the rating ");
   d=createGod(n, ag, r);
    studentsList.push(d);
     console.log(studentsList);
      pr(d);
     sp(d);
  if ( window.confirm("leave?")){
    break;
  }
}

}
 arr();




