import {
  countryName,
  countryISO3166alpha2,
  countryISO3166alpha3,
  countryISO3166numeric,
} from "./generators/country";
import { nameFirst, nameLast, nameFull } from "./generators/name";
import { numberInt, numberFloat } from "./generators/number";
import { uuidV4 } from "./generators/uuid";

function insertAtPosition(editor, cb) {
  editor.edit((textEditor) => {
    editor.selectedRanges.reverse().forEach((range) => {
      textEditor.replace(range, cb());
    });
  });
}

function promptForInput(settings = {}) {
  let request = new NotificationRequest(settings.id);
  if (settings.title) request.title = nova.localize(settings.title);
  if (settings.body) request.body = nova.localize(settings.body);
  if (settings.value) request.textInputValue = settings.value;
  if (settings.placeholder) request.textInputPlaceholder = settings.placeholder;
  request.type = settings.secure ? "secure-input" : "input";
  request.actions = [nova.localize("OK"), nova.localize("Cancel")];

  let promise = nova.notifications.add(request);
  promise.then(
    (reply) => {
      if (typeof reply.actionIdx !== "undefined" && reply.actionIdx === 0) {
        settings.cb(reply.textInputValue);
      }
    },
    (error) => {
      console.log(error);
    }
  );
}

export function activate() {
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
        title: "Enter number range.",
        body: "Enter range separated by a dash.",
        placeholder: nova.config.get("random.defaultNumberRange", "string"),
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
        title: "Enter number range.",
        body: "Enter range separated by a dash.",
        placeholder: nova.config.get("random.defaultNumberRange", "string"),
        cb: (range) => {
          insertAtPosition(editor, () => numberInt(range || null));
        },
      });
    }
  });
  nova.commands.register("random.uuidV4", (editor) => {
    insertAtPosition(editor, () => uuidV4());
  });
}

export function deactivate() {}
