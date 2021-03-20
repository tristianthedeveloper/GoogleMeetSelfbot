
class API {


    listeners = [] // function
    latestMessage = {
        name: "", // HIGHLY VOLATILE, WATCH OUT!
        value: "",
    }
    messageArray = []

    constructor() {
        this.listeners = [] // function
        this.latestMessage = {
            name: "", // HIGHLY VOLATILE, WATCH OUT!
            value: "",
        }
        this.messageArray = []

    }
    load() {
        var time = window.performance.now();
        var getSubmitButtonEnabled = function () {
             return $("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.mKBhCf.qwU8Me.RlceJe.kjZr4 > div > div.Bx7THd.PBWx0c.Uy7Qke.XN1AMe > div.ZHdB2e.iy732 > div.fe4pJf.Pdo15c > span.HALYaf.u92yl.KKjvXb > div > div.BC4V9b").children[1]
        };
        var inputForm = document.getElementsByName("chatTextInput")[0];
        /**
         * 
         * @param {String} what the message to be sent.
         * Watch out! Don't use this too often. 
         */
        var sendMessage = function (what) {


            var getSubmitButtonEnabledInside = function () {
                return $("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.mKBhCf.qwU8Me.RlceJe.kjZr4 > div > div.Bx7THd.PBWx0c.Uy7Qke.XN1AMe > div.ZHdB2e.iy732 > div.fe4pJf.Pdo15c > span.HALYaf.u92yl.KKjvXb > div > div.BC4V9b").children[1];
            }
            inputForm.focus();
            inputForm.select()
            inputForm.value = what;
            var element = inputForm;
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            element.dispatchEvent(evt);
            console.log(getSubmitButtonEnabledInside());
            getSubmitButtonEnabledInside().click();
            getSubmitButtonEnabledInside().click();
        };

        /**
         * 
         * Calls a listener function once a message is added, with the name and message of the message.
         * @param {Function} listener 
         */
        var addMessageListener = (listener) => {
            if (listener.length < 1) {
                throw new TypeError("Invalid argmuent : listener needs 2 parameters, will call like listener(name, message)");
            }
            console.log("added message listener: " + listener.name);
            this.listeners.push(listener);
        }


        console.log("Hooked into Google Meet in: " + (window.performance.now() - time) + " nanos.");
        this.setupMessageListener();
        return { sendMessage: sendMessage, getSubmitButtonEnabled: getSubmitButtonEnabled, inputForm: inputForm, addMessageListener: addMessageListener };
    }
    setupMessageListener = () => {

        var className = "GDhqjd";

        console.log("message listener set up init!");
        var interval = setInterval(() => {
            


            let prev = this.messageArray;
            let prevElement = this.messageArray[this.messageArray.length - 1];
            let list = document.getElementsByClassName("GDhqjd");

            if (document.getElementsByClassName(className) === undefined || document.getElementsByClassName(className).length === 0 || prev === list) {
                return;

            }; // skip if no new messages


            let latest = list[list.length - 1]; // this isn't the message, but the message div, that contains data.
            let messageContent = "";
            let elementSender = latest.dataset.senderName;
            
            if (senderName === "You")
                return; // you aren't egotistical, you don't care about your own messages.

            let elementMessagesSize = latest.children[1].childElementCount;

            if (latest == prevElement) {
                // google meet does this weeird thing where it chops messages together, so lets fix that stuff
                if (this.getMessageContentFromHTMLElement(latest) != this.getMessageContentFromHTMLElement(prevElement)) {
                    this.latestMessage.value = this.getMessageContentFromHTMLElement(latest);
                    this.listeners.forEach(func => func(this.latestMessage.name, this.latestMessage.value));
                }

                return;
            }
            this.messageArray.push(latest);

            for (let i = 0; i < elementMessagesSize; i++) { // loop through each text element and add it to the array
                messageContent += (latest.children[1].children[i].dataset.messageText + "\n");
            };

            this.latestMessage.name = elementSender;
            this.latestMessage.value = messageContent;

            this.listeners.forEach(func => func(this.latestMessage.name, this.latestMessage.value));
            
        }, 20);
        window["interval"] = interval;
        console.log("Message Listener Successfully setup!");
        return interval;
    }
    getMessageContentFromHTMLElement = function (element) {
        let elementMessagesSize = element.children[1].childElementCount;
        let messageContent = "";
        for (let i = 0; i < elementMessagesSize; i++) { // loop through each text element and add it to the array
            messageContent += (latest.children[1].children[i].dataset.messageText + "\n");
        };
        return messageContent;
    }

}