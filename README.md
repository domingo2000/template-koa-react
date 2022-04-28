# Proyecto Semestral - Entrega 2

El siguiente proyecto contiene una aplicación web montada con las siguientes componentes dockerizadas
1. Backend en node + KOA + TS
2. Frontend en React
3. Ngingx como reverse proxy para el backend

## Comandos:
Todos los comandos utiles para levantar y manejar la app se encuentran en el makefile, se puede migrar, seedear, abrir consolas, ver logs y diferentes tareas rutinarias corriendo comandos más sencillos, revisen el makefile. Cualquier comando que usen mucho metanlo ahí y dejenlo porque probablemente todos los usemos.

## Ejecución:

Para levantar todos los servicios localmente y correr la app completa
```
make up
```

Para destruir los container con la data correr
```
make down
```

Los puertos por default son
3000: Backend
3001: Frontend

La incialización completa del backend luego de ya levantada la app hace lo siguiente:
```
make migrate
make seed
```

## Dependencias claves de desarrollo

- Typescript: Variables tipadas, interfaces etc...
- Eslint: Linter, si quieren agreguen o saquen reglas en el archivo .eslintconfig

Nota: al agregar una dependencia con yarn add {dependency} localmente, esta no se instala en el container, por lo que se debe correr el add del makefile para no tener que buildear todo el rato, y luego correr yarn install para que también se instale la librería localemente y no haya errores de linter y importación de modulos.<br>
### Ejemplo: Agregar librería al backend
```
make add cmd="faker"
cd backend
yarn install
```
### Ejemplo: Agregar librería al frontend
```
make add-frontend cmd="faker"
cd frontend
yarn install
```

## Templates útiles para no escribir cosas de más
En la carpeta templates-backend hay algunos templates de
- CRUD de API
- Migraciones
- Seeds
- Modelos
  - Solo solin solito
  - Asociado 1-n
  - Asociado n-n

Si le pillan un bug o los pueden mejorar bienvenido sea pa que podamos copiar y pegar al armar cosas (ademas quiero ir mejorar el template pa usarlo en otros ramos, pega etc.. asi que aportarían :smile: .

## Directorios:
La idea es seguir la convención de carpetas y nombres de archivos que ya hay para encontrar rápido todo pero se explica igual rápidamente algunas cosas que podrían no quedar claras:

- `backend/`
  - `src`
    - `config/*`: Configuración de la base de datos, mailer, url de una api externa o cualquier otra configuración de ese estilo que sea muy propensa a cambiar al cambiar algún tipo de servicio externo de la app.
    - `routes/* + router.ts` Todas las rutas de la app, tanto de la api, así como si también se levanta alguna vista o ruta extra en la aplciación.

- `frontend/`
  - `src`
    - `Components/*`: Todos los componentes que armemos nosotros para la app, la idea es nunca pasar estos como vistas, que solo sean partes reutilizables
    - `Views/*`: Todas las vistas que si se renderean en alguna ruta, la idea seguir la convención `ResourceView`
    - `Routes.tsx`: Archivo con todas las rutas en el `BrowserRouter` de react para ir renderizando las vistas` (Ojo, se tienen que añadir a la navbar también si quieren moverse por la navbar).
- `nginx/`: Configuraciones de nginx (La idea es tener una local y otra para producción con SSL)
- `templates-backend/`: Templates mencionados anteriormente