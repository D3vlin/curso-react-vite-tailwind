import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";

function Signin() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //Account
  const parsedAccount = JSON.parse(localStorage.getItem('account'))
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const renderLogin = () => {
    return (
      <div className="flex flex-col w-80">
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light text-sm">Email: </span>
            <span>{parsedAccount?.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">Password: </span>
            <span>{parsedAccount?.password}</span>
          </p>
          <Link to='/'>
            <button
              className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}>
              Log In
            </button>
          </Link>
          <div className="text-center">
            <a href="/" className="font-light text-xs underline underline-offset-4">Forgot my password</a>
          </div>
          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            onClick={() => setView('create-user-info')}
            disabled={hasUserAnAccount}>
            Sign Up
          </button>
        </div>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">Your Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="email@email.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">Your Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to={'/'}>
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAccount()} >
            Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  const handleSignIn = () => {
    const stringifiedSingOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSingOut)
    context.setSignOut(false)

    return <Navigate replace to={'/'} />
  }

  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)

    handleSignIn()
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export { Signin };