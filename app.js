$(document).ready(function() {
  //variable that holds the monthly salary
  var monthlySal = 0;

  //takes the employee data and put appends it to the DOM
  $('.employeeData').on('submit', function(event) {

    event.preventDefault();

    //creates an employee object to store the form data in
    var employee = {};

    $.each($('.employeeData').serializeArray(), function(i, field) {

      employee[field.name] = field.value;

    });

    // clear out inputs in the fields
    $('.employeeData').find('input[type=text]').val('');

    // appends the employee data to the DOM
    appendDom(employee);

    //set and changes the montly cost to the business
    monthlySal += Math.round(employee.employeeSalary / 12);

    $('.monTotal').text('Monthly Cost: $' + monthlySal);

  });

  //the delete button removes an employee from the DOM
  $('main').on('click', '.delBut', deleteEmployee);

  //the function that puts the employees data onto the DOM
  function appendDom(empInfo) {

    $('section').append('<div></div>');
    var $el = $('section').children().last();
    $el.append('<div class="employee"><ul><li><p>First Name: ' + empInfo.employeeFirstName + '</p></li>'
               + '<li><p>Last Name: ' + empInfo.employeeLastName + '</p></li>'
               + '<li><p>Employee ID Number: ' + empInfo.employeeNumber + '</p></li>'
               + '<li><p>Job Title: ' + empInfo.employeeJobTitle + '</p></li>'
               + '<li><p class="salary">Salary: $' + empInfo.employeeSalary + '</p></li></ul>'
               + '<button type="button" name="button" class="delBut">Delete Employee</button></div>');

  employeeSal(empInfo);

  }

  //adds a data field to the newly added employee stuff on the DOM
  function employeeSal (empInfo) {
    $('.employee').last().data('employeeSal', Number(empInfo.employeeSalary));
  }

  // the delete button function that removes the employees salary from the monthly cost
  function deleteEmployee () {
    var salary =$(this).parent().data('employeeSal');
    $(this).parent().remove();
    monthlySal -= Math.round(salary / 12);
    $('.monTotal').text('Monthly Cost: $' + monthlySal);

  }

});
