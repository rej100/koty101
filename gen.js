function generate()
{
    let startNum = Number(document.getElementsByName("firstw")[0].value);
    let diff = Number(document.getElementsByName("diff")[0].value);
    let lenght = Number(document.getElementsByName("leng")[0].value);

    let numbers = [];
    for(let i = 0; i<lenght; ++i)
    {
        numbers[i] = startNum + (i * diff);
    }

    let outputString = "Ciąg arytmetyczny zawiera wyrazy: ";
    for(let i = 0; i<lenght; ++i)
    {
        outputString += numbers[i] + ", ";
    }
    if(outputString != "Ciąg arytmetyczny zawiera wyrazy: ")
    {
        outputString = outputString.slice(0, -2);
    }

    document.getElementsByName("outputBox")[0].innerHTML = outputString;
}