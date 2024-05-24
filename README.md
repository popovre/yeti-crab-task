Приложение для управления заявками на доставку.

Запустить приложение нужно в следующем порядке:

1. Для запуска приложения - открыть терминал ~/Documents/reps/yeti-crab-task
   Выполнить в консоли:
   git checkout master
   pnpm i
   pnpm run dev
2. Для запуска сервера - открыть второй терминал ~/Documents/reps/yeti-crab-task
   Выполнить в консоли:
   cd simple_api/
   pnpm i
   cd ..
   pnpm start-server
3. Выключить КЭШ во вкладке network в браузере

Документация для REST API представлена в директории ~/Documents/reps/yeti-crab-task/simple_api/README.md
