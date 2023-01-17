import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const { inputName, onInputChange} = useForm({
      inputName: '',
    })

    const onLogin = () => {

      const lastPath = localStorage.getItem('lastPath') || '/'

      login(inputName || 'User')

      navigate(lastPath, {
        replace: true,
      })

    }

    const handleForm = (e) => {
      e.preventDefault()
    }

    return (
      <div className="bg-login d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <h1 
                className="badaboom login__title card-title text-center"
              >
                Heroes App
              </h1>
              <form
                className="form-group"
                onInput={handleForm}
              >
                <label htmlFor="name"
                  className="form-label"
                >
                  Nombre
                </label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Ingrese su nombre"
                  name="inputName"
                  value={ inputName }
                  onChange={onInputChange}
                />
              </form>
              <button
                className="btn btn-primary mt-3"
                onClick={onLogin}
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
