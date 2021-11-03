# calculadora-nomina-dominicana

Función para calcular las retenciones de ley para empleados dominicanos / Function that calculates deductions for dominican employees.

## Instalación / Installation

CDN

```html
<script src="https://unpkg.com/calculadora-nomina-dominicana/src/index.min.js"></script>
```

NPM

```bash
npm install calculadora-nomina-dominicana
```

Yarn

```bash
yarn add calculadora-nomina-dominicana
```

## Uso / Usage

```javascript
import calculateDominicanPayroll from 'calculadora-nomina-dominicana';

/**
 * @param {number} monthlySalary - Salario mensual
 */
calculateDominicanPayroll(45000);

// Retorna un objeto con la estructura siguiente / Returns an object with the following structure
const payroll = {
    /** Salario mensual */
    monthlySalary: 45000,
    /** Salario neto (sin retenciones) */
    netMonthlySalary: 41192.175,
    /** Seguro Familiar de Salud */
    sfs: 1368,
    /** Administradora de Fondos de Pensiones */
    afp: 1291.5,
    /** Impuesto Sobre la Renta */
    isr: 1148.325,
    /** Retenciones */
    deductions: 3807.825
};

// La moneda utilizada es el peso dominicano / The currency used is the dominican peso
```
