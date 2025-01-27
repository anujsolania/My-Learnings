const element = {
    type: "a",
    props: {
        href: "https://github.com/anujsolania",
        target: "_blank",
        text: "Visit my Github" 
    }
}

function customGenerateHtml() {
    const {type, props} = element

    let html = `<${type}` //<a
    for (const key in props) {
        if (key !== "text") {
            html += ` ${key}="${props[key]}"` //href="" target=""
        }
    }
    html += `>${props.text}</${type}>`

    return html
}

function customRenderHtml(element,divId) {
    const divConatiner = document.getElementById(divId)

    const htmlString = customGenerateHtml(element)

    divConatiner.innerHTML = htmlString
}

customRenderHtml(element,"root")