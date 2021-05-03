## Getting Started

yarn dev

используется ORM prisma и sqlite
файл базы данных присутствует в репозитории, заполненный словами

yarn prisma db seed --preview-feature - выполнит заполняет бд распарсивая документ words.docx, находящийся в корне

yarn prisma migrate --preview-feature - выполнит миграции

с сервера данные передаются в виде redux state в враппере