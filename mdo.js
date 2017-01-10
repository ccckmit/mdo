var M = module.exports = {}

M.parseJson = function(json) { // Simplified JSON
	json = json.replace(/(\W)(\w+):/gm, '$1"$2":'); // id: => "id":
	return JSON.parse(json);
}

M.parseValue = function(value) {
  var json;
  try {
    if (value.match(/.*\|.*\n\-+\|[\|\-]+\n/)) {
      json = M.parseTable(value);
    } else {
      json = M.parseJson(value);
    }
  } catch (e) {
    json = value;
  }
  return json;
}

M.parseTable = function(table) {
  var lines = table.split(/\r?\n/), len = lines.length;
  var jsonTable = [], types=[], fields=lines[0].split(/\s*\|\s*/);
  for (var i=0; i<fields.length; i++) {
    var tokens = fields[i].split(":");
    fields[i] = tokens[0].trim();
    types[i] = (tokens.length>=2)?tokens[1].trim():"string";
  }
  for (var i=2; i<len; i++) {
    var values=lines[i].split("|"), vlen = values.length, json={};
    for (var vi=0; vi<vlen; vi++) {
      var value = values[vi].trim();
      switch (types[vi]) {
        case "json"  : value = M.parseJson(value); break;
        case "number": value = parseFloat(value); break;
        case "boolean":value = JSON.parse(value); break;
        case "date"  : value = (new Date(value)).toJSON(); break;
      }
      json[fields[vi]] = value;
    }
    jsonTable.push(json);
  }
  return jsonTable;
}

M.parseMdo = function(mdo) {
  var obj={}, field, valueLines = [], lines = mdo.split(/\r?\n/);
  for (var i=0, len = lines.length; i<len; i++) {
    var line = lines[i];
    var m = line.match(/^([^\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/;<=>?@\[\]^`{|}~]+)\s*:\s*(.*)$/);
    if (m) {
      if (typeof field !== 'undefined')
        obj[field] = M.parseValue(valueLines.join('\n').trim());
      field = m[1]; valueLines = [ m[2] ];
    } else {
      valueLines.push(line);
    }
  }
  if (valueLines.length > 0 && typeof field !== 'undefined')
    obj[field] = M.parseValue(valueLines.join('\n').trim());
  return obj;
}

M.index=function(jsons, field) {
  var map = {};
  for (var i in jsons) {
    var json = jsons[i];
    var key = json[field];
    map[key] = json;
  }
  return map;
}
