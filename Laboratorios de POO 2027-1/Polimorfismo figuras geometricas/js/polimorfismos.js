class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

// ==========================================
// 1: CÍRCULO
// ==========================================
class Circulo extends Figura {
  #radio;

  constructor(radio) {
    super("Círculo");
    this.#radio = radio;
  }

  calcularArea() {
    return Math.PI * this.#radio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.#radio;
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base;
  #altura;

  constructor(base, altura) {
    super("Rectángulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura);
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #base;
  #altura;

  constructor(base, altura) {
    super("Triángulo Rectángulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return (this.#base * this.#altura) / 2;
  }

  calcularPerimetro() {
    const hipotenusa = Math.sqrt(this.#base ** 2 + this.#altura ** 2);
    return this.#base + this.#altura + hipotenusa;
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================

const circulo = new Circulo(5);
console.log(`${circulo.getNombre()} - Área: ${circulo.calcularArea().toFixed(2)} - Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`);

const rectangulo = new Rectangulo(4, 6);
console.log(`${rectangulo.getNombre()} - Área: ${rectangulo.calcularArea()} - Perímetro: ${rectangulo.calcularPerimetro()}`);

const triangulo = new TrianguloRectangulo(3, 4);
console.log(`${triangulo.getNombre()} - Área: ${triangulo.calcularArea()} - Perímetro: ${triangulo.calcularPerimetro()}`);