import express from 'express';

connst router = express.REouter();

router.get('/books' , (req, res) => {
    res.send('Books');
});

export default router;