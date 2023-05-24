const products = [
  {
    id: 0,
    name: "Филе бедра цыпленка",
    src:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13115/c7f9ea-730x604.JPG?v=3",
    price: 100,
    weigth: 700,
    description:
      "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      mass: "0,7 кг. (595-805 г.).",
      shelfLife: "66 суток.",
      breed: "КОББ 510.",
      madeIn: "Тверская область"
    },
    properties: {
      callories: "1356 ккал./565 кДж.",
      nutritional: " белки - 984 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
    }
  },

  {
    id: 1,
    name: "Филе ягненка",
    src:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13115/c7f9ea-730x604.JPG?v=3",
    price: 200,
    weigth: 700,
    description:
      "Филе ягненка. ягненка содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      mass: "500 кг. (595-805 г.).",
      shelfLife: "10 суток.",
      breed: "КОББ 565400.",
      madeIn: "Морская область"
    },
    properties: {
      callories: "669 ккал./565 кДж.",
      nutritional: " белки - 40 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
    }
  },

  {
    id: 2,
    name: "Кролик",
    src:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13115/c7f9ea-730x604.JPG?v=3",
    price: 350,
    weigth: 700,
    description:
      "Филе Кролик. Кролик содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      mass: "1 кг. (595-805 г.).",
      shelfLife: "6 суток.",
      breed: "КОББ 500.",
      madeIn: "Кроликовская область"
    },
    properties: {
      callories: "135 ккал./565 кДж.",
      nutritional: " белки - 89 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
    }
  },

  {
    id: 3,
    name: "Носорог",
    src:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgaGhwcHBocGhoYGhwcHBwaGhocGRoeIS4lHCErHxocJjgmKy80NTU1GiQ7QDs0Py40NjEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALYBFQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADoQAAIBAgUCBAUCBgEEAgMAAAECEQAhAwQSMUFRYQUicYEGMpGhsRPwFEJSwdHh8SMzYnIVkiSisv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAwACAgIDAQAAAAAAAAABAhEDEiExQRNRFHEiMmEE/9oADAMBAAIRAxEAPwAKBT1FJRT1FeiecdAp6ikBTgKAo6BTwK4KcBQOhwFOApAV0ClY6OCnRXQK6FosKEBThXQK7FKx0cFKnxXAtFjoVKugV2KVgNpyIWNh/r1p2Hh6uYHJPH76U9sWRpSN+Rc9TWObOocXk2x4nLvomTJA7sT1iB9Cd6nxvBm068Ntan0kff7dqqh5WDMqQDpnSQRzOxNWcMsmIUSZmI4IMeUg8964/wAid3Z0/BCqoGOhBggg9DTa0ONlNcB51EWPKt/SZ9vrQLEwypI6Ej3G4PQ9q68WeM/2c2TC4/oiiuGnxXCK6LMRlcNSBCdqccs8TpJ9L/ipc4p1Y1BtXRXIppqQrTdNVZNDKaRUmmuFadhRARTWFTlajZaLJogYVGwqyy1Gy0WFEGmlT4pUWB1RUiinBKeEpWCQ1Vp6inBacBSso4Fp4WkBTgtKxiApwFILTtNFgKnCuRXQtACFOFLTXQtACmkKcErumiwOCn4eHqMCkEp7voGlbt/MdlHaayy5FGP+muODkyvmW1eQfKO8SepJ5q34fmVFnAURAIUWPVoG/eq2BlP1ASpmBN76u6xPI5qV8HcKNBVASrkAyN9P9Q9etebKVu2d0Y0qQYRQgV0JeVuYaAs/zk8WO/TvUuYGHjansCpC6gfNeCGjsYG3X0rO4OYcaVdmVCTIEQQRFh0/1U+EV1gaBcCVa4kRseZ+u9usFhDMYOLJLHVC9I1LJ81ue3eoMPBGomCddiGB8zCYtuGgb/6qbHxSsWKmdpmJiYO0EDbr703CzKExLEkyDzYWvwbT7U066hefJH/8brvhGSCQcNiAwjeDsw+lU3ybggMhW/8AMI+lEMHCbDZnJ8uqdvMJ326bwetaDBzBKSG1df7+lb/kT1qzF4Y3ZkcvhCbNf1/t0q+uUm4Pt/ij2ZwFcTpWQRM8Dn3ih5wkIlG5iAZg9Kz2+y9QW2HHzLqHQjb05FV8z4f/ADJfqv8AMPT+oUbdLRsR96q6AT/SevE960jllF8IljjJdM+UppWtDiZLX8w0uP5uG9etB8zlmQwwj8H0NdkM0ZHJPFKJUK1wrU5Wmla1szorMlRslWitNZaLFRUKUqsaaVOxUcC08LXQKcBSsqjgWuhacBTlFKwo4FpwWnAU4Cix0NC10LTwKcFpWIZFOC08CnAUWOhgSnBacBTgKWwUc00tNSBahzONpAA+Y7WmO57VMp6q2VGOzpDczmhhraC526KOp/xVfIAlvNcseSBabmT/ALqJspILFtXUcn079qt5bKqDBEg86oKz1A3rhnJyds7oRUVSCHh+SRhOoAhyPK0HSNpgbTFDcdmOIS3zX2IiOIm1zfpfir2fw1REKhZup6m3JHNC8XEMjzAjRCkiNJ3tGxkff6ZM1O5lyzKpJAXyxNv9iuM4jcKRt/bauKCSBa9pO1RZ7L6HjmAZiI6je/P3pAFNZZVL4gMrdreWNi3+70xgVMAhu63HNweRTcphh1KPdJ06gPlaxBAIsbCiA8O/SwgpIjDJgiB5ZBJsenHa1NAyHwvFYghmlQAAOViQB1O0z3NFvD8QJqUkACLm1iIvQfAwgIdXkGSNiYvv13Ht6VaSD5TIMkHgiII9f9GmAdbGHbY27DftakyKQRtPIt7ihuISAoMT/NOxBsTb3+1POZKQhsI8p7TzP0oFRM+HpsSWn5Zvf/2/f4pHKht59/wamVpBG8e1V8MspCXBXYm+tfXZT2+ltgY/CXQIBkTsTNu1Q5nJ6xvImdJsfY8H0+9MzGJpcTfoOefuL/SntiRDarbExHpI2H0osloBZvIlJYXX7jswqkaMeJ4zoxZdLLpk+gMEb33H0NUMVFYkpYDcdJ2I7fiuzFnvkjky4a7EqGozVkpTGSt9kc+rIIrlTfp0qe6HoxoWnhalGEKeMKsd5GmiIgtOCiphhinLhijeQaohC08LU4QU9UFLaQ9UQKtOCVZVBUGLjKuLhozBFfVuJkxt2vF+9S5yStlRgm6EEpwSqHxRnDg5Y4iGGDpB4ub6hyImRUvw543h5pCQQmInzoTt/wCSnlD1pObGoWXFSuhKtKBxB9DNSKk8UbsWiKOIwRdTWArPeK+LoiFkAZmPzMAwjsDaB071p874ccQrqTUqmQpYBSTsSNzH96DfGngwOV1hEDITOg8Gx+kDrWUp7OjaOPVWVvAPiNMZlw9CK5MB1AAO4ClYiSRFo3FHMbUGDFCF6xYDrc2H+OK8b8HzGjFRSfKXX8gV7xi4hVE1+dHSZ5BcA6Wjg3g/XqZktS49OZE4eZwTpEcFYuD17WoFiZVkUqwE6oHW8wSfaK0ODk1SGwoHykxs4HU+9ReJ4IZGYbrcg3BWb/S5rIuwHlsEl0tOokHrIuLHr36GhWaxzqOoyxM1p89h6UTGRdnViBwQ1x7zWU8RIGOy/wBLMPcExTQPwE8kxNg2mYmdutx70VyOaDkrqaAJCtFwARp9R13t0oFlsQEQSJJAvwOqn9/eiuMiAsNWsC5ni4iOhBg+tIa8BbCfDgYY8p+ZdvUgHkR+aqYuXZHlfl1KQPaTHazUss4cWWSokHbgyJ7Nt61zO4xbC17ssGwsN+JtYx6igC2HWJI/pIF9rG8i1x9qq4uKCTCkhQSBBhSwuvbzA8bRTcZxA3tBgfzDc/TjvHeq+Fj+c3jzQwgAQwlfSII6H8ABHKZu0bmCQdxA3A7CreLiArZtOoWPI1bG/qKC4uNDSvyjymAZUjzSAbMLi46C/FOx3W6CPQzfQJGk77Bbb+sVQFnMYhKmRdSBJ6AiSCO35+lfCfVqgWLf2Bnfkfg1BgZ4PqVlIdLsDcEA6TDDcQwiuyuoL8og4bbhf/BulwYPc1ID3VmGlSJFgWExMgaj6WoahYPflgHHIL+WAOmx+9XsPEKr5jsCZgiCp2j/AB7ds3hZ5/1mYGBqJ9WUBZJjbcxteq9kmkOAKacEU4Y8gHqAajbGFdqjas43JJnf0RSppxxSqtBbEQanqwqp+oKeuKKl5IE9J8w5VSUXUwvp2LdQDtMbTaYp2UzSYiB0MqfqCN1YcMORUIxaCeII+A5zOAJDf97DH84H8yj+oDf69ZTyRvhUVfGakMKcHFCMPxRGVWVgQ8AbbmbetvxVv9Wj5Yg4yXkvhxQb4qywfB/UBIfClx3UxrH0AM9quri0sWHVkbZgQfQiDUyyxaoI7J2BP4gZrJOgu4Ekcl1IYW7xWKy+vLsMRDDDtxyG6jsaNeHYhy2M6gE6GKtcXXgnpKkGiXjHhWtteEJDXK835jn0rHauM6q9ob4F8Tl2fD0qpZZDN8qdZM7bECdx3rT4+afTc2/Pf3rCeFeHMuOquhRT521ArKJ+fMyj3rY476trz8vNusf7rObS8GkI7MvYGKWvMmO9+0g3/e9Q+J5jUCATBWY6iCrTwQJEill18szMfk3BqnnpKEoJZZ8v9QPzKJ6j70osJqjE5bwj/wDJQt8qszMRudALCw6wv/2r17wPxH9XDUkWgSpHEWt6cdxWZ+HfC8PFDOCW3GnYqP5lINzEbWNubyd8Lwv0WZRMHSV23MgwZ2HSBAAECKuTsiJezOWKEsl0MGAT+zULMRANg5PtYyO1S5fOCANl49Lx+CKp57HBBUHkEHmJAP5P0qLLaIsLG/6LSZhoO/Q/3rJeIZrW7ORuXY24mOv7iiiZo+bpNwOZUg3objKNCsbr8ve7X/J+hoQjuTzCkjprETyu5k/sXoyuKHcQdGsalkWNyGn0A+9Z9cFQD1E2G/lMXE23FTo+kr52GhhcENpBEnT7z6UMaZovDsYa2jYggXj2PYxU+RdvOGIgCbRtERtuL0CyDvxJDam/9jz/AMd6PeHhW1ElSSIHWImDfuZ/1TBFQZgqUiIbUoHMwWAX21VTzLadR1L5VBE2NnMff80/4iBTLK4+fDxEcRyphQDzaX2odmsdtaFBp1o4jeCyB1UgADdWj3qRhFmDS6gNsCONJghhvsvAJiJ713OSHR/MyteZGlSsnVaJEAbnp1NBMfxFtYCoWDsjXJDCU626RE88URy5CYQQvJWAbgkA+QAjgQRzegBjuFxD5gsgKZIDQbqfS4pz4zaVWJLIQQZnUkst+Dc1UzLEgsTpYkSLfMCwbSLwDpBA/N6kXNsrL5ph/mA3DBhqAmBc37mgkJ4OOWQsOZIm/wA0kxyPNNZrXLahaZY8XJUqO9if3sSOM36ZDGT5wCLGCxAmOepoecK4hjcERxxBP/1+9OwDmC8ovpSZ6Zlj5E/9Z2ixkiPaKe1P8mUeI5pYrZHrpUqVH5Uifh/0jApKKtDLNThlTRqa0iBRTmSx+n1tVhcsac2WP3H5FKg4ZHxbK/wzIU/7bFiVtKv8xbpBA2400XyOc16SrBgfm6zAuOg7d6I5zwtMZSjiQfqDwR3rHrhvkMdUcyjSVabMNjHIO0j0qnGy4tPjNktSLQ/A8SR21BiJXnYwTeD+R0qzl/EkJgzYxIBufQi1Q0PT6Mj8U4Jw8zr2GIoJ9R5D+AfeiXhPiEhVLR6jpNrfvau/GKDEGG2GuvRrBB8rCdMQCPNdY9aGeEZPHLD/AKTgb3BVfaBFaPsQinZr1yoxnQnuNV7gEMIi1yoPtRTFy4AIVdgJv07+1Csi+Iw0aRuR/TDRY3+tu1aDF0AEubQJPfk29/rWSV8N1UfBnMXCedK21K4C7XCyonjc7dBU2DgkIFIOoDfv6k0WyLYLnytJB6hiLRJjbp70zP5bTPmaNrWPQ048dEyaaJvD8hKDHTyPGnEHDgW1W2cDnkCDspF4ZUsG1ERxFjuLz+/8SZDxFAhExAE+4AuPam5fN65gyLfk7/SmyECc8jorBbxOmLm4A9zY271l8DxIsx1A2ZgbztoXtbUxERyK1/iubs3lgRuYP9Qt++awPiiBWhQQIA3j5f05n3FNIGy/g5yEAgaixBN7jQw5kzvQ/wDiZXcgSPeTyKjZ9KgA+YybRcsRp/BqhiuFgW6fT2qkhNhHHAXoZF9v7e1MTEvz25vxbmoFzUIQYYEzcbGIkf4qLAzMkAdwO8/j6UqCzZeDYhdsNAwVsMNJHQzFjz5QDzt1ormcTTikwFA03FhOkDbkbCgvhCoFh0MgrJgyVmT1iAeYn6VPi47MSXMBVKrbdZMSOCQahlLwM8dYNl8a8xhme0KWU++k3oLh4hISDsU/DC4NjuBR/wAQzqnKZjUBq/SCDidflHvJH2rLfoaVDEcJBtMalt6SKfoZKg0uGPlaAoIEwdUeYHpYn0ogmLKvcahrtN4M7A3N942NDcYvrOgC6tc9INiCIsLzf0qfK4i6ADfFJSXMC2ki0de/Wj0SOzrsjA/PrgpHAkAyDfiYiq4whMQAC2uOSwg9b2Aj0ruYgwJ0kqAYNgQsEyLX+8Go0RGYah5UA+cHQBaCCDaI5HTeaEBPmMQyiEkkeYybgLtwOY3HFT5QE4iDeFJJiLReeNre5oJkMb9RneLMdK2vpX/P96t5nFaZUxstv31oa7QGjyQLqWkkFjE9Aan/AETUuWQIiryAJ9efvXWcVnaM3ZB/D0ql/VFKq2iLpbBFdEVQDVKHqfmZSgWzFdtVMYlSo1L5Gx6ExYVT8UyGHmE0OO4YfMp4I/xUzUlFHySDQ8y8WymJlMTQzBl0kqyggQZsf6T2vvVnwPxFFdWeQRud9R9ON++1bnxfw1Mxhtht6qf6W4I/Hoa8v8TyL5TFKODMSCpswOzAx224IreElNU/I7cT0LJY+G7yHlCvmUraQBKzOxYngf40mTOGmGir5QtwFdgL3v5oPX3ry/wXPFrAwAZbv6n6881qDmFCCSQOANj3AP5patOinLhd8Q8UYBtBCy1yCCzW5v7U7J5osh1kWAsbmJvNo2B+tQppJBDwY6jf161I6uhlk1q3KkSbSOdQYEcSPxTbJVsgyfxTgvi/pjCcnUNLhbG+4Mgj1ov4jiEqEMieZBsCI0wNp9Okc0JyOBhfqEoyLeCxDIwsCNS6RDCdgwHYC1GsZw8AEkDZgBBCzp0gcc/u5yx+iLLZRiocggGzTa8A3I7R9KNeHYBX0gfiqXhzAwmojpJNxMiR6zRvAJDdDyOooZKM58S5pFVh/wCJAi8+n74rD4uOHxnIiMOBf5SQNZBg33iY4qr8RfE5bGxAFsrsqj/1YqJ+lBMp4mqo+oS7Rc9S2p2t1296tRdE30s+LuynUoiNLEXtJgLfrvfrVXEz2oKOwDH982+9WsJmxkZm5M9zpBj7t+Ok0Fwk819gf789qtJeBWHS2tNKyTYteyiDED+/SfduH41oMInYkGJIEE95396H5/NO0LsnQW1dz19KI+E5RSVUrJJ3uOO21S0kulJ2W8n8UZnDuMMGLCVDRsdjI44ij/hHxEmZBT9MI5B2m5gRC8XEWncVFlshKyU8sxJtFpgx9aCvhfo5rWh0lZJPSAL+sTPoKj+L4V1BDxzxUIiYDEXxJYCJ0qTzzLH/APWjeKmG2WXERhcKDtuDzavOM/8A9Ri4PoOg4H75Jq3ieJOuGuCGjlpMeiz9/pQ4cVApGrVkcsTtEG/m0rdueYgDvQ1czBLcCCOYHG3pUT+Lo2Gg0AlRLGwkkwpMXYC/1od+uxZiN3O0WvIFh6/epUQsNYigCdYtBgSbknfqIk26ihHjWYZEGGT53ALbWXibWJFo/Yixs+qqG3OowvcWB32FDsqzYuLqaWPzMefStIxrrE2aLw9dOhYsok36/iiXhuH+pj3U6ReZA27bncD60KyQZmabWvxfvWu8MwNCAkeZgJ3mN7k7m5JPesZyoZdY0w1xnrmquUdHClKunEpUCohGNNTq9VESpFWhsjZlkPT/ANTpVLXBqwppWPYk/Wp65ioJprLzRY9mXP1awnx5mS2OicKgi0zqJk29IjtW1O1ed/GeGwzDapgqrL6QAQPQg/Wun/m7IUnwGZPOFGBB9tM/2n6EVsfCMb9WCSWeJNig9QNBMeprBYW8XnsKJeH+IqjCFcnY+ZhI9mtXZKN+CUbvBCFmAAkb3LRfidvpRFMfRAGme9o9GAP75rCt40gFk1f0BwjRfY+WYiLg7iiWS+IsTToZNJiAwJQzv8okETsDt9qycWUpGrxsykSwBNhBMgneyg/c9Khxc+ygwYk2N4PEX9N+1DvD8RWjSTJmTwN5/B6Tbar+MqlSgiSeft77fekuA3ZNlfEJJE3G4JuO4NFM78RjL5fExGMlFOk/1MbIvaWj2k8Vkf4Zy4CmTNovEbzQT43xcQ4gw2GlEAZRuGJHzfkdoPWnyUqJToyYxDJJuTMzyeTToO+80rCfX605MSPStwZPkcwUDXMEGOhI/wCfvT0SAoG5N/39/aqaYgDA8f6iiOQOtxaAB9z/AKn61L4DDOWyOtTYTpMT16TU3g2bfCYMoMAzBG52N/8AFUD4i6syrGkeX/Jn2o/4U646LgmAEEyNwbXHa8GspX7KiGc/m1LIFuH85i4BYKv4BPHNZb4qy6ooizYhKiYEIkoSQLLJCj2a54K5nHC44tbDcQBuAhkn6zWd+L89rzDLwgCxuNV2cjtrZh7VMF0qT4A8NNJF59rT2/NTOsksZJN53nrUSsQZHQ9D9Zo14T4E+OofWqpt/UfoIjjmtZNJWzOwejHTHX8n/Vd8SwsTBVNSxrErO8CAbG4/4rWeC+GrgviArqKkaGIE6YmR0kz9Ko/H3mTDbozD6gH+1YxypzUUO7MQTNHvA9KoZ3Y9th6i/NAQKM+BYGtwDMdrE9B710T/AKgjWeFZIlgWHlEMZ5PC37yT6Cj7sKGoxVB2H/NO/XMTXmTk5OxtFvVNJ3oecU1JqMVNMVlqJpVDqpUdDo5HpazIpmELEfSmnr2pkNk1iCTxT0xL1VUSLb70lkihoFItDFqVXqinFTTvHNS0Un0nXMVQ+IckMxhaQPOLodr2kehgfQVMMIgzUyE1Sk4u0M8wy+VdcULofWDdNJ1fTp3o1geB4jkM0IGWRtrO1o/l3rebmT2+1Z/P+Du8hMQovAK6heLAhgY9jXUv+nZ/Qfxrpns1ipljoRIflmEt7dN6HPmtV+ZuefqN60i/CmO3lxMZRhyD5dTtInbUBpmTN4nrRPB+CcsPmOI227Af/wAqK0+eEV12TdgXwnNrYa4PY3GmDe+07Dt9NRlsPXcAqn9R3N/5R7C9W/Dfh3LYJlcMav6mJY+2omPaif6QPtXPkzp/1GytlUVJCiOvU+poT8T+G/xOH5B/1EnRxqHKE9+O/rWgRAJtXMRQvFc8cjjLZDSs8ReZIYQQYg2II3BB2NRMlek/FHwv/ETiYULi8jYP6nhu/PPUee4mWZWKkMGBgqRBU8hq9PHkjNWgaoiw8uWMUUy2GyYZYbyRPTvVbJtPlO4o42CURUIHmBJY/wAt7GObmqkwBOEea0fw2DrL6tKohLG2x/f4oMuAwaHBWYPQDUfmI6QDbtV3DZlGhWs5BI9NpnvWculILeG4qKmNjOBtpWTuzWIA6nUPrQVsqjksQCSSSY5O5+9FPEPBcR8oGSSwYvo/qEASBeW8oIHQ1nctnDPnaBtAsLbg96UKdtMlskzOVj5QB0nY9qJeAZtsB/N/22OlxuUPDfvj0q0pDqCB71TTJqS6BmDKpJBEhrXMzJ3ptqSphVm5KqINvXtvWQ+OnVgijiWPpZaI/DWO74TK19DaR1iBA71lfG89rxnZRKjyjpAkE/WTXNhxtZP0KmgQiSx+lab4ayv/AFFN4AJkdh+x71n8sNRPBrXfCmGSzW2W53kE/wCq6c0qix+jSqF07VGUXaKkcRtXGAFecZ7MiOGo4pjRT2ao3AponZjNIpUsLDMb12q4PZnEPOxp6r70woYM0kxIiedoooL+yTCS5tUuGlz0puFfiuSbn2pNBYv4eZ6b11sP6V1ZqUKdql2HRKRauI17XpBL1xE3i1FCZYG4NOwmEXG96jViNqkUxuKllJj3MmBXTINLBMx1pO0BYMyf7GlQcHjEM1JhvuelqiKSAel6T8etFDTJi1pqFnk0mcAXNorgWbzxTG5EqLNBfirwVMRC6oNajzEWZlA6jkbie46QUwiAfmqwmGReZqoTcZWh7Nrp5XkMBUYncC95I1fyhhxetYuWDeRyCABIix+neqOayn8PiY4A8ph0tI0kloPobe1V8p4q2smJQgkTMg999jI9wa9G9laBMtZ7w58XGChSbAKBEEC57D3pnhvhxbHBPyrBPFl49yRRDI51yyurQqjS8qbKTGoHgnoOlEPDsKFJ2mPpFY5JOMSpOol1z8sWj9isv8XeGI6frKAHX5oESCQNR6kf3rTukgXqh4plx+hiiZGh7exrlxSammjGzKeAsYiLQYO2wn9+tFctpXMaouwG9gDYR6WisxlJAZhMCCPUMLCOwrV5Z0xBqCgGL/8As0Aeu33Fd8uOzaJxUODk3IbzsrNI4nYfT81jMPDBkbjpWz+IsIpgEzbyiPU81kkAawv1G5vtU4Opv7ZCd2x/8AFOoEqvJ3C8yRyPvWx+H0CYeogAvc+nEeu/vQfw/wAJZ8VCZ0QDAMyZFvr+K0eJgAgAWH7tWWeV/wAQk2lSLLkGTPpUDtJiuYiWgdv8VxkACwSTv7fsGudIkTJbvNRYlTs4KrB6/gVUdhMHenEmRLqpVAQaVOhWywuII2vNIYg332oQMUj9/T0rhzG+wt1/fNafGR8gVXGA9iT9a4maA9apqpa/S53pryIgTfilqg2CjZq28gDrzXXzlpt2E/vvQwYnm0xxPfv9qSGZmSAfp7b/APNGiHuwgM8BzAPvXUzYvN7D09aGunHc/Sqy6mJBtuReOgvv+5oUExOTC/8AHR0iYHaetSHxE3NwNtXAO3v7UGOGRGqYI24tySONtt+Ip2DlGd1+YgG8EbAgmBFt+OlNwj7DaQRxPFtlBg9eT07Cl/8AJCNR3EQOsHeqWd8N1OVmxbcbqCbR++aT+EsNP+ZgDtP9v9GsKC5BQ+JAqT/fv2rj53zATxvH2qF/DwFsb+sDa/3O1Pw/Dpgg2gREb8CDfk1nUCr6TY2aOk2tPqdpn0jelh58aVHJtf03/FMTJEAGT6dfeehp2ZyqukczKmNiN4A9DSqIWxmLnwhub8WMGL7+4+tWD4kAPWNjtVRsqjjSQT62uA3SOtOw8EFYIUjgzMwLQTtvTaiFspfEOOThGORv6n/VZrIYpV9LC9iNxuAdu4/tW2xslhsIYA3BIk73GxNuselMxMrghpCqpNjbgC0z+7RW0MqjGqLUqVFDBclH02DiDIP8t/feiOSdgoFlIUEgbAncAxe5PArv6yzAFlIIiRzt96SuhJGmCd537bVE5bLwKU74Ow8wZgtO/NR5p9SOo30xzJBF+KmfLqxlRaBqj92rmiNXIv8Au0H9moWqdk9MtlMiwDWBXUwMXjSjEfXUP2DRDwRChZWUySAJGxF7/ajP6ii1vMW0yOwgEjfao8PG1TO3HYjsPStnmb9F/JXAf8QKcTBKBSTKmBE/eB1+lAct4PiowI0sgMSbBwZgxvt9K0zZwrqt5RufKes3Bt7CoP8A5JTZQTYtwTPU29frRCUoqkiVkod4WxKni9htFrAfWd6nbE3sfSno+sbwbW5k/wBpNRrDWnnqeDtv0rOTuVsblYmxTF/ftO3/ABXEckBjIB2N9u8eu1NxcuQu8mIIJiYkibjioURzY3McG0zYCe0/WhJVwhtljE2Xzb3taBMR9vvUeJAjeeD9TzT1UWE29IA6i2+9VdE6iCQJPrtTigbOvmV5v7gX9PpSqPK+HKZ1knaNNhF/7R9K7VVEVjhgjSZ5IA7T+zTsTCFiVBsevf6V2lTsSRMqHTJi8bXj60sFJhptYRA5E0qVQyvZZfKCFYRJ7em5pi5UaYt/u3NKlU2VQ18uGcgkwAfxP5FPy2APmNyvPJ3ilSobD2T42UGof1WM72E27bU9UCbcmJ5vH9jSpVLdobHOgF+SPpF/rTcUExBtvelSqUP7I3BU3O87Wveu4bEj0I+9tqVKm/Al5La4FyZ2E9OJqNsvtBibm2+3HvSpUhsjw8oA0kySsHoYY/4pucwz+na1+sbxzHelSql5ExYSHSt5Bve5uIv73obmsNjpKkADEUFSBpYELvY8H970qVVHyQ/RzMuUKt/KTEDue8jk7RTMTKnCLNIMkA9eBY7jf7Cu0qv0iUEsuAAWH3vv/qpcbE0nSbyB6dea7SrFmqGlAQDF9x23NQth2naPNaOQAbx23pUqF4F7HYOWXgXm5kyZiJ9Kibw8MCRY3IaSGva5HqftXKVJSaHRx0OpRba99ojYRfc9KkKzwAb7TFr12lVvwiURGQI6ED68zFRMTeOJvF/Su0qpB6Ii5LexP96iw2htP7mLz2pUqslFfGx9Ji/saVKlVJIhs//Z",
    price: 199,
    weigth: 700,
    description:
      "Филе Носорог. Носорог содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      mass: "900000 кг. (595-805 г.).",
      shelfLife: "6 суток.",
      breed: "КОББ 500.",
      madeIn: "Тверская область"
    },
    properties: {
      callories: "135 ккал./565 кДж.",
      nutritional: " белки - 6666 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
    }
  },

  {
    id: 4,
    name: "Оленина",
    src:
      "https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13115/c7f9ea-730x604.JPG?v=3",
    price: 1000,
    weigth: 700,
    description:
      "Филе Оленина. Оленина содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    characteristics: {
      mass: "589 кг. (595-805 г.).",
      shelfLife: "6 суток.",
      breed: "КОББ 500.",
      madeIn: "Тверская область"
    },
    properties: {
      callories: "135 ккал./565 кДж.",
      nutritional:
        " белки - 56668 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
    }
  }
];

export default products;
