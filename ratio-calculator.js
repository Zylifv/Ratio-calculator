const checkBtn = document.getElementById("check-btn");
const addBtn = document.getElementById("add-btn");
let idCount = 1;



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
        document.getElementById("main-list").appendChild(newItem);
        document.getElementById("main-list").appendChild(newItemVal);
      

        btn.onclick = function removeItem() {
        let parent = document.getElementById("main-list");
          if (btn.id === `chem${idCount}`) {
            parent.removeChild(document.getElementById(newItem.id));
            parent.removeChild(document.getElementById(newItemVal.id));
        idCount--;
        idCount >= 100 ? addBtn.disabled = true : addBtn.disabled = false;
          }
       }
    } else {
      return;
    }
});
  

checkBtn.addEventListener("click", () => {

  let x = idCount >= 30 ? 4 : 3;
  
  const sum = [...document.getElementsByClassName("chems")].map((i) => Number(i.value)); //gets the value of each .chems class and puts them into an array
  for (let i = 0; i < sum.length; i++) {
    
  const lowestVal = Math.min(...sum); //finds lowest val that isnt null
  const one = lowestVal / lowestVal;
  let ratiosArr = []; //array used for storing ratio values
  let newValArr = [];
  
  let formulaTotal = sum.reduce((acc, el) => acc + el, 0) + Number(document.getElementById("diluent-num").value); 
    //adds the values in sum array and diluent number to (hopefully) equal 100.

    //this is to find out how many times the lowest value fits into the value of sum[i] and returns it. the ratio is the lowestVal and this gives me a number of how many times that val fits, this will then give me a number to multiply against the new lowestVal later when it has been calculated.
    sum.forEach(el => {
      const sumDivided = el / lowestVal;
      ratiosArr.push(Number(sumDivided.toPrecision(x+2)));
    })

  const newArr = ratiosArr.filter(value => !Number.isNaN(value) );  //removes all 'null' values from array to stop it breaking
  let newRatioTotal = newArr.reduce((acc, el) => acc + el, 0);  //total value of all ratios added together
    //difference between curr and new diluent
  let diluentDiff = document.getElementById("diluent-num").value - document.getElementById("diluent-new-num").value;
    //remaining amount afer new diluent taken from total (or 100)
  let remainderVal = Number(100 - document.getElementById("diluent-new-num").value);
  let r = (remainderVal / newRatioTotal).toFixed(x+2);  //remainder divided by total ratio gives me the new 'lowestVal', i can now multiply each of the 'x'Val values by this to give me their new value that fits in with the new diluent to create an accurate formula that totals 100
  let newMulti = parseFloat(r);
    //using to.Fixed so recurring numbers get rounded to make readability easier
    newArr.forEach(el => {
      const sumMultiplied = el * newMulti
      newValArr.push(Number(sumMultiplied.toPrecision(x+2)))
    });
      
    const newValArr2 = newValArr.filter(value => !Number.isNaN(value));
    let newValArrTotal = newValArr2.reduce((acc, el) => acc + el, 0); //totalling the new values
    //adding the new values to the new diluent value to return a complete (100) formulation
    let newTotal = (newValArrTotal + Number(document.getElementById("diluent-new-num").value)).toFixed(0);

    document.getElementById("diluent-num").value = document.getElementById("diluent-new-num").value;  //guaranteed to be displayed
    document.getElementById("1").value = newValArr2[0].toFixed(x); //guaranteed to be displayed
    for (let i = 2; i <= sum.length; i++) {
      document.getElementById(`${i}`) ? document.getElementById(`${i}`).value = newValArr2[i-1].toFixed(x) : "";
    }
    document.getElementById("formula-total").innerText = "Formula total: " + newTotal;  //formula total updated for completeness
  }
    tripleCheck();    //just to add an extra layer of accuracy
});


function tripleCheck() {
  checkBtn.click();
  checkBtn.click();
  checkBtn.click();
}

function printThisPage() {
  window.print();
}
