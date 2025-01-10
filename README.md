# Cátedra 3 : Introducción al desarrolo web/móvil

### Estudiante : Benjamín Miranda
### Rut : 21544970-K


## 📥 Instalación e inicio

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/bxnjadev/c-tedra-3-web
   cd c-tedra-3-web
   ```

2. **Restaura las Dependencias**

   Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Configura Tailwind CSS**

   Asegúrate de que el archivo `tailwind.config.js` esté configurado correctamente. Tailwind CSS ya debería estar instalado con el comando anterior.

   Si necesitas verificar la configuración, revisa:

   ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js" // add this line
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
    }
   ```

4. **Lanzar proyecto**
```bash
    ng serve
```