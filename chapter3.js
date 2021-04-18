document.getElementById("submit").onsubmit = heeHaw;

function heeHaw() {
    let number = document.getElementById("number").value;

    if (number === "") {//if empty
        document.write("Input is empty");
    } else if (number < 1) {//input is negative
        document.write("Positive integer required");
    } else if (!number.match(/[\d]/)) {
        document.write("Non-number entered");
    } else {
        for (let i = 1; i <= number; i++) {
            if ((i % 3) === 0) {
                if ((i % 5) === 0) {
                    document.write("Hee Haw!<br>");
                } else {
                    document.write("Hee!<br>");
                }
            } else if ((i % 5) === 0) {
                document.write("Haw!<br>");
            } else {
                document.write(i + "<br>");
            }
        }
    }
}