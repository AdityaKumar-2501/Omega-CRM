const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/authentication");
const { testRouter, getAllLeads, createLead, updateLead, deleteLead, filterLead,golbalSearch, downloadLeads, assignLead } = require('../controllers/leadController');

// router.get('/', testRouter)
router.get('/get', getAllLeads)
router.post('/post', createLead)
router.put('/update', updateLead)
router.delete('/delete', deleteLead)
router.post('/filter', filterLead);
router.get('/', golbalSearch);

router.post('/assign',verifyToken, assignLead);
// Download route
router.get('/download',verifyToken, downloadLeads);

module.exports = router;