
document.addEventListener('DOMContentLoaded', () => {

  const formContainer = document.querySelector('.form-container');
  const wrapper = document.querySelector('.wrapper');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');
  const showLoginFromForgot = document.getElementById('show-login-from-forgot');
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');

  function adjustWrapperHeight() {
    if (formContainer.classList.contains('rotate')) {
      if (document.querySelector('.register-form').style.display === 'block') {
        wrapper.style.height = '480px'; // Height for register form
      }
    } else {
      wrapper.style.height = '400px'; // Height for login form
    }
  }

  function showForm(formToShow) {
    document.querySelectorAll('.form').forEach(form => {
      form.style.display = 'none';
    });
    formToShow.style.display = 'block';
  }

  showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.add('rotate');
    setTimeout(() => {
      showForm(document.querySelector('.register-form'));
      adjustWrapperHeight();
    }, 600); // Delay to ensure rotation is complete
  });

  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.remove('rotate');
    setTimeout(() => {
      showForm(document.querySelector('.login-form'));
      adjustWrapperHeight();
    }, 600); // Delay to ensure rotation is complete
  });

  // showLoginFromForgot.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   formContainer.classList.remove('rotate');
  //   setTimeout(() => {
  //     showForm(document.querySelector('.login-form'));
  //     adjustWrapperHeight();
  //   }, 600); // Delay to ensure rotation is complete
  // });


  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const target = document.querySelector(icon.getAttribute('data-target'));
      const type = target.getAttribute('type') === 'password' ? 'text' : 'password';
      target.setAttribute('type', type);
      icon.classList.toggle('bx-hide');
      icon.classList.toggle('bx-show');
    });
  });

  // Set initial height
  adjustWrapperHeight();

  
});

async function registerUser() {
  let regEmail = document.getElementById('reg-email').value
  let fullName = document.getElementById('reg-name').value
  let regPassword = document.getElementById('register-password').value

  try {
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: regEmail,
            name: fullName,
            password: regPassword
            })
      })
      // console.log(response)
      const data = await response.json()
      
      // console.log(data)
      if(response.status === 201){
        alert(data.message)
        window.location.href = '/';
      }else if(response.status === 400){
        alert(data.message)
      }
    } 
    catch (error) {
      console.log('Error in register form submission')
    }
}

async function loginUser() {
  let email = document.getElementById('login-email').value
  let password = document.getElementById('login-password').value

  try {
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
          })
    })

    // console.log(response)
    const data = await response.json()
    // console.log(data)
    
    if(response.status === 200){
      alert('Login Successfull')
      localStorage.setItem('token', data.token)
      window.location.href = './home.html';
    }else if(response.status === 401){
      alert(data.message)
    }
  } 
  catch (error) {
    console.log('Error in login form submission')

    
  }
}
