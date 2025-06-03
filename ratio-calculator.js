const checkBtn = document.getElementById("check-btn");
const addBtn = document.getElementById("add-btn");
let idCount = 1;


addBtn.addEventListener("click", () => {

    idCount++;    //keeps track of what id to assign each new label & input
  
    if (idCount <= 30) {    //prevents the number of items exceeding 30 as thats what the algorithm cap is for now.
    
      //creates new labels and inputs based on when the user clicks the add button
    let newItem = document.createElement("label");
    let newItemContent = document.createTextNode(`${idCount}:`);
    let newItemVal = document.createElement("input");
      newItem.setAttribute("for", `chem${idCount}`);
      newItem.setAttribute("id", `chem${idCount}`);
      newItemVal.setAttribute("type", "number");
      newItemVal.setAttribute("id", JSON.stringify(idCount));
      newItemVal.setAttribute("for", `chem${idCount}`);
      newItemVal.classList.add("chems");
      newItemVal.setAttribute("value", "1");
      newItem.appendChild(newItemContent);
        document.getElementById("main-list").appendChild(newItem);
        document.getElementById("main-list").appendChild(newItemVal);
    } else {
      return;
    }
});
  

checkBtn.addEventListener("click", () => {

  const sum = [...document.getElementsByClassName("chems")].map((i) => Number(i.value)); //gets the value of each .chems class and puts them into an array
  
  for (let i = 0; i < sum.length; i++) {
    
  const lowestVal = Math.min(...sum); //finds lowest val that isnt null
  const one = lowestVal / lowestVal;
  const ratiosArr = []; //array used for storing ratio values
  const newValArr = [];
  
 //console.log(sum, `lowest val: ${lowestVal}`, sum.reduce((acc, el) => acc + el, 0));
  let formulaTotal = sum.reduce((acc, el) => acc + el, 0) + Number(document.getElementById("diluent-num").value); 
    //adds the values in sum array and diluent number to (hopefully) equal 100.

    //this is to find out how many times the lowest value fits into the value of sum[i] and returns it. the ratio is the lowestVal and this gives me a number of how many times that val fits, this will then give me a number to multiply against the new lowestVal later when it has been calculated.
    let aVal = sum[0] / lowestVal;
    let bVal = sum[1] / lowestVal;
    let cVal = sum[2] / lowestVal;
    let dVal = sum[3] / lowestVal;
    let eVal = sum[4] / lowestVal;
    let fVal = sum[5] / lowestVal;
    let gVal = sum[6] / lowestVal;
    let hVal = sum[7] / lowestVal;
    let iVal = sum[8] / lowestVal;
    let jVal = sum[9] / lowestVal;
    let kVal = sum[10] / lowestVal;
    let lVal = sum[11] / lowestVal;
    let mVal = sum[12] / lowestVal;
    let nVal = sum[13] / lowestVal;
    let oVal = sum[14] / lowestVal;
    let pVal = sum[15] / lowestVal;
    let qVal = sum[16] / lowestVal;
    let rVal = sum[17] / lowestVal;
    let sVal = sum[18] / lowestVal;
    let tVal = sum[19] / lowestVal;
    let uVal = sum[20] / lowestVal;
    let vVal = sum[21] / lowestVal;
    let wVal = sum[22] / lowestVal;
    let xVal = sum[23] / lowestVal;
    let yVal = sum[24] / lowestVal;
    let zVal = sum[25] / lowestVal;
    let aaVal = sum[26] / lowestVal;
    let abVal = sum[27] / lowestVal;
    let acVal = sum[28] / lowestVal;
    let adVal = sum[29] / lowestVal;
    
    ratiosArr.push(aVal, bVal, cVal, dVal, eVal, fVal, gVal, hVal, iVal, jVal, kVal, lVal, mVal, nVal, oVal, pVal, qVal, rVal, sVal, tVal, uVal, vVal, wVal, xVal, yVal, zVal, aaVal, abVal, acVal, adVal);   //pushes all "x"Val values into an array so i can sum up their total ratio values
    const newArr = ratiosArr.filter(value => !Number.isNaN(value) );  //removes all 'null' values from array to stop it breaking

  let newRatioTotal = newArr.reduce((acc, el) => acc + el, 0);  //total value of all ratios added together
  //console.log(`ratios: ${ratiosArr}`, `ratios total: ${newRatioTotal}`, ratiosArr, newArr);
    //difference between curr and new diluent
  let diluentDiff = document.getElementById("diluent-num").value - document.getElementById("diluent-new-num").value;
    //remaining amount afer new diluent taken from total (or 100)
  let remainderVal = 100 - document.getElementById("diluent-new-num").value;
  let newMulti = remainderVal / newRatioTotal;  //remainder divided by total ratio gives me the new 'lowestVal', i can now multiply each of the 'x'Val values by this to give me their new value that fits in with the new diluent to create an accurate formula that totals 100

    //using to.Fixed so recurring numbers get rounded to make readability easier
    let aValNew = Number((aVal * newMulti).toFixed(3));
    let bValNew = Number((bVal * newMulti).toFixed(3));
    let cValNew = Number((cVal * newMulti).toFixed(3));
    let dValNew = Number((dVal * newMulti).toFixed(3));
    let eValNew = Number((eVal * newMulti).toFixed(3));
    let fValNew = Number((fVal * newMulti).toFixed(3));
    let gValNew = Number((gVal * newMulti).toFixed(3));
    let hValNew = Number((hVal * newMulti).toFixed(3));
    let iValNew = Number((iVal * newMulti).toFixed(3));
    let jValNew = Number((jVal * newMulti).toFixed(3));
    let kValNew = Number((kVal * newMulti).toFixed(3));
    let lValNew = Number((lVal * newMulti).toFixed(3));
    let mValNew = Number((mVal * newMulti).toFixed(3));
    let nValNew = Number((nVal * newMulti).toFixed(3));
    let oValNew = Number((oVal * newMulti).toFixed(3));
    let pValNew = Number((pVal * newMulti).toFixed(3));
    let qValNew = Number((qVal * newMulti).toFixed(3));
    let rValNew = Number((rVal * newMulti).toFixed(3));
    let sValNew = Number((sVal * newMulti).toFixed(3));
    let tValNew = Number((tVal * newMulti).toFixed(3));
    let uValNew = Number((uVal * newMulti).toFixed(3));
    let vValNew = Number((vVal * newMulti).toFixed(3));
    let wValNew = Number((wVal * newMulti).toFixed(3));
    let xValNew = Number((xVal * newMulti).toFixed(3));
    let yValNew = Number((yVal * newMulti).toFixed(3));
    let zValNew = Number((zVal * newMulti).toFixed(3));
    let aaValNew = Number((aaVal * newMulti).toFixed(3));
    let abValNew = Number((abVal * newMulti).toFixed(3));
    let acValNew = Number((acVal * newMulti).toFixed(3));
    let adValNew = Number((adVal * newMulti).toFixed(3));
    
    
    //newVals are pushed into array, including nulls which get taen care of below by being filtered out like before
    newValArr.push(aValNew, bValNew, cValNew, dValNew, eValNew, fValNew, gValNew, hValNew, iValNew, jValNew, kValNew, lValNew, mValNew, nValNew, oValNew, pValNew, qValNew, rValNew, sValNew, tValNew, uValNew, vValNew, wValNew, xValNew, yValNew, zValNew, aaValNew, abValNew, acValNew, adValNew);
    const newValArr2 = newValArr.filter(value => !Number.isNaN(value) );
    
      let newValArrTotal = newValArr2.reduce((acc, el) => acc + el, 0); //totalling the new values
        //adding the new values to the new diluent value to return a complete (100) formulation
      let newTotal = (newValArrTotal + Number(document.getElementById("diluent-new-num").value)).toFixed(0);
      //console.log(diluentDiff, remainderVal, newMulti, newTotal);
       
    document.getElementById("diluent-num").value = document.getElementById("diluent-new-num").value;  //guaranteed to be displayed
    document.getElementById("1").value = aValNew; //guaranteed to be displayed
    document.getElementById("2") ? document.getElementById("2").value = bValNew : ""; //conditional ternary to check if value is present, if so amend the HTML
    document.getElementById("3") ? document.getElementById("3").value = cValNew : "";
    document.getElementById("4") ? document.getElementById("4").value = dValNew : "";
    document.getElementById("5") ? document.getElementById("5").value = eValNew : "";
    document.getElementById("6") ? document.getElementById("6").value = fValNew : "";
    document.getElementById("7") ? document.getElementById("7").value = gValNew : "";
    document.getElementById("8") ? document.getElementById("8").value = hValNew : "";
    document.getElementById("9") ? document.getElementById("9").value = iValNew : "";
    document.getElementById("10") ? document.getElementById("10").value = jValNew : "";
    document.getElementById("11") ? document.getElementById("11").value = kValNew : "";
    document.getElementById("12") ? document.getElementById("12").value = lValNew : "";
    document.getElementById("13") ? document.getElementById("13").value = mValNew : "";
    document.getElementById("14") ? document.getElementById("14").value = nValNew : "";
    document.getElementById("15") ? document.getElementById("15").value = oValNew : "";
    document.getElementById("16") ? document.getElementById("16").value = pValNew : "";
    document.getElementById("17") ? document.getElementById("17").value = qValNew : "";
    document.getElementById("18") ? document.getElementById("18").value = rValNew : "";
    document.getElementById("19") ? document.getElementById("19").value = sValNew : "";
    document.getElementById("20") ? document.getElementById("20").value = tValNew : "";
    document.getElementById("21") ? document.getElementById("21").value = uValNew : "";
    document.getElementById("22") ? document.getElementById("22").value = vValNew : "";
    document.getElementById("23") ? document.getElementById("23").value = wValNew : "";
    document.getElementById("24") ? document.getElementById("24").value = xValNew : "";
    document.getElementById("25") ? document.getElementById("25").value = yValNew : "";
    document.getElementById("26") ? document.getElementById("26").value = zValNew : "";
    document.getElementById("27") ? document.getElementById("27").value = aaValNew : "";
    document.getElementById("28") ? document.getElementById("28").value = abValNew : "";
    document.getElementById("29") ? document.getElementById("29").value = acValNew : "";
    document.getElementById("30") ? document.getElementById("30").value = adValNew : "";
    //capped at 30 but can be expanded if needed.
    
    document.getElementById("formula-total").innerText = "Formula total: " + newTotal;  //formula total updated for completeness
  }
});
