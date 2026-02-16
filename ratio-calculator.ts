const checkBtn = document.getElementById("check-btn") as HTMLButtonElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const mainList = document.getElementById("main-list") as HTMLFormElement;
let diluentNumInput = document.getElementById("diluent-num") as any;
let newDiluentNumInput = document.getElementById("diluent-new-num") as any;
let formulaTotalDiv = document.getElementById("formula-total") as HTMLDivElement;
let idCount : number = 1;



addBtn.addEventListener("click", () => {

    idCount++;//keeps track of what id to assign each new label & input
    idCount >= 100 ? addBtn.disabled = true : addBtn.disabled = false;
    if (idCount <= 100) {//prevents the number of items exceeding n as thats what the algorithm cap is for now.
    
      //creates new labels and inputs based on when the user clicks the add button
    let newItem = document.createElement("label");
    let newItemContent = document.createTextNode(`${idCount}:`);
    let newItemVal = document.createElement("input");
    let btn = document.createElement("button");
      newItem.setAttribute("for", `chem${idCount}`);
      newItem.setAttribute("id", `chem${idCount}`);
      newItem.classList.add("chemNum");
      newItemVal.setAttribute("type", "number");
      newItemVal.setAttribute("id", JSON.stringify(idCount));
      newItemVal.setAttribute("for", `chem${idCount}`);
      newItemVal.classList.add("chems");
      newItemVal.setAttribute("value", "1");
      newItemVal.setAttribute("min", "0.001");
      btn.classList.add("discard");
      btn.setAttribute("type", "button");
      btn.setAttribute("id", newItem.id);
      btn.textContent = "X";
      newItem.appendChild(newItemContent);
      newItem.appendChild(btn);
        mainList.appendChild(newItem);
        mainList.appendChild(newItemVal);
      

        btn.onclick = function removeItem() {
          if (btn.id === `chem${idCount}`) {
            mainList.removeChild(document.getElementById(newItem.id) as any);
            mainList.removeChild(document.getElementById(newItemVal.id) as any);
        idCount--;
        idCount >= 100 ? addBtn.disabled = true : addBtn.disabled = false;
          }
       }
    } else {
      return;
    }
});
  

checkBtn.addEventListener("click", () => {

  let x : number = idCount >= 30 ? 4 : 3;
  
  const sum : number[] = [...document.getElementsByClassName("chems")].map((i : any) => Number(i.value)); //gets the value of each .chems class and puts them into an array
  for (let i : number = 0; i < sum.length; i++) {
    
  const lowestVal : number = Math.min(...sum); //finds lowest val that isnt null
  const one : number = lowestVal / lowestVal;
  let ratiosArr : number[] = []; //array used for storing ratio values
  let newValArr : number[] = [];
  
  let formulaTotal : number = sum.reduce((acc, el) => acc + el, 0) + Number(diluentNumInput.value); 
    //adds the values in sum array and diluent number to (hopefully) equal 100.

    //this is to find out how many times the lowest value fits into the value of sum[i] and returns it. the ratio is the lowestVal and this gives me a number of how many times that val fits, this will then give me a number to multiply against the new lowestVal later when it has been calculated.
    sum.forEach(el => {
      const sumDivided = el / lowestVal;
      ratiosArr.push(Number(sumDivided.toPrecision(x+2)));
    })
    
    const newArr : number[] = ratiosArr.filter(value => !Number.isNaN(value) );  //removes all 'null' values from array to stop it breaking
    let newRatioTotal : number = newArr.reduce((acc, el) => acc + el, 0);  //total value of all ratios added together
      //difference between curr and new diluent
    let diluentDiff : number = diluentNumInput.value - newDiluentNumInput.value;
      //remaining amount afer new diluent taken from total (or 100)
    let remainderVal : number = Number(100 - newDiluentNumInput.value);
    let r : number|string = (remainderVal / newRatioTotal).toFixed(x+2);  //remainder divided by total ratio gives me the new 'lowestVal', i can now multiply each of the 'x'Val values by this to give me their new value that fits in with the new diluent to create an accurate formula that totals 100
    let newMulti : (number|string) = parseFloat(r);
    //using to.Fixed so recurring numbers get rounded to make readability easier
    newArr.forEach(el => {
      const sumMultiplied = el * newMulti
      newValArr.push(Number(sumMultiplied.toPrecision(x+2)))
    });
   
    const newValArr2 : number[] = newValArr.filter(value => !Number.isNaN(value));
    let newValArrTotal : number = newValArr2.reduce((acc, el) => acc + el, 0); //totalling the new values
      //adding the new values to the new diluent value to return a complete (100) formulation
    let newTotal : number|string = (newValArrTotal + Number(newDiluentNumInput.value)).toFixed(0);
     //console.log(diluentDiff, remainderVal, newMulti, newTotal);
    diluentNumInput.value = newDiluentNumInput.value;  //guaranteed to be displayed
    (document.getElementById("1")as any).value = newValArr2[0].toFixed(x); //guaranteed to be displayed
    for (let i : number = 2; i <= sum.length; i++) {
      document.getElementById(`${i}`) ? (document.getElementById(`${i}`) as any).value = newValArr2[i-1].toFixed(x) : "";
    }
    formulaTotalDiv.innerText = "Formula total: " + newTotal;  //formula total updated for completeness
  }
  tripleCheck();
});

function tripleCheck() {
  checkBtn.click();
  checkBtn.click();
  checkBtn.click();
}

function printThisPage() {
  window.print();
}
