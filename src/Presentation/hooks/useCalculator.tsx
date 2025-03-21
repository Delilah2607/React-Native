import React, { useState } from 'react';

export const useCalculator = () => {
    const [number, setNumber] = useState("0");

    const buildNumber = (numberString: string) => {
        if (numberString === "C") {
            setNumber("0");
            return;
        }

        if (numberString === "Del") {
            if (number.length === 1) {
                setNumber("0");
            } else {
                setNumber(number.slice(0, -1));
            }
            return;
        }

        // Si ya tiene un punto y el usuario quiere agregar otro, no se hace nada
        if (number.includes(".") && numberString === ".") return;

        // Si el número empieza con 0 y no hay punto decimal
        if (number.startsWith("0") || number.startsWith("-0")) {
            // Agregar punto decimal si es el primer dígito
            if (numberString === ".") {
                setNumber(number + numberString);
                return;
            }

            // Si ya hay un punto decimal, agregar el siguiente dígito
            if (numberString === "0" && number.includes(".")) {
                setNumber(number + numberString);
                return;
            }

            // Si el primer dígito no es cero, solo asignarlo
            if (numberString !== "0" && !number.includes(".")) {
                setNumber(numberString);
                return;
            }

            // Agregar el siguiente dígito si es un 0 sin punto
            if (numberString === "0" && !number.includes(".")) {
                setNumber(number + numberString);
                return;
            }
        }

        setNumber(number + numberString);
    };

    return {
        number,
        buildNumber,
    };
};

export default useCalculator;
