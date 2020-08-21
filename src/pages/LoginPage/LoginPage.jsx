import React from 'react';
import './LoginPage.scss';
import { useAppData } from '../../state/AppState';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

export function LoginPage() {
  const { getUserData, isAuthorized } = useAppData();

  const validate = values => {
    const errors = {};
    if (!values.login) {
      errors.login = 'Необходимо заполнить это поле';
    } 
  
    if (!values.password) {
      errors.password = 'Необходимо заполнить это поле';
    } else if (values.password.length < 8) {
      errors.password ='пароль должен быть не меньше 8 символов'
    }
     else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
      errors.password ='пароль должен состоять из цифр, латинских строчных и прописных букв'
    }
  
    return errors;
  };


  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      await getUserData(values.login);
      if (!isAuthorized) {
        formik.isValidating = false;
        formik.errors.login = 'пользователь с таким именем не найден';
        return;
      }
    },
  });

  const modificator = 'login-page__input_error';

  return (
    <>
      {isAuthorized
        ? <Redirect to="/terminals" /> 
        :(
          <div className="login-page">
            <h1 className="login-page__title">Войти</h1>
            <form className="login-page__form" onSubmit={formik.handleSubmit}>
              <label className="login-page__label">
                <input
                  className={`login-page__input ${formik.errors.login ? modificator : ''}`}
                  name="login"
                  type="text"
                  placeholder="имя пользователя"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                />
                {formik.errors.login
                  ? <small className="login-page__error-text">{formik.errors.login}</small>
                  : null
                }
              </label>

              <label className="login-page__label">
                <input
                  className={`login-page__input ${formik.errors.password ? modificator : ''}`}
                  name="password"
                  type="password"
                  placeholder="пароль"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password
                  ? <small  className="login-page__error-text">{formik.errors.password}</small>
                  : null
                }
              </label>

              <button className="login-page__button" type="submit">Войти</button>
            </form>
          </div>
        )
      }
    </>
  );
}