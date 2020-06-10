new ClipboardJS('#btnCopy', {
    text: function () {
        const paragraphs = document.getElementsByTagName("p");
        let result = "";
        for (let i = 0; i < paragraphs.length; i++) {
            result += `${paragraphs[i].innerText}${(i + 1 == paragraphs.length ? '' : '\n\n')}`;
        }

        return result;
    }
});