import React from 'react';

class ElementParser {
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

class App extends React.Component {
  state = {
    contents: [
      {
        "blockName": "core/image",
        "attributes": {
          "id": 90
        },
        "innerHTML": "<figure class=\"wp-block-image\"><a href=\"https://www.lanacion.com.ar/real-madrid-t36281\"><img src=\"http://localhost:8080/wp-content/uploads/2018/01/real-madrid.jpg\" alt=\"\" class=\"wp-image-90\"/></a>\n    <figcaption><a href=\"https://www.lanacion.com.ar/real-madrid-t36281\">Real Madrid </a>tendrá otra oportunidad para encausar su actual temporada en la <a href=\"https://www.lanacion.com.ar/liga-de-espana-t46800\">Liga de España\ufeff</a></figcaption>\n</figure>",
        "elements": [
          {
            "element": "figure",
            "props": {
              "className": "wp-block-image",
              "style": {}
            },
            "children": [
              {
                "element": "a",
                "props": {
                  "href": "https://www.lanacion.com.ar/real-madrid-t36281",
                  "title": "",
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "element": "img",
                    "props": {
                      "src": "http://localhost:8080/wp-content/uploads/2018/01/real-madrid.jpg",
                      "alt": "",
                      "width": null,
                      "height": null,
                      "className": "wp-image-90",
                      "style": {}
                    },
                    "children": []
                  }
                ]
              },
              {
                "element": "figcaption",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "element": "a",
                    "props": {
                      "href": "https://www.lanacion.com.ar/real-madrid-t36281",
                      "title": "",
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "text": "Real Madrid"
                      }
                    ]
                  },
                  {
                    "text": "tendrá otra oportunidad para encausar su actual temporada en la"
                  },
                  {
                    "element": "a",
                    "props": {
                      "href": "https://www.lanacion.com.ar/liga-de-espana-t46800",
                      "title": "",
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "text": "Liga de España"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/paragraph",
        "attributes": null,
        "innerHTML": "<p>MADRID.- <a href=\"https://www.lanacion.com.ar/real-madrid-t36281\">Real Madrid </a>tendrá otra oportunidad para encausar su actual temporada en la <a href=\"https://www.lanacion.com.ar/liga-de-espana-t46800\">Liga de España, </a>en la cual quedó muy lejos del líder <a href=\"https://www.lanacion.com.ar/barcelona-t49310\">Barcelona</a>  y hasta parece tener un panorama complicado en la lucha por ingresar a las copas. Hoy, desde las 12.15 -hora argentina-, recibirá a <a href=\"https://www.lanacion.com.ar/deportivo-la-coruna-t52207\">Deportivo La Coruña, </a>en un encuentro válido por la fecha 20 del campeonato.</p>",
        "elements": [
          {
            "element": "p",
            "props": {
              "className": "",
              "style": {}
            },
            "children": [
              {
                "text": "MADRID.-"
              },
              {
                "element": "a",
                "props": {
                  "href": "https://www.lanacion.com.ar/real-madrid-t36281",
                  "title": "",
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Real Madrid"
                  }
                ]
              },
              {
                "text": "tendrá otra oportunidad para encausar su actual temporada en la"
              },
              {
                "element": "a",
                "props": {
                  "href": "https://www.lanacion.com.ar/liga-de-espana-t46800",
                  "title": "",
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Liga de España,"
                  }
                ]
              },
              {
                "text": "en la cual quedó muy lejos del líder"
              },
              {
                "element": "a",
                "props": {
                  "href": "https://www.lanacion.com.ar/barcelona-t49310",
                  "title": "",
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Barcelona"
                  }
                ]
              },
              {
                "text": "y hasta parece tener un panorama complicado en la lucha por ingresar a las copas. Hoy, desde las 12.15 -hora argentina-, recibirá a"
              },
              {
                "element": "a",
                "props": {
                  "href": "https://www.lanacion.com.ar/deportivo-la-coruna-t52207",
                  "title": "",
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Deportivo La Coruña,"
                  }
                ]
              },
              {
                "text": "en un encuentro válido por la fecha 20 del campeonato."
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/paragraph",
        "attributes": {
          "align": "center"
        },
        "innerHTML": "<p style=\"text-align:center\"><strong>Con 19 puntos menos que Barcelona (51) y un partido aplazado pendiente de disputar, Real Madrid (32) recibe a un necesitado Deportivo La Coruña. &quot;Vamos a pelear todos los partidos que tenemos desde ahora hasta el final&quot;, afirmó ayer Zinedine Zidane, entrenador del Real Madrid. &quot;El &#x27;Depor&#x27; no se merece estar donde está en la tabla. Es un muy buen equipo. Vamos a intentar empezar lo mejor posible y jugar con intensidad&quot;, añadió el técnico francés sobre su rival.</strong></p>",
        "elements": [
          {
            "element": "p",
            "props": {
              "className": "",
              "style": {
                "WebkitTextAlign": "center",
                "textAlign": "center"
              }
            },
            "children": [
              {
                "element": "strong",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Con 19 puntos menos que Barcelona (51) y un partido aplazado pendiente de disputar, Real Madrid (32) recibe a un necesitado Deportivo La Coruña. \"Vamos a pelear todos los partidos que tenemos desde ahora hasta el final\", afirmó ayer Zinedine Zidane, entrenador del Real Madrid. \"El 'Depor' no se merece estar donde está en la tabla. Es un muy buen equipo. Vamos a intentar empezar lo mejor posible y jugar con intensidad\", añadió el técnico francés sobre su rival."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/gallery",
        "attributes": null,
        "innerHTML": "<ul class=\"wp-block-gallery alignnone columns-3 is-cropped\">\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/02/macri.jpg\" alt=\"\" data-id=\"119\" /></figure>\n    </li>\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/02/image.jpeg\" alt=\"\" data-id=\"111\" /></figure>\n    </li>\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/02/luis-miguel-etchevere.jpg\" alt=\"\" data-id=\"138\" /></figure>\n    </li>\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/01/agustina-jpg.jpg\" alt=\"\" data-id=\"84\" /></figure>\n    </li>\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/01/adele.jpg\" alt=\"\" data-id=\"77\" /></figure>\n    </li>\n    <li class=\"blocks-gallery-item\">\n        <figure><img src=\"http://localhost:8080/wp-content/uploads/2018/01/breaking-bad.jpg\" alt=\"\" data-id=\"72\" /></figure>\n    </li>\n</ul>",
        "elements": [
          {
            "element": "ul",
            "props": {
              "className": "wp-block-gallery alignnone columns-3 is-cropped",
              "style": {}
            },
            "children": [
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/02/macri.jpg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/02/image.jpeg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/02/luis-miguel-etchevere.jpg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/01/agustina-jpg.jpg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/01/adele.jpg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "blocks-gallery-item",
                  "style": {}
                },
                "children": [
                  {
                    "element": "figure",
                    "props": {
                      "className": "",
                      "style": {}
                    },
                    "children": [
                      {
                        "element": "img",
                        "props": {
                          "src": "http://localhost:8080/wp-content/uploads/2018/01/breaking-bad.jpg",
                          "alt": "",
                          "width": null,
                          "height": null,
                          "className": "",
                          "style": {}
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/unordered-list",
        "attributes": null,
        "innerHTML": "<ul>\n    <li>Hola</li>\n    <li>Como</li>\n    <li>Estas</li>\n    <li>Tu</li>\n</ul>",
        "elements": [
          {
            "element": "ul",
            "props": {
              "className": "",
              "style": {}
            },
            "children": [
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Hola"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Como"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Estas"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "Tu"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/ordered-list",
        "attributes": null,
        "innerHTML": "<ol>\n    <li>dsdsdsd</li>\n    <li>dsdsdsds</li>\n    <li>dsdsdssd</li>\n    <li>sdsdsdsdd</li>\n    <li>dsdsdsdsd</li>\n    <li>dsdsdsdsds</li>\n    <li>sdsdsdsdsds</li>\n</ol>",
        "elements": [
          {
            "element": "ol",
            "props": {
              "className": "",
              "style": {}
            },
            "children": [
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdsd"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdsds"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdssd"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "sdsdsdsdd"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdsdsd"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdsdsds"
                  }
                ]
              },
              {
                "element": "li",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "sdsdsdsdsds"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/subhead",
        "attributes": null,
        "innerHTML": "<p class=\"wp-block-subhead\">dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd<br/><br/></p>",
        "elements": [
          {
            "element": "p",
            "props": {
              "className": "wp-block-subhead",
              "style": {}
            },
            "children": [
              {
                "text": "dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd"
              },
              {
                "element": "br",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": []
              },
              {
                "element": "br",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/cover-image",
        "attributes": {
          "url": "http://localhost:8080/wp-content/uploads/2018/02/luis-miguel-etchevere.jpg",
          "id": 138
        },
        "innerHTML": "<div class=\"wp-block-cover-image has-background-dim\" style=\"background-image:url(http://localhost:8080/wp-content/uploads/2018/02/luis-miguel-etchevere.jpg)\">\n    <p class=\"wp-block-cover-image-text\">awesome newssssss</p>\n</div>",
        "elements": [
          {
            "element": "div",
            "props": {
              "className": "wp-block-cover-image has-background-dim",
              "style": {
                "backgroundImage": "url(http://localhost:8080/wp-content/uploads/2018/02/luis-miguel-etchevere.jpg)"
              }
            },
            "children": [
              {
                "element": "p",
                "props": {
                  "className": "wp-block-cover-image-text",
                  "style": {}
                },
                "children": [
                  {
                    "text": "awesome newssssss"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/pullquote",
        "attributes": null,
        "innerHTML": "<blockquote class=\"wp-block-pullquote alignnone\">\n    <p>dsdsdsdsddsdds</p><cite>dssddsdsdsdsdsdsd</cite></blockquote>",
        "elements": [
          {
            "element": "blockquote",
            "props": {
              "className": "wp-block-pullquote alignnone",
              "style": {}
            },
            "children": [
              {
                "element": "p",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dsdsdsdsddsdds"
                  }
                ]
              },
              {
                "element": "cite",
                "props": {
                  "className": "",
                  "style": {}
                },
                "children": [
                  {
                    "text": "dssddsdsdsdsdsdsd"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "attrs": [],
        "innerHTML": "\n\n"
      },
      {
        "blockName": "core/audio",
        "attributes": null,
        "innerHTML": "<figure class=\"wp-block-audio\"><audio controls=\"\" src=\"blob:http://localhost:8080/04d31980-30f7-437a-8c7c-75157133bae5\"></audio></figure>",
        "elements": [
          {
            "element": "figure",
            "props": {
              "className": "wp-block-audio",
              "style": {}
            },
            "children": [
              {
                "element": "audio",
                "props": {
                  "src": "blob:http://localhost:8080/04d31980-30f7-437a-8c7c-75157133bae5",
                  "controls": true,
                  "className": "",
                  "style": {}
                },
                "children": []
              }
            ]
          }
        ]
      }
    ]
  };

  render() {
    const contents = this.state.contents;

    return contents
      .reduce((acc, el) => !!el.elements ? acc.concat(el.elements[0]) : acc, [])
      .map((el, idx) => ElementParser.createElement(el, idx));
  }
}

export default App;
