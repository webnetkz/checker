import os
import shutil
import glob
import time

# Переходим в каталог клиента и запускаем сборку
os.chdir("./client")
os.system("npm run build")
os.chdir("../")

time.sleep(2)

# Удаляем старые каталоги и файлы
shutil.rmtree("/Users/mac/SincThing/Projects/gazlike/js", ignore_errors=True)
shutil.rmtree("/Users/mac/SincThing/Projects/gazlike/css", ignore_errors=True)

if os.path.exists("./index.html"):
    os.remove("./index.html")

if os.path.exists("./logo.png"):
    os.remove("./logo.png")

time.sleep(2)

# Удаление старых символических ссылок
if os.path.exists("./js"):
    os.remove("./js")
if os.path.exists("./css"):
    os.remove("./css")

# Создаем символические ссылки на новые файлы
os.system("ln -s ./client/dist/* ./")

# Замена строк в JS-файлах
replacement_string = "https://checker.fantamas.com/api"
for file_path in glob.glob("./js/app.*.js"):
    with open(file_path, "r") as file:
        data = file.read()

    data = data.replace("http://localhost:9999/", replacement_string)

    with open(file_path, "w") as file:
        file.write(data)

# Замена ссылок в index.html на относительные
index_file_path = "./index.html"
if os.path.exists(index_file_path):
    with open(index_file_path, "r") as file:
        index_data = file.read()

    # Замена абсолютных путей на относительные
    index_data = index_data.replace('src="/', 'src="./')
    index_data = index_data.replace('href="/', 'href="./')

    # Запись изменений обратно в файл
    with open(index_file_path, "w") as file:
        file.write(index_data)

print("Сборка завершена и обновление ссылок выполнено.")
