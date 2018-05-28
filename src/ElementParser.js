import React from 'react';

export default class ElementParser {
    static createTextElement = (el, idx) => {
        return (
            <React.Fragment key={`text.${idx}`}>
                {` ${el.text}`}
            </React.Fragment>
        );
    };

    static createElement = (el, idx) => {
        if (!!el.props) {
            el.props.key = `el-${el.element}.${idx}`;
        }

        if (!!el.children && Array.isArray(el.children) && el.children.length > 0) {
            el.children = el.children.map((child, idx) => {
                if (child.hasOwnProperty("text")) {
                    return ElementParser.createTextElement(child, idx);
                } else {
                    return ElementParser.createElement(child, idx);
                }
            });
        } else {
            el.children = null;
        }

        return React.createElement(el.element, el.props, el.children);
    }
}