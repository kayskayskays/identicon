
"use strict";

function padding(string, length) {
    var stringLength = string.length;
    var paddedString = string;
    paddedString += '1';

    while (paddedString.length < length - stringLength) {
        paddedString += '0';
    }

    while (paddedString.length < length) {
        paddedString += string.split("").reverse().join("");
    }

    return paddedString;
}

function hash(string) {
    const prime = BigInt(29791);
    const mod = BigInt(1e9 + 7);

    var i, digest = BigInt(1);

    if (string.length < 32) {
        string = padding(string, 32);
    }

    for (i = 0; i < string.length; i++) {
        digest *= (BigInt(string.charCodeAt(i)) * prime) % mod;
    }

    return (digest % BigInt(1e40 + 7)).toString();
}