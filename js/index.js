$('#pass-toogle').click(() => {
  if ($('.form__group.form__group--password').hasClass('open')) {
    $('.form__group.form__group--password').addClass('secret');
    $('.form__group.form__group--password').removeClass('open');
    $('.form__group.form__group--password .form__input').prop('type', 'password');
  } else {
    $('.form__group.form__group--password').addClass('open');
    $('.form__group.form__group--password').removeClass('secret');
    $('.form__group.form__group--password .form__input').prop('type', 'text');
  }
});

$('#email').keyup(() => {
  validateEmail();
});

$('#email').blur(() => {
  validateEmail();
});

const validateEmail = () => {
  if (isValidEmail()) {
    $('#email').parent().removeClass('form__group--invalid');
  } else {
    $('#email').parent().addClass('form__group--invalid');
  }
};

const isValidEmail = () => {
  const email = $('#email').val();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.length > 0 && regex.test(email);
};

$('#password').keyup(() => {
  validatepassword();
});

$('#password').blur(() => {
  validatepassword();
});

const validatepassword = () => {
  if (isValidPassword()) {
    $('#password').parent().removeClass('form__group--invalid');
  } else {
    $('#password').parent().addClass('form__group--invalid');
  }
};

const isValidPassword = () => {
  const password = $('#password').val();
  return password.length >= 6;
};

const validForm = () => {
  return isValidEmail() && isValidPassword();
};

$('#submit').click((e) => {
  if (!validForm()) {
    e.preventDefault();
  }
});