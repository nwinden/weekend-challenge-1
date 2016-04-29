$(document).ready(function() {

  var array = [];

  $('.employeeData').on('submit', function(event) {

    event.preventDefault();

    var values = {};

    $.each($('.employeeData').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    // clear out inputs
    $('.employeeData').find('input[type=text]').val('');

    // add to list
    array.push(values);

    // append to DOM
    appendDom(values);

    console.log(values);

  });

  function appendDom(empInfo) {
    $('main').append('<div></div>');
    var $el = $('main').children().last();

    $el.append('<ul><li><p>First Name: ' + empInfo.employeeFirstName + '</p></li>'
               + '<li><p>Last Name: ' + empInfo.employeeLastName + '</p></li>'
               + '<li><p>Employee ID Number: ' + empInfo.employeeNumber + '</p></li>'
               + '<li><p>Job Title: ' + empInfo.employeeJobTitle + '</p></li>'
               + '<li><p>Salary: $' + empInfo.employeeSalary + '</p></li></ul>');
  }


});
