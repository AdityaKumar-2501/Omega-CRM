const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/authentication");
const {test, getAllLeads, todaysLeads,weeklyLeads, monthlyLeads, everyMonthLeads, userProfile, yearlyLeads} = require('../controllers/dashboardController.js');

router.get('/',test);
router.get('/leads',getAllLeads)
router.get('/todayleads', todaysLeads)
router.get('/weeklyleads',weeklyLeads )
router.get('/monthlyleads',monthlyLeads)
router.get('/everymonthleads',everyMonthLeads)
router.get('/yearlyleads',yearlyLeads)
router.get('/userprofile',userProfile);

module.exports =  router;