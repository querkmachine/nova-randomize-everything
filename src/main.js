import { colorHex, colorRGB, colorHSL } from "./generators/color";
import {
  computerAddressIPV4,
  computerAddressIPV6,
  computerAddressMAC48,
  computerAddressMAC64,
} from "./generators/computer-address";
import {
  countryName,
  countryISO3166alpha2,
  countryISO3166alpha3,
  countryISO3166numeric,
} from "./generators/country";
import {
  dateISO8601,
  timeISO8601,
  datetimeISO8601,
} from "./generators/datetime";
import { hashMD5, hashSHA1, hashSHA256 } from "./generators/hash";
import { nameFirst, nameLast, nameFull } from "./generators/name";
import { numberInt, numberFloat, numberBinary } from "./generators/number";
import {
  stringSingleLetter,
  stringAlphanumeric,
  stringAlphabetical,
  stringPassword,
  stringLoremSentence,
  stringLoremParagraph,
} from "./generators/string";
import { uuidV4 } from "./generators/uuid";
import { webURL, webDomainName, webEmail } from "./generators/web";

function insertAtPosition(editor, cb) {
  editor.edit((textEditor) => {
    editor.selectedRanges.reverse().forEach((range) => {
      textEditor.replace(range, cb());
    });
  });
}

function promptForInput(settings = {}) {
  const workspace = nova.workspace;
  workspace.showInputPanel(
    nova.localize(settings.body),
    {
      label: settings.title ? nova.localize(settings.title) : null,
      placeholder: settings.placeholder || null,
      value: settings.value || null,
      secure: settings.secure ? true : false,
    },
    (reply) => {
      if (reply) {
        settings.cb(reply);
      } else if (settings.fallbackValue) {
        settings.cb(settings.fallbackValue);
      }
    }
  );
}

export function activate() {
  nova.commands.register("random.colorHex", (editor) => {
    insertAtPosition(editor, () => colorHex());
  });
  nova.commands.register("random.colorRGB", (editor) => {
    insertAtPosition(editor, () => colorRGB());
  });
  nova.commands.register("random.colorHSL", (editor) => {
    insertAtPosition(editor, () => colorHSL());
  });
  nova.commands.register("random.computerAddressIPV4", (editor) => {
    insertAtPosition(editor, () => computerAddressIPV4());
  });
  nova.commands.register("random.computerAddressIPV6", (editor) => {
    insertAtPosition(editor, () => computerAddressIPV6());
  });
  nova.commands.register("random.computerAddressMAC48", (editor) => {
    insertAtPosition(editor, () => computerAddressMAC48());
  });
  nova.commands.register("random.computerAddressMAC64", (editor) => {
    insertAtPosition(editor, () => computerAddressMAC64());
  });
  nova.commands.register("random.countryName", (editor) => {
    insertAtPosition(editor, () => countryName());
  });
  nova.commands.register("random.countryISO3166alpha2", (editor) => {
    insertAtPosition(editor, () => countryISO3166alpha2());
  });
  nova.commands.register("random.countryISO3166alpha3", (editor) => {
    insertAtPosition(editor, () => countryISO3166alpha3());
  });
  nova.commands.register("random.countryISO3166numeric", (editor) => {
    insertAtPosition(editor, () => countryISO3166numeric());
  });
  nova.commands.register("random.dateISO8601", (editor) => {
    insertAtPosition(editor, () => dateISO8601());
  });
  nova.commands.register("random.timeISO8601", (editor) => {
    insertAtPosition(editor, () => timeISO8601());
  });
  nova.commands.register("random.datetimeISO8601", (editor) => {
    insertAtPosition(editor, () => datetimeISO8601());
  });
  nova.commands.register("random.hashMD5", (editor) => {
    insertAtPosition(editor, () => hashMD5());
  });
  nova.commands.register("random.hashSHA1", (editor) => {
    insertAtPosition(editor, () => hashSHA1());
  });
  nova.commands.register("random.hashSHA256", (editor) => {
    insertAtPosition(editor, () => hashSHA256());
  });
  nova.commands.register("random.nameFirst", (editor) => {
    insertAtPosition(editor, () => nameFirst());
  });
  nova.commands.register("random.nameLast", (editor) => {
    insertAtPosition(editor, () => nameLast());
  });
  nova.commands.register("random.nameFull", (editor) => {
    insertAtPosition(editor, () => nameFull());
  });
  nova.commands.register("random.numberFloat", (editor) => {
    //insertAtPosition(editor, () => numberFloat());
    if (nova.config.get("random.disableNumberRangePrompt", "boolean")) {
      insertAtPosition(editor, () => numberFloat(null));
    } else {
      promptForInput({
        id: "random.numberFloat",
        title: "Number range",
        body: "Enter a lower and upper limit separated by a comma (e.g. 1, 100).",
        placeholder: nova.config.get("random.defaultNumberRange", "string"),
        fallbackValue: nova.config.get("random.defaultNumberRange", "string"),
        cb: (range) => {
          insertAtPosition(editor, () => numberFloat(range || null));
        },
      });
    }
  });
  nova.commands.register("random.numberInt", (editor) => {
    if (nova.config.get("random.disableNumberRangePrompt", "boolean")) {
      insertAtPosition(editor, () => numberInt(null));
    } else {
      promptForInput({
        id: "random.numberInt",
        title: "Number range",
        body: "Enter a lower and upper limit separated by a comma (e.g. 1, 100).",
        placeholder: nova.config.get("random.defaultNumberRange", "string"),
        fallbackValue: nova.config.get("random.defaultNumberRange", "string"),
        cb: (range) => {
          insertAtPosition(editor, () => numberInt(range || null));
        },
      });
    }
  });
  nova.commands.register("random.numberBinary", (editor) => {
    if (nova.config.get("random.disableNumberRangePrompt", "boolean")) {
      insertAtPosition(editor, () => numberBinary(null));
    } else {
      promptForInput({
        id: "random.numberBinary",
        title: "Number range",
        body: "Enter a lower and upper limit separated by a comma (e.g. 1, 100).",
        placeholder: nova.config.get("random.defaultNumberRange", "string"),
        fallbackValue: nova.config.get("random.defaultNumberRange", "string"),
        cb: (range) => {
          insertAtPosition(editor, () => numberBinary(range || null));
        },
      });
    }
  });
  nova.commands.register("random.stringAlphanumeric", (editor) => {
    insertAtPosition(editor, () => stringAlphanumeric());
  });
  nova.commands.register("random.stringAlphabetical", (editor) => {
    insertAtPosition(editor, () => stringAlphabetical());
  });
  nova.commands.register("random.stringPassword", (editor) => {
    insertAtPosition(editor, () => stringPassword());
  });
  nova.commands.register("random.stringSingleLetter", (editor) => {
    insertAtPosition(editor, () => stringSingleLetter());
  });
  nova.commands.register("random.stringLoremSentence", (editor) => {
    insertAtPosition(editor, () => stringLoremSentence());
  });
  nova.commands.register("random.stringLoremParagraph", (editor) => {
    insertAtPosition(editor, () => stringLoremParagraph());
  });
  nova.commands.register("random.uuidV4", (editor) => {
    insertAtPosition(editor, () => uuidV4());
  });
  nova.commands.register("random.webDomainName", (editor) => {
    insertAtPosition(editor, () => webDomainName());
  });
  nova.commands.register("random.webURL", (editor) => {
    insertAtPosition(editor, () => webURL());
  });
  nova.commands.register("random.webEmail", (editor) => {
    insertAtPosition(editor, () => webEmail());
  });
}

export function deactivate() {}
