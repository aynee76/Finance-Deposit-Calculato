function calculateMaturityAmount() {

    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);


    const maturityAmount = principal + (principal * interestRate * tenure) / 100;

    document.getElementById("result").innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`
}

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculateMaturityAmount);