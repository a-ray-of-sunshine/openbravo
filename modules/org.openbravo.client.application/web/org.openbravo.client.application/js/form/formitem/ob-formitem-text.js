/*
 *************************************************************************
 * The contents of this file are subject to the Openbravo  Public  License
 * Version  1.1  (the  "License"),  being   the  Mozilla   Public  License
 * Version 1.1  with a permitted attribution clause; you may not  use. this
 * file except in compliance with the License. You  may  obtain  a copy of
 * the License at http://www.openbravo.com/legal/license.html
 * Software distributed under the License  is  distributed  on  an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific  language  governing  rights  and  limitations
 * under the License.
 * The Original Code is Openbravo ERP.
 * The Initial Developer of the Original Code is Openbravo SLU
 * All portions are Copyright (C) 2011-2012 Openbravo SLU
 * All Rights Reserved.
 * Contributor(s):  ______________________________________.
 ************************************************************************
 */


// == OBTextItem ==
// Input for normal strings
isc.ClassFactory.defineClass('OBTextItem', isc.TextItem);

isc.OBTextItem.addProperties({
  operator: 'iContains',
  validateOnExit: true,
  itemHoverHTML: function (item, form) {
    if (this.isDisabled()) {
      return this.getValue();
    }
  }
});

isc.ClassFactory.defineClass('OBTextFilterItem', isc.OBTextItem);

isc.OBTextFilterItem.addProperties({
  allowExpressions: true,

  // solve a small bug in the value expressions
  buildValueExpressions: function () {
    var ret = this.Super('buildValueExpressions', arguments);
    if (isc.isA.String(ret) && ret.contains('undefined')) {
      return ret.replace('undefined', '');
    }
    return ret;
  }
});