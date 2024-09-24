import { unicodeDictionary, smartWord, irregularWords } from "./unicodeData";

const uD = unicodeDictionary;
const sW = smartWord;
const iW = irregularWords;

let isSmartConverter = false;

const translateWords = (sent, html) => {
  if (isSmartConverter) {
    sent = sent.replace(/\s*\./g, " .").replace(/\s*\?/g, " ?");
  }

  const words = sent.split(" ");
  let result = "";

  words.forEach((word, index) => {
    word = word.replace(/ri\^/g, "ari^");

    if (isSmartConverter) {
      if (!hasSW(word)) {
        if (iW[word]) {
          word = iW[word];
        } else if (word.length > 3) {
          const lastChar = word.slice(-1).toLowerCase();
          const secondLastChar = word.slice(-2, -1).toLowerCase();
          const thirdLastChar = word.slice(-3, -2).toLowerCase();
          const fourthLastChar = word.slice(-4, -3).toLowerCase();

          // Handling transformations based on word endings
          if (
            ["a", "e", "u"].includes(lastChar) &&
            secondLastChar === "h" &&
            thirdLastChar === "c"
          ) {
            word = `${word.slice(0, -3)}chh${lastChar}`;
          } else if (lastChar === "y") {
            word = `${word.slice(0, -1)}ree`;
          } else if (
            (lastChar === "a" &&
              secondLastChar === "h" &&
              thirdLastChar === "h") ||
            (lastChar === "a" &&
              secondLastChar === "n" &&
              ["k", "h", "r"].includes(thirdLastChar)) ||
            (lastChar === "a" &&
              secondLastChar === "r" &&
              ["d", "t"].includes(thirdLastChar) &&
              fourthLastChar === "n")
          ) {
            // These conditions seem to do nothing, possibly placeholders?
          } else if (
            lastChar === "a" &&
            (secondLastChar === "m" ||
              (!isVowel(secondLastChar) &&
                !isVowel(fourthLastChar) &&
                secondLastChar !== "y" &&
                thirdLastChar !== "e"))
          ) {
            word += "a";
          } else if (lastChar === "i" && !isVowel(secondLastChar)) {
            word = `${word.slice(0, -1)}ee`;
          }
        }
      }
    }

    // Handle slashes
    const subs = word.split("/");
    subs.forEach((sub) => {
      if (sub.length !== 0) {
        result += getAllUnicode(sub, html);
      }
    });

    result += " ";
  });

  return result.trim(); // Trim to remove trailing space
};

const hasSW = (s) => {
  for (let sIndex = s.length - 2; sIndex >= 0; sIndex--) {
    if (sW[s.slice(sIndex)]) return true;
  }
  return false;
};

const getUnicode = (t, ll, html) => {
  let unicodeStr = "";
  const charCodes = t.split("+");
  const stopPos =
    ll &&
    isSmartConverter &&
    charCodes &&
    charCodes.length > 1 &&
    charCodes[charCodes.length - 1] === "2381"
      ? 1
      : 0;

  if (charCodes) {
    charCodes.slice(0, charCodes.length - stopPos).forEach((code) => {
      if (code.length > 0) {
        unicodeStr += html ? `&#${code};` : String.fromCharCode(code);
      }
    });
  }

  return unicodeStr;
};

const getAllUnicode = (s, html) => {
  let allUnicode = "";
  let unicodeVal;
  let tryString = s;

  // Perform character replacements in a more concise way
  tryString = tryString
    .replace(/T/g, "^^t^^")
    .replace(/D/g, "^^d^^")
    .replace(/N/g, "^^n^^")
    .replace(/SH/g, "^^sh^^")
    .replace(/Sh/g, "^^sh^^")
    .toLowerCase()
    .replace(/\^\^t\^\^/g, "T")
    .replace(/\^\^d\^\^/g, "D")
    .replace(/\^\^n\^\^/g, "N")
    .replace(/\^\^sh\^\^/g, "Sh");

  let nextTryString = "";

  // Process each character until all are translated
  while (tryString.length > 0) {
    unicodeVal = uD[tryString]; // Find Unicode in dictionary

    if (unicodeVal || tryString.length <= 1) {
      if (unicodeVal) {
        const isLastChar = !(nextTryString.trim().length > 0);
        allUnicode += getUnicode(unicodeVal, isLastChar, html);
      } else {
        allUnicode += tryString;
      }
      tryString = nextTryString;
      nextTryString = "";
    } else {
      nextTryString = tryString.slice(-1) + nextTryString; // Move the last character
      tryString = tryString.slice(0, -1); // Trim last character from tryString
    }
  }

  return allUnicode.length === 0 ? s : allUnicode;
};

const translate = (roman, setUnicode, html, smart) => {
  let input = roman;
  let beginIndex = 0;
  let endIndex = -1;
  let engTokens = {};
  let tokenCount = 1;

  // Process tokens enclosed in { } and replace with masked values
  while (beginIndex > -1 && endIndex < input.length - 1) {
    beginIndex = input.indexOf("{", endIndex + 1);
    if (beginIndex > -1) {
      endIndex = input.indexOf("}", beginIndex + 1);
      if (endIndex === -1) endIndex = input.length - 1;
      const token = input.substring(beginIndex + 1, endIndex); // Remove { }
      const mask = `$-${tokenCount++}-$`;
      engTokens[mask] = token;
      input = input.replace(`{${token}}`, mask);
    }
  }

  let nonSmartTokens = {};
  smartConverter(false);
  if (smart) {
    smartConverter(false); // Disable smart conversion

    beginIndex = 0;
    endIndex = -1;
    tokenCount = 1;

    // Process tokens enclosed in [ ] for non-smart conversion
    while (beginIndex > -1 && endIndex < input.length - 1) {
      beginIndex = input.indexOf("[", endIndex + 1);
      if (beginIndex > -1) {
        endIndex = input.indexOf("]", beginIndex + 1);
        if (endIndex === -1) endIndex = input.length - 1;
        const token = input.substring(beginIndex + 1, endIndex); // Remove [ ]
        const mask = `$-${tokenCount++}-$`;
        nonSmartTokens[mask] = translateWords(token, html);
        input = input.replace(`[${token}]`, mask);
      }
    }

    smartConverter(true); // Re-enable smart conversion
  }

  // Perform the translation of the main input string
  let unicode = translateWords(input, html);

  // Replace non-smart tokens back into the final result
  if (smart) {
    for (const mask in nonSmartTokens) {
      const cleanMask = translateWords(mask, html).trim();
      const cleanToken = nonSmartTokens[mask].replace(/\s$/, "");
      unicode = unicode.replace(cleanMask, cleanToken);
    }
  }

  // Replace English tokens back into the final result
  for (const mask in engTokens) {
    const cleanMask = translateWords(mask, html).trim();
    unicode = unicode.replace(cleanMask, engTokens[mask]);
  }

  // Set the final translated Unicode result
  setUnicode(unicode);
};

const isVowel = (c) => {
  const vowels = "aeiou";
  return vowels.includes(c.toLowerCase());
};

const smartConverter = (smartflag) => {
  if (smartflag) {
    // Enable smart conversion
    Object.keys(sW).forEach((specialWord) => {
      uD[specialWord] = sW[specialWord];
    });
    isSmartConverter = true;
  } else {
    // Disable smart conversion
    Object.keys(sW).forEach((specialWord) => {
      if (uD[specialWord]) uD[specialWord] = null;
    });
    isSmartConverter = null;
  }
};

export default function useUnicodeConverter(
  roman,
  setUnicode,
  isSmart,
  isHtml,
  setIsLimitExceed
) {
  if (roman.length <= 1500) {
    translate(roman, setUnicode, isHtml, isSmart);
    setIsLimitExceed(false);
  } else {
    setIsLimitExceed(true);
    roman.length < 0 && setUnicode("");
  }
}
