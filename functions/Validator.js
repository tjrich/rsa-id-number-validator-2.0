// var idNumber = id_number //prompt("Please enter a South African ID number: ")
// var idNumberStr = idNumber.toString();

const Validator = (idNumber) => {

    var idNumberStr = idNumber.toString()
    var YYMMDD,
        MM,
        DD,
        SSSS,
        Z,
        R,
        K

    YYMMDD = idNumberStr.slice(0,6)
    MM = idNumberStr.slice(2,4)
    DD = idNumberStr.slice(4,6)
    SSSS = idNumberStr.slice(6,10)
    Z = idNumberStr.slice(10,11)
    R = idNumberStr.slice(11,12)
    K = idNumberStr.slice(12)

    let i = 0
    let A = 0

    while (i < 12) {
        A = A + parseInt(idNumberStr[i])
        i += 2
    }

    i = 1
    let B = ""
    while (i < 12) {
        B = B + idNumberStr[i]
        i += 2
    }

    let B2 = (2 * parseInt(B)).toString()
    i = 0
    let C = 0

    while (i < B2.length) {
        C += parseInt(B2[i])
        i += 1
    }

    const D = A + C
    const Q = D % 10
    const W = (10 - (D % 10))

    let valid = false

    if ((idNumberStr.length) == 13) {

        if ((parseInt(MM) < 13) && (parseInt(DD) < 32)) {

            if (parseInt(Z) == 0 || parseInt(Z) == 1) {

                if ((parseInt(R) == 8) || (parseInt(R) == 9)){

                    if (((10 - Q) == parseInt(K)) || (Q == 0)) {

                        valid = true
                        console.log("This is a valid RSA ID number")
                    }
                    else console.log("This is not a valid RSA ID number")
                }
                else console.log("This is not a valid RSA ID number")
            }
            else console.log("This is not a valid RSA ID number")
        }
        else console.log("This is not a valid RSA ID number")
    }
    else console.log("This is not a valid RSA ID number")

    return valid
}

// Validator(9707255390081)

module.exports = Validator
