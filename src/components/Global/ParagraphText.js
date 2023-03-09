function ParagraphText({ text, margin }) {

    const paragraphText = {
        fontSize: "16px",
        lineHeight: "26px",
        color: "#dadada",
        fontFamily: 'Open Sans',
        fontWeight: "200",
        margin: margin
    }

    return (

        <p style={paragraphText}>
            {text}
        </p>
    );

}

export default ParagraphText;