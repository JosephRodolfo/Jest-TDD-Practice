const caeserCipher = require("./caeserCipher");

test("shifts given string up by parameter, not shifting punctuation marks", () => {
  expect(caeserCipher("abcde...,", 7)).toBe("hijkl...,");
});

test("shifts given string up by parameter, not shifting punctuation marks", () => {
  expect(caeserCipher("The Title Case Sentence, among the hardest to Cipher?", 7)).toBe("Aol Apasl Jhzl Zlualujl, htvun aol ohyklza av Jpwoly?");
});

test("shifts given string up by parameter, not shifting punctuation marks", () => {
  expect(caeserCipher("XYZABCxyzabc....", 3)).toBe("ABCDEFabcdef....");
});
test("shifts given string up by parameter, not shifting punctuation marks", () => {
  expect(caeserCipher("A Most Dangerous Game Zambia Tuesday ZZZDAA?, AA", 4)).toBe("E Qswx Herkivsyw Keqi Deqfme Xyiwhec DDDHEE?, EE");
});
