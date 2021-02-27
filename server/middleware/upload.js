const multer = require('multer')
const moment = require('moment')

//в переменной сторэдж конфигурируем месторасположение файлов
const storage = multer.diskStorage({
    destination(req, file, cb) { //cb callback функция выполнится когда все будет завершено
        cb(null, 'uploads/') //null - то есть нет ошибок - поэтому null, 2ой параметр - это путь куда складываются картинки
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`) //2ой аргумент название файла который сохранен будет в папке uploads (название файла = дата + название файла)
    }
})

//условия которые фильтруют нужные нам файлы
const fileFilter = (req, file, cb) => { //cb - вызывается в тот момент когда мы что решим делать с нашим файлом
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') { //проверка на картинку
        cb(null, true)
    } else {
        cb(null, false) //false - не пропускаемданное значение
    }

}

//лимитируем размер загружаемых картинок
const limits = {
    fileSize: 1024 * 1024 * 5
}

//сделали конфигурацию для загрузки файлов - картинки
module.exports = multer({
    storage,
    fileFilter,
    limits
})