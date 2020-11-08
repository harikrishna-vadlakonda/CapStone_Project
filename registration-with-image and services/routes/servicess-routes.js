const express = require('express');
const {check} = require('express-validator');

const servicessControllers = require('../controllers/servicess-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', servicessControllers.getAllServicess);

router.get('/:servicessbyid', servicessControllers.getServicessById);

router.get('/user/:usersbyid', servicessControllers.getServicessByUserId);
router.get('/search/:query', servicessControllers.searchServicess);
router.use(checkAuth);

router.post(
    '/',
    fileUpload.single('image'),
    [
        check('name')
            .not()
            .isEmpty(),
        check('mobilenumber').not().isEmpty(),
        check('gender').not().isEmpty(),
        check('price').not().isEmpty(),
        check('city').not().isEmpty(),
    ],
    servicessControllers.createServicess
);

router.patch(
    '/:servicessbyid',
    fileUpload.single('image'),
    [
        check('name'),
        check('mobilenumber'),
        check('gender'),
        check('price'),
        check('city'),        
    ],
    servicessControllers.updateServicess
);

router.delete('/:servicessbyid', servicessControllers.deleteServicess);


module.exports = router;