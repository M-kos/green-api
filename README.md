# GREEN-API MAX Chat

Небольшое React-приложение для обмена текстовыми сообщениями через GREEN-API MAX.

### Необходим активный инстанс GREEN-API MAX с `idInstance` и `apiTokenInstance`.

## Запуск локально

1. Установите зависимости:

   ```bash
   npm ci
   ```

2. Создайте локальный файл `.env` на основе шаблона:

   ```bash
   cp .env.template .env
   ```

3. Убедитесь, что в `.env` указан URL API GREEN-API:

   ```dotenv
   VITE_API_URL=https://someurl
   ```

4. Запустите dev-сервер:

   ```bash
   npm start
   ```

5. Откройте [http://localhost:3000](http://localhost:3000).
6. В форме входа введите `idInstance` и `apiTokenInstance` своего инстанса. Приложение проверит состояние инстанса перед
   открытием чата.

## Доступные команды

```bash
npm start       # Запуск dev-сервера на http://localhost:3000
npm run build   # Проверка TypeScript и production-сборка
npm run lint    # Проверка ESLint
```
