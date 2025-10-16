const students = [
{ name: "Alice", score: 85 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 58 },
{ name: "David", score: 74 },
{ name: "Yash", score: 90 },
{ name: "Parth", score: 85 },
{ name: "Het", score: 52 },
{ name: "Shivam", score: 70 },
{ name: "Dev", score: 77 },
{ name: "Deep", score: 97 }
];



function getAverage(students) {

    let total=0;
    for(let i=0; i<students.length; i++){
        total += students[i].score;
    }

    return total / students.length;
}

function Highest(students) {
    let Highest=students[0].score;
    let sname1="";
    for(let i=1; i<students.length; i++){
        if(students[i].score > Highest){
            Highest=students[i].score;
            sname1=students[i].name;
        }
    }

    let obj1= {Highest,sname1};
    return obj1;
}

function Lowest(students) {
    let Lowest=students[0].score;
    let sname2="";
    for(let i=1; i<students.length; i++){
        if(students[i].score < Lowest){
            Lowest=students[i].score;
            sname2=students[i].name;
        }
    }
    let obj2= {Lowest,sname2};
    return obj2;
}

function GradeCount(students)
{

    const grade ={A:0, B:0, C:0, D:0, F:0};
    for(let i=0; i<students.length; i++){

    const dist =students[i].score;

    if(dist >= 90){
      grade.A++;
    }
    else if(dist >= 80 ){
        grade.B++;
     }
    else if(dist >= 70 ){
        grade.C++;
    }
     else if(dist >= 60 ){
      grade.D++;
    }
     else{
     grade.F++;
    }
 }
     return grade;

}

function Retake(students){
    let sname3=[];
    for(let i=1; i<students.length; i++){
        if(students[i].score < 60){
            
            sname3.push(students[i].name);
        }
    }
    return sname3;
}

const highest= Highest(students);
const lowest= Lowest(students);

console.log("Average Score : ",getAverage(students));
console.log("Highest Score : ",highest.sname1,highest.Highest);
console.log("Lowest Score : ",lowest.sname2,lowest.Lowest);
console.log("Grade Distribution : ",GradeCount(students));
console.log("Students needing retake : ",Retake(students));