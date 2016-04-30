$(document).ready(function() {

  var array = [];

  var monthlySal = 0;

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

    monthlySal += Math.round(values.employeeSalary / 12);

    $('.monTotal').text('Monthly Cost: $' + monthlySal);

    console.log(values);

  });

  function appendDom(empInfo) {

    $('section').append('<div></div>');
    var $el = $('section').children().last();
    $el.append('<div class="employee"><ul><li><p>First Name: ' + empInfo.employeeFirstName + '</p></li>'
               + '<li><p>Last Name: ' + empInfo.employeeLastName + '</p></li>'
               + '<li><p>Employee ID Number: ' + empInfo.employeeNumber + '</p></li>'
               + '<li><p>Job Title: ' + empInfo.employeeJobTitle + '</p></li>'
               + '<li><p class="salary">Salary: $' + empInfo.employeeSalary + '</p></li></ul>'
               + '<button type="button" name="button" class="delBut">Delete Employee</button></div>');

  }

  $('main').on('click', '.delBut', function(){
        $(this).parent().remove();
        var salary = $(this).closest('.employee').find('.salary').text().substring(9);
        monthlySal -= Math.round(salary / 12);
        $('.monTotal').text('Monthly Cost: $' + monthlySal);

  });

});
