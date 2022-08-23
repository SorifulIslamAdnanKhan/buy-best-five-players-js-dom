function getInputFiledvalueById(inputFieldId) {

    const getInputFiledValue = document.getElementById(inputFieldId);
    const getInputFiledValueString = getInputFiledValue.value;
    const inputFieldValue = parseFloat(getInputFiledValueString);
    getInputFiledValue.value = '';

    return inputFieldValue;
}

function getTextElementById(elementId) {

    const getTextElementValue = document.getElementById(elementId);
    const getTextElementValueString = getTextElementValue.innerText;
    const getTextElement = parseFloat(getTextElementValueString);
    getTextElementValue.innerText = '';

    return getTextElement;
}

function setTextElement(elementId, newTextElementValue) {

    const textElement = document.getElementById(elementId);
    textElement.innerText = newTextElementValue;
}