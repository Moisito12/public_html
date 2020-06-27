var reservadas = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "false", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new	null", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "String", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "void", "volatile", "while"]

    var tokens = [ "[", "]","{","}","(",")",";",":","ID","Numero","=",".",","]

    function alerta_tokens() {
      var index_tokens = "";
      for (let i = 0; i < tokens.length; i++) {
        index_tokens += (i + 45) + " " + tokens[i] + "\n";
      }
      alert(index_tokens);
    }

    function alerta() {
      var index = "";
      for (let i = 0; i < reservadas.length; i++) {
        index += (i + 1) + " " + reservadas[i] + "\n";
      }
      alert(index);
      //alert(reservadas.toString().replace(/,/g,"\n"));
    }

    function ejemplo1() {
      document.getElementById("text_root").innerText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt sapien. Sed placerat ac quam vitae faucibus. Morbi non scelerisque nisi. Proin id eleifend mauris. Vestibulum nec dignissim purus. Nullam eget nibh sit amet mi efficitur egestas in a est. Phasellus neque dui, tristique vel lacus nec, tincidunt rutrum libero. Nam nec tortor tellus. Nulla ante risus, sollicitudin non nisi vitae, gravida varius dolor. "
    }

    function ejemplo2() {
      document.getElementById("text_root").innerText = "public class java { public static void main(String[] args) {System.out.println('Hello World'); } }";
    }

    function tokenizar() {
      var token = document.getElementById('text_root').value;
      var expresionRegular = /\[|\]|{|\}|\(|\)|\,|\:|\w+|\s|\=|\.|\=/ig;
      var res = token.match(expresionRegular);
      var token_espacio = "";

      for (let i = 0; i < res.length; i++) {

        var sin_espacios = res[i].trim();

        if (sin_espacios != "") {
          token_espacio += res[i] + "->Token: " + buscartoken(res[i]) + " ";
        }
      }
      document.getElementById('text_token').innerHTML = token_espacio;
    }

    function acomodar() {
      var token = document.getElementById("text_token").value;
      var expresionRegular = /\[|\]|\{|\}|\(|\)|\,|\;|\"|\=|\.|\w+|\s/ig;
      var res = token.match(expresionRegular);
      var token_espacio = "";
      var contador = 1;

      for (let i = 0; i < res.length; i++) {

        var sin_espacios = res[i].trim();
        if (sin_espacios != "") {
          token_espacio += buscartoken2(res[i]) + " ";
          contador++;
          if (contador == 10) {
            token_espacio += "\n";
            contador = 1;
          }
        }
      }
      document.getElementById("text3").innerHTML = token_espacio;
    }


    function buscartoken(enumerador) {
      for (let i = 0; i < reservadas.length; i++) {
        if (enumerador == reservadas[i]) {
          return (i + 1) + " Descripcion: Palabras Reservadas" + "\n";
        }
      }
      for (let i = 0; i < tokens.length; i++) {

        switch (enumerador) {
          case "[":
          case "]":
          case "{":
          case "}":
          case "(":
          case ")":
          case ";":
          case ":":
          case "ID":
          case "Numero":
          case "=":
          case ".":
          case ",":
            return (i + 45) + " Descripcion: Caracter Especial" + "\n";
            break;
          default:
            if (isNaN(enumerador)) {
              return 11 + " Descripcion: Identificador" + "\n";
            } else return 12 + " Descripcion: Numero" + "\n";
        }
      }
      return -1;
    }

    function buscartoken2(enumerador2) {
      for (let i = 0; i < reservadas.length; i++) {
        if (enumerador2 == reservadas[i]) {
          return (i + 1);
        }
      }
      for (let i = 0; i < tokens.length; i++) {

        switch (enumerador2) {
          case "[":
          case "]":
          case "{":
          case "}":
          case "(":
          case ")":
          case ";":
          case ":":
          case "ID":
          case "Numero":
          case "=":
          case ".":
          case ",":
            return (i + 45);
            break;
          default:
            if (isNaN(enumerador2)) {
              return 11;
            } else return 12;
        }
      }
      return -1;
    }


    function downAnalisis() {
      var textToken = document.getElementById("text_token").value;
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToken));
      element.setAttribute('download', "analisis_lexico.txt");

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    function downFuente() {
      var text_root = document.getElementById("text_root").value;
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text_root));
      element.setAttribute('download', "codigo_fuente.txt");

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    function downTokens() {
      var text3 = document.getElementById("text3").value;
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text3));
      element.setAttribute('download', "tokens.txt");

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }