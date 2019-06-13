function takeANumber(line, name) {
  var place = (line.indexOf(name)) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return line.shift();
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var string = "The line is currently: ";
    for (var i=0; i<line.length; i++) {
      var place = i+1;
      if (i+1 === line.length) {
        string += `${place}. ${line[i]}`
      }
      else {
        string += `${place}. ${line[i]}, `
      }
    }
    return string;
  }
}
