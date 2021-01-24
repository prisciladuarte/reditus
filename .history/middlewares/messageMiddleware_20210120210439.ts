import * as messages from "../strings/pt/messages.json";
// import * as messages from "../strings/${locale}/messages.json";


const defaultLocale = "pt";

export async function getMessage(key: string) {

    if (messages[key] == True){
        return messages[key]
    }
    else {
        console.log(`Could not look up message with key ${key}`)
    }
}

console.log(getMessage("invalid_data"));
export default getMessage;