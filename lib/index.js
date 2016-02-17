/**
 * @fileoverview A plugin to forbid the usage of sessionStorage and localStorage
 * @author Tzach Yarimi
 * @copyright 2016 Tzach Yarimi. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex("./rules");



